Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function XmlRelicBluePrintVO() {
    this._id = 0;
    this._relicTypeId = 0;
    this._normalAmount = 0;
    this._specialAmount = 0;
    this._normalRelicEffectListId = 0;
    this._specialRelicEffectListId = 0;
    this._baseRelicEffectIds = [];
  }
  XmlRelicBluePrintVO.prototype.parseXml = function (__s5param0) {
    this._id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("id", __s5param0, -1));
    this._relicTypeId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("relicTypeID", __s5param0, -1));
    this._normalAmount = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("normalAmount", __s5param0, -1));
    this._specialAmount = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("specialAmount", __s5param0, -1));
    this._normalRelicEffectListId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("normalRelicEffectListID", __s5param0, -1));
    this._specialRelicEffectListId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("specialRelicEffectListID", __s5param0, -1));
    this._baseRelicEffectIds = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("baseRelicEffectIDs", __s5param0);
  };
  Object.defineProperty(XmlRelicBluePrintVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicBluePrintVO.prototype, "relicTypeId", {
    get: function () {
      return this._relicTypeId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicBluePrintVO.prototype, "normalAmount", {
    get: function () {
      return this._normalAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicBluePrintVO.prototype, "specialAmount", {
    get: function () {
      return this._specialAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicBluePrintVO.prototype, "normalRelicEffectListId", {
    get: function () {
      return this._normalRelicEffectListId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicBluePrintVO.prototype, "specialRelicEffectListId", {
    get: function () {
      return this._specialRelicEffectListId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicBluePrintVO.prototype, "baseRelicEffectIds", {
    get: function () {
      return this._baseRelicEffectIds;
    },
    enumerable: true,
    configurable: true
  });
  return XmlRelicBluePrintVO;
}();
exports.XmlRelicBluePrintVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IXmlElementVO");
