Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleQuestData = require("gge-module:export_CastleQuestData");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_CastleScoreBarComponent = require("gge-module:export_CastleScoreBarComponent");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function DailyQuestScoreBarProperties(__s3param0) {
    this._rewardList = __s3param0;
  }
  Object.defineProperty(DailyQuestScoreBarProperties.prototype, "maxItemsPerReward", {
    get: function () {
      return DailyQuestScoreBarProperties.MAX_NUMBER_OF_REWARDS_PER_PACKAGE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyQuestScoreBarProperties.prototype, "numThresholdRewards", {
    get: function () {
      return DailyQuestScoreBarProperties.NUMBER_OF_THRESHOLD_REWARDS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyQuestScoreBarProperties.prototype, "numRankRewards", {
    get: function () {
      return DailyQuestScoreBarProperties.NUMBER_OF_RANK_REWARDS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyQuestScoreBarProperties.prototype, "orientation", {
    get: function () {
      return __dep_export_CastleScoreBarComponent.CastleScoreBarComponent.ORIENTATION_VERTICAL;
    },
    enumerable: true,
    configurable: true
  });
  DailyQuestScoreBarProperties.prototype.getOwnPointsText = function (__s13param0) {
    return new __dep_exact_92d05af59ee2ff30.NumberVO(__s13param0);
  };
  DailyQuestScoreBarProperties.prototype.getReward = function (__s15param0) {
    return this._rewardList[__s15param0];
  };
  DailyQuestScoreBarProperties.prototype.getToolTip = function (__s17param0, __s17param1) {
    return {
      t: "dialog_dailyQuests_rank" + (__s17param0 + 1) + "_tooltip",
      p: [__dep_export_CastleQuestData.CastleQuestData.DAILY_QUEST_THRESHOLDS[__s17param0]]
    };
  };
  DailyQuestScoreBarProperties.prototype.getLabel = function (__s19param0) {
    return new __dep_exact_92d05af59ee2ff30.NumberVO(__dep_export_CastleQuestData.CastleQuestData.DAILY_QUEST_THRESHOLDS[__s19param0]);
  };
  DailyQuestScoreBarProperties.prototype.getDescription = function (__s21param0) {
    return null;
  };
  DailyQuestScoreBarProperties.prototype.hasLabels = function () {
    return true;
  };
  DailyQuestScoreBarProperties.prototype.hasDecriptions = function () {
    return false;
  };
  Object.defineProperty(DailyQuestScoreBarProperties.prototype, "rewardIconDimension", {
    get: function () {
      return DailyQuestScoreBarProperties.REWARD_DIMENSION;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyQuestScoreBarProperties.prototype, "collectableRenderOption", {
    get: function () {
      return __dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED;
    },
    enumerable: true,
    configurable: true
  });
  DailyQuestScoreBarProperties.prototype.preRenderFunc = function (__s31param0) {
    if (__s31param0.itemVO) {
      var __s31local0 = __s31param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM);
      switch (__s31param0.itemVO.itemType) {
        case __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_RARENESS:
        case __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_UNIQUE:
        case __dep_export_CollectableEnum.CollectableEnum.HERO_RANDOM:
        case __dep_export_CollectableEnum.CollectableEnum.GEM:
        case __dep_export_CollectableEnum.CollectableEnum.GEM_RANDOM:
        case __dep_export_CollectableEnum.CollectableEnum.VIP_TIME:
          __s31local0.transform.offset.y = 4;
          __s31local0.transform.scale = 1.1;
          break;
        case __dep_export_CollectableEnum.CollectableEnum.C1:
        case __dep_export_CollectableEnum.CollectableEnum.C2:
        case __dep_export_CollectableEnum.CollectableEnum.WOOD:
        case __dep_export_CollectableEnum.CollectableEnum.STONE:
        case __dep_export_CollectableEnum.CollectableEnum.FOOD:
          __s31local0.transform.scale = 0.9;
          __s31local0.transform.offset.y = -3;
          break;
        case __dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY:
          if (!__s31param0.itemVO.isInIdRange(__dep_export_CastleModel.CastleModel.currencyData.getCurrencyRangeByID(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_RANGE_MINUTE_SKIP))) {
            break;
          }
        case __dep_export_CollectableEnum.CollectableEnum.UNITS:
        case __dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY:
          __s31local0.transform.scale = 0.8;
          __s31local0.transform.offset.y = -2;
          break;
        case __dep_export_CollectableEnum.CollectableEnum.BUILDING:
          __s31local0.transform.offset.y = 3;
      }
    }
  };
  DailyQuestScoreBarProperties.prototype.thresholdProgress = function (__s36param0, __s36param1, __s36param2) {
    var __s36local0 = __s36param1[__s36param0];
    var __s36local1 = __s36param0 > 0 ? __s36param1[__s36param0 - 1] : 0;
    return Math.min(1, Math.max(__s36param2 - __s36local1, 0) / (__s36local0 - __s36local1));
  };
  Object.defineProperty(DailyQuestScoreBarProperties.prototype, "numLabels", {
    get: function () {
      if (__dep_export_CastleQuestData.CastleQuestData.DAILY_QUEST_THRESHOLDS) {
        return __dep_export_CastleQuestData.CastleQuestData.DAILY_QUEST_THRESHOLDS.length;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  DailyQuestScoreBarProperties.__initialize_static_members = function () {
    DailyQuestScoreBarProperties.MAX_NUMBER_OF_REWARDS_PER_PACKAGE = 4;
    DailyQuestScoreBarProperties.NUMBER_OF_THRESHOLD_REWARDS = 4;
    DailyQuestScoreBarProperties.NUMBER_OF_RANK_REWARDS = 0;
    DailyQuestScoreBarProperties.REWARD_DIMENSION = new __s0local0(33, 33);
  };
  return DailyQuestScoreBarProperties;
}();
exports.DailyQuestScoreBarProperties = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IScorebarProperties");
__s0local1.__initialize_static_members();
