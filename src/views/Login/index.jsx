import React from "react";
// import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./index.less";

// import Login from "./login";

class Center extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="header">
          <div className="status">
            <img
              src="//as.zbjimg.com/static/nodejs-mobile-spaweb-api/img/404e095.png"
              alt=""
            />
            <div>登录/注册</div>
          </div>
          <div className="else">
            <ul>
              <li>
                <div className="item-number">--</div>
                <div className="item-name">我的收藏</div>
              </li>
              <li>
                <div className="item-number">--</div>
                <div className="item-name">店铺关注</div>
              </li>
              <li>
                <div className="item-number">--</div>
                <div className="item-name">足迹</div>
              </li>
              <li>
                <div className="item-number">--</div>
                <div className="item-name">足迹</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="item-order">
          <div className="item-title">
            我的订单
            <span>查看全部 ></span>
          </div>
          <div className="empty-order">
            <div className="order-left">
              <img
                src="//as.zbjimg.com/static/nodejs-mobile-spaweb-api/img/944c0c7.png"
                alt=""
              />
              <div className="two-tit">
                <p className="tit1">留下需求</p>
                <p className="tit2">免费获取方案和报价</p>
              </div>
            </div>
            <div className="order-right">
              <div>立即获取</div>
            </div>
          </div>
        </div>
        <div className="item-order">
          <div className="item-title">常用功能</div>
          <div className="empty-order">
            <ul>
              <li>
                <img
                  src="http://bgl.zbjimg.com/bgl%2Fbjclound%2F%E9%9B%87%E4%B8%BB%E4%BF%B1%E4%B9%90%E9%83%A8.png%2Forigine%2Fac8dbd73-88d7-4a3d-b53b-409f6e0602c6?imageMogr2/auto-orient/strip/quality/90"
                  alt=""
                />
                <div>雇主俱乐部</div>
              </li>
              <li>
                <img
                  src="http://bgl.zbjimg.com/bgl%2Fbjclound%2F%E5%AE%A2%E6%9C%8D.png%2Forigine%2Ffd94f95c-4017-4a0c-90c6-0afa734037a4?imageMogr2/auto-orient/strip/quality/90"
                  alt=""
                />
                <div>联系客服</div>
              </li>
              <li>
                <img
                  src="http://bgl.zbjimg.com/bgl%2Fbjclound%2F%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png%2Forigine%2F424eee62-8ac4-4960-a8fb-435733838533?imageMogr2/auto-orient/strip/quality/90"
                  alt=""
                />
                <div>意见反馈</div>
              </li>
              <li>
                <img
                  src="http://bgl.zbjimg.com/bgl%2Fbjclound%2F%E5%B8%AE%E5%8A%A9.png%2Forigine%2F5374e513-7d2b-4395-95a6-c10912aa4ab8?imageMogr2/auto-orient/strip/quality/90"
                  alt=""
                />
                <div>帮助中心</div>
              </li>
              <li>
                <img
                  src="http://bgl.zbjimg.com/bgl%2Fbjclound%2F%E7%AE%A1%E5%AE%B6.png%2Forigine%2F1ec32e28-59c8-48d3-84f6-6d6c20fc75fc?imageMogr2/auto-orient/strip/quality/90"
                  alt=""
                />
                <div>服务估价</div>
              </li>
              <li>
                <img
                  src="http://bgl.zbjimg.com/bgl%2Fbjclound%2F%E9%A1%BE%E9%97%AE.png%2Forigine%2F61e67e21-f88c-4c23-9f8a-b7fe0b61c621?imageMogr2/auto-orient/strip/quality/90"
                  alt=""
                />
                <div>合作伙伴</div>
              </li>
              <li>
                <img
                  src="http://bgl.zbjimg.com/bgl%2Fbjclound%2F%E4%BD%99%E9%A2%9D.png%2Forigine%2Fc67abc78-6078-4762-b194-b97d89431926?imageMogr2/auto-orient/strip/quality/90"
                  alt=""
                />
                <div>账户余额</div>
              </li>
              <li>
                <img
                  src="http://bgl.zbjimg.com/bgl%2Fbjclound%2F%E7%A1%AE%E5%AE%9A%E7%89%88%E6%A0%B8%E5%90%8D.png%2Forigine%2F278a2257-618f-4c79-bc9d-58508558fe68?imageMogr2/auto-orient/strip/quality/90"
                  alt=""
                />
                <div>免费核名</div>
              </li>
              <li>
                <img
                  src="http://bgl.zbjimg.com/bgl%2Fbjclound%2F%E5%95%86%E6%A0%87%E6%88%90%E5%8A%9F%E7%8E%87.png%2Forigine%2F8a420a33-b4f4-447f-afc7-b75e57e317cc?imageMogr2/auto-orient/strip/quality/90"
                  alt=""
                />
                <div>商标成功率</div>
              </li>
              <li>
                <img
                  src="http://bgl.zbjimg.com/bgl%2Fbjclound%2F%E7%A1%AE%E5%AE%9A%E7%89%88%E4%BB%A3%E8%B4%A6.png%2Forigine%2Fb5e2e64b-eaf6-4c58-8b04-c48e0ba423e7?imageMogr2/auto-orient/strip/quality/90"
                  alt=""
                />
                <div>代理记账</div>
              </li>
              <li>
                <img
                  src="http://bgl.zbjimg.com/bgl%2Fbjclound%2F%E4%B8%AA%E4%BA%BA%E4%B8%AD%E5%BF%83%E5%B8%B8%E7%94%A8%E5%B7%A5%E5%85%B7-%E4%B8%93%E5%88%A9%E6%9F%A5%E8%AF%A2.png%2Forigine%2F109bc512-307a-42eb-9ad7-8d8eaee065d7?imageMogr2/auto-orient/strip/quality/90"
                  alt=""
                />
                <div>专利查询</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Center;
