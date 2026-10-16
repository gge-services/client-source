Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.ColorTransform;
var __s0local1 = createjs.ColorFilter;
var __s0local2 = createjs.MovieClip;
var __s0local3 = function () {
  function ClipColor(__s3param0, __s3param1, __s3param2 = "c") {
    this._colorChangeLayerName = __s3param0;
    this._colors = __s3param1;
    this._singleColorPrefix = __s3param2;
    this.initColorID();
  }
  Object.defineProperty(ClipColor.prototype, "colors", {
    get: function () {
      return this._colors;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClipColor.prototype, "colorID", {
    get: function () {
      return this._colorID;
    },
    enumerable: true,
    configurable: true
  });
  ClipColor.prototype.initColorID = function () {
    this._colorID = null;
    if (this._colors && this._colors.length > 0) {
      this._colorID = "";
      for (var __s9local0 = 0; __s9local0 < this._colors.length; __s9local0++) {
        this._colorID += String(this._colors[__s9local0]);
      }
    }
  };
  ClipColor.prototype.colorClip = function (__s14param0) {
    var __s14local0;
    this.colorLayer(__s14param0);
    var __s14local1 = 0;
    do {
      __s14local0 = __s14param0[this._colorChangeLayerName + __s14local1];
      __s14local1++;
      this.colorLayer(__s14local0);
    } while (__s14local0);
  };
  ClipColor.prototype.colorLayer = function (__s18param0) {
    if (__s18param0) {
      for (var __s18local0 = 0; __s18local0 < this.colors.length; __s18local0++) {
        var __s18local1 = __s18param0[this._singleColorPrefix + String(__s18local0 + 1)];
        ClipColor.ct.color = this.colors[__s18local0];
        if (!__s18local1) {
          break;
        }
        var __s18local2 = ClipColor.ct;
        if (__s18local1 instanceof __s0local2 && __s18local1.children.length === 0) {
          __s18local1.gotoAndStop(1);
        }
        if (isNaN(this.filterCache)) {
          __s18local1.useFilters([new __s0local1(__s18local2.redMultiplier, __s18local2.greenMultiplier, __s18local2.blueMultiplier, __s18local2.alphaMultiplier, __s18local2.redOffset, __s18local2.greenOffset, __s18local2.blueOffset, __s18local2.alphaOffset)]);
        } else {
          __s18local1.useFilters([new __s0local1(__s18local2.redMultiplier, __s18local2.greenMultiplier, __s18local2.blueMultiplier, __s18local2.alphaMultiplier, __s18local2.redOffset, __s18local2.greenOffset, __s18local2.blueOffset, __s18local2.alphaOffset)], false, this.filterCache);
        }
      }
    }
  };
  Object.defineProperty(ClipColor.prototype, "filterCache", {
    get: function () {
      if (this._filterCache) {
        return this._filterCache;
      } else {
        return NaN;
      }
    },
    set: function (__s31param0) {
      this._filterCache = __s31param0;
    },
    enumerable: true,
    configurable: true
  });
  ClipColor.ct = new __s0local0();
  return ClipColor;
}();
exports.ClipColor = __s0local3;
