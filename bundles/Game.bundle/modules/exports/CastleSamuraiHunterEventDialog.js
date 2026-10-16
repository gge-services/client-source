Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleGenericMerchantDialog = require("gge-module:export_CastleGenericMerchantDialog");
var __s0local0 = function (__s1param0) {
  function CastleSamuraiHunterEventDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleSamuraiHunterEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSamuraiHunterEventDialog, __s1param0);
  CastleSamuraiHunterEventDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTick));
  };
  CastleSamuraiHunterEventDialog.prototype.onTick = function (__s7param0) {
    this.updateTimer();
  };
  CastleSamuraiHunterEventDialog.prototype.updateTimer = function () {
    this.itxt_time.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.dialogProperties.buyPackageEventVO.remainingEventTimeInSeconds);
    this.dialogDisp.mc_timer.toolTipText = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventToolTipString(this.dialogProperties.buyPackageEventVO.remainingEventTimeInSeconds);
  };
  CastleSamuraiHunterEventDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTick));
  };
  CastleSamuraiHunterEventDialog.prototype.initLoaded = function (__s13param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s13param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_samuraiToolVendor_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_detailedDescription, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_samuraiToolVendor_desc_detail")).autoFitToBounds = true;
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_timer.txt_time, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.itxt_time.autoFitToBounds = true;
    this.dialogDisp.mc_timer.mouseChildren = false;
  };
  CastleSamuraiHunterEventDialog.prototype.showLoaded = function (__s15param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s15param0);
    this.updateTimer();
  };
  Object.defineProperty(CastleSamuraiHunterEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return __dep_export_CastleSamuraiHunterEventScrollItem.CastleSamuraiHunterEventScrollItem;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericMerchantDialog.CastleGenericMerchantDialog.prototype, "merchantScrollItem").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleSamuraiHunterEventDialog.__initialize_static_members = function () {
    CastleSamuraiHunterEventDialog.NAME = "CastleSamuraiHunterEvent";
  };
  return CastleSamuraiHunterEventDialog;
}(__dep_export_CastleGenericMerchantDialog.CastleGenericMerchantDialog);
exports.CastleSamuraiHunterEventDialog = __s0local0;
var __dep_export_CastleSamuraiHunterEventScrollItem = require("gge-module:export_CastleSamuraiHunterEventScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
