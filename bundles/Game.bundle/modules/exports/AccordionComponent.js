Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_SimpleScrollStrategyHorizontal = require("gge-module:export_SimpleScrollStrategyHorizontal");
var __dep_export_SimpleScrollStrategyVertical = require("gge-module:export_SimpleScrollStrategyVertical");
var __dep_export_TooltipManagerFacade = require("gge-module:export_TooltipManagerFacade");
var __dep_export_AccordionComponentProperties = require("gge-module:export_AccordionComponentProperties");
var __dep_export_SimpleLayoutStrategyHorizontal = require("gge-module:export_SimpleLayoutStrategyHorizontal");
var __dep_export_SimpleLayoutStrategyVertical = require("gge-module:export_SimpleLayoutStrategyVertical");
var __s0local0 = createjs.Rectangle;
var __s0local1 = function (__s1param0) {
  function AccordionComponent(__s3param0, __s3param1 = null, __s3param2 = 0, __s3param3 = true) {
    var __s3local0 = this;
    __s3local0._startY = 0;
    __s3local0.lastActivated = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._disp = __s3param0;
    __s3local0._startY = __s3param2;
    __s3local0.doCaching = __s3param3;
    __s3local0._itemContainer = __s3param0.mc_ItemContainer ? __s3param0.mc_ItemContainer : __s3param0.mc_items;
    if (!__s3local0._itemContainer.mask) {
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.applyMaskFromMovieClip(__s3local0._itemContainer, __s3param0.mc_mask);
    }
    __s3local0._properties = __s3param1 || new __dep_export_AccordionComponentProperties.AccordionComponentProperties();
    __s3local0._onCollapseSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0.onSliderChangeSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AccordionComponent, __s1param0);
  AccordionComponent.prototype.init = function () {
    this._items = [];
    var __s6local0 = this._properties.scrollStrategy ? new this._properties.scrollStrategy(this._properties.disableButtons) : this._properties.isVertical ? new __dep_export_SimpleScrollStrategyVertical.SimpleScrollStrategyVertical(this._properties.disableButtons) : new __dep_export_SimpleScrollStrategyHorizontal.SimpleScrollStrategyHorizontal();
    this.layoutStrategy = this._properties.isVertical ? new __dep_export_SimpleLayoutStrategyVertical.SimpleLayoutStrategyVertical() : new __dep_export_SimpleLayoutStrategyHorizontal.SimpleLayoutStrategyHorizontal();
    this.scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this._disp.mc_slider).addMouseWheelElements([this._disp]), __s6local0);
  };
  AccordionComponent.prototype.show = function () {
    this.updateSlider();
    this.scrollComponent.show();
    this.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    if (this._items != null) {
      for (var __s8local0 = 0, __s8local1 = this._items; __s8local0 < __s8local1.length; __s8local0++) {
        var __s8local2 = __s8local1[__s8local0];
        if (__s8local2 !== undefined) {
          __s8local2.onShow();
        }
      }
    }
    this.applyLayout();
  };
  AccordionComponent.prototype.hide = function () {
    if (this._items != null) {
      for (var __s14local0 = 0, __s14local1 = this._items; __s14local0 < __s14local1.length; __s14local0++) {
        var __s14local2 = __s14local1[__s14local0];
        if (__s14local2 !== undefined) {
          __s14local2.onHide();
        }
      }
    }
    this.scrollComponent.hide();
    this.scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChange));
  };
  AccordionComponent.prototype.addItem = function (__s20param0, __s20param1 = -1, __s20param2 = false) {
    if (__s20param1 > -1) {
      this._items.splice(__s20param1, 0, __s20param0);
    } else {
      this._items.push(__s20param0);
    }
    this._itemContainer.addChild(__s20param0.disp);
    __s20param0.onStateChangeStartCallback = this.bindFunction(this.onItemChangeStart);
    __s20param0.onStateChangeUpdateCallback = this.bindFunction(this.onItemChangeUpdate);
    __s20param0.onStateChangeCompleteCallback = this.bindFunction(this.onItemChangeComplete);
    if (__s20param2) {
      this.applyLayout();
    }
  };
  AccordionComponent.prototype.removeItemAt = function (__s25param0, __s25param1 = true) {
    var __s25local0 = this._items[__s25param0];
    if (__s25local0) {
      this._items.splice(__s25param0, 1);
      this._itemContainer.removeChild(__s25local0.disp);
      __s25local0.destroy();
    }
    if (__s25param1) {
      this.applyLayout();
    }
  };
  AccordionComponent.prototype.expandItemAt = function (__s29param0, __s29param1, __s29param2) {
    if (this._items.length > __s29param0) {
      this._items[__s29param0].expand(__s29param1, __s29param2);
    }
  };
  AccordionComponent.prototype.clear = function () {
    if (this._items != null) {
      for (var __s32local0 = 0, __s32local1 = this._items; __s32local0 < __s32local1.length; __s32local0++) {
        var __s32local2 = __s32local1[__s32local0];
        if (__s32local2 !== undefined) {
          __s32local2.destroy();
        }
      }
    }
    this._items = [];
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this._itemContainer);
    this.lastActivated = -1;
  };
  AccordionComponent.prototype.onScrollValueChange = function () {
    __dep_exact_608de47b6498f9b0_1.TweenMax.killTweensOf(this._itemContainer);
    __dep_exact_608de47b6498f9b0_1.TweenMax.to(this._itemContainer, this._properties.scrollDuration, {
      y: this._startY - this.scrollComponent.currentValue,
      ease: __dep_exact_608de47b6498f9b0.Power1.easeOut
    });
    __dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips();
    this.updateItemCache();
    this.onSliderChangeSignal.dispatch();
  };
  AccordionComponent.prototype.updateItemCache = function () {
    if (this.doCaching && this._itemContainer.mask) {
      var __s40local0 = this._itemContainer.mask.getBounds();
      for (var __s40local1 = 0; __s40local1 < this._items.length; __s40local1++) {
        var __s40local2 = this._items[__s40local1];
        if (__s40local2.disp.parent && __s40local2.disp.y + __s40local2.disp.parent.y + __s40local2.height >= __s40local0.topLeft.y && __s40local2.disp.y + __s40local2.disp.parent.y <= __s40local0.bottomRight.y) {
          __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(__s40local2.disp);
          "disp UNcache, ";
        } else if (!__s40local2.disp.cacheCanvas) {
          __s40local2.disp.doCache();
          "disp cache, ";
        }
      }
    }
  };
  AccordionComponent.prototype.onItemChangeStart = function (__s47param0) {
    var __s47local0 = -1;
    if (__s47param0.isExpanded) {
      for (var __s47local1 = 0; __s47local1 < this._items.length; __s47local1++) {
        if (this._items[__s47local1] == __s47param0) {
          __s47local0 = __s47local1;
          break;
        }
      }
      if (this._properties.onlyOneActiveItem && __s47local0 > -1) {
        this._items.forEach(function (__s54param0, __s54param1) {
          if (__s47local0 != __s54param1 && __s54param0.isExpanded) {
            __s54param0.expand(false, false);
          }
        });
      }
    }
    this.lastActivated = __s47local0;
    this._onCollapseSignal.dispatch(this.lastActivated);
  };
  AccordionComponent.prototype.onItemChangeUpdate = function () {
    this.applyLayout();
  };
  AccordionComponent.prototype.onItemChangeComplete = function () {
    this.applyLayout();
    this.updateSlider();
    var __s59local0 = this._items.find(function (__s61param0) {
      return __s61param0.isExpanded;
    });
    if (__s59local0 && this._properties.scrollToOpened && __s59local0.contentMC) {
      this.scrollToValue(__s59local0.disp.y);
    }
    this.updateItemCache();
  };
  AccordionComponent.prototype.updateSlider = function (__s64param0 = false) {
    var __s64local0 = 0;
    __s64local0 = this._properties.isVertical ? __dep_exact_f855840627e6e145.int(Math.max(0, this.applyLayout().height - this._itemContainer.mask.height)) : __dep_exact_f855840627e6e145.int(Math.max(0, this.applyLayout().width - this._itemContainer.mask.width));
    var __s64local1 = __dep_exact_f855840627e6e145.int(__s64param0 ? 0 : this.scrollComponent.currentValue);
    this.scrollComponent.init(0, __s64local0, this._properties.scrollStepPixels, this._properties.scrollStepPixels);
    this.scrollComponent.scrollToValue(Math.min(__s64local1, __s64local0));
    this.disp.mc_slider.visible = __s64local0 > 0;
    this.scrollComponent.setVisibility(__s64local0 > 0);
  };
  AccordionComponent.prototype.scrollToTop = function () {
    this.updateSlider(true);
    this._itemContainer.y = this._startY;
  };
  AccordionComponent.prototype.scrollToValue = function (__s68param0) {
    this.scrollComponent.scrollToValue(__s68param0);
  };
  AccordionComponent.prototype.applyLayout = function () {
    return this.layoutStrategy.apply(this._items, new __s0local0());
  };
  AccordionComponent.prototype.getLastActivatedItem = function () {
    if (this.lastActivated > -1) {
      return this._items[this.lastActivated];
    } else {
      return null;
    }
  };
  Object.defineProperty(AccordionComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AccordionComponent.prototype, "onCollapseSignal", {
    get: function () {
      return this._onCollapseSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AccordionComponent.prototype, "items", {
    get: function () {
      return this._items;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AccordionComponent.prototype, "properties", {
    get: function () {
      return this._properties;
    },
    enumerable: true,
    configurable: true
  });
  return AccordionComponent;
}(__dep_export_CastleComponent.CastleComponent);
exports.AccordionComponent = __s0local1;
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
