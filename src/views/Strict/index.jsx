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
    axios.post("/mnode/yx/pageWap").then(response => {
      let url = response.data.data.moduleList[0].ads;
      // console.log(url);
      // simulate img loading
      this.setState({
        data: url
      });
      // console.log(this.state.data);
    });

    axios.post("/mnode/yx/products").then(response => {
      let result = response.data.data;

      this.setState({
        list: result
      });
      console.log(this.state.list);
    });
  }
  render() {
    const tabs = [
      { title: "品牌设计" },
      { title: "营销策划" },
      { title: "开发建站" },
      { title: "动漫游戏" },
      { title: "知产财税" },
      { title: "更多服务" }
    ];
    return (
      <div className="page-strict">
        {/* header */}
        <div className="header"></div>
        {/* bannner */}

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

        {/* Tabs */}
        <Tabs tabs={tabs} animated={false}>
          <div>
            {this.state.list.map((val, index) => {
              return (
                // 品牌设计精选服务
                <div className="list-item" key={index}>
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
    );
  }
}

export default Strict;
