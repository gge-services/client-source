Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AreaFactory() {}
  AreaFactory.createArea = function (__s5param0) {
    var __s5local0 = new __dep_export_AreaData.AreaData();
    var __s5local1 = __dep_exact_f855840627e6e145.int(__s5param0.areaType);
    var __s5local2 = [];
    switch (__s5local1) {
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_CASTLE:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_CAPITAL:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_OUTPOST:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_CAMP:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_KINGDOM_CASTLE:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_TREASURE_CAMP:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_METROPOL:
        __s5local2 = [__dep_export_AreaDataEnum.AreaDataEnum.COMMON_INFO, __dep_export_AreaDataEnum.AreaDataEnum.ISO_DATA, __dep_export_AreaDataEnum.AreaDataEnum.CONSTRUCTION_LIST, __dep_export_AreaDataEnum.AreaDataEnum.STORAGE, __dep_export_AreaDataEnum.AreaDataEnum.CONSTRUCTION_ITEMS];
    }
    switch (__s5local1) {
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_CAMP:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_TREASURE_CAMP:
        __s5local2.push(__dep_export_AreaDataEnum.AreaDataEnum.MORALITY);
    }
    switch (__s5local1) {
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_KINGDOM_CASTLE:
        __s5local2.push(__dep_export_AreaDataEnum.AreaDataEnum.SLUM);
    }
    __s5local0.areaInfo = __s5param0;
    __s5local0.initData(__s5local2);
    return __s5local0;
  };
  AreaFactory.parseAreaInfo = function (__s10param0, __s10param1) {
    var __s10local0;
    if (__s10param0 == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_TREASURE_CAMP) {
      __s10local0 = new __dep_export_EventCampMapobjectVO.EventCampMapobjectVO();
      if (__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO) {
        __s10local0.mapID = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.mapID);
      }
      __s10local0.ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO();
    } else {
      __s10local0 = __dep_export_WorldmapObjectFactory.WorldmapObjectFactory.parseWorldMapArea(__s10param1.A);
      if (__s10param1.O) {
        __s10local0.ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.parseOwnerInfo(__s10param1.O);
      } else if (!__dep_exact_81dacdf05bd32292.instanceOfClass(__s10local0, "OutpostMapobjectVO")) {
        __s10local0.ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__s10local0.ownerInfo.playerID);
      }
    }
    return __s10local0;
  };
  AreaFactory.createAreaFromServer = function (__s17param0, __s17param1) {
    var __s17local0 = AreaFactory.parseAreaInfo(__s17param0, __s17param1);
    return AreaFactory.createArea(__s17local0);
  };
  return AreaFactory;
}();
exports.AreaFactory = __s0local0;
var __dep_export_WorldmapObjectFactory = require("gge-module:export_WorldmapObjectFactory");
var __dep_export_EventCampMapobjectVO = require("gge-module:export_EventCampMapobjectVO");
var __dep_export_AreaDataEnum = require("gge-module:export_AreaDataEnum");
var __dep_export_AreaData = require("gge-module:export_AreaData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
