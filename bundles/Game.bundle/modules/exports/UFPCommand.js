Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTitleAchievedDialogProperties = require("gge-module:export_CastleTitleAchievedDialogProperties");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function UFPCommand() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UFPCommand, __s1param0);
  Object.defineProperty(UFPCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_USER_FACTION_POINTS;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  UFPCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        __dep_export_CastleModel.CastleModel.titleData.parseUFP(__s9local0);
        var __s9local1 = __dep_exact_f855840627e6e145.int(__s9local0.NHT);
        if (__s9local1 > 0) {
          var __s9local2 = __dep_export_CastleModel.CastleModel.titleData.getTitleByTitleID(__s9local1);
          var __s9local3 = __dep_export_CastleModel.CastleModel.titleData.getHighestTitleEverHeldByThisUser(__s9local2.titleSystem);
          var __s9local4 = false;
          if (__s9local3 != null) {
            __s9local4 = __s9local2.orderInSystem <= __s9local3.orderInSystem;
          }
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleTitleAchievedDialog.CastleTitleAchievedDialog, new __dep_export_CastleTitleAchievedDialogProperties.CastleTitleAchievedDialogProperties(__s9local2, __s9local4));
        }
        return true;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return UFPCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.UFPCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleTitleAchievedDialog = require("gge-module:export_CastleTitleAchievedDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
