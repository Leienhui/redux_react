"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _count_reducer = _interopRequireDefault(require("./count_reducer"));

var _person_reducer = _interopRequireDefault(require("./person_reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*

用于汇总reducer为一个总的reducer
*/
// combineReducers用于汇总多个reducer
// combineReducers调用时传入的那个对象就是redux帮我们保存的总状态对象
var allReducer = (0, _redux.combineReducers)({
  he: _count_reducer["default"],
  rens: _person_reducer["default"]
});
var _default = allReducer;
exports["default"] = _default;
//# sourceMappingURL=index.dev.js.map
