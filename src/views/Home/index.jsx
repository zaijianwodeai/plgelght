import React from 'react'
import { WingBlank, Carousel, Tabs } from 'antd-mobile'

import axios from 'axios'
import './index.less'
class Iendex extends React.PureComponent {
  state = {
    navigaction: [
      { title: '品牌设计', iconUrl: '//rms.zbj.com/resource/redirect?key=mobile/newwap/品牌.png/origine/83ccc5b2-6c6e-4631-9b33-6e84dfab1cdb' },
      { title: '营销推广', iconUrl: '//rms.zbj.com/resource/redirect?key=mobile/newwap/营销.png/origine/4f7959b8-6fc9-43f8-b7b4-bf4a0cffb159' },
      { title: 'IT/软件', iconUrl: '//rms.zbj.com/resource/redirect?key=mobile/newwap/IT.png/origine/58be9bfd-5224-4bd9-90f8-574086fb8685' },
      { title: '知识产权', iconUrl: '//rms.zbj.com/resource/redirect?key=mobile/newwap/知识产权.png/origine/c5085fb5-1963-4a87-89b8-6a7832ec4771' },
      { title: '工商财税', iconUrl: '//rms.zbj.com/resource/redirect?key=mobile/newwap/财税.png/origine/3fc9d638-3bc1-4d14-bd75-1b905eedbfe8' },
      { title: '科技服务', iconUrl: '//rms.zbj.com/resource/redirect?key=mobile/newwap/科技.png/origine/5bf17f47-e9e4-4a59-9de9-14ce904fd535' },
      { title: '企业贷款', iconUrl: '//rms.zbj.com/resource/redirect?key=mobile/newwap/金融.png/origine/f80103ed-c6a2-4349-b296-4b670c5ddbb5' },
      { title: '电商服务', iconUrl: '//rms.zbj.com/resource/redirect?key=mobile/newwap/电商.png/origine/c7798b2a-0802-4c4f-9e48-f566352e035b' },
      { title: '装修服务', iconUrl: '//rms.zbj.com/resource/redirect?key=mobile/newwap/装修.png/origine/93a48465-bbdc-422a-9b3a-36dfff0d6c22' },
      { title: '全部服务', iconUrl: '//rms.zbj.com/resource/redirect?key=mobile/newwap/全部分类.png/origine/9348a2f4-c18a-4db1-bea4-eff0484619d5' },
    ],
    topWap: [],
    topWapImg: [],
    getProvinceSpaces: [],
    myLove: [],
    loveList: []
  }
  render() {
    let uRl = [
      { url: '//rms.zbj.com/resource/redirect?key=mobile/newwap/商标注册-首页顶部banner1.png/origine/ced26177-7f75-45a3-b08d-72f2a77a3fca', id: '1' },
      { url: '//rms.zbj.com/resource/redirect?key=mobile/newwap/顶部换掉.png/origine/010cbd1a-b23e-4bc3-8ef9-31ad954e48ad', id: '2' },
      { url: '//rms.zbj.com/resource/redirect?key=mobile/newwap/网站建设h5B版.png/origine/8a571a50-d67e-4682-a418-405613a05ab2', id: '3' },
      { url: '//rms.zbj.com/resource/redirect?key=mobile/newwap/2.png/origine/56efcd5c-44b5-4187-9252-03d005c8ed49', id: '4' }
    ]
    let navigactions = (
      this.state.navigaction.map((item, index) => {
        return (
          <div key={index} className='brand-item'>
            <div className='brand-icon'>
              <img src={item.iconUrl} alt="" />
            </div>
            <p>{item.title}</p>
          </div>
        )
      })
    )

    let topWaps = (
      this.state.topWapImg.map((item, index) => {
        return <img key={index} src={item.img} alt="" />
      })
    )
    let work = (
      this.state.getProvinceSpaces.map((item, index) => {
        return (
          <div key={index}>
            <img key={index} src={item.spaceUrl} alt="" />
            <h2>{item.provinceName}
              <p>共{item.spaceNum}个社区</p>
            </h2>
          </div>
        )
      })
    )
    let myLove = (
      <div className='tabs2'>
        <Tabs
         tabs={this.state.myLove}
         onChange={ () => {
           this.setState({
            loveList : []
           })
           axios.post('/m/service/search/v2',{
            page: 0,
            pagesize: 10,
            sort: 1,
            minOpenShopDays: 0,
            userType: 0,
            platform: 0,
            locationCityId: 3510,
            locationProvinceId: 3492,
            guidCategoryIds: 1213
           }).then ( res => {
             this.setState({
              loveList : res.data.data.list
             })
           })
         }}
         ></Tabs>
      </div>

    )
    let loveList = (
      this.state.loveList.map((item,index )=> {
        return (
          <div key={index} className='loveList-box'>
            <div className='loveList-left'>
              <img src={item.imgUrl} alt="" />
            </div>
            <div className='loveList-right'>
              <h2>{item.highlightTitle}</h2>
              <p className='shop-service-tags'>
                <span className='tag-item'>
                  <i>{item.salePoint[0]}{item.salePoint[2]}</i>
                </span>
                <span className='tag-item'>
                  <i>{item.salePoint[1]}</i>
                </span>
              </p>

              <div className='price-block'>
                <span className='service-price'>
                  <i className='unit'>￥</i>
                  {item.price}
                <i className='unit'>/起</i>
                </span>
                <span className='font-normal'>{item.saleCount}销量</span>
                <span className='font-normal'>{item.comprehensiveScore}评分</span>
                <span className='font-normal'>广告</span><hr/>

              </div>
                <div className='comment-content'>
                  {item.serviceComment}
                </div>
                <div className='shop-button'>免费资讯</div>
            </div>
          </div>
        )
      })
    )

    let load = (
        <div className='load'>加载中...</div>
    )
    return (
      <div className='page1-box'>
        <WingBlank>
          <Carousel dots={false} infinite={true} autoplay={true} autoplayInterval='3000'>
            {
              uRl.map((item) => {
                return <img key={item.id} src={item.url} alt="" />
              })
            }
          </Carousel>
        </WingBlank>
        <div className='brand'>
          {navigactions}
        </div>
        <div className='topWap-box' id='topWap_box'>
          <div className='title'>
            <h2>官方严选服务
                    <p>{this.state.topWap.introDesc}</p>
            </h2>
            <p>更多<i className='iconfont icon-dibudaohanglan-'></i></p>
          </div>
          <div className='topWap-img'>
            {this.state.topWap === '' ? null : topWaps}

          </div>
        </div>
        <div className='topWap-box' id='topWap_box'>
          <div className='title'>
            <h2>办公社区
                    <p>办公空间/生意机会 成长交流</p>
            </h2>
            <p>更多<i className='iconfont icon-dibudaohanglan-'></i></p>
          </div>
          <div className='work'>
            {this.state.getProvinceSpaces === '' ? null : work}
          </div>
        </div>
        <div className='love-box'>
          {this.state.myLove.length > 0 ? myLove : null}
        </div>
        <div >
          {this.state.loveList.length > 0 ? loveList : load}
        </div>
      </div>
    )
  }
  topWap() {
    axios.post('/m/mnode/yx/topWap').then(res => {
      this.setState({
        topWap: res.data.data,
        topWapImg: res.data.data.introList
      })
    })
  }

  getProvinceSpaces() {
    axios.post('/m/java-api/zwork/getProvinceSpaces', {
      provinceId: 3492,
      type: 2
    }).then(res => {
      this.setState({
        getProvinceSpaces: res.data.data
      })
    })
  }
  getLabelNavigation() {
    axios.post('/m/category/getLabelNavigation/').then(res => {
      let tabs = []
      let arr = '猜我喜欢'
      res.data.data.map((item, index) => {
        return tabs.push({ title: item.title })
      })
      tabs.unshift({ title: arr })
      this.setState({
        myLove: tabs
      })
    })
  }
  loveList() {
    axios.get("/m/shunt/favorite/", {
      params: {
        locationId: 3510
      }
    }).then(res => {

      let loveList = []
      res.data.data.map( (item) => {
       return loveList.push(...item.services)
      })
      this.setState({
        loveList
      })
    })
  }
  componentDidMount() {
    this.topWap()
    this.getProvinceSpaces()
    this.getLabelNavigation()
    this.loveList()
  }

}

export default Iendex
