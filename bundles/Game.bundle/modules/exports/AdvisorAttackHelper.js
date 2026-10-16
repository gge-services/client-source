Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_AdvisorActivationInfoVO = require("gge-module:export_AdvisorActivationInfoVO");
var __dep_export_SubscriptionPackageEnum = require("gge-module:export_SubscriptionPackageEnum");
var __s0local0 = function () {
  function AdvisorAttackHelper() {}
  AdvisorAttackHelper.getTeaserFileName = function (__s5param0) {
    switch (__s5param0) {
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_NOMAD:
        return "NomadAdvisorTeasers";
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_SAMURAI:
        return "SamuraiAdvisorTeasers";
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_BERIMOND:
        return "BerimondAdvisorTeasers";
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_BARON:
        return "BaronAdvisorTeasers";
    }
    return "NomadAdvisorTeasers";
  };
  AdvisorAttackHelper.getTextIDSuffix = function (__s8param0) {
    switch (__s8param0) {
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_NOMAD:
        return "nomad";
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_SAMURAI:
        return "samurai";
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_BERIMOND:
        return "berimond";
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_BARON:
        return "baron";
    }
    return "nomad";
  };
  AdvisorAttackHelper.getAdvisorActivationInfo = function (__s11param0) {
    switch (__s11param0) {
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_NOMAD:
        var __s11local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
        if (__s11local0) {
          return __s11local0.getAdvisorActivationInfo();
        }
        break;
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_SAMURAI:
        var __s11local1 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_SAMURAI_INVASION);
        if (__s11local1) {
          return __s11local1.getAdvisorActivationInfo();
        }
        break;
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_BERIMOND:
        var __s11local2 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION);
        if (__s11local2) {
          return __s11local2.getAdvisorActivationInfo();
        }
        break;
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_BARON:
        return new __dep_export_AdvisorActivationInfoVO.AdvisorActivationInfoVO(AdvisorAttackHelper.isBaronSubscriptionActive(), false, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_BARON_ADVISOR_TOKEN);
    }
    return new __dep_export_AdvisorActivationInfoVO.AdvisorActivationInfoVO(false, false, 0);
  };
  AdvisorAttackHelper.isBaronSubscriptionActive = function () {
    return __dep_export_CastleModel.CastleModel.subscriptionData.isPackageActive(__dep_export_SubscriptionPackageEnum.SubscriptionPackageEnum.BARON_ADVISOR);
  };
  AdvisorAttackHelper.isBaronAdvisorFeatureAvailable = function () {
    return __dep_export_CastleModel.CastleModel.userData.enableFreeBaronAdvisor || __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_BARON_ADVISOR_TOKEN) > 0 || AdvisorAttackHelper.isBaronSubscriptionActive();
  };
  AdvisorAttackHelper.isFreeBaronAdvisorTokenOffer = function (__s21param0) {
    return __s21param0 == __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_BARON && __dep_export_CastleModel.CastleModel.userData.enableFreeBaronAdvisor;
  };
  AdvisorAttackHelper.getAdvisorRemainingSeconds = function (__s23param0) {
    if (__s23param0 == __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_BARON) {
      var __s23local0 = __dep_export_CastleModel.CastleModel.subscriptionData.getActivePackage(__dep_export_SubscriptionPackageEnum.SubscriptionPackageEnum.BARON_ADVISOR);
      if (__s23local0 && __s23local0.isActive()) {
        return Math.max(0, __s23local0.getRemainingSeconds());
      } else {
        return -1;
      }
    }
    var __s23local1 = AdvisorAttackHelper.getEventVOByAdvisorType(__s23param0);
    if (__s23local1) {
      return __s23local1.remainingEventTimeInSeconds;
    } else {
      return -1;
    }
  };
  AdvisorAttackHelper.getAdvisorTypeByAreaType = function (__s30param0) {
    switch (__s30param0) {
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_NOMAD_CAMP:
        return __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_NOMAD;
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_SAMURAI_CAMP:
        return __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_SAMURAI;
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_TOWER:
        return __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_BERIMOND;
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_DUNGEON:
        if (AdvisorAttackHelper.isBaronAdvisorFeatureAvailable()) {
          return __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_BARON;
        } else {
          return -1;
        }
    }
    return -1;
  };
  AdvisorAttackHelper.getAdvisorTypeByEventID = function (__s35param0) {
    var __s35local0 = -1;
    switch (__s35param0) {
      case __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE:
        __s35local0 = __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_NOMAD;
        break;
      case __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_SAMURAI_INVASION:
        __s35local0 = __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_SAMURAI;
        break;
      case __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION:
        __s35local0 = __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_BERIMOND;
    }
    var __s35local1 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__s35param0);
    if (__s35local1 && __s35local1.isActive && __s35local1.advisorActivationCurrencyId > 0) {
      return __s35local0;
    } else {
      return -1;
    }
  };
  AdvisorAttackHelper.getEventVOByAdvisorType = function (__s40param0) {
    switch (__s40param0) {
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_NOMAD:
        return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_SAMURAI:
        return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_SAMURAI_INVASION);
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_BERIMOND:
        return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_FACTION);
    }
    return null;
  };
  AdvisorAttackHelper.getCharacterByAdvisorType = function (__s43param0) {
    switch (__s43param0) {
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_NOMAD:
        return __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_NOMADADVISOR;
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_SAMURAI:
        return __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_SAMURAIADVISOR;
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_BERIMOND:
        return __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_FACTIONADVISOR;
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_BARON:
        return __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_BARONADVISOR;
    }
    if (__s43param0 > 0) {
      return __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_NOMADADVISOR;
    } else {
      return __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_GENERAL;
    }
  };
  AdvisorAttackHelper.getAraTypeFromAdvisorType = function (__s48param0) {
    switch (__s48param0) {
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_NOMAD:
        return __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_NOMAD_CAMP;
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_SAMURAI:
        return __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_SAMURAI_CAMP;
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_BERIMOND:
        return __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_TOWER;
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_BARON:
        return __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_DUNGEON;
    }
    return __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_NOMAD_CAMP;
  };
  AdvisorAttackHelper.getNpcIDFromAdvisorType = function (__s51param0) {
    switch (__s51param0) {
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_NOMAD:
        return __dep_exact_26a421b704832cff.DungeonConst.BASIC_NOMAD_CAMP_PLAYER_ID;
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_SAMURAI:
        return __dep_exact_26a421b704832cff.DungeonConst.BASIC_SAMURAI_CAMP_PLAYER_ID;
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_BERIMOND:
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_BARON:
        return -1;
    }
    return __dep_exact_26a421b704832cff.DungeonConst.BASIC_NOMAD_CAMP_PLAYER_ID;
  };
  AdvisorAttackHelper.getKingdomIDFromAdvisorType = function (__s54param0) {
    switch (__s54param0) {
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_BERIMOND:
        return __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID;
      case __dep_exact_26a421b704832cff_2.AttackAdvisorConst.ADVISOR_TYPE_BARON:
        var __s54local0 = __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID;
        if (__s54local0 == __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID || __s54local0 == __dep_exact_26a421b704832cff.WorldDessert.KINGDOM_ID || __s54local0 == __dep_exact_26a421b704832cff.WorldIce.KINGDOM_ID || __s54local0 == __dep_exact_26a421b704832cff.WorldVolcano.KINGDOM_ID) {
          return __s54local0;
        } else {
          return __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID;
        }
    }
    return __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID;
  };
  return AdvisorAttackHelper;
}();
exports.AdvisorAttackHelper = __s0local0;
