import { GameContext } from "./GameContext";
import { ReactNode, useMemo, useState } from "react";


interface Props {
  children: ReactNode
}

export const GameProvider = ( { children }: Props ) => {
  const [ isGameStarted, setIsGameStarted ] = useState( false );

  const defaultValue = useMemo(() => ({ isGameStarted, setIsGameStarted }), [isGameStarted])

  return (
    <GameContext.Provider value={ defaultValue }>
      { children }
    </GameContext.Provider>
  )
}