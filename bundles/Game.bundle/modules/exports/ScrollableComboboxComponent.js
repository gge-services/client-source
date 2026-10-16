Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_SimpleLayoutStrategyVertical = require("gge-module:export_SimpleLayoutStrategyVertical");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __s0local0 = createjs.Rectangle;
var __s0local1 = function (__s1param0) {
  function ScrollableComboboxComponent(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._items = [];
    __s3local0._startY = 0;
    __s3local0._isOpen = false;
    var __s3local1 = new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(false, __s3local0.disp.mc_content.mask.height, true);
    __s3local0._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(__s3param1, __s3local1);
    __s3local0._layoutStrategy = __s3param2;
    __s3local0._startY = __s3local0.disp.mc_content.y;
    __s3local0._itxt_selected = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s3local0.disp.txt_selected, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s3local0._onSelectSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0.close();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ScrollableComboboxComponent, __s1param0);
  ScrollableComboboxComponent.prototype.addItem = function (__s5param0) {
    this._items.push(__s5param0);
    this.disp.mc_content.addChild(__s5param0.disp);
    if (__s5param0.isSelected) {
      this.onSelect(__s5param0);
    }
  };
  ScrollableComboboxComponent.prototype.onShow = function () {
    var __s8local0 = this;
    __s1param0.prototype.onShow.call(this);
    this._items.forEach(function (__s10param0) {
      return __s10param0.show();
    });
    this._items.forEach(function (__s12param0) {
      return __s12param0.onSelectSignal.add(__s8local0.bindFunction(__s8local0.onSelect));
    });
    this._layoutStrategy.apply(this._items, new __s0local0(0, 0, 0, 0));
    var __s8local1 = this.disp.mc_content.height;
    var __s8local2 = this._items[0].height;
    var __s8local3 = Math.max(0, __s8local1 - this.disp.mc_content.mask.height);
    this._scrollComponent.init(0, __s8local3, __s8local2, __s8local2);
    this._scrollComponent.show();
    this._scrollComponent.scrollToValue(this.opensUp ? __s8local3 : 0);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  ScrollableComboboxComponent.prototype.onHide = function () {
    var __s14local0 = this;
    __s1param0.prototype.onHide.call(this);
    this._items.forEach(function (__s16param0) {
      return __s16param0.hide();
    });
    this._items.forEach(function (__s18param0) {
      return __s18param0.onSelectSignal.remove(__s14local0.bindFunction(__s14local0.onSelect));
    });
    this._scrollComponent.hide();
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    this.disp.mc_content.y = this._startY;
  };
  ScrollableComboboxComponent.prototype.onScroll = function () {
    if (this.opensUp) {
      this.disp.mc_content.y = this._startY + this._scrollComponent.maxValue - this._scrollComponent.currentValue;
    } else {
      this.disp.mc_content.y = this._startY - this._scrollComponent.currentValue;
    }
  };
  ScrollableComboboxComponent.prototype.onClick = function (__s24param0) {
    __s1param0.prototype.onClick.call(this, __s24param0);
    if (this.isEnabled && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s24param0.target)) {
      var __s24local0 = this._scrollComponent.scrollVO.allElements.some(function (__s27param0) {
        return __s24param0.target == __s27param0;
      });
      var __s24local1 = __dep_exact_9e901e8e2483a22f.MovieClipHelper.isChildrenOf(__s24param0.target, this.disp.mc_content);
      if (!__s24local0 && !__s24local1) {
        if (this._isOpen) {
          this.close();
        } else {
          this.open();
        }
      }
    }
  };
  ScrollableComboboxComponent.prototype.open = function () {
    this._scrollComponent.setVisibility(true);
    this.disp.mc_content.visible = true;
    this._isOpen = true;
    if (this.disp.btn_arrow) {
      this.disp.btn_arrow.gotoAndStop(2);
    }
  };
  ScrollableComboboxComponent.prototype.close = function () {
    this._scrollComponent.setVisibility(false);
    this.disp.mc_content.visible = false;
    this._isOpen = false;
    if (this.disp.btn_arrow) {
      this.disp.btn_arrow.gotoAndStop(1);
    }
  };
  ScrollableComboboxComponent.prototype.clear = function () {
    var __s38local0 = this;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.mc_content);
    this._items.forEach(function (__s40param0) {
      return __s40param0.hide();
    });
    this._items.forEach(function (__s42param0) {
      return __s42param0.onSelectSignal.remove(__s38local0.bindFunction(__s38local0.onSelect));
    });
    this._items = [];
  };
  Object.defineProperty(ScrollableComboboxComponent.prototype, "opensUp", {
    get: function () {
      return this._layoutStrategy.alignment == __dep_export_SimpleLayoutStrategyVertical.SimpleLayoutStrategyVertical.ALIGNMENT_BOTTOM;
    },
    enumerable: true,
    configurable: true
  });
  ScrollableComboboxComponent.prototype.onSelect = function (__s46param0) {
    this.selectItem(__s46param0);
    this.close();
  };
  ScrollableComboboxComponent.prototype.selectItem = function (__s48param0, __s48param1 = false) {
    if (__s48param0 != this._selectedItem || __s48param1) {
      this._items.forEach(function (__s51param0) {
        return __s51param0.setSelected(__s51param0 == __s48param0);
      });
      this._selectedItem = __s48param0;
      this._itxt_selected.textContentVO.stringValue = this._selectedItem.label;
      this.onSelectSignal.dispatch(this._selectedItem);
    }
  };
  Object.defineProperty(ScrollableComboboxComponent.prototype, "selectedItem", {
    get: function () {
      return this._selectedItem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScrollableComboboxComponent.prototype, "items", {
    get: function () {
      return this._items;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScrollableComboboxComponent.prototype, "onSelectSignal", {
    get: function () {
      return this._onSelectSignal;
    },
    enumerable: true,
    configurable: true
  });
  return ScrollableComboboxComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.ScrollableComboboxComponent = __s0local1;
