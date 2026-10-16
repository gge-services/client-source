Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function XmlSeasonMedalVO() {
    this._id = 0;
    this._minHighscoreRank = 0;
    this._medalPoints = 0;
  }
  XmlSeasonMedalVO.prototype.parseXml = function (__s5param0) {
    this._id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("medalID", __s5param0, -1));
    this._type = __dep_export_CastleXMLUtils.CastleXMLUtils.getStringAttribute("type", __s5param0);
    this._minHighscoreRank = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("minHighscoreRank", __s5param0));
    this._medalPoints = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("medalPoints", __s5param0));
  };
  Object.defineProperty(XmlSeasonMedalVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonMedalVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonMedalVO.prototype, "minHighscoreRank", {
    get: function () {
      return this._minHighscoreRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonMedalVO.prototype, "medalPoints", {
    get: function () {
      return this._medalPoints;
    },
    enumerable: true,
    configurable: true
  });
  return XmlSeasonMedalVO;
}();
exports.XmlSeasonMedalVO = __s0local0;
