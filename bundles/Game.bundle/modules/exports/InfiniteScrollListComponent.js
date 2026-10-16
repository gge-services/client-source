Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function InfiniteScrollListComponent(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._dataList = [];
    __s3local0._items = [];
    __s3local0._itemDimension = new __s0local0();
    __s3local0._necessaryItemAmount = 0;
    __s3local0._itemPositions = [];
    __s3local0._columns = 1;
    __s3local0._isInit = false;
    __s3local0._currentRealScrollValue = 0;
    __s3local0._tempTweenObject = {
      y: 0
    };
    __s3local0._currentUpdatedScrollPosition = -Number.MAX_VALUE;
    __s3local0._instantTweenFlag = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0.itemMc) || this)._clips = __s3param0;
    __s3local0._options = __s3param1;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(InfiniteScrollListComponent, __s1param0);
  InfiniteScrollListComponent.prototype.init = function () {
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.clips.sliderMc).addMouseWheelElements([this.clips.itemMc, this.clips.mouseWheelAreaMc]).addVisualElements([this.clips.sliderMc]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, this.clips.maskMc.height * InfiniteScrollListComponent.SCROLL_VALUE_MULTIPLIER, this.options.sliderInvisibleWhenNotScrollable));
    this.initScrollValues();
    var __s5local0 = this.createNewItem();
    if (__s5local0.isDispLoaded()) {
      this.onFirstItemLoaded();
    } else {
      __s5local0.onDispLoadedSignal.add(this.bindFunction(this.onFirstItemLoaded));
    }
  };
  InfiniteScrollListComponent.prototype.destroy = function () {
    this._scrollComponent.destroy();
    this._isInit = false;
    __s1param0.prototype.destroy.call(this);
  };
  InfiniteScrollListComponent.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._scrollComponent.show();
    if (this.items != null) {
      for (var __s11local0 = 0, __s11local1 = this.items; __s11local0 < __s11local1.length; __s11local0++) {
        var __s11local2 = __s11local1[__s11local0];
        if (__s11local2 !== undefined) {
          __s11local2.onShow();
        }
      }
    }
  };
  InfiniteScrollListComponent.prototype.onHide = function () {
    this._scrollComponent.hide();
    if (this.items != null) {
      for (var __s17local0 = 0, __s17local1 = this.items; __s17local0 < __s17local1.length; __s17local0++) {
        var __s17local2 = __s17local1[__s17local0];
        if (__s17local2 !== undefined) {
          __s17local2.onHide();
        }
      }
    }
    __s1param0.prototype.onHide.call(this);
  };
  InfiniteScrollListComponent.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  InfiniteScrollListComponent.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    __s1param0.prototype.removeEventListener.call(this);
  };
  InfiniteScrollListComponent.prototype.initItems = function () {
    if (this.items != null) {
      for (var __s27local0 = 0, __s27local1 = this.items; __s27local0 < __s27local1.length; __s27local0++) {
        var __s27local2 = __s27local1[__s27local0];
        if (__s27local2 !== undefined) {
          __s27local2.destroy();
        }
      }
    }
    this._items = [];
    for (var __s27local3 = 0; __s27local3 < this.necessaryItemAmount; ++__s27local3) {
      __s27local2 = this.createNewItem();
      this.clips.itemContainerMc.addChild(__s27local2.disp);
      if (this.isVisible) {
        __s27local2.onShow();
      }
    }
    this.markAllItemsAsUpdateAble();
    this._isInit = true;
  };
  InfiniteScrollListComponent.prototype.initScrollValues = function () {
    var __s36local0 = __dep_exact_f855840627e6e145.int(this.dataList ? Math.ceil(this.dataList.length / this._columns) : 0);
    var __s36local1 = this.itemDimension.y + this.options.itemPaddingY;
    var __s36local2 = Math.max(0, this.itemDimension.y * __s36local0 + this.options.itemPaddingY * Math.max(0, __s36local0 - 1) + this.additionalPreMovieClipsHeight - this.clips.maskMc.height);
    this._scrollComponent.init(0, __s36local2 * InfiniteScrollListComponent.SCROLL_VALUE_MULTIPLIER, __s36local1 * InfiniteScrollListComponent.SCROLL_VALUE_MULTIPLIER, __s36local1 * InfiniteScrollListComponent.SCROLL_VALUE_MULTIPLIER);
    this._scrollComponent.setVisibility(this._scrollComponent.maxValue > this.clips.maskMc.height);
    this._scrollComponent.scrollToPercent(0, false);
  };
  Object.defineProperty(InfiniteScrollListComponent.prototype, "additionalPreMovieClipsHeight", {
    get: function () {
      var __s38local0 = 0;
      for (var __s38local1 = 0, __s38local2 = this.options.additionalPreMovieClips; __s38local1 < __s38local2.length; __s38local1++) {
        var __s38local3 = __s38local2[__s38local1];
        if (__s38local3 !== undefined) {
          __s38local0 += __dep_exact_f855840627e6e145.int(__s38local3.height);
        }
      }
      return __s38local0 + this.options.additionalHeight;
    },
    enumerable: true,
    configurable: true
  });
  InfiniteScrollListComponent.prototype.startTweenScroll = function () {
    __dep_exact_608de47b6498f9b0.TweenMax.killTweensOf(this.clips.itemContainerMc);
    __dep_exact_608de47b6498f9b0.TweenMax.to(this._tempTweenObject, InfiniteScrollListComponent.TWEEN_SCROLL_DURATION, {
      y: this.getNormalizedScrollValue(),
      ease: __dep_exact_608de47b6498f9b0_1.Linear.easeOut
    }).eventCallback("onUpdate", this.bindFunction(this.onTweenUpdate));
  };
  InfiniteScrollListComponent.prototype.updateWithNewData = function (__s45param0, __s45param1 = true) {
    this._dataList = __s45param0;
    var __s45local0 = __s45param1 ? 0 : this._scrollComponent.currentPercentFactor;
    this.updateItemPositions();
    this.initScrollValues();
    this.markAllItemsAsUpdateAble();
    this._instantTweenFlag = true;
    this._currentRealScrollValue = 0;
    this._tempTweenObject.y = 0;
    this._scrollComponent.scrollToPercent(__s45local0, true);
  };
  InfiniteScrollListComponent.prototype.updateItemInfo = function () {
    var __s47local0 = this.items && this.items.length > 0 ? this.items[0] : null;
    this._itemDimension.x = __s47local0 ? __s47local0.disp.width : 0;
    this._itemDimension.y = __s47local0 ? __s47local0.disp.height : 0;
    this._columns = this.options.isMultiColumn ? Math.round(this.clips.maskMc.width / (this.itemDimension.x + this.options.itemPaddingX)) : 1;
    var __s47local1 = Math.ceil(this.clips.maskMc.height / (this.itemDimension.y + this.options.itemPaddingY)) + 1;
    this._necessaryItemAmount = this._columns * __s47local1;
  };
  InfiniteScrollListComponent.prototype.updateItemPositions = function () {
    this._itemPositions = [];
    var __s49local0 = this.itemDimension.y + this.options.itemPaddingY;
    var __s49local1 = this.itemDimension.x + this.options.itemPaddingX;
    var __s49local2 = 0;
    var __s49local3 = 0;
    for (var __s49local4 = 0; __s49local4 < this.dataList.length; __s49local4++) {
      __s49local2 = Math.floor(__s49local4 / this._columns);
      __s49local3 = __s49local4 % this._columns;
      this._itemPositions.push(new __s0local0(__s49local3 * __s49local1, __s49local2 * __s49local0));
    }
  };
  InfiniteScrollListComponent.prototype.checkAndUpdateItemPositionsAndContent = function (__s53param0 = false) {
    if (__s53param0) {
      this.markAllItemsAsUpdateAble();
    }
    if (this._currentUpdatedScrollPosition != this._currentRealScrollValue) {
      for (var __s53local0 = this.getCurrentNecessaryItemPositions(), __s53local1 = [], __s53local2 = 0; __s53local2 < __s53local0.length; ++__s53local2) {
        var __s53local3 = false;
        if (this.items != null) {
          for (var __s53local4 = 0, __s53local5 = this.items; __s53local4 < __s53local5.length; __s53local4++) {
            var __s53local6 = __s53local5[__s53local4];
            if (__s53local6 !== undefined && __s53local6.position == __s53local0[__s53local2]) {
              __s53local3 = true;
              if (!__s53local6.isVisible) {
                __s53local6.setVisibility(true);
              }
              break;
            }
          }
        }
        if (!__s53local3) {
          __s53local1.push(__s53local0[__s53local2]);
        }
      }
      var __s53local7 = [];
      for (var __s53local8 = 0, __s53local9 = this.items; __s53local8 < __s53local9.length; __s53local8++) {
        __s53local6 = __s53local9[__s53local8];
        if (__s53local0.length > 0 && __s53local0.indexOf(__s53local6.position) < 0) {
          __s53local7.push(__s53local6);
          __s53local6.setVisibility(false);
        }
      }
      for (__s53local2 = 0; __s53local2 < __s53local1.length && __s53local2 < __s53local7.length; ++__s53local2) {
        (__s53local6 = __s53local7[__s53local2]).position = __s53local1[__s53local2];
        __s53local6.setVisibility(true);
        __s53local6.updateWithNewData(this.getDataByItemPosition(__s53local6.position));
      }
      var __s53local10 = __dep_exact_f855840627e6e145.int(this.additionalPreMovieClipsHeight);
      for (var __s53local11 = __dep_exact_f855840627e6e145.int(this.options.additionalPreMovieClips.length - 1); __s53local11 >= 0; __s53local11--) {
        var __s53local12 = this.options.additionalPreMovieClips[__s53local11];
        __s53local12.y = __s53local10 - __s53local12.height - this._currentRealScrollValue;
        __s53local10 -= __dep_exact_f855840627e6e145.int(__s53local12.height);
      }
      for (var __s53local13 = 0, __s53local14 = this.items; __s53local13 < __s53local14.length; __s53local13++) {
        if ((__s53local6 = __s53local14[__s53local13]).position) {
          __s53local6.disp.y = __s53local6.position.y - this._currentRealScrollValue;
          if (this.options.isMultiColumn) {
            __s53local6.disp.x = __s53local6.position.x;
          }
        } else {
          __s53local6.disp.y = 0;
        }
      }
      this._currentUpdatedScrollPosition = this._currentRealScrollValue;
    }
  };
  InfiniteScrollListComponent.prototype.markAllItemsAsUpdateAble = function () {
    this._currentUpdatedScrollPosition = -Number.MAX_VALUE;
    if (this.items != null) {
      for (var __s77local0 = 0, __s77local1 = this.items; __s77local0 < __s77local1.length; __s77local0++) {
        var __s77local2 = __s77local1[__s77local0];
        if (__s77local2 !== undefined) {
          __s77local2.position = null;
          __s77local2.updateWithNewData(null);
        }
      }
    }
  };
  InfiniteScrollListComponent.prototype.scrollToItem = function (__s83param0, __s83param1 = false) {
    if (this.items && this.items.indexOf(__s83param0) >= 0) {
      this._scrollComponent.scrollToValue(this.getScrollItemPosition(__s83param0.position, __s83param1));
    }
  };
  InfiniteScrollListComponent.prototype.scrollToData = function (__s86param0, __s86param1 = false) {
    var __s86local0 = __s86param0 < this._itemPositions.length ? this._itemPositions[__s86param0] : null;
    this._scrollComponent.scrollToValue(this.getScrollItemPosition(__s86local0, __s86param1));
  };
  InfiniteScrollListComponent.prototype.createNewItem = function () {
    var __s88local0 = new this.options.itemClass();
    __s88local0.init(this);
    this.items.push(__s88local0);
    return __s88local0;
  };
  InfiniteScrollListComponent.prototype.getCurrentNecessaryItemPositions = function () {
    var __s90local0 = [];
    var __s90local1 = this._currentRealScrollValue - this.additionalPreMovieClipsHeight;
    var __s90local2 = __s90local1 + this.clips.maskMc.height;
    for (var __s90local3 = 0; __s90local3 < this._itemPositions.length; __s90local3++) {
      var __s90local4 = this._itemPositions[__s90local3].y;
      var __s90local5 = __s90local4 + this.itemDimension.y;
      if (__s90local4 >= __s90local1 && __s90local4 <= __s90local2 || __s90local5 >= __s90local1 && __s90local5 <= __s90local2) {
        __s90local0.push(this._itemPositions[__s90local3]);
      }
    }
    return __s90local0;
  };
  InfiniteScrollListComponent.prototype.getDataByItemPosition = function (__s95param0) {
    var __s95local0 = __dep_exact_f855840627e6e145.int(this._itemPositions.indexOf(__s95param0));
    if (__s95local0 >= 0) {
      return this.dataList[__s95local0];
    } else {
      return null;
    }
  };
  InfiniteScrollListComponent.prototype.getNormalizedScrollValue = function () {
    return this._scrollComponent.currentValue / InfiniteScrollListComponent.SCROLL_VALUE_MULTIPLIER;
  };
  InfiniteScrollListComponent.prototype.getItemByData = function (__s101param0) {
    if (this.items != null) {
      for (var __s101local0 = 0, __s101local1 = this.items; __s101local0 < __s101local1.length; __s101local0++) {
        var __s101local2 = __s101local1[__s101local0];
        if (__s101local2 !== undefined && __s101local2.data == __s101param0) {
          return __s101local2;
        }
      }
    }
    return null;
  };
  InfiniteScrollListComponent.prototype.getScrollItemPosition = function (__s107param0, __s107param1) {
    var __s107local0 = __s107param0 ? __s107param0.y : 0;
    if (__s107param1) {
      __s107local0 -= this.clips.maskMc.height / 2;
      __s107local0 += this.itemDimension.y / 2;
    }
    return __s107local0 * InfiniteScrollListComponent.SCROLL_VALUE_MULTIPLIER;
  };
  InfiniteScrollListComponent.prototype.onScroll = function () {
    if (this.isInit) {
      if (this.options.useSmoothScroll && !this._instantTweenFlag) {
        this.startTweenScroll();
      } else {
        this._instantTweenFlag = false;
        this._currentRealScrollValue = this.getNormalizedScrollValue();
        this._tempTweenObject.y = this._currentRealScrollValue;
      }
      this.checkAndUpdateItemPositionsAndContent();
    }
  };
  InfiniteScrollListComponent.prototype.onTweenUpdate = function () {
    this._currentRealScrollValue = this._tempTweenObject.y;
    this.checkAndUpdateItemPositionsAndContent();
  };
  InfiniteScrollListComponent.prototype.onFirstItemLoaded = function (__s117param0 = null) {
    if (this._scrollComponent && this._scrollComponent.scrollVO) {
      this.updateItemInfo();
      this.initScrollValues();
      this.initItems();
      this._scrollComponent.scrollToPercent(0);
      if (this._dataList) {
        this.updateWithNewData(this._dataList);
      }
    }
  };
  InfiniteScrollListComponent.convertListToDataList = function (__s121param0) {
    var __s121local0 = [];
    if (__s121param0) {
      try {
        if (__s121param0 != null) {
          for (var __s121local1 = 0, __s121local2 = __s121param0; __s121local1 < __s121local2.length; __s121local1++) {
            var __s121local3 = __s121local2[__s121local1];
            if (__s121local3 !== undefined) {
              __s121local0.push(__s121local3);
            }
          }
        }
      } catch (__s129local0) {}
    }
    return __s121local0;
  };
  Object.defineProperty(InfiniteScrollListComponent.prototype, "dataList", {
    get: function () {
      return this._dataList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollListComponent.prototype, "items", {
    get: function () {
      return this._items;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollListComponent.prototype, "clips", {
    get: function () {
      return this._clips;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollListComponent.prototype, "options", {
    get: function () {
      return this._options;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollListComponent.prototype, "itemDimension", {
    get: function () {
      return this._itemDimension;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollListComponent.prototype, "necessaryItemAmount", {
    get: function () {
      return this._necessaryItemAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollListComponent.prototype, "isInit", {
    get: function () {
      return this._isInit;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollListComponent.prototype, "scrollComponent", {
    get: function () {
      return this._scrollComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollListComponent.prototype, "instantTweenFlag", {
    set: function (__s147param0) {
      this._instantTweenFlag = __s147param0;
    },
    enumerable: true,
    configurable: true
  });
  InfiniteScrollListComponent.prototype.reInit = function () {
    if (!this.isInit) {
      this.init();
    }
  };
  InfiniteScrollListComponent.SCROLL_VALUE_MULTIPLIER = 100;
  InfiniteScrollListComponent.TWEEN_SCROLL_DURATION = 0.3;
  return InfiniteScrollListComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.InfiniteScrollListComponent = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
