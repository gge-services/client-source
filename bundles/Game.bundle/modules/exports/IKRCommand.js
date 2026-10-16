Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleEilandEvent = require("gge-module:export_CastleEilandEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_C2SKingdomPayInfoVO = require("gge-module:export_C2SKingdomPayInfoVO");
var __dep_export_C2SGetBookmarkList = require("gge-module:export_C2SGetBookmarkList");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function IKRCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IKRCommand, __s1param0);
  Object.defineProperty(IKRCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_ISLAND_KINGDOM_RESET;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  IKRCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        __dep_export_CastleModel.CastleModel.kingdomData.resetEilandData();
        __dep_export_CastleModel.CastleModel.userData.aquaPoints = 0;
        if (__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO) {
          __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.aquaPoints = 0;
        }
        __dep_export_CastleModel.CastleModel.armyData.removeAllMovementsByKingdomID(__dep_exact_26a421b704832cff_1.WorldIsland.KINGDOM_ID);
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SKingdomPayInfoVO.C2SKingdomPayInfoVO());
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetBookmarkList.C2SGetBookmarkList());
        this.controller.dispatchEvent(new __dep_export_CastleEilandEvent.CastleEilandEvent(__dep_export_CastleEilandEvent.CastleEilandEvent.EILAND_RESET));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return IKRCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.IKRCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");
