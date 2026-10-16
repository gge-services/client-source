Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstSeasonLeague = require("gge-module:export_ClientConstSeasonLeague");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalSubLayerDialog = require("gge-module:export_CastleExternalSubLayerDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function SeasonLeagueEndDialog() {
    return __s1param0.call(this, SeasonLeagueEndDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueEndDialog, __s1param0);
  SeasonLeagueEndDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_pickUp], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.btn_tabRewards, 1.025);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.btn_tabMedals, 1.025);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.btn_tabMedalsAlliance, 1.025);
    this.dialogDisp.mc_rankInfoPlayer.mc_placementIcon.toolTipText = "dialog_seasonLeague_divisionRanking_position_tooltip";
    this.dialogDisp.mc_rankInfoAllianceEvent.mc_placementIcon.toolTipText = "dialog_seasonLeague_divisionRanking_position_tooltip";
    this.dialogDisp.mc_rankInfoAllianceSeason.mc_placementIcon.toolTipText = "dialog_seasonLeague_divisionRanking_position_tooltip";
    this.dialogDisp.mc_rankInfoAllianceEvent.mc_placementIconAlliance.toolTipText = "dialog_seasonLeague_eventEnd_finalAllianceRanking_tooltip";
    this.dialogDisp.mc_rankInfoAllianceSeason.mc_placementIconAlliance.toolTipText = "dialog_seasonLeague_seasonEnd_finalAllianceRanking_tooltip";
    this.textFieldManager.registerTextField(this.dialogDisp.btn_pickUp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("collect")));
    this._subLayer = new Map();
    this._subLayer.set(SeasonLeagueEndDialog.TAB_REWARDS, new __dep_export_SeasonLeagueEndDialogRewards.SeasonLeagueEndDialogRewards(this.dialogDisp.mc_tab_rewards));
    this._subLayer.set(SeasonLeagueEndDialog.TAB_REWARDS_EVENT, new __dep_export_SeasonLeagueEndDialogRewardsEvent.SeasonLeagueEndDialogRewardsEvent(this.dialogDisp.mc_tab_rewards_event));
    this._subLayer.set(SeasonLeagueEndDialog.TAB_MEDALS, new __dep_export_SeasonLeagueEndDialogMedals.SeasonLeagueEndDialogMedals(this.dialogDisp.mc_tab_medals));
    this._subLayer.set(SeasonLeagueEndDialog.TAB_ALLIANCE_MEDALS, new __dep_export_SeasonLeagueEndDialogMedals.SeasonLeagueEndDialogMedals(this.dialogDisp.mc_tab_medals, true));
  };
  SeasonLeagueEndDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._subLayer.get(SeasonLeagueEndDialog.TAB_REWARDS_EVENT).reset();
    this._subLayer.get(SeasonLeagueEndDialog.TAB_REWARDS).reset();
    this.updateText();
    this.initTabs();
    this.updateTeaser();
    this.updateRankInfo();
  };
  SeasonLeagueEndDialog.prototype.hide = function () {
    if (this._subLayer) {
      this._subLayer.get(SeasonLeagueEndDialog.TAB_REWARDS).hasBoughtSeasonPassInThisDialog = false;
    }
    __s1param0.prototype.hide.call(this);
  };
  SeasonLeagueEndDialog.prototype.changeCategory = function (__s12param0) {
    function updateButton(__s14param0, __s14param1) {
      __s14param0.mc_default.visible = !__s14param1;
      __s14param0.mc_selected.visible = __s14param1;
    }
    if (__s12param0 == SeasonLeagueEndDialog.TAB_REWARDS && this.dialogProperties.isSeasonEventEndDialog) {
      __s12param0 = SeasonLeagueEndDialog.TAB_REWARDS_EVENT;
    }
    if (this._currentCategory != __s12param0) {
      __s1param0.prototype.changeCategory.call(this, __s12param0);
      this.showSublayer(this._subLayer.get(__s12param0), [this.dialogProperties]);
      updateButton(this.dialogDisp.btn_tabRewards, this._currentCategory == SeasonLeagueEndDialog.TAB_REWARDS || this._currentCategory == SeasonLeagueEndDialog.TAB_REWARDS_EVENT);
      updateButton(this.dialogDisp.btn_tabMedals, this._currentCategory == SeasonLeagueEndDialog.TAB_MEDALS);
      updateButton(this.dialogDisp.btn_tabMedalsAlliance, this._currentCategory == SeasonLeagueEndDialog.TAB_ALLIANCE_MEDALS);
    }
  };
  SeasonLeagueEndDialog.prototype.initTabs = function () {
    var __s18local0 = this.hasAllianceInfo();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_tabMedalsAlliance, __s18local0);
    var __s18local1 = "";
    if (!__s18local0) {
      __s18local1 = __dep_export_CastleModel.CastleModel.userData.isInAlliance ? "dialog_seasonLeague_eventEnd_medalsAllianceInactive_tooltip" : "dialog_alliance_invite_notaMember_tooltip";
    }
    this.dialogDisp.btn_tabMedalsAlliance.toolTipText = __s18local1;
    this.changeCategory(SeasonLeagueEndDialog.TAB_REWARDS);
  };
  SeasonLeagueEndDialog.prototype.updateText = function () {
    if (this.dialogProperties.isSeasonEventEndDialog) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_eventEnd_" + this.dialogProperties.getEventName() + "_header"))).autoFitToBounds = true;
      this.setTabButtonText(this.dialogDisp.btn_tabRewards, "dialog_seasonLeague_eventEnd_rewards_tab");
      this.setTabButtonText(this.dialogDisp.btn_tabMedals, "dialog_seasonLeague_eventEnd_medalsPlayer_tab");
      this.setTabButtonText(this.dialogDisp.btn_tabMedalsAlliance, "dialog_seasonLeague_eventEnd_medalsAlliance_tab");
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_seasonEnd_header"))).autoFitToBounds = true;
      this.setTabButtonText(this.dialogDisp.btn_tabRewards, "dialog_seasonLeague_seasonEnd_rewards_tab");
      this.setTabButtonText(this.dialogDisp.btn_tabMedals, "dialog_seasonLeague_seasonEnd_medalsPlayer_tab");
      this.setTabButtonText(this.dialogDisp.btn_tabMedalsAlliance, "dialog_seasonLeague_seasonEnd_medalsAlliance_tab");
    }
  };
  SeasonLeagueEndDialog.prototype.setTabButtonText = function (__s25param0, __s25param1) {
    this.textFieldManager.registerTextField(__s25param0.mc_default.txt_text, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s25param1))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(__s25param0.mc_selected.txt_text, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s25param1))).autoFitToBounds = true;
  };
  SeasonLeagueEndDialog.prototype.updateTeaser = function () {
    for (var __s27local0 = this.dialogDisp.mc_teaser, __s27local1 = 0; __s27local1 < __s27local0.numChildren; ++__s27local1) {
      __s27local0.getChildAt(__s27local1).visible = false;
    }
    __s27local0.getChildByName(this.dialogProperties.getEventName()).visible = true;
  };
  SeasonLeagueEndDialog.prototype.updateRankInfo = function () {
    var __s31local0 = this.hasAllianceInfo();
    this.dialogDisp.mc_rankInfoPlayer.visible = false;
    this.dialogDisp.mc_rankInfoAllianceEvent.visible = false;
    this.dialogDisp.mc_rankInfoAllianceSeason.visible = false;
    if (__s31local0) {
      if (this.dialogProperties.isSeasonEventEndDialog) {
        this.setRankInfo(this.dialogDisp.mc_rankInfoAllianceEvent);
      } else {
        this.setRankInfo(this.dialogDisp.mc_rankInfoAllianceSeason);
      }
    } else {
      this.setRankInfo(this.dialogDisp.mc_rankInfoPlayer);
    }
  };
  SeasonLeagueEndDialog.prototype.setRankInfo = function (__s37param0) {
    __s37param0.visible = true;
    if (__s37param0.mc_rankIcon) {
      new __dep_export_SeasonLeaguePromotionIconComponent.SeasonLeaguePromotionIconComponent(__s37param0.mc_rankIcon, __dep_export_SeasonLeaguePromotionIconComponent.SeasonLeaguePromotionIconComponent.TYPE_NORMAL, new __s0local0(75, 65)).updateWithNewVO(this.dialogProperties.promotionVO);
    }
    if (__s37param0.txt_rankName) {
      this.textFieldManager.registerTextField(__s37param0.txt_rankName, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProperties.promotionVO.getNameTextId()))).autoFitToBounds = true;
    }
    if (__s37param0.txt_placement) {
      this.textFieldManager.registerTextField(__s37param0.txt_placement, this.dialogProperties.rank > 0 ? new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.dialogProperties.rank) : new __dep_exact_92d05af59ee2ff30_1.TextVO("-")).autoFitToBounds = true;
    }
    if (__s37param0.mc_pointsIcon) {
      __s37param0.mc_pointsIcon.gotoAndStop(__dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.getPointsIconFrame(this.dialogProperties.eventId));
      __s37param0.mc_pointsIcon.toolTipText = __dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.getPointsIconTooltipTextId(this.dialogProperties.eventId);
    }
    if (__s37param0.txt_points) {
      var __s37local0 = this.textFieldManager.registerTextField(__s37param0.txt_points, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.dialogProperties.points));
      __s37local0.autoFitToBounds = true;
      __s37local0.visible = this.dialogProperties.isSeasonEventEndDialog;
    }
    if (__s37param0.txt_placementAlliance) {
      this.textFieldManager.registerTextField(__s37param0.txt_placementAlliance, this.dialogProperties.allianceRank > 0 ? new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.dialogProperties.allianceRank) : new __dep_exact_92d05af59ee2ff30_1.TextVO("-")).autoFitToBounds = true;
    }
  };
  SeasonLeagueEndDialog.prototype.hasAllianceInfo = function () {
    return this.dialogProperties.allianceRank > 0;
  };
  SeasonLeagueEndDialog.prototype.onClick = function (__s47param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s47param0.target)) {
      __s1param0.prototype.onClick.call(this, __s47param0);
      switch (__s47param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_tabRewards:
          this.changeCategory(SeasonLeagueEndDialog.TAB_REWARDS);
          break;
        case this.dialogDisp.btn_tabMedals:
          this.changeCategory(SeasonLeagueEndDialog.TAB_MEDALS);
          break;
        case this.dialogDisp.btn_tabMedalsAlliance:
          this.changeCategory(SeasonLeagueEndDialog.TAB_ALLIANCE_MEDALS);
          break;
        case this.dialogDisp.btn_pickUp:
          if (this.dialogProperties.rewardHubVO) {
            __dep_export_CastleRewardHubMicroservice.CastleRewardHubMicroservice.Instance.pickRewardsSignal.dispatch([this.dialogProperties.rewardHubVO.hubRewardID]);
          }
          this.hide();
      }
    }
  };
  Object.defineProperty(SeasonLeagueEndDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueEndDialog.NAME = "SeasonLeagueEnd_RewardHub";
  SeasonLeagueEndDialog.TAB_REWARDS = "tab_rewards";
  SeasonLeagueEndDialog.TAB_REWARDS_EVENT = "tab_rewards_event";
  SeasonLeagueEndDialog.TAB_MEDALS = "tab_medals";
  SeasonLeagueEndDialog.TAB_ALLIANCE_MEDALS = "tab_allianceMedals";
  return SeasonLeagueEndDialog;
}(__dep_export_CastleExternalSubLayerDialog.CastleExternalSubLayerDialog);
exports.SeasonLeagueEndDialog = __s0local1;
var __dep_export_SeasonLeaguePromotionIconComponent = require("gge-module:export_SeasonLeaguePromotionIconComponent");
var __dep_export_SeasonLeagueEndDialogMedals = require("gge-module:export_SeasonLeagueEndDialogMedals");
var __dep_export_SeasonLeagueEndDialogRewards = require("gge-module:export_SeasonLeagueEndDialogRewards");
var __dep_export_SeasonLeagueEndDialogRewardsEvent = require("gge-module:export_SeasonLeagueEndDialogRewardsEvent");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleRewardHubMicroservice = require("gge-module:export_CastleRewardHubMicroservice");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
