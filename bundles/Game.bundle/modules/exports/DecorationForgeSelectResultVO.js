Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function DecorationForgeSelectResultVO(__s3param0 = null, __s3param1 = -1, __s3param2 = -1) {
    this.kingdomId = -1;
    this.areaId = -1;
    this.itemVO = __s3param0;
    this.kingdomId = __s3param1;
    this.areaId = __s3param2;
  }
  DecorationForgeSelectResultVO.prototype.equals = function (__s5param0) {
    return !!__s5param0 && this.kingdomId == __s5param0.kingdomId && this.areaId == __s5param0.areaId && this.itemVO.equals(__s5param0.itemVO);
  };
  DecorationForgeSelectResultVO.prototype.getBuildingFusionInfoVO = function () {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.itemVO, "CollectableItemBuildingVO")) {
      var __s7local0 = this.itemVO.buildingVO;
      if (__s7local0) {
        return __s7local0.fusionInfoVO;
      }
    }
    return null;
  };
  DecorationForgeSelectResultVO.prototype.getDecoBuildingVO = function () {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.itemVO, "CollectableItemBuildingVO")) {
      return this.itemVO.buildingVO;
    } else {
      return null;
    }
  };
  DecorationForgeSelectResultVO.prototype.getCatalystVO = function () {
    return this.itemVO;
  };
  return DecorationForgeSelectResultVO;
}();
exports.DecorationForgeSelectResultVO = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
