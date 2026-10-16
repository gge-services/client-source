Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
var __dep_export_AEffectBuildingVO = require("gge-module:export_AEffectBuildingVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AFixedPositionBuildingVO() {
    var __s3local0 = this;
    __s3local0._posOrigin = __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.BOTTOM_CORNER;
    __s3local0._posOffset = new __s0local0();
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AFixedPositionBuildingVO, __s1param0);
  AFixedPositionBuildingVO.prototype.updateData = function () {
    this.updatePosition();
    __s1param0.prototype.updateData.call(this);
  };
  AFixedPositionBuildingVO.prototype.updatePosition = function () {
    var __s7local0 = this.isoData.grid.origins.getOriginPos(this.posOrigin);
    if (__s7local0) {
      this._x = __s7local0.x + this.posOffset.x;
      this._y = __s7local0.y + this.posOffset.y;
    }
  };
  Object.defineProperty(AFixedPositionBuildingVO.prototype, "isMovable", {
    get: function () {
      return false;
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AIsoObjectVO.AIsoObjectVO.prototype, "isMovable").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AFixedPositionBuildingVO.prototype, "canBeRotated", {
    get: function () {
      return false;
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AEffectBuildingVO.AEffectBuildingVO.prototype, "canBeRotated").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AFixedPositionBuildingVO.prototype, "isBuildingGroundViewAvailable", {
    get: function () {
      return false;
    },
    set: function (__s20param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AEffectBuildingVO.AEffectBuildingVO.prototype, "isBuildingGroundViewAvailable").set.call(this, __s20param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AFixedPositionBuildingVO.prototype, "posOrigin", {
    get: function () {
      return this._posOrigin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AFixedPositionBuildingVO.prototype, "posOffset", {
    get: function () {
      return this._posOffset;
    },
    enumerable: true,
    configurable: true
  });
  return AFixedPositionBuildingVO;
}(__dep_export_AEffectBuildingVO.AEffectBuildingVO);
exports.AFixedPositionBuildingVO = __s0local1;
var __dep_export_AIsoObjectVO = require("gge-module:export_AIsoObjectVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IShopVO", "ICostVO", "IInventoryVO", "IRelativeGridBuildingVO");
