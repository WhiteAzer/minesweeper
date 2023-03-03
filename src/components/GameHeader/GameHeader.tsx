import { FC } from "react";
import styles from "./GameHeader.module.scss"
import classNames from "classnames";
import { Stopwatch } from "../Stopwatch/Stopwatch";
import { MineCounter } from "../MineCounter/MineCounter";
import { GameStateIndicator } from "../GameStateIndicator/GameStateIndicator";


interface GameHeaderProps {
}

export const GameHeader: FC<GameHeaderProps> = ( {} ) => {
  return (
    <div className={ classNames( styles.GameHeader ) }>
      <MineCounter mineCount={38}/>
      <GameStateIndicator/>
      <Stopwatch/>
    </div>
  )
}