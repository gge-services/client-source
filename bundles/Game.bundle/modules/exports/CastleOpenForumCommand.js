Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstInstanceIDs = require("gge-module:export_ClientConstInstanceIDs");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleOpenForumCommand() {
    var __s3local0 = this;
    __s3local0.basicOpenForumCommand = new __dep_exact_9e901e8e2483a22f.BasicOpenForumCommand();
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleOpenForumCommand, __s1param0);
  CastleOpenForumCommand.prototype.execute = function (__s5param0) {
    var __s5local0;
    if (__s5param0 === undefined) {
      __s5param0 = null;
    }
    if (__dep_exact_9e901e8e2483a22f_2.EnvGlobalsHandler.globals.networkNewsByJS || !__dep_exact_9e901e8e2483a22f_2.EnvGlobalsHandler.globals.useexternallinks || __dep_export_CastleModel.CastleModel.userData.email != __dep_exact_26a421b704832cff.PlayerConst.DEFAULT_MAIL) {
      if (__dep_export_ClientConstInstanceIDs.ClientConstInstanceIDs.isBetaInstance()) {
        __s5local0 = new __dep_exact_81dacdf05bd32292.URLRequest(CastleOpenForumCommand.BETA_FORUM_URL);
        __dep_exact_9e901e8e2483a22f_1.BrowserUtil.executeNavigateToURL(__s5local0, "_blank");
      } else if (__dep_exact_9e901e8e2483a22f_2.EnvGlobalsHandler.globals.isClosedBeta) {
        __s5local0 = new __dep_exact_81dacdf05bd32292.URLRequest(CastleOpenForumCommand.CLOSED_BETA_FORUM_URL);
        __dep_exact_9e901e8e2483a22f_1.BrowserUtil.executeNavigateToURL(__s5local0, "_blank");
      } else {
        this.basicOpenForumCommand.execute(__s5param0);
      }
    } else if (!__dep_exact_9e901e8e2483a22f_2.EnvGlobalsHandler.globals.isOnSpecialServer) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_OptionsDialog.OptionsDialog, new __dep_export_OptionsDialogProperties.OptionsDialogProperties(__dep_export_OptionsDialog.OptionsDialog.TAB_ACCOUNT_DETAILS, true));
    }
  };
  CastleOpenForumCommand.BETA_FORUM_URL = "https://community.goodgamestudios.com/empire/testboard";
  CastleOpenForumCommand.CLOSED_BETA_FORUM_URL = "https://community.goodgamestudios.com/empire/testboard/entry/password";
  return CastleOpenForumCommand;
}(__dep_exact_9e901e8e2483a22f_3.SimpleCommand);
exports.CastleOpenForumCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_OptionsDialog = require("gge-module:export_OptionsDialog");
var __dep_export_OptionsDialogProperties = require("gge-module:export_OptionsDialogProperties");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ISimpleCommand");
