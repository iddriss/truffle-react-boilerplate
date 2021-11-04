import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MoralisProvider } from "react-moralis";

import * as serviceWorker from "./serviceWorker";

const appId = process.env.REACT_APP_MORALIS_APP_ID;
const serverUrl = process.env.REACT_APP_MORALIS_SERVER_URL;

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <App />
    </MoralisProvider>
  </React.StrictMode>,

  document.getElementById("root")
);

serviceWorker.unregister();
