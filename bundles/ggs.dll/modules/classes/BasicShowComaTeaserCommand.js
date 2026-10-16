Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_CMTCommand = require("gge-module:class_CMTCommand");
var __dep_class_BasicDialogHandler = require("gge-module:class_BasicDialogHandler");
var __dep_class_BasicLayoutManager = require("gge-module:class_BasicLayoutManager");
var __dep_class_CommonDialogNames = require("gge-module:class_CommonDialogNames");
var __dep_class_BasicStandardOkDialogProperties = require("gge-module:class_BasicStandardOkDialogProperties");
var __s0local0 = function (__s1param0) {
  function BasicShowComaTeaserCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicShowComaTeaserCommand, __s1param0);
  BasicShowComaTeaserCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __s5param0[0];
    var __s5local1 = __s5param0[2];
    var __s5local2 = __s5param0[3];
    if (__s5local0 == __dep_class_CMTCommand.CMTCommand.TEASERTYPE_WARNING) {
      __dep_class_BasicLayoutManager.BasicLayoutManager.getInstance().showAdminDialog(__dep_class_CommonDialogNames.CommonDialogNames.StandardOkDialog_NAME, new __dep_class_BasicStandardOkDialogProperties.BasicStandardOkDialogProperties(__s5local1, __s5local2));
    } else if (__dep_class_BasicLayoutManager.BasicLayoutManager.gameState == __dep_class_BasicLayoutManager.BasicLayoutManager.STATE_LOGIN) {
      __dep_class_BasicDialogHandler.BasicDialogHandler.getInstance().registerDialogs(__dep_class_CommonDialogNames.CommonDialogNames.StandardOkDialog_NAME, new __dep_class_BasicStandardOkDialogProperties.BasicStandardOkDialogProperties(__s5local1, __s5local2));
    } else {
      __dep_class_BasicLayoutManager.BasicLayoutManager.getInstance().showAdminDialog(__dep_class_CommonDialogNames.CommonDialogNames.StandardOkDialog_NAME, new __dep_class_BasicStandardOkDialogProperties.BasicStandardOkDialogProperties(__s5local1, __s5local2));
    }
  };
  return BasicShowComaTeaserCommand;
}(require("gge-module:class_SimpleCommand").SimpleCommand);
exports.BasicShowComaTeaserCommand = __s0local0;
