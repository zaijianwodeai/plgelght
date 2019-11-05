import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import "./global.less";

import Home from "./views/Home";
import Deal from "./views/Deal/index";
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/deal" component={Deal}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
