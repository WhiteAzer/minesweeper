import "./styles/index.scss";
import { Game } from "./components/Game/Game";


export const App = () => {
  return (
    <div className={"container"}>
      <Game/>
    </div>
  );
}