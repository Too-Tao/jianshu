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
  }],
  articleList: [
    {
    id: 1,
    title: 'Android组件化----完全解耦实践方案',
    imgUrl: '//upload-images.jianshu.io/upload_images/5792828-6a022bb5caaf4602.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    desc: '首先粘贴源码地址,欢迎frok,欢迎start源码地址 目前,Android 组件化普遍使用于移动开发,但是组件化的初衷是为了解耦代码,并行开发...'
    },
    {
    id: 2,
    title: 'Android组件化----完全解耦实践方案',
    imgUrl: '//upload-images.jianshu.io/upload_images/5792828-6a022bb5caaf4602.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    desc: '首先粘贴源码地址,欢迎frok,欢迎start源码地址 目前,Android 组件化普遍使用于移动开发,但是组件化的初衷是为了解耦代码,并行开发...'
    },
    {
    id: 3,
    title: 'Android组件化----完全解耦实践方案',
    imgUrl: '//upload-images.jianshu.io/upload_images/5792828-6a022bb5caaf4602.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    desc: '首先粘贴源码地址,欢迎frok,欢迎start源码地址 目前,Android 组件化普遍使用于移动开发,但是组件化的初衷是为了解耦代码,并行开发...'
    },
    {
    id: 4,
    title: 'Android组件化----完全解耦实践方案',
    imgUrl: '//upload-images.jianshu.io/upload_images/5792828-6a022bb5caaf4602.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    desc: '首先粘贴源码地址,欢迎frok,欢迎start源码地址 目前,Android 组件化普遍使用于移动开发,但是组件化的初衷是为了解耦代码,并行开发...'
    }],
    recommendList: [
    {
      id:1,
      imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
    },
    {
      id:2,
      imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
    },
    {
      id:3,
      imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },
    {
      id:4,
      imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },
    {
      id:5,
      imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    },  
  ]
})

export default (state = defaultState, action) => {

  switch(action.type) {
    
    default:
      return state
  }

}