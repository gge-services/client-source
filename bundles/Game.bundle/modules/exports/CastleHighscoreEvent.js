Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleHighscoreEvent(__s3param0, __s3param1 = null, __s3param2 = -1, __s3param3 = false, __s3param4 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param3, __s3param4) || this;
    __s3local0.params = null;
    __s3local0.leagueId = -1;
    __s3local0.params = __s3param1;
    __s3local0.leagueId = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleHighscoreEvent, __s1param0);
  CastleHighscoreEvent.GET_HIGHSCORE_DATA = "get_highscore_data";
  CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR = "get_highscore_data_error";
  CastleHighscoreEvent.WEEKLY_HONOR_SCORE_UPDATED = "WEEKLY_HONOR_SCORE_UPDATED";
  CastleHighscoreEvent.REWARD_REDEEMED = "HighScore_REWARD_REDEEMED";
  CastleHighscoreEvent.AQUAPOINTS_HIGSCORE_ALLY_PLAYER = "aquapointshigscoreallyplayer";
  CastleHighscoreEvent.TEMPORARY_SERVER_HIGHSCORE = "temporaryServerHighscore";
  CastleHighscoreEvent.ALLIANCE_BATTLEGROUND_SERVER_HIGHSCORE = "ALLIANCE_BATTLEGROUND_SERVER_HIGHSCORE";
  return CastleHighscoreEvent;
}(createjs.Event);
exports.CastleHighscoreEvent = __s0local0;
