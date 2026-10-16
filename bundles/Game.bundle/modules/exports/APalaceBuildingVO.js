Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function (__s1param0) {
  function APalaceBuildingVO() {
    var __s3local0 = this;
    __s3local0._palaceUnlockIds = [];
    __s3local0._damageThreshold = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(APalaceBuildingVO, __s1param0);
  APalaceBuildingVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this._damageThreshold = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("damageTreshold", __s5param0));
    this._palaceUnlockIds = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("palaceUnlockID", __s5param0);
  };
  Object.defineProperty(APalaceBuildingVO.prototype, "palaceUnlockIds", {
    get: function () {
      return this._palaceUnlockIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(APalaceBuildingVO.prototype, "damageThreshold", {
    get: function () {
      return this._damageThreshold;
    },
    enumerable: true,
    configurable: true
  });
  return APalaceBuildingVO;
}(require("gge-module:export_AEffectBuildingVO").AEffectBuildingVO);
exports.APalaceBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
