import { CellState, GameMap } from "../types/game";

export const showBombs = ( map: GameMap, i: number, j: number ) => {
  for ( let x = 0; x < map.length; x++ )
    for ( let y = 0; y < map.length; y++ )
      if ( map[ x ][ y ].inner === -1 )
        if ( x === i && y === j )
          map[ x ][ y ].state = CellState.CLICKEDBOMB;
        else
          map[ x ][ y ].state = CellState.SELECTED;
}