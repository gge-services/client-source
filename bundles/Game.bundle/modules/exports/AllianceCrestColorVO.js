Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function AllianceCrestColorVO() {
    this._allianceCoatColorID = -1;
  }
  AllianceCrestColorVO.prototype.parseXML = function (__s5param0) {
    this._allianceCoatColorID = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("allianceCoatColorID", __s5param0);
    this._color = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("color", __s5param0);
  };
  Object.defineProperty(AllianceCrestColorVO.prototype, "allianceCoatColorID", {
    get: function () {
      return this._allianceCoatColorID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestColorVO.prototype, "color", {
    get: function () {
      return this._color;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceCrestColorVO;
}();
exports.AllianceCrestColorVO = __s0local0;
