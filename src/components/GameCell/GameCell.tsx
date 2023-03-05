import { FC } from "react";
import styles from "./GameCell.module.scss"
import ClickedBomb from "../../asset/clickedBomb.png"
import LockImg from "../../asset/lock.png"
import BombImg from "../../asset/bomb.png"
import Flag from "../../asset/flag.png"
import FakeFlag from "../../asset/fakeFlag.png"
import Guess from "../../asset/guess.png"
import EmptyImg from "../../asset/0.png"
import OneImg from "../../asset/1.png"
import TwoImg from "../../asset/2.png"
import ThreeImg from "../../asset/3.png"
import FourImg from "../../asset/4.png"
import FiveImg from "../../asset/5.png"
import SixImg from "../../asset/6.png"
import SevenImg from "../../asset/7.png"
import EightImg from "../../asset/8.png"
import { CellState, IGameCell } from "../../types/game";

const cellLockImgs: Record<string, string> = {
  [ CellState.ACTIVE ]: LockImg,
  [ CellState.CLICKED_BOMB ]: ClickedBomb,
  [ CellState.FLAG ]: Flag,
  [ CellState.GUESS ]: Guess,
  [ CellState.FAKE_FLAG ]: FakeFlag
}
const cellInnerImgs: Array<string> = [ EmptyImg, OneImg, TwoImg, ThreeImg, FourImg, FiveImg, SixImg, SevenImg, EightImg, BombImg ]

interface GameCellProps {
  cell: IGameCell;
  i: number;
  j: number;
}

export const GameCell: FC<GameCellProps> = ( { cell, i, j } ) => {
  return (
    <img src={ cell.state !== CellState.SELECTED
      ? cellLockImgs[ cell.state ]
      : cellInnerImgs.at( cell.inner ) }
         className={ styles.GameCell } data-i={ i } data-j={ j }/>
  )
}
