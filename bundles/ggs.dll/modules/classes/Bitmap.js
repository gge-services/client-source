Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_class_PixelSnapping = require("gge-module:class_PixelSnapping");
var __dep_exact_d080a25fe68bd590 = require("gge-module:exact_d080a25fe68bd590");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger(__dep_exact_d080a25fe68bd590.CREATEJS_UTILITIES_LOGGER + ".Bitmap");
Object.defineProperty(createjs.Bitmap.prototype, "pixelSnapping", {
  value: __dep_class_PixelSnapping.PixelSnapping.AUTO,
  enumerable: true,
  configurable: true,
  writable: true
});
Object.defineProperty(createjs.Bitmap.prototype, "smoothing", {
  value: false,
  enumerable: true,
  configurable: true,
  writable: true
});
Object.defineProperty(createjs.Bitmap.prototype, "bitmapData", {
  get: function () {
    if (!this.$bitmapData) {
      if (!this.cacheCanvas) {
        this.cache(this.x, this.y, this.image.width, this.image.height);
      }
      this.$bitmapData = createjs.BitmapData.getBitmapData(this);
    }
    return this.$bitmapData;
  },
  set: function (__s5param0) {
    this.$bitmapData = __s5param0;
    this.image = __s5param0.canvas;
    this.setBounds(0, 0, this.$bitmapData.width, this.$bitmapData.height);
  },
  enumerable: true,
  configurable: true
});
var __s0local1 = createjs.Bitmap.prototype;
var __s0local2 = createjs.Bitmap.prototype.constructor;
var __s0local3 = createjs.Bitmap.suppressCrossDomainErrors;
createjs.Bitmap = function (__s7param0, __s7param1 = __dep_class_PixelSnapping.PixelSnapping.AUTO, __s7param2 = false) {
  this.smoothing = __s7param2;
  this.pixelSnapping = __s7param1;
  if (__s7param0 && __s7param0.canvas) {
    __s0local2.call(this, __s7param0.canvas, __s7param1, __s7param2);
  } else {
    __s0local2.call(this, __s7param0, __s7param1, __s7param2);
  }
};
createjs.Bitmap.prototype = __s0local1;
createjs.Bitmap.suppressCrossDomainErrors = __s0local3;
createjs.Bitmap.prototype.draw = function (__s11param0, __s11param1) {
  if (this.DisplayObject_draw(__s11param0, __s11param1) || !this.image) {
    return true;
  }
  var __s11local0 = this.image;
  var __s11local1 = this.sourceRect;
  if (__s11local0 instanceof HTMLCanvasElement && (__s11local0.width === 0 || __s11local0.height === 0)) {
    var __s11local2 = window.bugsnagClient;
    if (__s11local2) {
      __s0local0.error("try to draw bitmap whose image is size 0 canvas.");
      __s11local2.notify(new Error("Bitmap image is size 0 canvas, ignore drawing..."), {
        severity: "warning"
      });
    }
    return true;
  }
  if (__s11local1) {
    var __s11local3 = __s11local1.x;
    var __s11local4 = __s11local1.y;
    var __s11local5 = __s11local3 + __s11local1.width;
    var __s11local6 = __s11local4 + __s11local1.height;
    var __s11local7 = 0;
    var __s11local8 = 0;
    var __s11local9 = __s11local0.width;
    var __s11local10 = __s11local0.height;
    if (__s11local3 < 0) {
      __s11local7 -= __s11local3;
      __s11local3 = 0;
    }
    if (__s11local5 > __s11local9) {
      __s11local5 = __s11local9;
    }
    if (__s11local4 < 0) {
      __s11local8 -= __s11local4;
      __s11local4 = 0;
    }
    if (__s11local6 > __s11local10) {
      __s11local6 = __s11local10;
    }
    __s11param0.drawImage(__s11local0, __s11local3, __s11local4, __s11local5 - __s11local3, __s11local6 - __s11local4, __s11local7, __s11local8, __s11local5 - __s11local3, __s11local6 - __s11local4);
  } else {
    __s11param0.drawImage(__s11local0, 0, 0);
  }
  return true;
};
