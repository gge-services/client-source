Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __s0local0 = function () {
  function OfferQuestConditionBoughtOfferReward() {
    this._neededValue = 0;
    this._currentValue = 0;
    this.inclusive = false;
  }
  Object.defineProperty(OfferQuestConditionBoughtOfferReward.prototype, "registerName", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.QUEST_CONDITION_INTEGER_BOUGHT_OFFER_REWARD;
    },
    enumerable: true,
    configurable: true
  });
  OfferQuestConditionBoughtOfferReward.prototype.registerOfferCondition = function (__s7param0) {
    __s7param0.addEntry(this.registerName, this);
  };
  OfferQuestConditionBoughtOfferReward.prototype.parseFromObjectParam = function (__s9param0, __s9param1, __s9param2) {
    this._neededValue = __s9param1.value;
    this.inclusive = __s9param1.inclusive;
    this._publicID = __s9param2;
  };
  OfferQuestConditionBoughtOfferReward.prototype.parseProgress = function (__s11param0) {
    this._currentValue = __dep_exact_f855840627e6e145.int(__s11param0);
  };
  Object.defineProperty(OfferQuestConditionBoughtOfferReward.prototype, "conditionPassed", {
    get: function () {
      if (this.inclusive) {
        return this._currentValue >= this._neededValue;
      } else {
        return this._currentValue > this._neededValue;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionBoughtOfferReward.prototype, "conditionTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionBoughtOfferReward.prototype, "conditionTextReplacements", {
    get: function () {
      return [this._currentValue, this._neededValue];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionBoughtOfferReward.prototype, "conditionsProgressInPercent", {
    get: function () {
      return this._currentValue / (this.inclusive ? this._neededValue : this._neededValue + 1) * 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionBoughtOfferReward.prototype, "publicID", {
    get: function () {
      return this._publicID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionBoughtOfferReward.prototype, "currentValue", {
    get: function () {
      return this._currentValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionBoughtOfferReward.prototype, "neededValue", {
    get: function () {
      return this._neededValue;
    },
    enumerable: true,
    configurable: true
  });
  return OfferQuestConditionBoughtOfferReward;
}();
exports.OfferQuestConditionBoughtOfferReward = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferQuestCondition");
