Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_exact_d080a25fe68bd590 = require("gge-module:exact_d080a25fe68bd590");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger(__dep_exact_d080a25fe68bd590.CREATEJS_UTILITIES_LOGGER + ".spritesheets");
createjs.SpriteSheetUtils.extractFrame = function (__s1param0, __s1param1) {
  var __s1local0;
  var __s1local1 = __s1param0._cachedCanvas = __s1param0._cachedCanvas || new Map();
  var __s1local2 = __s1param1;
  if (__s1local0 = __s1local1.get(__s1param1)) {
    return __s1local0;
  }
  if (isNaN(__s1param1)) {
    __s1param1 = __s1param0.getAnimation(__s1param1).frames[0];
  }
  var __s1local3 = __s1param0.getFrame(__s1param1);
  if (!__s1local3) {
    return null;
  }
  var __s1local4 = __s1local3.rect;
  (__s1local0 = document.createElement("canvas")).width = __s1local4.width;
  __s1local0.height = __s1local4.height;
  __s1local0.getContext("2d").drawImage(__s1local3.image, __s1local4.x, __s1local4.y, __s1local4.width, __s1local4.height, 0, 0, __s1local4.width, __s1local4.height);
  __s1local1.set(__s1local2, __s1local0);
  return __s1local0;
};
createjs.SpriteSheet.prototype._parseData = function (__s6param0) {
  var __s6local0;
  var __s6local1;
  var __s6local2;
  var __s6local3;
  if (__s6param0 != null) {
    this.framerate = __s6param0.framerate || 0;
    if (__s6param0.images && (__s6local1 = __s6param0.images.length) > 0) {
      __s6local3 = this._images = [];
      function __s9local0() {
        var __s10local0 = undefined;
        var __s10local1 = __s6param0.images[__s6local0];
        if (typeof __s10local1 == "string") {
          __s10local0 = __s10local1;
          (__s10local1 = document.createElement("img")).src = __s10local0;
        } else if (__s10local1 instanceof ArrayBuffer) {
          var __s10local2 = window.BPGDecoder;
          if (__s10local2) {
            var __s10local3 = document.createElement("canvas");
            var __s10local4 = __s10local3.getContext("2d");
            var __s10local5 = new __s10local2(__s10local4);
            var __s10local6 = "bpg-" + __s6param0.sourceSize.w + "-" + __s6param0.sourceSize.h;
            var __s10local7 = performance.now();
            __s10local5._onload({
              response: __s10local1
            });
            __s10local3.width = __s10local5.imageData.width;
            __s10local3.height = __s10local5.imageData.height;
            __s10local4.putImageData(__s10local5.imageData, 0, 0);
            var __s10local8 = performance.now() - __s10local7;
            window.bpgTotal = window.bpgTotal || 0;
            window.bpgTotal += __s10local8;
            __s0local0.info(__s10local6, "single " + __s10local8 + "ms", "total " + window.bpgTotal / 1000 + "s");
            __s10local1 = __s10local3;
          }
        }
        __s6local3.push(__s10local1);
        if (!__s10local1.getContext && !__s10local1.naturalWidth) {
          __s6local4._loadCount++;
          __s6local4.complete = false;
          (function (__s16param0, __s16param1) {
            __s10local1.onload = function () {
              __s16param0._handleImageLoad(__s16param1);
            };
          })(__s6local4, __s10local0);
          (function (__s20param0, __s20param1) {
            __s10local1.onerror = function () {
              __s20param0._handleImageError(__s20param1);
            };
          })(__s6local4, __s10local0);
        }
      }
      var __s6local4 = this;
      for (__s6local0 = 0; __s6local0 < __s6local1; __s6local0++) {
        __s9local0();
      }
    }
    if (__s6param0.frames == null) ;else if (Array.isArray(__s6param0.frames)) {
      this._frames = [];
      __s6local3 = __s6param0.frames;
      __s6local0 = 0;
      __s6local1 = __s6local3.length;
      for (; __s6local0 < __s6local1; __s6local0++) {
        var __s6local5 = __s6local3[__s6local0];
        this._frames.push({
          image: this._images[__s6local5[4] ? __s6local5[4] : 0],
          rect: new createjs.Rectangle(__s6local5[0], __s6local5[1], __s6local5[2], __s6local5[3]),
          regX: __s6local5[5] || 0,
          regY: __s6local5[6] || 0
        });
      }
    } else {
      __s6local2 = __s6param0.frames;
      this._frameWidth = __s6local2.width;
      this._frameHeight = __s6local2.height;
      this._regX = __s6local2.regX || 0;
      this._regY = __s6local2.regY || 0;
      this._spacing = __s6local2.spacing || 0;
      this._margin = __s6local2.margin || 0;
      this._numFrames = __s6local2.count;
      if (this._loadCount == 0) {
        this._calculateFrames();
      }
    }
    var __s6local6;
    this._animations = [];
    if ((__s6local2 = __s6param0.animations) != null) {
      this._data = {};
      for (__s6local6 in __s6local2) {
        var __s6local7 = {
          name: __s6local6
        };
        var __s6local8 = __s6local2[__s6local6];
        if (typeof __s6local8 == "number") {
          __s6local3 = __s6local7.frames = [__s6local8];
        } else if (Array.isArray(__s6local8)) {
          if (__s6local8.length == 1) {
            __s6local7.frames = [__s6local8[0]];
          } else {
            __s6local7.speed = __s6local8[3];
            __s6local7.next = __s6local8[2];
            __s6local3 = __s6local7.frames = [];
            __s6local0 = __s6local8[0];
            for (; __s6local0 <= __s6local8[1]; __s6local0++) {
              __s6local3.push(__s6local0);
            }
          }
        } else {
          __s6local7.speed = __s6local8.speed;
          __s6local7.next = __s6local8.next;
          var __s6local9 = __s6local8.frames;
          __s6local3 = __s6local7.frames = typeof __s6local9 == "number" ? [__s6local9] : __s6local9.slice(0);
        }
        if (__s6local7.next === true || __s6local7.next === undefined) {
          __s6local7.next = __s6local6;
        }
        if (__s6local7.next === false || __s6local3.length < 2 && __s6local7.next == __s6local6) {
          __s6local7.next = null;
        }
        __s6local7.speed ||= 1;
        this._animations.push(__s6local6);
        this._data[__s6local6] = __s6local7;
      }
    }
  }
};
