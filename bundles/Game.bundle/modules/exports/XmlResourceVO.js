Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __s0local0 = function () {
  function XmlResourceVO() {
    this._resourceID = -1;
    this._name = "";
  }
  XmlResourceVO.prototype.parseXml = function (__s5param0) {
    this._resourceID = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("resourceID", __s5param0, -1));
    this._name = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("name", __s5param0, "");
  };
  Object.defineProperty(XmlResourceVO.prototype, "resourceID", {
    get: function () {
      return this._resourceID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlResourceVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlResourceVO.prototype, "resourceEnum", {
    get: function () {
      return __dep_export_CollectableEnum.CollectableEnum.getTypeByXmlKey(this.name);
    },
    enumerable: true,
    configurable: true
  });
  return XmlResourceVO;
}();
exports.XmlResourceVO = __s0local0;
