Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_AResourceFieldVO = require("gge-module:export_AResourceFieldVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AExpandingResourceFieldVO() {
    var __s3local0 = this;
    __s3local0._fieldAmount = 0;
    __s3local0._totalWidth = 0;
    __s3local0._totalHeight = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AExpandingResourceFieldVO, __s1param0);
  AExpandingResourceFieldVO.prototype.updateData = function () {
    this._fieldAmount = this.getFieldAmount();
    this.updateDimension();
    __s1param0.prototype.updateData.call(this);
  };
  AExpandingResourceFieldVO.prototype.updateDimension = function () {
    this._totalWidth = __dep_exact_f855840627e6e145.int(this._width);
    this._totalHeight = __dep_exact_f855840627e6e145.int(this._height);
  };
  AExpandingResourceFieldVO.prototype.updateBounds = function () {
    this._x2 = this._x + this._totalWidth - 1;
    this._y2 = this._y + this._totalHeight - 1;
  };
  AExpandingResourceFieldVO.prototype.getFieldAmount = function () {
    return 0;
  };
  AExpandingResourceFieldVO.prototype.getLastPartStartOffset = function () {
    return new __s0local0();
  };
  AExpandingResourceFieldVO.prototype.getWorkPointsByIndex = function (__s15param0) {
    return null;
  };
  Object.defineProperty(AExpandingResourceFieldVO.prototype, "fieldAmount", {
    get: function () {
      return this._fieldAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AExpandingResourceFieldVO.prototype, "totalWidth", {
    get: function () {
      return this._totalWidth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AExpandingResourceFieldVO.prototype, "totalHeight", {
    get: function () {
      return this._totalHeight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AExpandingResourceFieldVO.prototype, "rotatedWidth", {
    get: function () {
      return this._totalWidth;
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResourceFieldVO.AResourceFieldVO.prototype, "rotatedWidth").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AExpandingResourceFieldVO.prototype, "rotatedHeight", {
    get: function () {
      return this._totalHeight;
    },
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResourceFieldVO.AResourceFieldVO.prototype, "rotatedHeight").set.call(this, __s29param0);
    },
    enumerable: true,
    configurable: true
  });
  return AExpandingResourceFieldVO;
}(__dep_export_AResourceFieldVO.AResourceFieldVO);
exports.AExpandingResourceFieldVO = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IRelativeGridBuildingVO");
