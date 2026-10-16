Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SUnlockEventVO = require("gge-module:export_C2SUnlockEventVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleSlumDonateUpdateDialog() {
    return __s1param0.call(this, CastleSlumDonateUpdateDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSlumDonateUpdateDialog, __s1param0);
  CastleSlumDonateUpdateDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this._castleInfos ||= new __dep_export_CastleCastleCrestComponent.CastleCastleCrestComponent(this.dialogDisp.mc_castleInfos);
    this._woodSelector ||= new __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent(this.dialogDisp.mc_selectWood);
    this._stoneSelector ||= new __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent(this.dialogDisp.mc_selectStone);
    this._c1Selector ||= new __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent(this.dialogDisp.mc_selectC1);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_village_unlock_payin_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_village_unlock_payin_copy"));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancle, this.dialogDisp.btn_ok]);
  };
  CastleSlumDonateUpdateDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    var __s7local0 = __dep_exact_f855840627e6e145.int(this.partpaypriceVO.costsList.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.WOOD));
    var __s7local1 = __dep_exact_f855840627e6e145.int(this.partpaypriceVO.costsList.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.STONE));
    var __s7local2 = __dep_exact_f855840627e6e145.int(this.partpaypriceVO.costsList.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C1));
    var __s7local3 = __dep_exact_f855840627e6e145.int(this.payedGoods.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.WOOD));
    var __s7local4 = __dep_exact_f855840627e6e145.int(this.payedGoods.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.STONE));
    var __s7local5 = __dep_exact_f855840627e6e145.int(this.payedGoods.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C1));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_villageLevelTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_village_level", [""]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_villageLevel, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO((this.kingdomVO.activeSlumLevel + 1).toString()));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_wood, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [__s7local3, __s7local0])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stone, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [__s7local4, __s7local1])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_c1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [__s7local5, __s7local2])).autoFitToBounds = true;
    this._castleInfos.initComponent();
    this._c1Selector.initComponent(Math.min(__dep_export_CastleModel.CastleModel.currencyData.c1Amount, __s7local2 - __s7local5), __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.C1, 154);
    this._woodSelector.initComponent(Math.min(__dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__dep_export_CollectableEnum.CollectableEnum.WOOD).amount, __s7local0 - __s7local3), __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.WOOD, 151);
    this._stoneSelector.initComponent(Math.min(__dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__dep_export_CollectableEnum.CollectableEnum.STONE).amount, __s7local1 - __s7local4), __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.STONE, 152);
  };
  CastleSlumDonateUpdateDialog.prototype.onClick = function (__s9param0) {
    switch (__s9param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancle:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        var __s9local0 = __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo;
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SUnlockEventVO.C2SUnlockEventVO(__s9local0.objectId, __s9local0.kingdomID, this._woodSelector.getSelectedAmount(), this._stoneSelector.getSelectedAmount(), 0, this._c1Selector.getSelectedAmount(), this.partpaypriceVO.id, 0));
        this.hide();
    }
  };
  CastleSlumDonateUpdateDialog.prototype.hideLoaded = function (__s12param0 = null) {
    this._c1Selector.resetValue();
    this._stoneSelector.resetValue();
    this._woodSelector.resetValue();
    __s1param0.prototype.hideLoaded.call(this, __s12param0);
  };
  Object.defineProperty(CastleSlumDonateUpdateDialog.prototype, "payedGoods", {
    get: function () {
      return this.kingdomVO.getSlumVOByLevel(this.kingdomVO.activeSlumLevel + 1).payedGoods;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSlumDonateUpdateDialog.prototype, "partpaypriceVO", {
    get: function () {
      return this.kingdomVO.getSlumVOByLevel(this.kingdomVO.activeSlumLevel + 1).partpaypriceVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSlumDonateUpdateDialog.prototype, "kingdomVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleSlumDonateUpdateDialog.NAME = "CastleSlumDonateUpdate";
  return CastleSlumDonateUpdateDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleSlumDonateUpdateDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleCastleCrestComponent = require("gge-module:export_CastleCastleCrestComponent");
var __dep_export_CastleResourceCollectorComponent = require("gge-module:export_CastleResourceCollectorComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
