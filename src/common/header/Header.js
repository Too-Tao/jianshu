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
    const { focused, list, page, totalPage, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage } = this.props
    const pageList = []
    const newList = list.toJS()
    if (newList.length) {
      for(let i = (page-1)*10; i < page * 10; i++ ) {
        // console.log(page)
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if(focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
                <SearchInfoTitle>
                  热门搜索
                  <SearchInfoSwitch onClick={()=> handleChangePage(page, totalPage)}>
                    换一批
                  </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                  {
                    pageList
                  }
                </SearchInfoList>
              </SearchInfo>
      )
    } else {
      return null
    }
  }
  render(){
    const { focused, handleInputFocused, handleInputBlur } = this.props
    return (
      <HeaderWrapper>
          <Logo/>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载APP</NavItem>
            <SearchWrapper>
              <CSSTransition 
                in={focused}
                timeout={400}
                classNames="slide"
              >
              <NavSearch 
                className={focused ? 'focused' : ''} 
                onFocus={handleInputFocused}
                onBlur={handleInputBlur}
              >
              </NavSearch>
              </CSSTransition>
              <span className={focused ? 'focused iconfont' : 'iconfont'}>&#xe6e4;</span>
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
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    totalPage: state.getIn(['header','totalPage']),
    mouseIn: state.getIn(['header','mouseIn'])

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
    },

    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },

    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },

    handleChangePage(page, totalPage) {
      if(page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
      
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps) (Header)