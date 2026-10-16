Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CrestVO = require("gge-module:export_CrestVO");
var __s0local0 = function (__s1param0) {
  function CastleEilandPlayerRankingItemVO(__s3param0) {
    var __s3local0 = this;
    __s3local0.playerID = 0;
    __s3local0.playerLevel = 0;
    __s3local0.hasUnlockedEiland = false;
    __s3local0.aquaPoints = 0;
    __s3local0.allianceRank = 0;
    __s3local0.rank = 0;
    __s3local0.isSearchResult = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).playerID = __dep_exact_f855840627e6e145.int(__s3param0[0]);
    __s3local0.playerName = __s3param0[1];
    __s3local0.playerLevel = __dep_exact_f855840627e6e145.int(__s3param0[2]);
    __s3local0.hasUnlockedEiland = __s3param0[3] == 1;
    __s3local0.aquaPoints = __dep_exact_f855840627e6e145.int(__s3param0[4]);
    __s3local0.allianceRank = __dep_exact_f855840627e6e145.int(__s3param0[5]);
    __s3local0.crestVO = new __dep_export_CrestVO.CrestVO();
    if (__s3param0[6]) {
      __s3local0.crestVO.loadFromParamObject(__s3param0[6]);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEilandPlayerRankingItemVO, __s1param0);
  return CastleEilandPlayerRankingItemVO;
}(__dep_exact_9e901e8e2483a22f.ScrollItemVO);
exports.CastleEilandPlayerRankingItemVO = __s0local0;
