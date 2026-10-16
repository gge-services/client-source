Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function EffectCapVO() {
    this._id = 0;
    this._maxTotalBonus = 0;
  }
  EffectCapVO.prototype.parseXml = function (__s5param0) {
    this._id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("capID", __s5param0, -1));
    this._maxTotalBonus = __dep_exact_f855840627e6e145.int(__s5param0.maxTotalBonus) || Number.MAX_VALUE;
  };
  Object.defineProperty(EffectCapVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectCapVO.prototype, "maxTotalBonus", {
    get: function () {
      return this._maxTotalBonus;
    },
    enumerable: true,
    configurable: true
  });
  return EffectCapVO;
}();
exports.EffectCapVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IXmlElementVO");
