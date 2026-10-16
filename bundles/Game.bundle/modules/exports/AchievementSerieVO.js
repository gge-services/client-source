Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AchievementSerieVO() {
    this._achievementSeriesID = 0;
    this._numberOfAchievementsInSeries = 0;
    this._currentSeriesStep = 0;
    this._kingdomID = 0;
    this._isHidden = false;
  }
  AchievementSerieVO.prototype.reset = function () {
    this._currentSeriesStep = 1;
  };
  AchievementSerieVO.prototype.fillFromParamXML = function (__s7param0) {
    this._achievementSeriesID = parseInt(__s7param0.achievementSeriesID || "");
    this._numberOfAchievementsInSeries = parseInt(__s7param0.numberOfAchievementsInSeries || "");
    this._category = __s7param0.category || "";
    this._kingdomID = parseInt(__s7param0.triggerKingdomID || "");
    this._isHidden = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("hidden", __s7param0, "0")) == 1;
    this._hideIconText = __dep_export_CastleXMLUtils.CastleXMLUtils.getBooleanAttribute("hideIconText", __s7param0);
    this._achievements = [];
    this._currentSeriesStep = 1;
  };
  AchievementSerieVO.prototype.addAchievementVO = function (__s9param0) {
    this._achievements[__s9param0.achievementSeriesNumber] = __s9param0;
  };
  AchievementSerieVO.prototype.setAndCheckNextStep = function (__s11param0) {
    if (__s11param0 >= this._currentSeriesStep) {
      this._currentSeriesStep = __s11param0 + 1;
    }
  };
  Object.defineProperty(AchievementSerieVO.prototype, "achievements", {
    get: function () {
      return this._achievements;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementSerieVO.prototype, "nameString", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("achievementName_" + this._achievementSeriesID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementSerieVO.prototype, "category", {
    get: function () {
      return this._category;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementSerieVO.prototype, "achievementSeriesID", {
    get: function () {
      return this._achievementSeriesID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementSerieVO.prototype, "numberOfAchievementsInSeries", {
    get: function () {
      return this._numberOfAchievementsInSeries;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementSerieVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementSerieVO.prototype, "isSerieFinished", {
    get: function () {
      return this._currentSeriesStep > this._numberOfAchievementsInSeries;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementSerieVO.prototype, "achievementInProgress", {
    get: function () {
      if (this.isSerieFinished) {
        return this.achievements[this._currentSeriesStep - 1];
      } else {
        return this.achievements[this._currentSeriesStep];
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementSerieVO.prototype, "currentSeriesStep", {
    get: function () {
      return this._currentSeriesStep;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementSerieVO.prototype, "displayName", {
    get: function () {
      return "Achievement_" + this.achievementSeriesID;
    },
    enumerable: true,
    configurable: true
  });
  AchievementSerieVO.prototype.getFilePath = function () {
    return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.displayName);
  };
  Object.defineProperty(AchievementSerieVO.prototype, "displayDisp", {
    get: function () {
      if (this.achievementClip) {
        return this.achievementClip;
      } else {
        this.achievementClip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(this.displayName, this.getFilePath(), null, 0, false);
        this.achievementClip.recycleAsset = false;
        return this.achievementClip.asDisplayObject();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementSerieVO.prototype, "level", {
    get: function () {
      if (this.isSerieFinished) {
        return this.numberOfAchievementsInSeries;
      } else {
        return this.currentSeriesStep;
      }
    },
    enumerable: true,
    configurable: true
  });
  AchievementSerieVO.prototype.getYellowBarString = function (__s46param0 = -1) {
    var __s46local0 = __s46param0 < 0 ? this.achievementInProgress : this.achievements[__s46param0];
    switch (this.achievementSeriesID) {
      case 10:
        return String(__dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(parseInt(__s46local0.conditions[0].additionalParams[0])).level);
      case 203:
      case 204:
        return String(__s46local0.conditions[0].additionalParams[0]);
      default:
        return String(__s46local0.totalMaxProgress);
    }
  };
  AchievementSerieVO.prototype.useSingularTextID = function () {
    var __s49local0 = this.achievementInProgress;
    if (__s49local0.conditions[0] != null && __s49local0.conditions[0].amount == 1) {
      var __s49local1 = __dep_exact_92d05af59ee2ff30.Localize.text("achievementDesc_" + this.achievementSeriesID + "_singular");
      return __s49local1.length > 0 && __s49local1 != "achievementDesc_" + this.achievementSeriesID + "_singular";
    }
    return false;
  };
  AchievementSerieVO.prototype.generateDescriptionParameter = function () {
    var __s52local0 = this.achievementInProgress;
    switch (this.achievementSeriesID) {
      case 10:
        return [__dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(parseInt(__s52local0.conditions[0].additionalParams[0])).level];
      case 203:
      case 204:
        return [parseInt(__s52local0.conditions[0].additionalParams[0])];
      case 111:
      case 118:
      case 119:
      case 120:
        return [__s52local0.conditions[0].amount, parseInt(__s52local0.conditions[0].additionalParams[0])];
      case 100:
      case 101:
      case 102:
        return [String(__s52local0.conditions[0].amount), __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID).kingdomNameString];
      case 103:
      case 104:
      case 105:
      case 106:
        return [__dep_exact_92d05af59ee2ff30.Localize.text("research_" + __dep_export_CastleModel.CastleModel.researchData.researchVOs.get(parseInt(__s52local0.conditions[0].additionalParams[0])).groupID + "_title")];
      case 116:
      case 117:
        return [__s52local0.conditions[0].amount, __dep_exact_92d05af59ee2ff30.Localize.text("equipment_rarity_" + __dep_export_CastleModel.CastleModel.equipData.getRareStringFromRareID(parseInt(__s52local0.conditions[0].additionalParams[0])).toLowerCase())];
      case 363:
        var __s52local1 = __dep_export_CastleModel.CastleModel.constructionItemData.getConstructionItemVO(parseInt(__s52local0.conditions[0].additionalParams[0]));
        return [__s52local0.conditions[0].amount, __dep_exact_92d05af59ee2ff30.Localize.text(__s52local1.nameTextId), __s52local1.level];
      case 360:
        return [__s52local0.conditions[0].amount, __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(parseInt(__s52local0.conditions[0].additionalParams[0].split("|")[0])).level];
      case 366:
      case 367:
      case 368:
      case 369:
        return [__dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(parseInt(__s52local0.conditions[0].additionalParams[0])).level];
      case 370:
      case 371:
      case 372:
      case 373:
      case 374:
        return [__s52local0.conditions[0].amount, __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_CastleModel.CastleModel.eventDifficultyScaling.getDifficultyVOByDifficultyID(parseInt(__s52local0.conditions[0].additionalParams[0])).name_textID)];
      default:
        return [__s52local0.conditions[0].amount];
    }
  };
  Object.defineProperty(AchievementSerieVO.prototype, "isHidden", {
    get: function () {
      return this._isHidden;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementSerieVO.prototype, "hideIconText", {
    get: function () {
      return this._hideIconText;
    },
    enumerable: true,
    configurable: true
  });
  return AchievementSerieVO;
}();
exports.AchievementSerieVO = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
