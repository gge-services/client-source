Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function FrameStrip() {
    this._frames = [];
  }
  FrameStrip.prototype.addFrame = function (__s5param0) {
    this._frames.push(__s5param0);
  };
  FrameStrip.prototype.getFrame = function (__s7param0) {
    if (__s7param0 >= 0 && __s7param0 < this._frames.length) {
      return this._frames[__s7param0];
    } else {
      return null;
    }
  };
  FrameStrip.prototype.setFrame = function (__s11param0, __s11param1) {
    if (__s11param0 < this._frames.length) {
      this._frames[__s11param0] = __s11param1;
    }
  };
  Object.defineProperty(FrameStrip.prototype, "frameAmount", {
    get: function () {
      return this._frames.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FrameStrip.prototype, "hasMultipleFrames", {
    get: function () {
      return this._frames.length > 1;
    },
    enumerable: true,
    configurable: true
  });
  FrameStrip.prototype.removeLastFrames = function (__s18param0) {
    if (this._frames.length >= __s18param0) {
      for (var __s18local0 = 0; __s18local0 < __s18param0; __s18local0++) {
        this._frames.pop();
      }
    }
  };
  FrameStrip.prototype.destroy = function () {
    for (var __s23local0 = 0, __s23local1 = this._frames; __s23local0 < __s23local1.length; __s23local0++) {
      var __s23local2 = __s23local1[__s23local0];
      if (__s23local2.image instanceof HTMLCanvasElement) {
        __s23local2.image.width = __s23local2.image.height = 0;
      }
    }
    this._frames = [];
  };
  return FrameStrip;
}();
exports.FrameStrip = __s0local0;
