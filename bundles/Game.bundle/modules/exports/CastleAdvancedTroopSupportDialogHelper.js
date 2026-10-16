Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleAdvancedTroopSupportDialogHelper(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._fightDialog = __s3param0;
    __s3local0._troopSupportDialog = __s3local0._fightDialog.dialogDisp;
    __s3local0._displayType = __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_STATION;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAdvancedTroopSupportDialogHelper, __s1param0);
  CastleAdvancedTroopSupportDialogHelper.prototype.handleTarget = function (__s5param0) {
    var __s5local0 = this._fightDialog;
    switch (__s5param0) {
      case this._troopSupportDialog.mc_supportItemHolder.toolContainer:
      case this._troopSupportDialog.mc_supportItemHolder.mc_tools:
        this._advancedFightScreenConnector = new __dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler(__s5local0.supportDefenceVO.supportTools, [this._troopSupportDialog.toolsConnector], __dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler.TOOLFRONT, this._displayType);
        this.display();
        break;
      case this._troopSupportDialog.mc_supportItemHolder.unitContainer:
      case this._troopSupportDialog.mc_supportItemHolder.mc_units:
        this._advancedFightScreenConnector = new __dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler(__s5local0.supportDefenceVO.supportUnits, [this._troopSupportDialog.unitConnector, this._troopSupportDialog.unitSideConnectors], __dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler.UNITFRONT, this._displayType);
        this.display();
        break;
      default:
        this.handleDefault(__s5param0);
    }
  };
  CastleAdvancedTroopSupportDialogHelper.prototype.handleDialogSlotContainer = function (__s8param0) {
    var __s8local0 = this._fightDialog;
    var __s8local1 = __dep_exact_81dacdf05bd32292.castAs(__s8param0.itemContainer, "CastleFightItemContainer");
    var __s8local2 = __s8param0.itemVO;
    if (__s8local0.supportDefenceVO.supportTools == __s8local1) {
      this._advancedFightScreenConnector = new __dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler(__s8local1, [this._troopSupportDialog.toolsConnector], __dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler.TOOLFRONT, this._displayType, __s8local2);
    } else if (__s8local0.supportDefenceVO.supportUnits == __s8local1) {
      this._advancedFightScreenConnector = new __dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler(__s8local1, [this._troopSupportDialog.unitConnector, this._troopSupportDialog.unitSideConnectors], __dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler.UNITFRONT, this._displayType, __s8local2);
    }
  };
  return CastleAdvancedTroopSupportDialogHelper;
}(require("gge-module:export_CastleBasicAdvancedFightScreenDialogHelper").CastleBasicAdvancedFightScreenDialogHelper);
exports.CastleAdvancedTroopSupportDialogHelper = __s0local0;
var __dep_export_CastleAdvancedTroopSelectionComponent = require("gge-module:export_CastleAdvancedTroopSelectionComponent");
var __dep_export_CastleAdvancedFightScreenConnectorHandler = require("gge-module:export_CastleAdvancedFightScreenConnectorHandler");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IAdvancedFightscreenHandler");
