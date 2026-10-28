import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { ClientConstCastle } from "./ClientConstCastle";
import { instanceOfClass } from "../../../ggs.dll/reconstructed/exports/instanceOfClass";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { Iso } from "./Iso";
export class CastleDecoShopItemArrayHelper {
  static getBuildingsByCategory(argument0) {
    var __s5local0 = [];
    var __s5local1 = argument0.toLowerCase();
    if (!CastleModel.decoShop[argument0.toLowerCase()]) {
      return __s5local0;
    }
    var __s5local2 = 0;
    var __s5local3 = [];
    var __s5local4 = [];
    var __s5local5 = [];
    for (var __s5local6 = 0, __s5local7 = CastleModel.decoShop[__s5local1]; __s5local6 < __s5local7.length; __s5local6++) {
      var __s5local8 = __s5local7[__s5local6];
      if (__s5local8 !== undefined) {
        var __s5local9 = CastleModel.userData.userLevel == 0;
        var __s5local10 = __s5local8.level == 0;
        if ((!__s5local9 && !__s5local10 || __s5local9 && __s5local10) && __s5local8.isAvailableInAreaTypeAndKingdomId(CastleModel.areaData.activeAreaInfo.areaType, CastleModel.areaData.activeAreaInfo.kingdomID) && (CastleDecoShopItemArrayHelper.layoutManager.isInTreasureCamp || !__s5local8.isOnlyAvailableByMapIds()) && (!CastleDecoShopItemArrayHelper.layoutManager.isInTreasureCamp || __s5local8.isOnlyAvailableInEvent() || CastleDecoShopItemArrayHelper.isShopVOActiveBySeason(__s5local8)) && (!(__s5local8.sceatSkillLocked > 0) || CastleModel.legendSkillData.hasLegendTemple())) {
          if (argument0 == ClientConstCastle.CATEGORY_DEFENCE) {
            if (instanceOfClass(__s5local8, "CastlewallDefenceVO")) {
              if (__s5local8.level > Iso.data.objects.defences.currentWallLevel) {
                __s5local3.push(__s5local8);
              }
            } else if (instanceOfClass(__s5local8, "BasicMoatVO") && CastleDecoShopItemArrayHelper.isMoatVisible(__s5local8)) {
              __s5local3.push(__s5local8);
            }
          } else {
            if (!__s5local8.canBeBuildByResourceFields()) {
              continue;
            }
            if (Iso.data.objects.provider.hasMaxAmountOfObjectsByType(__s5local8)) {
              __s5local5.push(__s5local8);
            } else {
              if (CastleModel.areaData.activeArea.slum) {
                __s5local2 = int(CastleModel.areaData.activeArea.slum.slumLevel);
              }
              if (__s5local8.slumLevelNeeded > 0) {
                if (__s5local2 != -1) {
                  if (__s5local8.slumLevelNeeded > __s5local2) {
                    __s5local4.push(__s5local8);
                  } else {
                    __s5local3.push(__s5local8);
                  }
                }
              } else {
                __s5local3.push(__s5local8);
              }
            }
          }
        }
      }
    }
    if (argument0 == ClientConstCastle.CATEGORY_DEFENCE) {
      __s5local5.sort(CastleDecoShopItemArrayHelper.defaultSortOrderBuilding);
      __s5local3.sort(CastleDecoShopItemArrayHelper.sortOrderDefence);
    } else {
      __s5local3.sort(CastleDecoShopItemArrayHelper.defaultSortOrderBuilding);
    }
    __s5local4.sort(CastleDecoShopItemArrayHelper.defaultSortOrderBuilding);
    return __s5local0 = (__s5local0 = __s5local3.concat(__s5local4)).concat(__s5local5);
  }
  static defaultSortOrderBuilding(argument0, argument1) {
    var __s28local0 = argument0.sortOrder - argument1.sortOrder;
    if (__s28local0 != 0) {
      return __s28local0;
    }
    var __s28local1 = argument0.requiredLegendLevel - argument1.requiredLegendLevel;
    if (__s28local1 != 0) {
      return __s28local1;
    } else {
      return argument0.requiredLevel - argument1.requiredLevel;
    }
  }
  static sortOrderDefence(argument0, argument1) {
    var __s33local0 = 0;
    if ((__s33local0 = argument0.group.toLowerCase() < argument1.group.toLowerCase() ? -1 : argument0.group.toLowerCase() > argument1.group.toLowerCase() ? 1 : 0) != 0) {
      return __s33local0;
    } else {
      return CastleDecoShopItemArrayHelper.defaultSortOrderBuilding(argument0, argument1);
    }
  }
  static isShopVOActiveBySeason(argument0) {
    return !!CastleModel.specialEventData.activeSeasonVO && !!CastleModel.specialEventData.activeSeasonVO.treasureMapVO && argument0.isAvailableByMapId(CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID);
  }
  static isMoatVisible(argument0) {
    var __s39local0 = Iso.data.objects.defences.moat;
    if (__s39local0) {
      var __s39local1 = instanceOfClass(__s39local0, "PremiumMoatVO") || instanceOfClass(__s39local0, "FactionPMoatMoatVO");
      if (instanceOfClass(argument0, "PremiumMoatVO") || instanceOfClass(argument0, "FactionPMoatMoatVO")) {
        if (__s39local1) {
          return argument0.level > __s39local0.level && argument0.isMoatAvailableByBuildOrder;
        } else {
          return argument0.isMoatAvailableByBuildOrder;
        }
      } else {
        return !__s39local1 && argument0.level > __s39local0.level && argument0.isMoatAvailableByBuildOrder;
      }
    }
    return argument0.isMoatAvailableByBuildOrder;
  }
  static get layoutManager() {
    return CastleLayoutManager.getInstance();
  }
}
