import { EffectVO } from "./EffectVO";
import { instanceOfClass } from "../../../ggs.dll/reconstructed/exports/instanceOfClass";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { LordEffectFilterStrategyAttack } from "./LordEffectFilterStrategyAttack";
import { LordEffectFilterStrategyAttackPVE } from "./LordEffectFilterStrategyAttackPVE";
import { LordEffectFilterStrategyDefencePVE } from "./LordEffectFilterStrategyDefencePVE";
import { LordEffectFilterStrategyDefencePVP } from "./LordEffectFilterStrategyDefencePVP";
import { LordEffectFilterStrategyFullActive } from "./LordEffectFilterStrategyFullActive";
import { LordEffectFilterStrategyFullPassive } from "./LordEffectFilterStrategyFullPassive";
import { LordEffectFilterStrategyStation } from "./LordEffectFilterStrategyStation";
import { LordEffectFilterStrategySupport } from "./LordEffectFilterStrategySupport";
import { LordEffectGroupItem } from "./LordEffectGroupItem";
import { LordEffectTooltip } from "./LordEffectTooltip";
import { PlayerHelper } from "./PlayerHelper";
export class LordEffectHelper {
  static _lordEffectToolTip: any;
  static STRATEGY_SUPPORT: any;
  static STRATEGY_STATION: any;
  static STRATEGY_FULL_PASSIVE: any;
  static STRATEGY_FULL_ACTIVE: any;
  static STRATEGY_DEFENCE_PVP: any;
  static STRATEGY_DEFENCE_PVE: any;
  static STRATEGY_ATTACK_PVE: any;
  static STRATEGY_ATTACK: any;
  static hideToolTip() {
    if (LordEffectHelper._lordEffectToolTip.disp) {
      LordEffectHelper._lordEffectToolTip.disp.visible = false;
    }
  }
  static showToolTip(argument0, argument1, argument2 = null, argument3 = null, argument4, argument5 = true) {
    LordEffectHelper._lordEffectToolTip.init(argument0, argument1, argument2, argument3, argument4, argument5);
    LordEffectHelper._lordEffectToolTip.disp.visible = true;
  }
  static get disp() {
    return LordEffectHelper._lordEffectToolTip.disp;
  }
  static resetCategoryItems() {
    LordEffectHelper._lordEffectToolTip.reset();
  }
  static createEffectGroups(argument0, argument1, argument2 = -1) {
    argument0.sort(LordEffectHelper.sortByEffectSortOrder);
    var __s14local0 = [];
    var __s14local1 = [];
    var __s14local2 = -1;
    var __s14local3 = -1;
    if (argument0.length == 0) {
      return __s14local0;
    }
    __s14local2 = int(argument0[0].effect.effectCategory);
    __s14local3 = int(argument0[0].effect.effectGroup);
    if (argument0 != null) {
      for (var __s14local4 = 0, __s14local5 = argument0; __s14local4 < __s14local5.length; __s14local4++) {
        var __s14local6 = __s14local5[__s14local4];
        if (__s14local6 !== undefined && __s14local6.effect.effectCategory != EffectVO.CATEGORY_NO_CATEGORY) {
          if (__s14local2 != __s14local6.effect.effectCategory || __s14local3 != __s14local6.effect.effectGroup) {
            if (__s14local1.length > 0 && (argument2 == -1 || argument2 == __s14local2)) {
              __s14local0.push(new LordEffectGroupItem(argument1, __s14local1));
            }
            __s14local1.length = 0;
            __s14local1.push(__s14local6);
            __s14local2 = int(__s14local6.effect.effectCategory);
            __s14local3 = int(__s14local6.effect.effectGroup);
          } else {
            __s14local1.push(__s14local6);
          }
        }
      }
    }
    if ((argument2 == -1 || argument2 == __s14local2) && __s14local1.length > 0) {
      __s14local0.push(new LordEffectGroupItem(argument1, __s14local1));
    }
    return __s14local0;
  }
  static sortByEffectSortOrder(argument0, argument1) {
    if (argument0.effect.effectCategory != argument1.effect.effectCategory) {
      return int(argument0.effect.effectCategory - argument1.effect.effectCategory);
    } else if (argument0.effect.effectGroup != argument1.effect.effectGroup) {
      return int(argument0.effect.effectGroup - argument1.effect.effectGroup);
    } else if (argument0.effect.capId != argument1.effect.capId) {
      return int(argument0.effect.capId - argument1.effect.capId);
    } else if (instanceOfClass(argument0, "GemBonusVO") && argument0.triggerChance != 100) {
      return 1;
    } else {
      return 0;
    }
  }
  static createEffectListStringFromEquipments(argument0) {
    var __s32local0 = [];
    if (argument0) {
      if (argument0 != null) {
        for (var __s32local1 = 0, __s32local2 = argument0; __s32local1 < __s32local2.length; __s32local1++) {
          var __s32local3 = __s32local2[__s32local1];
          if (__s32local3 !== undefined) {
            for (var __s32local4 = 0, __s32local5 = __s32local3.boni; __s32local4 < __s32local5.length; __s32local4++) {
              var __s32local6 = __s32local5[__s32local4];
              if (__s32local6 !== undefined) {
                LordEffectHelper.addEffectToBonusList(__s32local0, __s32local6);
              }
            }
          }
        }
      }
      for (var __s32local7 = 0, __s32local8 = argument0; __s32local7 < __s32local8.length; __s32local7++) {
        if ((__s32local3 = __s32local8[__s32local7]).gemVO) {
          if (instanceOfClass(__s32local3.gemVO, "CastleGemVO")) {
            for (var __s32local9 = 0, __s32local10 = __s32local3.gemVO.boni; __s32local9 < __s32local10.length; __s32local9++) {
              __s32local6 = __s32local10[__s32local9];
              LordEffectHelper.addEffectToBonusList(__s32local0, __s32local6);
            }
          }
          if (instanceOfClass(__s32local3.gemVO, "RelicGemVO")) {
            for (var __s32local11 = 0, __s32local12 = __s32local3.gemVO.relicInfoVO.relicBoni; __s32local11 < __s32local12.length; __s32local11++) {
              __s32local6 = __s32local12[__s32local11];
              LordEffectHelper.addEffectToBonusList(__s32local0, __s32local6);
            }
          }
        }
      }
    }
    return LordEffectHelper.getTotalEffectTextOfBonusList(__s32local0);
  }
  static getTotalEffectTextOfBonusList(argument0, argument1 = true) {
    var __s51local0 = "";
    for (var __s51local1 = 0; __s51local1 < argument0.length; ++__s51local1) {
      var __s51local2 = argument0[__s51local1];
      if (__s51local0 != "") {
        __s51local0 += "\n";
      }
      __s51local0 += __s51local2.descriptionText;
    }
    if (argument1 && __s51local0 == "") {
      __s51local0 = "-";
    }
    return __s51local0;
  }
  static addEffectToBonusList(argument0, argument1) {
    var __s57local0 = int(LordEffectHelper.getIndexOfEffectTypeInList(argument0, argument1.effect.effectType.type));
    if (__s57local0 >= 0) {
      argument0[__s57local0].effectValue.add(argument1.effectValue, null);
    } else {
      argument0.push(argument1.clone());
    }
  }
  static getIndexOfEffectTypeInList(argument0, argument1) {
    for (var __s61local0 = 0; __s61local0 < argument0.length; ++__s61local0) {
      if (argument0[__s61local0].effect.effectType.type == argument1) {
        return __s61local0;
      }
    }
    return -1;
  }
  static getFilterStrategyAttackOrDefence(argument0, argument1) {
    if (PlayerHelper.isNPCPlayer(argument0) && !PlayerHelper.isNpcPvpPlayer(argument0)) {
      if (argument1) {
        return LordEffectHelper.STRATEGY_ATTACK_PVE;
      } else {
        return LordEffectHelper.STRATEGY_DEFENCE_PVE;
      }
    } else if (argument1) {
      return LordEffectHelper.STRATEGY_ATTACK;
    } else {
      return LordEffectHelper.STRATEGY_DEFENCE_PVP;
    }
  }
  static getFilterStrategyByMovementVO(argument0) {
    var __s73local0 = argument0.lordVO.isBaron;
    var __s73local1 = argument0.isReturnHome ? argument0.sourceArea : argument0.targetArea;
    var __s73local2 = __s73local1 && __s73local1.ownerInfo ? __s73local1.ownerInfo.playerID : 1;
    if (instanceOfClass(argument0, "SupportDefenceMapmovementVO")) {
      return LordEffectHelper.STRATEGY_SUPPORT;
    } else if (instanceOfClass(argument0, "ArmyTravelMapMovementVO")) {
      return LordEffectHelper.STRATEGY_STATION;
    } else {
      return LordEffectHelper.getFilterStrategyAttackOrDefence(__s73local2, !__s73local0);
    }
  }
  static __initialize_static_members() {
    LordEffectHelper.STRATEGY_FULL_ACTIVE = new LordEffectFilterStrategyFullActive();
    LordEffectHelper.STRATEGY_FULL_PASSIVE = new LordEffectFilterStrategyFullPassive();
    LordEffectHelper.STRATEGY_ATTACK = new LordEffectFilterStrategyAttack();
    LordEffectHelper.STRATEGY_ATTACK_PVE = new LordEffectFilterStrategyAttackPVE();
    LordEffectHelper.STRATEGY_DEFENCE_PVE = new LordEffectFilterStrategyDefencePVE();
    LordEffectHelper.STRATEGY_DEFENCE_PVP = new LordEffectFilterStrategyDefencePVP();
    LordEffectHelper.STRATEGY_STATION = new LordEffectFilterStrategyStation();
    LordEffectHelper.STRATEGY_SUPPORT = new LordEffectFilterStrategySupport();
    LordEffectHelper._lordEffectToolTip = new LordEffectTooltip();
  }
}
LordEffectHelper.__initialize_static_members();
