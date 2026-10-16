Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_dc21bc5945239ede = require("gge-module:exact_dc21bc5945239ede");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastlePopUpHelper = require("gge-module:export_CastlePopUpHelper");
var __s0local0 = function (__s1param0) {
  function GachaEventEndDialogProperties(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.rewards = __dep_export_CastlePopUpHelper.CastlePopUpHelper.createRewardList(__s3param0);
    if (__s3param0[__dep_exact_26a421b704832cff.CommKeys.CURRENT_SCORE]) {
      __s3local0.currentScore = __s3param0[__dep_exact_26a421b704832cff.CommKeys.CURRENT_SCORE];
    } else {
      __s3local0.currentScore = 0;
    }
    if (__s3param0[__dep_exact_26a421b704832cff.CommKeys.CURRENT_RANK]) {
      __s3local0.rank = __s3param0[__dep_exact_26a421b704832cff.CommKeys.CURRENT_RANK];
    } else {
      __s3local0.rank = 0;
    }
    __s3local0.eventID = __s3param0[__dep_exact_26a421b704832cff.CommKeys.EVENT_ID];
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GachaEventEndDialogProperties, __s1param0);
  return GachaEventEndDialogProperties;
}(__dep_exact_dc21bc5945239ede.BasicProperties);
exports.GachaEventEndDialogProperties = __s0local0;
