import { FC } from "react";
import styles from "./GameHeader.module.scss"
import classNames from "classnames";
import { Stopwatch } from "../Stopwatch/Stopwatch";
import { MineCounter } from "../MineCounter/MineCounter";
import { GameStateIndicator } from "../GameStateIndicator/GameStateIndicator";


export const GameHeader: FC = ( {} ) => {
  return (
    <div className={ classNames( styles.GameHeader ) }>
      <MineCounter/>
      <GameStateIndicator/>
      <Stopwatch/>
    </div>
  )
}