import { FC } from "react";
import styles from "./Game.module.scss"
import classNames from "classnames";
import { GameHeader } from "../GameHeader/GameHeader";
import { GameField } from "../GameField/GameField";


interface GameProps {
}

export const Game: FC<GameProps> = ( {} ) => {
  return (
    <div className={ classNames( styles.Game ) }>
      <GameHeader/>
      <GameField/>
    </div>
  )
}