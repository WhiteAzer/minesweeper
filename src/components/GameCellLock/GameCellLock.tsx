import { FC, useCallback, useRef } from "react";
import styles from "./GameCellLock.module.scss"
import classNames from "classnames";
import { GameCellMaskState } from "../../types/game";
import LockImg from "../../asset/lock.png"
import EmptyImg from "../../asset/0.png";
import OneImg from "../../asset/1.png";
import TwoImg from "../../asset/2.png";
import ThreeImg from "../../asset/3.png";
import FourImg from "../../asset/4.png";
import FiveImg from "../../asset/5.png";
import SixImg from "../../asset/6.png";
import SevenImg from "../../asset/7.png";
import EightImg from "../../asset/8.png";
import BombImg from "../../asset/bomb.png";

const MaskImgs = {
  active: LockImg,
  selected: "",
  flag: "",
  guess: ""
}

interface GameCellLockProps {
  onClick: () => void;
  state: GameCellMaskState
}

export const GameCellLock: FC<GameCellLockProps> = ( {state, onClick} ) => {
  return (
    <div className={styles.GameCellLock}>
      {
        state !== MaskImgs.selected &&
        <img src={MaskImgs[state]} className={styles.GameCellLock_content}  onClick={onClick}/>
      }
    </div>
  )
}