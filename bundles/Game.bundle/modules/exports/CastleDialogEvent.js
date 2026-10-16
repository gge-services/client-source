Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleDialogEvent(__s3param0, __s3param1 = null, __s3param2 = false, __s3param3 = false) {
    var __s3local0 = this;
    __s3local0.params = null;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this).params = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDialogEvent, __s1param0);
  CastleDialogEvent.__initialize_static_members = function () {
    CastleDialogEvent.CHANGE_LAYOUTSTATE = "changelayoutstate";
    CastleDialogEvent.MOUSE_ON_DIALOG = "mouseondialog";
    CastleDialogEvent.CHANGE_WORLD = "changeworld";
    CastleDialogEvent.CLOSE_QUESTINFO = "close_questinfo";
    CastleDialogEvent.FIGHT_SCREEN_SHOP_FILLED = "fightScreenShopFilled";
    CastleDialogEvent.DEFENCE_SCREEN_ITEMS_UPDATED = "defenceScreenItemsUpdated";
    CastleDialogEvent.TAX_ITEMS_FILLED = "taxItemsFilled";
    CastleDialogEvent.DEFENCE_SCREEN_TOOLS_PLACED = "defenceScreenToolsPlaced";
  };
  CastleDialogEvent.DEFENCE_SCREEN_OPEN_GENERALS = "DEFENCE_SCREEN_OPEN_GENERALS";
  CastleDialogEvent.DEFENCE_SCREEN_CLOSE_GENERALS = "DEFENCE_SCREEN_CLOSE_GENERALS";
  CastleDialogEvent.DEFENCE_SCREEN_OPEN_GENERALS_SELECTION = "DEFENCE_SCREEN_OPEN_GENERALS_SELECTION";
  CastleDialogEvent.DEFENCE_SCREEN_CLOSE_GENERALS_SELECTION = "DEFENCE_SCREEN_CLOSE_GENERALS_SELECTION";
  CastleDialogEvent.ATTACK_SCREEN_OPEN_PLAYER_INFO = "ATTACK_SCREEN_OPEN_PLAYER_INFO";
  CastleDialogEvent.ATTACK_SCREEN_CLOSE_PLAYER_INFO = "ATTACK_SCREEN_CLOSE_PLAYER_INFO";
  CastleDialogEvent.ATTACK_SCREEN_OPEN_GENERALS_SELECTION = "ATTACK_SCREEN_OPEN_GENERALS_SELECTION";
  CastleDialogEvent.ATTACK_SCREEN_CLOSE_GENERALS_SELECTION = "ATTACK_SCREEN_CLOSE_GENERALS_SELECTION";
  CastleDialogEvent.ATTACK_SCREEN_LORD_SELECTED = "ATTACK_SCREEN_LORD_SELECTED";
  return CastleDialogEvent;
}(createjs.Event);
exports.CastleDialogEvent = __s0local0;
__s0local0.__initialize_static_members();
