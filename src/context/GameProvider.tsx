import { GameContext } from "./GameContext";
import { ReactNode, useState } from "react";
import { GameState, IGameContext } from "../types/game";
import { getGameMap } from "../helpers/getGameMap";
import { MAP_SIZE } from "../vars/game";


interface Props {
  children: ReactNode
}

export const GameProvider = ( { children }: Props ) => {
  const [ gameContext, setGameContext ] = useState<IGameContext>( {
    map: getGameMap( MAP_SIZE, 0 ),
    flagsCount: 0,
    gameState: GameState.NOT_STARTED,
    isMouseDown: false,
    openedCellsCount: 0
  } );

  return (
    <GameContext.Provider value={ { gameContext, setGameContext } }>
      { children }
    </GameContext.Provider>
  )
}