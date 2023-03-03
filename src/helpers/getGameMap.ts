import { CellState, GameMap } from "../types/game";

const incrementCell = ( map: GameMap, i: number, j: number ) => {
  if ( map[ i ] && map[ i ][ j ] && map[ i ][ j ].inner !== -1 ) map[ i ][ j ].inner++;
}

const setSurroundings = ( map: GameMap, i: number, j: number, size: number ) => {
  for ( let di = -1; di <= 1; di++ )
    for ( let dj = -1; dj <= 1; dj++ ) {
      if ( di === 0 && dj === 0 ) continue;
      incrementCell( map, i + di, j + dj );
    }

  return map;
}

export const getGameMap = ( size: number, bombsCount: number, initialCoords?: [ number, number ] ): GameMap => {
  const map: GameMap = new Array( size );

  for ( let i = 0; i < size; i++ ) {
    map[ i ] = [];
    for ( let j = 0; j < size; j++ ) {
      map[ i ][ j ] = {
        inner: 0,
        state: CellState.ACTIVE
      }
    }
  }

  for ( let count = 0; count < bombsCount; count++ ) {
    const i = Math.floor( Math.random() * size );
    const j = Math.floor( Math.random() * size );

    if ( map[ i ][ j ].inner === -1 || (initialCoords && i === initialCoords[ 0 ] && j === initialCoords[ 1 ]) ) {
      count--;
      continue;
    }

    map[ i ][ j ].inner = -1;

    setSurroundings( map, i, j, size );
  }

  // if ( initialCoords ) map[ initialCoords[ 0 ] ][ initialCoords[ 1 ] ].state = CellState.SELECTED;

  return map;
}