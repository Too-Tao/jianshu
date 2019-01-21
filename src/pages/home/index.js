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
HomeRight,
BackTop
} from './style'

class Home extends Component {

  handleScrollTop() {
    window.scrollTo(0,0)
  }

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
        {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
        }
        
      </HomeWrapper>
    )
  }

  componentDidMount(){
    this.props.changeHomeData()
    this.bindEvents()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }

  
}

const mapState = (state) => ({
  showScroll: state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch( actionCreators.getHomeInfo())
  },
  changeScrollTopShow() {
    // console.log(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleToShow(true))
    } else {
      dispatch(actionCreators.toggleToShow(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home)
