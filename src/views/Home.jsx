import React from "react";

import { Switch, Route, NavLink, HashRouter } from "react-router-dom";
import { TabBar, Tabs } from "antd-mobile";
import Index from "./Home/index";
import Strict from "./Strict/index";
import Case from "./case/index";
import Login from "./Login/index";
import "./Home.less";
class Home extends React.Component {
  state = {
    url: this.props.location.pathname.substr(1)
  };
  tabs = [
    { title: "服务", url: "home" },
    { title: "严选", url: "strict" },
    { title: "案例", url: "case" },
    { title: "交易", url: "deal" }
  ];
  Nav = (
    <Tabs
      tabs={this.tabs}
      initialPage={0}
      tabBarActiveTextColor="#ff5f16"
      onChange={(tab, index) => {
        this.props.history.push({
          pathname: tab.url
        });
      }}
    >
      <HashRouter>
        <Switch>
          <Route path="/home" component={Index}></Route>
          <Route path="/strict" component={Strict}></Route>
          <Route path="/case" component={Case}></Route>

          <Route></Route>
        </Switch>
      </HashRouter>
    </Tabs>
  );
  render() {
    return (
      <div className="page-Home">
        {this.state.url === "center" ? null : this.Nav}

        <Switch>
          <Route path="/center" component={Login}></Route>
        </Switch>
        {/* ==============底部分割线======================== */}
        <TabBar unselectedTintColor="#999" tintColor="#f60" barTintColor="#fff">
          <TabBar.Item
            title="首页"
            icon={<i className="iconfont icon-shouye"></i>}
            selectedIcon={<i className="iconfont icon-shouye"></i>}
            onPress={() => {
              this.props.history.push({
                pathname: "/home"
              });
              this.setState({
                url: "home"
              });
            }}
            selected={this.state.url === "home"}
          ></TabBar.Item>
          <TabBar.Item
            title="办公"
            icon={<i className="iconfont icon-qiyebangonglou"></i>}
            selectedIcon={<i className="iconfont icon-qiyebangonglou"></i>}
          ></TabBar.Item>
          <TabBar.Item
            title="发需求"
            icon={<i className="iconfont icon-022caozuo_jiahao"></i>}
            selectedIcon={<i className="iconfont icon-022caozuo_jiahao"></i>}
          ></TabBar.Item>
          <TabBar.Item
            title="活动"
            icon={<i className="iconfont icon-icon"></i>}
            selectedIcon={<i className="iconfont icon-icon"></i>}
          ></TabBar.Item>
          <TabBar.Item
            title="我的"
            icon={<i className="iconfont icon-wode"></i>}
            selectedIcon={<i className="iconfont icon-wode"></i>}
            onPress={() => {
              this.props.history.push({
                pathname: "/center"
              });
              this.setState({
                url: "center"
              });
            }}
            selected={this.state.url === "center"}
          ></TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Home;
