Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function ABGAllianceTowerEffectActivationVO() {
    this.allianceTowerEffectsActivationID = 0;
    this.remainingTime = 0;
    this.costC2 = 0;
  }
  ABGAllianceTowerEffectActivationVO.prototype.parseXML = function (__s5param0) {
    this.allianceTowerEffectsActivationID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("allianceTowerEffectsActivationID", __s5param0));
    this.remainingTime = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("remainingTime", __s5param0));
    this.costC2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("cost", __s5param0));
  };
  return ABGAllianceTowerEffectActivationVO;
}();
exports.ABGAllianceTowerEffectActivationVO = __s0local0;
