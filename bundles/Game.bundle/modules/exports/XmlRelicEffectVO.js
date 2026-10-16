Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function XmlRelicEffectVO() {
    this._id = 0;
    this._effectId = 0;
    this._minValue = NaN;
    this._maxValue = NaN;
  }
  XmlRelicEffectVO.prototype.parseXml = function (__s5param0) {
    this._id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("id", __s5param0, -1));
    this._effectId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("effectID", __s5param0, -1));
    this._minValue = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("minimumValue", __s5param0, -1);
    this._maxValue = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("maximumValue", __s5param0, -1);
    this._effectType = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("relicEffectType", __s5param0);
    this._valueTextType = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("valueTextType", __s5param0);
  };
  Object.defineProperty(XmlRelicEffectVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicEffectVO.prototype, "effectId", {
    get: function () {
      return this._effectId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicEffectVO.prototype, "minValue", {
    get: function () {
      return this._minValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicEffectVO.prototype, "maxValue", {
    get: function () {
      return this._maxValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicEffectVO.prototype, "effectType", {
    get: function () {
      return this._effectType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicEffectVO.prototype, "valueTextType", {
    get: function () {
      return this._valueTextType;
    },
    enumerable: true,
    configurable: true
  });
  XmlRelicEffectVO.EFFECT_TYPE_NORMAL = "normal";
  XmlRelicEffectVO.EFFECT_TYPE_UNIT_TOOL = "unitTool";
  XmlRelicEffectVO.EFFECT_TYPE_SORT_ORDER = [XmlRelicEffectVO.EFFECT_TYPE_NORMAL, XmlRelicEffectVO.EFFECT_TYPE_UNIT_TOOL, "economy"];
  XmlRelicEffectVO.VALUE_TYPE_INCREASE = "relicIncrease";
  XmlRelicEffectVO.VALUE_TYPE_DECREASE = "relicDecrease";
  return XmlRelicEffectVO;
}();
exports.XmlRelicEffectVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IXmlElementVO");
