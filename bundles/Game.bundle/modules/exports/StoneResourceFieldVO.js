Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
var __dep_export_AExpandingResourceFieldVO = require("gge-module:export_AExpandingResourceFieldVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function StoneResourceFieldVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._width = 10;
    __s3local0._height = 20;
    __s3local0._resourceType = __dep_export_CollectableEnum.CollectableEnum.STONE;
    __s3local0._name = __dep_export_ClientConstUtils.ClientConstUtils.capitalizeFirstLetter(__s3local0._resourceType.name);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StoneResourceFieldVO, __s1param0);
  StoneResourceFieldVO.prototype.updatePosition = function () {
    if (this.isoData.areaData.isMyHomeCastle) {
      this._posOrigin = __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.TOP_CORNER;
      this._posOffset = new __s0local0(-16, 0);
    } else {
      this._posOrigin = __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.RIGHT_CORNER;
      this._posOffset = new __s0local0(8, -2);
    }
    __s1param0.prototype.updatePosition.call(this);
  };
  StoneResourceFieldVO.prototype.updateDimension = function () {
    this._totalWidth = this.width;
    this._totalHeight = this.height * this.fieldAmount;
  };
  StoneResourceFieldVO.prototype.updateSpawnPoints = function () {
    this._spawnPoints.length = 0;
    for (var __s11local0 = 0; __s11local0 < this.fieldAmount; ++__s11local0) {
      this._spawnPoints.push(new __s0local0(0, 9 + this.height * __s11local0));
    }
  };
  StoneResourceFieldVO.prototype.updateWalkmap = function () {
    __s1param0.prototype.updateWalkmap.call(this);
    for (var __s15local0 = 0; __s15local0 < this.fieldAmount; ++__s15local0) {
      var __s15local1 = 0;
      var __s15local2 = __dep_exact_f855840627e6e145.int(this.height - 1 + this.height * __s15local0);
      for (__s15local1 = 0; __s15local1 < this.width; ++__s15local1) {
        this.walkmap[__s15local2][__s15local1] = true;
      }
      var __s15local3 = __dep_exact_f855840627e6e145.int(9 + this.height * __s15local0);
      for (__s15local1 = 0; __s15local1 < 1; ++__s15local1) {
        this.walkmap[__s15local3][__s15local1] = true;
      }
    }
  };
  StoneResourceFieldVO.prototype.getFieldAmount = function () {
    return __dep_exact_f855840627e6e145.int(this.isoData.grid.origins.groundDimension.y / this.height);
  };
  StoneResourceFieldVO.prototype.getLastPartStartOffset = function () {
    return new __s0local0(this.posOffset.x + this.width, this.posOffset.y + this.fieldAmount * this.height);
  };
  StoneResourceFieldVO.prototype.getWorkPointsByIndex = function (__s27param0) {
    var __s27local0 = [];
    if (this.isoData.areaData.areaInfo.kingdomID == __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID) {
      var __s27local1 = __dep_exact_f855840627e6e145.int(this.getGfxLevel());
      if (__s27local1 == 1) {
        __s27local0.push(new __s0local0(1, 5));
        __s27local0.push(new __s0local0(5, 17));
      } else if (__s27local1 == 2) {
        __s27local0.push(new __s0local0(4, 7));
        __s27local0.push(new __s0local0(7, 16));
      } else if (__s27local1 == 3) {
        __s27local0.push(new __s0local0(3, 8));
        __s27local0.push(new __s0local0(4, 19));
      }
    } else if (this.isoData.areaData.isKingdomCastle) {
      __s27local0.push(new __s0local0(3, 17));
      __s27local0.push(new __s0local0(5, 3));
    }
    var __s27local2 = __dep_exact_f855840627e6e145.int(this.height * __s27param0);
    for (var __s27local3 = 0; __s27local3 < __s27local0.length; ++__s27local3) {
      __s27local0[__s27local3].y += __s27local2;
    }
    return __s27local0;
  };
  return StoneResourceFieldVO;
}(__dep_export_AExpandingResourceFieldVO.AExpandingResourceFieldVO);
exports.StoneResourceFieldVO = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IRelativeGridBuildingVO");
