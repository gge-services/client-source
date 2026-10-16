Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_TempServerWelcomeDialogListItem = require("gge-module:export_TempServerWelcomeDialogListItem");
var __dep_export_TempServerHelper = require("gge-module:export_TempServerHelper");
var __s0local0 = function (__s1param0) {
  function TempServerWelcomeDialogList(__s3param0) {
    var __s3local0 = this;
    __s3local0._items = [];
    __s3local0._pageContentIDsDefault = [["1_1", "1_2", "1_3"], ["2_1", "2_2", "2_3", "2_4", "2_5"]];
    __s3local0._pageContentIDsCastleTransportation = [["1_1", "1_castleTransport_1", "1_castleTransport_2", "1_castleTransport_3", "1_2", "1_3"], ["2_1", "2_2", "2_3", "2_4", "2_5"]];
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TempServerWelcomeDialogList, __s1param0);
  TempServerWelcomeDialogList.prototype.init = function () {
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().addPlusButton(this.disp.btn_down).addMinusButton(this.disp.btn_up).addMaxButton(this.disp.btn_bottom).addMinButton(this.disp.btn_top).addSliderButton(this.disp.btn_slider).addSliderLine(this.disp.mc_sliderLine).addSliderBackground(this.disp.sliderBG).addMouseWheelElements([this.disp, this.disp.mc_list]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, 0, true));
  };
  TempServerWelcomeDialogList.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._scrollComponent.show();
    if (this._items != null) {
      for (var __s7local0 = 0, __s7local1 = this._items; __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        if (__s7local2 !== undefined) {
          __s7local2.onShow();
        }
      }
    }
  };
  TempServerWelcomeDialogList.prototype.onHide = function () {
    this._scrollComponent.hide();
    if (this._items != null) {
      for (var __s13local0 = 0, __s13local1 = this._items; __s13local0 < __s13local1.length; __s13local0++) {
        var __s13local2 = __s13local1[__s13local0];
        if (__s13local2 !== undefined) {
          __s13local2.onHide();
        }
      }
    }
    __s1param0.prototype.onHide.call(this);
  };
  TempServerWelcomeDialogList.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChanged));
  };
  TempServerWelcomeDialogList.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChanged));
    __s1param0.prototype.removeEventListener.call(this);
  };
  TempServerWelcomeDialogList.prototype.update = function (__s23param0) {
    if (this._items != null) {
      for (var __s23local0 = 0, __s23local1 = this._items; __s23local0 < __s23local1.length; __s23local0++) {
        var __s23local2 = __s23local1[__s23local0];
        if (__s23local2 !== undefined) {
          __s23local2.destroy();
        }
      }
    }
    this._items = [];
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.itemsMc);
    var __s23local3 = 0;
    if (this.contentList) {
      for (var __s23local4 = 0; __s23local4 < this.contentList[__s23param0].length; __s23local4++) {
        __s23local2 = new __dep_export_TempServerWelcomeDialogListItem.TempServerWelcomeDialogListItem(this.contentList[__s23param0][__s23local4]);
        this._items.push(__s23local2);
        this.itemsMc.addChild(__s23local2.disp);
        if (this.isShown) {
          __s23local2.onShow();
        }
        __s23local2.disp.y = __s23local3;
        __s23local2.disp.x = 0;
        __s23local3 += __s23local2.disp.height;
      }
      var __s23local5 = __dep_exact_9e901e8e2483a22f.MathBase.max(__s23local3, 0);
      this._scrollComponent.init(0, __s23local5 - TempServerWelcomeDialogList.LIST_HEIGHT / 2, TempServerWelcomeDialogList.LIST_HEIGHT / 2, TempServerWelcomeDialogList.LIST_HEIGHT / 2);
      this._scrollComponent.scrollToPercent(0);
      this.updateListScrollPosition(false);
      this._scrollComponent.setVisibility(__s23local5 > 0);
    }
  };
  TempServerWelcomeDialogList.prototype.updateListScrollPosition = function (__s33param0 = true) {
    __dep_exact_608de47b6498f9b0_1.TweenMax.killTweensOf(this.itemsMc);
    var __s33local0 = -this._scrollComponent.currentValue - 63.2;
    if (__s33param0) {
      __dep_exact_608de47b6498f9b0_1.TweenMax.to(this.itemsMc, TempServerWelcomeDialogList.ITEM_SCROLL_DURATION, {
        y: __s33local0,
        ease: __dep_exact_608de47b6498f9b0.Power1.easeOut
      });
    } else {
      this.itemsMc.y = __s33local0;
    }
  };
  TempServerWelcomeDialogList.prototype.onScrollValueChanged = function () {
    this.updateListScrollPosition();
  };
  Object.defineProperty(TempServerWelcomeDialogList.prototype, "itemsMc", {
    get: function () {
      return this.disp.mc_list;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempServerWelcomeDialogList.prototype, "contentList", {
    get: function () {
      if (__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent) {
        if (__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.settingVO.isCastleTransportationOnly) {
          return this._pageContentIDsCastleTransportation;
        } else {
          return this._pageContentIDsDefault;
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  TempServerWelcomeDialogList.ITEM_SCROLL_DURATION = 0.2;
  TempServerWelcomeDialogList.LIST_HEIGHT = 600;
  return TempServerWelcomeDialogList;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.TempServerWelcomeDialogList = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
