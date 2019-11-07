import React from "react";
import axios from "axios";
import { Carousel, Tabs } from "antd-mobile";
import "./style.less";

class Strict extends React.Component {
  state = {
    data: ["1", "2", "3"],
    list: []
  };

  componentDidMount() {
    axios.post("/m/mnode/yx/pageWap").then(response => {
      let url = response.data.data.moduleList[0].ads;
      // console.log(url);
      // simulate img loading
      this.setState({
        data: url
      });
      // console.log(this.state.data);
    });

    axios.post("/m/mnode/yx/products").then(response => {
      let result = response.data.data;

      this.setState({
        list: result
      });
      // console.log(this.state.list);
      // this.someFunction();
    });
  }

  onClick = e => {
    let index = e.index;

    //获取每一个内容的dom对象
    let dom = document.getElementById(`list${index}`);
    //获取距离导航栏已经划掉的元素的高度
    let jia = document.getElementById("jiaHeight").clientHeight;
    let jianav = document.getElementsByClassName("am-tabs-tab-bar-wrap")[0]
      .clientHeight;
    //获取导航栏下面对应内容的与导航栏的距离
    let top = dom.offsetTop;
    //获取滚动条元素的dom
    let wrapdom = document.getElementsByClassName("page-box")[0];
    //将需要滚动的距离相加
    wrapdom.scrollTop = top + jia + jianav;
  };

  render() {
    const tabs = [
      { title: "品牌设计", index: 0 },
      { title: "营销策划", index: 1 },
      { title: "开发建站", index: 2 },
      { title: "动漫游戏", index: 3 },
      { title: "知产财税", index: 4 },
      { title: "更多服务", index: 5 }
    ];
    return (
      <div className="page-strict">
        {/* bannner */}
        <div id="jiaHeight">
          <Carousel autoplay={false}>
            {this.state.data.map((val, index) => (
              <img
                key={index}
                src={val.imgUrl}
                alt=""
                style={{ width: "100%", verticalAlign: "top" }}
              />
            ))}
          </Carousel>

          {/* 严控供应链 */}
          <div className="provid">
            <img
              src="https://tianpeng.zbjimg.com/tianpeng/task/严选说明.png/origine/3b8e79c0-3dc2-49e1-bf77-c7d119ea6642"
              alt=""
            />
          </div>

          {/* 八戒严选 */}
          <div className="pigTitle">
            <img
              src="//as.zbjimg.com/static/nodejs-mobile-spaweb-api/img/bf2f557.png"
              alt=""
            />
          </div>

          {/* 品牌设计 */}
          <ul className="logoDesign">
            <li>
              <img
                src="https://tianpeng.zbjimg.com/tianpeng/task/品牌设计.png/origine/2733f6bc-89ee-49d0-b7d4-350638cf09ea"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://tianpeng.zbjimg.com/tianpeng/task/营销推广.png/origine/333ef5bc-2169-4f28-a30c-d4f1f8f3cbb1"
                alt=""
              />
            </li>
          </ul>

          <ul className="logoDesign">
            <li>
              <img
                src="https://tianpeng.zbjimg.com/tianpeng/task/开发建站.png/origine/bf3ecee1-17d6-432c-9268-19a0ab4b5ff6"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://tianpeng.zbjimg.com/tianpeng/task/知产财税.png/origine/400a3ddb-3391-4a85-ac2b-8bf3d63c1c8e"
                alt=""
              />
            </li>
          </ul>

          <ul className="logoDesign">
            <li>
              <img
                src="https://tianpeng.zbjimg.com/tianpeng/task/移动端严选页面推荐服务板块.png/origine/545996ed-b604-46e8-9925-6de5564753fd"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://tianpeng.zbjimg.com/tianpeng/task/更多严选.png/origine/bc8301f0-1749-459d-ba69-947a9321a7ab"
                alt=""
              />
            </li>
          </ul>
        </div>
        {/* Tabs */}
        <div id="strict-nav">
          <Tabs tabs={tabs} animated={false} onTabClick={this.onClick}>
            <div id="box">
              {this.state.list.map((val, index) => {
                return (
                  // 品牌设计精选服务
                  <div id={`list${index}`} className="list-item" key={index}>
                    <div className="item-title">
                      <span>{val.floorContent}</span>
                      <p>更多></p>
                    </div>

                    {/* 品牌设计精选服务  列表    */}
                    <div className="item-service">
                      {val.yxProdutInfos.map((item, index) => {
                        return (
                          <dl key={index}>
                            <dt className="service-img">
                              <img src={item.coverImg} alt="" />
                            </dt>
                            <dd className="service-text">
                              <h3>{item.yxProductName}</h3>
                              <p>{item.sellingPoints}</p>
                              <h6>严选价　¥{item.price}/个</h6>
                              <span>¥{item.marketPrice}/个</span>
                            </dd>
                          </dl>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Strict;
