Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleWorldmapEvent(__s3param0, __s3param1 = null, __s3param2 = true, __s3param3 = false) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this).params = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWorldmapEvent, __s1param0);
  CastleWorldmapEvent.__initialize_static_members = function () {
    CastleWorldmapEvent.WORLDMAP_CLICK = "worldmapclick";
    CastleWorldmapEvent.WORLDMAP_MOUSEUP = "worldmap_mouseup";
    CastleWorldmapEvent.WORLDMAP_MOUSEDOWN = "worldmap_mousedown";
    CastleWorldmapEvent.UPDATE_AREA_INFO = "updateareainfo";
    CastleWorldmapEvent.INFOTOOLTIP = "showinfotooltip";
    CastleWorldmapEvent.SHOW_MENU = "showmenu";
    CastleWorldmapEvent.RINGMENU_CASTLEINFO = 0;
    CastleWorldmapEvent.RINGMENU_OUTPOSTINFO = 1;
    CastleWorldmapEvent.RINGMENU_ARMYATTACK = 2;
    CastleWorldmapEvent.RINGMENU_DUNGEONINFO = 3;
    CastleWorldmapEvent.SHOW_PLAYER_INFO = "showplayerinfo";
    CastleWorldmapEvent.CLICK_RUIN = "clickruin";
    CastleWorldmapEvent.CLICK_RELOCATE_POSITION = "clickrelocateposition";
    CastleWorldmapEvent.RUIN_INFO = "clickruin";
    CastleWorldmapEvent.WORLDMAPDATA_REMOVE_MOVEMENT = "worldmapdata_remove_movement";
    CastleWorldmapEvent.NEW_CAMERA_POSITION = "new_camera_position";
    CastleWorldmapEvent.DOUBLE_CLICK_CASTLE = "doubleClickCastle";
    CastleWorldmapEvent.SELECTED_CASTLELIST_ITEM_CHANGED = "selected_castlelist_item_changed";
    CastleWorldmapEvent.REMOVED_RESOURCE_ISLE_FROM_MAP = "removedResourceIsleFromMap";
    CastleWorldmapEvent.REMOVED_ALIEN_CASTLE_FROM_MAP = "removedAlienCastleFromMap";
  };
  return CastleWorldmapEvent;
}(createjs.Event);
exports.CastleWorldmapEvent = __s0local0;
__s0local0.__initialize_static_members();
