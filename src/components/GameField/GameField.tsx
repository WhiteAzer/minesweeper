import { BaseSyntheticEvent, FC, useCallback, useContext, useState } from "react";
import styles from "./GameField.module.scss"
import { getGameMap } from "../../helpers/getGameMap";
import { GameMap, GameState } from "../../types/game";
import { GameContext } from "../../context/GameContext";
import { GameCell } from "../GameCell/GameCell";
import { cleanMap } from "../../helpers/cleanMap";
import { showBombs } from "../../helpers/showBombs";


const size = 16;
const bombsCount = 40;

export const GameField: FC = ( {} ) => {
  const { gameState, setGameState, map, setMap } = useContext( GameContext );

  const handleClick = useCallback(( e: BaseSyntheticEvent ) => {
    if ( e.target.dataset.i === undefined ) return;
    if (gameState === GameState.LOOSED || gameState === GameState.WINED) return;

    const i: number = +e.target.dataset.i;
    const j: number = +e.target.dataset.j;

    setMap( prev => {
      if ( gameState === GameState.NOTSTARTED ) {
        setGameState( GameState.STARTED );
        prev = getGameMap( size, bombsCount, [ i, j ] );
      }

      if ( map[ i ][ j ].inner !== -1 )
        cleanMap( prev, i, j );
      else {
        showBombs( prev, i, j );
        setGameState( GameState.LOOSED );
      }

      return [ ...prev ];
    } )
  }, [gameState, map])

  return (
    <div className={ styles.GameField } onClick={ handleClick }>
      {
        map.map( ( row, i ) =>
            row.map( ( cell, j ) =>
              <GameCell cell={ map[ i ][ j ] } i={ i } j={ j } key={ `${ i }${ j }` }/>
            )
        )
      }
    </div>
  )
}