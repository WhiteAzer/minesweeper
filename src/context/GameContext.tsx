import { createContext } from "react";
import { GameMap, GameState } from "../types/game";


export interface IGameContextProps {
  gameState?: GameState;
  setGameState?: (gameState: GameState) => void;
  map?: GameMap;
  setMap?: (map: GameMap | ((prev: GameMap) => GameMap)) => void;
  isMouseDown?: boolean;
  toggleIsMouseDown?: () => void;
  flagsCount?: number;
  setFlagsCount?: (flagsCount: number) => void;
  openedCellsCount?: number;
  setOpenedCellsCount?: (openedCellsCount: number) => void;
}

export const GameContext = createContext<IGameContextProps>( {} );