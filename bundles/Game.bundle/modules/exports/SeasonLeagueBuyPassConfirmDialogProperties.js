Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function SeasonLeagueBuyPassConfirmDialogProperties(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5, __s3param6 = -1, __s3param7 = 0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.source = 0;
    __s3local0.pass = __s3param0;
    __s3local0.price = __s3param1;
    __s3local0.discountPercent = __s3param2;
    __s3local0.eventID = __s3param4;
    __s3local0.instanceID = __s3param5;
    __s3local0.rankID = __s3param3;
    __s3local0.seasonID = __s3param6;
    __s3local0.source = __s3param7;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueBuyPassConfirmDialogProperties, __s1param0);
  SeasonLeagueBuyPassConfirmDialogProperties.SOURCE_REWARD_HUB_ALL = 0;
  SeasonLeagueBuyPassConfirmDialogProperties.SOURCE_REWARD_HUB_PROMOTION = 1;
  SeasonLeagueBuyPassConfirmDialogProperties.SOURCE_REWARD_HUB_EVENT_END = 2;
  return SeasonLeagueBuyPassConfirmDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.SeasonLeagueBuyPassConfirmDialogProperties = __s0local0;
