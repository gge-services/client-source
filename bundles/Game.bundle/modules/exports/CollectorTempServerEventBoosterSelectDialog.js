Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_TempServerHelper = require("gge-module:export_TempServerHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_APostAttackSelectBoosterDialog = require("gge-module:export_APostAttackSelectBoosterDialog");
var __s0local0 = function (__s1param0) {
  function CollectorTempServerEventBoosterSelectDialog() {
    return __s1param0.call(this, CollectorTempServerEventBoosterSelectDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectorTempServerEventBoosterSelectDialog, __s1param0);
  CollectorTempServerEventBoosterSelectDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_booster_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_charmBoosterTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tempServer_booster")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tempServer_booster_desc", [this.eventVO.settingVO.boosterCurrencyValue])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_outcome, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_booster_outcome")));
    this.itxt_outcome_value = this.textFieldManager.registerTextField(this.dialogDisp.txt_outcome_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_enemy_currencys, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_booster_enemy")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_enemy_currencys_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.targetCurrencyAmount));
    this.dialogDisp.btn_buy.toolTipText = "dialog_tempServer_Buy_booster_header";
    this.updateSelectedBoosterTexts();
  };
  CollectorTempServerEventBoosterSelectDialog.prototype.updateSelectedBoosterTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_amount, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_proportional_value", [this.scrollComponentValue, this.eventVO.settingVO.boosterCurrencyLimit])).autoFitToBounds = true;
    var __s7local0 = this.eventVO.settingVO.boosterCurrencyValue;
    var __s7local1 = this.dialogProperties.selectedLord.getUniqueBoni(false, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TEMP_SERVER_COLLECTOR_BOOST);
    var __s7local2 = 0;
    var __s7local3 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.globalEffectData.getBonusByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TEMP_SERVER_COLLECTOR_BOOST));
    if (__s7local1 != null) {
      for (var __s7local4 = 0, __s7local5 = __s7local1; __s7local4 < __s7local5.length; __s7local4++) {
        var __s7local6 = __s7local5[__s7local4];
        if (__s7local6 !== undefined) {
          __s7local2 += __dep_exact_f855840627e6e145.int(__s7local6.effectValue.strength);
        }
      }
    }
    var __s7local7 = __dep_exact_f855840627e6e145.int(Math.min(this.scrollComponentValue * __s7local0 + this.eventVO.settingVO.currencyLootFactorMin + __s7local2 + __s7local3, this.eventVO.settingVO.currencyLootFactorMax * 100));
    var __s7local8 = this.targetCurrencyAmount * (__s7local7 / 100);
    if (this.itxt_outcome_value) {
      this.itxt_outcome_value.textContentVO.numberValue = __s7local8;
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txx_percent, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tempServer_booster_value", [__s7local7])).autoFitToBounds = true;
  };
  Object.defineProperty(CollectorTempServerEventBoosterSelectDialog.prototype, "discount", {
    get: function () {
      return __dep_export_EventPackagePrimeSaleEventVO.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.eventVO.settingVO.boosterCurrencyPackageID);
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APostAttackSelectBoosterDialog.APostAttackSelectBoosterDialog.prototype, "discount").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  CollectorTempServerEventBoosterSelectDialog.prototype.getCurrentTrueMaxSpendableBooster = function () {
    return __dep_exact_f855840627e6e145.int(Math.min(this.eventCurrencyBoosterAmount, this.eventVO.settingVO.boosterCurrencyLimit));
  };
  Object.defineProperty(CollectorTempServerEventBoosterSelectDialog.prototype, "boosterKey", {
    get: function () {
      return this.eventVO.settingVO.boosterCurrencyID;
    },
    set: function (__s22param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APostAttackSelectBoosterDialog.APostAttackSelectBoosterDialog.prototype, "boosterKey").set.call(this, __s22param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorTempServerEventBoosterSelectDialog.prototype, "boostedKey", {
    get: function () {
      return this.eventVO.settingVO.currencyID;
    },
    set: function (__s26param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APostAttackSelectBoosterDialog.APostAttackSelectBoosterDialog.prototype, "boostedKey").set.call(this, __s26param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorTempServerEventBoosterSelectDialog.prototype, "targetCurrencyAmount", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.collectEventData.lastGotAmountForTarget;
    },
    enumerable: true,
    configurable: true
  });
  CollectorTempServerEventBoosterSelectDialog.prototype.onBuyButton = function () {
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_ModernPackageShopBuyDialog.ModernPackageShopBuyDialog, this.eventVO.getMerchantProperties());
  };
  CollectorTempServerEventBoosterSelectDialog.prototype.onOkButton = function () {
    var __s32local0 = this.dialogProperties.attackInfoVO;
    __s32local0.isCollectorAttack = true;
    __s32local0.addCollectorBooster(this.boosterKey, __dep_exact_f855840627e6e145.int(this.scrollComponentValue));
    __s32local0.openSelectBoosterDialog = false;
    this.hide();
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_POSTATTACK_DIALOG_COMMAND, [this.dialogProperties.targetActionType, this.dialogProperties.hideFunction, this.dialogProperties.attackInfoVO, this.dialogProperties.selectedLord]);
  };
  Object.defineProperty(CollectorTempServerEventBoosterSelectDialog.prototype, "eventVO", {
    get: function () {
      return __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorTempServerEventBoosterSelectDialog.prototype, "eventCurrencyBoosterAmount", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.currencyData.getAmountById(this.eventVO.settingVO.boosterCurrencyID);
    },
    enumerable: true,
    configurable: true
  });
  CollectorTempServerEventBoosterSelectDialog.NAME = "CollectorEventBoosterSelect";
  return CollectorTempServerEventBoosterSelectDialog;
}(__dep_export_APostAttackSelectBoosterDialog.APostAttackSelectBoosterDialog);
exports.CollectorTempServerEventBoosterSelectDialog = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_EventPackagePrimeSaleEventVO = require("gge-module:export_EventPackagePrimeSaleEventVO");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ModernPackageShopBuyDialog = require("gge-module:export_ModernPackageShopBuyDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
