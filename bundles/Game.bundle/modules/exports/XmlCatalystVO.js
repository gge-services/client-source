Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function XmlCatalystVO() {
    this._currencyId = -1;
    this._forgeId = -1;
    this._deprecated = false;
    this._maxUsableFusionLevel = 0;
    this._tier = 0;
    this._addDecoDust = 0;
    this._costDecoDust = 0;
  }
  XmlCatalystVO.prototype.parseXml = function (__s5param0) {
    this._currencyId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("currencyID", __s5param0, -1));
    this._forgeId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("forgeID", __s5param0, -1));
    this._deprecated = __dep_export_CastleXMLUtils.CastleXMLUtils.getBooleanAttribute("deprecated", __s5param0, false);
    this._maxUsableFusionLevel = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("maxUsableFusionLevel", __s5param0, 0));
    this._tier = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("tier", __s5param0, 0));
    this._addDecoDust = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("addDecoDust", __s5param0, 0));
    this._costDecoDust = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("costDecoDust", __s5param0, 0));
  };
  Object.defineProperty(XmlCatalystVO.prototype, "currencyId", {
    get: function () {
      return this._currencyId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCatalystVO.prototype, "forgeId", {
    get: function () {
      return this._forgeId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCatalystVO.prototype, "deprecated", {
    get: function () {
      return this._deprecated;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCatalystVO.prototype, "maxUsableFusionLevel", {
    get: function () {
      return this._maxUsableFusionLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCatalystVO.prototype, "tier", {
    get: function () {
      return this._tier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCatalystVO.prototype, "addDecoDust", {
    get: function () {
      return this._addDecoDust;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCatalystVO.prototype, "costDecoDust", {
    get: function () {
      return this._costDecoDust;
    },
    enumerable: true,
    configurable: true
  });
  return XmlCatalystVO;
}();
exports.XmlCatalystVO = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
