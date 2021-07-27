// 该文件专门为count组件生成action对象

// export const createIncrementAction = (data) => {
//   return {
//     type: 'increment',
//     data
//   }
// }

// export const createDecrementAction = (data) => {
//   return {
//     type: 'decrement',
//     data
//   }
// }

// 引入constant.js
import {
  INCREMENT,
  DECREMENT
} from '../constant'
// import store from '../store'
export const createIncrementAction = (data) => {
  return {
    type: INCREMENT,
    data
  }
}

export const createDecrementAction = (data) => {
  return {
    type: DECREMENT,
    data
  }
}
// 异步action返回值是函数，同步action返回值是一般对象
// 需要使用中间件redux-thunk,在store.js使用
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      // store.dispatch(createIncrementAction(data));
      dispatch(createIncrementAction(data));

    }, time)
  }
}