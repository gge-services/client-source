Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function XmlFusionCostSequenceVO() {
    this._id = -1;
    this._forgeId = -1;
    this._fusionTargetLevelIterationIndex = -1;
    this._costJSONKey = "";
    this._costAmount = 0;
  }
  XmlFusionCostSequenceVO.prototype.parseXml = function (__s5param0) {
    this._id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("id", __s5param0, -1));
    this._forgeId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("forgeID", __s5param0, -1));
    this._fusionTargetLevelIterationIndex = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("fusionTargetLevelIterationIndex", __s5param0, -1));
    this._costJSONKey = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("costJSONKey", __s5param0, "");
    this._costAmount = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("costAmount", __s5param0, 0));
  };
  Object.defineProperty(XmlFusionCostSequenceVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionCostSequenceVO.prototype, "forgeId", {
    get: function () {
      return this._forgeId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionCostSequenceVO.prototype, "fusionTargetLevelIterationIndex", {
    get: function () {
      return this._fusionTargetLevelIterationIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionCostSequenceVO.prototype, "costJSONKey", {
    get: function () {
      return this._costJSONKey;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionCostSequenceVO.prototype, "costAmount", {
    get: function () {
      return this._costAmount;
    },
    enumerable: true,
    configurable: true
  });
  return XmlFusionCostSequenceVO;
}();
exports.XmlFusionCostSequenceVO = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
