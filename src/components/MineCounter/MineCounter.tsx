import { FC, useContext } from "react";
import styles from "./MineCounter.module.scss"
import classNames from "classnames";
import { formatNum } from "../..//helpers/formatNum";
import { GameContext } from "../../context/GameContext";
import { BOMBS_COUNT } from "../../vars/game";


export const MineCounter: FC = () => {
  const { gameContext } = useContext( GameContext )

  return (
    <div className={ classNames( styles.MineCounter ) }>
      {
        formatNum( BOMBS_COUNT - gameContext.flagsCount > 0 ? BOMBS_COUNT - gameContext.flagsCount : 0 ).map( ( el, i ) =>
          <img src={ el } className={ classNames( styles.MineCounter_item ) } key={ i }/>
        )
      }
    </div>
  )
}