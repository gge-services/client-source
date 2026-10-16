Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicCommand = require("gge-module:class_BasicCommand");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_ServerErrorVO = require("gge-module:class_ServerErrorVO");
var __dep_class_BasicErrorConstants = require("gge-module:class_BasicErrorConstants");
var __dep_class_BasicPaymentEvent = require("gge-module:class_BasicPaymentEvent");
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __s0local0 = function (__s1param0) {
  function NCHCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(NCHCommand, __s1param0);
  Object.defineProperty(NCHCommand.prototype, "cmdId", {
    get: function () {
      return __dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_NEW_CASH_HASH;
    },
    enumerable: true,
    configurable: true
  });
  NCHCommand.prototype.executeCommand = function (__s7param0, __s7param1) {
    if (__s7param0 == __dep_class_BasicErrorConstants.BasicErrorConstants.ALL_OK) {
      if (__s7param1.length == 2) {
        __s7param1.shift();
      }
      __dep_class_BasicController.BasicController.getInstance().paymentHash = String(__s7param1.shift());
      __dep_class_BasicController.BasicController.getInstance().dispatchEvent(new __dep_class_BasicPaymentEvent.BasicPaymentEvent(__dep_class_BasicPaymentEvent.BasicPaymentEvent.PAYMENT_HASH_CHANGED));
    } else if (__s7param0 == __dep_class_BasicErrorConstants.BasicErrorConstants.NO_PLAYER) {
      __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_HANDLE_SERVER_ERROR, new __dep_class_ServerErrorVO.ServerErrorVO(__s7param0, __s7param1));
    }
    return false;
  };
  return NCHCommand;
}(__dep_class_BasicCommand.BasicCommand);
exports.NCHCommand = __s0local0;
