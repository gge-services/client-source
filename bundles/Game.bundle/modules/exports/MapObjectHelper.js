Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function MapObjectHelper() {}
  MapObjectHelper.isLandmark = function (__s5param0) {
    switch (__s5param0.areaType) {
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_METROPOL:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_CAPITAL:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_KINGS_TOWER:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_MONUMENT:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_LABORATORY:
        return true;
      default:
        return false;
    }
  };
  return MapObjectHelper;
}();
exports.MapObjectHelper = __s0local0;
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
