import { createRoot } from "react-dom/client";
import { App } from "./App";
import { GameProvider } from "./context/GameProvider";

const root = createRoot( document.getElementById( "root" ) as HTMLElement );

root.render( (
      <GameProvider>
        <App/>
      </GameProvider>
) );