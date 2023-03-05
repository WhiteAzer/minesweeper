import { Dispatch, SetStateAction } from "react";

export enum CellState {
  ACTIVE = "active",
  SELECTED = "selected",
  CLICKED_BOMB = "clickedBomb",
  FLAG = "flag",
  GUESS = "guess",
  FAKE_FLAG = "fakeFlag"
}

export interface IGameCell {
  inner: number;
  state: CellState;
}

export type GameMap = Array<Array<IGameCell>>;

export enum GameState {
  STARTED = "started",
  LOOSED = "loosed",
  WINED ="wined",
  NOT_STARTED = "notStarted"
}

export interface IGameContext {
  gameState: GameState;
  map: GameMap;
  isMouseDown: boolean;
  flagsCount: number;
  openedCellsCount: number;
}

export interface IGameContextProps {
  gameContext: IGameContext;
  setGameContext: Dispatch<SetStateAction<IGameContext>>;
}
