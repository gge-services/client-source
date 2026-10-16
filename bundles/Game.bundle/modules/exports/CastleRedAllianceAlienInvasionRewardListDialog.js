Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceAndPlayerPointEventRewardListDialog = require("gge-module:export_AllianceAndPlayerPointEventRewardListDialog");
var __s0local0 = function (__s1param0) {
  function CastleRedAllianceAlienInvasionRewardListDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleRedAllianceAlienInvasionRewardListDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRedAllianceAlienInvasionRewardListDialog, __s1param0);
  CastleRedAllianceAlienInvasionRewardListDialog.prototype.createProperties = function (__s5param0) {
    if (__s5param0 == __dep_export_AllianceAndPlayerPointEventRewardListDialog.AllianceAndPlayerPointEventRewardListDialog.TAB_ALLIANCE) {
      return new __dep_export_GenericScoreBarRewardListSublayerProperties.GenericScoreBarRewardListSublayerProperties(this.allianceScorebarVO.rewardLists, this.allianceScorebarVO.pointThresholds, this.allianceScorebarVO.rewardsReceived, "", "", "", this.eventVO.isPlayerQualifiedForAllianceRewards());
    } else {
      return __s1param0.prototype.createProperties.call(this, __s5param0);
    }
  };
  CastleRedAllianceAlienInvasionRewardListDialog.prototype.showHelp = function () {
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_redAlienInvasion_rewardsList"));
  };
  Object.defineProperty(CastleRedAllianceAlienInvasionRewardListDialog.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.dialogProperties.eventID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionRewardListDialog.prototype, "singleplayerScorebarVO", {
    get: function () {
      return this.eventVO.singleEventVO;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AllianceAndPlayerPointEventRewardListDialog.AllianceAndPlayerPointEventRewardListDialog.prototype, "singleplayerScorebarVO").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionRewardListDialog.prototype, "allianceScorebarVO", {
    get: function () {
      return this.eventVO.allianceEventVO;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AllianceAndPlayerPointEventRewardListDialog.AllianceAndPlayerPointEventRewardListDialog.prototype, "allianceScorebarVO").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleRedAllianceAlienInvasionRewardListDialog.__initialize_static_members = function () {
    CastleRedAllianceAlienInvasionRewardListDialog.NAME = "CastleRedAlienInvasionEventRewardList_V";
  };
  return CastleRedAllianceAlienInvasionRewardListDialog;
}(__dep_export_AllianceAndPlayerPointEventRewardListDialog.AllianceAndPlayerPointEventRewardListDialog);
exports.CastleRedAllianceAlienInvasionRewardListDialog = __s0local0;
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_GenericScoreBarRewardListSublayerProperties = require("gge-module:export_GenericScoreBarRewardListSublayerProperties");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
