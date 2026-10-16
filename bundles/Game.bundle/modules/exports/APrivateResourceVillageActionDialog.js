Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = function (__s1param0) {
  function APrivateResourceVillageActionDialog() {
    var __s3local0 = this;
    __s3local0._cost = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, APrivateResourceVillageActionDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(APrivateResourceVillageActionDialog, __s1param0);
  APrivateResourceVillageActionDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel]);
    this.itxt_cost = this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_cost, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_costText, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("cost"));
  };
  APrivateResourceVillageActionDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    __dep_export_CastlePrivateResourceVillageRenderHelper.CastlePrivateResourceVillageRenderHelper.renderVillage(this.dialogProperties.villageInfoVO.type, this.dialogDisp.mc_villageHolder, 200, 127);
    this.dialogDisp.mc_crest.gotoAndStop(this.dialogProperties.villageInfoVO.kingdomID + 1);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("ci_level", [this.dialogProperties.villageInfoVO.villageLevel]));
    this.dialogDisp.mc_buy.visible = false;
    this.dialogDisp.mc_upgrade.visible = false;
    this.dialogDisp.mc_costs.visible = false;
    this.dialogDisp.mc_costs.mouseChildren = false;
    this.dialogDisp.mc_costs.toolTipText = "currency_name_ResourceVillageToken";
    this.dialogDisp.mc_exclamationMark.visible = false;
    __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.dialogDisp.btn_ok, true, 1000);
  };
  APrivateResourceVillageActionDialog.prototype.onClick = function (__s9param0) {
    __s1param0.prototype.onClick.call(this, __s9param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s9param0.target)) {
      switch (__s9param0.target) {
        case this.dialogDisp.btn_ok:
          if (__dep_export_CostHelper.CostHelper.getAvailableGoods(new __dep_export_CollectableTypeVO.CollectableTypeVO().initByCollectable(new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RESOURCE_VILLAGE_TOKEN))) < this._cost) {
            __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleNotEnoughVillageTokensDialog.CastleNotEnoughVillageTokensDialog);
          } else {
            this.onConfirm();
          }
          this.hide();
          break;
        case this.dialogDisp.btn_cancel:
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  APrivateResourceVillageActionDialog.prototype.fillCosts = function (__s15param0) {
    this.itxt_cost.textContentVO.numberValue = __s15param0;
    __dep_export_CostHelper.CostHelper.setCurrencyTextFieldColor(this.itxt_cost, new __dep_export_CollectableTypeVO.CollectableTypeVO().initByCollectable(new __dep_export_CollectableItemGenericCurrencyVO.CollectableItemGenericCurrencyVO(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RESOURCE_VILLAGE_TOKEN)), __s15param0);
  };
  APrivateResourceVillageActionDialog.prototype.onConfirm = function () {};
  Object.defineProperty(APrivateResourceVillageActionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  APrivateResourceVillageActionDialog.NAME = "PrivateResourceVillageAction";
  return APrivateResourceVillageActionDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.APrivateResourceVillageActionDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CollectableItemGenericCurrencyVO = require("gge-module:export_CollectableItemGenericCurrencyVO");
var __dep_export_CastlePrivateResourceVillageRenderHelper = require("gge-module:export_CastlePrivateResourceVillageRenderHelper");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_CastleNotEnoughVillageTokensDialog = require("gge-module:export_CastleNotEnoughVillageTokensDialog");
