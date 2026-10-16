Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicSliderVO = require("gge-module:export_BasicSliderVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function MultiEventRewardsDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, MultiEventRewardsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MultiEventRewardsDialog, __s1param0);
  MultiEventRewardsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this._eventInfoClass = __dep_exact_81dacdf05bd32292_1.getDefinitionByName("MultiEventReward_Infos");
  };
  MultiEventRewardsDialog.prototype.showLoaded = function (__s7param0 = null) {
    if (this.dialogProperties.events.length == 0) {
      if (this.hasPreloaderDialog) {
        this.layoutManager.hideDialog(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog);
      }
      this.hide();
      return;
    }
    this.selectBackgroundSize();
    this.positionOkButton();
    this.createEventInfos();
    this.initScrollList();
    this.fillScrollList(this.dialogProperties.events);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_yes, this.dialogDisp.btn_up, this.dialogDisp.btn_down]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_combinedReward_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_combinedReward_desc"));
    __s1param0.prototype.showLoaded.call(this, __s7param0);
  };
  MultiEventRewardsDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
  };
  MultiEventRewardsDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventUpdated));
  };
  MultiEventRewardsDialog.prototype.onEventUpdated = function (__s15param0) {
    this.removeScrollList();
    this.initScrollList();
    this.fillScrollList(this.dialogProperties.events);
  };
  MultiEventRewardsDialog.prototype.updateVisibilityOfScrollbar = function () {
    var __s17local0 = this.dialogProperties.events.length > MultiEventRewardsDialog.EVENTS_PER_PAGE;
    this.dialogDisp.btn_down.visible = __s17local0;
    this.dialogDisp.btn_up.visible = __s17local0;
    this.dialogDisp.mc_slider.btn_slider.visible = __s17local0;
    this.dialogDisp.mc_slider.mc_sliderLine.visible = __s17local0;
    this.dialogDisp.mc_slider.sliderbar_bg.visible = __s17local0;
  };
  MultiEventRewardsDialog.prototype.selectBackgroundSize = function () {
    var __s19local0 = __dep_exact_f855840627e6e145.int(this.dialogProperties.events.length > MultiEventRewardsDialog.EVENTS_PER_PAGE ? this.dialogDisp.background.totalFrames : this.dialogProperties.events.length);
    this.dialogDisp.background.gotoAndStop(__s19local0);
  };
  MultiEventRewardsDialog.prototype.positionOkButton = function () {
    var __s21local0 = this.dialogDisp.background.placeholder_btnYes;
    var __s21local1 = new __s0local0(__s21local0.x, __s21local0.y);
    var __s21local2 = this.dialogDisp.background.localToGlobal(__s21local1);
    __s21local2 = this.dialogDisp.globalToLocal(__s21local2);
    this.dialogDisp.btn_yes.x = __s21local2.x;
    this.dialogDisp.btn_yes.y = __s21local2.y;
  };
  MultiEventRewardsDialog.prototype.initScrollList = function () {
    var __s23local0 = new __dep_export_BasicSliderVO.BasicSliderVO(this.dialogDisp.mc_slider.mc_sliderLine, this.dialogDisp.mc_slider.btn_slider, this.dialogProperties.events.length, 0, this.dialogDisp.mc_slider);
    this._scrollList = new __dep_export_MultiEventRewardScrollList.MultiEventRewardScrollList(this.dialogDisp, null, __s23local0);
    this._scrollList.hideButtons = true;
    this._scrollList.scrollStep = 1;
    this.updateVisibilityOfScrollbar();
  };
  MultiEventRewardsDialog.prototype.fillScrollList = function (__s25param0) {
    if (__s25param0 != null) {
      for (var __s25local0 = 0, __s25local1 = __s25param0; __s25local0 < __s25local1.length; __s25local0++) {
        var __s25local2 = __s25local1[__s25local0];
        if (__s25local2 !== undefined) {
          this._scrollList.pushContent(__s25local2);
        }
      }
    }
    this._scrollList.scrollItemClass = __dep_export_EventRewardScrollItem.EventRewardScrollItem;
    this._scrollList.initList(0, false);
  };
  MultiEventRewardsDialog.prototype.removeScrollList = function () {
    if (this._scrollList) {
      this._scrollList.remove();
      this._scrollList.clear();
      this._scrollList = null;
    }
  };
  MultiEventRewardsDialog.prototype.createEventInfos = function () {
    if (this._infoMcs) {
      while (this._infoMcs.length > 0) {
        var __s34local0 = this._infoMcs.pop();
        __s34local0.parent.removeChild(__s34local0);
      }
    }
    this._infoMcs = [];
    var __s34local1;
    for (var __s34local2 = __dep_exact_f855840627e6e145.int(Math.min(this.dialogProperties.events.length, MultiEventRewardsDialog.EVENTS_PER_PAGE)), __s34local3 = 0; __s34local3 < __s34local2; __s34local3++) {
      (__s34local1 = new this._eventInfoClass()).name = "item" + __s34local3;
      __s34local1.x = this.dialogDisp.event_placeholder.x;
      __s34local1.y = this.dialogDisp.event_placeholder.y + __s34local3 * (__s34local1.height + 3);
      this.dialogDisp.addChild(__s34local1);
      this._infoMcs.push(__s34local1);
    }
  };
  Object.defineProperty(MultiEventRewardsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  MultiEventRewardsDialog.prototype.onClick = function (__s43param0) {
    __s1param0.prototype.onClick.call(this, __s43param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s43param0.target)) {
      switch (__s43param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_yes:
          this.hide();
      }
    }
  };
  MultiEventRewardsDialog.prototype.hideLoaded = function (__s47param0 = null) {
    this.removeScrollList();
    __s1param0.prototype.hideLoaded.call(this, __s47param0);
  };
  MultiEventRewardsDialog.__initialize_static_members = function () {
    MultiEventRewardsDialog.NAME = "MultiEventRewards";
    MultiEventRewardsDialog.EVENTS_PER_PAGE = 4;
  };
  return MultiEventRewardsDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.MultiEventRewardsDialog = __s0local1;
var __dep_export_CastleExternalPreloaderDialog = require("gge-module:export_CastleExternalPreloaderDialog");
var __dep_export_EventRewardScrollItem = require("gge-module:export_EventRewardScrollItem");
var __dep_export_MultiEventRewardScrollList = require("gge-module:export_MultiEventRewardScrollList");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
