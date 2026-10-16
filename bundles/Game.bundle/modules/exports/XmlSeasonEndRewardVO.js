Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function XmlSeasonEndRewardVO() {
    this._id = 0;
    this._rewardSetId = 0;
    this._minHighscoreRank = 0;
    this._rewardIds = [];
  }
  XmlSeasonEndRewardVO.prototype.parseXml = function (__s5param0) {
    this._id = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("id", __s5param0, -1));
    this._rewardSetId = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("rewardSetID", __s5param0, -1));
    this._minHighscoreRank = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("minHighscoreRank", __s5param0, -1));
    this._rewardIds = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("rewardIDs", __s5param0);
    this._leaguetypeID = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("leaguetypeID", __s5param0, 0);
  };
  Object.defineProperty(XmlSeasonEndRewardVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonEndRewardVO.prototype, "rewardSetId", {
    get: function () {
      return this._rewardSetId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonEndRewardVO.prototype, "minHighscoreRank", {
    get: function () {
      return this._minHighscoreRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonEndRewardVO.prototype, "rewardIds", {
    get: function () {
      return this._rewardIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonEndRewardVO.prototype, "leaguetypeID", {
    get: function () {
      return this._leaguetypeID;
    },
    enumerable: true,
    configurable: true
  });
  XmlSeasonEndRewardVO.prototype.matchesLeagueType = function (__s17param0) {
    return this._leaguetypeID == 0 || this._leaguetypeID == __s17param0;
  };
  return XmlSeasonEndRewardVO;
}();
exports.XmlSeasonEndRewardVO = __s0local0;
