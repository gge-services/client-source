Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleSpecialEventEvent(__s3param0, __s3param1 = null, __s3param2 = true, __s3param3 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this;
    __s3local0.specialEventVO = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSpecialEventEvent, __s1param0);
  CastleSpecialEventEvent.REFRESH_SPECIALEVENT = "refresh_specialevent";
  CastleSpecialEventEvent.REMOVE_SPECIALEVENT = "remove_specialevent";
  CastleSpecialEventEvent.ADD_SPECIALEVENT = "add_specialevent";
  CastleSpecialEventEvent.SERVER_DATA_PARSED = "serverDataParsed";
  CastleSpecialEventEvent.REFRESH_PRIVATEEVENT = "refresh_privateevent";
  CastleSpecialEventEvent.REMOVE_PRIVATEEVENT = "remove_privateeven";
  CastleSpecialEventEvent.ADD_PRIVATEEVENT = "add_privateeven";
  CastleSpecialEventEvent.NEW_FAKE_EVENT = "new_fake_event";
  CastleSpecialEventEvent.REMOVE_FAKE_EVENT = "remove_fake_event";
  CastleSpecialEventEvent.FACTION_EVENT_FACTIONPOINTS_UPDATED = "FACTION_EVENT_FACTIONPOINTS_UPDATED";
  CastleSpecialEventEvent.FACTION_EVENT_FACTION_PROTECTION_UPDATED = "FACTION_EVENT_FACTION_PROTECTION_UPDATED";
  CastleSpecialEventEvent.FACTION_EVENT_FACTION_PROTECTION_TIMEUPDATE = "FACTION_EVENT_FACTION_PROTECTION_TIMEUPDATE";
  CastleSpecialEventEvent.FACTION_EVENT_SPECTATOR_STATUS_CHANGE = "FACTION_EVENT_SPECTATOR_STATUS_CHANGE";
  CastleSpecialEventEvent.FACTION_ATTACKABLE_DATA_UPDATED = "FACTION_ATTACKABLE_DATA_UPDATED";
  CastleSpecialEventEvent.LUCKY_WHEEL_AWARDED = "LUCKY_WHEEL_AWARDED";
  CastleSpecialEventEvent.LUCKY_WHEEL_MODE_CHANGED = "LUCKY_WHEEL_MODE_CHANGED";
  CastleSpecialEventEvent.LUCKY_WHEEL_BOUGHT_JACKPOT = "LUCKY_WHEEL_BOUGHT_JACKPOT";
  CastleSpecialEventEvent.LUCKY_WHEEL_WINCLASS_CHANGED = "LUCKY_WHEEL_WINCLASS_CHANGED";
  CastleSpecialEventEvent.FACTION_EVENT_LAST_MAN_STANDING_UPDATE = "FACTION_EVENT_LAST_MAN_STANDING_UPDATE";
  CastleSpecialEventEvent.ON_OWN_ROYAL_CAPITAL_SCORE_CHANGED = "onOwnRoyalCapitalScoreChanged";
  return CastleSpecialEventEvent;
}(require("gge-module:export_CastleEvent").CastleEvent);
exports.CastleSpecialEventEvent = __s0local0;
