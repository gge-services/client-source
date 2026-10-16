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
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_APostAttackSelectBoosterDialog = require("gge-module:export_APostAttackSelectBoosterDialog");
var __s0local0 = function (__s1param0) {
  function AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog() {
    return __s1param0.call(this, AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog, __s1param0);
  AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_selectBooster_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_charmBoosterTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("influenceBooster_colon")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_selectBooster_influence_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_outcome, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("lootedInfluence_colon")));
    this.itxt_outcome_value = this.textFieldManager.registerTextField(this.dialogDisp.txt_outcome_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_enemy_currencys, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("enemyInfluence_colon")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_enemy_currencys_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.targetCurrencyAmount));
    this.updateSelectedBoosterTexts();
  };
  AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.prototype.updateSelectedBoosterTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_amount, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_proportional_value", [this.scrollComponentValue, __dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.boosterCurrencyLimit])).autoFitToBounds = true;
    var __s7local0 = __dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.boosterCurrencyValue;
    var __s7local1 = __dep_exact_f855840627e6e145.int(this.targetCurrencyAmount * ((this.scrollComponentValue * __s7local0 + __dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.currencyLootFactorMin) / 100));
    if (this.itxt_outcome_value) {
      this.itxt_outcome_value.textContentVO.numberValue = __s7local1;
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txx_percent, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_percentage_add", [this.scrollComponentValue * __s7local0 + __dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.currencyLootFactorMin])).autoFitToBounds = true;
  };
  Object.defineProperty(AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.prototype, "discount", {
    get: function () {
      return __dep_export_EventPackagePrimeSaleEventVO.EventPackagePrimeSaleEventVO.getPackageDiscountC2(__dep_export_ABGHelper.ABGHelper.abgEvent.eventPackages[0].packageID);
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APostAttackSelectBoosterDialog.APostAttackSelectBoosterDialog.prototype, "discount").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.prototype.getCurrentTrueMaxSpendableBooster = function () {
    return __dep_exact_f855840627e6e145.int(Math.min(this.eventCurrencyBoosterAmount, __dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.boosterCurrencyLimit));
  };
  Object.defineProperty(AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.prototype, "boosterKey", {
    get: function () {
      return __dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.boosterCurrencyID;
    },
    set: function (__s18param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APostAttackSelectBoosterDialog.APostAttackSelectBoosterDialog.prototype, "boosterKey").set.call(this, __s18param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.prototype, "boostedKey", {
    get: function () {
      return __dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.currencyID;
    },
    set: function (__s22param0) {
      Object.getOwnPropertyDescriptor(__dep_export_APostAttackSelectBoosterDialog.APostAttackSelectBoosterDialog.prototype, "boostedKey").set.call(this, __s22param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.prototype, "targetCurrencyAmount", {
    get: function () {
      return this.dialogProperties.attackInfoVO.targetCollectorCurrencyAmount;
    },
    enumerable: true,
    configurable: true
  });
  AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.prototype.onBuyButton = function () {
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_ModernPackageShopBuyDialog.ModernPackageShopBuyDialog, __dep_export_ABGHelper.ABGHelper.abgEvent.getMerchantProperties());
  };
  AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.prototype.onOkButton = function () {
    var __s28local0 = this.dialogProperties.attackInfoVO;
    __s28local0.isCollectorAttack = true;
    __s28local0.addCollectorBooster(this.boosterKey, __dep_exact_f855840627e6e145.int(this.scrollComponentValue));
    __s28local0.openSelectBoosterDialog = false;
    this.hide();
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_POSTATTACK_DIALOG_COMMAND, [this.dialogProperties.targetActionType, this.dialogProperties.hideFunction, this.dialogProperties.attackInfoVO, this.dialogProperties.selectedLord]);
  };
  Object.defineProperty(AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.prototype, "eventCurrencyBoosterAmount", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.currencyData.getAmountByType(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_INFLUENCE_BOOSTER));
    },
    enumerable: true,
    configurable: true
  });
  AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.NAME = "CollectorEventBoosterSelect";
  return AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog;
}(__dep_export_APostAttackSelectBoosterDialog.APostAttackSelectBoosterDialog);
exports.AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_EventPackagePrimeSaleEventVO = require("gge-module:export_EventPackagePrimeSaleEventVO");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ModernPackageShopBuyDialog = require("gge-module:export_ModernPackageShopBuyDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
