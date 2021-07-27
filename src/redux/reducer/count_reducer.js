// 引入constant.js
import {
  INCREMENT,
  DECREMENT
} from '../constant'
const initState = 0

export default function countReducer(preState = initState, action) {
  const {
    type,
    data
  } = action
  switch (type) {
    case INCREMENT:
      return preState + data * 1
    case DECREMENT:
      return preState - data * 1
    default:
      return preState
  }
}