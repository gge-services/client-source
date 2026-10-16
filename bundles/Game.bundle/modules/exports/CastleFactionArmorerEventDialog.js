Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleGenericMerchantDialog = require("gge-module:export_CastleGenericMerchantDialog");
var __s0local0 = function (__s1param0) {
  function CastleFactionArmorerEventDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleFactionArmorerEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionArmorerEventDialog, __s1param0);
  CastleFactionArmorerEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.speechBubbleTextID)).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.descriptionTextID));
  };
  Object.defineProperty(CastleFactionArmorerEventDialog.prototype, "descriptionTextID", {
    get: function () {
      return "dialog_faction_armorer_hint";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionArmorerEventDialog.prototype, "speechBubbleTextID", {
    get: function () {
      return "dialog_faction_armorer_speechBubble";
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionArmorerEventDialog.prototype.showLoaded = function (__s11param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s11param0);
    this.onTimerTick();
  };
  Object.defineProperty(CastleFactionArmorerEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return __dep_export_FactionArmorerMerchantScrollItem.FactionArmorerMerchantScrollItem;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericMerchantDialog.CastleGenericMerchantDialog.prototype, "merchantScrollItem").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionArmorerEventDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerTick));
  };
  CastleFactionArmorerEventDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerTick));
  };
  CastleFactionArmorerEventDialog.prototype.onTimerTick = function (__s21param0 = null) {
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.txt_runTime, this.remainingEventTimeInSeconds);
    this.dialogDisp.mc_timerToolTip.toolTipText = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventToolTipString(this.remainingEventTimeInSeconds);
  };
  Object.defineProperty(CastleFactionArmorerEventDialog.prototype, "remainingEventTimeInSeconds", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_UNITDEALER_BERIMOND).remainingEventTimeInSeconds;
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionArmorerEventDialog.__initialize_static_members = function () {
    CastleFactionArmorerEventDialog.NAME = "CastleFactionArmorerEventExternal";
  };
  return CastleFactionArmorerEventDialog;
}(__dep_export_CastleGenericMerchantDialog.CastleGenericMerchantDialog);
exports.CastleFactionArmorerEventDialog = __s0local0;
var __dep_export_FactionArmorerMerchantScrollItem = require("gge-module:export_FactionArmorerMerchantScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
