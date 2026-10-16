Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function (__s1param0) {
  function KingdomCastleMapobjectVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.name = "KingdomCastle";
    __s3local0.group = "Mapobject";
    __s3local0._areaType = __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_KINGDOM_CASTLE;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(KingdomCastleMapobjectVO, __s1param0);
  return KingdomCastleMapobjectVO;
}(require("gge-module:export_CastleMapobjectVO").CastleMapobjectVO);
exports.KingdomCastleMapobjectVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO");
