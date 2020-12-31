/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Router } from "react-router-dom";
// import { Router } from "react-router";
import "./App.css";
import Routes from "./routes";
import history from "./history";

function App() {
  return (
    <>
      <Router history={history}>
        <nav>
          <ul>
            <li>
              <a className="active" href="/" component>
                Create GIST
              </a>
            </li>
            <li>
              <a href="/list-gists">List GISTS</a>
            </li>
            <li>
              <a href="/list-gists-username">List GISTS By Username</a>
            </li>
          </ul>
        </nav>
        <Routes />
      </Router>
    </>
  );
}

export default App;
