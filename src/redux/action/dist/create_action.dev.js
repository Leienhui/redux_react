"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIncrementAsyncAction = exports.createDecrementAction = exports.createIncrementAction = void 0;

var _constant = require("../constant");

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
var createIncrementAction = function createIncrementAction(data) {
  return {
    type: _constant.INCREMENT,
    data: data
  };
};

exports.createIncrementAction = createIncrementAction;

var createDecrementAction = function createDecrementAction(data) {
  return {
    type: _constant.DECREMENT,
    data: data
  };
}; // 异步action返回值是函数，同步action返回值是一般对象
// 需要使用中间件redux-thunk,在store.js使用


exports.createDecrementAction = createDecrementAction;

var createIncrementAsyncAction = function createIncrementAsyncAction(data, time) {
  return function (dispatch) {
    setTimeout(function () {
      // store.dispatch(createIncrementAction(data));
      dispatch(createIncrementAction(data));
    }, time);
  };
};

exports.createIncrementAsyncAction = createIncrementAsyncAction;
//# sourceMappingURL=create_action.dev.js.map
