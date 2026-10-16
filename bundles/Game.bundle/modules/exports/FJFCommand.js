Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function FJFCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FJFCommand, __s1param0);
  Object.defineProperty(FJFCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_JOIN_FACTION;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  FJFCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        __dep_export_CastleModel.CastleModel.kingdomData.willBecomeFaction = __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID;
        __dep_export_CastleModel.CastleModel.kingdomData.parse_KPI(__s9local0.kpi);
        __dep_export_CastleModel.CastleModel.specialEventData.parse_SEI(__s9local0.sei);
        if (__s9local0.mir) {
          __dep_export_CastleModel.CastleModel.userData.parse_MIR(__s9local0.mir);
        }
        var __s9local1 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID);
        __dep_export_CastleModel.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel = __s9local1;
        var __s9local2;
        var __s9local3 = [__s9local1.kingdomID, __s9local1.absAreaPosX, __s9local1.absAreaPosY];
        __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, __s9local3);
        if (__s9local0.mir) {
          __dep_export_CastleModel.CastleModel.userData.parse_MIR_openDialog(__s9local0.mir);
        }
        __s9local2 = __s9local0.FID == __dep_exact_26a421b704832cff_1.FactionConst.BLUE_FACTION ? __dep_export_CastleFactionChooseFactionBlueDialog.CastleFactionChooseFactionBlueDialog : __dep_export_CastleFactionChooseFactionRedDialog.CastleFactionChooseFactionRedDialog;
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__s9local2, null, false, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_TOP);
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return FJFCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.FJFCommand = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleFactionChooseFactionBlueDialog = require("gge-module:export_CastleFactionChooseFactionBlueDialog");
var __dep_export_CastleFactionChooseFactionRedDialog = require("gge-module:export_CastleFactionChooseFactionRedDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
