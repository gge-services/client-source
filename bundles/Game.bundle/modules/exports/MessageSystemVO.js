Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_MessageUserVO = require("gge-module:export_MessageUserVO");
var __s0local0 = function (__s1param0) {
  function MessageSystemVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MessageSystemVO, __s1param0);
  Object.defineProperty(MessageSystemVO.prototype, "senderName", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("system");
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_MessageUserVO.MessageUserVO.prototype, "senderName").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  return MessageSystemVO;
}(__dep_export_MessageUserVO.MessageUserVO);
exports.MessageSystemVO = __s0local0;
