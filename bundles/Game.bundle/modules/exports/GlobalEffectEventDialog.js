Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SGlobalEffectsSeenVO = require("gge-module:export_C2SGlobalEffectsSeenVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_AccordionComponentProperties = require("gge-module:export_AccordionComponentProperties");
var __dep_export_GenericCollapsibleItemProperties = require("gge-module:export_GenericCollapsibleItemProperties");
var __dep_export_LayoutMargin = require("gge-module:export_LayoutMargin");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_DynamicSliderAccordionComponent = require("gge-module:export_DynamicSliderAccordionComponent");
var __dep_export_GlobalEffectEventInfoDialog = require("gge-module:export_GlobalEffectEventInfoDialog");
var __s0local0 = function (__s1param0) {
  function GlobalEffectEventDialog() {
    return __s1param0.call(this, GlobalEffectEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GlobalEffectEventDialog, __s1param0);
  GlobalEffectEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_info], __dep_export_ClickFeedbackButton.ClickFeedbackButton, 1);
    this.dialogDisp.btn_tab.gotoAndStop(2);
    var __s5local0 = new __dep_export_AccordionComponentProperties.AccordionComponentProperties();
    __s5local0.scrollStrategy = __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical;
    __s5local0.disableButtons = true;
    this._scrollList = new __dep_export_DynamicSliderAccordionComponent.DynamicSliderAccordionComponent(this.dialogDisp.mc_list, __s5local0);
  };
  GlobalEffectEventDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    if (this.eventVO) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_globalEffects_header")));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(" ")));
      this.textFieldManager.registerTextField(this.dialogDisp.btn_info.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_globalEffects_more_info")));
      if (__dep_exact_f855840627e6e145.int(this.eventVO.remainingEventTimeInSeconds) <= 0) {
        this.hide();
      } else {
        this.updateItems();
        this._scrollList.show();
        __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
        __dep_export_CastleModel.CastleModel.globalEffectData.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GLOBAL_EFFECT_BUFFED, this.bindFunction(this.onBuffedInfo));
        __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
        this.onUpdateEventTime();
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGlobalEffectsSeenVO.C2SGlobalEffectsSeenVO());
      }
    } else {
      this.hide();
    }
  };
  GlobalEffectEventDialog.prototype.onUpdateEventTime = function (__s13param0 = null) {
    if (this.eventVO) {
      if (__dep_exact_f855840627e6e145.int(this.eventVO.remainingEventTimeInSeconds) <= 0) {
        this.hide();
      } else {
        this.updateTimer();
      }
    } else {
      this.hide();
    }
  };
  GlobalEffectEventDialog.prototype.onBuffedInfo = function (__s19param0) {
    this.updateItems();
  };
  GlobalEffectEventDialog.prototype.onEventRemoved = function (__s21param0) {
    if (__s21param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT) {
      this.hide();
    }
  };
  GlobalEffectEventDialog.prototype.onClick = function (__s24param0) {
    __s1param0.prototype.onClick.call(this, __s24param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s24param0.target)) {
      switch (__s24param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          return;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_globalEffects_help"));
          return;
        case this.dialogDisp.btn_info:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_GlobalEffectEventInfoDialog.GlobalEffectEventInfoDialog);
          return;
      }
    }
  };
  GlobalEffectEventDialog.prototype.updateTimer = function () {
    if (!this.eventVO) {
      this.hide();
    }
    this._scrollList.items.forEach(GlobalEffectEventDialog.updateItemTimer);
  };
  GlobalEffectEventDialog.updateItemTimer = function (__s31param0) {
    var __s31local0 = [];
    for (var __s31local1 = 1; __s31local1 < arguments.length; __s31local1++) {
      __s31local0[__s31local1 - 1] = arguments[__s31local1];
    }
    __s31param0.updateTimer();
  };
  GlobalEffectEventDialog.prototype.updateItems = function () {
    this._scrollList.clear();
    var __s35local0 = [];
    for (var __s35local1 = 0, __s35local2 = this.eventVO.getShownItems(); __s35local1 < __s35local2.length; __s35local1++) {
      var __s35local3 = __s35local2[__s35local1];
      for (var __s35local4 = 0, __s35local5 = __s35local3[0]; __s35local4 < __s35local5.length; __s35local4++) {
        var __s35local6 = __s35local5[__s35local4];
        if (__s35local6 !== undefined && __s35local6.canBeUsed) {
          var __s35local7 = new __dep_export_GlobalEffectEventDialogListItem.GlobalEffectEventDialogListItem([__s35local6, __s35local3[1], __s35local3[2]], GlobalEffectEventDialog.itemProperties);
          __s35local0.push(__s35local7);
        }
      }
    }
    __s35local0.sort(this.bindFunction(this.sortListItems));
    for (var __s35local8 = 0; __s35local8 < __s35local0.length; __s35local8++) {
      this._scrollList.addItem(__s35local0[__s35local8]);
    }
    this._scrollList.show();
    if (this._scrollList.numItems == 1) {
      this._scrollList.expandItemAt(0, true, true);
    }
  };
  GlobalEffectEventDialog.prototype.sortListItems = function (__s45param0, __s45param1) {
    return __dep_exact_f855840627e6e145.int(__s45param0.remainingTimeInSeconds - __s45param1.remainingTimeInSeconds);
  };
  GlobalEffectEventDialog.prototype.hideLoaded = function (__s47param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s47param0);
    this._scrollList.hide();
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    __dep_export_CastleModel.CastleModel.globalEffectData.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GLOBAL_EFFECT_BUFFED, this.bindFunction(this.onBuffedInfo));
  };
  Object.defineProperty(GlobalEffectEventDialog.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_GLOBAL_EFFECTS);
    },
    enumerable: true,
    configurable: true
  });
  GlobalEffectEventDialog.__initialize_static_members = function () {
    GlobalEffectEventDialog.itemProperties = new __dep_export_GenericCollapsibleItemProperties.GenericCollapsibleItemProperties(new __dep_export_LayoutMargin.LayoutMargin(0, 6, 0, 0), true, 0.2, 0.2, false);
  };
  GlobalEffectEventDialog.NAME = "GlobalEffectEvent_Boost";
  return GlobalEffectEventDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.GlobalEffectEventDialog = __s0local0;
var __dep_export_GlobalEffectEventDialogListItem = require("gge-module:export_GlobalEffectEventDialogListItem");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
