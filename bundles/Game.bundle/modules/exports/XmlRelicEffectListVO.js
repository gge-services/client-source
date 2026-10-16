Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function XmlRelicEffectListVO() {
    this._id = 0;
  }
  XmlRelicEffectListVO.prototype.parseXml = function (__s5param0) {
    this._id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("id", __s5param0, -1));
    this._relicEffectIds = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("relicEffectIDs", __s5param0);
  };
  Object.defineProperty(XmlRelicEffectListVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlRelicEffectListVO.prototype, "relicEffectIds", {
    get: function () {
      return this._relicEffectIds;
    },
    enumerable: true,
    configurable: true
  });
  return XmlRelicEffectListVO;
}();
exports.XmlRelicEffectListVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IXmlElementVO");
