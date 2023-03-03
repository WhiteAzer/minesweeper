import { createContext } from "react";
import { GameMap, GameState } from "../types/game";


export interface GameContextProps {
  gameState?: GameState;
  setGameState?: (gameState: GameState) => void;
  map?: GameMap;
  setMap?: (map: GameMap | ((prev: GameMap) => GameMap)) => void;
}

export const GameContext = createContext<GameContextProps>( {} );