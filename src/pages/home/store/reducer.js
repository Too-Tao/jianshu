import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [{
    id:1,
    title: '社会热点',
    imgUrl: ''
  },{
    id:2,
    title: '手绘',
    imgUrl: ''
  }]
})

export default (state = defaultState, action) => {

  switch(action.type) {
    
    default:
      return state
  }

}