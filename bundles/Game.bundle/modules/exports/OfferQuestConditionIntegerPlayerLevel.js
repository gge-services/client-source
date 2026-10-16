Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_OfferQuestConditionInteger = require("gge-module:export_OfferQuestConditionInteger");
var __s0local0 = function (__s1param0) {
  function OfferQuestConditionIntegerPlayerLevel() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OfferQuestConditionIntegerPlayerLevel, __s1param0);
  Object.defineProperty(OfferQuestConditionIntegerPlayerLevel.prototype, "registerName", {
    get: function () {
      return __dep_export_ClientConstOffer.ClientConstOffer.QUEST_CONDITION_INTEGER_PLAYER_LEVEL;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_OfferQuestConditionInteger.OfferQuestConditionInteger.prototype, "registerName").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  return OfferQuestConditionIntegerPlayerLevel;
}(__dep_export_OfferQuestConditionInteger.OfferQuestConditionInteger);
exports.OfferQuestConditionIntegerPlayerLevel = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IOfferQuestCondition");
