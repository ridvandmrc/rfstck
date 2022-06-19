import React from "react";
import "./App.css";
import Router from "./route/Route";
import { HashRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";

function App() {
  return (
    <HashRouter>
      <MoralisProvider
        appId={process.env.REACT_APP_APP_ID as any}
        serverUrl={process.env.REACT_APP_MORALIS_SERVER as any}
      >
        <div className="welcome">
          <Router />
        </div>
      </MoralisProvider>
    </HashRouter>
  );
}

export default App;
