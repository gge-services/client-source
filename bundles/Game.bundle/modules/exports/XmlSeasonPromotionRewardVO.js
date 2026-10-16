Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function XmlSeasonPromotionRewardVO() {
    this._id = 0;
    this._rewardSetId = 0;
    this._rankId = 0;
    this._rewardIds = [];
    this._needsSeasonPass = false;
  }
  XmlSeasonPromotionRewardVO.prototype.parseXml = function (__s5param0) {
    this._id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("id", __s5param0, -1));
    this._rewardSetId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("rewardSetID", __s5param0, -1));
    this._rankId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("rankID", __s5param0, -1));
    this._rewardIds = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("rewardIDs", __s5param0);
    this._needsSeasonPass = __dep_export_CastleXMLUtils.CastleXMLUtils.getBooleanAttribute("needsSeasonPass", __s5param0);
    this._leaguetypeID = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("leaguetypeID", __s5param0, 0);
  };
  Object.defineProperty(XmlSeasonPromotionRewardVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonPromotionRewardVO.prototype, "rewardSetId", {
    get: function () {
      return this._rewardSetId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonPromotionRewardVO.prototype, "rankId", {
    get: function () {
      return this._rankId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonPromotionRewardVO.prototype, "rewardIds", {
    get: function () {
      return this._rewardIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonPromotionRewardVO.prototype, "needsSeasonPass", {
    get: function () {
      return this._needsSeasonPass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonPromotionRewardVO.prototype, "leaguetypeID", {
    get: function () {
      return this._leaguetypeID;
    },
    enumerable: true,
    configurable: true
  });
  XmlSeasonPromotionRewardVO.prototype.matchesLeagueType = function (__s19param0) {
    return this._leaguetypeID == 0 || this._leaguetypeID == __s19param0;
  };
  return XmlSeasonPromotionRewardVO;
}();
exports.XmlSeasonPromotionRewardVO = __s0local0;
