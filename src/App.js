import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
            <p>Create</p>
          </Route>
          <Route exact path="/">
            <p>Home</p>
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
