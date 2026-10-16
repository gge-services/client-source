Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function XmlSeasonPromotionVO() {
    this._id = 0;
    this._minMedalPointsForUnlock = 0;
    this._majorRank = 0;
    this._minorRank = 0;
  }
  XmlSeasonPromotionVO.prototype.parseXml = function (__s5param0) {
    this._id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("rankID", __s5param0, -1));
    this._minMedalPointsForUnlock = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("minMedalPointsForUnlock", __s5param0, -1));
    this._majorRank = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("majorRank", __s5param0, -1));
    this._minorRank = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("minorRank", __s5param0, -1));
  };
  XmlSeasonPromotionVO.prototype.getNameTextId = function () {
    return "seasonLeague_rank_" + this.id;
  };
  Object.defineProperty(XmlSeasonPromotionVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonPromotionVO.prototype, "minMedalPointsForUnlock", {
    get: function () {
      return this._minMedalPointsForUnlock;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonPromotionVO.prototype, "majorRank", {
    get: function () {
      return this._majorRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonPromotionVO.prototype, "minorRank", {
    get: function () {
      return this._minorRank;
    },
    enumerable: true,
    configurable: true
  });
  return XmlSeasonPromotionVO;
}();
exports.XmlSeasonPromotionVO = __s0local0;
