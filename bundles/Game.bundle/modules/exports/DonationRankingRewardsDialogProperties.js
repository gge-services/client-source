Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function DonationRankingRewardsDialogProperties(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._rankingRewards = null;
    __s3local0._copy = null;
    __s3local0._rankingRewards = __s3param1;
    __s3local0._copy = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DonationRankingRewardsDialogProperties, __s1param0);
  Object.defineProperty(DonationRankingRewardsDialogProperties.prototype, "rankingRewards", {
    get: function () {
      return this._rankingRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationRankingRewardsDialogProperties.prototype, "copy", {
    get: function () {
      return this._copy;
    },
    enumerable: true,
    configurable: true
  });
  return DonationRankingRewardsDialogProperties;
}(require("gge-module:exact_dc21bc5945239ede").BasicProperties);
exports.DonationRankingRewardsDialogProperties = __s0local0;
