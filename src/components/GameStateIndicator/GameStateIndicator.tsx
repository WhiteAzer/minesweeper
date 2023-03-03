import { FC, useCallback, useContext } from "react";
import styles from "./GameStateIndicator.module.scss"
import classNames from "classnames";
import { GameState } from "../../types/game";
import { GameContext } from "../../context/GameContext";

import notStarted from "../../asset/notstarted.png"
import started from "../../asset/started.png"
import loosed from "../../asset/loosed.png"
import { getGameMap } from "../../helpers/getGameMap";

const size = 16;

const GameStateImgs = {
  [ GameState.STARTED ]: started,
  [ GameState.LOOSED ]: loosed,
  [ GameState.WINED ]: notStarted,
  [ GameState.NOTSTARTED ]: notStarted
}

export const GameStateIndicator: FC = ( {} ) => {
  const { gameState, setGameState, setMap } = useContext( GameContext );

  const handleClick = useCallback( () => {
    setGameState( GameState.NOTSTARTED );
    setMap(getGameMap( size, 0 ))
  }, [] );

  return (
    <img src={ GameStateImgs[ gameState ] } className={ styles.GameState } onClick={ handleClick }/>
  )
}