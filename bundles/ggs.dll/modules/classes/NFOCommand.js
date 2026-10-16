Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicCommand = require("gge-module:class_BasicCommand");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_BasicErrorConstants = require("gge-module:class_BasicErrorConstants");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_exact_9036b0ddd67c3c6e = require("gge-module:exact_9036b0ddd67c3c6e");
var __s0local0 = function (__s1param0) {
  function NFOCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(NFOCommand, __s1param0);
  Object.defineProperty(NFOCommand.prototype, "cmdId", {
    get: function () {
      return __dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_SERVER_INFO_EVENT;
    },
    enumerable: true,
    configurable: true
  });
  NFOCommand.prototype.executeCommand = function (__s7param0, __s7param1) {
    if (__s7param0 == __dep_class_BasicErrorConstants.BasicErrorConstants.ALL_OK) {
      var __s7local0 = JSON.parse(__s7param1[1]);
      __dep_class_BasicModel.BasicModel.basicLocalization.setUsernameMinLength = __s7local0.minNameSize;
      var __s7local1 = __s7local0.itemXmlVersion;
      this.compareItemsVersions(__s7local1);
      return true;
    }
    return false;
  };
  NFOCommand.prototype.compareItemsVersions = function (__s10param0) {
    var __s10local0 = this.env.versionInformation.itemXmlVersion;
    if (__s10local0 != __s10param0) {
      __dep_exact_9036b0ddd67c3c6e.debug("Item XML version of client [" + __s10local0 + "] doesn't fit to item XML version of the server [" + __s10param0 + "]");
    }
  };
  return NFOCommand;
}(__dep_class_BasicCommand.BasicCommand);
exports.NFOCommand = __s0local0;
