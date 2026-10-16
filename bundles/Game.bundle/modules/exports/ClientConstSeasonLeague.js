Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function () {
  function ClientConstSeasonLeague() {}
  ClientConstSeasonLeague.getEventNames = function () {
    var __s5local0 = new Map();
    __s5local0.set(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE, "alien");
    __s5local0.set(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, "nomad");
    __s5local0.set(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION, "samurai");
    __s5local0.set(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE, "bloodcrow");
    __s5local0.set(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION, "berimond");
    __s5local0.set(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION, "berimondInvasion");
    return __s5local0;
  };
  ClientConstSeasonLeague.getEventName = function (__s7param0) {
    if (__dep_exact_92d05af59ee2ff30.DictionaryUtil.containsKey(ClientConstSeasonLeague.EVENT_NAMES, __s7param0)) {
      return ClientConstSeasonLeague.EVENT_NAMES.get(__s7param0);
    } else {
      return "";
    }
  };
  ClientConstSeasonLeague.getPointsIconFrame = function (__s11param0) {
    switch (__s11param0) {
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE:
        return 2;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION:
        return 3;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE:
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE:
        return 4;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION:
        return 5;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION:
        return 6;
      default:
        return 1;
    }
  };
  ClientConstSeasonLeague.getPointsIconTooltipTextId = function (__s14param0) {
    switch (__s14param0) {
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION:
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE:
        return "dialog_nomadInvasion_nomadPoints";
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION:
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_ALIEN_INVASION:
        return "dialog_samuraiInvasion_samuraiPoints";
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE:
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE:
        return "dialog_fame_title";
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION:
        return "event_title_3";
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION_INVASION:
        return "factionHighscore_points";
      default:
        return "";
    }
  };
  ClientConstSeasonLeague.__initialize_static_members = function () {
    ClientConstSeasonLeague.MEDAL_ID_GOLD = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.SeasonConst.GOLD_MEDAL_ID);
    ClientConstSeasonLeague.MEDAL_ID_SILVER = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.SeasonConst.SILVER_MEDAL_ID);
    ClientConstSeasonLeague.MEDAL_ID_BRONZE = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.SeasonConst.BRONZE_MEDAL_ID);
    ClientConstSeasonLeague.EVENT_NAMES = ClientConstSeasonLeague.getEventNames();
    ClientConstSeasonLeague.MEDAL_IDS = [ClientConstSeasonLeague.MEDAL_ID_GOLD, ClientConstSeasonLeague.MEDAL_ID_SILVER, ClientConstSeasonLeague.MEDAL_ID_BRONZE, ClientConstSeasonLeague.MEDAL_ID_GLASS, ClientConstSeasonLeague.MEDAL_ID_COPPER, ClientConstSeasonLeague.MEDAL_ID_STONE, ClientConstSeasonLeague.MEDAL_ID_WOOD];
  };
  ClientConstSeasonLeague.MEDAL_ID_GLASS = 4;
  ClientConstSeasonLeague.MEDAL_ID_COPPER = 5;
  ClientConstSeasonLeague.MEDAL_ID_STONE = 6;
  ClientConstSeasonLeague.MEDAL_ID_WOOD = 7;
  return ClientConstSeasonLeague;
}();
exports.ClientConstSeasonLeague = __s0local0;
__s0local0.__initialize_static_members();
