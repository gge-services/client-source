Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_ClientConstFilter = require("gge-module:export_ClientConstFilter");
var __dep_export_ClientConstQuestCondition = require("gge-module:export_ClientConstQuestCondition");
var __dep_export_CastleQuestDataEvent = require("gge-module:export_CastleQuestDataEvent");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleQuestBookMainQuestListVO = require("gge-module:export_CastleQuestBookMainQuestListVO");
var __s0local0 = function (__s1param0) {
  function CastleQuestData(__s3param0) {
    var __s3local0 = this;
    __s3local0._activeQuests = [];
    __s3local0._activeQuestsByCategory = new Map();
    __s3local0._isFirstQuestAfterStarter = false;
    __s3local0.mainQuestsList = new __dep_export_CastleQuestBookMainQuestListVO.CastleQuestBookMainQuestListVO();
    __s3local0._activeQuestCount = 0;
    __s3local0.illegalQuestConditions = [];
    __s3local0._currentSearchEnemyCounter = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).generateQuestXMLList(__s3param0);
    __s3local0.createQuestPrototypes();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleQuestData, __s1param0);
  CastleQuestData.prototype.reset = function () {
    this._activeQuests = [];
    this._activeQuestsByCategory = new Map();
  };
  CastleQuestData.prototype.generateQuestXMLList = function (__s7param0) {
    this._questxMLList = new Map();
    this._questSeriesXMLList = new Map();
    var __s7local0 = __s7param0.quests;
    if (__s7local0 != null) {
      for (var __s7local1 = 0, __s7local2 = __s7local0; __s7local1 < __s7local2.length; __s7local1++) {
        var __s7local3 = __s7local2[__s7local1];
        if (__s7local3 !== undefined) {
          var __s7local4 = parseInt(__s7local3.questID || "");
          this._questxMLList.set(__s7local4, __s7local3);
          var __s7local5 = parseInt(__s7local3.questSeriesID || "");
          if (!this._questSeriesXMLList.get(__s7local5)) {
            this._questSeriesXMLList.set(__s7local5, []);
          }
          this._questSeriesXMLList.get(__s7local5).push(__s7local3);
        }
      }
    }
  };
  CastleQuestData.prototype.createQuestPrototypes = function () {
    this._questPrototypes = [];
    if (this._questxMLList != null) {
      for (var __s14local0 = 0, __s14local1 = Array.from(this._questxMLList.values()); __s14local0 < __s14local1.length; __s14local0++) {
        var __s14local2 = __s14local1[__s14local0];
        if (__s14local2 !== undefined) {
          var __s14local3 = new __dep_export_CastleQuestVO.CastleQuestVO();
          __s14local3.fillFromParamXML(__s14local2);
          __s14local3.completed = true;
          this._questPrototypes.push(__s14local3);
        }
      }
    }
  };
  CastleQuestData.prototype.createQuest = function (__s20param0) {
    if (!this._questxMLList.get(__s20param0)) {
      throw new Error("Unable to create quest with ID " + __s20param0 + ": This quest is not defined in the XML.Make sure you versionized the newest Items.ggs.");
    }
    var __s20local0 = new __dep_export_CastleQuestVO.CastleQuestVO();
    __s20local0.fillFromParamXML(this._questxMLList.get(__s20param0));
    return __s20local0;
  };
  CastleQuestData.prototype.createQuestSeries = function (__s23param0) {
    var __s23local0 = __s23param0.questSeriesID;
    var __s23local1 = [];
    for (var __s23local2 = 0, __s23local3 = this._questSeriesXMLList.get(__s23local0); __s23local2 < __s23local3.length; __s23local2++) {
      var __s23local4 = __s23local3[__s23local2];
      if (__s23local4 !== undefined) {
        var __s23local5 = new __dep_export_CastleQuestVO.CastleQuestVO();
        __s23local5.fillFromParamXML(__s23local4);
        if (!__s23local5.isStarterQuest && !__s23local5.hidden && !!__s23local5.compareLevelRequirements(__s23param0)) {
          __s23local1.push(__s23local5);
        }
      }
    }
    return __s23local1.sort(__dep_export_ClientConstSort.ClientConstSort.sortByQuestSeriesNumber);
  };
  CastleQuestData.prototype.validateEpicQuests = function () {
    var __s29local0 = new Map();
    var __s29local1 = this.getQuestListByCategory(CastleQuestData.CATEGORY_EPIC);
    if (__s29local1 != null) {
      for (var __s29local2 = 0, __s29local3 = __s29local1; __s29local2 < __s29local3.length; __s29local2++) {
        var __s29local4 = __s29local3[__s29local2];
        if (__s29local4 !== undefined) {
          var __s29local5 = __s29local0.get(__s29local4.questSeriesID);
          if (!__s29local5 || __s29local5 && __s29local5.questSeriesNumber < __s29local4.questSeriesNumber) {
            if (__s29local5) {
              this.removeQuest(__s29local5.questID);
            }
            __s29local0.set(__s29local4.questSeriesID, __s29local4);
          } else {
            this.removeQuest(__s29local5.questID);
          }
        }
      }
    }
  };
  CastleQuestData.prototype.createEpicQuestSeriesByQuest = function (__s38param0) {
    for (var __s38local0 = this.createQuestSeries(__s38param0), __s38local1 = 0; __s38local1 < __s38local0.length; __s38local1++) {
      var __s38local2 = __s38local0[__s38local1];
      if (__s38local2.questSeriesNumber < __s38param0.questSeriesNumber) {
        __s38local2.completed = true;
      } else if (__s38local2.questID == __s38param0.questID) {
        __s38local0[__s38local1] = __s38param0;
      } else {
        __s38local2.isLocked = true;
      }
      __s38local0[__s38local1].setVisualNumbersForEpicQuest([__s38local1 + 1, __s38local0.length]);
    }
    return __s38local0;
  };
  CastleQuestData.prototype.startQuest = function (__s45param0) {
    this._activeQuests ||= [];
    var __s45local0 = this.createQuest(__s45param0);
    this._activeQuests.push(__s45local0);
    this.updateActiveQuests();
    this.dispatchEvent(new __dep_export_CastleQuestDataEvent.CastleQuestDataEvent(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_START, __s45local0));
  };
  CastleQuestData.prototype.updateActiveQuests = function () {
    this.updateIllegalQuestConditions();
    __dep_exact_9e901e8e2483a22f_1.VectorSortHelper.sort(this._activeQuests, __dep_export_ClientConstSort.ClientConstSort.sortByQuestId);
    this.updateCategoryDictionary();
  };
  CastleQuestData.prototype.updateCategoryDictionary = function () {
    this._activeQuestsByCategory = new Map();
    this._activeQuestCount = 0;
    for (var __s49local0 = 0; __s49local0 <= CastleQuestData.CATEGORY_EPIC; __s49local0++) {
      var __s49local1 = this.groupAndFilterAndSortQuests(__s49local0);
      this._activeQuestsByCategory.set(__s49local0, __s49local1);
      this._activeQuestCount += __dep_exact_f855840627e6e145.int(__s49local1.length);
    }
  };
  CastleQuestData.prototype.parseQuestProgress = function (__s53param0) {
    if (__s53param0) {
      var __s53local0 = __dep_exact_f855840627e6e145.int(__s53param0.shift());
      var __s53local1 = this.getActiveQuestByID(__s53local0);
      if (__s53local1) {
        this.dispatchEvent(new __dep_export_CastleQuestDataEvent.CastleQuestDataEvent(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_PROGRESS, __s53local1));
      }
    }
  };
  CastleQuestData.prototype.finishQuest = function (__s57param0) {
    var __s57local0 = this.isQuestActive(__s57param0);
    this.removeQuest(__s57param0);
    if (__s57local0) {
      this.dispatchEvent(new __dep_export_CastleQuestDataEvent.CastleQuestDataEvent(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_FINISHED, this.getQuestPrototype(__s57param0)));
    }
  };
  CastleQuestData.prototype.parseActiveQuestList = function (__s60param0) {
    this._activeQuests = [];
    if (__s60param0 != null) {
      for (var __s60local0 = 0, __s60local1 = __s60param0; __s60local0 < __s60local1.length; __s60local0++) {
        var __s60local2 = __s60local1[__s60local0];
        if (__s60local2 !== undefined) {
          var __s60local3 = this.createQuest(__s60local2.QID);
          if (__s60local3) {
            __s60local3.fillFromParams(__s60local2);
            this._activeQuests.push(__s60local3);
          }
        }
      }
    }
    this.updateActiveQuests();
    this.dispatchEvent(new __dep_export_CastleQuestDataEvent.CastleQuestDataEvent(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.GET_QUESTLIST));
  };
  CastleQuestData.prototype.getQuestPrototype = function (__s67param0) {
    var __s67local0 = this.createQuest(__s67param0);
    __s67local0.completed = true;
    if (__s67local0.isEpicQuest) {
      __s67local0 = this.createEpicQuestSeriesByQuest(__s67local0).filter(function (__s70param0) {
        return __s70param0.questID == __s67param0;
      })[0];
    }
    return __s67local0;
  };
  CastleQuestData.prototype.getCurrentStarterQuestVO = function () {
    if (this._activeQuests != null) {
      for (var __s72local0 = 0, __s72local1 = this._activeQuests; __s72local0 < __s72local1.length; __s72local0++) {
        var __s72local2 = __s72local1[__s72local0];
        if (__s72local2 !== undefined && __s72local2.isStarterQuest && !__s72local2.hidden) {
          return __s72local2;
        }
      }
    }
    return null;
  };
  CastleQuestData.prototype.removeQuest = function (__s78param0) {
    for (var __s78local0 = 0; __s78local0 < this._activeQuests.length; __s78local0++) {
      if (this._activeQuests[__s78local0].questID == __s78param0) {
        this._activeQuests.splice(__s78local0, 1);
        this.updateActiveQuests();
        return;
      }
    }
  };
  CastleQuestData.prototype.getActiveQuestByID = function (__s83param0) {
    if (this._activeQuests != null) {
      for (var __s83local0 = 0, __s83local1 = this._activeQuests; __s83local0 < __s83local1.length; __s83local0++) {
        var __s83local2 = __s83local1[__s83local0];
        if (__s83local2 !== undefined && __s83local2.questID == __s83param0) {
          return __s83local2;
        }
      }
    }
    return null;
  };
  CastleQuestData.prototype.getQuestListByCategory = function (__s89param0) {
    var __s89local0;
    if (this._activeQuestsByCategory.get(__s89param0)) {
      __s89local0 = this._activeQuestsByCategory.get(__s89param0).filter(__dep_export_ClientConstFilter.ClientConstFilter.filterActiveQuests);
    }
    return __s89local0 || [];
  };
  CastleQuestData.prototype.groupAndFilterAndSortQuests = function (__s92param0) {
    var __s92local0 = this._activeQuests.filter(__dep_export_ClientConstFilter.ClientConstFilter.filterVisibleQuestsForCategory(__s92param0));
    var __s92local1 = [];
    if (this._activeQuests != null) {
      for (var __s92local2 = 0, __s92local3 = this._activeQuests; __s92local2 < __s92local3.length; __s92local2++) {
        var __s92local4 = __s92local3[__s92local2];
        if (__s92local4 !== undefined && __s92local1.indexOf(__s92local4.sortPriority) < 0) {
          __s92local1.push(__s92local4.sortPriority);
        }
      }
    }
    __s92local1.sort(__dep_export_ClientConstSort.ClientConstSort.sortByPriority);
    var __s92local5 = [];
    if (__s92local1 != null) {
      for (var __s92local6 = 0, __s92local7 = __s92local1; __s92local6 < __s92local7.length; __s92local6++) {
        var __s92local8 = __s92local7[__s92local6];
        if (__s92local8 !== undefined) {
          __s92local5 = __s92local5.concat(this.filterAndSortQuests(__s92local0.filter(__dep_export_ClientConstFilter.ClientConstFilter.filterByPriority(__s92local8))));
        }
      }
    }
    if (__s92local5.length > 1) {
      var __s92local9 = __s92local5.filter(__dep_export_ClientConstFilter.ClientConstFilter.filterQuestIsBuyRuby);
      var __s92local10 = __s92local5.filter(__dep_export_ClientConstFilter.ClientConstFilter.filterQuestIsNotBuyRuby);
      var __s92local11 = [];
      if (__s92local10.length > 0) {
        __s92local11.push(__s92local10.shift());
      }
      return (__s92local11 = __s92local11.concat(__s92local9)).concat(__s92local10);
    }
    return __s92local5;
  };
  CastleQuestData.prototype.filterAndSortQuests = function (__s104param0) {
    var __s104local0 = __s104param0.filter(__dep_export_ClientConstFilter.ClientConstFilter.filterEventQuests);
    __s104local0.sort(__dep_export_ClientConstSort.ClientConstSort.sortByEventId());
    __s104local0 = this.checkTemporaryQuestsAndFilter(__s104local0);
    var __s104local1 = __s104param0.filter(__dep_export_ClientConstFilter.ClientConstFilter.filterXpQuests);
    __s104local1.sort(__dep_export_ClientConstSort.ClientConstSort.sortByXpReward);
    var __s104local2 = __s104param0.filter(__dep_export_ClientConstFilter.ClientConstFilter.filterC2Quests);
    __s104local2.sort(__dep_export_ClientConstSort.ClientConstSort.sortByC2Reward);
    var __s104local3 = __s104param0.filter(__dep_export_ClientConstFilter.ClientConstFilter.filterLeftOverQuests);
    var __s104local4 = [];
    return __s104local4 = (__s104local4 = (__s104local4 = (__s104local4 = __s104local4.concat(__s104local0)).concat(__s104local1)).concat(__s104local2)).concat(__s104local3);
  };
  CastleQuestData.prototype.checkTemporaryQuestsAndFilter = function (__s106param0) {
    if (__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_TEMPORARY_QUESTS) != null) {
      var __s106local0;
      for (var __s106local1 = __dep_exact_f855840627e6e145.int(__s106param0.length - 1); __s106local1 >= 0; __s106local1--) {
        if ((__s106local0 = __s106param0[__s106local1]).isTemporaryQuest && this.hasStandardQuestWithCondition(__s106local0.conditions)) {
          __s106param0.splice(__s106local1, 1);
        }
      }
    }
    return __s106param0;
  };
  CastleQuestData.prototype.hasStandardQuestWithCondition = function (__s112param0) {
    if (this._activeQuests != null) {
      for (var __s112local0 = 0, __s112local1 = this._activeQuests; __s112local0 < __s112local1.length; __s112local0++) {
        var __s112local2 = __s112local1[__s112local0];
        if (__s112local2 !== undefined && !__s112local2.isTemporaryQuest && __s112local2.hasConditionIn(__s112param0)) {
          return true;
        }
      }
    }
    return false;
  };
  CastleQuestData.prototype.getObjectiveListForMapId = function (__s118param0) {
    var __s118local0;
    var __s118local1 = __dep_export_ClientConstFilter.ClientConstFilter.filterVisibleObjectivesForTreasureMap(__s118param0);
    var __s118local2 = new Map();
    for (var __s118local3 = 0, __s118local4 = this._activeQuests; __s118local3 < __s118local4.length; __s118local3++) {
      if (__s118local1(__s118local0 = __s118local4[__s118local3])) {
        __s118local2.add(__s118local0.questID, __s118local0);
      }
    }
    for (var __s118local5 = 0, __s118local6 = this._questPrototypes; __s118local5 < __s118local6.length; __s118local5++) {
      if (__s118local1(__s118local0 = __s118local6[__s118local5])) {
        if (!__s118local2.hasKey(__s118local0.questID)) {
          __s118local2.add(__s118local0.questID, __s118local0);
        }
      }
    }
    var __s118local7 = __s118local2.toArray();
    __s118local7.sort(__dep_export_ClientConstSort.ClientConstSort.objectiveOrder);
    return __s118local7;
  };
  CastleQuestData.prototype.isQuestActive = function (__s127param0) {
    for (var __s127local0 = 0; __s127local0 < this._activeQuests.length; __s127local0++) {
      if (this._activeQuests[__s127local0].questID == __s127param0 && !this._activeQuests[__s127local0].hidden) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(CastleQuestData.prototype, "activeQuestCount", {
    get: function () {
      return this._activeQuestCount;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestData.prototype.getCurrentSingleQuest = function () {
    if (!this._activeQuests || this._activeQuests.length < 1) {
      return null;
    } else {
      return this._activeQuests[0];
    }
  };
  Object.defineProperty(CastleQuestData.prototype, "isFirstQuestAfterStarter", {
    get: function () {
      var __s138local0 = this._isFirstQuestAfterStarter;
      this._isFirstQuestAfterStarter = false;
      return __s138local0;
    },
    set: function (__s140param0) {
      this._isFirstQuestAfterStarter = __s140param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestData.prototype.getQuestGiverSmallClassName = function (__s142param0, __s142param1) {
    if (__s142param0 == __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_SELECTED_HERO) {
      var __s142local0 = "QuestGiverSmall_Hero_";
      if (__dep_export_CastleModel.CastleModel.userData.selectedHeroID > -1) {
        __s142local0 += __dep_export_CastleModel.CastleModel.userData.selectedHeroID;
      } else {
        __s142local0 += "801";
      }
      return __s142local0;
    }
    return "QuestGiverSmall_" + __s142param0;
  };
  Object.defineProperty(CastleQuestData.prototype, "questxMLList", {
    get: function () {
      return this._questxMLList;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestData.prototype.updateIllegalQuestConditions = function () {
    this.illegalQuestConditions = [];
    if (__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.loginIsKeyBased) {
      this.illegalQuestConditions.push(__dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_INVITE_A_FRIEND);
    }
    this.illegalQuestConditions.push(__dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_CONNECT_TO_FACEBOOK);
    if (__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.loginIsKeyBased || __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isOnSpecialServer || __dep_export_SpecialServerHelper.SpecialServerHelper.isOnKeyLoginToNormalLoginServer) {
      this.illegalQuestConditions.push(__dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_OPTIN_NEWSLETTER);
    }
  };
  CastleQuestData.prototype.showQuestIDs = function () {
    return (__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isTest || __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.suk.length > 0) && __dep_export_CastleModel.CastleModel.localData.readAddQuestIDs();
  };
  CastleQuestData.prototype.foundActiveQuestWithConditionType = function (__s155param0) {
    if (this._activeQuests != null) {
      for (var __s155local0 = 0, __s155local1 = this._activeQuests; __s155local0 < __s155local1.length; __s155local0++) {
        var __s155local2 = __s155local1[__s155local0];
        if (__s155local2 !== undefined && __s155local2.hasConditionOfType(__s155param0)) {
          return true;
        }
      }
    }
    return false;
  };
  CastleQuestData.prototype.getActiveStarterQuestByEventID = function (__s161param0) {
    for (var __s161local0 = 0, __s161local1 = this._activeQuests; __s161local0 < __s161local1.length; __s161local0++) {
      var __s161local2 = __s161local1[__s161local0];
      if (__s161local2 !== undefined && __s161local2.isStarterQuest && __s161local2.eventID == __s161param0) {
        return __s161local2;
      }
    }
    return null;
  };
  Object.defineProperty(CastleQuestData.prototype, "currentSearchEnemyCounter", {
    get: function () {
      return this._currentSearchEnemyCounter;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestData.prototype.increaseCurrentSearchEnemyCounter = function () {
    this._currentSearchEnemyCounter++;
  };
  CastleQuestData.prototype.resetCurrentSearchEnemyCounter = function () {
    this._currentSearchEnemyCounter = 0;
  };
  CastleQuestData.prototype.isQuestSeriesActive = function (__s172param0) {
    return this._activeQuests.some(function (__s174param0) {
      return __s174param0.questSeriesID == __s172param0;
    });
  };
  CastleQuestData.prototype.getActiveQuestFromSeries = function (__s176param0) {
    return this._activeQuests.find(function (__s178param0) {
      return __s178param0.questSeriesID == __s176param0;
    });
  };
  CastleQuestData.DAILY_QUEST_THRESHOLDS = [3, 6, 9, 12];
  CastleQuestData.CATEGORY_GREEN = 0;
  CastleQuestData.CATEGORY_ICE = 1;
  CastleQuestData.CATEGORY_DESSERT = 2;
  CastleQuestData.CATEGORY_VOLCANO = 3;
  CastleQuestData.CATEGORY_EVENTS = 4;
  CastleQuestData.CATEGORY_CAMPAIGN = 5;
  CastleQuestData.CATEGORY_EPIC = 6;
  return CastleQuestData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleQuestData = __s0local0;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_CastleQuestVO = require("gge-module:export_CastleQuestVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
