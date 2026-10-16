Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ClientConstFilter() {}
  ClientConstFilter.filterVisibleObjectivesForTreasureMap = function (__s5param0) {
    return function (__s7param0, __s7param1 = 0, __s7param2 = null) {
      return __s7param0.mapID == __s5param0 && ClientConstFilter.filterVisibleObjectives(__s7param0, __s7param1, __s7param2);
    };
  };
  ClientConstFilter.filterVisibleObjectives = function (__s9param0, __s9param1 = 0, __s9param2 = null) {
    return !__s9param0.hidden && __s9param0.isLegal() && __s9param0.isObjective;
  };
  ClientConstFilter.filterVisibleQuests = function (__s11param0, __s11param1, __s11param2) {
    return !__s11param0.isStarterQuest && !__s11param0.hidden && __s11param0.isLegal() && !__s11param0.isObjective;
  };
  ClientConstFilter.filterByPriority = function (__s13param0) {
    return function (__s15param0, __s15param1, __s15param2) {
      return __s15param0.sortPriority == __s13param0;
    };
  };
  ClientConstFilter.filterVisibleQuestsForKingdom = function (__s17param0) {
    return function (__s19param0, __s19param1, __s19param2) {
      return __s19param0.shownKingdomID == __s17param0 && ClientConstFilter.filterVisibleQuests(__s19param0, __s19param1, __s19param2) || __s19param0.isTemporaryQuest;
    };
  };
  ClientConstFilter.filterVisibleQuestsForCategory = function (__s21param0) {
    return function (__s23param0, __s23param1, __s23param2) {
      return __s23param0.questCategory == __s21param0 && ClientConstFilter.filterVisibleQuests(__s23param0, __s23param1, __s23param2);
    };
  };
  ClientConstFilter.filterActiveQuests = function (__s25param0, __s25param1, __s25param2) {
    return (__s25param0.shownKingdomID <= 0 || __s25param0.shownKingdomID > 0 && __dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(__s25param0.shownKingdomID)) && (__s25param0.isCampaignQuest || __s25param0.eventID == 0 || __s25param0.eventID > 0 && !!__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__s25param0.eventID));
  };
  ClientConstFilter.filterEventQuests = function (__s27param0, __s27param1, __s27param2) {
    return __s27param0.eventID > 0 || __s27param0.mapID > 0;
  };
  ClientConstFilter.filterXpQuests = function (__s29param0, __s29param1, __s29param2) {
    return !ClientConstFilter.filterEventQuests(__s29param0, __s29param1, __s29param2) && __s29param0.isGettingXpFromThisQuest;
  };
  ClientConstFilter.filterC2Quests = function (__s31param0, __s31param1, __s31param2) {
    return !ClientConstFilter.filterEventQuests(__s31param0, __s31param1, __s31param2) && !__s31param0.isGettingXpFromThisQuest && __s31param0.isC2RewardQuest;
  };
  ClientConstFilter.filterLeftOverQuests = function (__s33param0, __s33param1, __s33param2) {
    return !ClientConstFilter.filterEventQuests(__s33param0, __s33param1, __s33param2) && !ClientConstFilter.filterXpQuests(__s33param0, __s33param1, __s33param2) && !ClientConstFilter.filterC2Quests(__s33param0, __s33param1, __s33param2);
  };
  ClientConstFilter.filterQuestIsNotBuyRuby = function (__s35param0, __s35param1, __s35param2) {
    return !__s35param0.isBuyRubyQuest;
  };
  ClientConstFilter.filterQuestIsBuyRuby = function (__s37param0, __s37param1, __s37param2) {
    return __s37param0.isBuyRubyQuest;
  };
  return ClientConstFilter;
}();
exports.ClientConstFilter = __s0local0;
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
