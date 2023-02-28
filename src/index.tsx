import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";

const root = createRoot( document.getElementById( "root" ) as HTMLElement );

root.render( (
  <StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
  </StrictMode>
) );