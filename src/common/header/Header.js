import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import {  HeaderWrapper, 
          Logo, 
          Nav, 
          NavItem, 
          NavSearch, 
          Addition,
          Button,
          SearchWrapper } from './style'

const Header = (props) => {
  return (
    <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <SearchWrapper>
            <CSSTransition 
              in={props.focused}
              timeout={400}
              classNames="slide"
            >
            <NavSearch 
              className={props.focused ? 'focused' : ''} 
              onFocus={props.handleInputFocused}
              onBlur={props.handleInputBlur}
            >
            </NavSearch>
            </CSSTransition>
            <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe6e4;</span>
          </SearchWrapper>
          
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
        </Nav>
        <Addition>
          
          <Button className="writting">
          <span className="iconfont">&#xe678;</span>
          写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
  )
  
}

const mapStateToProps = (state) => {
  return {
    focused:state.get('header').get('focused')
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocused () {
      dispatch(actionCreators.searchFocus())
    },

    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps) (Header)