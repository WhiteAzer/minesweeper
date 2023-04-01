import { CellState, GameMap } from "../types/game";

export const cleanMap = ( map: GameMap, i: number, j: number ): number => {
  if ( map[ i ][ j ].inner !== 0 ) {
    map[ i ][ j ].state = CellState.SELECTED;
    return 1;
  }

  const queue: Array<[ number, number ]> = [ [ i, j ] ];
  let openedCellsCount = 0;

  while ( queue.length ) {
    const [ x, y ] = queue.shift();
    map[ x ][ y ].state = CellState.SELECTED;
    openedCellsCount++;

    if ( map[ x ][ y ].inner === 0 ) {
      if ( map[ x - 1 ] ) {
        if ( map[ x - 1 ][ y ].state === CellState.ACTIVE ) queue.push( [ x - 1, y ] );
        if ( map[ x - 1 ][ y - 1] && map[ x - 1 ][ y - 1].state === CellState.ACTIVE ) queue.push( [ x - 1, y - 1] );
        if ( map[ x - 1 ][ y + 1] && map[ x - 1 ][ y + 1].state === CellState.ACTIVE ) queue.push( [ x - 1, y + 1] );
      }
      if ( map[ x + 1 ]) {
        if ( map[ x + 1 ][ y ].state === CellState.ACTIVE ) queue.push( [ x + 1, y ] );
        if ( map[ x + 1 ][ y - 1] && map[ x + 1 ][ y - 1].state === CellState.ACTIVE ) queue.push( [ x + 1, y - 1] );
        if ( map[ x + 1 ][ y + 1] && map[ x + 1 ][ y + 1].state === CellState.ACTIVE ) queue.push( [ x + 1, y + 1] );
      }
      if ( map[ x ][ y + 1 ] && map[ x ][ y + 1 ].state === CellState.ACTIVE ) queue.push( [ x, y + 1 ] );
      if ( map[ x ][ y - 1 ] && map[ x ][ y - 1 ].state === CellState.ACTIVE ) queue.push( [ x, y - 1 ] );
    }
  }

  return openedCellsCount;
}