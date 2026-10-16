Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleOfferDataEvent = require("gge-module:export_CastleOfferDataEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleSpecialIngameOfferDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleSpecialIngameOfferDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSpecialIngameOfferDialog, __s1param0);
  CastleSpecialIngameOfferDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close]);
  };
  CastleSpecialIngameOfferDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_percent, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [this.dialogProperties.offerVO.cashDiscount]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_bonus, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_specialOffer_Bonus"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_specialIngameOffer_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_specialIngameOffer_copy1", [this.dialogProperties.offerVO.cashDiscount]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_specialIngameOffer_copy2"));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    __dep_export_CastleModel.CastleModel.globalOfferData.addEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
    this.onTimeUpdate();
  };
  CastleSpecialIngameOfferDialog.prototype.onTimeUpdate = function (__s9param0 = null) {
    this.itxt_time.textContentVO.stringValue = __s9param0 ? __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getPrimeTimeToString(this.dialogProperties.offerVO.remainingDuration(__s9param0.nowValue), __dep_exact_92d05af59ee2ff30.Localize.text) : __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getPrimeTimeToString(this.dialogProperties.offerVO.remainingDuration(__dep_export_CachedTimer.CachedTimer.getCachedTimer()), __dep_exact_92d05af59ee2ff30.Localize.text);
  };
  CastleSpecialIngameOfferDialog.prototype.onOfferEnded = function (__s11param0) {
    if (__s11param0.offerVO == this.dialogProperties.offerVO) {
      this.hide();
    }
  };
  CastleSpecialIngameOfferDialog.prototype.onClick = function (__s14param0) {
    __s1param0.prototype.onClick.call(this, __s14param0);
    switch (__s14param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleSpecialIngameOfferDialog.prototype.hideLoaded = function (__s17param0 = null) {
    __dep_export_CastleModel.CastleModel.globalOfferData.removeEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
    __s1param0.prototype.hideLoaded.call(this);
  };
  Object.defineProperty(CastleSpecialIngameOfferDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialIngameOfferDialog.__initialize_static_members = function () {
    CastleSpecialIngameOfferDialog.NAME = "CastleSpecialIngameOfferExternal";
  };
  return CastleSpecialIngameOfferDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleSpecialIngameOfferDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
