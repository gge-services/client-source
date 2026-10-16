Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceAndPlayerPointEventRewardListDialog = require("gge-module:export_AllianceAndPlayerPointEventRewardListDialog");
var __s0local0 = function (__s1param0) {
  function CastleAllianceSamuraiInvasionRewardListDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleAllianceSamuraiInvasionRewardListDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceSamuraiInvasionRewardListDialog, __s1param0);
  CastleAllianceSamuraiInvasionRewardListDialog.prototype.createProperties = function (__s5param0) {
    if (__s5param0 == __dep_export_AllianceAndPlayerPointEventRewardListDialog.AllianceAndPlayerPointEventRewardListDialog.TAB_ALLIANCE) {
      return new __dep_export_GenericScoreBarRewardListSublayerProperties.GenericScoreBarRewardListSublayerProperties(this.allianceScorebarVO.rewardLists, this.allianceScorebarVO.pointThresholds, this.allianceScorebarVO.rewardsReceived, "", "", "", this.eventVO.isPlayerQualifiedForAllianceRewards());
    } else {
      return __s1param0.prototype.createProperties.call(this, __s5param0);
    }
  };
  CastleAllianceSamuraiInvasionRewardListDialog.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_samuraiInvasion_rewardsList"));
  };
  Object.defineProperty(CastleAllianceSamuraiInvasionRewardListDialog.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.dialogProperties.eventID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceSamuraiInvasionRewardListDialog.prototype, "singleplayerScorebarVO", {
    get: function () {
      return this.eventVO.scoreBarVO;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AllianceAndPlayerPointEventRewardListDialog.AllianceAndPlayerPointEventRewardListDialog.prototype, "singleplayerScorebarVO").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceSamuraiInvasionRewardListDialog.prototype, "allianceScorebarVO", {
    get: function () {
      return this.eventVO.allianceBarVO;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AllianceAndPlayerPointEventRewardListDialog.AllianceAndPlayerPointEventRewardListDialog.prototype, "allianceScorebarVO").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceSamuraiInvasionRewardListDialog.__initialize_static_members = function () {
    CastleAllianceSamuraiInvasionRewardListDialog.NAME = "CastleAllianceSamuraiInvasionEventRewardList_V";
  };
  return CastleAllianceSamuraiInvasionRewardListDialog;
}(__dep_export_AllianceAndPlayerPointEventRewardListDialog.AllianceAndPlayerPointEventRewardListDialog);
exports.CastleAllianceSamuraiInvasionRewardListDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_GenericScoreBarRewardListSublayerProperties = require("gge-module:export_GenericScoreBarRewardListSublayerProperties");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
