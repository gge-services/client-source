Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function SeasonLeagueBuyPassesDialogProperties(__s3param0 = true, __s3param1 = true, __s3param2 = -1, __s3param3 = -1, __s3param4 = -1, __s3param5 = -1, __s3param6 = -1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.useEventSale = __s3param0;
    __s3local0.usePromotionSale = __s3param1;
    __s3local0.eventID = __s3param2;
    __s3local0.instanceID = __s3param2;
    __s3local0.promotionID = __s3param4;
    __s3local0.rewardSetID = __s3param5;
    __s3local0.leagueTypeID = __s3param6;
    if (__s3param5 < 0 && __dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO()) {
      __s3local0.rewardSetID = __dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO().rewardSetId;
      __s3local0.leagueTypeID = __dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO().leaguetypeID;
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueBuyPassesDialogProperties, __s1param0);
  return SeasonLeagueBuyPassesDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.SeasonLeagueBuyPassesDialogProperties = __s0local0;
