Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_LayerInfo = require("gge-module:class_LayerInfo");
var __dep_class_FrameVO = require("gge-module:class_FrameVO");
var __s0local0 = function () {
  function SpriteSheetVO(__s3param0, __s3param1, __s3param2 = 0, __s3param3 = 0) {
    this._isFilled = false;
    this._width = 0;
    this._height = 0;
    this._x = 0;
    this._y = 0;
    this._sheetName = __s3param0;
    this.pngURL = __s3param1;
    this.offsetX = __s3param2;
    this.offsetY = __s3param3;
  }
  Object.defineProperty(SpriteSheetVO.prototype, "frames", {
    get: function () {
      return this._frames;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpriteSheetVO.prototype, "sheetName", {
    get: function () {
      return this._sheetName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpriteSheetVO.prototype, "layerInfos", {
    get: function () {
      return this._layerInfos;
    },
    enumerable: true,
    configurable: true
  });
  SpriteSheetVO.prototype.initJSON = function (__s11param0) {
    this._frames = [];
    var __s11local0 = JSON.parse(__s11param0);
    if (__s11local0.frames[0]) {
      var __s11local1 = __s11local0.frames[0];
      if (__s11local1) {
        this._width = __s11local1.spriteSourceSize.w;
        this._height = __s11local1.spriteSourceSize.h;
        this._x = __s11local1.spriteSourceSize.x;
        this._y = __s11local1.spriteSourceSize.y;
      }
    }
    for (var __s11local2 = 0, __s11local3 = __s11local0.frames; __s11local2 < __s11local3.length; __s11local2++) {
      var __s11local4 = __s11local3[__s11local2];
      var __s11local5 = new __dep_class_FrameVO.FrameVO(this.offsetX, this.offsetY);
      __s11local5.loadFromParamObject(__s11local4);
      this._frames.push(__s11local5);
    }
    this._layerInfos = [];
    for (var __s11local6 = 0, __s11local7 = __s11local0.fx; __s11local6 < __s11local7.length; __s11local6++) {
      var __s11local8 = __s11local7[__s11local6];
      var __s11local9 = new __dep_class_LayerInfo.LayerInfo(__s11local8.x, __s11local8.y, __s11local8.scale, __s11local8.index, __s11local8.name, __s11local8.rotation);
      this._layerInfos.push(__s11local9);
    }
    this._isFilled = true;
  };
  Object.defineProperty(SpriteSheetVO.prototype, "isFilled", {
    get: function () {
      return this._isFilled;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpriteSheetVO.prototype, "width", {
    get: function () {
      return this._width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpriteSheetVO.prototype, "height", {
    get: function () {
      return this._height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpriteSheetVO.prototype, "x", {
    get: function () {
      return this._x - this.offsetX;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpriteSheetVO.prototype, "y", {
    get: function () {
      return this._y - this.offsetY;
    },
    enumerable: true,
    configurable: true
  });
  return SpriteSheetVO;
}();
exports.SpriteSheetVO = __s0local0;
