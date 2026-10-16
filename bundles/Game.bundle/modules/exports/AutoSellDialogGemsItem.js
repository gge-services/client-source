Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_SimpleScrollStrategyHorizontal = require("gge-module:export_SimpleScrollStrategyHorizontal");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AutoSellDialogGemsItem(__s3param0) {
    var __s3local0 = this;
    __s3local0._gemClips = [];
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoSellDialogGemsItem, __s1param0);
  AutoSellDialogGemsItem.prototype.init = function () {
    this.disp.mc_icon.mouseChildren = false;
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.disp.mc_slider).addMouseWheelElements([this.disp.mc_slider]), new __dep_export_SimpleScrollStrategyHorizontal.SimpleScrollStrategyHorizontal(true));
    this._scrollComponent.init(0, __dep_exact_26a421b704832cff.GemConst.MAX_GEM_LEVEL);
    for (var __s5local0 = 1; __s5local0 <= __dep_exact_26a421b704832cff.GemConst.MAX_GEM_LEVEL; ++__s5local0) {
      var __s5local1 = "Item_Gem_Lv" + __s5local0;
      var __s5local2 = new __dep_exact_9e901e8e2483a22f.GoodgameDisplayObjectClipExternal(__s5local1, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL("Equipment_Gems"));
      __s5local2.name = "" + __s5local0;
      this._gemClips.push(__s5local2);
      if (__s5local2.isLoaded) {
        this.onGemClipLoaded(__s5local2);
      } else {
        __s5local2.clipLoaded.addOnce(this.bindFunction(this.onGemClipLoaded));
      }
    }
  };
  AutoSellDialogGemsItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._scrollComponent.show();
  };
  AutoSellDialogGemsItem.prototype.onHide = function () {
    this._scrollComponent.hide();
    __s1param0.prototype.onHide.call(this);
  };
  AutoSellDialogGemsItem.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  AutoSellDialogGemsItem.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    __s1param0.prototype.removeEventListener.call(this);
  };
  AutoSellDialogGemsItem.prototype.updateWithNewData = function (__s19param0) {
    this._colorVO = __s19param0;
    var __s19local0 = new __dep_exact_81dacdf05bd32292.ColorTransform();
    __s19local0.color = this._colorVO.color;
    this.disp.mc_icon.mc_level0.mc_color.transform.colorTransform = __s19local0;
    if (this._gemClips != null) {
      for (var __s19local1 = 0, __s19local2 = this._gemClips; __s19local1 < __s19local2.length; __s19local1++) {
        var __s19local3 = __s19local2[__s19local1];
        if (__s19local3 !== undefined && __s19local3.isLoaded) {
          __s19local3.currentshownDisplayObject.cc0.transform.colorTransform = __s19local0;
        }
      }
    }
    this.disp.mc_icon.toolTipText = "gemColor_" + this._colorVO.id + "_tt";
    this._scrollComponent.scrollToValue(this.autoSellVO.gems.actives.get(this._colorVO.id), false);
    this.update();
  };
  AutoSellDialogGemsItem.prototype.update = function () {
    this._scrollComponent.scrollToValue(this.autoSellVO.gems.actives.get(this._colorVO.id), false);
    this.disp.mc_slider.mc_fill.width = this.disp.mc_slider.btn_slider.x - this.disp.mc_slider.mc_fill.x;
    this.disp.mc_icon.mc_level0.visible = this._scrollComponent.currentValue <= 0;
    if (this._gemClips != null) {
      for (var __s25local0 = 0, __s25local1 = this._gemClips; __s25local0 < __s25local1.length; __s25local0++) {
        var __s25local2 = __s25local1[__s25local0];
        if (__s25local2 !== undefined) {
          __s25local2.visible = parseInt(__s25local2.name) == this._scrollComponent.currentValue;
        }
      }
    }
  };
  AutoSellDialogGemsItem.prototype.updateSliderFill = function () {
    this.disp.mc_slider.mc_fill.width = this.disp.mc_slider.btn_slider.x - this.disp.mc_slider.mc_fill.x;
  };
  AutoSellDialogGemsItem.prototype.onScroll = function () {
    this.autoSellVO.gems.actives.set(this._colorVO.id, this._scrollComponent.currentValue);
    this.update();
  };
  AutoSellDialogGemsItem.prototype.onGemClipLoaded = function (__s35param0) {
    var __s35local0 = __s35param0.currentshownDisplayObject;
    this.disp.mc_icon.mc_placeholder.addChild(__s35param0);
    if (this._colorVO) {
      var __s35local1 = new __dep_exact_81dacdf05bd32292.ColorTransform();
      __s35local1.color = this._colorVO.color;
      __s35local0.cc0.transform.colorTransform = __s35local1;
    }
    __s35local0.mc_broken.visible = false;
    __s35local0.scaleX = __s35local0.scaleY = __dep_export_ClientConstUtils.ClientConstUtils.getScaleFactorForFitInBounds(new __s0local0(__s35local0.width, __s35local0.height), new __s0local0(35, 35));
  };
  Object.defineProperty(AutoSellDialogGemsItem.prototype, "autoSellVO", {
    get: function () {
      return this._autoSellVO;
    },
    set: function (__s40param0) {
      this._autoSellVO = __s40param0;
    },
    enumerable: true,
    configurable: true
  });
  return AutoSellDialogGemsItem;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.AutoSellDialogGemsItem = __s0local1;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
