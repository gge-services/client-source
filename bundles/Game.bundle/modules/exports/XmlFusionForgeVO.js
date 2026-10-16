Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function XmlFusionForgeVO() {
    this._forgeId = -1;
    this._dustCurrencyID = 0;
    this._usableMinuteSkipsPerDay = 0;
  }
  XmlFusionForgeVO.prototype.parseXml = function (__s5param0) {
    this._forgeId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("forgeID", __s5param0, -1));
    this._dustCurrencyID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("dustCurrencyID", __s5param0, 0));
    this._usableMinuteSkipsPerDay = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("usableMinuteSkipsPerDay", __s5param0, 0));
  };
  Object.defineProperty(XmlFusionForgeVO.prototype, "forgeId", {
    get: function () {
      return this._forgeId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionForgeVO.prototype, "dustCurrencyID", {
    get: function () {
      return this._dustCurrencyID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionForgeVO.prototype, "usableMinuteSkipsPerDay", {
    get: function () {
      return this._usableMinuteSkipsPerDay;
    },
    enumerable: true,
    configurable: true
  });
  return XmlFusionForgeVO;
}();
exports.XmlFusionForgeVO = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
