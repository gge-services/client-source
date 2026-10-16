Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_TrackingCache = require("gge-module:class_TrackingCache");
var __dep_class_BasicCommand = require("gge-module:class_BasicCommand");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_BasicErrorConstants = require("gge-module:class_BasicErrorConstants");
var __dep_exact_048b0d27b75c40dd = require("gge-module:exact_048b0d27b75c40dd");
var __s0local0 = function (__s1param0) {
  function GPICommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(GPICommand, __s1param0);
  Object.defineProperty(GPICommand.prototype, "cmdId", {
    get: function () {
      return __dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_GET_PLAYER_INFO;
    },
    enumerable: true,
    configurable: true
  });
  GPICommand.prototype.executeCommand = function (__s7param0, __s7param1) {
    if (__s7param0 == __dep_class_BasicErrorConstants.BasicErrorConstants.ALL_OK) {
      var __s7local0 = JSON.parse(__s7param1.pop()).networkId;
      __dep_class_TrackingCache.TrackingCache.getInstance().networkId = __s7local0;
      return true;
    }
    __dep_exact_048b0d27b75c40dd.error("GPICommand received error: " + __s7param0.toString() + " while expecting to get errorId 0");
    return false;
  };
  return GPICommand;
}(__dep_class_BasicCommand.BasicCommand);
exports.GPICommand = __s0local0;
