import React from 'react'
import axios from 'axios'
import { Carousel, WingBlank,Tabs } from 'antd-mobile'
import { NavLink } from 'react-router-dom'
import './index.less'

class Case extends React.Component{
  state = {
    bannerList : null,
    famousData : [],
    governmentData:[],
    LabelNavigation:[],
    FavoriteCase : null
  }
  render() {
    const tabs = this.state.LabelNavigation.length > 0 ? this.state.LabelNavigation : []
    return(
      <div>
        <div className='content'>
          <div className='banner'>
            <WingBlank>
              <Carousel dots={false}>{
                this.state.bannerList ? this.state.bannerList.data.moduleList[0].ads.map((item,index) => {
                  return <img style={{ width: '100%', verticalAlign: 'top' }} key={index} src={item.imgUrl} alt='' />
              }) : ''
              }</Carousel>
            </WingBlank>
          </div>
          <div className='jcase'>
              <p>
                <span className='text'>精彩案例</span>
                <NavLink className='more' to='/case/wonderful'>更多 ></NavLink>
              </p>
              <div className='carousel'>
                <WingBlank>
                  <Carousel dotStyle={{ width : '4px',height:'4px',margin:'0 2px',borderRadius:'4px',background:'#ccc' }} dotActiveStyle={{ width : '8px' , background : '#ff6900',height: '4px' , margin: '0 2px', borderRadius: '4px'}}>
                    <div className='wonderfulcase'>{
                      this.state.famousData.length > 0 ? this.state.famousData.map(item => {
                        return (
                        <div key={item.caseId} className='itemCase'>
                          <img style={{ width: '100%', verticalAlign: 'top' }} src={item.img} alt=""/>
                        </div>
                        )
                      }) : ''
                    }</div>
                    <div className='wonderfulcase'>{
                      this.state.governmentData.length > 0 ? this.state.governmentData.map((item,index) => {
                        return (
                        <div style={{ position : 'relative' }} key={index} className='itemCase'>
                          <img style={{ width: '100%', verticalAlign: 'top' }} src={item.img} alt=""/>
                          <div style={{ position : 'absolute' , left : 0 , right : 0 , top : 0 , bottom : 0 , alignItems: 'center' }} className='text-box'>
                            <p>{item.title}</p>
                          </div>
                        </div>
                        )
                      }) : ''
                    }</div>
                  </Carousel>
                </WingBlank>
              </div>
          </div>
          <div className='tab-list'>
            <div className='tab-bar'></div>
            {/* a */}
            {/* 猜你喜欢列表导航 */}
            <div className='tab-box'>
              <div className='tab-inner'>
                <div className='list-tab'>
                  <Tabs tabs={tabs} tabBarActiveTextColor='#ff6900' tabBarUnderlineStyle={{width : '20%', border: '1px solid #ff6900'}}>
                    {this.renderContent}
                  </Tabs>
                </div>
              </div>
            </div>
            {/* 列表详情 */}
            <div className='list-box'>
              <div className='load-more'>
                <div className='case-list'>
                  {
                    this.state.FavoriteCase ? this.state.FavoriteCase.list.map(item => {
                      return (
                        <div className='case-list-item' key={item.caseId}>
                          <div className='case-img'>
                            <img style={{width : '100%',height: '100%'}} src={item.coverFileUrl} alt=""/>
                          </div>
                          <div className='case-info'>
                            <div className='case-info-top'>
                              <div className='info-title'>{item.highlightTitle}</div>
                              <div className='info-tags'>
                                {
                                  item.label.length>0 ? item.label.map((val,index) => {
                                    return <span className='tag-item' key={index}>{val}</span>
                                  }) : ''
                                }
                              </div>
                              <div className='info-icons'>
                                <div className='icons-view'>
                                  <i className='iconfont icon-liulan'></i>{item.views}
                                </div>
                                <div className='icons-thumbup'>
                                  <i className='iconfont icon-thumbup'></i>{item.thumbsUp}
                                </div>
                              </div>
                            </div>
                            <div className='case-info-detail'>
                              <div className='detail-head'>
                                <img src="http://avatar.zbjimg.com/010/43/51/200x200_avatar_55.jpg!big" alt="数据加载失败"/>
                                <div className='detail-name'>{item.shopName}</div>
                              </div>
                              <div className='detail-city'>{item.provinceName}</div>
                            </div>
                          </div>
                        </div>
                      )
                    }) : ''
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  getCaseBanner() {
    axios.post('/m/mnode/case/topBannerWap').then(response => {
      let result = response.data
      this.setState ({
        bannerList : result
      })
    })
  }
  getWonderful() {
    axios.post('/m/mnode/case/wonderfulCaseSimple').then(response => {
      let result = response.data
      this.setState({
        famousData : result.data.famousData,
        governmentData : result.data.governmentData,
      })
    })
  }
  getLabelNavigation() {
    axios.post('/m/category/getLabelNavigation').then(response => {
      let result = response.data
      let arr = [{title:'猜你喜欢'}]
      arr.push(...result.data)
      this.setState({
        LabelNavigation : arr
      })
      console.log(this.state.LabelNavigation)
    })
  }
  getFavoriteCase() {
    axios.post('/m/shunt/favoriteCase/',{
      locationCityId: 3510,
      locationProvinceId: 3492,
      page: 0,
      pagesize: 10
    }).then(response => {
      let result = response.data
      this.setState({
        FavoriteCase : result.data
      })
      console.log(this.state.FavoriteCase)
    })
  }

  componentDidMount() {
    this.getCaseBanner()
    this.getWonderful()
    this.getLabelNavigation()
    this.getFavoriteCase()
  }
}

export default Case
