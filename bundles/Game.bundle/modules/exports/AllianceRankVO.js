Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function AllianceRankVO(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0.rankID = 0;
    __s3local0.isRankOfUser = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).rankID = __s3param0;
    __s3local0.isRankOfUser = __s3param0 == __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceRankVO, __s1param0);
  return AllianceRankVO;
}(require("gge-module:exact_9e901e8e2483a22f").ScrollItemVO);
exports.AllianceRankVO = __s0local0;
