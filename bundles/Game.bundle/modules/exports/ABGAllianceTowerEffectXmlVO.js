Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function ABGAllianceTowerEffectXmlVO() {
    this.allianceTowerEffectID = 0;
    this.effectID = 0;
    this.effectBasePrice = 0;
    this.effectMaxLevel = 0;
    this.effectStartValue = NaN;
    this.effectIncrease = NaN;
  }
  ABGAllianceTowerEffectXmlVO.prototype.parseXML = function (__s5param0) {
    this.allianceTowerEffectID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("allianceTowerEffectID", __s5param0));
    this.effectID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("effectID", __s5param0));
    this._effectVO = __dep_export_CastleModel.CastleModel.effectsData.getEffectByID(this.effectID);
    this.effectBasePrice = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("effectBasePrice", __s5param0));
    this.effectMaxLevel = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("effectMaxLevel", __s5param0));
    this.effectStartValue = __dep_export_CastleXMLUtils.CastleXMLUtils.getNumberAttribute("effectStartValue", __s5param0);
    this.effectIncrease = __dep_export_CastleXMLUtils.CastleXMLUtils.getNumberAttribute("effectIncrease", __s5param0);
  };
  Object.defineProperty(ABGAllianceTowerEffectXmlVO.prototype, "effectVO", {
    get: function () {
      return this._effectVO;
    },
    enumerable: true,
    configurable: true
  });
  return ABGAllianceTowerEffectXmlVO;
}();
exports.ABGAllianceTowerEffectXmlVO = __s0local0;
