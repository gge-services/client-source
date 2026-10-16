Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = createjs.BitmapData;
var __s0local1 = createjs.Container;
var __s0local2 = require("gge-module:export_LoggerConfigurator").getLogger("TiledBitmap");
var __s0local3 = function (__s1param0) {
  function TiledBitmap(__s3param0, __s3param1, __s3param2, __s3param3 = true, __s3param4 = 16777215) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.rectCount = 0;
    __s0local2.warn("TiledBitmap has major createjs incompatibilities");
    __s3local0._width = Math.floor(__s3param0);
    __s3local0._height = Math.floor(__s3param1);
    __s3local0._smoothing = __s3param2;
    __s3local0._transparent = __s3param3;
    __s3local0._color = __s3param4;
    __s3local0._bitmaps = new Array();
    __s3local0.makeRects();
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(TiledBitmap, __s1param0);
  Object.defineProperty(TiledBitmap.prototype, "matrix", {
    set: function (__s5param0) {
      this._matrix = __s5param0;
    },
    enumerable: true,
    configurable: true
  });
  TiledBitmap.prototype.makeRects = function () {
    this._rectBitmapDict = new Map();
    for (var __s7local0 = Math.floor(this._height), __s7local1 = 0; __s7local0 > 0;) {
      var __s7local2 = undefined;
      var __s7local3 = 0;
      var __s7local4 = this._width;
      if (__s7local0 >= 0 && __s7local0 < TiledBitmap.MAX_ARCHIVE_HEIGHT) {
        for (var __s7local5 = __s7local4, __s7local6 = 0; __s7local5 > 0;) {
          __s7local2 = new Rectangle(__s7local6, __s7local1, Math.min(TiledBitmap.MAX_WIDTH, __s7local5), __s7local0);
          this._rectBitmapDict.set(__s7local2, null);
          __s7local5 -= __s7local2.width;
          __s7local6 += __s7local2.width;
        }
        __s7local0 = 0;
      } else {
        while (__s7local4 > 0) {
          if (__s7local4 >= TiledBitmap.MAX_ARCHIVE_WIDTH) {
            (__s7local2 = new Rectangle(0, 0, Math.min(TiledBitmap.MAX_ARCHIVE_WIDTH, __s7local4), Math.min(TiledBitmap.MAX_ARCHIVE_HEIGHT, __s7local0))).x = __s7local3;
            __s7local2.y = __s7local1;
            this._rectBitmapDict.set(__s7local2, null);
            __s7local4 -= __s7local2.width;
            __s7local3 += __s7local2.width;
          } else {
            if (__s7local1 == 0) {
              for (var __s7local7 = __s7local0 > TiledBitmap.MAX_ARCHIVE_HEIGHT ? __s7local0 - __s7local0 % TiledBitmap.MAX_ARCHIVE_HEIGHT : __s7local0, __s7local8 = 0; __s7local7 > 0;) {
                __s7local2 = new Rectangle(__s7local3, __s7local8, Math.min(TiledBitmap.MAX_ARCHIVE_WIDTH, __s7local4), Math.min(TiledBitmap.MAX_ARCHIVE_HEIGHT, __s7local0));
                this._rectBitmapDict.set(__s7local2, null);
                __s7local7 -= __s7local2.height;
                __s7local8 += __s7local2.height;
              }
            }
            __s7local4 = 0;
          }
        }
        __s7local1 += TiledBitmap.MAX_ARCHIVE_HEIGHT;
        __s7local0 -= TiledBitmap.MAX_ARCHIVE_HEIGHT;
      }
    }
    this.rectCount = this._rectBitmapDict.size;
  };
  TiledBitmap.prototype.addBitmap = function (__s22param0, __s22param1, __s22param2) {
    if (__s22param0.width == TiledBitmap.MAX_ARCHIVE_WIDTH && __s22param0.height == TiledBitmap.MAX_ARCHIVE_HEIGHT && TiledBitmap.bitmapArchive.indexOf(__s22param0) == -1) {
      TiledBitmap.bitmapArchive.push(__s22param0);
    }
    __s22param0.x = __s22param1;
    __s22param0.y = __s22param2;
    this.addChild(__s22param0);
    this._bitmaps.push(__s22param0);
  };
  Object.defineProperty(TiledBitmap.prototype, "bitmapWidth", {
    get: function () {
      return this._width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TiledBitmap.prototype, "bitmapHeight", {
    get: function () {
      return this._height;
    },
    enumerable: true,
    configurable: true
  });
  TiledBitmap.MAX_ARCHIVE_WIDTH = 1024;
  TiledBitmap.MAX_ARCHIVE_HEIGHT = 512;
  TiledBitmap.CLEAR_ARCHIVE_BITMAP = new __s0local0(TiledBitmap.MAX_ARCHIVE_WIDTH, TiledBitmap.MAX_ARCHIVE_HEIGHT, true, 0);
  TiledBitmap.MAX_WIDTH = 2048;
  TiledBitmap.MAX_HEIGHT = 2048;
  TiledBitmap.bitmapArchive = new Array();
  return TiledBitmap;
}(__s0local1);
exports.TiledBitmap = __s0local3;
