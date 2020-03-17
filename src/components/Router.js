import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "route/Home";
import TV from "route/TV";
import Search from "route/Search";

export default () => (
  <>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/Search" component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </>
);
