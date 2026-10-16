Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleScoreEventEvent = require("gge-module:export_CastleScoreEventEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_ABasicScoreBarRewardListDialog = require("gge-module:export_ABasicScoreBarRewardListDialog");
var __dep_export_GenericScoreBarRewardListSublayerProperties = require("gge-module:export_GenericScoreBarRewardListSublayerProperties");
var __s0local0 = function (__s1param0) {
  function AllianceAndPlayerPointEventRewardListDialog(__s3param0) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceAndPlayerPointEventRewardListDialog, __s1param0);
  AllianceAndPlayerPointEventRewardListDialog.prototype.onUpdatePoints = function (__s5param0) {
    this.sublayerSwitcher.show();
  };
  AllianceAndPlayerPointEventRewardListDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  AllianceAndPlayerPointEventRewardListDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  AllianceAndPlayerPointEventRewardListDialog.prototype.initLoaded = function (__s11param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s11param0);
    this.dialogDisp.tab_0.toolTipText = "dialog_pointsEvent_rewardsList_singleRewards_tooltip";
    this.dialogDisp.tab_1.toolTipText = "dialog_pointsEvent_rewardsList_allianceRewards_tooltip";
  };
  Object.defineProperty(AllianceAndPlayerPointEventRewardListDialog.prototype, "singleplayerScorebarVO", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceAndPlayerPointEventRewardListDialog.prototype, "allianceScorebarVO", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  AllianceAndPlayerPointEventRewardListDialog.prototype.createProperties = function (__s17param0) {
    if (__s17param0 == AllianceAndPlayerPointEventRewardListDialog.TAB_PLAYER) {
      return new __dep_export_GenericScoreBarRewardListSublayerProperties.GenericScoreBarRewardListSublayerProperties(this.singleplayerScorebarVO.rewardLists, this.singleplayerScorebarVO.pointThresholds, this.singleplayerScorebarVO.rewardsReceived, "", "", "", true);
    } else {
      return null;
    }
  };
  Object.defineProperty(AllianceAndPlayerPointEventRewardListDialog.prototype, "eventVO", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  AllianceAndPlayerPointEventRewardListDialog.__initialize_static_members = function () {
    AllianceAndPlayerPointEventRewardListDialog.TAB_PLAYER = 0;
    AllianceAndPlayerPointEventRewardListDialog.TAB_ALLIANCE = 1;
  };
  return AllianceAndPlayerPointEventRewardListDialog;
}(__dep_export_ABasicScoreBarRewardListDialog.ABasicScoreBarRewardListDialog);
exports.AllianceAndPlayerPointEventRewardListDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
