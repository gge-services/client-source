Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_becd07da092f4a09 = require("gge-module:exact_becd07da092f4a09");
var __s0local0 = function () {
  function ClipSizeComponent(__s3param0, __s3param1, __s3param2 = -1, __s3param3 = -1) {
    this._clipSizeChanged = new __dep_exact_becd07da092f4a09.Signal();
    this._maxWidth = __s3param0;
    this._maxHeight = __s3param1;
    this._maxScale = __s3param2;
    this._minScale = __s3param3;
  }
  Object.defineProperty(ClipSizeComponent.prototype, "offsetX", {
    get: function () {
      return this._offsetX;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClipSizeComponent.prototype, "offsetY", {
    get: function () {
      return this._offsetY;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClipSizeComponent.prototype, "clipSizeChanged", {
    get: function () {
      return this._clipSizeChanged;
    },
    enumerable: true,
    configurable: true
  });
  ClipSizeComponent.prototype.setImageSize = function (__s11param0, __s11param1) {
    this._scaleFactor = this.getScaleFactor(__s11param1, __s11param0);
    if (this._maxScale != -1) {
      this._scaleFactor = Math.min(this._maxScale, this._scaleFactor);
    }
    if (this._minScale != -1) {
      this._scaleFactor = Math.max(this._minScale, this._scaleFactor);
    }
    this._offsetX = -(__s11param1.width * this._scaleFactor / 2 + __s11param1.left * this._scaleFactor);
    this._offsetY = -(__s11param1.height * this._scaleFactor / 2 + __s11param1.top * this._scaleFactor);
    __s11param0.scaleX = __s11param0.scaleY = this._scaleFactor;
  };
  ClipSizeComponent.prototype.getScaleFactor = function (__s15param0, __s15param1) {
    var __s15local0 = __s15param0.width != 0 ? __s15param0.width : __s15param1.width;
    var __s15local1 = __s15param0.height != 0 ? __s15param0.height : __s15param1.height;
    var __s15local2 = this._maxWidth / __s15local0;
    if (__s15local1 * __s15local2 > this._maxHeight) {
      __s15local2 = this._maxHeight / __s15local1;
    }
    return __s15local2;
  };
  ClipSizeComponent.prototype.destroy = function () {
    this._clipSizeChanged.removeAll();
  };
  return ClipSizeComponent;
}();
exports.ClipSizeComponent = __s0local0;
