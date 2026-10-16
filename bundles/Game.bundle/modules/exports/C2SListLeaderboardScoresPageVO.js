Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SListLeaderboardScoresPageVO(__s3param0, __s3param1, __s3param2, __s3param3 = 1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.LT = 0;
    __s3local0.LID = -1;
    __s3local0.M = 0;
    __s3local0.R = 1;
    __s3local0.R = __s3param3;
    __s3local0.LT = __s3param0;
    __s3local0.LID = __s3param1;
    __s3local0.M = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SListLeaderboardScoresPageVO, __s1param0);
  C2SListLeaderboardScoresPageVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_LIST_LEADERBOARD_SCORE_PAGE;
  };
  return C2SListLeaderboardScoresPageVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SListLeaderboardScoresPageVO = __s0local0;
