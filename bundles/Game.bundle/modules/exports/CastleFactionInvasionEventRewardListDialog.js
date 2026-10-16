Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ABasicScoreBarRewardListDialog = require("gge-module:export_ABasicScoreBarRewardListDialog");
var __dep_export_GenericScoreBarRewardListSublayerProperties = require("gge-module:export_GenericScoreBarRewardListSublayerProperties");
var __s0local0 = function (__s1param0) {
  function CastleFactionInvasionEventRewardListDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleFactionInvasionEventRewardListDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionInvasionEventRewardListDialog, __s1param0);
  CastleFactionInvasionEventRewardListDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.dialogDisp.tab_0.toolTipText = "dialog_berimondInvasion_rewards_blue_tab";
    this.dialogDisp.tab_1.toolTipText = "dialog_berimondInvasion_rewards_red_tab";
    this.dialogDisp.tab_2.toolTipText = "dialog_berimondInvasion_rewards_alliance_tab";
  };
  CastleFactionInvasionEventRewardListDialog.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_berimondInvasion_rewardsList"));
  };
  CastleFactionInvasionEventRewardListDialog.prototype.createProperties = function (__s9param0) {
    var __s9local0;
    var __s9local1 = this.dialogProperties.eventVO;
    var __s9local2 = 0;
    var __s9local3 = true;
    switch (__s9param0) {
      case CastleFactionInvasionEventRewardListDialog.TAB_BLUE:
        __s9local0 = __s9local1.singleEventVO(true);
        __s9local2 = __s9local1.rewardsReceivedBlue;
        break;
      case CastleFactionInvasionEventRewardListDialog.TAB_RED:
        __s9local0 = __s9local1.singleEventVO(false);
        __s9local2 = __s9local1.rewardsReceivedRed;
        break;
      case CastleFactionInvasionEventRewardListDialog.TAB_ALLIANCE:
        __s9local0 = __s9local1.allianceEventVO;
        __s9local2 = __s9local1.rewardsReceivedAlliance;
        __s9local3 = this.isPlayerQualifiedForAllianceRewards();
    }
    return new __dep_export_GenericScoreBarRewardListSublayerProperties.GenericScoreBarRewardListSublayerProperties(__s9local0.rewardLists, __s9local0.pointThresholds, __s9local2, "", "", "", __s9local3);
  };
  CastleFactionInvasionEventRewardListDialog.prototype.isPlayerQualifiedForAllianceRewards = function () {
    var __s12local0 = this.dialogProperties.eventVO.singleEventVO(true);
    var __s12local1 = this.dialogProperties.eventVO.singleEventVO(false);
    return __s12local0.isPlayerQualifiedForAllianceRewards || __s12local1.isPlayerQualifiedForAllianceRewards;
  };
  CastleFactionInvasionEventRewardListDialog.__initialize_static_members = function () {
    CastleFactionInvasionEventRewardListDialog.NAME = "CastleFactionInvasionEventRewardList_V";
    CastleFactionInvasionEventRewardListDialog.TAB_BLUE = 0;
    CastleFactionInvasionEventRewardListDialog.TAB_RED = 1;
    CastleFactionInvasionEventRewardListDialog.TAB_ALLIANCE = 2;
  };
  return CastleFactionInvasionEventRewardListDialog;
}(__dep_export_ABasicScoreBarRewardListDialog.ABasicScoreBarRewardListDialog);
exports.CastleFactionInvasionEventRewardListDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
