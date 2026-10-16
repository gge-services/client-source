Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function XmlEquipmentRarenessVO() {
    this._id = 0;
    this._secondaryAttributes = 0;
    this._saleValue = 0;
    this._mightValue = 0;
  }
  XmlEquipmentRarenessVO.prototype.parseXml = function (__s5param0) {
    this._id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("rarenessID", __s5param0, -1));
    this._name = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("name", __s5param0);
    this._secondaryAttributes = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("secondaryAttributes", __s5param0));
    this._saleValue = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("saleValue", __s5param0, -1));
    this._mightValue = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("mightValue", __s5param0, -1));
    this._slotIds = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("slotIDs", __s5param0);
  };
  Object.defineProperty(XmlEquipmentRarenessVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentRarenessVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentRarenessVO.prototype, "secondaryAttributes", {
    get: function () {
      return this._secondaryAttributes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentRarenessVO.prototype, "saleValue", {
    get: function () {
      return this._saleValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentRarenessVO.prototype, "mightValue", {
    get: function () {
      return this._mightValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentRarenessVO.prototype, "slotIds", {
    get: function () {
      return this._slotIds;
    },
    enumerable: true,
    configurable: true
  });
  return XmlEquipmentRarenessVO;
}();
exports.XmlEquipmentRarenessVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IXmlElementVO");
