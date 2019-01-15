import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})
  

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data)
})

export const getList = () => {
  return (dispatch) => {
    // console.log('1321')
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data
      // console.log(data)
      const action = (changeList(data.data))
      dispatch(action)
    }).catch((err)=> {
      console.log(err)
    })
  }
}