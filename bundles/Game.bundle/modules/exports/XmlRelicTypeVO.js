Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function XmlRelicTypeVO() {
    this._id = 0;
    this._wearerId = 0;
    this._slotId = 0;
    this._isGem = false;
  }
  XmlRelicTypeVO.prototype.parseXml = function (__s5param0) {
    this._id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("id", __s5param0, -1));
    this._name = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("name", __s5param0);
    this._wearerId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("wearerID", __s5param0, -1));
    this._slotId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("slotID", __s5param0, -1));
    this._isGem = __dep_export_CastleXMLUtils.CastleXMLUtils.getBooleanAttribute("isGem", __s5param0);
    this._canBeSlottedInSlotIds = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("canBeSlottedInSlotIDs", __s5param0);
  };
  Object.defineProperty(XmlRelicTypeVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicTypeVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicTypeVO.prototype, "wearerId", {
    get: function () {
      return this._wearerId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicTypeVO.prototype, "slotId", {
    get: function () {
      return this._slotId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicTypeVO.prototype, "isGem", {
    get: function () {
      return this._isGem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicTypeVO.prototype, "canBeSlottedInSlotIds", {
    get: function () {
      return this._canBeSlottedInSlotIds;
    },
    enumerable: true,
    configurable: true
  });
  return XmlRelicTypeVO;
}();
exports.XmlRelicTypeVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IXmlElementVO");
