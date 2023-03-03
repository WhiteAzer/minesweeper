import { GameContext } from "./GameContext";
import { ReactNode, useMemo, useState } from "react";
import { GameMap, GameState } from "../types/game";
import { getGameMap } from "../helpers/getGameMap";


const size = 16;

interface Props {
  children: ReactNode
}

export const GameProvider = ( { children }: Props ) => {
  const [ gameState, setGameState ] = useState( GameState.NOTSTARTED );
  const [ map, setMap ] = useState<GameMap>( getGameMap( size, 0 ) );

  const defaultValue = useMemo( () => (
    {
      gameState,
      setGameState,
      map,
      setMap
    }), [ gameState, map ] )

  return (
    <GameContext.Provider value={ defaultValue }>
      { children }
    </GameContext.Provider>
  )
}