import React, { Component } from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import { actionCreators } from './store/index'
import {  
HomeWrapper,
HomeLeft,
HomeRight
} from './style'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img 
            className='banner-img' 
            src="//upload.jianshu.io/admin_banners/web_images/4605/1d5cb81933dbb48ab0aa53d481a1300fc5406e7f.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=''
          />
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    )
  }

  componentDidMount(){
    this.props.changeHomeData()
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch( actionCreators.getHomeInfo())
  }
})

export default connect(null, mapDispatch)(Home)