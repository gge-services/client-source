Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_JavascriptCallSetCashHashVO = require("gge-module:class_JavascriptCallSetCashHashVO");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __s0local0 = function () {
  function JavascriptCallSetCashHashFactory() {}
  JavascriptCallSetCashHashFactory.prototype.createVO = function () {
    return new __dep_class_JavascriptCallSetCashHashVO.JavascriptCallSetCashHashVO(__dep_class_BasicController.BasicController.getInstance().paymentHash);
  };
  return JavascriptCallSetCashHashFactory;
}();
exports.JavascriptCallSetCashHashFactory = __s0local0;
