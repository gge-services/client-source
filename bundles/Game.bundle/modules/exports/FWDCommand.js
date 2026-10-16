Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleLoginEvent = require("gge-module:export_CastleLoginEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_TeaserVO = require("gge-module:export_TeaserVO");
var __dep_export_CastleWelcomeDialogProperties = require("gge-module:export_CastleWelcomeDialogProperties");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function FWDCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FWDCommand, __s1param0);
  Object.defineProperty(FWDCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_SHOW_WELCOMEDATA;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  FWDCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        if (__dep_export_ClientConstCastle.ClientConstCastle.WELCOME_FEATURE_ENABLED) {
          var __s9local0 = JSON.parse(__s9param1[1]).FLT;
          __s9local0.sortOn("FTS", Array.NUMERIC | Array.DESCENDING);
          var __s9local1 = [];
          if (__s9local0 != null) {
            for (var __s9local2 = 0, __s9local3 = __s9local0; __s9local2 < __s9local3.length; __s9local2++) {
              var __s9local4 = __s9local3[__s9local2];
              if (__s9local4 !== undefined) {
                var __s9local5 = new __dep_export_TeaserVO.TeaserVO();
                __s9local5.fillFromParamObject(__s9local4);
                __s9local1.push(__s9local5);
              }
            }
          }
          var __s9local6 = __dep_exact_f855840627e6e145.int(__s9local1[0].id);
          var __s9local7 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.settingsData.homeScreenID);
          if ((__s9local6 != __s9local7 && __s9local7 != -1 || __dep_export_CastleModel.CastleModel.settingsData.isHomeScreenVisible) && __dep_export_CastleModel.CastleModel.tutorialData.isTutorialFinished() && !this.env.isOnSpecialServer) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleWelcomeDialog.CastleWelcomeDialog, new __dep_export_CastleWelcomeDialogProperties.CastleWelcomeDialogProperties(__s9local1), true, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_TOP);
            __dep_export_CastleModel.CastleModel.settingsData.isHomeScreenVisible = true;
          }
          __dep_export_CastleModel.CastleModel.settingsData.homeScreenID = __s9local6;
          this.controller.dispatchEvent(new __dep_export_CastleLoginEvent.CastleLoginEvent(__dep_export_CastleLoginEvent.CastleLoginEvent.LOGIN_PROCESS_COMPLETE));
        }
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return FWDCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.FWDCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleWelcomeDialog = require("gge-module:export_CastleWelcomeDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
