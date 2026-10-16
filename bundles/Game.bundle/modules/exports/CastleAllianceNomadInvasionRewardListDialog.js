Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceAndPlayerPointEventRewardListDialog = require("gge-module:export_AllianceAndPlayerPointEventRewardListDialog");
var __dep_export_GenericScoreBarRewardListSublayerProperties = require("gge-module:export_GenericScoreBarRewardListSublayerProperties");
var __s0local0 = function (__s1param0) {
  function CastleAllianceNomadInvasionRewardListDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleAllianceNomadInvasionRewardListDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceNomadInvasionRewardListDialog, __s1param0);
  CastleAllianceNomadInvasionRewardListDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.dialogDisp.tab_2.toolTipText = "dialog_pointsEvent_rewardsList_khanContest_tooltip";
  };
  CastleAllianceNomadInvasionRewardListDialog.prototype.showHelp = function () {
    if (this.sublayerSwitcher.activeTab == CastleAllianceNomadInvasionRewardListDialog.TAB_ALLIANCECAMP) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_nomadInvasion_khanContest_rewardsList"));
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_nomadInvasion_rewardsList"));
    }
  };
  CastleAllianceNomadInvasionRewardListDialog.prototype.showLoaded = function (__s11param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s11param0);
    this.dialogDisp.tab_2.visible = this.allianceCampScorebarVO != null && __dep_export_CastleModel.CastleModel.userData.level >= __dep_exact_26a421b704832cff.PlayerConst.LEVEL_CAP;
  };
  Object.defineProperty(CastleAllianceNomadInvasionRewardListDialog.prototype, "allianceNomadInvasionEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.dialogProperties.eventID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionRewardListDialog.prototype, "singleplayerScorebarVO", {
    get: function () {
      return this.allianceNomadInvasionEventVO.scoreBarVO;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AllianceAndPlayerPointEventRewardListDialog.AllianceAndPlayerPointEventRewardListDialog.prototype, "singleplayerScorebarVO").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionRewardListDialog.prototype, "allianceScorebarVO", {
    get: function () {
      return this.allianceNomadInvasionEventVO.allianceBarVO;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AllianceAndPlayerPointEventRewardListDialog.AllianceAndPlayerPointEventRewardListDialog.prototype, "allianceScorebarVO").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionRewardListDialog.prototype, "allianceCampScorebarVO", {
    get: function () {
      return this.allianceNomadInvasionEventVO.khanCampBarVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceNomadInvasionRewardListDialog.prototype.createProperties = function (__s25param0) {
    if (__s25param0 == CastleAllianceNomadInvasionRewardListDialog.TAB_ALLIANCE) {
      return new __dep_export_GenericScoreBarRewardListSublayerProperties.GenericScoreBarRewardListSublayerProperties(this.allianceScorebarVO.rewardLists, this.allianceScorebarVO.pointThresholds, this.allianceScorebarVO.rewardsReceived, "", "", "", this.allianceNomadInvasionEventVO.isPlayerQualifiedForAllianceRewards());
    } else if (__s25param0 == CastleAllianceNomadInvasionRewardListDialog.TAB_ALLIANCECAMP) {
      return new __dep_export_GenericScoreBarRewardListSublayerProperties.GenericScoreBarRewardListSublayerProperties(this.allianceCampScorebarVO.rewardLists, this.allianceCampScorebarVO.pointThresholds, this.allianceCampScorebarVO.rewardsReceived, __dep_exact_92d05af59ee2ff30.Localize.text("dialog_pointsEvent_rewardsList_khanContest_eventEndInfo"), "level_placeholder", "dialog_nomadInvasionAlliance_participantInfo");
    } else {
      return __s1param0.prototype.createProperties.call(this, __s25param0);
    }
  };
  CastleAllianceNomadInvasionRewardListDialog.__initialize_static_members = function () {
    CastleAllianceNomadInvasionRewardListDialog.NAME = "CastleAllianceNomadInvasionEventRewardList_V";
    CastleAllianceNomadInvasionRewardListDialog.TAB_ALLIANCECAMP = 2;
  };
  return CastleAllianceNomadInvasionRewardListDialog;
}(__dep_export_AllianceAndPlayerPointEventRewardListDialog.AllianceAndPlayerPointEventRewardListDialog);
exports.CastleAllianceNomadInvasionRewardListDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
