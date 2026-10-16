Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function () {
  function ClientConstKingdom() {}
  ClientConstKingdom.getVillageTypeName = function (__s5param0) {
    switch (__s5param0) {
      case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_WOOD:
        return "Wood";
      case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_STONE:
        return "Stone";
      case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_FOOD:
        return "Food";
      case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_COAL:
        return "Coal";
      case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_OIL:
        return "Oil";
      case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_GLASS:
        return "Glass";
      case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_IRON:
        return "Iron";
      default:
        return "Invalid";
    }
  };
  return ClientConstKingdom;
}();
exports.ClientConstKingdom = __s0local0;
