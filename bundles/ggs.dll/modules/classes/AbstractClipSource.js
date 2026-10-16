Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_FrameStrip = require("gge-module:class_FrameStrip");
var __s0local0 = createjs.Rectangle;
var __s0local1 = function () {
  function AbstractClipSource() {
    this._framesStrip = new __dep_class_FrameStrip.FrameStrip();
    this._clipBounds = new __s0local0();
  }
  Object.defineProperty(AbstractClipSource.prototype, "cacheId", {
    get: function () {
      return this._cacheId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractClipSource.prototype, "frameStrip", {
    get: function () {
      return this._framesStrip;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractClipSource.prototype, "colorID", {
    get: function () {
      if (this._colorData && this._colorData.length > 0) {
        var __s9local0 = "";
        for (var __s9local1 = 0; __s9local1 < this._colorData.length; __s9local1++) {
          __s9local0 += this._colorData[__s9local1].colorID;
        }
        return __s9local0;
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractClipSource.prototype, "clipBounds", {
    get: function () {
      return this._clipBounds;
    },
    enumerable: true,
    configurable: true
  });
  AbstractClipSource.prototype.addToClipBounds = function (__s16param0) {
    this._clipBounds ||= new __s0local0();
    this._clipBounds = this._clipBounds.union(__s16param0);
  };
  AbstractClipSource.prototype.destroy = function () {
    if (this._framesStrip) {
      this._framesStrip.destroy();
      this._framesStrip = null;
    }
  };
  return AbstractClipSource;
}();
exports.AbstractClipSource = __s0local1;
