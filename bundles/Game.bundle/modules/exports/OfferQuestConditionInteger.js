Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __s0local0 = function () {
  function OfferQuestConditionInteger() {
    this._currentProgressValue = 0;
  }
  Object.defineProperty(OfferQuestConditionInteger.prototype, "registerName", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.QUEST_CONDITION_INTEGER;
    },
    enumerable: true,
    configurable: true
  });
  OfferQuestConditionInteger.prototype.registerOfferCondition = function (__s7param0) {
    __s7param0.addEntry(this.registerName + __dep_export_ClientConstOffer.ClientConstOffer.TYPE_MIN, this);
    __s7param0.addEntry(this.registerName + __dep_export_ClientConstOffer.ClientConstOffer.TYPE_MAX, this);
    __s7param0.addEntry(this.registerName + __dep_export_ClientConstOffer.ClientConstOffer.TYPE_EQUALS, this);
    __s7param0.addEntry(this.registerName + __dep_export_ClientConstOffer.ClientConstOffer.TYPE_BETWEEN, this);
  };
  OfferQuestConditionInteger.prototype.parseFromObjectParam = function (__s9param0, __s9param1, __s9param2) {
    this._id = __s9param0;
    this._params = __s9param1;
    this._currentProgressValue = 0;
    this._publicId = __s9param2;
  };
  OfferQuestConditionInteger.prototype.parseProgress = function (__s11param0) {
    this._currentProgressValue = __s11param0;
  };
  Object.defineProperty(OfferQuestConditionInteger.prototype, "conditionPassed", {
    get: function () {
      switch (this._id.substring(this.registerName.length)) {
        case __dep_export_ClientConstOffer.ClientConstOffer.TYPE_BETWEEN:
          var __s13local0 = false;
          __s13local0 = this._params.minInclusive == null || this._params.minInclusive == 1 ? this._currentProgressValue >= parseInt(this._params.min) : this._currentProgressValue > parseInt(this._params.min);
          var __s13local1 = false;
          __s13local1 = this._params.maxInclusive == null || this._params.maxInclusive == 1 ? this._currentProgressValue <= parseInt(this._params.max) : this._currentProgressValue < parseInt(this._params.max);
          return __s13local0 && __s13local1;
        case __dep_export_ClientConstOffer.ClientConstOffer.TYPE_MAX:
          if (this._params.inclusive) {
            return this._currentProgressValue <= parseInt(this._params.value);
          } else {
            return this._currentProgressValue < parseInt(this._params.value);
          }
        case __dep_export_ClientConstOffer.ClientConstOffer.TYPE_MIN:
          if (this._params.inclusive) {
            return this._currentProgressValue >= parseInt(this._params.value);
          } else {
            return this._currentProgressValue > parseInt(this._params.value);
          }
        case __dep_export_ClientConstOffer.ClientConstOffer.TYPE_EQUALS:
          return this._currentProgressValue == parseInt(this._params.value);
        default:
          return false;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionInteger.prototype, "conditionTextId", {
    get: function () {
      return "offer_questcondition_" + this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionInteger.prototype, "conditionTextReplacements", {
    get: function () {
      switch (this._id.substring(this.registerName.length)) {
        case __dep_export_ClientConstOffer.ClientConstOffer.TYPE_BETWEEN:
          return [parseInt(this._params.min), parseInt(this._params.max), this._currentProgressValue];
        case __dep_export_ClientConstOffer.ClientConstOffer.TYPE_MAX:
          if (this._params.inclusive) {
            return [parseInt(this._params.value) + 1, this._currentProgressValue];
          } else {
            return [parseInt(this._params.value), this._currentProgressValue];
          }
        case __dep_export_ClientConstOffer.ClientConstOffer.TYPE_MIN:
          if (this._params.inclusive) {
            return [parseInt(this._params.value), this._currentProgressValue];
          } else {
            return [parseInt(this._params.value) + 1, this._currentProgressValue];
          }
        case __dep_export_ClientConstOffer.ClientConstOffer.TYPE_EQUALS:
          return [parseInt(this._params.value), this._currentProgressValue];
        default:
          return [];
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionInteger.prototype, "conditionsProgressInPercent", {
    get: function () {
      switch (this._id.substring(this.registerName.length)) {
        case __dep_export_ClientConstOffer.ClientConstOffer.TYPE_BETWEEN:
          var __s29local0 = this._currentProgressValue - parseInt(this._params.max);
          var __s29local1 = parseInt(this._params.min) - this._currentProgressValue;
          if (__s29local0 <= 0 && __s29local1 <= 0) {
            return 100;
          } else if (__s29local0 > 0) {
            return this._currentProgressValue / parseInt(this._params.max) * 100 % 100;
          } else {
            return this._currentProgressValue / parseInt(this._params.min) * 100;
          }
        case __dep_export_ClientConstOffer.ClientConstOffer.TYPE_MAX:
          if (this._params.inclusive) {
            if (this._currentProgressValue > parseInt(this._params.value) + 1) {
              return 0;
            } else {
              return 100;
            }
          } else if (this._currentProgressValue > parseInt(this._params.value)) {
            return 0;
          } else {
            return 100;
          }
        case __dep_export_ClientConstOffer.ClientConstOffer.TYPE_MIN:
          if (this._params.inclusive) {
            if (parseInt(this._params.value) < this._currentProgressValue) {
              return 0;
            } else {
              return 100;
            }
          } else if (parseInt(this._params.value) + 1 < this._currentProgressValue) {
            return 0;
          } else {
            return 100;
          }
        case __dep_export_ClientConstOffer.ClientConstOffer.TYPE_EQUALS:
          if (parseInt(this._params.value) == this._currentProgressValue) {
            return 100;
          } else {
            return 0;
          }
      }
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferQuestConditionInteger.prototype, "publicID", {
    get: function () {
      return this._publicId;
    },
    enumerable: true,
    configurable: true
  });
  return OfferQuestConditionInteger;
}();
exports.OfferQuestConditionInteger = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferQuestCondition");
