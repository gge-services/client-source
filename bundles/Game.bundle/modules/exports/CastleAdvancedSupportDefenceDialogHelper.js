Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleAdvancedSupportDefenceDialogHelper(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._fightDialog = __s3param0;
    __s3local0._supportDefenceDialog = __s3local0._fightDialog.dialogDisp;
    __s3local0._displayType = __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_SUPPORT;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAdvancedSupportDefenceDialogHelper, __s1param0);
  CastleAdvancedSupportDefenceDialogHelper.prototype.handleTarget = function (__s5param0) {
    var __s5local0 = this._fightDialog;
    switch (__s5param0) {
      case this._supportDefenceDialog.mc_supportItemHolder.unitContainer:
      case this._supportDefenceDialog.mc_supportItemHolder.mc_supportItems:
        this._advancedFightScreenConnector = new __dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler(__s5local0.supportDefenceVO.supportUnits, [this._supportDefenceDialog.unitConnector], __dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler.UNITFRONT, this._displayType);
        this.display();
        break;
      default:
        this.handleDefault(__s5param0);
    }
  };
  CastleAdvancedSupportDefenceDialogHelper.prototype.handleDialogSlotContainer = function (__s8param0) {
    var __s8local0 = __s8param0.itemVO;
    this._advancedFightScreenConnector = new __dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler(__s8param0.itemContainer, [this._supportDefenceDialog.unitConnector], __dep_export_CastleAdvancedFightScreenConnectorHandler.CastleAdvancedFightScreenConnectorHandler.UNITFRONT, this._displayType, __s8local0);
  };
  return CastleAdvancedSupportDefenceDialogHelper;
}(require("gge-module:export_CastleBasicAdvancedFightScreenDialogHelper").CastleBasicAdvancedFightScreenDialogHelper);
exports.CastleAdvancedSupportDefenceDialogHelper = __s0local0;
var __dep_export_CastleAdvancedTroopSelectionComponent = require("gge-module:export_CastleAdvancedTroopSelectionComponent");
var __dep_export_CastleAdvancedFightScreenConnectorHandler = require("gge-module:export_CastleAdvancedFightScreenConnectorHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IAdvancedFightscreenHandler");
