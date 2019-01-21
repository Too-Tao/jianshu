import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  articleList: result.articleList,
  recommendList: result.recommendList,
  topicList: result.topicList
})

const addHomeList = (list) => ({
  type: actionTypes.ADD_ARTICLE_LIST,
  list: fromJS(list)
})


export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('./api/home.json').then((res) => {
      const result = res.data.data
      
      dispatch(changeHomeData(result))
    })
  }
}

export const getMoreList = () => {
  return (dispatch) => {
    axios.get('./api/homeList.json').then((res) => {
      const result = res.data.data
      // console.log(result)
      dispatch(addHomeList(result))
    })
  } 
}

export const toggleToShow = (show) => ({
  type: actionTypes.TOGGLE_SCROLL_TOP,
  show
})