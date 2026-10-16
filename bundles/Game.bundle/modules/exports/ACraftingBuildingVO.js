Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function (__s1param0) {
  function ACraftingBuildingVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACraftingBuildingVO, __s1param0);
  ACraftingBuildingVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this._craftingQueueId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("craftingQueueId", __s5param0));
  };
  Object.defineProperty(ACraftingBuildingVO.prototype, "craftingQueueId", {
    get: function () {
      return this._craftingQueueId;
    },
    enumerable: true,
    configurable: true
  });
  return ACraftingBuildingVO;
}(require("gge-module:export_AEffectBuildingVO").AEffectBuildingVO);
exports.ACraftingBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
