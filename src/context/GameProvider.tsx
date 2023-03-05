import { GameContext } from "./GameContext";
import { ReactNode, useCallback, useMemo, useState } from "react";
import { GameMap, GameState } from "../types/game";
import { getGameMap } from "../helpers/getGameMap";
import { MAP_SIZE } from "../vars/game";


interface Props {
  children: ReactNode
}

export const GameProvider = ( { children }: Props ) => {
  const [ gameState, setGameState ] = useState( GameState.NOT_STARTED );
  const [ map, setMap ] = useState<GameMap>( getGameMap( MAP_SIZE, 0 ) );
  const [isMouseDown, setMouseDown] = useState( false );
  const [ flagsCount, setFlagsCount ] = useState( 0 );
  const [openedCellsCount, setOpenedCellsCount] = useState( 0 );

  const toggleIsMouseDown = useCallback(() => setMouseDown(!isMouseDown), [isMouseDown]);

  const defaultValue = useMemo( () => (
    {
      gameState,
      setGameState,
      map,
      setMap,
      isMouseDown,
      toggleIsMouseDown,
      flagsCount,
      setFlagsCount,
      openedCellsCount,
      setOpenedCellsCount
    }), [ gameState, map, isMouseDown, flagsCount ] )

  return (
    <GameContext.Provider value={ defaultValue }>
      { children }
    </GameContext.Provider>
  )
}