import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Search from "./components/common/Search";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <p>About</p>
          </Route>
          <Route path="/create">
            <Search />
          </Route>
          <Route exact path="/">
            <p>Welcome</p>
          </Route>
          <Route path="*">
            <p>Error 404</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
