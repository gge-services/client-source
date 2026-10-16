Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function XmlCurrencyRangeVO() {
    this._typeID = -1;
    this._typeName = "";
    this._currencyIDRange = [];
  }
  XmlCurrencyRangeVO.prototype.parseXml = function (__s5param0) {
    this._typeID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("typeID", __s5param0, -1));
    this._typeName = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("typeName", __s5param0, "");
    this._currencyIDRange = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("currencyIDRange", __s5param0, "").split("-");
    this._currencyIDRange = [parseInt(this._currencyIDRange[0]), parseInt(this._currencyIDRange[1])];
  };
  Object.defineProperty(XmlCurrencyRangeVO.prototype, "typeID", {
    get: function () {
      return this._typeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCurrencyRangeVO.prototype, "typeName", {
    get: function () {
      return this._typeName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlCurrencyRangeVO.prototype, "currencyIDRange", {
    get: function () {
      return this._currencyIDRange;
    },
    enumerable: true,
    configurable: true
  });
  return XmlCurrencyRangeVO;
}();
exports.XmlCurrencyRangeVO = __s0local0;
