Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function XmlRelicEffectPowerRatingVO() {
    this._id = 0;
    this._threshold = 0;
  }
  XmlRelicEffectPowerRatingVO.prototype.parseXml = function (__s5param0) {
    this._id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("id", __s5param0, -1));
    this._threshold = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("threshold", __s5param0, -1));
  };
  Object.defineProperty(XmlRelicEffectPowerRatingVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicEffectPowerRatingVO.prototype, "threshold", {
    get: function () {
      return this._threshold;
    },
    enumerable: true,
    configurable: true
  });
  return XmlRelicEffectPowerRatingVO;
}();
exports.XmlRelicEffectPowerRatingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IXmlElementVO");
