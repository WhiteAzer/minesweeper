import { FC } from "react";
import styles from "./MineCounter.module.scss"
import classNames from "classnames";
import { formatNum } from "../..//helpers/formatNum";


interface MineCounterProps {
  mineCount: number;
}

export const MineCounter: FC<MineCounterProps> = ( {mineCount} ) => {
  return (
    <div className={ classNames( styles.MineCounter ) }>
      {
        formatNum(mineCount).map((el, i) =>
          <img src={ el } className={ classNames( styles.MineCounter_item ) } key={i}/>
        )
      }
    </div>
  )
}