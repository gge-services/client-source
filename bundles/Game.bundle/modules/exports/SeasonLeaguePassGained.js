Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function SeasonLeaguePassGained() {
    return __s1param0.call(this, SeasonLeaguePassGained.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeaguePassGained, __s1param0);
  SeasonLeaguePassGained.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_des1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_seasonLeague_bonusRewards_desc")).autoFitToBounds = true;
    this.dialogDisp.mc_seasonPass.visible = this.dialogProps.additionalInfo.isSeason;
    this.dialogDisp.mc_eventPass.visible = this.dialogProps.additionalInfo.isEvent;
    this.dialogDisp.mc_promotionPass.visible = this.dialogProps.additionalInfo.isPromotion;
  };
  SeasonLeaguePassGained.NAME = "SeasonLeaguePassActivated";
  return SeasonLeaguePassGained;
}(require("gge-module:export_ModernGenericRewardDialog").ModernGenericRewardDialog);
exports.SeasonLeaguePassGained = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
