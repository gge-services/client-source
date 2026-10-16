Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleDecoShopItemArrayHelper() {}
  CastleDecoShopItemArrayHelper.getBuildingsByCategory = function (__s5param0) {
    var __s5local0 = [];
    var __s5local1 = __s5param0.toLowerCase();
    if (!__dep_export_CastleModel.CastleModel.decoShop[__s5param0.toLowerCase()]) {
      return __s5local0;
    }
    var __s5local2 = 0;
    var __s5local3 = [];
    var __s5local4 = [];
    var __s5local5 = [];
    for (var __s5local6 = 0, __s5local7 = __dep_export_CastleModel.CastleModel.decoShop[__s5local1]; __s5local6 < __s5local7.length; __s5local6++) {
      var __s5local8 = __s5local7[__s5local6];
      if (__s5local8 !== undefined) {
        var __s5local9 = __dep_export_CastleModel.CastleModel.userData.userLevel == 0;
        var __s5local10 = __s5local8.level == 0;
        if ((!__s5local9 && !__s5local10 || __s5local9 && __s5local10) && __s5local8.isAvailableInAreaTypeAndKingdomId(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.kingdomID) && (CastleDecoShopItemArrayHelper.layoutManager.isInTreasureCamp || !__s5local8.isOnlyAvailableByMapIds()) && (!CastleDecoShopItemArrayHelper.layoutManager.isInTreasureCamp || __s5local8.isOnlyAvailableInEvent() || CastleDecoShopItemArrayHelper.isShopVOActiveBySeason(__s5local8)) && (!(__s5local8.sceatSkillLocked > 0) || __dep_export_CastleModel.CastleModel.legendSkillData.hasLegendTemple())) {
          if (__s5param0 == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_DEFENCE) {
            if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s5local8, "CastlewallDefenceVO")) {
              if (__s5local8.level > __dep_export_Iso.Iso.data.objects.defences.currentWallLevel) {
                __s5local3.push(__s5local8);
              }
            } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s5local8, "BasicMoatVO") && CastleDecoShopItemArrayHelper.isMoatVisible(__s5local8)) {
              __s5local3.push(__s5local8);
            }
          } else {
            if (!__s5local8.canBeBuildByResourceFields()) {
              continue;
            }
            if (__dep_export_Iso.Iso.data.objects.provider.hasMaxAmountOfObjectsByType(__s5local8)) {
              __s5local5.push(__s5local8);
            } else {
              if (__dep_export_CastleModel.CastleModel.areaData.activeArea.slum) {
                __s5local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.activeArea.slum.slumLevel);
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
    if (__s5param0 == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_DEFENCE) {
      __s5local5.sort(CastleDecoShopItemArrayHelper.defaultSortOrderBuilding);
      __s5local3.sort(CastleDecoShopItemArrayHelper.sortOrderDefence);
    } else {
      __s5local3.sort(CastleDecoShopItemArrayHelper.defaultSortOrderBuilding);
    }
    __s5local4.sort(CastleDecoShopItemArrayHelper.defaultSortOrderBuilding);
    return __s5local0 = (__s5local0 = __s5local3.concat(__s5local4)).concat(__s5local5);
  };
  CastleDecoShopItemArrayHelper.defaultSortOrderBuilding = function (__s28param0, __s28param1) {
    var __s28local0 = __s28param0.sortOrder - __s28param1.sortOrder;
    if (__s28local0 != 0) {
      return __s28local0;
    }
    var __s28local1 = __s28param0.requiredLegendLevel - __s28param1.requiredLegendLevel;
    if (__s28local1 != 0) {
      return __s28local1;
    } else {
      return __s28param0.requiredLevel - __s28param1.requiredLevel;
    }
  };
  CastleDecoShopItemArrayHelper.sortOrderDefence = function (__s33param0, __s33param1) {
    var __s33local0 = 0;
    if ((__s33local0 = __s33param0.group.toLowerCase() < __s33param1.group.toLowerCase() ? -1 : __s33param0.group.toLowerCase() > __s33param1.group.toLowerCase() ? 1 : 0) != 0) {
      return __s33local0;
    } else {
      return CastleDecoShopItemArrayHelper.defaultSortOrderBuilding(__s33param0, __s33param1);
    }
  };
  CastleDecoShopItemArrayHelper.isShopVOActiveBySeason = function (__s37param0) {
    return !!__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO && !!__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO && __s37param0.isAvailableByMapId(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID);
  };
  CastleDecoShopItemArrayHelper.isMoatVisible = function (__s39param0) {
    var __s39local0 = __dep_export_Iso.Iso.data.objects.defences.moat;
    if (__s39local0) {
      var __s39local1 = __dep_exact_81dacdf05bd32292.instanceOfClass(__s39local0, "PremiumMoatVO") || __dep_exact_81dacdf05bd32292.instanceOfClass(__s39local0, "FactionPMoatMoatVO");
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s39param0, "PremiumMoatVO") || __dep_exact_81dacdf05bd32292.instanceOfClass(__s39param0, "FactionPMoatMoatVO")) {
        if (__s39local1) {
          return __s39param0.level > __s39local0.level && __s39param0.isMoatAvailableByBuildOrder;
        } else {
          return __s39param0.isMoatAvailableByBuildOrder;
        }
      } else {
        return !__s39local1 && __s39param0.level > __s39local0.level && __s39param0.isMoatAvailableByBuildOrder;
      }
    }
    return __s39param0.isMoatAvailableByBuildOrder;
  };
  Object.defineProperty(CastleDecoShopItemArrayHelper, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleDecoShopItemArrayHelper;
}();
exports.CastleDecoShopItemArrayHelper = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
