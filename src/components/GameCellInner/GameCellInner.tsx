import { FC } from "react";
import styles from "./GameCellInner.module.scss"
import classNames from "classnames";
import { GameCellInnerState } from "../../types/game";
import BombImg from "../../asset/bomb.png"
import EmptyImg from "../../asset/0.png"
import OneImg from "../../asset/1.png"
import TwoImg from "../../asset/2.png"
import ThreeImg from "../../asset/3.png"
import FourImg from "../../asset/4.png"
import FiveImg from "../../asset/5.png"
import SixImg from "../../asset/6.png"
import SevenImg from "../../asset/7.png"
import EightImg from "../../asset/8.png"



const CellImgs: Array<any> = [EmptyImg, OneImg, TwoImg, ThreeImg, FourImg, FiveImg, SixImg, SevenImg, EightImg, BombImg]

interface GameCellProps {
  cellState: GameCellInnerState;
}

export const GameCellInner: FC<GameCellProps> = ( {cellState} ) => {

  return (
    <div className={ classNames( styles.GameCellInner ) }>
      <img src={CellImgs.at(cellState)} className={styles.GameCellInner_content}/>
    </div>
  )
}
