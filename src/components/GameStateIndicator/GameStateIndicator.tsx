import { FC, useCallback, useContext, useState } from "react";
import styles from "./GameStateIndicator.module.scss"
import { GameState } from "../../types/game";
import { GameContext } from "../../context/GameContext";

import Base from "../../asset/notstarted.png"
import Started from "../../asset/started.png"
import Loosed from "../../asset/loosed.png"
import MouseDown from "../../asset/mouseDown.png"
import Wined from "../../asset/wined.png"

import { getGameMap } from "../../helpers/getGameMap";
import { MAP_SIZE } from "../../vars/game";

const GameStateImgs = {
  [ GameState.STARTED ]: Base,
  [ GameState.LOOSED ]: Loosed,
  [ GameState.WINED ]: Wined,
  [ GameState.NOT_STARTED ]: Base
}

export const GameStateIndicator: FC = ( {} ) => {
  const { gameContext, setGameContext } = useContext( GameContext );
  const [ isMouseDown, setIsMousedown ] = useState( false );

  const getSrc = () => {
    if (isMouseDown) return Started
    return gameContext.isMouseDown ? MouseDown : GameStateImgs[ gameContext.gameState ]
  }

  const handleMouseUp = () => {
    setIsMousedown(false);
    setGameContext( prev => {
      prev.gameState = GameState.NOT_STARTED;
      prev.map = getGameMap( MAP_SIZE, 0 );
      prev.openedCellsCount = 0;
      prev.flagsCount = 0;

      return { ...prev }
    } )
  };

  const handleMouseDown = () => {
    setIsMousedown(true);
  };

  return (
    <img src={ getSrc() }
         className={ styles.GameState }
         onMouseDown={ handleMouseDown }
         onMouseUp={ handleMouseUp }/>
  )
}