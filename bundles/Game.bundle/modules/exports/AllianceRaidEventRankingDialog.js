Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceRaidbossEventEventVO = require("gge-module:export_AllianceRaidbossEventEventVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ClickFeedbackButtonHoverTabButton = require("gge-module:export_ClickFeedbackButtonHoverTabButton");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_AllianceMobilizationEventDialogContributions = require("gge-module:export_AllianceMobilizationEventDialogContributions");
var __dep_export_AllianceMobilizationEventDialogLeaderboard = require("gge-module:export_AllianceMobilizationEventDialogLeaderboard");
var __dep_export_AllianceMobilizationRewardDialog = require("gge-module:export_AllianceMobilizationRewardDialog");
var __dep_export_AllianceMobilizationRewardDialogProperties = require("gge-module:export_AllianceMobilizationRewardDialogProperties");
var __s0local0 = function (__s1param0) {
  function AllianceRaidEventRankingDialog() {
    var __s3local0 = __s1param0.call(this, AllianceRaidEventRankingDialog.NAME) || this;
    __s3local0._currentTab = AllianceRaidEventRankingDialog.TAB_SUBDIVISION;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceRaidEventRankingDialog, __s1param0);
  AllianceRaidEventRankingDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.tabs3.tab_division, this.tabs3.tab_subdivision, this.tabs3.tab_contributions, this.tabs2.tab_subdivision, this.tabs2.tab_contributions], __dep_export_ClickFeedbackButtonHoverTabButton.ClickFeedbackButtonHoverTabButton, 1);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.registerTabLabel(this.tabs3.tab_division, "button_ame_ranking_division");
    this.registerTabLabel(this.tabs3.tab_subdivision, "button_ame_ranking_subdivision");
    this.registerTabLabel(this.tabs2.tab_subdivision, "button_ame_ranking_subdivision");
    this.registerTabLabel(this.tabs3.tab_contributions, "button_ame_ranking_contribution");
    this.registerTabLabel(this.tabs2.tab_contributions, "button_ame_ranking_contribution");
    this._leaderBoardSublayer = new __dep_export_AllianceMobilizationEventDialogLeaderboard.AllianceMobilizationEventDialogLeaderboard(this.dialogDisp.sublayer_leaderboard);
    this._contributionsSublayer = new __dep_export_AllianceMobilizationEventDialogContributions.AllianceMobilizationEventDialogContributions(this.dialogDisp.sublayer_contributions);
  };
  AllianceRaidEventRankingDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    if (this.eventVO) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_are_leaderboard_title"))).autoFitToBounds = true;
      this.tabs2.visible = this.eventVO.isDefaultMode;
      this.tabs3.visible = !this.eventVO.isDefaultMode;
      if (this.eventVO.isDefaultMode && this._currentTab == AllianceRaidEventRankingDialog.TAB_DIVISION) {
        this._currentTab = AllianceRaidEventRankingDialog.TAB_SUBDIVISION;
      }
      this.switchTab(this._currentTab);
      __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    } else {
      this.hide();
    }
  };
  AllianceRaidEventRankingDialog.prototype.hideLoaded = function () {
    __s1param0.prototype.hideLoaded.call(this);
    if (this._contributionsSublayer) {
      this._contributionsSublayer.hide();
    }
    if (this._leaderBoardSublayer) {
      this._leaderBoardSublayer.hide();
    }
    this._currentTab = AllianceRaidEventRankingDialog.TAB_SUBDIVISION;
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  AllianceRaidEventRankingDialog.prototype.registerTabLabel = function (__s16param0, __s16param1) {
    if (__s16param0) {
      if (__s16param0.txt_label) {
        this.textFieldManager.registerTextField(__s16param0.txt_label, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s16param1));
      }
      if (__s16param0.txt_label_white) {
        this.textFieldManager.registerTextField(__s16param0.txt_label_white, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s16param1));
      }
    }
  };
  AllianceRaidEventRankingDialog.prototype.switchTab = function (__s21param0) {
    this._currentTab = __s21param0;
    this.updateTabs();
    switch (this._currentTab) {
      case AllianceRaidEventRankingDialog.TAB_DIVISION:
        this._contributionsSublayer.hide();
        this._leaderBoardSublayer.hide();
        this._leaderBoardSublayer.show({
          EID: this.eventId
        });
        break;
      case AllianceRaidEventRankingDialog.TAB_SUBDIVISION:
        this._contributionsSublayer.hide();
        this._leaderBoardSublayer.hide();
        this._leaderBoardSublayer.show({
          SDI: this.eventVO.subDivisionId,
          EID: this.eventId
        });
        break;
      case AllianceRaidEventRankingDialog.TAB_CONTRIBUTIONS:
        this._leaderBoardSublayer.hide();
        this._contributionsSublayer.show({
          EID: this.eventId
        });
    }
  };
  AllianceRaidEventRankingDialog.prototype.updateTabs = function () {
    this.setTabSelected(this.tabs3.tab_division, this._currentTab == AllianceRaidEventRankingDialog.TAB_DIVISION);
    this.setTabSelected(this.tabs3.tab_subdivision, this._currentTab == AllianceRaidEventRankingDialog.TAB_SUBDIVISION);
    this.setTabSelected(this.tabs2.tab_subdivision, this._currentTab == AllianceRaidEventRankingDialog.TAB_SUBDIVISION);
    this.setTabSelected(this.tabs3.tab_contributions, this._currentTab == AllianceRaidEventRankingDialog.TAB_CONTRIBUTIONS);
    this.setTabSelected(this.tabs2.tab_contributions, this._currentTab == AllianceRaidEventRankingDialog.TAB_CONTRIBUTIONS);
  };
  AllianceRaidEventRankingDialog.prototype.setTabSelected = function (__s26param0, __s26param1) {
    if (__s26param0 && __s26param0.basicButton) {
      __s26param0.basicButton.selectButton = __s26param1;
    }
  };
  AllianceRaidEventRankingDialog.prototype.onRemoveEvent = function (__s29param0) {
    if (!__dep_export_AllianceRaidbossEventEventVO.AllianceRaidbossEventEventVO.getActiveEventVO()) {
      this.hide();
    }
  };
  AllianceRaidEventRankingDialog.prototype.onClick = function (__s32param0) {
    __s1param0.prototype.onClick.call(this, __s32param0);
    switch (__s32param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text(this.helpTextID));
        break;
      case this.tabs3.tab_division:
        this.switchTab(AllianceRaidEventRankingDialog.TAB_DIVISION);
        break;
      case this.tabs3.tab_subdivision:
      case this.tabs2.tab_subdivision:
        this.switchTab(AllianceRaidEventRankingDialog.TAB_SUBDIVISION);
        break;
      case this.tabs3.tab_contributions:
      case this.tabs2.tab_contributions:
        this.switchTab(AllianceRaidEventRankingDialog.TAB_CONTRIBUTIONS);
        break;
      case this.dialogDisp.sublayer_leaderboard.btn_rewards:
      case this.dialogDisp.sublayer_contributions.btn_rewards:
        this.showRewards();
    }
  };
  AllianceRaidEventRankingDialog.prototype.showRewards = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AllianceMobilizationRewardDialog.AllianceMobilizationRewardDialog, new __dep_export_AllianceMobilizationRewardDialogProperties.AllianceMobilizationRewardDialogProperties(this.eventId, __dep_export_AllianceMobilizationRewardDialog.AllianceMobilizationRewardDialog.TAB_RANK, false));
  };
  Object.defineProperty(AllianceRaidEventRankingDialog.prototype, "helpTextID", {
    get: function () {
      switch (this.eventVO.mode) {
        case __dep_export_AllianceRaidbossEventEventVO.AllianceRaidbossEventEventVO.MODE_QUALIFICATION:
          return "help_allianceRaidbossEventQualification_help";
        case __dep_export_AllianceRaidbossEventEventVO.AllianceRaidbossEventEventVO.MODE_ADJUSTMENT:
          return "help_allianceRaidbossEventAdjustment_help";
        case __dep_export_AllianceRaidbossEventEventVO.AllianceRaidbossEventEventVO.MODE_NORMAL:
          return "help_allianceRaidbossEventNormal_help";
        default:
          return "help_allianceRaidbossEvent";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidEventRankingDialog.prototype, "tabs2", {
    get: function () {
      return this.dialogDisp.tabs_2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidEventRankingDialog.prototype, "tabs3", {
    get: function () {
      return this.dialogDisp.tabs_3;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidEventRankingDialog.prototype, "eventId", {
    get: function () {
      return __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_RAID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidEventRankingDialog.prototype, "eventVO", {
    get: function () {
      return __dep_export_AllianceRaidbossEventEventVO.AllianceRaidbossEventEventVO.getActiveEventVO();
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidEventRankingDialog.NAME = "AllianceRaidEventRanking_Aug26";
  AllianceRaidEventRankingDialog.TAB_DIVISION = 0;
  AllianceRaidEventRankingDialog.TAB_SUBDIVISION = 1;
  AllianceRaidEventRankingDialog.TAB_CONTRIBUTIONS = 2;
  return AllianceRaidEventRankingDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.AllianceRaidEventRankingDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
