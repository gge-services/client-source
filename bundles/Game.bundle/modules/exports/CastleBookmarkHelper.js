Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleBookmarkHelper() {}
  CastleBookmarkHelper.isBookmarkableForPlayer = function (__s5param0) {
    if (!__s5param0) {
      return false;
    }
    if (__s5param0.isOwnMapobject) {
      return false;
    }
    switch (__s5param0.areaType) {
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_EMPTY:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_NO_LANDMARK:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_PLAGUE_AREA:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_SHADOW_AREA:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_TREASURE_CAMP:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_TREASURE_DUNGEON:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_TROOP_HOSTEL:
        return false;
    }
    return true;
  };
  CastleBookmarkHelper.isBookmarkableForAlliance = function (__s10param0) {
    if (!__s10param0) {
      return false;
    }
    switch (__s10param0.areaType) {
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_EMPTY:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_DUNGEON:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_TREASURE_DUNGEON:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_TREASURE_CAMP:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_SHADOW_AREA:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_EVENT_DUNGEON:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_NO_LANDMARK:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_PLAGUE_AREA:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ALIEN_CAMP:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_RED_ALIEN_CAMP:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_NOMAD_CAMP:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_SAMURAI_CAMP:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_INVASION_CAMP:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_DAIMYO_CASTLE:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_WOLF_KING:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ARE_PORTAL:
        return false;
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_LABORATORY:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_MONUMENT:
        return true;
    }
    return !__s10param0.isOwnMapobject;
  };
  CastleBookmarkHelper.getBookmarkButtonConfiguration = function (__s14param0) {
    var __s14local0 = CastleBookmarkHelper.isBookmarkableForPlayer(__s14param0);
    var __s14local1 = __dep_export_CastleModel.CastleModel.bookmarkData.isPlayerListFull;
    var __s14local2 = __dep_export_CastleModel.CastleModel.userData.isInAlliance;
    var __s14local3 = CastleBookmarkHelper.isBookmarkableForAlliance(__s14param0);
    var __s14local4 = __dep_export_CastleModel.CastleModel.bookmarkData.isAllianceListFull;
    var __s14local5 = __dep_export_CastleModel.CastleModel.bookmarkData.getBookmarkForWMO(__s14param0, __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.getPlayerTypes()) != null;
    var __s14local6 = __s14local0 && !__s14local1;
    var __s14local7 = __s14local3 && __s14local2 && !__s14local4;
    var __s14local8 = __dep_export_CastleModel.CastleModel.userData.getSetBookmarkTooltipInner(__s14local6, __s14local7, __s14local5, __s14local4, __s14local1, false);
    if (__s14local6) {
      return CastleBookmarkHelper.pack(true, __s14local8, __dep_export_ButtonBookmarkConfigVO.ButtonBookmarkConfigVO.ACTION_OPEN_CREATE_PLAYER_BOOKMARK);
    } else if (__s14local7) {
      return CastleBookmarkHelper.pack(true, __s14local8, __dep_export_ButtonBookmarkConfigVO.ButtonBookmarkConfigVO.ACTION_OPEN_CREATE_ALLIANCE_BOOKMARK);
    } else {
      return CastleBookmarkHelper.pack(false, __s14local8);
    }
  };
  CastleBookmarkHelper.pack = function (__s19param0, __s19param1, __s19param2 = __dep_exact_f855840627e6e145.int(__dep_export_ButtonBookmarkConfigVO.ButtonBookmarkConfigVO.ACTION_NONE)) {
    return new __dep_export_ButtonBookmarkConfigVO.ButtonBookmarkConfigVO(__s19param0, __s19param1, __s19param2);
  };
  return CastleBookmarkHelper;
}();
exports.CastleBookmarkHelper = __s0local0;
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonBookmarkConfigVO = require("gge-module:export_ButtonBookmarkConfigVO");
var __dep_export_EWorldmapBookmarkType = require("gge-module:export_EWorldmapBookmarkType");
