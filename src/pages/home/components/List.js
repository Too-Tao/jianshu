import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style'
import { actionCreators } from '../store'

class List extends Component {
  render() {
    const { list, getMoreList } = this.props
    return (
      <div>
        {
          list.map((item) => {
            return (
              <ListItem key={item.get('id')}>
              <img className='pic' src={item.get('imgUrl')} alt=''/>
              <ListInfo>
                <h3 className='title'>{item.get('title')}</h3>
                <p className='desc'>{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
            )
          })
        }
        <LoadMore onClick={getMoreList}>更多文字</LoadMore>
      </div>
      
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home','articleList'])
})

const mapDispatch = (dispatch) => ({
  getMoreList() {
    dispatch(actionCreators.getMoreList())
  }
})

export default  connect(mapState,mapDispatch)(List)