Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function XmlRelicPowerDistributionVO() {
    this._power = 0;
    this._shares = 0;
  }
  XmlRelicPowerDistributionVO.prototype.parseXml = function (__s5param0) {
    this._power = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("power", __s5param0, -1));
    this._shares = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("shares", __s5param0, -1));
  };
  Object.defineProperty(XmlRelicPowerDistributionVO.prototype, "power", {
    get: function () {
      return this._power;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicPowerDistributionVO.prototype, "shares", {
    get: function () {
      return this._shares;
    },
    enumerable: true,
    configurable: true
  });
  return XmlRelicPowerDistributionVO;
}();
exports.XmlRelicPowerDistributionVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IXmlElementVO");
