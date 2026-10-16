Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function XmlCurrencyVO() {
    this._id = -1;
    this._name = "";
    this._jsonKey = "";
    this._assetName = "";
    this._softCap = -1;
    this._hardCap = -1;
    this._rareness = -1;
    this._minutesSkipValue = -1;
    this._tier = -1;
  }
  XmlCurrencyVO.prototype.parseXml = function (__s5param0) {
    this._id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("currencyID", __s5param0, -1));
    this._name = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("Name", __s5param0, "");
    this._jsonKey = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("JSONKey", __s5param0, "");
    this._assetName = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("assetName", __s5param0, "");
    this._tier = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstUtils.ClientConstUtils.getSuffixNumberFromString(this._name));
  };
  XmlCurrencyVO.prototype.parseXmlCaps = function (__s7param0) {
    this._softCap = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("softCap", __s7param0, -1));
    this._hardCap = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("hardCap", __s7param0, -1));
  };
  XmlCurrencyVO.prototype.parseXmlRareness = function (__s9param0) {
    this._rareness = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("rareness", __s9param0, -1));
  };
  XmlCurrencyVO.prototype.parseXmlMinutesSkipValues = function (__s11param0) {
    this._minutesSkipValue = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("MinutesSkipValue", __s11param0, -1));
  };
  XmlCurrencyVO.prototype.parseXmlHiddenLists = function (__s13param0) {
    this._isHidden = true;
  };
  Object.defineProperty(XmlCurrencyVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCurrencyVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCurrencyVO.prototype, "jsonKey", {
    get: function () {
      return this._jsonKey;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCurrencyVO.prototype, "assetName", {
    get: function () {
      return this._assetName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCurrencyVO.prototype, "softCap", {
    get: function () {
      return this._softCap;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCurrencyVO.prototype, "hardCap", {
    get: function () {
      return this._hardCap;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCurrencyVO.prototype, "rareness", {
    get: function () {
      return this._rareness;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCurrencyVO.prototype, "minutesSkipValue", {
    get: function () {
      return this._minutesSkipValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCurrencyVO.prototype, "tier", {
    get: function () {
      return this._tier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCurrencyVO.prototype, "isHidden", {
    get: function () {
      return this._isHidden;
    },
    enumerable: true,
    configurable: true
  });
  return XmlCurrencyVO;
}();
exports.XmlCurrencyVO = __s0local0;
