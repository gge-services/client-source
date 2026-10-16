Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function LeaderBoardEvent(__s3param0, __s3param1, __s3param2 = false, __s3param3 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this;
    __s3local0.params = null;
    __s3local0.params = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LeaderBoardEvent, __s1param0);
  LeaderBoardEvent.LEADERBOARD_SCORE_DATA = "leaderboard_score_data";
  LeaderBoardEvent.LEADERBOARD_SEARCH_DATA = "leaderboard_search_data";
  LeaderBoardEvent.LEADERBOARD_DATA_ERROR = "leaderboard_data_error";
  return LeaderBoardEvent;
}(createjs.Event);
exports.LeaderBoardEvent = __s0local0;
