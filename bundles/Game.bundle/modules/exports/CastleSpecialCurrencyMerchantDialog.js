Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __s0local0 = function (__s1param0) {
  function CastleSpecialCurrencyMerchantDialog(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSpecialCurrencyMerchantDialog, __s1param0);
  Object.defineProperty(CastleSpecialCurrencyMerchantDialog.prototype, "descriptionText", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialCurrencyMerchantDialog.prototype, "detailedDescriptionText", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialCurrencyMerchantDialog.prototype, "userSpecialCurrencies", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialCurrencyMerchantDialog.prototype, "isEvent", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialCurrencyMerchantDialog.prototype.initLoaded = function (__s13param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s13param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.descriptionText));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_detailedDescription, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.detailedDescriptionText));
    this.specialCurrencyTextFields = [];
    for (var __s13local0 = 0; __s13local0 < this.userSpecialCurrencies.length; __s13local0++) {
      var __s13local1 = this.userSpecialCurrencies[__s13local0];
      var __s13local2 = __s13local0 == 0 ? "" : String(__s13local0 + 1);
      var __s13local3 = __dep_export_CollectableHelper.CollectableHelper.createVO(__s13local1.type, 0, __s13local1.id);
      this.dialogDisp["mcSpecialCurrency" + __s13local2].toolTipText = __s13local3.getTooltipTextId();
      this.dialogDisp["mcSpecialCurrency" + __s13local2].mouseChildren = false;
      var __s13local4 = this.textFieldManager.registerTextField(this.dialogDisp["mcSpecialCurrency" + __s13local2].tfAmount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__dep_export_CostHelper.CostHelper.getAvailableGoods(__s13local1)));
      this.specialCurrencyTextFields.push(__s13local4);
    }
    if (this.isEvent) {
      this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
      this.itxt_time.textAlign = __dep_exact_9e901e8e2483a22f.GGSTextAlign.CENTER;
    }
  };
  CastleSpecialCurrencyMerchantDialog.prototype.showLoaded = function (__s18param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s18param0);
    this.onSpecialUserCurrencyUpdate();
    if (this.isEvent) {
      this.onUpdateEventTime(null);
    }
  };
  CastleSpecialCurrencyMerchantDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    if (this.isEvent) {
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    }
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialUserCurrencyUpdate));
  };
  CastleSpecialCurrencyMerchantDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    if (this.isEvent) {
      __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    }
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialUserCurrencyUpdate));
  };
  CastleSpecialCurrencyMerchantDialog.prototype.onSpecialUserCurrencyUpdate = function (__s27param0 = null) {
    this.setCurrencyDisplay();
  };
  CastleSpecialCurrencyMerchantDialog.prototype.setCurrencyDisplay = function () {
    for (var __s29local0 = 0; __s29local0 < this.specialCurrencyTextFields.length; __s29local0++) {
      this.specialCurrencyTextFields[__s29local0].textContentVO.numberValue = __dep_export_CostHelper.CostHelper.getAvailableGoods(this.userSpecialCurrencies[__s29local0]);
    }
  };
  CastleSpecialCurrencyMerchantDialog.prototype.onUpdateEventTime = function (__s33param0) {
    if (this.dialogProperties && this.dialogProperties.buyPackageEventVO && this.itxt_time.textContentVO) {
      __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_time, this.dialogProperties.buyPackageEventVO.remainingEventTimeInSeconds);
      __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, this.dialogProperties.buyPackageEventVO.remainingEventTimeInSeconds);
    }
  };
  CastleSpecialCurrencyMerchantDialog.prototype.sortPackagesByHighlightOrder = function (__s36param0) {};
  return CastleSpecialCurrencyMerchantDialog;
}(require("gge-module:export_CastleGenericMerchantDialog").CastleGenericMerchantDialog);
exports.CastleSpecialCurrencyMerchantDialog = __s0local0;
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
