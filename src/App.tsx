import React from "react";
import "./App.css";
import Router from "./route/Route";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="welcome">
        <Router />
      </div>
    </HashRouter>
  );
}

export default App;
