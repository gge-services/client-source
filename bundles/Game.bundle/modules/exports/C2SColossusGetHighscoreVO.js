Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SColossusGetHighscoreVO(__s3param0 = C2SColossusGetHighscoreVO.RANK_SELF) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).SV = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SColossusGetHighscoreVO, __s1param0);
  C2SColossusGetHighscoreVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_COLOSSUS_GET_HIGHSCORE;
  };
  C2SColossusGetHighscoreVO.__initialize_static_members = function () {
    C2SColossusGetHighscoreVO.RANK_SELF = "-1";
  };
  return C2SColossusGetHighscoreVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SColossusGetHighscoreVO = __s0local0;
__s0local0.__initialize_static_members();
