Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_APostAttackSelectBoosterDialog = require("gge-module:export_APostAttackSelectBoosterDialog");
var __s0local0 = function (__s1param0) {
  function CollectorEventBoosterSelectDialog() {
    return __s1param0.call(this, CollectorEventBoosterSelectDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectorEventBoosterSelectDialog, __s1param0);
  CollectorEventBoosterSelectDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_collector_booster_header_" + this.eventSuffix))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_charmBoosterTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_collector_booster_" + this.eventSuffix)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_collector_booster_desc_" + this.eventSuffix)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_outcome, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_collector_booster_outcome_" + this.eventSuffix)));
    this.itxt_outcome_value = this.textFieldManager.registerTextField(this.dialogDisp.txt_outcome_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_enemy_currencys, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_collector_booster_enemy_" + this.eventSuffix)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_enemy_currencys_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.targetCurrencyAmount));
    this.dialogDisp.btn_buy.toolTipText = "dialog_collector_Buy_booster_header_" + this.eventSuffix;
    this.updateSelectedBoosterTexts();
  };
  Object.defineProperty(CollectorEventBoosterSelectDialog.prototype, "eventSuffix", {
    get: function () {
      return this.eventVO.collectInfoVO.collectorEventSkinName;
    },
    enumerable: true,
    configurable: true
  });
  CollectorEventBoosterSelectDialog.prototype.updateSelectedBoosterTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_amount, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_proportional_value", [this.scrollComponentValue, this.eventVO.collectInfoVO.collectorKeyLimit])).autoFitToBounds = true;
    var __s9local0 = this.eventVO.collectInfoVO.collectorKeyBoost;
    var __s9local1 = this.dialogProperties.selectedLord.getUniqueBoni(false, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_COLLECTOR_BOOST);
    var __s9local2 = 0;
    if (__s9local1 != null) {
      for (var __s9local3 = 0, __s9local4 = __s9local1; __s9local3 < __s9local4.length; __s9local3++) {
        var __s9local5 = __s9local4[__s9local3];
        if (__s9local5 !== undefined) {
          __s9local2 += __dep_exact_f855840627e6e145.int(__s9local5.effectValue.strength);
        }
      }
    }
    var __s9local6 = __dep_exact_f855840627e6e145.int(this.targetCurrencyAmount * ((this.scrollComponentValue * __s9local0 + this.eventVO.collectInfoVO.baseCollectorBoost + __s9local2) / 100));
    if (this.itxt_outcome_value) {
      this.itxt_outcome_value.textContentVO.numberValue = __s9local6;
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txx_percent, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_collector_booster_value_" + this.eventSuffix, [this.scrollComponentValue * __s9local0])).autoFitToBounds = true;
  };
  Object.defineProperty(CollectorEventBoosterSelectDialog.prototype, "discount", {
    get: function () {
      return __dep_export_EventPackagePrimeSaleEventVO.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.eventVO.collectInfoVO.collectorKeyPackageID);
    },
    set: function (__s18param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APostAttackSelectBoosterDialog.APostAttackSelectBoosterDialog.prototype, "discount").set.call(this, __s18param0);
    },
    enumerable: true,
    configurable: true
  });
  CollectorEventBoosterSelectDialog.prototype.getCurrentTrueMaxSpendableBooster = function () {
    return __dep_exact_f855840627e6e145.int(Math.min(this.eventCurrencyBoosterAmount, this.eventVO.collectInfoVO.collectorKeyLimit));
  };
  Object.defineProperty(CollectorEventBoosterSelectDialog.prototype, "boosterKey", {
    get: function () {
      return this.eventVO.collectInfoVO.collectorKeyCurrencyID;
    },
    set: function (__s24param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APostAttackSelectBoosterDialog.APostAttackSelectBoosterDialog.prototype, "boosterKey").set.call(this, __s24param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorEventBoosterSelectDialog.prototype, "boostedKey", {
    get: function () {
      return this.eventVO.collectInfoVO.collectorCurrencyID;
    },
    set: function (__s28param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APostAttackSelectBoosterDialog.APostAttackSelectBoosterDialog.prototype, "boostedKey").set.call(this, __s28param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorEventBoosterSelectDialog.prototype, "targetCurrencyAmount", {
    get: function () {
      return this.dialogProperties.attackInfoVO.targetCollectorCurrencyAmount;
    },
    enumerable: true,
    configurable: true
  });
  CollectorEventBoosterSelectDialog.prototype.onBuyButton = function () {
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_ModernPackageShopBuyDialog.ModernPackageShopBuyDialog, this.eventVO.getMerchantProperties());
  };
  CollectorEventBoosterSelectDialog.prototype.onOkButton = function () {
    var __s34local0 = this.dialogProperties.attackInfoVO;
    __s34local0.isCollectorAttack = true;
    __s34local0.addCollectorBooster(this.boosterKey, __dep_exact_f855840627e6e145.int(this.scrollComponentValue));
    __s34local0.openSelectBoosterDialog = false;
    this.hide();
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_POSTATTACK_DIALOG_COMMAND, [this.dialogProperties.targetActionType, this.dialogProperties.hideFunction, this.dialogProperties.attackInfoVO, this.dialogProperties.selectedLord]);
  };
  Object.defineProperty(CollectorEventBoosterSelectDialog.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_COLLECTOR_SHOP);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorEventBoosterSelectDialog.prototype, "eventCurrencyBoosterAmount", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.currencyData.getAmountById(this.eventVO.collectInfoVO.collectorKeyCurrencyID);
    },
    enumerable: true,
    configurable: true
  });
  CollectorEventBoosterSelectDialog.NAME = "CollectorEventBoosterSelect";
  return CollectorEventBoosterSelectDialog;
}(__dep_export_APostAttackSelectBoosterDialog.APostAttackSelectBoosterDialog);
exports.CollectorEventBoosterSelectDialog = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_EventPackagePrimeSaleEventVO = require("gge-module:export_EventPackagePrimeSaleEventVO");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ModernPackageShopBuyDialog = require("gge-module:export_ModernPackageShopBuyDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
