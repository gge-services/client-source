Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function DisplayObjectClipContainer() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._isDisposed = false;
    __s3local0.itemDict = new Map();
    __s3local0.mouseChildren = false;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(DisplayObjectClipContainer, __s1param0);
  DisplayObjectClipContainer.prototype.addItem = function (__s5param0, __s5param1 = -1) {
    this.itemDict.set(__s5param0, __s5param0);
    if (__s5param1 < 0) {
      this.addChild(__s5param0.asDisplayObject());
    } else {
      this.addChildAt(__s5param0.asDisplayObject(), __s5param1);
    }
  };
  DisplayObjectClipContainer.prototype.isHit = function (__s9param0, __s9param1) {
    return false;
  };
  DisplayObjectClipContainer.prototype.removeItem = function (__s11param0) {
    if (this.itemDict) {
      if (__s11param0) {
        __s11param0.dispose();
        if (__s11param0.asDisplayObject().parent == this) {
          this.removeChild(__s11param0.asDisplayObject());
        }
      }
      this.itemDict.delete(__s11param0);
    }
  };
  DisplayObjectClipContainer.prototype.removeAllItems = function () {
    for (var __s16local0 = 0, __s16local1 = Array.from(this.itemDict.values()); __s16local0 < __s16local1.length; __s16local0++) {
      var __s16local2 = __s16local1[__s16local0];
      this.removeItem(__s16local2);
    }
  };
  DisplayObjectClipContainer.prototype.dispose = function () {
    if (this._clipSizeComponent) {
      this._clipSizeComponent.destroy();
    }
    this.removeAllItems();
    this.itemDict = null;
    this._isDisposed = true;
  };
  Object.defineProperty(DisplayObjectClipContainer.prototype, "isDisposed", {
    get: function () {
      return this._isDisposed;
    },
    enumerable: true,
    configurable: true
  });
  DisplayObjectClipContainer.prototype.asDisplayObject = function () {
    return this;
  };
  Object.defineProperty(DisplayObjectClipContainer.prototype, "clipSizeComponent", {
    get: function () {
      return this._clipSizeComponent;
    },
    set: function (__s29param0) {
      this._clipSizeComponent = __s29param0;
    },
    enumerable: true,
    configurable: true
  });
  DisplayObjectClipContainer.prototype.once = function (__s31param0, __s31param1, __s31param2, __s31param3, __s31param4) {};
  return DisplayObjectClipContainer;
}(createjs.Container);
exports.DisplayObjectClipContainer = __s0local0;
