Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function XmlRelicEnchanterVO() {
    this._level = 0;
    this._relicNormalEffectBoost = NaN;
    this._chance = NaN;
    this._c1Cost = 0;
    this._c2Cost = 0;
    this._costRelicFragments = 0;
  }
  XmlRelicEnchanterVO.prototype.parseXml = function (__s5param0) {
    this._level = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("level", __s5param0));
    this._relicNormalEffectBoost = __dep_export_CastleXMLUtils.CastleXMLUtils.getNumberAttribute("relicNormalEffectBoost", __s5param0);
    this._chance = __dep_export_CastleXMLUtils.CastleXMLUtils.getNumberAttribute("chance", __s5param0);
    this._c1Cost = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("c1Cost", __s5param0));
    this._c2Cost = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("c2Cost", __s5param0));
    this._costRelicFragments = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("costRelicFragment", __s5param0));
  };
  Object.defineProperty(XmlRelicEnchanterVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicEnchanterVO.prototype, "relicNormalEffectBoost", {
    get: function () {
      return this._relicNormalEffectBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicEnchanterVO.prototype, "chance", {
    get: function () {
      return this._chance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicEnchanterVO.prototype, "c1Cost", {
    get: function () {
      return this._c1Cost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicEnchanterVO.prototype, "c2Cost", {
    get: function () {
      return this._c2Cost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicEnchanterVO.prototype, "costRelicFragments", {
    get: function () {
      return this._costRelicFragments;
    },
    enumerable: true,
    configurable: true
  });
  return XmlRelicEnchanterVO;
}();
exports.XmlRelicEnchanterVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IXmlElementVO");
