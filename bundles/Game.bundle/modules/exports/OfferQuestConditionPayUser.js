Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __s0local0 = function () {
  function OfferQuestConditionPayUser() {
    this._isPayUserGoal = false;
    this._isPayUserCurrent = false;
  }
  Object.defineProperty(OfferQuestConditionPayUser.prototype, "registerName", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.QUEST_CONDITION_IS_PAYUSER;
    },
    enumerable: true,
    configurable: true
  });
  OfferQuestConditionPayUser.prototype.registerOfferCondition = function (__s7param0) {
    __s7param0.addEntry(this.registerName, this);
  };
  OfferQuestConditionPayUser.prototype.parseFromObjectParam = function (__s9param0, __s9param1, __s9param2) {
    this._isPayUserGoal = !!__s9param1.value;
    this._publicID = __s9param2;
  };
  OfferQuestConditionPayUser.prototype.parseProgress = function (__s11param0) {
    this._isPayUserCurrent = __s11param0 == 1;
  };
  Object.defineProperty(OfferQuestConditionPayUser.prototype, "conditionPassed", {
    get: function () {
      return this._isPayUserCurrent == this._isPayUserGoal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionPayUser.prototype, "conditionsProgressInPercent", {
    get: function () {
      if (this.conditionPassed) {
        return 100;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionPayUser.prototype, "conditionTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionPayUser.prototype, "conditionTextReplacements", {
    get: function () {
      return [this._isPayUserCurrent, this._isPayUserGoal];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionPayUser.prototype, "publicID", {
    get: function () {
      return this._publicID;
    },
    enumerable: true,
    configurable: true
  });
  return OfferQuestConditionPayUser;
}();
exports.OfferQuestConditionPayUser = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferQuestCondition");
