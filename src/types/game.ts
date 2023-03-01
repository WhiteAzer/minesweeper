export type GameCellInnerState = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type GameMap = Array<Array<GameCellInnerState>>;

export type GameCellMaskState = "active" | "selected" | "flag" | "guess";

export type GameMask = Array<Array<GameCellMaskState>>;
