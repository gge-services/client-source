Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function XmlEquipmentGroupVO() {
    this._id = 0;
    this._wearerId = 0;
    this._slotId = 0;
    this._picId = 0;
    this._dropRate = 0;
  }
  XmlEquipmentGroupVO.prototype.parseXml = function (__s5param0) {
    this._id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("itemGroupID", __s5param0, -1));
    this._name = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("name", __s5param0);
    this._wearerId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("wearerID", __s5param0, -1));
    this._slotId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("slotID", __s5param0, -1));
    this._picId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("picID", __s5param0, -1));
    this._dropRate = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("dropRate", __s5param0, -1));
  };
  Object.defineProperty(XmlEquipmentGroupVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentGroupVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentGroupVO.prototype, "wearerId", {
    get: function () {
      return this._wearerId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentGroupVO.prototype, "slotId", {
    get: function () {
      return this._slotId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentGroupVO.prototype, "picId", {
    get: function () {
      return this._picId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlEquipmentGroupVO.prototype, "dropRate", {
    get: function () {
      return this._dropRate;
    },
    enumerable: true,
    configurable: true
  });
  return XmlEquipmentGroupVO;
}();
exports.XmlEquipmentGroupVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IXmlElementVO");
