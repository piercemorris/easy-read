import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/common/navigation/Navigation";
import Search from "./components/common/Search";

function App() {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route path="/about">
          <p>About</p>
        </Route>
        <Route path="/create">
          <Search />
        </Route>
        <Route exact path="/home">
          <p>Welcome</p>
        </Route>
        <Route path="*">
          <p>Error 404</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
