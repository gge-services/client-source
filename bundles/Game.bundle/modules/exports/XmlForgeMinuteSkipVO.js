Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function XmlForgeMinuteSkipVO() {
    this._id = -1;
    this._forgeId = -1;
    this._currencyId = -1;
  }
  XmlForgeMinuteSkipVO.prototype.parseXml = function (__s5param0) {
    this._id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("id", __s5param0, -1));
    this._forgeId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("forgeID", __s5param0, -1));
    this._currencyId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("currencyID", __s5param0, -1));
  };
  Object.defineProperty(XmlForgeMinuteSkipVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlForgeMinuteSkipVO.prototype, "forgeId", {
    get: function () {
      return this._forgeId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlForgeMinuteSkipVO.prototype, "currencyId", {
    get: function () {
      return this._currencyId;
    },
    enumerable: true,
    configurable: true
  });
  return XmlForgeMinuteSkipVO;
}();
exports.XmlForgeMinuteSkipVO = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
