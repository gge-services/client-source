Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_TempServerHelper = require("gge-module:export_TempServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_TempServerConfigurationVO = require("gge-module:export_TempServerConfigurationVO");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function MapHelper() {}
  MapHelper.pixelPosToSectorGridPos = function (__s5param0) {
    return new __s0local0(Math.floor(__s5param0.x / __dep_export_ClientConstCastle.ClientConstCastle.SECTORPIXELSIZE_X), Math.floor(__s5param0.y / __dep_export_ClientConstCastle.ClientConstCastle.SECTORPIXELSIZE_Y));
  };
  MapHelper.pixelPosToAreaGridPos = function (__s7param0) {
    return new __s0local0(Math.floor(__s7param0.x / __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X), Math.floor(__s7param0.y / __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y));
  };
  MapHelper.pixelPosToAreaGridPosUnrounded = function (__s9param0) {
    return new __s0local0(__s9param0.x / __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X, __s9param0.y / __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y);
  };
  MapHelper.sectorGridPosToPixelpos = function (__s11param0) {
    return new __s0local0(__s11param0.x * __dep_exact_26a421b704832cff.WorldConst.SECTOR_WIDTH * __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X, __s11param0.y * __dep_exact_26a421b704832cff.WorldConst.SECTOR_HEIGHT * __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y);
  };
  MapHelper.getDistanceByMapobjects = function (__s13param0, __s13param1, __s13param2 = true, __s13param3 = -1) {
    if (__s13param3 == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK) {
      return __dep_exact_26a421b704832cff_2.TravelConst.COLLECTOR_TRAVEL_DISTANCE;
    }
    if ([__s13param1.areaType, __s13param0.areaType].indexOf(__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ALIEN_CAMP) > -1 && __s13param2) {
      return __dep_exact_26a421b704832cff_2.TravelConst.ALIEN_TRAVEL_DISTANCE;
    }
    if ([__s13param1.areaType, __s13param0.areaType].indexOf(__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_RED_ALIEN_CAMP) > -1 && __s13param2) {
      return __dep_exact_26a421b704832cff_2.TravelConst.ALIEN_TRAVEL_DISTANCE;
    }
    if ([__s13param1.areaType, __s13param0.areaType].indexOf(__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_NOMAD_CAMP) > -1 && __s13param2) {
      return __dep_exact_26a421b704832cff_2.TravelConst.NOMAD_TRAVEL_DISTANCE;
    }
    if ([__s13param1.areaType, __s13param0.areaType].indexOf(__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ALLIANCE_NOMAD_CAMP) > -1 && __s13param2) {
      return __dep_exact_26a421b704832cff_2.TravelConst.ALLIANCE_INVASION_CAMP_TRAVEL_DISTANCE;
    }
    if ([__s13param1.areaType, __s13param0.areaType].indexOf(__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_SAMURAI_CAMP) > -1 && __s13param2) {
      return __dep_exact_26a421b704832cff_2.TravelConst.SAMURAI_TRAVEL_DISTANCE;
    }
    if ([__s13param1.areaType, __s13param0.areaType].indexOf(__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_DAIMYO_CASTLE) > -1 && __s13param2) {
      return __dep_exact_26a421b704832cff_2.TravelConst.DAIMYO_CASTLE_TRAVEL_DISTANCE;
    }
    if ([__s13param1.areaType, __s13param0.areaType].indexOf(__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP) > -1 && __s13param2) {
      return __dep_exact_26a421b704832cff_2.TravelConst.DAIMYO_TOWNSHIP_TRAVEL_DISTANCE;
    }
    if ([__s13param1.areaType, __s13param0.areaType].indexOf(__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_INVASION_CAMP) > -1 && __s13param2) {
      return __dep_exact_26a421b704832cff_2.TravelConst.FACTION_TRAVEL_DISTANCE;
    }
    if ([__s13param1.areaType, __s13param0.areaType].indexOf(__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER) > -1 && __s13param2) {
      return __dep_exact_26a421b704832cff_2.TravelConst.ALLIANCE_BATTLE_GROUND_TOWER_DISTANCE;
    }
    if ([__s13param1.areaType, __s13param0.areaType].indexOf(__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_RESOURCE_TOWER) > -1 && __s13param2) {
      return __dep_exact_26a421b704832cff_2.TravelConst.ALLIANCE_BATTLE_GROUND_RESOURCE_TOWER_DISTANCE;
    }
    if ([__s13param1.areaType, __s13param0.areaType].indexOf(__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ARE_PORTAL) > -1) {
      return __dep_exact_26a421b704832cff_2.TravelConst.ALLIANCE_RAID_PORTAL_TRAVEL_DISTANCE;
    }
    if (__s13param1.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_VILLAGE || __s13param1.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_TOWER || __s13param1.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_CAPITAL) {
      if (MapHelper.factionEventVO) {
        var __s13local0 = __dep_exact_f855840627e6e145.int(__s13param1.specialCampID);
        return MapHelper.factionEventVO.distanceMap.get(__s13local0);
      }
    } else if (MapHelper.isTempServerRankSwapAttack(__s13param1, __s13param3)) {
      return __dep_exact_26a421b704832cff_2.TravelConst.TEMPSERVER_RANKSWAP_TRAVEL_DISTANCE;
    }
    return __dep_exact_9e901e8e2483a22f.MathBase.round(MapHelper.getShortestDistance(__s13param0.absAreaPos, __s13param1.absAreaPos), 1);
  };
  MapHelper.getShortestDistance = function (__s30param0, __s30param1) {
    if (!__s30param0 || !__s30param1) {
      return 0;
    }
    var __s30local0 = __dep_exact_f855840627e6e145.int(__s30param0.y - __s30param1.y);
    var __s30local1 = Math.abs(__s30param0.x - __s30param1.x);
    var __s30local2 = __dep_export_ClientConstCastle.ClientConstCastle.WORLD_WIDTH - __s30local1;
    var __s30local3 = __dep_exact_f855840627e6e145.int(Math.min(__s30local1, __s30local2));
    var __s30local4 = Math.sqrt(__s30local3 * __s30local3 + __s30local0 * __s30local0);
    return __s30local4 = Math.round(__s30local4 * 10) / 10;
  };
  MapHelper.getRotationToShortestDistance = function (__s33param0, __s33param1) {
    var __s33local0 = __s33param0.x - __s33param1.x;
    var __s33local1 = __s33param0.y - __s33param1.y;
    if (Math.abs(__s33local0) > __dep_export_ClientConstCastle.ClientConstCastle.WORLD_WIDTH / 2) {
      if (__s33local0 > 0) {
        __s33local0 -= __dep_export_ClientConstCastle.ClientConstCastle.WORLD_WIDTH;
      } else {
        __s33local0 += __dep_export_ClientConstCastle.ClientConstCastle.WORLD_WIDTH;
      }
    }
    return Math.atan2(__s33local1, __s33local0) * 180 / Math.PI - 90;
  };
  MapHelper.areaToPixelTopLeft = function (__s38param0) {
    var __s38local0 = new __s0local0();
    __s38local0.x = __s38param0.x * __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X;
    __s38local0.y = __s38param0.y * __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y;
    return __s38local0;
  };
  MapHelper.areaToPixelCenter = function (__s40param0) {
    var __s40local0 = new __s0local0();
    __s40local0.x = __s40param0.x * __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X;
    __s40local0.y = __s40param0.y * __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y;
    __s40local0.x += __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X / 2;
    __s40local0.y += __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y / 2;
    return __s40local0;
  };
  MapHelper.getRealPos = function (__s42param0) {
    var __s42local0 = new __s0local0();
    __s42local0.y = __s42param0.y;
    if (__s42param0.x % __dep_export_ClientConstCastle.ClientConstCastle.WORLD_WIDTH < 0) {
      __s42local0.x = __s42param0.x % __dep_export_ClientConstCastle.ClientConstCastle.WORLD_WIDTH + __dep_export_ClientConstCastle.ClientConstCastle.WORLD_WIDTH;
    } else {
      __s42local0.x = __s42param0.x % __dep_export_ClientConstCastle.ClientConstCastle.WORLD_WIDTH;
    }
    return __s42local0;
  };
  Object.defineProperty(MapHelper, "factionEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_3.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  MapHelper.isTempServerRankSwapAttack = function (__s48param0, __s48param1) {
    return !!__dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.isOnTemporaryServer && __s48param0.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_CASTLE && __s48param0.kingdomID == __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID && __s48param1 == __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ATTACK && !!__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent && __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.settingVO.scoringSystem == __dep_export_TempServerConfigurationVO.TempServerConfigurationVO.SCORING_SYSTEM_RANK_SWAP;
  };
  return MapHelper;
}();
exports.MapHelper = __s0local1;
