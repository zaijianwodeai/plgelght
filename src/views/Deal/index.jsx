import React from 'react'
import axios from 'axios'
import './index.less'
import { NavBar, Icon,Accordion } from 'antd-mobile';
class Deal extends React.Component{

  state={
    allList:[],
    pageSize:15,
    k:'',
    ss:0,
    so:1,
    sf:"modeone",
    zbjntv:1,
    loading:false
  }
  pageNum=1;
  render() {
    // // console.log(this.state.allList)
    // if(this.state.allList){
    //   this.text()
    // }
    return(
      <div className='deal'>
         <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log('onLeftClick')}
          >交易中心</NavBar>
        <div style={{ marginTop: 10,fontSize:"14px"}}>
          <Accordion defaultActiveKey='0' accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
            <Accordion.Panel header="综合" className="zonghe" > </Accordion.Panel>
            <Accordion.Panel header="公开时间" className="pad aa"  onClick={this.onLeftClick}></Accordion.Panel>
            <Accordion.Panel header="预算升序" className="pad bb">
            </Accordion.Panel>
            <Accordion.Panel header="筛选" className='shaixuan'>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div className='list-content' onScroll={this.onScroll}>
          {this.state.allList.length > 0?this.state.allList.map((item,index)=>(
          <div className='list-area'>
              <div className='module-list'>
                <ul>
                  <li className='order-item-wrap'>
                    <div className='order-item-title'>
                        {item.isTop? <span className='order-item-isTop'>顶</span>:null}
                        {item.isUrgent? <span className='order-item-isTop'>急</span>:null}
                        {item.hightPrice?<span className='price'>￥{item.hightPrice}以内</span>:
                        item.price?<span className='price'>￥{item.price}</span>:
                        <span className='price'>可议价</span>}

                      <span className='title'>{item.title}</span>
                    </div>
                    <div className='order-item-content'>
                      <p className='text'>{item.content}</p>
                    </div>
                    <div className='order-item-footer'>
                      <span className='state-list'>
                        <span className='order-item-type'>
                          招标
                        </span>
                        <span className='state'>{item.categoryName}</span>
                        {item.localAreaName?<span className='state'>{item.localAreaName}</span>:null}
                        {item.taskStatus===2?<span className='state'>工作中</span>:item.taskStatus===1?
                        <span className='state'>匹配中</span>
                        :<span className='state'>交易成功</span>}
                      </span>
                      <span className='join-num'>
                        <em>{item.bidWorkNum}</em>人参与
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )):''}
        </div>

      </div>
    )
  }
  //修改请求携带的数据使得页面渲染不同数据
  onChange=(e)=>{
    if(e==="0"){
      console.log("0")
      this.setState({
        ss:0,
        so:1,
        allList:''
      })
      // console.log(this.state.so)
      this.getAllList()
    }
    if(e==="1"){
      console.log("1")
      this.setState({
        ss:0,
        so:2,
        allList:''
      })
      // console.log(this.state.so)
      this.getAllList()
  }

  let aa=document.getElementsByClassName('aa')[0]//预算
    if(aa.className.indexOf('am-accordion-item-active')!==-1){
      console.log('aa')
      this.setState({
        ss:1,
        so:2,
        allList:''
      })
      this.getAllList()
    }

  if(e==="2"){
    console.log("2")
    this.setState({
      ss:0,
      so:3,
      allList:''
    })
    this.getAllList()
  }

    let bb=document.getElementsByClassName('bb')[0]//预算
    if(bb.className.indexOf('am-accordion-item-active')!==-1){
      console.log('bb')
      this.setState({
        ss:1,
        so:3,
        allList:''
      })
      this.getAllList()
    }



    // let bb=document.getElementsByClassName('bb')[0]//预算
    // if(bb.className.indexOf('am-accordion-item-active')===-1){
    //   this.setState({
    //     ss:1,
    //     so:3,
    //     allList:''
    //   })
    //   this.getAllList()
    // }
  }
  getAllList() {
    this.setState({
      loading:true
    })
    axios.get('/task/hallapi/v/index/list',{
      params:{
        pageNum:this.pageNum,
        pageSize:this.state.pageSize,
        k:this.state.k,
        ss:this.state.ss,
        so:this.state.so,
        sf:this.state.sf,
        zbjntv:this.state.zbjntv,
      }
    }).then(response=>{
      let newAllList=[...this.state.allList]
      newAllList=[...newAllList].concat(...response.data.data.regionList.list)
      // console.log(newAllList)
      this.setState({
        allList:newAllList,
        loading:false
      })
    })
  }
  onScroll=e=>{
    let target=e.target
    //滚动条滚动的距离
    let scrollTop=target.scrollTop;
    //滚动容器中内容的整体高度target.scrollHeight
    let scrollHeight=target.scrollHeight;
    //滚动容器的高度
    let clientHeight=target.clientHeight;
    if(scrollTop+clientHeight>scrollHeight-500){
      //加载下一页
       this.pageNum+=1;
       this.getAllList()
      //  console.log(this.getAllList())
    }
  }
  componentDidMount(){
    this.getAllList()
  }
}

export default Deal
