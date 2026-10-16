Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __s0local0 = function (__s1param0) {
  function CastleRerollAlienChanceDialogList(__s3param0) {
    var __s3local0 = this;
    __s3local0._items = [];
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRerollAlienChanceDialogList, __s1param0);
  CastleRerollAlienChanceDialogList.prototype.init = function () {
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().addPlusButton(this.disp.btn_down).addMinusButton(this.disp.btn_up).addMaxButton(this.disp.btn_bottom).addMinButton(this.disp.btn_top).addSliderButton(this.disp.btn_slider).addSliderLine(this.disp.mc_sliderLine).addMouseWheelElements([this.disp]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true));
  };
  CastleRerollAlienChanceDialogList.prototype.onShow = function () {
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
  CastleRerollAlienChanceDialogList.prototype.onHide = function () {
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
  CastleRerollAlienChanceDialogList.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChanged));
  };
  CastleRerollAlienChanceDialogList.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChanged));
    __s1param0.prototype.removeEventListener.call(this);
  };
  CastleRerollAlienChanceDialogList.prototype.update = function () {
    if (this._items != null) {
      for (var __s23local0 = 0, __s23local1 = this._items; __s23local0 < __s23local1.length; __s23local0++) {
        var __s23local2 = __s23local1[__s23local0];
        if (__s23local2 !== undefined) {
          __s23local2.destroy();
        }
      }
    }
    this._items = [];
    for (var __s23local3 = __dep_export_CastleModel.CastleModel.alienRerollData.hardChancesReroll, __s23local4 = 0, __s23local5 = 0; __s23local5 < __s23local3.length; __s23local5++) {
      var __s23local6 = __s23local3[__s23local5];
      __s23local2 = new __dep_export_CastleRerollAlienChanceDialogListItem.CastleRerollAlienChanceDialogListItem(__s23local6);
      this._items.push(__s23local2);
      this.itemsMc.addChild(__s23local2.disp);
      if (this.isShown) {
        __s23local2.onShow();
      }
      __s23local2.disp.x = 0;
      __s23local2.disp.y = __s23local4;
      __s23local4 += __s23local2.disp.height;
    }
    var __s23local7 = Math.max(0, __s23local3.length * CastleRerollAlienChanceDialogList.ITEM_CONTAINER_HEIGHT - 308);
    this._scrollComponent.init(0, __s23local7, CastleRerollAlienChanceDialogList.ITEM_SCROLL_DELTA, CastleRerollAlienChanceDialogList.ITEM_SCROLL_DELTA);
    this._scrollComponent.scrollToPercent(0);
    this.updateListScrollPosition(false);
    this._scrollComponent.setVisibility(__s23local7 > 0);
  };
  CastleRerollAlienChanceDialogList.prototype.updateListScrollPosition = function (__s32param0 = true) {
    __dep_exact_608de47b6498f9b0_1.TweenMax.killTweensOf(this.itemsMc);
    var __s32local0 = -this._scrollComponent.currentValue;
    if (__s32param0) {
      __dep_exact_608de47b6498f9b0_1.TweenMax.to(this.itemsMc, CastleRerollAlienChanceDialogList.ITEM_SCROLL_DURATION, {
        y: __s32local0,
        ease: __dep_exact_608de47b6498f9b0.Power1.easeOut
      });
    } else {
      this.itemsMc.y = __s32local0;
    }
  };
  CastleRerollAlienChanceDialogList.prototype.onScrollValueChanged = function () {
    this.updateListScrollPosition();
  };
  Object.defineProperty(CastleRerollAlienChanceDialogList.prototype, "itemsMc", {
    get: function () {
      return this.disp.mc_list;
    },
    enumerable: true,
    configurable: true
  });
  CastleRerollAlienChanceDialogList.__initialize_static_members = function () {
    CastleRerollAlienChanceDialogList.ITEM_SCROLL_DELTA = CastleRerollAlienChanceDialogList.ITEM_CONTAINER_HEIGHT;
  };
  CastleRerollAlienChanceDialogList.ITEM_CONTAINER_HEIGHT = 32;
  CastleRerollAlienChanceDialogList.ITEM_SCROLL_DURATION = 0.2;
  return CastleRerollAlienChanceDialogList;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.CastleRerollAlienChanceDialogList = __s0local0;
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_CastleRerollAlienChanceDialogListItem = require("gge-module:export_CastleRerollAlienChanceDialogListItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
