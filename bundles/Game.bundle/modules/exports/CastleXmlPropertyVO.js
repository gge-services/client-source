Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleXmlPropertyVO() {
    this._id = -1;
    this._value = 0;
  }
  CastleXmlPropertyVO.prototype.fillByXmlNode = function (__s5param0) {
    this._id = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("propertyID", __s5param0, "-1", true));
    this._name = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("name", __s5param0, "", false);
    this._value = parseFloat(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("value", __s5param0, "0", true));
  };
  Object.defineProperty(CastleXmlPropertyVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleXmlPropertyVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleXmlPropertyVO.prototype, "value", {
    get: function () {
      return this._value;
    },
    enumerable: true,
    configurable: true
  });
  return CastleXmlPropertyVO;
}();
exports.CastleXmlPropertyVO = __s0local0;
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
