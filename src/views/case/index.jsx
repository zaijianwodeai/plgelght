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
    FavoriteCase : null,
    tab : false,
    page:0,
    loading:false,
    listTop:false
  }
  render() {
    const tabs = this.state.LabelNavigation.length > 0 ? this.state.LabelNavigation : []
    const tops = [{title:'精选'},{title:'最热'},{title:'筛选'}]

    let loadingEL = (
      <div className="loading">
        <i></i>
        <span>加载中...</span>
      </div>
    )
    return(
      <div className='content-box' onScroll={this.onScroll}>
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
            {/* 猜你喜欢列表导航 */}
            <div className={this.state.tab ? 'tab-box-hidde tab-box' : 'tab-box'}>
              <div className='tab-inner'>
                <div className='list-tab'>
                  <Tabs tabs={tabs} onTabClick={(tab,index) => {
                    if(index === 0 ){
                      this.setState({
                        // 控制精选、最热、筛选
                        listTop : false
                      })
                    }else{
                      this.setState({
                        listTop : true
                      })
                    }
                  }} tabBarActiveTextColor='#ff6900' tabBarUnderlineStyle={{width : '20%', border: '1px solid #ff6900'}}>
                    {this.renderContent}
                  </Tabs>
                </div>
              </div>
            </div>
            {
                  this.state.listTop ? <div  className='list-top'>
                    <Tabs tabs={tops} tabBarUnderlineStyle={{ display : 'none'}} tabBarActiveTextColor='#ff6900' >
                    {this.renderContent}
                  </Tabs>
                  </div>  : ''
                }
            {/* 列表详情 */}
            <div className='list-box'>
              <div className='load-more'>
                <div className='case-list'>
                  {
                    this.state.FavoriteCase ? this.state.FavoriteCase.map(item => {
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
                {loadingEL}
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
    })
  }
  getFavoriteCase() {
    this.setState({
      loading : true
    })
    setTimeout(() => {
      axios.post('/m/shunt/favoriteCase/',{
        locationCityId: 3510,
        locationProvinceId: 3492,
        page: this.state.page,
        pagesize: 10
      }).then(response => {
        let result = response.data
        let newResult = this.state.FavoriteCase ? [...this.state.FavoriteCase] : []
        newResult = newResult.concat(result.data.list)
        this.setState({
          FavoriteCase : newResult,
          loading : false
        })
      })
    },200)

  }
  onScroll = e => {
    let target = e.target
    let scrollTop = target.scrollTop   //滚动的距离
    let scrollHeight = target.scrollHeight
    let clientHeight = target.clientHeight

    if(scrollTop >= 265) {
      this.setState ({
        tab : true
      }
      )
    }else{
      this.setState ({
        tab : false
      }
      )
    }
    if(scrollTop + clientHeight >= scrollHeight  && !this.state.loading){
      let pageNum = this.state.page +1
      this.setState({
        page : pageNum
      })
      setTimeout(() => {
          this.getFavoriteCase()
      },100)
    }
  }

  componentDidMount() {
    this.getCaseBanner()
    this.getWonderful()
    this.getLabelNavigation()
    this.getFavoriteCase()
  }
}

export default Case
