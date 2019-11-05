import React from 'react'

import { Switch, Route, NavLink, HashRouter } from 'react-router-dom'
import { TabBar, } from 'antd-mobile'

import Strict from './Strict/index'
import Case from './case/index'
import './Home.less'
class Home extends React.Component {
  render() {
    return (
      <div className='page-Home'>
        <TabBar
          unselectedTintColor="#000"
          tintColor="#ff5f16"
          barTintColor="#fff"
        >
          <TabBar.Item
            title='首页'
            icon={<i className='iconfont icon-shouye'></i>}
            selectedIcon={<i className='iconfont icon-shouye'></i>}
          >
            <HashRouter>
              <Switch>
                <Route path='/strict' component={Strict}></Route>
                <Route path='/case' component={Case}></Route>
                <Route></Route>
              </Switch>
            </HashRouter>
            <ul>
              <li>
                <NavLink to='/'>服务</NavLink>
              </li>
              <li>
                <NavLink to='/strict'>严选</NavLink>
              </li>
              <li>
                <NavLink to='/case'>案例</NavLink>
              </li>
              <li>
                <NavLink to="/deal">交易</NavLink>
              </li>
            </ul>
          </TabBar.Item>
          <TabBar.Item
            title='办公'
            icon={<i className='iconfont icon-qiyebangonglou'></i>}
            selectedIcon={<i className='iconfont icon-qiyebangonglou'></i>}
          >
          </TabBar.Item>
          <TabBar.Item
            title='发需求'
            icon={<i className='iconfont icon-022caozuo_jiahao'></i>}
            selectedIcon={<i className='iconfont icon-022caozuo_jiahao'></i>}
          >
          </TabBar.Item>
          <TabBar.Item
            title='活动'
            icon={<i className='iconfont icon-icon'></i>}
            selectedIcon={<i className='iconfont icon-icon'></i>}
          >
          </TabBar.Item>
          <TabBar.Item
            title='我的'
            icon={<i className='iconfont icon-wode'></i>}
            selectedIcon={<i className='iconfont icon-wode'></i>}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}

export default Home
