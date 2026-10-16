Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function UnknownUnitVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UnknownUnitVO, __s1param0);
  UnknownUnitVO.prototype.getNameString = function () {
    return "Unknown_name";
  };
  return UnknownUnitVO;
}(require("gge-module:export_BasicUnitVO").BasicUnitVO);
exports.UnknownUnitVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IInventoryVO", "IShopVO", "ICostVO");
