import { useContext, useEffect, useRef, useState } from "react";
import { GameContext } from "../../../context/GameContext";
import { GameState } from "../../../types/game";


interface UseStopwatch {
  time: number;
}

// export const useStopwatch = (): UseStopwatch => {
//   const { gameState } = useContext( GameContext );
//   const [ time, setTime ] = useState( 0 );
//
//   const stopwatch = useCallback( () => setTime( time + 1 ), [ time ] );
//
//   if (gameState === GameState.NOTSTARTED) return { time: 0 };
//
//   gameState === GameState.STARTED && time < 999 && setInterval( stopwatch, 1000 );
//
//   return { time };
// }

export const useStopwatch = () => {
  const { gameState } = useContext( GameContext );
  const [ time, setTime ] = useState( 0 );
  const inc = useRef( null );

  useEffect( () => {
    if ( gameState === GameState.STARTED ) {
      inc.current = setInterval( () => {
        setTime( time => time + 1 );
      }, 1000 );
    } else {
      clearInterval( inc.current );
      if ( gameState === GameState.NOT_STARTED )
        setTime( time => 0 );
    }
  }, [ gameState ] );

  return { time }
}