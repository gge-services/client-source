Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_SeasonLeagueRewardOverviewDialogItemVO = require("gge-module:export_SeasonLeagueRewardOverviewDialogItemVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstSeasonLeague = require("gge-module:export_ClientConstSeasonLeague");
var __dep_export_XmlSeasonEndRewardVO = require("gge-module:export_XmlSeasonEndRewardVO");
var __dep_export_XmlSeasonEventRewardVO = require("gge-module:export_XmlSeasonEventRewardVO");
var __dep_export_XmlSeasonMedalVO = require("gge-module:export_XmlSeasonMedalVO");
var __dep_export_XmlSeasonPromotionRewardVO = require("gge-module:export_XmlSeasonPromotionRewardVO");
var __dep_export_XmlSeasonPromotionVO = require("gge-module:export_XmlSeasonPromotionVO");
var __s0local0 = function () {
  function SeasonLeagueXml() {
    this._seasonMedals = new Map();
    this._seasonPromotions = new Map();
    this._seasonPromotionRewards = new Map();
    this._seasonEventRewards = new Map();
    this._seasonEndRewards = new Map();
    this._seasonSettings = new Map();
  }
  SeasonLeagueXml.prototype.parseXml = function (__s5param0) {
    this._seasonMedals = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "seasonMedals", __dep_export_XmlSeasonMedalVO.XmlSeasonMedalVO);
    this._seasonPromotions = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "seasonRanks", __dep_export_XmlSeasonPromotionVO.XmlSeasonPromotionVO);
    this._seasonPromotionRewards = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "seasonPromotionRewards", __dep_export_XmlSeasonPromotionRewardVO.XmlSeasonPromotionRewardVO);
    this._seasonEventRewards = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "seasonEventRewards", __dep_export_XmlSeasonEventRewardVO.XmlSeasonEventRewardVO);
    this._seasonEndRewards = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "seasonEndRewards", __dep_export_XmlSeasonEndRewardVO.XmlSeasonEndRewardVO);
    this._seasonSettings = __dep_export_CastleXMLUtils.CastleXMLUtils.createDicFromXmlNode(__s5param0, "seasonSettings", __dep_export_XmlSeasonSettingVO.XmlSeasonSettingVO, "settingID");
  };
  SeasonLeagueXml.prototype.getSeasonEndRewards = function (__s7param0, __s7param1) {
    var __s7local0 = [];
    if (this._seasonEndRewards != null) {
      for (var __s7local1 = 0, __s7local2 = Array.from(this._seasonEndRewards.values()); __s7local1 < __s7local2.length; __s7local1++) {
        var __s7local3 = __s7local2[__s7local1];
        if (__s7local3 !== undefined && __s7param0 == __s7local3.rewardSetId && __s7local3.matchesLeagueType(__s7param1)) {
          __s7local0.push(__s7local3);
        }
      }
    }
    return __s7local0;
  };
  SeasonLeagueXml.prototype.getSeasonEndRewardForRank = function (__s13param0, __s13param1, __s13param2) {
    var __s13local0;
    for (var __s13local1 = __dep_exact_9e901e8e2483a22f.DictionaryUtil.getKeys(this._seasonEndRewards), __s13local2 = 0; __s13local2 < __s13local1.length; __s13local2++) {
      var __s13local3 = this._seasonEndRewards.get(__s13local1[__s13local2]);
      var __s13local4 = this._seasonEndRewards.get(__s13local1[__s13local2 + 1]);
      if (__s13param0 == __s13local3.rewardSetId && __s13local3.matchesLeagueType(__s13param2)) {
        __s13local0 = __s13local3;
      }
      if (!__s13local4) {
        return __s13local0;
      }
      var __s13local5 = __dep_exact_f855840627e6e145.int(__s13local4.rewardSetId == __s13param0 && __s13local4.matchesLeagueType(__s13param2) ? __s13local4.minHighscoreRank - 1 : Number.MAX_VALUE);
      if (__s13param0 == __s13local3.rewardSetId && __s13local3.matchesLeagueType(__s13param2) && __s13param1 >= __s13local3.minHighscoreRank && __s13param1 <= __s13local5) {
        return __s13local3;
      }
    }
    return null;
  };
  SeasonLeagueXml.prototype.getSeasonEndRewardsAsOverviewItems = function (__s20param0, __s20param1) {
    var __s20local0;
    var __s20local1 = this.getSeasonEndRewards(__s20param0, __s20param1);
    var __s20local2 = [];
    __s20local1.reverse();
    for (var __s20local3 = 0; __s20local3 < __s20local1.length; ++__s20local3) {
      var __s20local4 = __s20local1[__s20local3];
      var __s20local5 = "";
      __s20local5 = __s20local3 == 0 ? __dep_exact_92d05af59ee2ff30.Localize.text("rankingRange_plus", [__s20local4.minHighscoreRank]) : __s20local0 && __s20local0.minHighscoreRank - 1 != __s20local4.minHighscoreRank ? __dep_exact_92d05af59ee2ff30.Localize.text("rankingRange_multi", [__s20local4.minHighscoreRank, __s20local0.minHighscoreRank - 1]) : __dep_exact_92d05af59ee2ff30.Localize.text("rankingRange_single", [__s20local4.minHighscoreRank]);
      __s20local2.push(new __dep_export_SeasonLeagueRewardOverviewDialogItemVO.SeasonLeagueRewardOverviewDialogItemVO(__s20local5, __dep_export_CastleModel.CastleModel.rewardData.getListByIdVector(__s20local4.rewardIds)));
      __s20local0 = __s20local4;
    }
    __s20local2.reverse();
    return __s20local2;
  };
  SeasonLeagueXml.prototype.getSeasonEventRewardsAsOverviewItems = function () {
    var __s24local0;
    var __s24local1 = [];
    var __s24local2 = [];
    if (this.seasonMedals != null) {
      for (var __s24local3 = 0, __s24local4 = Array.from(this.seasonMedals.values()); __s24local3 < __s24local4.length; __s24local3++) {
        var __s24local5 = __s24local4[__s24local3];
        __s24local2.push(__s24local5);
      }
    }
    __s24local2 = __s24local2.reverse();
    for (var __s24local6 = 0; __s24local6 < __s24local2.length; ++__s24local6) {
      __s24local5 = __s24local2[__s24local6];
      var __s24local7 = "";
      __s24local7 = __s24local6 == 0 ? __dep_exact_92d05af59ee2ff30.Localize.text("rankingRange_plus", [__s24local5.minHighscoreRank]) : __s24local0 && __s24local0.minHighscoreRank - 1 != __s24local5.minHighscoreRank ? __dep_exact_92d05af59ee2ff30.Localize.text("rankingRange_multi", [__s24local5.minHighscoreRank, __s24local0.minHighscoreRank - 1]) : __dep_exact_92d05af59ee2ff30.Localize.text("rankingRange_single", [__s24local5.minHighscoreRank]);
      __s24local1.push(new __dep_export_SeasonLeagueRewardOverviewDialogItemVO.SeasonLeagueRewardOverviewDialogItemVO(__s24local7, new __dep_export_CollectableList.CollectableList().addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.SEASON_LEAGUE_MEDALS, 1, __s24local5.id))));
      __s24local0 = __s24local5;
    }
    return __s24local1 = __s24local1.reverse();
  };
  SeasonLeagueXml.prototype.getSeasonMedalForRank = function (__s31param0) {
    if (this.seasonMedals != null) {
      for (var __s31local0 = 0, __s31local1 = Array.from(this.seasonMedals.values()); __s31local0 < __s31local1.length; __s31local0++) {
        var __s31local2 = __s31local1[__s31local0];
        if (__s31local2 !== undefined && __s31param0 <= __s31local2.minHighscoreRank) {
          return __s31local2;
        }
      }
    }
    return this.seasonMedals.get(__dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.MEDAL_ID_WOOD);
  };
  SeasonLeagueXml.prototype.getSeasonMedalRewardForRank = function (__s37param0) {
    return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.SEASON_LEAGUE_MEDALS, 1, this.getSeasonMedalForRank(__s37param0).id);
  };
  SeasonLeagueXml.prototype.getSeasonEventRewards = function (__s39param0, __s39param1, __s39param2, __s39param3) {
    var __s39local0 = new __dep_export_CollectableList.CollectableList();
    if (this.seasonEventRewards != null) {
      for (var __s39local1 = 0, __s39local2 = Array.from(this.seasonEventRewards.values()); __s39local1 < __s39local2.length; __s39local1++) {
        var __s39local3 = __s39local2[__s39local1];
        if (__s39local3 !== undefined && __s39local3.rewardSetId == __s39param0 && __s39local3.eventIDs.indexOf(__s39param1) >= 0 && __s39local3.rankId == __s39param2 && __s39local3.needsSeasonPass == __s39param3) {
          __s39local0.addList(__dep_export_CastleModel.CastleModel.rewardData.getListByIdVector(__s39local3.rewardIds));
        }
      }
    }
    return __s39local0;
  };
  SeasonLeagueXml.prototype.getPromotion = function (__s45param0) {
    return this.seasonPromotions.get(__s45param0);
  };
  SeasonLeagueXml.prototype.getSetting = function (__s47param0) {
    return this._seasonSettings.get(__s47param0);
  };
  SeasonLeagueXml.prototype.getHighestPromotion = function () {
    var __s49local0 = 0;
    if (this.seasonPromotions != null) {
      for (var __s49local1 = 0, __s49local2 = Array.from(this.seasonPromotions.values()); __s49local1 < __s49local2.length; __s49local1++) {
        var __s49local3 = __s49local2[__s49local1];
        if (__s49local3 !== undefined && __s49local3.id >= __s49local0) {
          __s49local0 = __s49local3.id;
        }
      }
    }
    return this.getPromotion(__s49local0);
  };
  SeasonLeagueXml.prototype.getNumberOfPromotions = function () {
    var __s55local0 = 0;
    if (this.seasonPromotions != null) {
      for (var __s55local1 = 0, __s55local2 = Array.from(this.seasonPromotions.values()); __s55local1 < __s55local2.length; __s55local1++) {
        __s55local2[__s55local1];
        __s55local0++;
      }
    }
    return __s55local0;
  };
  SeasonLeagueXml.prototype.getPromotionRewards = function (__s60param0, __s60param1, __s60param2, __s60param3) {
    if (this.seasonPromotionRewards != null) {
      for (var __s60local0 = 0, __s60local1 = Array.from(this.seasonPromotionRewards.values()); __s60local0 < __s60local1.length; __s60local0++) {
        var __s60local2 = __s60local1[__s60local0];
        if (__s60local2 !== undefined && __s60param0 == __s60local2.rewardSetId && __s60local2.matchesLeagueType(__s60param3) && __s60param1 == __s60local2.rankId && __s60param2 == __s60local2.needsSeasonPass) {
          return __dep_export_CastleModel.CastleModel.rewardData.getListByIdVector(__s60local2.rewardIds);
        }
      }
    }
    return new __dep_export_CollectableList.CollectableList();
  };
  SeasonLeagueXml.prototype.getSeasonPassGainedPromotionRewards = function (__s66param0, __s66param1, __s66param2) {
    var __s66local0 = new __dep_export_CollectableList.CollectableList();
    if (this.seasonPromotionRewards != null) {
      for (var __s66local1 = 0, __s66local2 = Array.from(this.seasonPromotionRewards.values()); __s66local1 < __s66local2.length; __s66local1++) {
        var __s66local3 = __s66local2[__s66local1];
        if (__s66local3 !== undefined && __s66local3.rankId <= __s66param0 && __s66local3.needsSeasonPass && __s66local3.rewardSetId == __s66param1 && __s66local3.matchesLeagueType(__s66param2)) {
          __s66local0.addList(__dep_export_CastleModel.CastleModel.rewardData.getListByIdVector(__s66local3.rewardIds));
        }
      }
    }
    __s66local0.combineDuplicatedItems();
    return __s66local0;
  };
  Object.defineProperty(SeasonLeagueXml.prototype, "seasonMedals", {
    get: function () {
      return this._seasonMedals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueXml.prototype, "seasonPromotions", {
    get: function () {
      return this._seasonPromotions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueXml.prototype, "seasonPromotionRewards", {
    get: function () {
      return this._seasonPromotionRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueXml.prototype, "seasonEventRewards", {
    get: function () {
      return this._seasonEventRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueXml.prototype, "seasonEndRewards", {
    get: function () {
      return this._seasonEndRewards;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueXml;
}();
exports.SeasonLeagueXml = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_XmlSeasonSettingVO = require("gge-module:export_XmlSeasonSettingVO");
