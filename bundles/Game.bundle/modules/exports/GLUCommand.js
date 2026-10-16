Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleLevelUpDialogProperties = require("gge-module:export_CastleLevelUpDialogProperties");
var __dep_export_C2SGetLoginBonusVO = require("gge-module:export_C2SGetLoginBonusVO");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function GLUCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GLUCommand, __s1param0);
  Object.defineProperty(GLUCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_LEVEL_UP;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  GLUCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        __dep_export_CastleModel.CastleModel.currencyData.parseGCU(__s9local0.gcu);
        __dep_export_CastleModel.CastleModel.userData.parse_GXP(__s9local0.gxp);
        var __s9local1 = __dep_exact_f855840627e6e145.int(__s9local0.L);
        var __s9local2 = !!__s9local0.LL && __s9local0.LL == 1;
        if (__s9local1 <= 10 || __s9local1 == 20 || __s9local1 == 30) {
          __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.GTM_CALL_GGS_TRACK_EVENT, "level" + __s9local1);
        }
        if (__dep_export_ClientConstCastle.ClientConstCastle.hasReachedSpecificLevel(__s9local1)) {
          __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.GAMESIGHT_CALL_GGS_TRACK_EVENT, new __dep_export_GameSightPayloadVO.GameSightPayloadVO(__dep_export_GamesightEventConstants.GamesightEventConstants.LEVEL_COMPLETE_ + (__s9local1 - 1)));
        }
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleLevelUpDialog.CastleLevelUpDialog, new __dep_export_CastleLevelUpDialogProperties.CastleLevelUpDialogProperties(__s9local1, __s9local2), true, __dep_exact_9e901e8e2483a22f_1.BasicDialogHandler.PRIORITY_LOW);
        __dep_export_CastleModel.CastleModel.userData.levelUpInSession = true;
        this.controller.dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP));
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetLoginBonusVO.C2SGetLoginBonusVO());
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return GLUCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.GLUCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLevelUpDialog = require("gge-module:export_CastleLevelUpDialog");
var __dep_export_GamesightEventConstants = require("gge-module:export_GamesightEventConstants");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_GameSightPayloadVO = require("gge-module:export_GameSightPayloadVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
