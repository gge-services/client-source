Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleOfferDataEvent = require("gge-module:export_CastleOfferDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleDynamicOfferDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleDynamicOfferDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDynamicOfferDialog, __s1param0);
  CastleDynamicOfferDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
  };
  CastleDynamicOfferDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this.itxt_percent = this.textFieldManager.registerTextField(this.dialogDisp.txt_percent, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [this.dialogProperties.offerVO.cashDiscount]));
    this.itxt_forYou = this.textFieldManager.registerTextField(this.dialogDisp.txt_forYou, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_dynamicOffer_onlyForYou"));
    this.itxt_name = this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_dynamicOffer_hallo", [__dep_export_CastleModel.CastleModel.userData.userName]));
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_dynamicOffer_desc", [this.dialogProperties.offerVO.cashDiscount]));
    this.itxt_desc2 = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_dynamicOffer_desc2"));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.itxt_time.multiline = this.itxt_time.wordwrap = false;
    this.itxt_time.selectable = false;
    this.itxt_time.type = __dep_exact_81dacdf05bd32292.TextFieldType.DYNAMIC;
    this.itxt_time.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    __dep_export_CastleModel.CastleModel.globalOfferData.addEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
  };
  CastleDynamicOfferDialog.prototype.onTimeUpdate = function (__s9param0 = null) {
    this.itxt_time.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.getTimeToString(this.dialogProperties.offerVO.remainingDuration(__s9param0.nowValue), __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
  };
  CastleDynamicOfferDialog.prototype.onOfferEnded = function (__s11param0) {
    if (__s11param0.offerVO == this.dialogProperties.offerVO) {
      this.hide();
    }
  };
  CastleDynamicOfferDialog.prototype.onOfferFinished = function () {
    this.itxt_time.textContentVO = new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_specialIngameOffer_ended");
    this.itxt_forYou.textContentVO.textId = "";
    this.itxt_desc.textContentVO.textId = "dialog_specialIngameOffer_endedText";
    this.itxt_desc2.textContentVO.textId = "";
  };
  CastleDynamicOfferDialog.prototype.onClick = function (__s16param0) {
    __s1param0.prototype.onClick.call(this, __s16param0);
    switch (__s16param0.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleDynamicOfferDialog.prototype.hideLoaded = function (__s19param0 = null) {
    __dep_export_CastleModel.CastleModel.globalOfferData.removeEventListener(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
    __s1param0.prototype.hideLoaded.call(this);
  };
  Object.defineProperty(CastleDynamicOfferDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleDynamicOfferDialog.__initialize_static_members = function () {
    CastleDynamicOfferDialog.NAME = "CastleDynamicOfferExternal";
  };
  return CastleDynamicOfferDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleDynamicOfferDialog = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
