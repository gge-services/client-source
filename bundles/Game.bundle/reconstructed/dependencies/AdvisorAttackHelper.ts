import { AdvisorActivationInfoVO } from "./AdvisorActivationInfoVO";
import { AttackAdvisorConst } from "../../../ggs.dll/reconstructed/exports/AttackAdvisorConst";
import { CastleModel } from "./CastleModel";
import { ClientConstCharacter } from "./ClientConstCharacter";
import { ClientConstCurrency } from "./ClientConstCurrency";
import { DungeonConst } from "../../../ggs.dll/reconstructed/exports/DungeonConst";
import { EventConst } from "../../../ggs.dll/reconstructed/exports/EventConst";
import { FactionConst } from "../../../ggs.dll/reconstructed/exports/FactionConst";
import { SubscriptionPackageEnum } from "./SubscriptionPackageEnum";
import { WorldClassic } from "../../../ggs.dll/reconstructed/exports/WorldClassic";
import { WorldConst } from "../../../ggs.dll/reconstructed/exports/WorldConst";
import { WorldDessert } from "../../../ggs.dll/reconstructed/exports/WorldDessert";
import { WorldIce } from "../../../ggs.dll/reconstructed/exports/WorldIce";
import { WorldVolcano } from "../../../ggs.dll/reconstructed/exports/WorldVolcano";
export class AdvisorAttackHelper {
  static getTeaserFileName(argument0) {
    switch (argument0) {
      case AttackAdvisorConst.ADVISOR_TYPE_NOMAD:
        return "NomadAdvisorTeasers";
      case AttackAdvisorConst.ADVISOR_TYPE_SAMURAI:
        return "SamuraiAdvisorTeasers";
      case AttackAdvisorConst.ADVISOR_TYPE_BERIMOND:
        return "BerimondAdvisorTeasers";
      case AttackAdvisorConst.ADVISOR_TYPE_BARON:
        return "BaronAdvisorTeasers";
    }
    return "NomadAdvisorTeasers";
  }
  static getTextIDSuffix(argument0) {
    switch (argument0) {
      case AttackAdvisorConst.ADVISOR_TYPE_NOMAD:
        return "nomad";
      case AttackAdvisorConst.ADVISOR_TYPE_SAMURAI:
        return "samurai";
      case AttackAdvisorConst.ADVISOR_TYPE_BERIMOND:
        return "berimond";
      case AttackAdvisorConst.ADVISOR_TYPE_BARON:
        return "baron";
    }
    return "nomad";
  }
  static getAdvisorActivationInfo(argument0) {
    switch (argument0) {
      case AttackAdvisorConst.ADVISOR_TYPE_NOMAD:
        var __s11local0 = CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
        if (__s11local0) {
          return __s11local0.getAdvisorActivationInfo();
        }
        break;
      case AttackAdvisorConst.ADVISOR_TYPE_SAMURAI:
        var __s11local1 = CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_SAMURAI_INVASION);
        if (__s11local1) {
          return __s11local1.getAdvisorActivationInfo();
        }
        break;
      case AttackAdvisorConst.ADVISOR_TYPE_BERIMOND:
        var __s11local2 = CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_FACTION);
        if (__s11local2) {
          return __s11local2.getAdvisorActivationInfo();
        }
        break;
      case AttackAdvisorConst.ADVISOR_TYPE_BARON:
        return new AdvisorActivationInfoVO(AdvisorAttackHelper.isBaronSubscriptionActive(), false, ClientConstCurrency.ID_BARON_ADVISOR_TOKEN);
    }
    return new AdvisorActivationInfoVO(false, false, 0);
  }
  static isBaronSubscriptionActive() {
    return CastleModel.subscriptionData.isPackageActive(SubscriptionPackageEnum.BARON_ADVISOR);
  }
  static isBaronAdvisorFeatureAvailable() {
    return CastleModel.userData.enableFreeBaronAdvisor || CastleModel.currencyData.getAmountById(ClientConstCurrency.ID_BARON_ADVISOR_TOKEN) > 0 || AdvisorAttackHelper.isBaronSubscriptionActive();
  }
  static isFreeBaronAdvisorTokenOffer(argument0) {
    return argument0 == AttackAdvisorConst.ADVISOR_TYPE_BARON && CastleModel.userData.enableFreeBaronAdvisor;
  }
  static getAdvisorRemainingSeconds(argument0) {
    if (argument0 == AttackAdvisorConst.ADVISOR_TYPE_BARON) {
      var __s23local0 = CastleModel.subscriptionData.getActivePackage(SubscriptionPackageEnum.BARON_ADVISOR);
      if (__s23local0 && __s23local0.isActive()) {
        return Math.max(0, __s23local0.getRemainingSeconds());
      } else {
        return -1;
      }
    }
    var __s23local1 = AdvisorAttackHelper.getEventVOByAdvisorType(argument0);
    if (__s23local1) {
      return __s23local1.remainingEventTimeInSeconds;
    } else {
      return -1;
    }
  }
  static getAdvisorTypeByAreaType(argument0) {
    switch (argument0) {
      case WorldConst.AREA_TYPE_NOMAD_CAMP:
        return AttackAdvisorConst.ADVISOR_TYPE_NOMAD;
      case WorldConst.AREA_TYPE_SAMURAI_CAMP:
        return AttackAdvisorConst.ADVISOR_TYPE_SAMURAI;
      case WorldConst.AREA_TYPE_FACTION_TOWER:
        return AttackAdvisorConst.ADVISOR_TYPE_BERIMOND;
      case WorldConst.AREA_TYPE_DUNGEON:
        if (AdvisorAttackHelper.isBaronAdvisorFeatureAvailable()) {
          return AttackAdvisorConst.ADVISOR_TYPE_BARON;
        } else {
          return -1;
        }
    }
    return -1;
  }
  static getAdvisorTypeByEventID(argument0) {
    var __s35local0 = -1;
    switch (argument0) {
      case EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE:
        __s35local0 = AttackAdvisorConst.ADVISOR_TYPE_NOMAD;
        break;
      case EventConst.EVENTTYPE_SAMURAI_INVASION:
        __s35local0 = AttackAdvisorConst.ADVISOR_TYPE_SAMURAI;
        break;
      case EventConst.EVENTTYPE_FACTION:
        __s35local0 = AttackAdvisorConst.ADVISOR_TYPE_BERIMOND;
    }
    var __s35local1 = CastleModel.specialEventData.getActiveEventByEventId(argument0);
    if (__s35local1 && __s35local1.isActive && __s35local1.advisorActivationCurrencyId > 0) {
      return __s35local0;
    } else {
      return -1;
    }
  }
  static getEventVOByAdvisorType(argument0) {
    switch (argument0) {
      case AttackAdvisorConst.ADVISOR_TYPE_NOMAD:
        return CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
      case AttackAdvisorConst.ADVISOR_TYPE_SAMURAI:
        return CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_SAMURAI_INVASION);
      case AttackAdvisorConst.ADVISOR_TYPE_BERIMOND:
        return CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_FACTION);
    }
    return null;
  }
  static getCharacterByAdvisorType(argument0) {
    switch (argument0) {
      case AttackAdvisorConst.ADVISOR_TYPE_NOMAD:
        return ClientConstCharacter.CHAR_ID_NOMADADVISOR;
      case AttackAdvisorConst.ADVISOR_TYPE_SAMURAI:
        return ClientConstCharacter.CHAR_ID_SAMURAIADVISOR;
      case AttackAdvisorConst.ADVISOR_TYPE_BERIMOND:
        return ClientConstCharacter.CHAR_ID_FACTIONADVISOR;
      case AttackAdvisorConst.ADVISOR_TYPE_BARON:
        return ClientConstCharacter.CHAR_ID_BARONADVISOR;
    }
    if (argument0 > 0) {
      return ClientConstCharacter.CHAR_ID_NOMADADVISOR;
    } else {
      return ClientConstCharacter.CHAR_ID_GENERAL;
    }
  }
  static getAraTypeFromAdvisorType(argument0) {
    switch (argument0) {
      case AttackAdvisorConst.ADVISOR_TYPE_NOMAD:
        return WorldConst.AREA_TYPE_NOMAD_CAMP;
      case AttackAdvisorConst.ADVISOR_TYPE_SAMURAI:
        return WorldConst.AREA_TYPE_SAMURAI_CAMP;
      case AttackAdvisorConst.ADVISOR_TYPE_BERIMOND:
        return WorldConst.AREA_TYPE_FACTION_TOWER;
      case AttackAdvisorConst.ADVISOR_TYPE_BARON:
        return WorldConst.AREA_TYPE_DUNGEON;
    }
    return WorldConst.AREA_TYPE_NOMAD_CAMP;
  }
  static getNpcIDFromAdvisorType(argument0) {
    switch (argument0) {
      case AttackAdvisorConst.ADVISOR_TYPE_NOMAD:
        return DungeonConst.BASIC_NOMAD_CAMP_PLAYER_ID;
      case AttackAdvisorConst.ADVISOR_TYPE_SAMURAI:
        return DungeonConst.BASIC_SAMURAI_CAMP_PLAYER_ID;
      case AttackAdvisorConst.ADVISOR_TYPE_BERIMOND:
      case AttackAdvisorConst.ADVISOR_TYPE_BARON:
        return -1;
    }
    return DungeonConst.BASIC_NOMAD_CAMP_PLAYER_ID;
  }
  static getKingdomIDFromAdvisorType(argument0) {
    switch (argument0) {
      case AttackAdvisorConst.ADVISOR_TYPE_BERIMOND:
        return FactionConst.KINGDOM_ID;
      case AttackAdvisorConst.ADVISOR_TYPE_BARON:
        var __s54local0 = CastleModel.kingdomData.activeKingdomID;
        if (__s54local0 == WorldClassic.KINGDOM_ID || __s54local0 == WorldDessert.KINGDOM_ID || __s54local0 == WorldIce.KINGDOM_ID || __s54local0 == WorldVolcano.KINGDOM_ID) {
          return __s54local0;
        } else {
          return WorldClassic.KINGDOM_ID;
        }
    }
    return WorldClassic.KINGDOM_ID;
  }
}
