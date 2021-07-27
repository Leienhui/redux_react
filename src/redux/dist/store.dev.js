"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _index = _interopRequireDefault(require("./reducer/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// // applyMiddleware使用Thunk中间件进行异步操作
// // createStore专门用于创建redux中最核心的store
// // combineReducers合并多个reducer
// import {
//   createStore,
//   applyMiddleware,
//   combineReducers
// } from 'redux'
// import thunk from 'redux-thunk'
// import countReducer from './reducer/count_reducer'
// import personReducer from './reducer/person_reducer'
// // npm i redux-devtools-extension
// // 引入redux-devtools-extension
// import {
//   composeWithDevTools
// } from 'redux-devtools-extension'
// // 暴露store
// // export default createStore(countReducer, applyMiddleware(thunk))
// // combineReducers调用时传入的那个对象就是redux帮我们保存的总状态对象
// const allReducer = combineReducers({
//   he: countReducer,
//   rens: personReducer
// })
// // export default createStore(allReducer, applyMiddleware(thunk))
// // 引入redux-devtools-extension后
// // redux-devtools开发者工具就能用了
// export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))
// ==========================================================================================================================
// 在reducer文件夹中新建一个index.js用于汇总reducer
// npm i redux-devtools-extension
// 引入redux-devtools-extension
// 引入redux-devtools-extension后
// redux-devtools开发者工具就能用了
var _default = (0, _redux.createStore)(_index["default"], (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk["default"])));

exports["default"] = _default;
//# sourceMappingURL=store.dev.js.map
