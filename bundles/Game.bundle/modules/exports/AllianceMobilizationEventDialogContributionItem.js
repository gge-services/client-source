Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AllianceMobilizationEventEventVO = require("gge-module:export_AllianceMobilizationEventEventVO");
var __s0local0 = function (__s1param0) {
  function AllianceMobilizationEventDialogContributionItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._eventID = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceMobilizationEventDialogContributionItem, __s1param0);
  AllianceMobilizationEventDialogContributionItem.prototype.setEventID = function (__s5param0) {
    this._eventID = __s5param0;
  };
  AllianceMobilizationEventDialogContributionItem.prototype.update = function (__s7param0) {
    if (this.eventVO) {
      var __s7local0 = __s7param0.R;
      var __s7local1 = __s7param0.PN;
      var __s7local2 = __s7param0.OP;
      var __s7local3 = __s7local2 >= this.eventVO().scoreBarVO.allianceRewardThresholdPoints;
      this.disp.mc_unlocked.visible = __s7local3;
      this.disp.mc_locked.visible = !__s7local3;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_rank, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s7local0)).autoFitToBounds = true;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_playerName, new __dep_exact_92d05af59ee2ff30.TextVO(__s7local1)).autoFitToBounds = true;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_locked.txt_points, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s7local2)).autoFitToBounds = true;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_unlocked.txt_points, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s7local2)).autoFitToBounds = true;
      this.disp.mc_unlocked.icon_rewards.toolTipText = {
        t: "dialogue_ame_ranking_rewards_tooltip",
        p: [this.eventVO().scoreBarVO.allianceRewardThresholdPoints]
      };
    }
  };
  AllianceMobilizationEventDialogContributionItem.prototype.eventVO = function () {
    return __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.getActiveEventVO(this._eventID);
  };
  return AllianceMobilizationEventDialogContributionItem;
}(require("gge-module:export_CastleItemRenderer").CastleItemRenderer);
exports.AllianceMobilizationEventDialogContributionItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
