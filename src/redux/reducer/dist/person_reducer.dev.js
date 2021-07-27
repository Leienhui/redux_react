"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = personReducer;

var _constant = require("../constant");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var initState = [{
  id: 1,
  name: 'tom',
  age: 18
}];

function personReducer() {
  var preState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      data = action.data;

  switch (type) {
    case _constant.ADD_PERSON:
      return [data].concat(_toConsumableArray(preState));

    default:
      return preState;
  }
}
//# sourceMappingURL=person_reducer.dev.js.map
