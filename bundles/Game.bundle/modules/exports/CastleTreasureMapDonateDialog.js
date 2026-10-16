Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SUnlockEventVO = require("gge-module:export_C2SUnlockEventVO");
var __dep_export_C2SGetDetailedCastleListVO = require("gge-module:export_C2SGetDetailedCastleListVO");
var __dep_export_CastleDetailedCastleListEvent = require("gge-module:export_CastleDetailedCastleListEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleTreasureMapDonateDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleTreasureMapDonateDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTreasureMapDonateDialog, __s1param0);
  CastleTreasureMapDonateDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancle]);
    this._woodSelector = new __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent(this.dialogDisp.mc_selectWood);
    this._stoneSelector = new __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent(this.dialogDisp.mc_selectStone);
    this._coinSelector = new __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent(this.dialogDisp.mc_selectCoin);
  };
  CastleTreasureMapDonateDialog.prototype.addEventListenerOnShow = function () {
    this.controller.addEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListUpdate));
  };
  CastleTreasureMapDonateDialog.prototype.removeEventListenerOnHide = function () {
    this.controller.removeEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListUpdate));
  };
  CastleTreasureMapDonateDialog.prototype.applyPropertiesLoaded = function (__s11param0 = null) {
    var __s11local0 = this.dialogProperties.tMapNodeVO.isBridge ? "Bridge" : "Swamp";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_repair" + __s11local0 + "_payNormal"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_repair" + __s11local0 + "_payNormal_copy"));
    this.lockDialog();
    this.getCastleResourceData();
  };
  CastleTreasureMapDonateDialog.prototype.getCastleResourceData = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetDetailedCastleListVO.C2SGetDetailedCastleListVO());
  };
  CastleTreasureMapDonateDialog.prototype.onDetailedCastleListUpdate = function (__s15param0) {
    var __s15local0 = this.dialogProperties.tMapNodeVO.partpaypriceVO.costsList;
    if (this.dialogProperties.tMapNodeVO.isBridge) {
      var __s15local1 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(__dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID);
      this.dialogDisp.mc_selectWood.visible = true;
      this.dialogDisp.mc_selectStone.visible = true;
      this.dialogDisp.mc_selectCoin.visible = false;
      var __s15local2 = __dep_exact_f855840627e6e145.int(__s15local0.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.WOOD));
      var __s15local3 = __dep_exact_f855840627e6e145.int(__s15local0.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.STONE));
      var __s15local4 = __dep_exact_f855840627e6e145.int(this.dialogProperties.tMapNodeVO.payedGoods.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.WOOD));
      var __s15local5 = __dep_exact_f855840627e6e145.int(this.dialogProperties.tMapNodeVO.payedGoods.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.STONE));
      var __s15local6 = __dep_exact_f855840627e6e145.int(__s15local1.getResource(__dep_export_CollectableEnum.CollectableEnum.WOOD));
      var __s15local7 = __dep_exact_f855840627e6e145.int(__s15local1.getResource(__dep_export_CollectableEnum.CollectableEnum.STONE));
      this._woodSelector.initComponent(Math.min(__s15local2 - __s15local4, __s15local6), __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.WOOD, 0);
      this._stoneSelector.initComponent(Math.min(__s15local3 - __s15local5, __s15local7), __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.STONE, 0);
      this._coinSelector.initComponent(0, __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.C1, 0);
    } else {
      this.dialogDisp.mc_selectWood.visible = false;
      this.dialogDisp.mc_selectStone.visible = false;
      this.dialogDisp.mc_selectCoin.visible = true;
      var __s15local8 = __dep_exact_f855840627e6e145.int(__s15local0.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C1));
      var __s15local9 = __dep_exact_f855840627e6e145.int(this.dialogProperties.tMapNodeVO.payedGoods.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C1));
      this._coinSelector.initComponent(Math.min(__s15local8 - __s15local9, __dep_export_CastleModel.CastleModel.currencyData.c1Amount), __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.C1, 0);
      this._woodSelector.initComponent(0, __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.WOOD, 1);
      this._stoneSelector.initComponent(0, __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.STONE, 2);
    }
    this.unLockDialog();
  };
  CastleTreasureMapDonateDialog.prototype.onClick = function (__s19param0) {
    switch (__s19param0.target) {
      case this.dialogDisp.btn_ok:
        var __s19local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.treasureHuntData.treasureHuntMapVO.kingdomID);
        var __s19local1 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(__s19local0);
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SUnlockEventVO.C2SUnlockEventVO(__s19local1.areaID, __s19local0, this._woodSelector.selectionSlider.selectedIndex, this._stoneSelector.selectionSlider.selectedIndex, 0, this._coinSelector.selectionSlider.selectedIndex, this.dialogProperties.tMapNodeVO.partpaypriceVO.id, 0));
        this.hide();
        break;
      case this.dialogDisp.btn_cancle:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleTreasureMapDonateDialog.prototype.hideLoaded = function (__s22param0 = null) {
    this._stoneSelector.destroy();
    this._woodSelector.destroy();
    this._coinSelector.destroy();
    __s1param0.prototype.hideLoaded.call(this, __s22param0);
  };
  Object.defineProperty(CastleTreasureMapDonateDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureMapDonateDialog.__initialize_static_members = function () {
    CastleTreasureMapDonateDialog.NAME = "CastleTreasureMapDonate";
  };
  return CastleTreasureMapDonateDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleTreasureMapDonateDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleResourceCollectorComponent = require("gge-module:export_CastleResourceCollectorComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
