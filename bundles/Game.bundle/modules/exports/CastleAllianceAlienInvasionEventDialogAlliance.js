Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleGenericAllianceHighscoreDialogProperties = require("gge-module:export_CastleGenericAllianceHighscoreDialogProperties");
var __dep_export_GenericEventInfoListProperties = require("gge-module:export_GenericEventInfoListProperties");
var __dep_export_CastleAllianceAlienInvasionEventDialogSublayer = require("gge-module:export_CastleAllianceAlienInvasionEventDialogSublayer");
var __s0local0 = function (__s1param0) {
  function CastleAllianceAlienInvasionEventDialogAlliance(__s3param0) {
    return __s1param0.call(this, __s3param0, true) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceAlienInvasionEventDialogAlliance, __s1param0);
  CastleAllianceAlienInvasionEventDialogAlliance.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.subLayerDisp.btn_highscore.toolTipText = "dialog_" + this.sublayerProperties.textIDType + "_allianceScore_tooltip";
  };
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogAlliance.prototype, "descriptions", {
    get: function () {
      var __s7local0 = [];
      for (var __s7local1 = this.eventVO.allianceEventVO.rewardLists, __s7local2 = 0; __s7local2 < __s7local1.length; __s7local2++) {
        if (__s7local1[__s7local2].grantType == __dep_exact_26a421b704832cff.RewardConst.ALLIANCE) {
          __s7local0.push("dialog_" + this.sublayerProperties.textIDType + "Alliance_Treasury_tooltip");
        } else if (__s7local1[__s7local2].grantType == __dep_exact_26a421b704832cff.RewardConst.ALLIANCE_MEMBER) {
          __s7local0.push("dialog_" + this.sublayerProperties.textIDType + "Alliance_Members_tooltip");
        } else {
          __s7local0.push("forAllianceFundsAndMembers");
        }
      }
      return __s7local0;
    },
    set: function (__s14param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAllianceAlienInvasionEventDialogSublayer.CastleAllianceAlienInvasionEventDialogSublayer.prototype, "descriptions").set.call(this, __s14param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceAlienInvasionEventDialogAlliance.prototype.showHelp = function () {
    __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_" + this.sublayerProperties.textIDType + "Alliance_instructions"));
  };
  CastleAllianceAlienInvasionEventDialogAlliance.prototype.onClick = function (__s18param0) {
    __s1param0.prototype.onClick.call(this, __s18param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s18param0.target)) {
      switch (__s18param0.target) {
        case this.subLayerDisp.btn_highscore:
          __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_CastleAllianceAlienInvasionHighscoreDialog.CastleAllianceAlienInvasionHighscoreDialog, new __dep_export_CastleGenericAllianceHighscoreDialogProperties.CastleGenericAllianceHighscoreDialogProperties(this.sublayerProperties.highscoreAlliance, this.sublayerLeagueTypeEventVO.numberOfLeagues, this.sublayerLeagueTypeEventVO.leagueID, this.sublayerLeagueTypeEventVO.ownRank, this.sublayerProperties.eventId));
      }
    }
  };
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogAlliance.prototype, "sublayerLeagueTypeEventVO", {
    get: function () {
      return this.eventVO.allianceEventVO;
    },
    set: function (__s24param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAllianceAlienInvasionEventDialogSublayer.CastleAllianceAlienInvasionEventDialogSublayer.prototype, "sublayerLeagueTypeEventVO").set.call(this, __s24param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogAlliance.prototype, "rewards", {
    get: function () {
      return this.eventVO.allianceEventVO.rewardLists;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogAlliance.prototype, "textIDType", {
    get: function () {
      return this.sublayerProperties.textIDType + "Alliance";
    },
    set: function (__s30param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAllianceAlienInvasionEventDialogSublayer.CastleAllianceAlienInvasionEventDialogSublayer.prototype, "textIDType").set.call(this, __s30param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogAlliance.prototype, "scorebarAssetClassName", {
    get: function () {
      return "Scorebar_Alliance_V";
    },
    set: function (__s34param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAllianceAlienInvasionEventDialogSublayer.CastleAllianceAlienInvasionEventDialogSublayer.prototype, "scorebarAssetClassName").set.call(this, __s34param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogAlliance.prototype, "scoreIcon", {
    get: function () {
      var __s36local0 = new Library.CastleInterfaceElements_Icons.Icon_Fame_Large();
      __s36local0.toolTipText = "dialog_allianceFame_needPoints";
      return __s36local0;
    },
    set: function (__s38param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleAllianceAlienInvasionEventDialogSublayer.CastleAllianceAlienInvasionEventDialogSublayer.prototype, "scoreIcon").set.call(this, __s38param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceAlienInvasionEventDialogAlliance.prototype.onClickRewardOverview = function () {
    __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(this.sublayerProperties.rewardListDialogClassName, new __dep_export_GenericEventInfoListProperties.GenericEventInfoListProperties(this.sublayerProperties.eventId, __dep_export_AllianceAndPlayerPointEventRewardListDialog.AllianceAndPlayerPointEventRewardListDialog.TAB_ALLIANCE));
  };
  return CastleAllianceAlienInvasionEventDialogAlliance;
}(__dep_export_CastleAllianceAlienInvasionEventDialogSublayer.CastleAllianceAlienInvasionEventDialogSublayer);
exports.CastleAllianceAlienInvasionEventDialogAlliance = __s0local0;
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleAllianceAlienInvasionHighscoreDialog = require("gge-module:export_CastleAllianceAlienInvasionHighscoreDialog");
var __dep_export_AllianceAndPlayerPointEventRewardListDialog = require("gge-module:export_AllianceAndPlayerPointEventRewardListDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
