Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SUnlockEventVO = require("gge-module:export_C2SUnlockEventVO");
var __dep_export_TMapHelper = require("gge-module:export_TMapHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleSeasonDonateRepairDialog() {
    return __s1param0.call(this, CastleSeasonDonateRepairDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSeasonDonateRepairDialog, __s1param0);
  CastleSeasonDonateRepairDialog.prototype.applyPropertiesLoaded = function (__s5param0 = null) {
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_cancle, this.dialogDisp.btn_close]);
    this._woodSelector = new __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent(this.dialogDisp.mc_selectWood);
    this._stoneSelector = new __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent(this.dialogDisp.mc_selectStone);
    var __s5local0 = __dep_exact_f855840627e6e145.int(this.dialogProperties.tmapNodeVO.partpaypriceVO.costsList.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.WOOD));
    var __s5local1 = __dep_exact_f855840627e6e145.int(this.dialogProperties.tmapNodeVO.partpaypriceVO.costsList.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.STONE));
    var __s5local2 = __dep_exact_f855840627e6e145.int(this.dialogProperties.tmapNodeVO.payedGoods.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.WOOD));
    var __s5local3 = __dep_exact_f855840627e6e145.int(this.dialogProperties.tmapNodeVO.payedGoods.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.STONE));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.dialogTextPrefix + "_payNormal")).autoFitToBounds = true;
    var __s5local4 = __dep_export_TMapHelper.TMapHelper.isSeaQueenMap(this.dialogProperties.tmapNodeVO.mapID) ? "dialog_upgradeShip_payNormal_copy" : this.dialogProperties.dialogTextPrefix + "_payNormal_EventCamp";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s5local4));
    this._woodSelector.initComponent(Math.min(__s5local0 - __s5local2, __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.resStorageWood), __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.WOOD, 0);
    this._stoneSelector.initComponent(Math.min(__s5local1 - __s5local3, __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.resStorageStone), __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.STONE, 0);
  };
  CastleSeasonDonateRepairDialog.prototype.onClick = function (__s7param0) {
    switch (__s7param0.target) {
      case this.dialogDisp.btn_ok:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SUnlockEventVO.C2SUnlockEventVO(-1, __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID, this._woodSelector.selectionSlider.selectedIndex, this._stoneSelector.selectionSlider.selectedIndex, 0, 0, this.dialogProperties.tmapNodeVO.partpaypriceVO.id, 0));
        this.hide();
        break;
      case this.dialogDisp.btn_cancle:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleSeasonDonateRepairDialog.prototype.hideLoaded = function (__s10param0 = null) {
    this._stoneSelector.resetValue();
    this._woodSelector.resetValue();
    __s1param0.prototype.hideLoaded.call(this, __s10param0);
  };
  Object.defineProperty(CastleSeasonDonateRepairDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSeasonDonateRepairDialog.NAME = "CastleSeasonDonateRepairEx";
  return CastleSeasonDonateRepairDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleSeasonDonateRepairDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleResourceCollectorComponent = require("gge-module:export_CastleResourceCollectorComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
