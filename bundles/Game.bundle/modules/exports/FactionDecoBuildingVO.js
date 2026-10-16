Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function FactionDecoBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionDecoBuildingVO, __s1param0);
  FactionDecoBuildingVO.prototype.getShortInfoString = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text(this.morality > 0 ? "deco_moral_short_info" : "deco_short_info");
  };
  FactionDecoBuildingVO.prototype.isFusionRelevant = function () {
    return false;
  };
  return FactionDecoBuildingVO;
}(require("gge-module:export_DecoBuildingVO").DecoBuildingVO);
exports.FactionDecoBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO", "IUniqueBuildingVO");
