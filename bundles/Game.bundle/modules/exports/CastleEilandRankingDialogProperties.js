Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleEilandRankingDialogProperties(__s3param0 = CastleEilandRankingDialogProperties.SUBLAYER_ALLIANCE_RANKING) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._startCategory = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEilandRankingDialogProperties, __s1param0);
  Object.defineProperty(CastleEilandRankingDialogProperties.prototype, "startCategory", {
    get: function () {
      return this._startCategory;
    },
    enumerable: true,
    configurable: true
  });
  CastleEilandRankingDialogProperties.__initialize_static_members = function () {
    CastleEilandRankingDialogProperties.SUBLAYER_RULES = "sublayerRules";
    CastleEilandRankingDialogProperties.SUBLAYER_ALLIANCE_RANKING = "sublayerAllianceRanking";
    CastleEilandRankingDialogProperties.SUBLAYER_PLAYER_RANKING = "sublayerPlayerRanking";
    CastleEilandRankingDialogProperties.SUBLAYER_TITLE = "sublayerTitle";
  };
  return CastleEilandRankingDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleEilandRankingDialogProperties = __s0local0;
__s0local0.__initialize_static_members();
