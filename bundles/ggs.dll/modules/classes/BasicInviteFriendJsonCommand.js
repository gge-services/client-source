Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __s0local0 = function (__s1param0) {
  function BasicInviteFriendJsonCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicInviteFriendJsonCommand, __s1param0);
  BasicInviteFriendJsonCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __s5param0;
    if (__s5local0 && __s5local0.length == 3) {
      var __s5local1 = {
        myname: String(__s5local0.shift()),
        name: String(__s5local0.shift()),
        mail: String(__s5local0.shift())
      };
      __dep_class_BasicModel.BasicModel.smartfoxClient.sendMessage(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.C2S_INVITE_FRIEND, [JSON.stringify(__s5local1)]);
    }
  };
  return BasicInviteFriendJsonCommand;
}(require("gge-module:class_SimpleCommand").SimpleCommand);
exports.BasicInviteFriendJsonCommand = __s0local0;
