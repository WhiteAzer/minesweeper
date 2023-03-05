import { FC, useCallback, useContext } from "react";
import styles from "./GameStateIndicator.module.scss"
import classNames from "classnames";
import { GameState } from "../../types/game";
import { GameContext } from "../../context/GameContext";

import NotStarted from "../../asset/notstarted.png"
import Started from "../../asset/started.png"
import Loosed from "../../asset/loosed.png"
import MouseDown from "../../asset/mouseDown.png"
import Wined from "../../asset/wined.png"

import { getGameMap } from "../../helpers/getGameMap";
import { MAP_SIZE } from "../../vars/game";

const GameStateImgs = {
  [ GameState.STARTED ]: Started,
  [ GameState.LOOSED ]: Loosed,
  [ GameState.WINED ]: Wined,
  [ GameState.NOT_STARTED ]: NotStarted
}

export const GameStateIndicator: FC = ( {} ) => {
  const { gameState, setGameState, setMap, isMouseDown, setOpenedCellsCount } = useContext( GameContext );

  const handleClick = useCallback( () => {
    setGameState( GameState.NOT_STARTED );
    setMap(getGameMap( MAP_SIZE, 0 ))
    setOpenedCellsCount(0);
  }, [] );

  return (
    <img src={ isMouseDown? MouseDown : GameStateImgs[ gameState ] } className={ styles.GameState } onClick={ handleClick }/>
  )
}