Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_IsoGridOriginEnum = require("gge-module:export_IsoGridOriginEnum");
var __dep_export_AResourceFieldVO = require("gge-module:export_AResourceFieldVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function WoodResourceFieldVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._resourceType = __dep_export_CollectableEnum.CollectableEnum.WOOD;
    __s3local0._name = __dep_export_ClientConstUtils.ClientConstUtils.capitalizeFirstLetter(__s3local0._resourceType.name);
    __s3local0._posOrigin = __dep_export_IsoGridOriginEnum.IsoGridOriginEnum.TOP_CORNER;
    __s3local0._width = 40;
    __s3local0._height = 40;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(WoodResourceFieldVO, __s1param0);
  WoodResourceFieldVO.prototype.updatePosition = function () {
    if (this.isoData.areaData.isMyHomeCastle) {
      this._posOffset = new __s0local0(-20, -20);
    } else {
      this._posOffset = new __s0local0(-12, -12);
    }
    if (this.isoData.areaData.isMyHomeCastle) {
      this._width = 40;
      this._height = 40;
    } else {
      this._width = 1;
      this._height = 1;
    }
    __s1param0.prototype.updatePosition.call(this);
  };
  WoodResourceFieldVO.prototype.updateSpawnPoints = function () {
    this._spawnPoints = [new __s0local0(0, -2), new __s0local0(-1, 46), new __s0local0(16, -2), new __s0local0(-9, 14)];
  };
  WoodResourceFieldVO.prototype.updateWalkmap = function () {
    this._walkmapOffset.x = -20;
    this._walkmapOffset.y = -20;
    if (this.isoData.areaData.isMyHomeCastle) {
      this._walkmap = new Array(this.rotatedHeight);
      for (var __s13local0 = 0; __s13local0 < this._walkmap.length; ++__s13local0) {
        this._walkmap[__s13local0] = Array(this.rotatedHeight).fill(0);
        for (var __s13local1 = 0; __s13local1 < this._walkmap[__s13local0].length; ++__s13local1) {
          this._walkmap[__s13local0][__s13local1] = true;
        }
      }
      var __s13local2 = new __s0local0(this.width + this._walkmapOffset.x, this.height + this._walkmapOffset.y);
      if (this._walkmap.length > 0) {
        for (__s13local0 = 0; __s13local0 < 19; ++__s13local0) {
          this._walkmap[__s13local2.y - __s13local0][__s13local2.x + 5] = false;
        }
      }
    } else {
      this._walkmap = __dep_export_IsoHelper.IsoHelper.walkmap.createWalkmapFullBlocked(new __s0local0(1, 1));
    }
  };
  return WoodResourceFieldVO;
}(__dep_export_AResourceFieldVO.AResourceFieldVO);
exports.WoodResourceFieldVO = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IRelativeGridBuildingVO");
