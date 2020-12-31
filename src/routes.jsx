import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateGist from "./components/createGist/CreateGist";
import ListGists from "./components/listGist/ListGist";
import SearchGists from "./components/listGist/SearchGist";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={CreateGist} />
      <Route path="/list-gists" component={ListGists} />
      <Route path="/list-gists-username" component={SearchGists} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
