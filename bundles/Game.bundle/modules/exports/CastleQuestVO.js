Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_ClientConstQuestCondition = require("gge-module:export_ClientConstQuestCondition");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function CastleQuestVO() {
    this._questID = 0;
    this._questSeriesID = 0;
    this._requiredLevel = 0;
    this._requiredLegendLevel = 0;
    this._requiredQuestID = 0;
    this._questGiverID = 0;
    this._eventID = 0;
    this._autoShow = false;
    this._isGenericQuest = false;
    this._genericQuestType = 0;
    this._genericNameID = 0;
    this._genericInfoID = 0;
    this._genericTipID = 0;
    this._genericFinishID = 0;
    this._questSeriesNumber = 0;
    this._numberOfQuestsInSeries = 0;
    this._shownKingdomID = 0;
    this._triggerKingdomID = 0;
    this._xmlTriggerKingdomID = 0;
    this._maxLevelForXP = 0;
    this._hidden = false;
    this._mapID = 0;
    this._isHeroQuest = false;
    this._duration = 0;
    this._objectiveType = 0;
    this._remainingSeconds = -1;
    this._timeWhenDataReceived = 0;
    this._isFailed = false;
    this._isCompleted = false;
    this._isBuyRubyQuest = false;
    this._registered = false;
    this._sortPriority = -1;
    this._questCategory = 0;
    this._isLocked = false;
    this._c2Cost = 0;
    this._questbookTabID = 0;
    this._campaignQuestID = 0;
    this._campaignQuestTimeStamp = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
    this._campaignSortOrder = 0;
    CastleQuestVO.REWARD_SORT_ORDER = [__dep_export_CollectableEnum.CollectableEnum.XP, __dep_export_CollectableEnum.CollectableEnum.C2, __dep_export_CollectableEnum.CollectableEnum.C1];
  }
  CastleQuestVO.prototype.fillFromParamXML = function (__s5param0) {
    try {
      this._questID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("questID", __s5param0, "-1", true));
      this._questSeriesID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("questSeriesID", __s5param0, "-1", false));
      this._shownKingdomID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("shownKingdomID", __s5param0, "0"));
      this._xmlTriggerKingdomID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("triggerKingdomID", __s5param0, "0"));
      this._triggerKingdomID = __dep_exact_f855840627e6e145.int(Math.max(this._xmlTriggerKingdomID, 0));
      this._hidden = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("hidden", __s5param0, "0")) == 1;
      this._shownKingdomID = this._shownKingdomID < 0 ? 0 : this._shownKingdomID;
      this._mapID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("mapID", __s5param0, "-1"));
      this._rewards = __dep_export_CollectableManager.CollectableManager.sorter.sortListByTypes(__dep_export_CollectableManager.CollectableManager.parser.x2cRewards.createList(__s5param0), CastleQuestVO.REWARD_SORT_ORDER);
      this._requiredLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("requiredLevel", __s5param0, "0"));
      this._requiredLegendLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("requiredLegendLevel", __s5param0, "0"));
      this._requiredQuestID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("requiredQuestID", __s5param0, "-1"));
      this._questGiverID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("questGiverID", __s5param0, "0"));
      this._eventID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("eventID", __s5param0, "0"));
      var __s5local0 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("genericQuestID", __s5param0, "0");
      this._isGenericQuest = __s5local0 != "0";
      if (this._isGenericQuest) {
        this._genericQuestType = parseInt(__s5local0.charAt(0));
        this._genericNameID = parseInt(__s5local0.charAt(1));
        this._genericInfoID = parseInt(__s5local0.charAt(2));
        this._genericTipID = parseInt(__s5local0.charAt(3));
        this._genericFinishID = parseInt(__s5local0.charAt(4));
      }
      this._questSeriesNumber = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("questSeriesNumber", __s5param0, "1"));
      this._numberOfQuestsInSeries = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("numberOfQuestsInSeries", __s5param0, "0"));
      this._maxLevelForXP = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("maxLevelForXP", __s5param0, Number.MAX_VALUE.toString()));
      this.parseConditions(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("conditions", __s5param0, "", true));
      this._isHeroQuest = this._questGiverID == __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_SELECTED_HERO;
      this._duration = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("duration", __s5param0, "-1"));
      this._objectiveType = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("objectiveType", __s5param0, "0"));
      this._autoShow = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("autoShow", __s5param0, "0")) == 1;
      this._sortPriority = __s5param0.sortPriority !== undefined ? __dep_exact_f855840627e6e145.int(__s5param0.sortPriority) : Number.MAX_VALUE;
      this._c2Cost = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("c2Cost", __s5param0, "0"));
      this._c2Reductions = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("c2Reduction", __s5param0, "").split(",");
      this._questbookTabID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("questbookTabID", __s5param0, "-1"));
      this.setQuestCategory();
    } catch (__s9local0) {
      console.warn("At quest " + this._questID + ": " + __s9local0.stack);
    }
  };
  CastleQuestVO.prototype.setQuestCategory = function () {
    if (this._questbookTabID > 0) {
      this._questCategory = this._questbookTabID;
    } else if (this._eventID > 0) {
      if (this.isTemporaryQuest) {
        this._questCategory = __dep_exact_f855840627e6e145.int(__dep_export_CastleQuestData.CastleQuestData.CATEGORY_GREEN);
      } else {
        this._questCategory = __dep_exact_f855840627e6e145.int(__dep_export_CastleQuestData.CastleQuestData.CATEGORY_EVENTS);
      }
    } else if (this._shownKingdomID >= 0) {
      if (this._shownKingdomID == __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID) {
        this._questCategory = __dep_exact_f855840627e6e145.int(__dep_export_CastleQuestData.CastleQuestData.CATEGORY_EVENTS);
      } else {
        this._questCategory = this._shownKingdomID;
      }
    }
  };
  CastleQuestVO.prototype.getActualRewardList = function () {
    var __s20local0 = this._rewards.clone();
    if (!this.isGettingXpFromThisQuest) {
      for (var __s20local1 = __s20local0.getFilteredListByType(__dep_export_CollectableEnum.CollectableEnum.XP), __s20local2 = 0; __s20local2 < __s20local1.length; ++__s20local2) {
        __s20local0.removeByItem(__s20local1.getItemByIndex(__s20local2));
      }
    }
    return __s20local0;
  };
  CastleQuestVO.prototype.fillFromParams = function (__s25param0) {
    if (__s25param0.P) {
      for (var __s25local0 = 0; __s25local0 < this._conditions.length; __s25local0++) {
        this._conditions[__s25local0].conditionCounter = __s25param0.P[__s25local0];
      }
    }
    if (__s25param0.hasOwnProperty("RS")) {
      this._remainingSeconds = __dep_exact_f855840627e6e145.int(__s25param0.RS);
      this._timeWhenDataReceived = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer() / 1000);
    } else {
      this._remainingSeconds = -1;
    }
    if (__s25param0.hasOwnProperty("S")) {
      this._isCompleted = __s25param0.S == 1;
      this._isFailed = __s25param0.S == 0;
    } else if (__s25param0.hasOwnProperty("QCS")) {
      this._isCompleted = __s25param0.QCS == "C";
      this._isFailed = __s25param0.QCS == "F";
      this._isLocked = __s25param0.QCS == "N";
    } else {
      this._isCompleted = false;
      this._isFailed = false;
    }
    if (__s25param0.hasOwnProperty("CQID")) {
      this._campaignQuestID = __dep_exact_f855840627e6e145.int(__s25param0.CQID);
    }
    if (__s25param0.hasOwnProperty("ST")) {
      this._campaignQuestTimeStamp = __dep_exact_f855840627e6e145.int(__s25param0.ST);
    }
  };
  CastleQuestVO.prototype.parseConditions = function (__s37param0) {
    this._conditions = [];
    if (__s37param0) {
      var __s37local0 = __s37param0.split("#");
      this._isBuyRubyQuest = false;
      if (__s37local0 != null) {
        for (var __s37local1 = 0, __s37local2 = __s37local0; __s37local1 < __s37local2.length; __s37local1++) {
          var __s37local3 = __s37local2[__s37local1];
          if (__s37local3 !== undefined) {
            var __s37local4 = __s37local3.split("+");
            var __s37local5 = new __dep_export_CastleQuestConditionVO.CastleQuestConditionVO();
            __s37local5.loadFromParamArray(__s37local4);
            __s37local5.questID = this._questID;
            if (__s37local5.conditionType == __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_BUY_RUBIES) {
              this._isBuyRubyQuest = true;
            }
            this._conditions.push(__s37local5);
          }
        }
      }
    } else {
      console.warn("Quest " + this.questID + "has no conditions.");
    }
  };
  Object.defineProperty(CastleQuestVO.prototype, "isStarterQuest", {
    get: function () {
      if (this._conditions != null) {
        for (var __s46local0 = 0, __s46local1 = this._conditions; __s46local0 < __s46local1.length; __s46local0++) {
          var __s46local2 = __s46local1[__s46local0];
          if (__s46local2 !== undefined && __s46local2.conditionType == __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_STARTER) {
            return true;
          }
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestVO.prototype.getQuestSeriesText = function () {
    if (this._isGenericQuest) {
      if (__dep_export_CastleModel.CastleModel.questData.showQuestIDs()) {
        return "(" + this._questID + ")" + __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("genQuest_" + this._genericQuestType + "_name_" + this._genericNameID));
      } else {
        return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("genQuest_" + this._genericQuestType + "_name_" + this._genericNameID));
      }
    }
    var __s52local0 = "";
    if (this.questGiverID == __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_SELECTED_HERO) {
      __s52local0 = "_hero" + __dep_export_CastleModel.CastleModel.userData.selectedHeroID;
    }
    if (__dep_export_CastleModel.CastleModel.questData.showQuestIDs()) {
      return "(" + this._questID + ")" + __dep_exact_92d05af59ee2ff30.Localize.text("questSeriesID_" + this._questSeriesID + __s52local0);
    } else {
      if (this.questGiverID == __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_SELECTED_HERO) {
        __s52local0 = "_hero" + __dep_export_CastleModel.CastleModel.userData.selectedHeroID;
      }
      return __dep_exact_92d05af59ee2ff30.Localize.text("questSeriesID_" + this._questSeriesID + __s52local0);
    }
  };
  CastleQuestVO.prototype.getQuestSeriesTextWithNumbers = function () {
    var __s61local0;
    var __s61local1 = this.getQuestSeriesText();
    if (!!this.isEpicQuest && !this.isStarterQuest && !this._epicQuestVisualNumbers) {
      this._epicQuestVisualNumbers = __dep_export_CastleModel.CastleModel.questData.getQuestPrototype(this.questID).visualNumbersForEpicQuests;
    }
    __s61local0 = this.isEpicQuest && this._epicQuestVisualNumbers ? __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE, this._epicQuestVisualNumbers) : this.isStarterQuest ? "" : __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.questSeriesNumber - 1, this.numberOfQuestsInSeries - 1]);
    var __s61local2 = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_SIMPLE_COMP, [__s61local1, __s61local0]);
    if (this.questSeriesNumber > 1 && this.numberOfQuestsInSeries > 2) {
      return __s61local2;
    } else {
      return __s61local1;
    }
  };
  CastleQuestVO.prototype.getQuestName = function () {
    if (this.isCampaignQuest) {
      var __s66local0 = __dep_exact_81dacdf05bd32292_1.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_TIMELIMITED_CAMPAIGN_EVENT), "TimeLimitedCampaignEventEventVO");
      if (__s66local0) {
        if (__dep_export_CastleModel.CastleModel.questData.showQuestIDs()) {
          return "(" + this.questID + ")" + __dep_exact_92d05af59ee2ff30.Localize.text("dialog_questbook_campaignQuestName", [this._campaignSortOrder, __s66local0.campaignQuests.length]);
        } else {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_questbook_campaignQuestName", [this._campaignSortOrder, __s66local0.campaignQuests.length]);
        }
      } else {
        return "";
      }
    }
    return this.getQuestSeriesTextWithNumbers();
  };
  CastleQuestVO.prototype.getQuestInfoTextId = function () {
    if (this._isGenericQuest) {
      return __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("genQuest_" + this._genericQuestType + "_info_" + this._genericInfoID);
    }
    var __s73local0 = "";
    if (this.questGiverID == __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_SELECTED_HERO) {
      __s73local0 = "_hero" + __dep_export_CastleModel.CastleModel.userData.selectedHeroID;
    }
    return __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("questID_" + this._questID + "_info" + __s73local0);
  };
  CastleQuestVO.prototype.hasConditionIn = function (__s77param0) {
    if (__s77param0 != null) {
      for (var __s77local0 = 0, __s77local1 = __s77param0; __s77local0 < __s77local1.length; __s77local0++) {
        var __s77local2 = __s77local1[__s77local0];
        if (__s77local2 !== undefined && this._conditions != null) {
          for (var __s77local3 = 0, __s77local4 = this._conditions; __s77local3 < __s77local4.length; __s77local3++) {
            var __s77local5 = __s77local4[__s77local3];
            if (__s77local5 !== undefined && __s77local5.hasConditionType(__s77local2.conditionType)) {
              return true;
            }
          }
        }
      }
    }
    return false;
  };
  CastleQuestVO.prototype.hasConditionOfType = function (__s86param0) {
    if (this._conditions != null) {
      for (var __s86local0 = 0, __s86local1 = this._conditions; __s86local0 < __s86local1.length; __s86local0++) {
        var __s86local2 = __s86local1[__s86local0];
        if (__s86local2 !== undefined && __s86local2.conditionType == __s86param0) {
          return true;
        }
      }
    }
    return false;
  };
  Object.defineProperty(CastleQuestVO.prototype, "questID", {
    get: function () {
      return this._questID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "questGiverID", {
    get: function () {
      return this._questGiverID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "conditions", {
    get: function () {
      return this._conditions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "questSeriesNumber", {
    get: function () {
      return this._questSeriesNumber;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "numberOfQuestsInSeries", {
    get: function () {
      return this._numberOfQuestsInSeries;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isGettingXpFromThisQuest", {
    get: function () {
      return this._rewards.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.XP) > 0 && __dep_export_CastleModel.CastleModel.userData.userLevel <= this._maxLevelForXP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "xpReward", {
    get: function () {
      return this._rewards.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.XP);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "c2Reward", {
    get: function () {
      return this._rewards.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C2);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isBuyRubyQuest", {
    get: function () {
      return this._isBuyRubyQuest;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isC2RewardQuest", {
    get: function () {
      return this._rewards.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.C2) > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isTemporaryQuest", {
    get: function () {
      return this._eventID == __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_EVENT_TEMPORARY_QUESTS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "shownKingdomID", {
    get: function () {
      return this._shownKingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "triggerKingdomID", {
    get: function () {
      return this._triggerKingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "questSeriesID", {
    get: function () {
      return this._questSeriesID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "env", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "hidden", {
    get: function () {
      if (this.hasConditionOfType(__dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_INVITE_A_FRIEND)) {
        return this.env.urlVariables.nativeStore == __dep_exact_9e901e8e2483a22f.BasicConstants.NATIVE_STORE_MICROSOFT;
      } else {
        return this._hidden;
      }
    },
    set: function (__s128param0) {
      this._hidden = __s128param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "autoShow", {
    get: function () {
      return this._autoShow;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "mapID", {
    get: function () {
      return this._mapID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isHeroQuest", {
    get: function () {
      return this._isHeroQuest;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isGenericQuest", {
    get: function () {
      return this._isGenericQuest;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "genericQuestType", {
    get: function () {
      return this._genericQuestType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "genericNameID", {
    get: function () {
      return this._genericNameID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "genericInfoID", {
    get: function () {
      return this._genericInfoID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "genericTipID", {
    get: function () {
      return this._genericTipID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "genericFinishID", {
    get: function () {
      return this._genericFinishID;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestVO.prototype.isFreeOfIllegalConditionTypes = function () {
    for (var __s150local0 = 0, __s150local1 = __dep_export_CastleModel.CastleModel.questData.illegalQuestConditions; __s150local0 < __s150local1.length; __s150local0++) {
      var __s150local2 = __s150local1[__s150local0];
      if (__s150local2 !== undefined && this.hasConditionOfType(__s150local2)) {
        return false;
      }
    }
    return true;
  };
  CastleQuestVO.prototype.isLegal = function () {
    if (!this.isFreeOfIllegalConditionTypes()) {
      return false;
    }
    if (this.questID == 3001) {
      var __s155local0 = __dep_exact_81dacdf05bd32292_1.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
      if (__s155local0 && !__s155local0.isActive) {
        return false;
      }
    }
    return true;
  };
  Object.defineProperty(CastleQuestVO.prototype, "duration", {
    get: function () {
      if (this._eventID != __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_EVENT_TEMPORARY_QUESTS) {
        return this._duration;
      }
      var __s160local0 = __dep_exact_81dacdf05bd32292_1.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_EVENT_TEMPORARY_QUESTS), "TemporaryQuestEventVO");
      if (__s160local0) {
        return __s160local0.remainingEventTimeInSeconds;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isObjective", {
    get: function () {
      return this._objectiveType > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isMainObjective", {
    get: function () {
      return this._objectiveType == 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isChallengeObjective", {
    get: function () {
      return this._objectiveType == 3;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isFailed", {
    get: function () {
      return this._isFailed || !this.remainingSeconds && !this._isCompleted;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isCompleted", {
    get: function () {
      var __s173local0 = false;
      if (this._conditions && this._conditions.length > 0 && (__s173local0 = true, this._conditions != null)) {
        for (var __s173local1 = 0, __s173local2 = this._conditions; __s173local1 < __s173local2.length; __s173local1++) {
          var __s173local3 = __s173local2[__s173local1];
          if (__s173local3 !== undefined) {
            if (!__s173local3.isDone()) {
              __s173local0 = false;
            }
          }
        }
      }
      return this._isCompleted || __s173local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "remainingSeconds", {
    get: function () {
      if (this.isCampaignQuest) {
        var __s180local0 = __dep_exact_81dacdf05bd32292_1.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_TIMELIMITED_CAMPAIGN_QUEST_EVENT), "TimeLimitedCampaignQuestEventEventVO");
        if (__s180local0 && __s180local0.questIDs.indexOf(this._questID) > -1) {
          return __s180local0.remainingEventTimeInSeconds;
        }
      } else if (this._remainingSeconds >= 0) {
        return Math.max(0, this._remainingSeconds - __dep_export_CachedTimer.CachedTimer.getCachedTimer() / 1000 + this._timeWhenDataReceived);
      }
      return -1;
    },
    set: function (__s185param0) {
      this._remainingSeconds = __s185param0;
      this._timeWhenDataReceived = __dep_exact_f855840627e6e145.int(__dep_export_CachedTimer.CachedTimer.getCachedTimer() / 1000);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "completed", {
    set: function (__s187param0) {
      this._isCompleted = __s187param0;
      if (this._conditions && this._conditions.length > 0 && this._conditions != null) {
        for (var __s187local0 = 0, __s187local1 = this._conditions; __s187local0 < __s187local1.length; __s187local0++) {
          var __s187local2 = __s187local1[__s187local0];
          if (__s187local2 !== undefined) {
            __s187local2.conditionCounter = -1;
          }
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "registered", {
    get: function () {
      return this._registered;
    },
    set: function (__s195param0) {
      this._registered = __s195param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "sortPriority", {
    get: function () {
      return this._sortPriority;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "requiredLevel", {
    get: function () {
      return this._requiredLevel;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestVO.prototype.isInProgress = function () {
    if (this.questCategory == __dep_export_CastleQuestData.CastleQuestData.CATEGORY_CAMPAIGN || this.questCategory == __dep_export_CastleQuestData.CastleQuestData.CATEGORY_EPIC) {
      return true;
    }
    if (this._conditions != null) {
      for (var __s201local0 = 0, __s201local1 = this._conditions; __s201local0 < __s201local1.length; __s201local0++) {
        var __s201local2 = __s201local1[__s201local0];
        if (__s201local2 !== undefined && (__s201local2.isDone() || __s201local2.isInProgress())) {
          return true;
        }
      }
    }
    return false;
  };
  Object.defineProperty(CastleQuestVO.prototype, "isCampaignQuest", {
    get: function () {
      return this._questCategory == __dep_export_CastleQuestData.CastleQuestData.CATEGORY_CAMPAIGN;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isEpicQuest", {
    get: function () {
      return this._questCategory == __dep_export_CastleQuestData.CastleQuestData.CATEGORY_EPIC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "questCategory", {
    get: function () {
      return this._questCategory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "isLocked", {
    get: function () {
      return this._isLocked;
    },
    set: function (__s216param0) {
      this._isLocked = __s216param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "buyCost", {
    get: function () {
      var __s218local0 = this._c2Cost;
      for (var __s218local1 = 0; __s218local1 < this._conditions.length; __s218local1++) {
        if (this._conditions[__s218local1].isDone()) {
          __s218local0 -= __dep_exact_f855840627e6e145.int(this._c2Reductions[__s218local1]);
        }
      }
      return __s218local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "campaignQuestID", {
    get: function () {
      return this._campaignQuestID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "campaignQuestTimeStamp", {
    get: function () {
      return this._campaignQuestTimeStamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "campaignSortOrder", {
    get: function () {
      return this._campaignSortOrder;
    },
    set: function (__s229param0) {
      this._campaignSortOrder = __s229param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "xmlTriggerKingdomID", {
    get: function () {
      return this._xmlTriggerKingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "requiredLegendLevel", {
    get: function () {
      return this._requiredLegendLevel;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestVO.prototype.compareLevelRequirements = function (__s235param0) {
    return !this.requiredLevel && !this.requiredLegendLevel || !__s235param0.requiredLevel && !__s235param0.requiredLegendLevel || this.requiredLevel == __s235param0.requiredLevel && this.requiredLegendLevel == __s235param0.requiredLegendLevel;
  };
  CastleQuestVO.__initialize_static_members = function () {
    CastleQuestVO.REWARD_SORT_ORDER = [__dep_export_CollectableEnum.CollectableEnum.XP, __dep_export_CollectableEnum.CollectableEnum.C2, __dep_export_CollectableEnum.CollectableEnum.C1];
  };
  CastleQuestVO.prototype.setVisualNumbersForEpicQuest = function (__s239param0) {
    this._epicQuestVisualNumbers = __s239param0;
  };
  Object.defineProperty(CastleQuestVO.prototype, "visualNumbersForEpicQuests", {
    get: function () {
      return this._epicQuestVisualNumbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleQuestVO.prototype, "requiredQuestID", {
    get: function () {
      return this._requiredQuestID;
    },
    enumerable: true,
    configurable: true
  });
  return CastleQuestVO;
}();
exports.CastleQuestVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShowMeQuestVO");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleQuestData = require("gge-module:export_CastleQuestData");
var __dep_export_CastleQuestConditionVO = require("gge-module:export_CastleQuestConditionVO");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
