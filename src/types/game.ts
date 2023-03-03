export enum CellState {
  ACTIVE = "active",
  SELECTED = "selected",
  CLICKEDBOMB = "clickedBomb",
  FLAG = "flag",
  GUESS = "guess"
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
  NOTSTARTED = "notStarted"
}
