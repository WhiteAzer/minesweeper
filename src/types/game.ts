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
