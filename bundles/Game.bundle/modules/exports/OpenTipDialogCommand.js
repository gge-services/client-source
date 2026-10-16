Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function OpenTipDialogCommand() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OpenTipDialogCommand, __s1param0);
  OpenTipDialogCommand.prototype.execute = function (__s5param0 = null) {
    if (__dep_export_CastleModel.CastleModel.areaData.activeArea.isMyArea && !__dep_export_CastleModel.CastleModel.areaData.activeArea.isUnderConquerProcess) {
      switch (__s5param0[0]) {
        case __dep_export_ClientConstCastle.ClientConstCastle.TIP_EFFICIENCY:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEfficiencyTipDialog.CastleEfficiencyTipDialog);
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.TIP_BARRACKUNIT:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBarrackUnitTipDialog.CastleBarrackUnitTipDialog);
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.TIP_BUILDLIST:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBuildListTipDialog.CastleBuildListTipDialog);
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.TIP_INSTANTBUILD:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleInstantBuildTipDialog.CastleInstantBuildTipDialog);
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.TIP_OVERSEER:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleOverseerTipDialog.CastleOverseerTipDialog);
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.TIP_PRODUCTIVITY:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleProductivityTipDialog.CastleProductivityTipDialog);
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.TIP_REPAIR:
          if (__s5param0.length == 2 && __s5param0[1]) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRepairTipDialog.CastleRepairTipDialog);
          } else if (__s5param0.length == 2 && !__s5param0[1]) {
            if (OpenTipDialogCommand.repairShown < 1) {
              OpenTipDialogCommand.repairShown++;
              __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRepairTipDialog.CastleRepairTipDialog);
            }
          }
      }
    }
  };
  OpenTipDialogCommand.__initialize_static_members = function () {
    OpenTipDialogCommand.repairShown = 0;
  };
  return OpenTipDialogCommand;
}(__dep_exact_9e901e8e2483a22f.SimpleCommand);
exports.OpenTipDialogCommand = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleBarrackUnitTipDialog = require("gge-module:export_CastleBarrackUnitTipDialog");
var __dep_export_CastleBuildListTipDialog = require("gge-module:export_CastleBuildListTipDialog");
var __dep_export_CastleEfficiencyTipDialog = require("gge-module:export_CastleEfficiencyTipDialog");
var __dep_export_CastleInstantBuildTipDialog = require("gge-module:export_CastleInstantBuildTipDialog");
var __dep_export_CastleOverseerTipDialog = require("gge-module:export_CastleOverseerTipDialog");
var __dep_export_CastleProductivityTipDialog = require("gge-module:export_CastleProductivityTipDialog");
var __dep_export_CastleRepairTipDialog = require("gge-module:export_CastleRepairTipDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
__s0local0.__initialize_static_members();
