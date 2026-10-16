Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function SeasonLeagueEvent(__s3param0, __s3param1 = null, __s3param2 = true, __s3param3 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this;
    __s3local0.params = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueEvent, __s1param0);
  SeasonLeagueEvent.ON_INFO_UPDATED = "onInfoUpdated";
  SeasonLeagueEvent.ON_OWN_RANKS_UPDATED = "onOwnRanksUpdated";
  SeasonLeagueEvent.ON_PASS_PRICES_UPDATED = "ON_PASS_PRICES_UPDATED";
  SeasonLeagueEvent.ON_PASS_SEASON_BOUGHT = "ON_PASS_SEASON_BOUGHT";
  SeasonLeagueEvent.ON_PASS_EVENT_BOUGHT = "ON_PASS_EVENT_BOUGHT";
  SeasonLeagueEvent.ON_PASS_PROMOTION_BOUGHT = "ON_PASS_PROMOTION_BOUGHT";
  return SeasonLeagueEvent;
}(createjs.Event);
exports.SeasonLeagueEvent = __s0local0;
