import { FC } from "react";
import styles from "./Stopwatch.module.scss"
import classNames from "classnames";
import { formatNum } from "../../helpers/formatNum";
import { useStopwatch } from "./hooks/useStopwatch";

export const Stopwatch: FC = ( {} ) => {
  const { time } = useStopwatch();

  const imgs = formatNum( time );

  return (
    <div className={ classNames( styles.Stopwatch ) }>
      {
        imgs.map( ( el, i ) =>
          <img src={ el } className={ classNames( styles.Stopwatch_item ) } key={ i }/>
        )
      }
    </div>
  )
}