import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import "./global.less";

import Home from "./views/Home";
import Deal from "./views/Deal/index";
import Signin from "./views/sign-in";
import Signup from "./views/sign-up";
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/deal" component={Deal}></Route>
          <Route path="/signin" component={Signin}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
