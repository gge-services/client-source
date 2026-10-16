Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = createjs.Container;
var __s0local1 = createjs.Event;
var __s0local2 = createjs.GlowFilter;
var __dep_exact_becd07da092f4a09 = require("gge-module:exact_becd07da092f4a09");
var __s0local3 = function (__s1param0) {
  function BitmapClipContainer() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.isMouseOver = false;
    __s3local0._isInteractive = false;
    __s3local0.clipSizeChangedSignal = new __dep_exact_becd07da092f4a09.Signal();
    __s3local0._isDisposed = false;
    __s3local0.mouseEnabled = false;
    __s3local0.addEventListener(__s0local1.ADDED_TO_STAGE, __s3local0.bindFunction(__s3local0.addedToStage), false);
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BitmapClipContainer, __s1param0);
  BitmapClipContainer.prototype.addItem = function (__s5param0, __s5param1 = -1) {
    this.itemDict ||= new Map();
    if (this._isInteractive) {
      __s5param0.addEventListener("mouseout", this.bindFunction(this.onMouseOut));
      __s5param0.addEventListener("mouseover", this.bindFunction(this.onMouseOver));
    }
    this.itemDict.set(__s5param0, __s5param0);
    if (__s5param1 < 1) {
      this.addChild(__s5param0.asDisplayObject());
    } else {
      this.addChildAt(__s5param0.asDisplayObject(), __s5param1);
    }
    this.addClipSizeComponentToItem(__s5param0);
  };
  BitmapClipContainer.prototype.addedToStage = function (__s10param0) {
    this.removeEventListener(__s0local1.ADDED_TO_STAGE, this.bindFunction(this.addedToStage));
    this.clipSizeChangedSignal.dispatch(this);
  };
  BitmapClipContainer.prototype.onChildClipSizeChanged = function (__s12param0) {
    this.clipSizeChangedSignal.dispatch(this);
  };
  Object.defineProperty(BitmapClipContainer.prototype, "isInteractive", {
    set: function (__s14param0) {
      if (__s14param0 != this._isInteractive) {
        if (__s14param0) {
          this.addMouseListener();
        } else {
          this.removeMouseListener();
        }
        this._isInteractive = __s14param0;
      }
    },
    enumerable: true,
    configurable: true
  });
  BitmapClipContainer.prototype.addMouseListener = function () {
    if (this.itemDict) {
      for (var __s19local0 = 0, __s19local1 = Array.from(this.itemDict.values()); __s19local0 < __s19local1.length; __s19local0++) {
        var __s19local2 = __s19local1[__s19local0];
        __s19local2.removeEventListener("mouseout", this.bindFunction(this.onMouseOut));
        __s19local2.removeEventListener("mouseover", this.bindFunction(this.onMouseOver));
      }
    }
  };
  BitmapClipContainer.prototype.removeMouseListener = function () {
    if (this.itemDict) {
      for (var __s24local0 = 0, __s24local1 = Array.from(this.itemDict.values()); __s24local0 < __s24local1.length; __s24local0++) {
        var __s24local2 = __s24local1[__s24local0];
        __s24local2.removeEventListener("mouseout", this.bindFunction(this.onMouseOut));
        __s24local2.removeEventListener("mouseover", this.bindFunction(this.onMouseOver));
      }
    }
    this.removeEventListener(__s0local1.ADDED_TO_STAGE, this.addedToStage);
  };
  BitmapClipContainer.prototype.removeItem = function (__s29param0) {
    if (__s29param0) {
      __s29param0.dispose();
      __s29param0.removeEventListener("mouseout", this.bindFunction(this.onMouseOut));
      __s29param0.removeEventListener("mouseover", this.bindFunction(this.onMouseOver));
      if (__s29param0.asDisplayObject().parent == this) {
        this.removeChild(__s29param0.asDisplayObject());
      }
      if (this.itemDict) {
        this.itemDict.delete(__s29param0);
      }
    }
  };
  BitmapClipContainer.prototype.removeAllItems = function () {
    if (this.itemDict) {
      for (var __s34local0 = 0, __s34local1 = Array.from(this.itemDict.values()); __s34local0 < __s34local1.length; __s34local0++) {
        var __s34local2 = __s34local1[__s34local0];
        this.removeItem(__s34local2);
      }
    }
  };
  BitmapClipContainer.prototype.isHit = function (__s39param0, __s39param1) {
    if (this.itemDict) {
      for (var __s39local0 = 0, __s39local1 = Array.from(this.itemDict.values()); __s39local0 < __s39local1.length; __s39local0++) {
        if (__s39local1[__s39local0].isHit(__s39param0, __s39param1)) {
          return true;
        }
      }
    }
    return false;
  };
  BitmapClipContainer.prototype.dispose = function () {
    if (this._clipSizeComponent) {
      this._clipSizeComponent.destroy();
    }
    this.removeAllItems();
    if (this.clipSizeChangedSignal) {
      this.clipSizeChangedSignal.removeAll();
    }
    this.removeEventListener(__s0local1.ADDED_TO_STAGE, this.bindFunction(this.addedToStage));
    this.itemDict = null;
    this._isDisposed = true;
  };
  Object.defineProperty(BitmapClipContainer.prototype, "isDisposed", {
    get: function () {
      return this._isDisposed;
    },
    enumerable: true,
    configurable: true
  });
  BitmapClipContainer.prototype.onMouseOut = function (__s51param0) {
    __s51param0.stopImmediatePropagation();
  };
  BitmapClipContainer.prototype.onMouseOver = function (__s53param0) {
    __s53param0.stopImmediatePropagation();
  };
  BitmapClipContainer.prototype.addGlow = function () {
    if (this.filters.length == 0) {
      this.filters = [new __s0local2(255, 0.5, 1, 1, 1, 1, false, false)];
    }
  };
  BitmapClipContainer.prototype.removeGlow = function () {
    if (this.filters.length > 0) {
      this.filters = [];
    }
  };
  BitmapClipContainer.prototype.asDisplayObject = function () {
    return this;
  };
  BitmapClipContainer.prototype.addClipSizeComponentToItem = function (__s63param0) {
    if (this._clipSizeComponent) {
      __s63param0.clipSizeComponent = this._clipSizeComponent;
      __s63param0.clipSizeComponent.clipSizeChanged.add(this.bindFunction(this.onChildClipSizeChanged));
    }
  };
  Object.defineProperty(BitmapClipContainer.prototype, "clipSizeComponent", {
    get: function () {
      return this._clipSizeComponent;
    },
    set: function (__s68param0) {
      this._clipSizeComponent = __s68param0;
      if (this._clipSizeComponent && this.itemDict) {
        for (var __s68local0 = 0, __s68local1 = Array.from(this.itemDict.values()); __s68local0 < __s68local1.length; __s68local0++) {
          var __s68local2 = __s68local1[__s68local0];
          this.addClipSizeComponentToItem(__s68local2);
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BitmapClipContainer.prototype, "mainClipClassName", {
    get: function () {
      return this._mainClipClassName;
    },
    set: function (__s75param0) {
      this._mainClipClassName = __s75param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BitmapClipContainer.prototype, "minSize", {
    get: function () {
      return this._minSize;
    },
    set: function (__s79param0) {
      this._minSize = __s79param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BitmapClipContainer.prototype, "maxSize", {
    get: function () {
      return this._maxSize;
    },
    set: function (__s83param0) {
      this._maxSize = __s83param0;
    },
    enumerable: true,
    configurable: true
  });
  BitmapClipContainer.prototype.once = function (__s85param0, __s85param1, __s85param2, __s85param3, __s85param4) {};
  return BitmapClipContainer;
}(__s0local0);
exports.BitmapClipContainer = __s0local3;
