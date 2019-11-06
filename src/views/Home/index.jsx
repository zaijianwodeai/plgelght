import React from 'react'
import { WingBlank, Carousel } from 'antd-mobile'

import axios from 'axios'
import './index.less'
class Iendex extends React.Component {
  render() {
    // state= {
    //   navigaction : ''
    // }
    let uRl = [
      { url: '//rms.zbj.com/resource/redirect?key=mobile/newwap/商标注册-首页顶部banner1.png/origine/ced26177-7f75-45a3-b08d-72f2a77a3fca', id: '1' },
      { url: '//rms.zbj.com/resource/redirect?key=mobile/newwap/顶部换掉.png/origine/010cbd1a-b23e-4bc3-8ef9-31ad954e48ad', id: '2' },
      { url: '//rms.zbj.com/resource/redirect?key=mobile/newwap/网站建设h5B版.png/origine/8a571a50-d67e-4682-a418-405613a05ab2', id: '3' },
      { url: '//rms.zbj.com/resource/redirect?key=mobile/newwap/2.png/origine/56efcd5c-44b5-4187-9252-03d005c8ed49', id: '4' }
    ]
    return (
      <div className='page-box'>
        <WingBlank>
          <Carousel dots={false} infinite={true} autoplay={true} autoplayInterval='3000'>
            {
              uRl.map((item) => {
                return <img key={item.id} src={item.url} alt="" />
              })
            }
          </Carousel>
        </WingBlank>

      </div>
    )
  }
  getLabelNavigaction() {
    axios.post('/m/category/getLabelNavigation/').then( res => {
      console.log(res.data.data)
      // this.setState({
      //   navigaction
      // })
    })
  }
  componentDidMount() {
    this.getLabelNavigaction()
  }
}

export default Iendex
