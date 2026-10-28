import { AreaData } from "./AreaData";
import { AreaDataEnum } from "./AreaDataEnum";
import { CastleModel } from "./CastleModel";
import { EventCampMapobjectVO } from "./EventCampMapobjectVO";
import { instanceOfClass } from "../../../ggs.dll/reconstructed/exports/instanceOfClass";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { WorldConst } from "../../../ggs.dll/reconstructed/exports/WorldConst";
import { WorldmapObjectFactory } from "./WorldmapObjectFactory";
export class AreaFactory {
  static createArea(argument0) {
    var __s5local0 = new AreaData();
    var __s5local1 = int(argument0.areaType);
    var __s5local2 = [];
    switch (__s5local1) {
      case WorldConst.AREA_TYPE_CASTLE:
      case WorldConst.AREA_TYPE_CAPITAL:
      case WorldConst.AREA_TYPE_OUTPOST:
      case WorldConst.AREA_TYPE_FACTION_CAMP:
      case WorldConst.AREA_TYPE_KINGDOM_CASTLE:
      case WorldConst.AREA_TYPE_TREASURE_CAMP:
      case WorldConst.AREA_TYPE_METROPOL:
        __s5local2 = [AreaDataEnum.COMMON_INFO, AreaDataEnum.ISO_DATA, AreaDataEnum.CONSTRUCTION_LIST, AreaDataEnum.STORAGE, AreaDataEnum.CONSTRUCTION_ITEMS];
    }
    switch (__s5local1) {
      case WorldConst.AREA_TYPE_FACTION_CAMP:
      case WorldConst.AREA_TYPE_TREASURE_CAMP:
        __s5local2.push(AreaDataEnum.MORALITY);
    }
    switch (__s5local1) {
      case WorldConst.AREA_TYPE_KINGDOM_CASTLE:
        __s5local2.push(AreaDataEnum.SLUM);
    }
    __s5local0.areaInfo = argument0;
    __s5local0.initData(__s5local2);
    return __s5local0;
  }
  static parseAreaInfo(argument0, argument1) {
    var __s10local0;
    if (argument0 == WorldConst.AREA_TYPE_TREASURE_CAMP) {
      __s10local0 = new EventCampMapobjectVO();
      if (CastleModel.specialEventData.activeSeasonVO) {
        __s10local0.mapID = int(CastleModel.specialEventData.activeSeasonVO.mapID);
      }
      __s10local0.ownerInfo = CastleModel.otherPlayerData.getOwnInfoVO();
    } else {
      __s10local0 = WorldmapObjectFactory.parseWorldMapArea(argument1.A);
      if (argument1.O) {
        __s10local0.ownerInfo = CastleModel.otherPlayerData.parseOwnerInfo(argument1.O);
      } else if (!instanceOfClass(__s10local0, "OutpostMapobjectVO")) {
        __s10local0.ownerInfo = CastleModel.otherPlayerData.getOwnerInfoVO(__s10local0.ownerInfo.playerID);
      }
    }
    return __s10local0;
  }
  static createAreaFromServer(argument0, argument1) {
    var __s17local0 = AreaFactory.parseAreaInfo(argument0, argument1);
    return AreaFactory.createArea(__s17local0);
  }
}
