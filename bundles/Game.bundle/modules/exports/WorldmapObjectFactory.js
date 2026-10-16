Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ABGAllianceTowerMapobjectVO = require("gge-module:export_ABGAllianceTowerMapobjectVO");
var __s0local0 = function () {
  function WorldmapObjectFactory() {}
  WorldmapObjectFactory.createRawWorldmapObjectVO = function (__s5param0) {
    if (WorldmapObjectFactory.mapObjectVOs.get(__s5param0)) {
      return new (WorldmapObjectFactory.mapObjectVOs.get(__s5param0))();
    } else {
      return null;
    }
  };
  WorldmapObjectFactory.parseWorldMapArea = function (__s9param0, __s9param1 = true) {
    if (!__s9param0) {
      return null;
    }
    var __s9local0 = __dep_exact_f855840627e6e145.int(__s9param0[0]);
    var __s9local1 = WorldmapObjectFactory.createRawWorldmapObjectVO(__s9local0);
    switch (__s9local0) {
      case __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_DUNGEON:
        WorldmapObjectFactory.initDungeonByXY(__s9local1, __s9param0[1], __s9param0[2], __s9param0[6]);
    }
    if (__s9local1 && __s9param1) {
      __s9local1.parseAreaInfo(__s9param0);
    }
    return __s9local1;
  };
  WorldmapObjectFactory.generateBossDungeonByXY = function (__s14param0, __s14param1, __s14param2) {
    var __s14local0 = new __dep_export_BossdungeonMapobjectVO.BossdungeonMapobjectVO();
    WorldmapObjectFactory.initBossDungeonByXY(__s14local0, __s14param0, __s14param1, __s14param2);
    return __s14local0;
  };
  WorldmapObjectFactory.initDungeonByXY = function (__s16param0, __s16param1, __s16param2, __s16param3) {
    __s16param0.kingdomID = __s16param3;
    __s16param0.mapID = -1;
    __s16param0.absAreaPosX = __s16param1;
    __s16param0.absAreaPosY = __s16param2;
    var __s16local0 = 0;
    if (__s16param3 == __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID) {
      var __s16local1 = new __dep_exact_9e901e8e2483a22f.SimpleRandom(__s16param0.absAreaPosX * __s16param0.absAreaPosY);
      __s16local0 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_CLASSIC_DUNGEONS_FIRST_ID - __s16local1.nextInt(__dep_exact_26a421b704832cff.DungeonConst.DUNGEON_PLAYER_NAME_COUNT));
    } else {
      __s16local0 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_KINGDOM_DUNGEON_FIRST_ID - (__s16param3 - 1));
    }
    __s16param0.ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__s16local0);
  };
  WorldmapObjectFactory.initBossDungeonByXY = function (__s20param0, __s20param1, __s20param2, __s20param3) {
    __s20param0.kingdomID = __s20param3;
    __s20param0.mapID = -1;
    __s20param0.absAreaPosX = __s20param1;
    __s20param0.absAreaPosY = __s20param2;
    __s20param0.ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_KINGDOM_BOSS_DUNGEON_FIRST_ID - (__s20param3 - 1));
  };
  WorldmapObjectFactory.__initialize_static_members = function () {
    var __s22local0;
    (__s22local0 = new Map()).set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_CASTLE, __dep_export_CastleMapobjectVO.CastleMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_OUTPOST, __dep_export_OutpostMapobjectVO.OutpostMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_TREASURE_CAMP, __dep_export_EventCampMapobjectVO.EventCampMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_PLAGUE_AREA, __dep_export_PlagueareaMapobjectVO.PlagueareaMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_KINGDOM_CASTLE, __dep_export_KingdomCastleMapobjectVO.KingdomCastleMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_VILLAGE, __dep_export_VillageMapobjectVO.VillageMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_KINGS_TOWER, __dep_export_KingstowerMapobjectVO.KingstowerMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_BOSS_DUNGEON, __dep_export_BossdungeonMapobjectVO.BossdungeonMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_DUNGEON, __dep_export_DungeonMapobjectVO.DungeonMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_EVENT_DUNGEON, __dep_export_EventdungeonMapobjectVO.EventdungeonMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_CAPITAL, __dep_export_CapitalMapobjectVO.CapitalMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_CAMP, __dep_export_FactionCampMapobjectVO.FactionCampMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_CAPITAL, __dep_export_FactionCapitalMapobjectVO.FactionCapitalMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_TOWER, __dep_export_FactionTowerMapobjectVO.FactionTowerMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_VILLAGE, __dep_export_FactionVillageMapobjectVO.FactionVillageMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_TREASURE_DUNGEON, __dep_export_TreasureDungeonMapObjectVO.TreasureDungeonMapObjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_ALIEN_CAMP, __dep_export_AlienInvasionMapobjectVO.AlienInvasionMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_RED_ALIEN_CAMP, __dep_export_RedAlienInvasionMapobjectVO.RedAlienInvasionMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_METROPOL, __dep_export_MetropolMapobjectVO.MetropolMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_ISLE_DUNGEON, __dep_export_DungeonIsleMapobjectVO.DungeonIsleMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_ISLE_RESOURCE, __dep_export_ResourceIsleMapobjectVO.ResourceIsleMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_EMPTY, __dep_export_DummyMapobjectVO.DummyMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_MONUMENT, __dep_export_MonumentMapobjectVO.MonumentMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_LABORATORY, __dep_export_LaboratoryMapobjectVO.LaboratoryMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_NOMAD_CAMP, __dep_export_NomadCampMapObjectVO.NomadCampMapObjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_SAMURAI_CAMP, __dep_export_SamuraiCampMapObjectVO.SamuraiCampMapObjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_FACTION_INVASION_CAMP, __dep_export_FactionInvasionCampMapObjectVO.FactionInvasionCampMapObjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_ALLIANCE_NOMAD_CAMP, __dep_export_NomadKhanCampMapObjectVO.NomadKhanCampMapObjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_DYNAMIC, __dep_export_PlaceholderMapobjectVO.PlaceholderMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_DAIMYO_CASTLE, __dep_export_DaimyoCastleMapObjectVO.DaimyoCastleMapObjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP, __dep_export_DaimyoTownshipMapObjectVO.DaimyoTownshipMapObjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER, __dep_export_ABGAllianceTowerMapobjectVO.ABGAllianceTowerMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_RESOURCE_TOWER, __dep_export_ABGResourceTowerMapobjectVO.ABGResourceTowerMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_WOLF_KING, __dep_export_WolfkingCastleMapObjectVO.WolfkingCastleMapObjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_SHADOW_AREA, __dep_export_ShadowareaMapobjectVO.ShadowareaMapobjectVO);
    __s22local0.set(__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_ARE_PORTAL, __dep_export_AllianceRaidEventPortalMapobjectVO.AllianceRaidEventPortalMapobjectVO);
    WorldmapObjectFactory.mapObjectVOs = __s22local0;
  };
  return WorldmapObjectFactory;
}();
exports.WorldmapObjectFactory = __s0local0;
var __dep_export_AlienInvasionMapobjectVO = require("gge-module:export_AlienInvasionMapobjectVO");
var __dep_export_AllianceRaidEventPortalMapobjectVO = require("gge-module:export_AllianceRaidEventPortalMapobjectVO");
var __dep_export_BossdungeonMapobjectVO = require("gge-module:export_BossdungeonMapobjectVO");
var __dep_export_CapitalMapobjectVO = require("gge-module:export_CapitalMapobjectVO");
var __dep_export_CastleMapobjectVO = require("gge-module:export_CastleMapobjectVO");
var __dep_export_DungeonIsleMapobjectVO = require("gge-module:export_DungeonIsleMapobjectVO");
var __dep_export_DungeonMapobjectVO = require("gge-module:export_DungeonMapobjectVO");
var __dep_export_EventCampMapobjectVO = require("gge-module:export_EventCampMapobjectVO");
var __dep_export_EventdungeonMapobjectVO = require("gge-module:export_EventdungeonMapobjectVO");
var __dep_export_FactionCampMapobjectVO = require("gge-module:export_FactionCampMapobjectVO");
var __dep_export_FactionCapitalMapobjectVO = require("gge-module:export_FactionCapitalMapobjectVO");
var __dep_export_FactionInvasionCampMapObjectVO = require("gge-module:export_FactionInvasionCampMapObjectVO");
var __dep_export_FactionTowerMapobjectVO = require("gge-module:export_FactionTowerMapobjectVO");
var __dep_export_FactionVillageMapobjectVO = require("gge-module:export_FactionVillageMapobjectVO");
var __dep_export_KingdomCastleMapobjectVO = require("gge-module:export_KingdomCastleMapobjectVO");
var __dep_export_KingstowerMapobjectVO = require("gge-module:export_KingstowerMapobjectVO");
var __dep_export_LaboratoryMapobjectVO = require("gge-module:export_LaboratoryMapobjectVO");
var __dep_export_MetropolMapobjectVO = require("gge-module:export_MetropolMapobjectVO");
var __dep_export_MonumentMapobjectVO = require("gge-module:export_MonumentMapobjectVO");
var __dep_export_NomadCampMapObjectVO = require("gge-module:export_NomadCampMapObjectVO");
var __dep_export_NomadKhanCampMapObjectVO = require("gge-module:export_NomadKhanCampMapObjectVO");
var __dep_export_OutpostMapobjectVO = require("gge-module:export_OutpostMapobjectVO");
var __dep_export_PlaceholderMapobjectVO = require("gge-module:export_PlaceholderMapobjectVO");
var __dep_export_PlagueareaMapobjectVO = require("gge-module:export_PlagueareaMapobjectVO");
var __dep_export_RedAlienInvasionMapobjectVO = require("gge-module:export_RedAlienInvasionMapobjectVO");
var __dep_export_ResourceIsleMapobjectVO = require("gge-module:export_ResourceIsleMapobjectVO");
var __dep_export_SamuraiCampMapObjectVO = require("gge-module:export_SamuraiCampMapObjectVO");
var __dep_export_ShadowareaMapobjectVO = require("gge-module:export_ShadowareaMapobjectVO");
var __dep_export_TreasureDungeonMapObjectVO = require("gge-module:export_TreasureDungeonMapObjectVO");
var __dep_export_VillageMapobjectVO = require("gge-module:export_VillageMapobjectVO");
var __dep_export_ClientConstNPCs = require("gge-module:export_ClientConstNPCs");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_DummyMapobjectVO = require("gge-module:export_DummyMapobjectVO");
var __dep_export_WolfkingCastleMapObjectVO = require("gge-module:export_WolfkingCastleMapObjectVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_DaimyoCastleMapObjectVO = require("gge-module:export_DaimyoCastleMapObjectVO");
var __dep_export_DaimyoTownshipMapObjectVO = require("gge-module:export_DaimyoTownshipMapObjectVO");
var __dep_export_ABGResourceTowerMapobjectVO = require("gge-module:export_ABGResourceTowerMapobjectVO");
__s0local0.__initialize_static_members();
