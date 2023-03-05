import { createContext } from "react";
import { IGameContextProps } from "../types/game";


export const GameContext = createContext<Partial<IGameContextProps>>( {} );