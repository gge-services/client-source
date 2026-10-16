Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.ColorFilter;
var __dep_opaque_3ceb4ad97d4557409871cd49 = require("gge-module:opaque_3ceb4ad97d4557409871cd49");
var __s0local1 = function () {
  function ColorTransform(__s3param0 = 1, __s3param1 = 1, __s3param2 = 1, __s3param3 = 1, __s3param4 = 0, __s3param5 = 0, __s3param6 = 0, __s3param7 = 0) {
    this._redMultiplier = __s3param0;
    this._greenMultiplier = __s3param1;
    this._blueMultiplier = __s3param2;
    this._alphaMultiplier = __s3param3;
    this._redOffset = __s3param4;
    this._greenOffset = __s3param5;
    this._blueOffset = __s3param6;
    this._alphaOffset = __s3param7;
    this._color = "";
    this._color = ColorTransform.rgbToHex(__s3param4, __s3param5, __s3param6, true);
  }
  Object.defineProperty(ColorTransform.prototype, "color", {
    get: function () {
      return this._color;
    },
    set: function (__s7param0) {
      __s7param0 = ColorTransform.colorNumToString(__s7param0);
      this._redMultiplier = this._greenMultiplier = this._blueMultiplier = 0;
      var __s7local0 = ColorTransform.hexToRgb(__s7param0);
      this._redOffset = __s7local0.r;
      this._greenOffset = __s7local0.g;
      this._blueOffset = __s7local0.b;
      this.updateColor();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColorTransform.prototype, "displayObject", {
    get: function () {
      return this._displayObject;
    },
    set: function (__s11param0) {
      this._displayObject = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  ColorTransform.ensureBetween = function (__s13param0, __s13param1, __s13param2) {
    return Math.max(__s13param0, Math.min(__s13param2, __s13param1)) | 0;
  };
  ColorTransform.prototype.setChannelOffset = function (__s15param0, __s15param1) {
    __s15param1 = ColorTransform.ensureBetween(-255, 255, __s15param1);
    var __s15local0 = this.getMultiplier(__s15param0);
    var __s15local1 = this.getOffset(__s15param0);
    var __s15local2 = ColorTransform.ensureBetween(0, 255, (__s15local1 | __s15local0 * 0) + __s15param1 | 0);
    switch (__s15param0) {
      case "red":
        this._redOffset = __s15local2;
        break;
      case "green":
        this._greenOffset = __s15local2;
        break;
      case "blue":
        this._blueOffset = __s15local2;
        break;
      case "alpha":
        this._alphaOffset = __s15local2;
    }
  };
  ColorTransform.prototype.getMultiplier = function (__s18param0) {
    switch (__s18param0) {
      case "red":
        return this.redMultiplier;
      case "green":
        return this.greenMultiplier;
      case "blue":
        return this.blueMultiplier;
      case "alpha":
        return this.alphaMultiplier;
      default:
        throw new Error("No multiplier for \"" + __s18param0 + "\"");
    }
  };
  ColorTransform.prototype.getOffset = function (__s21param0) {
    switch (__s21param0) {
      case "red":
        return this.redOffset;
      case "green":
        return this.greenOffset;
      case "blue":
        return this.blueOffset;
      case "alpha":
        return this.alphaOffset;
      default:
        throw new Error("No offset for \"" + __s21param0 + "\"");
    }
  };
  Object.defineProperty(ColorTransform.prototype, "alphaOffset", {
    get: function () {
      return this._alphaOffset;
    },
    set: function (__s26param0) {
      this.setChannelOffset("alpha", __s26param0);
      this.updateColor();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColorTransform.prototype, "blueMultiplier", {
    get: function () {
      return this._blueMultiplier;
    },
    set: function (__s30param0) {
      this._blueMultiplier = __s30param0;
      this.updateColor();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColorTransform.prototype, "blueOffset", {
    get: function () {
      return this._blueOffset;
    },
    set: function (__s34param0) {
      this.setChannelOffset("blue", __s34param0);
      this.updateColor();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColorTransform.prototype, "greenMultiplier", {
    get: function () {
      return this._greenMultiplier;
    },
    set: function (__s38param0) {
      this._greenMultiplier = __s38param0;
      this.updateColor();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColorTransform.prototype, "greenOffset", {
    get: function () {
      return this._greenOffset;
    },
    set: function (__s42param0) {
      this.setChannelOffset("green", __s42param0);
      this.updateColor();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColorTransform.prototype, "redMultiplier", {
    get: function () {
      return this._redMultiplier;
    },
    set: function (__s46param0) {
      this._redMultiplier = __s46param0;
      this.updateColor();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColorTransform.prototype, "redOffset", {
    get: function () {
      return this._redOffset;
    },
    set: function (__s50param0) {
      this.setChannelOffset("red", __s50param0);
      this.updateColor();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColorTransform.prototype, "alphaMultiplier", {
    get: function () {
      return this._alphaMultiplier;
    },
    set: function (__s54param0) {
      this._alphaMultiplier = __s54param0;
      this.updateColor();
    },
    enumerable: true,
    configurable: true
  });
  ColorTransform.prototype.updateColor = function () {
    this._color = ColorTransform.rgbToHex(this._redOffset, this._greenOffset, this._blueOffset, true);
    if (this._displayObject) {
      this._displayObject.filters = [new __s0local0(this._redMultiplier, this._greenMultiplier, this._blueMultiplier, this._alphaMultiplier, this._redOffset, this._greenOffset, this._blueOffset, this._alphaOffset)];
    }
  };
  ColorTransform.rgbToHex = function (__s59param0, __s59param1, __s59param2, __s59param3 = false) {
    return (__s59param3 ? "#" : "") + ColorTransform.uint32toHex(((__s59param0 & 255) << 16) + ((__s59param1 & 255) << 8) + ((__s59param2 & 255) << 0));
  };
  ColorTransform.uint32toHex = function (__s61param0) {
    return ColorTransform.uint8toHex((__s61param0 & 16711680) >> 16) + ColorTransform.uint8toHex((__s61param0 & 65280) >> 8) + ColorTransform.uint8toHex((__s61param0 & 255) >> 0);
  };
  ColorTransform.hexToRgb = __dep_opaque_3ceb4ad97d4557409871cd49(function (__s63param0) {
    __s63param0 = __s63param0.replace(/[^0-9A-F]/gi, "");
    var __s63local0 = new ArrayBuffer(4);
    new DataView(__s63local0).setUint32(0, parseInt(__s63param0, 16), false);
    var __s63local1 = new Uint8Array(__s63local0);
    return {
      r: __s63local1[1],
      g: __s63local1[2],
      b: __s63local1[3]
    };
  });
  ColorTransform.colorNumToString = __dep_opaque_3ceb4ad97d4557409871cd49(function (__s65param0) {
    if (typeof __s65param0 != "number") {
      return __s65param0;
    } else {
      return "#" + ColorTransform.uint32toHex(__s65param0);
    }
  });
  ColorTransform.uint8toHex = __dep_opaque_3ceb4ad97d4557409871cd49(function (__s69param0) {
    var __s69local0 = Number(__s69param0 & 255).toString(16).toUpperCase();
    if (__s69param0 < 16) {
      __s69local0 = "0" + __s69local0;
    }
    return __s69local0;
  });
  return ColorTransform;
}();
exports.ColorTransform = __s0local1;
window.rgbToHex = __s0local1.rgbToHex;
