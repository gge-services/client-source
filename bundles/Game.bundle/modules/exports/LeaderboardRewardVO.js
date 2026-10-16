Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function LeaderboardRewardVO() {}
  LeaderboardRewardVO.prototype.fillFromParamXML = function (__s5param0) {
    this._leaderboardRewardID = parseInt(__s5param0.leaderboardRewardID || "");
    this._eventTypeID = parseInt(__s5param0.eventTypeID || "");
    this._leaderboardRewardSetID = parseInt(__s5param0.leaderboardRewardSetID || "");
    this._maxRank = parseInt(__s5param0.maxRank || "");
    this._rewardIDs = __dep_export_CastleXMLUtils.CastleXMLUtils.createIntListFromAttribute("rewardIDs", __s5param0);
    this._leagueTypeID = parseInt(__s5param0.leagueID || "-1");
  };
  Object.defineProperty(LeaderboardRewardVO.prototype, "leaderboardRewardID", {
    get: function () {
      return this._leaderboardRewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderboardRewardVO.prototype, "eventTypeID", {
    get: function () {
      return this._eventTypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderboardRewardVO.prototype, "leaderboardRewardSetID", {
    get: function () {
      return this._leaderboardRewardSetID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderboardRewardVO.prototype, "maxRank", {
    get: function () {
      return this._maxRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderboardRewardVO.prototype, "rewardIDs", {
    get: function () {
      return this._rewardIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderboardRewardVO.prototype, "leagueTypeID", {
    get: function () {
      return this._leagueTypeID;
    },
    enumerable: true,
    configurable: true
  });
  return LeaderboardRewardVO;
}();
exports.LeaderboardRewardVO = __s0local0;
