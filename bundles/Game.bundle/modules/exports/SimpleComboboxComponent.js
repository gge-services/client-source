Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function SimpleComboboxComponent(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._isInitializing = false;
    __s3local0._currentIndex = 0;
    __s3local0._isComboboxOpen = true;
    __s3local0._items = [];
    __s3local0._onSelectionChanged = new __dep_exact_5c7bc328fca9e4de.Signal();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._config = __s3param1;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SimpleComboboxComponent, __s1param0);
  SimpleComboboxComponent.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.disp.mc_selector, 1);
  };
  SimpleComboboxComponent.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    if (this._items != null) {
      for (var __s7local0 = 0, __s7local1 = this._items; __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        if (__s7local2 !== undefined) {
          __s7local2.onShow();
        }
      }
    }
    this.switchComboboxState(false);
    this.selectIndex(0, false);
  };
  SimpleComboboxComponent.prototype.onHide = function () {
    if (this._items != null) {
      for (var __s13local0 = 0, __s13local1 = this._items; __s13local0 < __s13local1.length; __s13local0++) {
        var __s13local2 = __s13local1[__s13local0];
        if (__s13local2 !== undefined) {
          __s13local2.onHide();
        }
      }
    }
    this.switchComboboxState(false);
    __s1param0.prototype.onHide.call(this);
  };
  SimpleComboboxComponent.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    if (this._items != null) {
      for (var __s19local0 = 0, __s19local1 = this._items; __s19local0 < __s19local1.length; __s19local0++) {
        var __s19local2 = __s19local1[__s19local0];
        if (__s19local2 !== undefined) {
          this.handleEventListenerOnItem(__s19local2, true);
        }
      }
    }
  };
  SimpleComboboxComponent.prototype.removeEventListener = function () {
    if (this._items != null) {
      for (var __s25local0 = 0, __s25local1 = this._items; __s25local0 < __s25local1.length; __s25local0++) {
        var __s25local2 = __s25local1[__s25local0];
        if (__s25local2 !== undefined) {
          this.handleEventListenerOnItem(__s25local2, false);
        }
      }
    }
    __s1param0.prototype.removeEventListener.call(this);
  };
  SimpleComboboxComponent.prototype.updateWithNewValues = function (__s31param0) {
    this._items = __s31param0;
    this._currentIndex = 0;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.mc_items);
    this.update();
  };
  SimpleComboboxComponent.prototype.update = function () {
    this._isInitializing = true;
    for (var __s33local0 = 0; __s33local0 < this._items.length; ++__s33local0) {
      var __s33local1 = this._items[__s33local0];
      this.disp.mc_items.addChild(__s33local1.disp);
      this.handleEventListenerOnItem(__s33local1, true);
      __s33local1.updateDisp();
      if (this.isShown) {
        __s33local1.onShow();
      }
    }
    this._isInitializing = false;
    this.updateItemAlignment();
  };
  SimpleComboboxComponent.prototype.updateItemAlignment = function () {
    if (!this._isInitializing) {
      var __s38local0 = 0;
      if (this._items != null) {
        for (var __s38local1 = 0, __s38local2 = this._items; __s38local1 < __s38local2.length; __s38local1++) {
          var __s38local3 = __s38local2[__s38local1];
          if (__s38local3 !== undefined) {
            __s38local3.disp.y = __s38local0;
            __s38local0 += __dep_exact_f855840627e6e145.int(__s38local3.disp.height + this.config.paddingY);
          }
        }
      }
    }
  };
  SimpleComboboxComponent.prototype.switchComboboxState = function (__s45param0) {
    this._isComboboxOpen = __s45param0;
    if (this._items != null) {
      for (var __s45local0 = 0, __s45local1 = this._items; __s45local0 < __s45local1.length; __s45local0++) {
        var __s45local2 = __s45local1[__s45local0];
        if (__s45local2 !== undefined) {
          __s45local2.setVisibility(this._isComboboxOpen);
        }
      }
    }
    if (this.disp.mc_selector.mc_background) {
      this.disp.mc_selector.mc_background.gotoAndStop(this._isComboboxOpen ? 2 : 1);
    }
    if (this.disp.mc_selector.mc_arrow) {
      this.disp.mc_selector.mc_arrow.gotoAndStop(this._isComboboxOpen ? 2 : 1);
    }
    this.disp.mc_selector.scaleX = this.disp.mc_selector.scaleY = 1;
  };
  SimpleComboboxComponent.prototype.selectIndex = function (__s53param0, __s53param1 = true) {
    this._currentIndex = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f_1.MathBase.clamp(__s53param0, 0, Math.max(0, this._items.length - 1)));
    this.switchComboboxState(false);
    if (__s53param1) {
      this._onSelectionChanged.dispatch();
    }
  };
  SimpleComboboxComponent.prototype.selectItem = function (__s56param0, __s56param1 = true) {
    this.selectIndex(this.getItemIndex(__s56param0), __s56param1);
  };
  SimpleComboboxComponent.prototype.setSelectorHoverState = function (__s58param0) {
    var __s58local0 = this.disp.mc_selector;
    __s58local0.scaleX = __s58local0.scaleY = __s58param0 ? this.config.selectorHoverScale : 1;
  };
  SimpleComboboxComponent.prototype.handleEventListenerOnItem = function (__s60param0, __s60param1) {
    if (__s60param1) {
      __s60param0.onFillContentCompleted.add(this.bindFunction(this.onItemItemFillCompleted));
      __s60param0.onItemClicked.add(this.bindFunction(this.onItemClicked));
    } else {
      __s60param0.onFillContentCompleted.remove(this.bindFunction(this.onItemItemFillCompleted));
      __s60param0.onItemClicked.remove(this.bindFunction(this.onItemClicked));
    }
  };
  SimpleComboboxComponent.prototype.getSelectedItem = function () {
    if (this._currentIndex < this._items.length) {
      return this._items[this._currentIndex];
    } else {
      return null;
    }
  };
  SimpleComboboxComponent.prototype.getItemByCompareFunc = function (__s68param0) {
    if (this._items != null) {
      for (var __s68local0 = 0, __s68local1 = this._items; __s68local0 < __s68local1.length; __s68local0++) {
        var __s68local2 = __s68local1[__s68local0];
        if (__s68local2 !== undefined && __s68param0(__s68local2)) {
          return __s68local2;
        }
      }
    }
    return null;
  };
  SimpleComboboxComponent.prototype.getItemIndex = function (__s74param0) {
    for (var __s74local0 = 0; __s74local0 < this._items.length; ++__s74local0) {
      if (this._items[__s74local0] == __s74param0) {
        return __s74local0;
      }
    }
    return -1;
  };
  SimpleComboboxComponent.prototype.getSelectorMc = function () {
    return this.disp.mc_selector;
  };
  SimpleComboboxComponent.prototype.onClick = function (__s81param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s81param0.target)) {
      __s1param0.prototype.onClick.call(this, __s81param0);
      switch (__s81param0.target) {
        case this.disp.mc_selector:
          this.switchComboboxState(!this._isComboboxOpen);
          if (!this._isComboboxOpen) {
            this.setSelectorHoverState(true);
          }
      }
    }
  };
  SimpleComboboxComponent.prototype.onOutOfBoundsClickCheck = function (__s86param0) {
    if (__s86param0 != this.disp && __s86param0 != this.disp.mc_selector && __s86param0 != this.disp.mc_items) {
      this.switchComboboxState(false);
    }
  };
  SimpleComboboxComponent.prototype.onMouseOver = function (__s89param0) {
    __s1param0.prototype.onMouseOver.call(this, __s89param0);
    switch (__s89param0.target) {
      case this.disp.mc_selector:
        if (!this._isComboboxOpen) {
          this.setSelectorHoverState(true);
        }
    }
  };
  SimpleComboboxComponent.prototype.onMouseOut = function (__s93param0) {
    __s1param0.prototype.onMouseOut.call(this, __s93param0);
    switch (__s93param0.target) {
      case this.disp.mc_selector:
        this.setSelectorHoverState(false);
    }
  };
  SimpleComboboxComponent.prototype.onItemItemFillCompleted = function (__s96param0) {
    __s96param0.onFillContentCompleted.remove(this.bindFunction(this.onItemItemFillCompleted));
    this.updateItemAlignment();
  };
  SimpleComboboxComponent.prototype.onItemClicked = function (__s98param0) {
    var __s98local0 = __dep_exact_f855840627e6e145.int(this.getItemIndex(__s98param0));
    if (__s98local0 >= 0) {
      this.selectIndex(__s98local0);
    } else {
      __dep_exact_9e901e8e2483a22f_2.warn("SimpleComboboxComponent.onItemClicked(): Item is not part if this combobox.");
    }
  };
  Object.defineProperty(SimpleComboboxComponent.prototype, "onSelectionChanged", {
    get: function () {
      return this._onSelectionChanged;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleComboboxComponent.prototype, "config", {
    get: function () {
      return this._config;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleComboboxComponent.prototype, "items", {
    get: function () {
      return this._items;
    },
    enumerable: true,
    configurable: true
  });
  return SimpleComboboxComponent;
}(require("gge-module:export_CastleItemRenderer").CastleItemRenderer);
exports.SimpleComboboxComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
