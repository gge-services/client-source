Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function PaymentrewardRewardVO(__s3param0, __s3param1) {
    this._xmlNode = __s3param0;
    this._rewardList = __s3param1;
  }
  Object.defineProperty(PaymentrewardRewardVO.prototype, "c2ForReward", {
    get: function () {
      return this._xmlNode.c2ForReward;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardRewardVO.prototype, "shownOfferBonus", {
    get: function () {
      return this._xmlNode.shownOfferBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardRewardVO.prototype, "shownValue", {
    get: function () {
      var __s9local0 = 1;
      if (this._xmlNode.displayType == PaymentrewardRewardVO.DISPLAY_TYPE_REAL_CURRENCY || this._xmlNode.displayType == PaymentrewardRewardVO.DISPLAY_TYPE_UNDEFINED) {
        __s9local0 = __dep_export_CastleHardCurrencyHelper.CastleHardCurrencyHelper.currencyFactor;
      }
      return this._xmlNode.shownCurrencyValue * __s9local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardRewardVO.prototype, "displayTypeTextID", {
    get: function () {
      switch (this._xmlNode.displayType) {
        case PaymentrewardRewardVO.DISPLAY_TYPE_PERCENT:
          return "value_percentage";
        case PaymentrewardRewardVO.DISPLAY_TYPE_RUBIES:
          return "dialog_primeday_paymentTier_worth_rubies";
        case PaymentrewardRewardVO.DISPLAY_TYPE_REAL_CURRENCY:
          return "amountCurrency";
      }
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PaymentrewardRewardVO.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  PaymentrewardRewardVO.__initialize_static_members = function () {
    PaymentrewardRewardVO.DISPLAY_TYPE_PERCENT = 0;
    PaymentrewardRewardVO.DISPLAY_TYPE_RUBIES = 1;
    PaymentrewardRewardVO.DISPLAY_TYPE_REAL_CURRENCY = 2;
  };
  PaymentrewardRewardVO.DISPLAY_TYPE_UNDEFINED = -1;
  return PaymentrewardRewardVO;
}();
exports.PaymentrewardRewardVO = __s0local0;
var __dep_export_CastleHardCurrencyHelper = require("gge-module:export_CastleHardCurrencyHelper");
__s0local0.__initialize_static_members();
