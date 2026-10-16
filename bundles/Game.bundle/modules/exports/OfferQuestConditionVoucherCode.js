Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __s0local0 = function () {
  function OfferQuestConditionVoucherCode() {}
  Object.defineProperty(OfferQuestConditionVoucherCode.prototype, "registerName", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.QUEST_CONDITION_VOUCHER;
    },
    enumerable: true,
    configurable: true
  });
  OfferQuestConditionVoucherCode.prototype.registerOfferCondition = function (__s7param0) {
    __s7param0.addEntry(this.registerName, this);
  };
  OfferQuestConditionVoucherCode.prototype.parseFromObjectParam = function (__s9param0, __s9param1, __s9param2) {
    this._voucherCodes = __s9param1.value;
    this._publicID = __s9param2;
  };
  OfferQuestConditionVoucherCode.prototype.parseProgress = function (__s11param0) {};
  Object.defineProperty(OfferQuestConditionVoucherCode.prototype, "conditionPassed", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionVoucherCode.prototype, "conditionsProgressInPercent", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionVoucherCode.prototype, "conditionTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionVoucherCode.prototype, "conditionTextReplacements", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionVoucherCode.prototype, "publicID", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionVoucherCode.prototype, "voucherCodes", {
    get: function () {
      return this._voucherCodes;
    },
    enumerable: true,
    configurable: true
  });
  return OfferQuestConditionVoucherCode;
}();
exports.OfferQuestConditionVoucherCode = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferQuestCondition");
