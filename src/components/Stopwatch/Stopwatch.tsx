import { FC, useCallback, useContext, useRef, useState } from "react";
import styles from "./Stopwatch.module.scss"
import classNames from "classnames";
import { formatNum } from "../../helpers/formatNum";
import { GameContext } from "../../context/GameContext";
import { useStopwatch } from "./hooks/useStopwatch";

interface StopwatchProps {
}

export const Stopwatch: FC<StopwatchProps> = ( {} ) => {
  const {time} = useStopwatch();

  const imgs = formatNum(time)
  return (
    <div className={ classNames( styles.Stopwatch ) }>
      {
        imgs.map( (el, i) =>
          <img src={ el } className={ classNames( styles.Stopwatch_item ) } key={i}/>
        )
      }
    </div>
  )
}