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
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = function (__s1param0) {
  function SeasonLeagueRewardOverviewDialog() {
    var __s3local0 = this;
    __s3local0._items = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, SeasonLeagueRewardOverviewDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueRewardOverviewDialog, __s1param0);
  SeasonLeagueRewardOverviewDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp.mc_slider).addMouseWheelElements([this.dialogDisp.mc_items]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true));
  };
  SeasonLeagueRewardOverviewDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    this._scrollComponent.show();
    if (this._items != null) {
      for (var __s7local0 = 0, __s7local1 = this._items; __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        if (__s7local2 !== undefined) {
          __s7local2.onShow();
        }
      }
    }
    this.updateText();
    this.updateItems();
  };
  SeasonLeagueRewardOverviewDialog.prototype.hide = function () {
    if (this._scrollComponent) {
      this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
      this._scrollComponent.hide();
    }
    if (this._items != null) {
      for (var __s13local0 = 0, __s13local1 = this._items; __s13local0 < __s13local1.length; __s13local0++) {
        var __s13local2 = __s13local1[__s13local0];
        if (__s13local2 !== undefined) {
          __s13local2.onHide();
        }
      }
    }
    __s1param0.prototype.hide.call(this);
  };
  SeasonLeagueRewardOverviewDialog.prototype.updateText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProperties.titleTextId))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.dialogProperties.descTextId)).autoFitToBounds = true;
  };
  SeasonLeagueRewardOverviewDialog.prototype.updateItems = function () {
    if (this._items != null) {
      for (var __s22local0 = 0, __s22local1 = this._items; __s22local0 < __s22local1.length; __s22local0++) {
        var __s22local2 = __s22local1[__s22local0];
        if (__s22local2 !== undefined) {
          __s22local2.destroy();
        }
      }
    }
    this._items = [];
    var __s22local3 = this.getIemContainerMc();
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s22local3);
    var __s22local4 = 0;
    for (var __s22local5 = 0; __s22local5 < this.dialogProperties.itemVOs.length; ++__s22local5) {
      var __s22local6 = this.dialogProperties.itemVOs[__s22local5];
      (__s22local2 = new __dep_export_SeasonLeagueRewardOverviewDialogItem.SeasonLeagueRewardOverviewDialogItem(__s22local3, __s22local6, __s22local5)).onShow();
      __s22local2.disp.y = __s22local4;
      __s22local4 += __s22local2.disp.height;
    }
    var __s22local7 = __dep_exact_f855840627e6e145.int(__s22local2 ? __s22local2.disp.height : 1);
    var __s22local8 = __dep_exact_f855840627e6e145.int(Math.max(0, __s22local3.height - SeasonLeagueRewardOverviewDialog.ITEM_MASK_HEIGHT));
    this._scrollComponent.init(0, __s22local8, __s22local7, __s22local7);
    this._scrollComponent.scrollToValue(0);
    this._scrollComponent.setVisibility(__s22local8 > 0);
  };
  SeasonLeagueRewardOverviewDialog.prototype.getIemContainerMc = function () {
    return this.dialogDisp.mc_items.mc_transform;
  };
  SeasonLeagueRewardOverviewDialog.prototype.onClick = function (__s32param0) {
    __s1param0.prototype.onClick.call(this, __s32param0);
    switch (__s32param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text(this.dialogProperties.helpTextId));
    }
  };
  SeasonLeagueRewardOverviewDialog.prototype.onScroll = function () {
    this.getIemContainerMc().y = -this._scrollComponent.currentValue;
  };
  Object.defineProperty(SeasonLeagueRewardOverviewDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueRewardOverviewDialog.NAME = "SeasonLeagueRewardOverview";
  SeasonLeagueRewardOverviewDialog.ITEM_MASK_HEIGHT = 384;
  return SeasonLeagueRewardOverviewDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.SeasonLeagueRewardOverviewDialog = __s0local0;
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SeasonLeagueRewardOverviewDialogItem = require("gge-module:export_SeasonLeagueRewardOverviewDialogItem");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
