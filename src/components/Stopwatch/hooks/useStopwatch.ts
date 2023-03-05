import { useContext, useEffect, useRef, useState } from "react";
import { GameContext } from "../../../context/GameContext";
import { GameState } from "../../../types/game";


interface IUseStopwatch {
  time: number;
}

export const useStopwatch = (): IUseStopwatch => {
  const { gameContext } = useContext( GameContext );
  const [ time, setTime ] = useState( 0 );
  const inc = useRef( null );

  useEffect( () => {
    if ( gameContext.gameState === GameState.STARTED ) {
      inc.current = setInterval( () => {
        setTime( time => time + 1 );
      }, 1000 );
    } else {
      clearInterval( inc.current );
      if ( gameContext.gameState === GameState.NOT_STARTED )
        setTime( time => 0 );
    }
  }, [ gameContext.gameState ] );

  return { time }
}