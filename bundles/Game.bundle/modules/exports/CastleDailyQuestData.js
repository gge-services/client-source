Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleQuestDataEvent = require("gge-module:export_CastleQuestDataEvent");
var __s0local0 = function (__s1param0) {
  function CastleDailyQuestData(__s3param0) {
    var __s3local0 = this;
    __s3local0._xmlQuestDic = new Map();
    __s3local0._currentQuests = [];
    __s3local0._thresholdRewards = [];
    __s3local0._playerQuestLevel = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).xmlData = __s3param0;
    __s3local0._xmlQuestDic = __s3local0.createXmlQuestDic();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDailyQuestData, __s1param0);
  CastleDailyQuestData.prototype.reset = function () {
    __s1param0.prototype.reset.call(this);
    this._currentQuests = [];
    this._thresholdRewards = [];
    this._playerQuestLevel = 0;
    if (this._xmlQuestDic != null) {
      for (var __s5local0 = 0, __s5local1 = Array.from(this._xmlQuestDic.values()); __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          __s5local2.reset();
        }
      }
    }
  };
  CastleDailyQuestData.prototype.parse_DQL = function (__s11param0) {
    if (__s11param0) {
      this.createXmlQuestDic();
      this.parseThresholdRewardList(__s11param0.RS);
      this._playerQuestLevel = __dep_exact_f855840627e6e145.int(__s11param0.PQL);
      this._currentQuests = [];
      this.parse_FDQ(__s11param0.FDQ);
      this.parse_RDQ(__s11param0.RDQ);
      this._currentQuests.sort(__dep_export_ClientConstSort.ClientConstSort.sortByDailyQuestID);
      this.dispatchEvent(new __dep_export_CastleQuestDataEvent.CastleQuestDataEvent(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.DAILYQUEST_REFRESHED));
    }
  };
  CastleDailyQuestData.prototype.parse_RDQ = function (__s14param0) {
    if (__s14param0 && __s14param0 != null) {
      for (var __s14local0 = 0, __s14local1 = __s14param0; __s14local0 < __s14local1.length; __s14local0++) {
        var __s14local2 = __s14local1[__s14local0];
        if (__s14local2 !== undefined && this._xmlQuestDic.get(__s14local2.QID)) {
          var __s14local3 = this._xmlQuestDic.get(__s14local2.QID);
          __s14local3.setProgress(__s14local2.P);
          this._currentQuests.push(__s14local3);
        }
      }
    }
  };
  CastleDailyQuestData.prototype.parse_FDQ = function (__s20param0) {
    if (__s20param0) {
      for (var __s20local0 = 0; __s20local0 < __s20param0.length; ++__s20local0) {
        var __s20local1 = __dep_exact_f855840627e6e145.int(__s20param0[__s20local0]);
        if (this._xmlQuestDic.get(__s20local1)) {
          var __s20local2 = this._xmlQuestDic.get(__s20local1);
          __s20local2.setFinished();
          this._currentQuests.push(__s20local2);
        }
      }
    }
  };
  CastleDailyQuestData.prototype.parseThresholdRewardList = function (__s26param0) {
    if (__s26param0) {
      this._thresholdRewards = [];
      for (var __s26local0 = 0; __s26local0 < __s26param0.length; __s26local0++) {
        this._thresholdRewards.push(__dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s26param0[__s26local0]));
      }
    }
  };
  CastleDailyQuestData.prototype.createXmlQuestDic = function () {
    var __s31local0 = new Map();
    var __s31local1 = this.xmlData.dailyactivities;
    if (__s31local1 != null) {
      for (var __s31local2 = 0, __s31local3 = __s31local1; __s31local2 < __s31local3.length; __s31local2++) {
        var __s31local4 = __s31local3[__s31local2];
        if (__s31local4 !== undefined) {
          var __s31local5 = new __dep_export_DailyQuestVO.DailyQuestVO();
          __s31local5.fillFromParamXML(__s31local4);
          __s31local0.set(__s31local5.questID, __s31local5);
        }
      }
    }
    return __s31local0;
  };
  CastleDailyQuestData.prototype.getFinishedQuests = function () {
    var __s37local0 = [];
    if (this._currentQuests != null) {
      for (var __s37local1 = 0, __s37local2 = this._currentQuests; __s37local1 < __s37local2.length; __s37local1++) {
        var __s37local3 = __s37local2[__s37local1];
        if (__s37local3 !== undefined && __s37local3.isFinished && !__s37local3.isTempServerQuest) {
          __s37local0.push(__s37local3);
        }
      }
    }
    return __s37local0;
  };
  CastleDailyQuestData.prototype.getRunningQuestCount = function () {
    var __s43local0 = 0;
    if (this._currentQuests != null) {
      for (var __s43local1 = 0, __s43local2 = this._currentQuests; __s43local1 < __s43local2.length; __s43local1++) {
        var __s43local3 = __s43local2[__s43local1];
        if (__s43local3 !== undefined) {
          if (!__s43local3.isFinished && !__s43local3.isTempServerQuest) {
            __s43local0++;
          }
        }
      }
    }
    return __s43local0;
  };
  CastleDailyQuestData.prototype.getTempServerQuests = function () {
    var __s50local0 = [];
    if (this._currentQuests != null) {
      for (var __s50local1 = 0, __s50local2 = this._currentQuests; __s50local1 < __s50local2.length; __s50local1++) {
        var __s50local3 = __s50local2[__s50local1];
        if (__s50local3 !== undefined && __s50local3.isTempServerQuest) {
          __s50local0.push(__s50local3);
        }
      }
    }
    return __s50local0;
  };
  Object.defineProperty(CastleDailyQuestData.prototype, "thresholdRewards", {
    get: function () {
      return this._thresholdRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDailyQuestData.prototype, "playerQuestLevel", {
    get: function () {
      return this._playerQuestLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDailyQuestData.prototype, "currentQuests", {
    get: function () {
      return this._currentQuests;
    },
    enumerable: true,
    configurable: true
  });
  return CastleDailyQuestData;
}(require("gge-module:export_CastleBasicData").CastleBasicData);
exports.CastleDailyQuestData = __s0local0;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_DailyQuestVO = require("gge-module:export_DailyQuestVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
