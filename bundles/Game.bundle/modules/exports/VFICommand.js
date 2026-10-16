Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleAchievementLevelUpDialogProperties = require("gge-module:export_CastleAchievementLevelUpDialogProperties");
var __dep_export_CastleAchievementPopupDialogProperties = require("gge-module:export_CastleAchievementPopupDialogProperties");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function VFICommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(VFICommand, __s1param0);
  Object.defineProperty(VFICommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_ACHIEVEMENT_FINISHED;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  VFICommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    return __s1param0.prototype.executeCommand.call(this, __s9param0, __s9param1);
  };
  VFICommand.prototype.exec = function (__s11param0) {
    var __s11local0 = __dep_exact_f855840627e6e145.int(__s11param0[0]);
    var __s11local1 = __s11param0[1];
    switch (__s11local0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        this.paramObj = JSON.parse(__s11local1[1]);
        if (__dep_export_CastleModel.CastleModel.userData) {
          __dep_export_CastleModel.CastleModel.currencyData.parseGCU(this.paramObj.gcu);
        }
        if (this.paramObj.grc != null && __dep_export_CastleModel.CastleModel.areaData.activeArea != null) {
          __dep_export_CastleModel.CastleModel.areaData.activeArea.updater.parseGRC(this.paramObj.grc);
        }
        if (__dep_export_CastleModel.CastleModel.castleAchievementData.getAchievementByID(this.paramObj.AID).achievementSerieVO.achievementSeriesID == __dep_export_CastleAchievementData.CastleAchievementData.MAIN_ACHIEVMENT_SERIESID) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAchievementLevelUpDialog.CastleAchievementLevelUpDialog, new __dep_export_CastleAchievementLevelUpDialogProperties.CastleAchievementLevelUpDialogProperties(this.paramObj.AID), true, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_LOW);
        } else {
          __dep_export_CastleIngameMessageHandler.CastleIngameMessageHandler.getInstance().registerMessage(__dep_export_CastleAchievementPopupDialog.CastleAchievementPopupDialog, new __dep_export_CastleAchievementPopupDialogProperties.CastleAchievementPopupDialogProperties(this.paramObj.AID), true, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_MIDDLE);
        }
        break;
      default:
        this.showErrorDialog(__s11local0, __s11local1);
    }
  };
  return VFICommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.VFICommand = __s0local0;
var __dep_export_CastleAchievementData = require("gge-module:export_CastleAchievementData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAchievementLevelUpDialog = require("gge-module:export_CastleAchievementLevelUpDialog");
var __dep_export_CastleAchievementPopupDialog = require("gge-module:export_CastleAchievementPopupDialog");
var __dep_export_CastleIngameMessageHandler = require("gge-module:export_CastleIngameMessageHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
