import React, { Component } from 'react'
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
          SearchWrapper,
          SearchInfo,
          SearchInfoTitle,
          SearchInfoSwitch,
          SearchInfoItem,
          SearchInfoList } from './style'



class Header extends Component {
  getListArea = () => {
    if(this.props.focused) {
      return (
        <SearchInfo>
                <SearchInfoTitle>
                  热门搜索
                  <SearchInfoSwitch>
                    换一批
                  </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                  {
                    this.props.list.map((item) => {
                      return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                    })
                  }
                </SearchInfoList>
              </SearchInfo>
      )
    } else {
      return null
    }
  }
  render(){
    return (
      <HeaderWrapper>
          <Logo/>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载APP</NavItem>
            <SearchWrapper>
              <CSSTransition 
                in={this.props.focused}
                timeout={400}
                classNames="slide"
              >
              <NavSearch 
                className={this.props.focused ? 'focused' : ''} 
                onFocus={this.props.handleInputFocused}
                onBlur={this.props.handleInputBlur}
              >
              </NavSearch>
              </CSSTransition>
              <span className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe6e4;</span>
              {this.getListArea()}
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
  
  
}

const mapStateToProps = (state) => {
  return {
    focused:state.get('header').get('focused'),
    list: state.getIn(['header','list'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocused () {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },

    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps) (Header)