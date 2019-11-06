import React from "react";

import axios from "axios";
import { TabBar, Tabs, NavBar, SearchBar } from "antd-mobile";
import { Switch, Route } from "react-router-dom";
import Index from "./Home/index";
import Strict from "./Strict/index";
import Case from "./case/index";
import Login from "./Login/index";
import "./Home.less";
class Home extends React.Component {
  state = {
    url: this.props.location.pathname.substr(1),
    hot: ""
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
      swipeable={false}
      tabBarActiveTextColor="#ff5f16"
      onChange={(tab) => {
        this.props.history.push({
          pathname: tab.url
        });
      }}
    >
    </Tabs>

  );
  render() {
    let hots;
    if (this.state.hot.length > 1 && this.props.location.pathname === "/home") {
      hots = (
        <div className="hot-box">
          <span>热搜</span>
          <ul className="hot">
            {this.state.hot.length > 0
              ? this.state.hot.map((item, index) => {
                return <li key={index}>{item.keyword}</li>;
              })
              : null}
          </ul>
        </div>
      );
    }
    return (
      <div className="page-Home">
        <div className="page-box">
          {this.state.url === 'center' ? null : <NavBar
            mode="light"
            leftContent={
              <i className="iconfont icon-dizhi">
                <p>深圳</p>
              </i>
            }
            rightContent={
              <i className="iconfont icon-fenlei">
                <p>分类</p>
              </i>
            }
          >
            <SearchBar placeholder="logo设计"></SearchBar>
          </NavBar>}
          {hots}

          {this.state.url === "center" ? null :this.Nav }
          <Switch>
            <Route path="/home" component={Index}></Route>
            <Route path="/strict" component={Strict}></Route>
            <Route path="/case" component={Case}></Route>
            <Route path="/center" component={Login}></Route>
          </Switch>
          </div>
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
            selected={this.state.url === "center"}
            onPress={() => {
              this.props.history.push({
                pathname: "/center"
              });
              this.setState({
                url: "center"
              });
            }}

          ></TabBar.Item>
        </TabBar>
      </div>
    );
  }

  //热搜请求
  hot() {
    axios.get("/m/api/cmsapi/hotSearch").then(res => {
      this.setState({
        hot: res.data.data.list
      });
    })
  }
  componentDidMount() {
    this.hot()
  }
}

export default Home
