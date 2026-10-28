import { ABGAllianceTowerMapobjectVO } from "./ABGAllianceTowerMapobjectVO";
import { ABGResourceTowerMapobjectVO } from "./ABGResourceTowerMapobjectVO";
import { AlienInvasionMapobjectVO } from "./AlienInvasionMapobjectVO";
import { AllianceRaidEventPortalMapobjectVO } from "./AllianceRaidEventPortalMapobjectVO";
import { BossdungeonMapobjectVO } from "./BossdungeonMapobjectVO";
import { CapitalMapobjectVO } from "./CapitalMapobjectVO";
import { CastleMapobjectVO } from "./CastleMapobjectVO";
import { CastleModel } from "./CastleModel";
import { ClientConstNPCs } from "./ClientConstNPCs";
import { DaimyoCastleMapObjectVO } from "./DaimyoCastleMapObjectVO";
import { DaimyoTownshipMapObjectVO } from "./DaimyoTownshipMapObjectVO";
import { DummyMapobjectVO } from "./DummyMapobjectVO";
import { DungeonConst } from "../../../ggs.dll/reconstructed/exports/DungeonConst";
import { DungeonIsleMapobjectVO } from "./DungeonIsleMapobjectVO";
import { DungeonMapobjectVO } from "./DungeonMapobjectVO";
import { EventCampMapobjectVO } from "./EventCampMapobjectVO";
import { EventdungeonMapobjectVO } from "./EventdungeonMapobjectVO";
import { FactionCampMapobjectVO } from "./FactionCampMapobjectVO";
import { FactionCapitalMapobjectVO } from "./FactionCapitalMapobjectVO";
import { FactionInvasionCampMapObjectVO } from "./FactionInvasionCampMapObjectVO";
import { FactionTowerMapobjectVO } from "./FactionTowerMapobjectVO";
import { FactionVillageMapobjectVO } from "./FactionVillageMapobjectVO";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { KingdomCastleMapobjectVO } from "./KingdomCastleMapobjectVO";
import { KingstowerMapobjectVO } from "./KingstowerMapobjectVO";
import { LaboratoryMapobjectVO } from "./LaboratoryMapobjectVO";
import { MetropolMapobjectVO } from "./MetropolMapobjectVO";
import { MonumentMapobjectVO } from "./MonumentMapobjectVO";
import { NomadCampMapObjectVO } from "./NomadCampMapObjectVO";
import { NomadKhanCampMapObjectVO } from "./NomadKhanCampMapObjectVO";
import { OutpostMapobjectVO } from "./OutpostMapobjectVO";
import { PlaceholderMapobjectVO } from "./PlaceholderMapobjectVO";
import { PlagueareaMapobjectVO } from "./PlagueareaMapobjectVO";
import { RedAlienInvasionMapobjectVO } from "./RedAlienInvasionMapobjectVO";
import { ResourceIsleMapobjectVO } from "./ResourceIsleMapobjectVO";
import { SamuraiCampMapObjectVO } from "./SamuraiCampMapObjectVO";
import { ShadowareaMapobjectVO } from "./ShadowareaMapobjectVO";
import { SimpleRandom } from "../../../ggs.dll/reconstructed/exports/SimpleRandom";
import { TreasureDungeonMapObjectVO } from "./TreasureDungeonMapObjectVO";
import { VillageMapobjectVO } from "./VillageMapobjectVO";
import { WolfkingCastleMapObjectVO } from "./WolfkingCastleMapObjectVO";
import { WorldClassic } from "../../../ggs.dll/reconstructed/exports/WorldClassic";
import { WorldConst } from "../../../ggs.dll/reconstructed/exports/WorldConst";
export class WorldmapObjectFactory {
  static mapObjectVOs: any;
  static createRawWorldmapObjectVO(argument0) {
    if (WorldmapObjectFactory.mapObjectVOs.get(argument0)) {
      return new (WorldmapObjectFactory.mapObjectVOs.get(argument0))();
    } else {
      return null;
    }
  }
  static parseWorldMapArea(argument0, argument1 = true) {
    if (!argument0) {
      return null;
    }
    var __s9local0 = int(argument0[0]);
    var __s9local1 = WorldmapObjectFactory.createRawWorldmapObjectVO(__s9local0);
    switch (__s9local0) {
      case WorldConst.AREA_TYPE_DUNGEON:
        WorldmapObjectFactory.initDungeonByXY(__s9local1, argument0[1], argument0[2], argument0[6]);
    }
    if (__s9local1 && argument1) {
      __s9local1.parseAreaInfo(argument0);
    }
    return __s9local1;
  }
  static generateBossDungeonByXY(argument0, argument1, argument2) {
    var __s14local0 = new BossdungeonMapobjectVO();
    WorldmapObjectFactory.initBossDungeonByXY(__s14local0, argument0, argument1, argument2);
    return __s14local0;
  }
  static initDungeonByXY(argument0, argument1, argument2, argument3) {
    argument0.kingdomID = argument3;
    argument0.mapID = -1;
    argument0.absAreaPosX = argument1;
    argument0.absAreaPosY = argument2;
    var __s16local0 = 0;
    if (argument3 == WorldClassic.KINGDOM_ID) {
      var __s16local1 = new SimpleRandom(argument0.absAreaPosX * argument0.absAreaPosY);
      __s16local0 = int(ClientConstNPCs.NPC_ID_CLASSIC_DUNGEONS_FIRST_ID - __s16local1.nextInt(DungeonConst.DUNGEON_PLAYER_NAME_COUNT));
    } else {
      __s16local0 = int(ClientConstNPCs.NPC_ID_KINGDOM_DUNGEON_FIRST_ID - (argument3 - 1));
    }
    argument0.ownerInfo = CastleModel.otherPlayerData.getOwnerInfoVO(__s16local0);
  }
  static initBossDungeonByXY(argument0, argument1, argument2, argument3) {
    argument0.kingdomID = argument3;
    argument0.mapID = -1;
    argument0.absAreaPosX = argument1;
    argument0.absAreaPosY = argument2;
    argument0.ownerInfo = CastleModel.otherPlayerData.getOwnerInfoVO(ClientConstNPCs.NPC_ID_KINGDOM_BOSS_DUNGEON_FIRST_ID - (argument3 - 1));
  }
  static __initialize_static_members() {
    var __s22local0;
    (__s22local0 = new Map()).set(WorldConst.AREA_TYPE_CASTLE, CastleMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_OUTPOST, OutpostMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_TREASURE_CAMP, EventCampMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_PLAGUE_AREA, PlagueareaMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_KINGDOM_CASTLE, KingdomCastleMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_VILLAGE, VillageMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_KINGS_TOWER, KingstowerMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_BOSS_DUNGEON, BossdungeonMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_DUNGEON, DungeonMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_EVENT_DUNGEON, EventdungeonMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_CAPITAL, CapitalMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_FACTION_CAMP, FactionCampMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_FACTION_CAPITAL, FactionCapitalMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_FACTION_TOWER, FactionTowerMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_FACTION_VILLAGE, FactionVillageMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_TREASURE_DUNGEON, TreasureDungeonMapObjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_ALIEN_CAMP, AlienInvasionMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_RED_ALIEN_CAMP, RedAlienInvasionMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_METROPOL, MetropolMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_ISLE_DUNGEON, DungeonIsleMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_ISLE_RESOURCE, ResourceIsleMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_EMPTY, DummyMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_MONUMENT, MonumentMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_LABORATORY, LaboratoryMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_NOMAD_CAMP, NomadCampMapObjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_SAMURAI_CAMP, SamuraiCampMapObjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_FACTION_INVASION_CAMP, FactionInvasionCampMapObjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_ALLIANCE_NOMAD_CAMP, NomadKhanCampMapObjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_DYNAMIC, PlaceholderMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_DAIMYO_CASTLE, DaimyoCastleMapObjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP, DaimyoTownshipMapObjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER, ABGAllianceTowerMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_RESOURCE_TOWER, ABGResourceTowerMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_WOLF_KING, WolfkingCastleMapObjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_SHADOW_AREA, ShadowareaMapobjectVO);
    __s22local0.set(WorldConst.AREA_TYPE_ARE_PORTAL, AllianceRaidEventPortalMapobjectVO);
    WorldmapObjectFactory.mapObjectVOs = __s22local0;
  }
}
WorldmapObjectFactory.__initialize_static_members();
