/*

用于汇总reducer为一个总的reducer
*/
// combineReducers用于汇总多个reducer
import {
  combineReducers
} from 'redux'
import countReducer from './count_reducer'
import personReducer from './person_reducer'
// combineReducers调用时传入的那个对象就是redux帮我们保存的总状态对象
const allReducer = combineReducers({
  he: countReducer,
  rens: personReducer
})
export default allReducer