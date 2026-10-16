Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SUnlockEventVO = require("gge-module:export_C2SUnlockEventVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleSlumDonateDialog() {
    return __s1param0.call(this, CastleSlumDonateDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSlumDonateDialog, __s1param0);
  Object.defineProperty(CastleSlumDonateDialog.prototype, "payedGoods", {
    get: function () {
      return this.kingdomVO.getSlumVOByLevel(this.kingdomVO.activeSlumLevel + 1).payedGoods;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSlumDonateDialog.prototype, "partpaypriceVO", {
    get: function () {
      return this.kingdomVO.getSlumVOByLevel(this.kingdomVO.activeSlumLevel + 1).partpaypriceVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSlumDonateDialog.prototype, "kingdomVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleSlumDonateDialog.prototype.initLoaded = function (__s11param0 = null) {
    this._woodSelector ||= new __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent(this.dialogDisp.mc_selectWood);
    this._stoneSelector ||= new __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent(this.dialogDisp.mc_selectStone);
    this._c1Selector ||= new __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent(this.dialogDisp.mc_selectC1);
    this._castleInfos ||= new __dep_export_CastleCastleCrestComponent.CastleCastleCrestComponent(this.dialogDisp.mc_sourceCastle);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_village_unlock_payin_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_village_unlock_payin_copy"));
    this.initBasicButtons([this.dialogDisp.btn_cancle, this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    __s1param0.prototype.initLoaded.call(this, __s11param0);
  };
  CastleSlumDonateDialog.prototype.showLoaded = function (__s13param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s13param0);
    this._castleInfos.initComponent();
    this._castleInfos.show();
    this._c1Selector.initComponent(Math.min(__dep_export_CastleModel.CastleModel.currencyData.c1Amount, this.getRemainingValueToPay(__dep_export_CollectableEnum.CollectableEnum.C1)), __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.C1, 154);
    this._woodSelector.initComponent(Math.min(__dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__dep_export_CollectableEnum.CollectableEnum.WOOD).amount, this.getRemainingValueToPay(__dep_export_CollectableEnum.CollectableEnum.WOOD)), __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.WOOD, 151);
    this._stoneSelector.initComponent(Math.min(__dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__dep_export_CollectableEnum.CollectableEnum.STONE).amount, this.getRemainingValueToPay(__dep_export_CollectableEnum.CollectableEnum.STONE)), __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.STONE, 152);
  };
  CastleSlumDonateDialog.prototype.getRemainingValueToPay = function (__s15param0) {
    return this.partpaypriceVO.costsList.getAmountOrDefaultByType(__s15param0) - this.payedGoods.getAmountOrDefaultByType(__s15param0);
  };
  CastleSlumDonateDialog.prototype.hideLoaded = function (__s17param0 = null) {
    this._castleInfos.hide();
    this._woodSelector.resetValue();
    this._stoneSelector.resetValue();
    this._c1Selector.resetValue();
    __s1param0.prototype.hideLoaded.call(this, __s17param0);
  };
  CastleSlumDonateDialog.prototype.onClick = function (__s19param0) {
    switch (__s19param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancle:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        var __s19local0 = __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo;
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SUnlockEventVO.C2SUnlockEventVO(__s19local0.objectId, __s19local0.kingdomID, this._woodSelector.getSelectedAmount(), this._stoneSelector.getSelectedAmount(), 0, this._c1Selector.getSelectedAmount(), this.partpaypriceVO.id, 0));
        this.hide();
    }
  };
  CastleSlumDonateDialog.NAME = "CastleSlumDonate";
  return CastleSlumDonateDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleSlumDonateDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleCastleCrestComponent = require("gge-module:export_CastleCastleCrestComponent");
var __dep_export_CastleResourceCollectorComponent = require("gge-module:export_CastleResourceCollectorComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
