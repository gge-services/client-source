Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_CMTCommand = require("gge-module:class_CMTCommand");
var __dep_class_CPSCommand = require("gge-module:class_CPSCommand");
var __dep_class_GCHCommand = require("gge-module:class_GCHCommand");
var __dep_class_GFLCommand = require("gge-module:class_GFLCommand");
var __dep_class_GICCommand = require("gge-module:class_GICCommand");
var __dep_class_GPICommand = require("gge-module:class_GPICommand");
var __dep_class_LPPCommand = require("gge-module:class_LPPCommand");
var __dep_class_NCHCommand = require("gge-module:class_NCHCommand");
var __dep_class_NFOCommand = require("gge-module:class_NFOCommand");
var __dep_class_SICCommand = require("gge-module:class_SICCommand");
var __dep_class_SMSCommand = require("gge-module:class_SMSCommand");
var __dep_class_SPECommand = require("gge-module:class_SPECommand");
var __dep_class_SPLCommand = require("gge-module:class_SPLCommand");
var __dep_class_TCICommand = require("gge-module:class_TCICommand");
var __dep_class_VPMCommand = require("gge-module:class_VPMCommand");
var __dep_class_VCKCommand = require("gge-module:class_VCKCommand");
var __dep_exact_9036b0ddd67c3c6e = require("gge-module:exact_9036b0ddd67c3c6e");
var __s0local0 = function (__s1param0) {
  function BasicInitServerCommands() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.commandDict = __dep_class_BasicController.BasicController.commandDict;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicInitServerCommands, __s1param0);
  BasicInitServerCommands.prototype.execute = function (__s5param0 = null) {
    __dep_exact_9036b0ddd67c3c6e.debug("BasicInitServerCommands");
    var __s5local0 = __dep_class_BasicController.BasicController.commandDict;
    __s5local0.set(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_CASH_HASH, new __dep_class_GCHCommand.GCHCommand());
    __s5local0.set(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_NEW_CASH_HASH, new __dep_class_NCHCommand.NCHCommand());
    __s5local0.set(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_GET_FORUM_LOGIN_DATA, new __dep_class_GFLCommand.GFLCommand());
    __s5local0.set(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_SERVER_MESSAGE, new __dep_class_SMSCommand.SMSCommand());
    __s5local0.set(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_COMA_TEASER, new __dep_class_CMTCommand.CMTCommand());
    __s5local0.set(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_SERVER_INFO_EVENT, new __dep_class_NFOCommand.NFOCommand());
    __s5local0.set(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_VERIFY_PLAYER_MAIL_EVENT, new __dep_class_VPMCommand.VPMCommand());
    __s5local0.set(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_LOST_PASSWORD_EVENT, new __dep_class_LPPCommand.LPPCommand());
    __s5local0.set(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_CHILD_PROTECTION_AUTO_SHUTDOWN_EVENT, new __dep_class_CPSCommand.CPSCommand());
    __s5local0.set(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_SOCIAL_PLAYER_EXISTS, new __dep_class_SPECommand.SPECommand());
    __s5local0.set(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_NEW_LOGIN_SOCIAL, new __dep_class_SPLCommand.SPLCommand());
    __s5local0.set(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_TEST_CASE_INFO, new __dep_class_TCICommand.TCICommand());
    __s5local0.set(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_GET_PLAYER_INFO, new __dep_class_GPICommand.GPICommand());
    __s5local0.set(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_GENERATE_INVITE_CODE, new __dep_class_GICCommand.GICCommand());
    __s5local0.set(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_SET_INVITE_CODE, new __dep_class_SICCommand.SICCommand());
    __s5local0.set(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.S2C_VERSION_CHECK, new __dep_class_VCKCommand.VCKCommand());
  };
  return BasicInitServerCommands;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicInitServerCommands = __s0local0;
