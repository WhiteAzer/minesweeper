import { CellState, GameMap } from "../types/game";

export const showFlags = ( map: GameMap ) => {
  for ( let x = 0; x < map.length; x++ )
    for ( let y = 0; y < map.length; y++ )
      if ( map[ x ][ y ].inner === -1 )
        map[ x ][ y ].state = CellState.FLAG;
}