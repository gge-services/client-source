Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __s0local0 = createjs.Event;
var __s0local1 = function (__s1param0) {
  function LuckyWheelData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.SGN_LUCKY_CATEGORY_RECEIVED = new __dep_exact_9e901e8e2483a22f.NoneValueSignal();
    __s3local0._rewardSets = new Map();
    __s3local0._normalPreviewSets = new Map();
    __s3local0._proModePreviewSets = new Map();
    __s3local0._neededSpinsForNextClass = new Map();
    __s3local0._c2CostsPerSpinByWinClass = new Map();
    __s3local0._winClassesAmount = 0;
    __s3local0._isProMode = false;
    __s3local0._currentJackpotSet = 0;
    __s3local0._nextJackpotSet = 0;
    __s3local0._nextJackpotSpinJackpotSet = 0;
    __s3local0._winningCategory = NaN;
    __s3local0._hasVisitedProMode = false;
    __s3local0._hasFreeSpin = false;
    __s3local0._currentWinClass = Number.NaN;
    __s3local0._hasLevelUp = false;
    __s3local0._winClassProgress = NaN;
    __s3local0._showGuaranteedJackpotDialog = true;
    __s3local0._showIncreaseWinClassDialog = true;
    __s3local0._winningCategoryReceived = false;
    __s3local0.parseXml(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LuckyWheelData, __s1param0);
  LuckyWheelData.prototype.parseLWM = function (__s5param0) {
    this._isProMode = !this._isProMode;
    this._nextJackpotSpinJackpotSet = __dep_exact_f855840627e6e145.int(__s5param0.JHID);
    this._nextJackpotSet = __dep_exact_f855840627e6e145.int(__s5param0.JSID);
    this.dispatchEvent(new __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.LUCKY_WHEEL_MODE_CHANGED, this.eventVO));
  };
  LuckyWheelData.prototype.parseLWJ = function (__s7param0) {
    this.parseLWS(__s7param0);
    this.dispatchEvent(new __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.LUCKY_WHEEL_BOUGHT_JACKPOT, this.eventVO));
  };
  LuckyWheelData.prototype.parseLWS = function (__s9param0) {
    this.parseBasics(__s9param0);
    this._winningCategory = __s9param0.WC;
    var __s9local0 = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s9param0.R);
    if (__s9local0.length > 0) {
      this._rewardedItem = __s9local0.getItemByIndex(0);
    }
    this.eventVO.scoreEventVO.setRankAndPoints(__s9param0.OR, __s9param0.OP, null);
    this.dispatchEvent(new __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.LUCKY_WHEEL_AWARDED, this.eventVO));
  };
  LuckyWheelData.prototype.parseLWC = function (__s12param0) {
    this.parseBasics(__s12param0);
    this.dispatchEvent(new __dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.LUCKY_WHEEL_WINCLASS_CHANGED, this.eventVO));
  };
  LuckyWheelData.prototype.parseBasics = function (__s14param0) {
    this._hasVisitedProMode = !!__s14param0.HVPM;
    this._hasFreeSpin = !!__s14param0.HFS;
    this._isProMode = !!__s14param0.PMA;
    this._hasLevelUp = !isNaN(this.currentWinClass) && this.currentWinClass != __s14param0.CWC;
    this._currentWinClass = __s14param0.CWC;
    this._winClassProgress = __s14param0.WCP;
    this._nextJackpotSet = __dep_exact_f855840627e6e145.int(__s14param0.JSID);
    this._nextJackpotSpinJackpotSet = __dep_exact_f855840627e6e145.int(__s14param0.JHID);
  };
  LuckyWheelData.prototype.parseXml = function (__s16param0) {
    this._rewardSets = this.createRewardItemsMappedToSetID(__s16param0, "luckywheelrewardsets", "luckywheelrewardset", "luckyWheelRewardSetID", "rewardIDs");
    this._normalPreviewSets = this.createRewardItemsMappedToSetID(__s16param0, "luckywheelclasses", "luckywheelclass", "luckyWheelClassID", "normalPreview");
    this._proModePreviewSets = this.createRewardItemsMappedToSetID(__s16param0, "luckywheelclasses", "luckywheelclass", "luckyWheelClassID", "hardcorePreview");
    this._pointThresholds = this.getActivityRewardThresholds(__s16param0);
    this._winClassesAmount = __s16param0.luckywheelclasses.length;
    var __s16local0 = 0;
    this._sumOfSpinsWithinThresholds = new Array();
    for (var __s16local1 = 0; __s16local1 < this._winClassesAmount; __s16local1++) {
      var __s16local2 = __s16param0.luckywheelclasses[__s16local1];
      var __s16local3 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("luckyWheelClassID", __s16local2, "0"));
      var __s16local4 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("neededSpinsForNextClass", __s16local2, "0"));
      this._c2CostsPerSpinByWinClass.set(__s16local3, Number(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("C2PerSkippedSpin", __s16local2, "0")));
      this._neededSpinsForNextClass.set(__s16local3, __s16local4);
      if (__s16local3 >= this._pointThresholds[__s16local0] || __s16local3 == 1) {
        this._sumOfSpinsWithinThresholds.push(this._neededSpinsForNextClass.get(__s16local3));
        __s16local0++;
      } else {
        this._sumOfSpinsWithinThresholds.push(this._neededSpinsForNextClass.get(__s16local3 - 1) + this._neededSpinsForNextClass.get(__s16local3));
      }
    }
  };
  LuckyWheelData.prototype.getActivityRewardThresholds = function (__s22param0) {
    var __s22local0 = new Array();
    for (var __s22local1 = __dep_exact_f855840627e6e145.int(__s22param0.luckywheelclasses.length), __s22local2 = 0; __s22local2 < __s22local1; __s22local2++) {
      if ((__s22param0.luckywheelclasses[__s22local2].activityRewardThreshold || "") != "") {
        __s22local0.push(__dep_exact_f855840627e6e145.int(__s22param0.luckywheelclasses[__s22local2].luckyWheelClassID || ""));
      }
    }
    return __s22local0;
  };
  LuckyWheelData.prototype.createRewardItemsMappedToSetID = function (__s27param0, __s27param1, __s27param2, __s27param3, __s27param4) {
    var __s27local0;
    var __s27local1 = __s27param0[__s27param1];
    __s27local1.length;
    var __s27local2 = 0;
    var __s27local3 = new Map();
    for (var __s27local4 = 0, __s27local5 = __s27local1; __s27local4 < __s27local5.length; __s27local4++) {
      var __s27local6 = __s27local5[__s27local4];
      __s27local0 = __s27local6[__s27param4];
      __s27local2 = __dep_exact_f855840627e6e145.int(__s27local6[__s27param3]);
      __s27local3.set(__s27local2, __dep_export_CollectableManager.CollectableManager.parser.createListFromRewardIdsString(__s27local0));
    }
    return __s27local3;
  };
  Object.defineProperty(LuckyWheelData.prototype, "levelLabels", {
    get: function () {
      var __s31local0 = [];
      __s31local0 = __s31local0.concat(this._pointThresholds);
      if (this.eventVO) {
        __s31local0.push(__dep_exact_92d05af59ee2ff30.Localize.text("Ranking_TopX", [this.eventVO.scoreEventVO.topX]));
        __s31local0.push(__dep_exact_92d05af59ee2ff30.Localize.text("Ranking_Winner"));
        return __s31local0;
      } else {
        return __s31local0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "nextWinClassProgress", {
    get: function () {
      if (this.isMaxIncreaseWinClass) {
        return 1;
      } else {
        return (this._winClassProgress + (this.isProMode ? __dep_exact_26a421b704832cff_1.LuckyWheelConst.WINNING_CLASS_PROGRESS_PROMODE : __dep_exact_26a421b704832cff_1.LuckyWheelConst.WINNING_CLASS_PROGRESS_NORMAL)) / this.getNeededSpinsForClass(this.currentWinClass);
      }
    },
    enumerable: true,
    configurable: true
  });
  LuckyWheelData.prototype.doJackpotSpin = function () {
    this._currentJackpotSet = this._nextJackpotSpinJackpotSet;
  };
  LuckyWheelData.prototype.doNormalSpin = function () {
    this._currentJackpotSet = this._nextJackpotSet;
  };
  LuckyWheelData.prototype.getNeededSpinsForClass = function (__s43param0) {
    return this._neededSpinsForNextClass.get(__s43param0);
  };
  LuckyWheelData.prototype.getTotalNeededSpinsForClass = function (__s45param0) {
    var __s45local0 = 0;
    for (var __s45local1 = 2; __s45local1 <= __s45param0; __s45local1++) {
      __s45local0 += __dep_exact_f855840627e6e145.int(this.getNeededSpinsForClass(__s45local1 - 1));
    }
    return __s45local0;
  };
  LuckyWheelData.prototype.getPreviewSets = function (__s49param0) {
    if (this.isProMode) {
      return this._proModePreviewSets.get(__s49param0);
    } else {
      return this._normalPreviewSets.get(__s49param0);
    }
  };
  Object.defineProperty(LuckyWheelData.prototype, "currentJackpotSet", {
    get: function () {
      return this._rewardSets.get(this._currentJackpotSet);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "winningCategory", {
    get: function () {
      return this._winningCategory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "rewardedItem", {
    get: function () {
      return this._rewardedItem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "rewardIsTickets", {
    get: function () {
      return !!this.rewardedItem && __dep_export_CollectableHelper.CollectableHelper.hasTypeAndId(this.rewardedItem, __dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, this.currencyID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "currentWinClass", {
    get: function () {
      return this._currentWinClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "isProMode", {
    get: function () {
      return this._isProMode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "hasFreeSpin", {
    get: function () {
      return this._hasFreeSpin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "hasVisitedProMode", {
    get: function () {
      return this._hasVisitedProMode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "hasLevelUp", {
    get: function () {
      return this._hasLevelUp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "winClassesAmount", {
    get: function () {
      return this._winClassesAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "winClassProgress", {
    get: function () {
      return this._winClassProgress;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "isFirstVisitToLuckyWheel", {
    get: function () {
      return this.currentWinClass == 1 && this.winClassProgress == 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "showIncreaseWinClassDialog", {
    get: function () {
      if (this.isMaxIncreaseWinClass) {
        this._showIncreaseWinClassDialog = false;
      }
      return this._showIncreaseWinClassDialog;
    },
    set: function (__s80param0) {
      this._showIncreaseWinClassDialog = __s80param0;
      this.dispatchEvent(new __s0local0(LuckyWheelData.SHOW_INCREASE_WIN_CLASS_DIALOG_CHANGE, true, false));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "increaseWinClassC2", {
    get: function () {
      return __dep_exact_26a421b704832cff_1.LuckyWheelConst.calculateC2CostForIncreasingPrizeClass(this.getNeededSpinsForClass(this.currentWinClass) - this.winClassProgress, this.c2PricePerSpin);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "c2PricePerSpin", {
    get: function () {
      return this._c2CostsPerSpinByWinClass.get(this.currentWinClass);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "isMaxIncreaseWinClass", {
    get: function () {
      return this.currentWinClass == this.winClassesAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "showGuaranteedJackpotDialog", {
    get: function () {
      return this._showGuaranteedJackpotDialog;
    },
    set: function (__s90param0) {
      this._showGuaranteedJackpotDialog = __s90param0;
      this.dispatchEvent(new __s0local0(LuckyWheelData.SHOW_GUARANTEED_JACKPOT_DIALOG_CHANGE, true, false));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "jackpotTicketPrice", {
    get: function () {
      if (this.isProMode) {
        return __dep_exact_26a421b704832cff_1.LuckyWheelConst.SPIN_TICKET_COST_PROMODE;
      } else {
        return __dep_exact_26a421b704832cff_1.LuckyWheelConst.SPIN_TICKET_COST_NORMAL;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "jackpotC2Price", {
    get: function () {
      if (this.isProMode) {
        return __dep_exact_26a421b704832cff_1.LuckyWheelConst.JACKPOT_C2_COST_PROMODE;
      } else {
        return __dep_exact_26a421b704832cff_1.LuckyWheelConst.JACKPOT_C2_COST_NORMAL;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "hasEnoughTicketsToBuyJackpot", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.currencyData.getAmountById(this.currencyID) >= this.jackpotTicketPrice;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "hasEnoughRubiesToBuyJackpot", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.currencyData.c2Amount >= this.jackpotC2Price;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.eventID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "pointThresholds", {
    get: function () {
      return this._pointThresholds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "rewardsIncreaseWinClass", {
    get: function () {
      if (this.isMaxIncreaseWinClass) {
        return this.getPreviewSets(this.currentWinClass);
      } else {
        return this.getPreviewSets(this.currentWinClass + 1);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "sumOfSpinsWithinThresholds", {
    get: function () {
      return this._sumOfSpinsWithinThresholds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "winningCategoryReceived", {
    get: function () {
      return this._winningCategoryReceived;
    },
    set: function (__s116param0) {
      this._winningCategoryReceived = __s116param0;
    },
    enumerable: true,
    configurable: true
  });
  LuckyWheelData.prototype.onWinningCategoryReceived = function () {
    this._winningCategoryReceived = true;
    this.SGN_LUCKY_CATEGORY_RECEIVED.dispatch();
  };
  LuckyWheelData.prototype.resetWinningCategory = function () {
    this._winningCategory = -1;
    this._winningCategoryReceived = false;
  };
  Object.defineProperty(LuckyWheelData.prototype, "currencyID", {
    get: function () {
      return __dep_export_ClientConstCurrency.ClientConstCurrency.ID_LUCKY_WHEEL_TICKET;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LuckyWheelData.prototype, "eventID", {
    get: function () {
      return __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LUCKYWHEEL;
    },
    enumerable: true,
    configurable: true
  });
  LuckyWheelData.MINIMUM_TIME_TO_ENABLE_SPIN = 10;
  LuckyWheelData.SHOW_INCREASE_WIN_CLASS_DIALOG_CHANGE = "SHOW_INCREASE_WIN_CLASS_DIALOG_CHANGE";
  LuckyWheelData.SHOW_GUARANTEED_JACKPOT_DIALOG_CHANGE = "SHOW_GUARANTEED_JACKPOT_DIALOG_CHANGE";
  return LuckyWheelData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.LuckyWheelData = __s0local1;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
