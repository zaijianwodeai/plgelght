import React from "react";
import axios from "axios";
import "./index.less";
import { NavBar, Icon} from "antd-mobile";
class Deal extends React.Component {
  state = {
    allList: [],
    pageSize: 15,
    k: "",
    ss:0,
    so:1,
    sf: "modeone",
    zbjntv: 1,
    loading: false,
    activeKey: 1,
    activeSort: true
  };
  pageNum = 1;
  render() {
    return (
      <div className="deal">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={this.onLeftClick}
        >
          交易中心
        </NavBar>
        <div className='liubai'></div>
        <div style={{ marginTop: 10, fontSize: "14px" }} className='myNav'>
          <div
            className={[
              this.state.activeKey === 1 ? "red" : "",
              this.state.activeSort && this.state.activeKey === 1
                ? "open"
                : null
            ].join(" ")}
            onClick={this.onChange.bind(this, 1)}
          >
              综合
            </div>
            <div
              className={[
                this.state.activeKey === 2 ? "red" : "",
                this.state.activeSort && this.state.activeKey === 2
                  ? "open"
                  : null
              ].join(" ")}
              onClick={this.onChange.bind(this, 2)}
              
            >
              公开时间
              <i className='iconfont icon-jiantou'></i>
            </div>
            <div
              className={[
                this.state.activeKey === 3 ? "red" : "",
                this.state.activeSort && this.state.activeKey === 3
                  ? "open"
                  : null
              ].join(" ")}
              onClick={this.onChange.bind(this, 3)}
            >
              预算降序
              <i className='iconfont icon-jiantou'></i>
            </div>
            <div
            className={[
              this.state.activeKey === 4 ? "red" : "",
              this.state.activeSort && this.state.activeKey === 4
                ? "open"
                : null
            ].join(" ")}
            onClick={this.onChange.bind(this, 4)}
          >
            筛选
          </div>
        </div>
        <div className="list-content" onScroll={this.onScroll}>
          {this.state.allList.length > 0
            ? this.state.allList.map((item, index) => (
                <div className="list-area" key={index}>
                  <div className="module-list">
                    <ul>
                      <li className="order-item-wrap">
                        <div className="order-item-title">
                          {item.isTop ? (
                            <span className="order-item-isTop">顶</span>
                          ) : null}
                          {item.isUrgent ? (
                            <span className="order-item-isTop">急</span>
                          ) : null}
                          {item.hightPrice ? (
                            <span className="price">
                              ￥{item.hightPrice}以内
                            </span>
                          ) : item.price ? (
                            <span className="price">￥{item.price}</span>
                          ) : (
                            <span className="price">可议价</span>
                          )}

                          <span className="title">{item.title}</span>
                        </div>
                        <div className="order-item-content">
                          <p className="text">{item.content}</p>
                        </div>
                        <div className="order-item-footer">
                          <span className="state-list">
                            <span className="order-item-type">招标</span>
                            <span className="state">{item.categoryName}</span>
                            {item.localAreaName ? (
                              <span className="state">
                                {item.localAreaName}
                              </span>
                            ) : null}
                            {item.taskStatus === 2 ? (
                              <span className="state">工作中</span>
                            ) : item.taskStatus === 1 ? (
                              <span className="state">匹配中</span>
                            ) : (
                              <span className="state">交易成功</span>
                            )}
                          </span>
                          <span className="join-num">
                            <em>{item.bidWorkNum}</em>人参与
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    );
  }
  //返回
  onLeftClick=e=>{
     console.log(111)
  }
  //修改请求携带的数据使得页面渲染不同数据
  onChange = e => {
    this.setState({
      activeKey: e,
      activeSort: !this.state.activeSort,
      ss:this.state.activeSort ? 1 : 0,
      so: e,
      allList: ""
    }, () => {
      this.getAllList()
    });
  };
  getAllList() {
    this.setState({
      loading: true
    });
    axios
      .get("/task/hallapi/v/index/list", {
        params: {
          pageNum: this.pageNum,
          pageSize: this.state.pageSize,
          k: this.state.k,
          ss: this.state.ss,
          so: this.state.so,
          sf: this.state.sf,
          zbjntv: this.state.zbjntv
        }
      })
      .then(response => {
        let newAllList = [...this.state.allList];
        newAllList = [...newAllList].concat(
          ...response.data.data.regionList.list
        );
        this.setState({
          allList: newAllList,
          loading: false
        });
        console.log(this.state.ss,this.state.so)
      });
  }
  onScroll = e => {
    let target = e.target;
    //滚动条滚动的距离
    let scrollTop = target.scrollTop;
    //滚动容器中内容的整体高度target.scrollHeight
    let scrollHeight = target.scrollHeight;
    //滚动容器的高度
    let clientHeight = target.clientHeight;
    if (scrollTop + clientHeight > scrollHeight - 500) {
      //加载下一页
      this.pageNum += 1;
      this.getAllList();
    }
  };
  componentDidMount() {
    this.getAllList();
  }
}

export default Deal;
