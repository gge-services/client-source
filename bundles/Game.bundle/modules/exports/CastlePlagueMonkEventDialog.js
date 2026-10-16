Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleSpyDataEvent = require("gge-module:export_CastleSpyDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleGenericBuyDialogProperties = require("gge-module:export_CastleGenericBuyDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastlePlagueMonkEventDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePlagueMonkEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePlagueMonkEventDialog, __s1param0);
  CastlePlagueMonkEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_addMonk]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_plagueEvent_speechBubble")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc1, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_plagueEvent_desc1"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc2, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_plagueEvent_desc2"));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_timeBg.txt_time, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.itxt_discount = this.textFieldManager.registerTextField(this.dialogDisp.btn_addMonk.mc_discount.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE));
    this.itxt_time.textAlign = __dep_exact_9e901e8e2483a22f.GGSTextAlign.LEFT;
    this.itxt_monkcount = this.textFieldManager.registerTextField(this.dialogDisp.mc_countBg.txt_monkCount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
  };
  CastlePlagueMonkEventDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateSpecialEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onAddEvent));
    __dep_export_CastleModel.CastleModel.spyData.addEventListener(__dep_export_CastleSpyDataEvent.CastleSpyDataEvent.PLAGUEMONK_COUNT_UPDATE, this.bindFunction(this.onPreSpyInfoUpdate));
    this.dialogDisp.mc_countBg.toolTipText = "spy_dialog_plagueMonkCount";
    this.dialogDisp.mc_timeBg.toolTipText = "resttime";
    this.onUpdateSpecialEvent(null);
    this.showMonkCount();
    this.showMonkDiscount();
  };
  CastlePlagueMonkEventDialog.prototype.onAddEvent = function (__s9param0) {
    if (__s9param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_PACKAGE_PRIME_SALES) {
      this.showMonkDiscount();
    }
  };
  CastlePlagueMonkEventDialog.prototype.onPreSpyInfoUpdate = function (__s12param0) {
    this.showMonkCount();
  };
  CastlePlagueMonkEventDialog.prototype.showMonkCount = function () {
    var __s14local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.spyData.totalPlagueMonks);
    var __s14local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.spyData.availablePlagueMonks);
    this.itxt_monkcount.textContentVO.numberValue = __s14local1;
    if (__s14local0 < __dep_exact_26a421b704832cff_1.SpyConst.MAX_OWNABLE_PLAGUEMONKS) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_addMonk, true);
      this.dialogDisp.btn_addMonk.toolTipText = "dialog_plagueEvent_buyMonk";
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_addMonk, false);
      this.dialogDisp.btn_addMonk.toolTipText = "dialog_plagueEvent_maxPlaguemonkCount";
    }
  };
  CastlePlagueMonkEventDialog.prototype.showMonkDiscount = function () {
    var __s18local0 = 0;
    for (var __s18local1 = 0; __s18local1 < this.dialogProperties.plagueEventVO.eventPackages.length; __s18local1++) {
      if ((__s18local0 = __dep_exact_f855840627e6e145.int(__dep_export_EventPackagePrimeSaleEventVO.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.dialogProperties.plagueEventVO.eventPackages[__s18local1].packageID))) > 0) {
        this.itxt_discount.textContentVO.textReplacements = [-__s18local0];
        break;
      }
    }
    this.dialogDisp.btn_addMonk.mc_discount.visible = __s18local0 != 0;
  };
  CastlePlagueMonkEventDialog.prototype.onClick = function (__s23param0) {
    __s1param0.prototype.onClick.call(this, __s23param0);
    switch (__s23param0.target) {
      case this.dialogDisp.btn_addMonk:
        if (this.dialogDisp.btn_addMonk.enabled) {
          this.addPlagueMonks();
        }
        break;
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastlePlagueMonkEventDialog.prototype.addPlagueMonks = function () {
    var __s27local0 = new __dep_export_CastleGenericBuyDialogProperties.CastleGenericBuyDialogProperties();
    __s27local0.specialEventVO = this.dialogProperties.plagueEventVO;
    __s27local0.eventPackageVO = this.dialogProperties.plagueEventVO.eventPackages[0];
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastlePlagueUnitEventBuyDialog.CastlePlagueUnitEventBuyDialog, __s27local0);
  };
  CastlePlagueMonkEventDialog.prototype.onUpdateSpecialEvent = function (__s29param0) {
    this.itxt_time.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.getShortTimeStringBySeconds(this.dialogProperties.plagueEventVO.remainingEventTimeInSeconds);
  };
  CastlePlagueMonkEventDialog.prototype.onRemoveEvent = function (__s31param0) {
    if (__s31param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PLAGUE) {
      this.hide();
    } else if (__s31param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_PACKAGE_PRIME_SALES) {
      this.showMonkDiscount();
    }
  };
  CastlePlagueMonkEventDialog.prototype.hideLoaded = function (__s35param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateSpecialEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onAddEvent));
    __dep_export_CastleModel.CastleModel.spyData.removeEventListener(__dep_export_CastleSpyDataEvent.CastleSpyDataEvent.PLAGUEMONK_COUNT_UPDATE, this.bindFunction(this.onPreSpyInfoUpdate));
  };
  Object.defineProperty(CastlePlagueMonkEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePlagueMonkEventDialog.__initialize_static_members = function () {
    CastlePlagueMonkEventDialog.NAME = "CastlePlagueMonkEvent";
  };
  return CastlePlagueMonkEventDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastlePlagueMonkEventDialog = __s0local0;
var __dep_export_EventPackagePrimeSaleEventVO = require("gge-module:export_EventPackagePrimeSaleEventVO");
var __dep_export_CastlePlagueUnitEventBuyDialog = require("gge-module:export_CastlePlagueUnitEventBuyDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
