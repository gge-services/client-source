Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicCommand = require("gge-module:class_BasicCommand");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_BasicErrorConstants = require("gge-module:class_BasicErrorConstants");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __s0local0 = function (__s1param0) {
  function GFLCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(GFLCommand, __s1param0);
  Object.defineProperty(GFLCommand.prototype, "cmdId", {
    get: function () {
      return __dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_GET_FORUM_LOGIN_DATA;
    },
    enumerable: true,
    configurable: true
  });
  GFLCommand.prototype.executeCommand = function (__s7param0, __s7param1) {
    return __s7param0 == __dep_class_BasicErrorConstants.BasicErrorConstants.ALL_OK && (__dep_class_BasicModel.BasicModel.forumData.updateCryptedForumHash(String(__s7param1[1])), true);
  };
  return GFLCommand;
}(__dep_class_BasicCommand.BasicCommand);
exports.GFLCommand = __s0local0;
