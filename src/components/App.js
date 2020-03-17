import React, { Component, Fragment } from "react";
import "../index";
import Router from "components/Router";
import PropTypes from "prop-types";
import Header from "components/Header";

class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Router />
      </>
    );
  }
}

export default App;
