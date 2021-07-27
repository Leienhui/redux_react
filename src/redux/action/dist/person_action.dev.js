"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAddPersonAction = void 0;

var _constant = require("../constant");

var createAddPersonAction = function createAddPersonAction(personObj) {
  return {
    type: _constant.ADD_PERSON,
    data: personObj
  };
};

exports.createAddPersonAction = createAddPersonAction;
//# sourceMappingURL=person_action.dev.js.map
