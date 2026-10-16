Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function AUnitProductionBuildingVO() {
    var __s3local0 = this;
    __s3local0._productionSpeed = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AUnitProductionBuildingVO, __s1param0);
  AUnitProductionBuildingVO.prototype.parseServerObject = function (__s5param0) {
    __s1param0.prototype.parseServerObject.call(this, __s5param0);
    this._productionSpeed = __dep_exact_f855840627e6e145.int(__s5param0.shift());
  };
  AUnitProductionBuildingVO.prototype.cloneFrom = function (__s7param0) {
    __s1param0.prototype.cloneFrom.call(this, __s7param0);
    var __s7local0 = __s7param0;
    if (__s7local0) {
      this._productionSpeed = __s7local0._productionSpeed;
    }
  };
  Object.defineProperty(AUnitProductionBuildingVO.prototype, "unitCategory", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AUnitProductionBuildingVO.prototype, "isProductive", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AUnitProductionBuildingVO.prototype, "isFestivalActive", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.festivalVO.isActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AUnitProductionBuildingVO.prototype, "recruitCategory", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AUnitProductionBuildingVO.prototype, "recruitFilter", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AUnitProductionBuildingVO.prototype, "productionSpeed", {
    get: function () {
      return this._productionSpeed;
    },
    enumerable: true,
    configurable: true
  });
  return AUnitProductionBuildingVO;
}(require("gge-module:export_AProductionBuildingVO").AProductionBuildingVO);
exports.AUnitProductionBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
