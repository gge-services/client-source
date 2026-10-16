Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_dc21bc5945239ede = require("gge-module:exact_dc21bc5945239ede");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastlePopUpHelper = require("gge-module:export_CastlePopUpHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function AllianceRaidBossDefeatedDialogProperties(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.rewards = __dep_export_CastlePopUpHelper.CastlePopUpHelper.createRewardList(__s3param0);
    __s3local0.bossID = __s3param0[__dep_exact_26a421b704832cff.CommKeys.PORTAL_BOSS_ID];
    __s3local0.bossLevelID = __s3param0[__dep_exact_26a421b704832cff.CommKeys.LEVEL_ID];
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceRaidBossDefeatedDialogProperties, __s1param0);
  AllianceRaidBossDefeatedDialogProperties.prototype.isLastLevel = function () {
    return __dep_export_CastleModel.CastleModel.raidBossData.getRaidBossLevelByID(this.bossLevelID).level == __dep_export_CastleModel.CastleModel.raidBossData.getRaidBossByID(this.bossID).maxLevel;
  };
  return AllianceRaidBossDefeatedDialogProperties;
}(__dep_exact_dc21bc5945239ede.BasicProperties);
exports.AllianceRaidBossDefeatedDialogProperties = __s0local0;
