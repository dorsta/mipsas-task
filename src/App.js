import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Navigation from "./components/UI/navigation/navigation";
import Studies from "./components/Studies/studies";

function App() {
  const navigationItemArray = ["All", "Current", "Submitted", "Finished"];
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Heading">Studies Viewer</div>
        <div className="Content">
          <Navigation items={navigationItemArray} />
          <Route
            path="/"
            exact={false}
            render={(props) => <Studies {...props} />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
