Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function XmlWorldmapSkinVO() {
    this._id = 0;
    this._definesMoat = false;
    this._definesAllCastleLevels = false;
    this._definesResources = false;
    this._increasedSize = false;
  }
  XmlWorldmapSkinVO.prototype.parseXml = function (__s5param0) {
    this._id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("skinID", __s5param0, -1));
    this._name = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("name", __s5param0);
    this._definesMoat = __dep_export_CastleXMLUtils.CastleXMLUtils.getBooleanAttribute("definesMoat", __s5param0);
    this._definesAllCastleLevels = __dep_export_CastleXMLUtils.CastleXMLUtils.getBooleanAttribute("definesAllCastleLevels", __s5param0);
    this._definesResources = __dep_export_CastleXMLUtils.CastleXMLUtils.getBooleanAttribute("definesResources", __s5param0);
    this._increasedSize = __dep_export_CastleXMLUtils.CastleXMLUtils.getBooleanAttribute("increasedSize", __s5param0);
  };
  Object.defineProperty(XmlWorldmapSkinVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlWorldmapSkinVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlWorldmapSkinVO.prototype, "definesMoat", {
    get: function () {
      return this._definesMoat;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlWorldmapSkinVO.prototype, "definesAllCastleLevels", {
    get: function () {
      return this._definesAllCastleLevels;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlWorldmapSkinVO.prototype, "definesResources", {
    get: function () {
      return this._definesResources;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlWorldmapSkinVO.prototype, "increasedSize", {
    get: function () {
      return this._increasedSize;
    },
    enumerable: true,
    configurable: true
  });
  return XmlWorldmapSkinVO;
}();
exports.XmlWorldmapSkinVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IXmlElementVO");
