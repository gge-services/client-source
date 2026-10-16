Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
var __dep_export_AExpandingResourceFieldVO = require("gge-module:export_AExpandingResourceFieldVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function FoodResourceFieldVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._width = 20;
    __s3local0._height = 10;
    __s3local0._resourceType = __dep_export_CollectableEnum.CollectableEnum.FOOD;
    __s3local0._name = __dep_export_ClientConstUtils.ClientConstUtils.capitalizeFirstLetter(__s3local0._resourceType.name);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FoodResourceFieldVO, __s1param0);
  FoodResourceFieldVO.prototype.updatePosition = function () {
    if (this.isoData.areaData.isMyHomeCastle) {
      this._posOrigin = __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.TOP_CORNER;
      this._posOffset = new __s0local0(-2, -16);
    } else {
      this._posOrigin = __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.LEFT_CORNER;
      this._posOffset = new __s0local0(-2, 8);
    }
    __s1param0.prototype.updatePosition.call(this);
  };
  FoodResourceFieldVO.prototype.updateDimension = function () {
    this._totalWidth = this.width * this.fieldAmount;
    this._totalHeight = this.height;
  };
  FoodResourceFieldVO.prototype.updateSpawnPoints = function () {
    this._spawnPoints.length = 0;
    for (var __s11local0 = 0; __s11local0 < this.fieldAmount; ++__s11local0) {
      this._spawnPoints.push(new __s0local0(9 + this.width * __s11local0, 3));
    }
  };
  FoodResourceFieldVO.prototype.updateWalkmap = function () {
    __s1param0.prototype.updateWalkmap.call(this);
    for (var __s15local0 = 0; __s15local0 < this.fieldAmount; ++__s15local0) {
      var __s15local1 = 0;
      var __s15local2 = __dep_exact_f855840627e6e145.int(this.width - 1 + this.width * __s15local0);
      for (__s15local1 = 0; __s15local1 < this.height; ++__s15local1) {
        this.walkmap[__s15local1][__s15local2] = true;
      }
      var __s15local3 = __dep_exact_f855840627e6e145.int(9 + this.width * __s15local0);
      for (__s15local1 = 0; __s15local1 < 4; ++__s15local1) {
        this.walkmap[__s15local1][__s15local3] = true;
      }
    }
  };
  FoodResourceFieldVO.prototype.getFieldAmount = function () {
    return __dep_exact_f855840627e6e145.int(this.isoData.grid.origins.groundDimension.x / this.width);
  };
  FoodResourceFieldVO.prototype.getLastPartStartOffset = function () {
    return new __s0local0(this.posOffset.x + this.fieldAmount * this.width, this.posOffset.y + this.height);
  };
  FoodResourceFieldVO.prototype.getWorkPointsByIndex = function (__s27param0) {
    var __s27local0 = __dep_exact_f855840627e6e145.int(this.width * __s27param0);
    return [new __s0local0(5 + __s27local0, 5), new __s0local0(13 + __s27local0, 5)];
  };
  return FoodResourceFieldVO;
}(__dep_export_AExpandingResourceFieldVO.AExpandingResourceFieldVO);
exports.FoodResourceFieldVO = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IRelativeGridBuildingVO");
