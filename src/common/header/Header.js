import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import {  HeaderWrapper, 
          Logo, 
          Nav, 
          NavItem, 
          NavSearch, 
          Addition,
          Button,
          SearchWrapper } from './style'

export default class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }
  }
  handleInputFocused = () => {
    this.setState({
      focused: true
    })
  }
  handleInputBlur = () => {
    this.setState({
      focused: false
    })
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <SearchWrapper>
            <CSSTransition 
              in={this.state.focused}
              timeout={400}
              classNames="slide"
            >
            <NavSearch 
              className={this.state.focused ? 'focused' : ''} 
              onFocus={this.handleInputFocused}
              onBlur={this.handleInputBlur}
            >
            </NavSearch>
            </CSSTransition>
            <span className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe6e4;</span>
          </SearchWrapper>
          
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
        </Nav>
        <Addition>
          
          <Button className="writting">
          <span class="iconfont">&#xe678;</span>
          写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}
