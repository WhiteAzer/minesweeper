import "./styles/index.scss";
import { GameField } from "./components/GameField/GameField";
import { GameHeader } from "./components/GameHeader/GameHeader";
import { GameProvider } from "./context/GameProvider";


export const App = () => {
  return (
    <>
      <GameHeader/>
      <GameField/>
    </>
  );
}