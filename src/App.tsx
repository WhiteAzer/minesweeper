import "./styles/index.scss";
import { GameField } from "./components/GameField/GameField";
import { Stopwatch } from "./components/Stopwatch/Stopwatch";


export const App = () => {
  return (
    <>
      <Stopwatch/>
      <GameField/>
    </>);
}