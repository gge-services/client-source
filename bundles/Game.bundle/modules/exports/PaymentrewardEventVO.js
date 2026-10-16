Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstEvent = require("gge-module:export_ClientConstEvent");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastlePaymentRewardSpecialOfferDialogProperties = require("gge-module:export_CastlePaymentRewardSpecialOfferDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PaymentPopupDialogInfoVO = require("gge-module:export_PaymentPopupDialogInfoVO");
var __dep_export_ASpecialEventVO = require("gge-module:export_ASpecialEventVO");
var __dep_export_PaymentrewardRewardVO = require("gge-module:export_PaymentrewardRewardVO");
var __s0local0 = function (__s1param0) {
  function PaymentrewardEventVO() {
    var __s3local0 = this;
    __s3local0._maxBuyCount = 0;
    __s3local0._boughtC2 = 0;
    __s3local0._specialOfferId = -1;
    __s3local0._skinID = 0;
    __s3local0._c2ForComplete = 0;
    __s3local0._startTimestamp = 0;
    __s3local0._isTimeless = false;
    __s3local0._isTimeDisplayedInPercentage = false;
    __s3local0._durationOfTimeless = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PaymentrewardEventVO, __s1param0);
  PaymentrewardEventVO.prototype.parseData = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.parseData.call(this, __s5param0, __s5param1, __s5param2);
    var __s5local0 = __dep_export_CastleModel.CastleModel.primeDayData.getPrimeDayXMLNodeByID(this._specialOfferId);
    if (__s5local0 == null) {
      throw new Error("PaymentrewardEventVO.parseData() has been told to parse a PrimeDay from the XML that does not exist ID: " + this._specialOfferId);
    }
    var __s5local1 = __s5local0.paymentRewardIDs;
    var __s5local2 = 0;
    this._rewards = [];
    this._c2ForComplete = 0;
    if (__s5local1 != null) {
      for (var __s5local3 = 0, __s5local4 = __s5local1; __s5local3 < __s5local4.length; __s5local3++) {
        var __s5local5 = __s5local4[__s5local3];
        if (__s5local5 !== undefined) {
          var __s5local6 = __dep_export_CastleModel.CastleModel.primeDayData.getPrimeDayRewardXMLNodeByID(__s5local5);
          var __s5local7 = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s5param2.RW[__s5local2++]);
          var __s5local8 = new __dep_export_PaymentrewardRewardVO.PaymentrewardRewardVO(__s5local6, __s5local7);
          this._c2ForComplete = __dep_exact_f855840627e6e145.int(Math.max(this._c2ForComplete, __s5local8.c2ForReward));
          this._rewards.push(__s5local8);
        }
      }
    }
    this._maxBuyCount = __s5local0.rewardCap;
  };
  PaymentrewardEventVO.prototype.parseParamObject = function (__s12param0) {
    this._specialOfferId = __dep_exact_f855840627e6e145.int(__s12param0.SEID);
    this._boughtC2 = __dep_exact_f855840627e6e145.int(__s12param0.BC2);
    this._skinID = __dep_exact_f855840627e6e145.int(__s12param0.SKN);
    this._realPrice = __s12param0.RP;
    this._isTimeless = !!__s12param0.TML;
    this._durationOfTimeless = __dep_exact_f855840627e6e145.int(__s12param0.TS);
    this._isTimeDisplayedInPercentage = false;
    if (__s12param0.RS && this._isTimeless) {
      this._isTimeDisplayedInPercentage = this._isTimeless;
    }
    this._startTimestamp = 0;
    if (__s12param0.RS && this._durationOfTimeless) {
      this._startTimestamp = this._endTimestamp - this._durationOfTimeless * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    }
  };
  PaymentrewardEventVO.prototype.openDialog = function (__s16param0 = true) {
    if (!__dep_export_CastleModel.CastleModel.privateOfferData.isHiddenEvent(this._eventId)) {
      var __s16local0 = __dep_exact_f855840627e6e145.int(__s16param0 ? __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_TOP : __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_LOW);
      var __s16local1 = new __dep_export_PaymentPopupDialogInfoVO.PaymentPopupDialogInfoVO(this.skinnedSpecialOfferDialogKey, new __dep_export_CastlePaymentRewardSpecialOfferDialogProperties.CastlePaymentRewardSpecialOfferDialogProperties(this), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_DAY, false, __s16local0);
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__s16local1.dialogClass, __s16local1.properties, __s16local1.blockDialogs, __s16local1.priority, 0, __s16local1.type);
    }
  };
  Object.defineProperty(PaymentrewardEventVO.prototype, "skinnedSpecialOfferDialogKey", {
    get: function () {
      switch (this._skinID) {
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_DEFAULT:
          return __dep_export_CastlePaymentRewardSpecialOfferDialog.CastlePaymentRewardSpecialOfferDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_USA:
          return __dep_export_CastlePaymentRewardSpecialOfferUSADialog.CastlePaymentRewardSpecialOfferUSADialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_SUPER:
          return __dep_export_CastlePaymentRewardSpecialOfferSuperDialog.CastlePaymentRewardSpecialOfferSuperDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_ALIEN:
          return __dep_export_CastlePaymentRewardSpecialOfferAlienDialog.CastlePaymentRewardSpecialOfferAlienDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_BERIMOND:
          return __dep_export_CastlePaymentRewardSpecialOfferBerimondDialog.CastlePaymentRewardSpecialOfferBerimondDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_DEFENSE:
          return __dep_export_CastlePaymentRewardSpecialOfferDefenseDialog.CastlePaymentRewardSpecialOfferDefenseDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_ATTACK:
          return __dep_export_CastlePaymentRewardSpecialOfferAttackDialog.CastlePaymentRewardSpecialOfferAttackDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_EASTER:
          return __dep_export_CastlePaymentRewardSpecialOfferEasterDialog.CastlePaymentRewardSpecialOfferEasterDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_SPRING_BUNNY:
          return __dep_export_CastlePaymentRewardSpecialOfferSpringBunnyDialog.CastlePaymentRewardSpecialOfferSpringBunnyDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_WHEEL_OF_FORTUNE:
          return __dep_export_CastlePaymentRewardSpecialOfferWheelOfFortuneDialog.CastlePaymentRewardSpecialOfferWheelOfFortuneDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_PARAGON_XP:
          return __dep_export_CastlePaymentRewardSpecialOfferParagonXPDialog.CastlePaymentRewardSpecialOfferParagonXPDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_SUNDAY:
          return __dep_export_CastlePaymentRewardSpecialOfferSundayDialog.CastlePaymentRewardSpecialOfferSundayDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_EVENING:
          return __dep_export_CastlePaymentRewardSpecialOfferEveningDialog.CastlePaymentRewardSpecialOfferEveningDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_UNDERWORLD:
          return __dep_export_CastlePaymentRewardSpecialOfferUnderworldDialog.CastlePaymentRewardSpecialOfferUnderworldDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_WISHING_WELL:
          return __dep_export_CastlePaymentRewardSpecialOfferDialog.CastlePaymentRewardSpecialOfferDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_HALLOWEEN:
          return __dep_export_CastlePaymentRewardSpecialOfferHalloweenDialog.CastlePaymentRewardSpecialOfferHalloweenDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_BLACK_FRIDAY:
          return __dep_export_CastlePaymentRewardSpecialOfferBlackFridayDialog.CastlePaymentRewardSpecialOfferBlackFridayDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_WINTER:
          return __dep_export_CastlePaymentRewardSpecialOfferWinterDialog.CastlePaymentRewardSpecialOfferWinterDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_MIDAS:
          return __dep_export_CastlePaymentRewardSpecialOfferMidasDialog.CastlePaymentRewardSpecialOfferMidasDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_FURYS_BLADE:
          return __dep_export_CastlePaymentRewardSpecialOfferFurysBladeDialog.CastlePaymentRewardSpecialOfferFurysBladeDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_WORLD_CUP:
          return __dep_export_CastlePaymentRewardSpecialOfferWorldCupDialog.CastlePaymentRewardSpecialOfferWorldCupDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_BLOOD_CROW:
          return __dep_export_CastlePaymentRewardSpecialOfferBloodcrowDialog.CastlePaymentRewardSpecialOfferBloodcrowDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_CHRISTMAS:
          return __dep_export_CastlePaymentRewardSpecialOfferChristmasDialog.CastlePaymentRewardSpecialOfferChristmasDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_SUMMER:
          return __dep_export_CastlePaymentRewardSpecialOfferSummerDialog.CastlePaymentRewardSpecialOfferSummerDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_ANNIVERSARY:
          return __dep_export_CastlePaymentRewardSpecialOfferAnniversaryDialog.CastlePaymentRewardSpecialOfferAnniversaryDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_DEFAULT_CURRENCY:
          return __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_USA_CURRENCY:
          return __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayUSADialog.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayUSADialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_ALIEN_CURRENCY:
          return __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayAlienDialog.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayAlienDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_SUPER_CURRENCY:
          return __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDaySuperDialog.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDaySuperDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_BERIMOND_CURRENCY:
          return __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayBerimondDialog.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayBerimondDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_DEFENSE_CURRENCY:
          return __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDefenseDialog.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDefenseDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_ATTACK_CURRENCY:
          return __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayAttackDialog.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayAttackDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_EASTER_CURRENCY:
          return __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayEasterDialog.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayEasterDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_WHEEL_OF_FORTUNE_CURRENCY:
          return __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayWheelOfFortuneDialog.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayWheelOfFortuneDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_PARAGON_XP_CURRENCY:
          return __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayParagonXPDialog.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayParagonXPDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_SUNDAY_CURRENCY:
          return __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDaySundayDialog.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDaySundayDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_EVENING_CURRENCY:
          return __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayEveningDialog.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayEveningDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_UNDERWORLD_CURRENCY:
          return __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayUnderworldDialog.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayUnderworldDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_WISHING_WELL_CURRENCY:
          return __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_HALLOWEEN_CURRENCY:
          return __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayHalloweenDialog.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayHalloweenDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_BLACK_FRIDAY_CURRENCY:
          return __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayBlackFridayDialog.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayBlackFridayDialog;
        case __dep_export_ClientConstEvent.ClientConstEvent.PRIMEDAY_WINTER_CURRENCY:
          return __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayWinterDialog.CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayWinterDialog;
        default:
          return __dep_export_CastlePaymentRewardSpecialOfferDialog.CastlePaymentRewardSpecialOfferDialog;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "boughtC2", {
    get: function () {
      return this._boughtC2;
    },
    set: function (__s24param0) {
      this._boughtC2 = __s24param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "maxBuyCount", {
    get: function () {
      return this._maxBuyCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "skinID", {
    get: function () {
      return this._skinID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "firstReward", {
    get: function () {
      return this._rewards[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "boughtAllRewardsCount", {
    get: function () {
      return __dep_exact_f855840627e6e145.int(this._boughtC2 / this._c2ForComplete);
    },
    enumerable: true,
    configurable: true
  });
  PaymentrewardEventVO.prototype.getBoughtCount = function (__s36param0 = 0) {
    return __dep_exact_f855840627e6e145.int(this.isBoughtInCurrentCycle(__s36param0) ? 1 : 0) + this.boughtAllRewardsCount;
  };
  PaymentrewardEventVO.prototype.isBoughtInCurrentCycle = function (__s38param0 = 0) {
    return this.c2BoughtInCurrentCycle >= this.rewards[__s38param0].c2ForReward;
  };
  Object.defineProperty(PaymentrewardEventVO.prototype, "c2BoughtInCurrentCycle", {
    get: function () {
      return this.boughtC2 % this.c2ForComplete;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "nextRewardIndex", {
    get: function () {
      for (var __s42local0 = 0; __s42local0 < this.rewards.length; ++__s42local0) {
        if (!this.isBoughtInCurrentCycle(__s42local0)) {
          return __s42local0;
        }
      }
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "isTimeDisplayedInPercentage", {
    get: function () {
      return this._isTimeDisplayedInPercentage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "startTimestamp", {
    get: function () {
      return this._startTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "realPrice", {
    get: function () {
      return this._realPrice;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "specialOfferId", {
    get: function () {
      return this._specialOfferId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "isTimeless", {
    get: function () {
      return this._isTimeless;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "durationOfTimeless", {
    get: function () {
      return this._durationOfTimeless;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardEventVO.prototype, "c2ForComplete", {
    get: function () {
      return this._c2ForComplete;
    },
    enumerable: true,
    configurable: true
  });
  PaymentrewardEventVO.__initialize_static_members = function () {
    PaymentrewardEventVO.REMAINING_TIME_ALERT = 180;
  };
  return PaymentrewardEventVO;
}(__dep_export_ASpecialEventVO.ASpecialEventVO);
exports.PaymentrewardEventVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePaymentRewardSpecialOfferAlienDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferAlienDialog");
var __dep_export_CastlePaymentRewardSpecialOfferAnniversaryDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferAnniversaryDialog");
var __dep_export_CastlePaymentRewardSpecialOfferAttackDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferAttackDialog");
var __dep_export_CastlePaymentRewardSpecialOfferBerimondDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferBerimondDialog");
var __dep_export_CastlePaymentRewardSpecialOfferBlackFridayDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferBlackFridayDialog");
var __dep_export_CastlePaymentRewardSpecialOfferBloodcrowDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferBloodcrowDialog");
var __dep_export_CastlePaymentRewardSpecialOfferChristmasDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferChristmasDialog");
var __dep_export_CastlePaymentRewardSpecialOfferDefenseDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferDefenseDialog");
var __dep_export_CastlePaymentRewardSpecialOfferDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferDialog");
var __dep_export_CastlePaymentRewardSpecialOfferEasterDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferEasterDialog");
var __dep_export_CastlePaymentRewardSpecialOfferEveningDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferEveningDialog");
var __dep_export_CastlePaymentRewardSpecialOfferFurysBladeDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferFurysBladeDialog");
var __dep_export_CastlePaymentRewardSpecialOfferHalloweenDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferHalloweenDialog");
var __dep_export_CastlePaymentRewardSpecialOfferMidasDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferMidasDialog");
var __dep_export_CastlePaymentRewardSpecialOfferParagonXPDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferParagonXPDialog");
var __dep_export_CastlePaymentRewardSpecialOfferSpringBunnyDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferSpringBunnyDialog");
var __dep_export_CastlePaymentRewardSpecialOfferSummerDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferSummerDialog");
var __dep_export_CastlePaymentRewardSpecialOfferSundayDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferSundayDialog");
var __dep_export_CastlePaymentRewardSpecialOfferSuperDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferSuperDialog");
var __dep_export_CastlePaymentRewardSpecialOfferUnderworldDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferUnderworldDialog");
var __dep_export_CastlePaymentRewardSpecialOfferUSADialog = require("gge-module:export_CastlePaymentRewardSpecialOfferUSADialog");
var __dep_export_CastlePaymentRewardSpecialOfferWheelOfFortuneDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferWheelOfFortuneDialog");
var __dep_export_CastlePaymentRewardSpecialOfferWinterDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferWinterDialog");
var __dep_export_CastlePaymentRewardSpecialOfferWorldCupDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferWorldCupDialog");
var __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayAlienDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayAlienDialog");
var __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayAttackDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayAttackDialog");
var __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayBerimondDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayBerimondDialog");
var __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayBlackFridayDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayBlackFridayDialog");
var __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDefenseDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDefenseDialog");
var __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog");
var __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayEasterDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayEasterDialog");
var __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayEveningDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayEveningDialog");
var __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayHalloweenDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayHalloweenDialog");
var __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayParagonXPDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayParagonXPDialog");
var __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDaySundayDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDaySundayDialog");
var __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDaySuperDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDaySuperDialog");
var __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayUnderworldDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayUnderworldDialog");
var __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayUSADialog = require("gge-module:export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayUSADialog");
var __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayWheelOfFortuneDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayWheelOfFortuneDialog");
var __dep_export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayWinterDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayWinterDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
__s0local0.__initialize_static_members();
