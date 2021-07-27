"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = countReducer;

var _constant = require("./constant");

// 引入constant.js
var initState = 0;

function countReducer() {
  var preState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      data = action.data;

  switch (type) {
    case _constant.INCREMENT:
      return preState + data * 1;

    case _constant.DECREMENT:
      return preState - data * 1;

    default:
      return preState;
  }
}
//# sourceMappingURL=count_reducer.dev.js.map
