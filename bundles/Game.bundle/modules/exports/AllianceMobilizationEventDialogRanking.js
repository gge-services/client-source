Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AllianceMobilizationEventEventVO = require("gge-module:export_AllianceMobilizationEventEventVO");
var __dep_export_ClickFeedbackButtonHoverTabButton = require("gge-module:export_ClickFeedbackButtonHoverTabButton");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_AllianceMobilizationEventDialogContributions = require("gge-module:export_AllianceMobilizationEventDialogContributions");
var __dep_export_AllianceMobilizationEventDialogLeaderboard = require("gge-module:export_AllianceMobilizationEventDialogLeaderboard");
var __s0local0 = function (__s1param0) {
  function AllianceMobilizationEventDialogRanking(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.currentTab = 1;
    __s3local0._eventID = 0;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceMobilizationEventDialogRanking, __s1param0);
  AllianceMobilizationEventDialogRanking.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.subLayerDisp.tabs_3.tab_division, this.subLayerDisp.tabs_3.tab_subdivision, this.subLayerDisp.tabs_2.tab_subdivision, this.subLayerDisp.tabs_3.tab_contributions, this.subLayerDisp.tabs_2.tab_contributions], __dep_export_ClickFeedbackButtonHoverTabButton.ClickFeedbackButtonHoverTabButton, 1);
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.subLayerDisp.tabs_3.tab_division.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("button_ame_ranking_division"));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.subLayerDisp.tabs_3.tab_division.txt_label_white, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("button_ame_ranking_division"));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.subLayerDisp.tabs_3.tab_subdivision.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("button_ame_ranking_subdivision"));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.subLayerDisp.tabs_3.tab_subdivision.txt_label_white, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("button_ame_ranking_subdivision"));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.subLayerDisp.tabs_2.tab_subdivision.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("button_ame_ranking_subdivision"));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.subLayerDisp.tabs_2.tab_subdivision.txt_label_white, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("button_ame_ranking_subdivision"));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.subLayerDisp.tabs_3.tab_contributions.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("button_ame_ranking_contribution"));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.subLayerDisp.tabs_3.tab_contributions.txt_label_white, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("button_ame_ranking_contribution"));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.subLayerDisp.tabs_2.tab_contributions.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("button_ame_ranking_contribution"));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.subLayerDisp.tabs_2.tab_contributions.txt_label_white, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("button_ame_ranking_contribution"));
    this._leaderBoardSublayer = new __dep_export_AllianceMobilizationEventDialogLeaderboard.AllianceMobilizationEventDialogLeaderboard(this.subLayerDisp.sublayer_leaderboard);
    this._contributionsSublayer = new __dep_export_AllianceMobilizationEventDialogContributions.AllianceMobilizationEventDialogContributions(this.subLayerDisp.sublayer_contributions);
  };
  AllianceMobilizationEventDialogRanking.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    if (__s7param0 && __s7param0.length > 0) {
      this._eventID = __s7param0[0];
    }
    this.subLayerDisp.tabs_2.visible = this.eventVO.isDefaultMode;
    this.subLayerDisp.tabs_3.visible = !this.eventVO.isDefaultMode;
    this.switchTab(this.currentTab);
  };
  AllianceMobilizationEventDialogRanking.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.currentTab = AllianceMobilizationEventDialogRanking.SUBLAYER_SUBDIVISION;
    if (this._contributionsSublayer) {
      this._contributionsSublayer.hide();
    }
    if (this._leaderBoardSublayer) {
      this._leaderBoardSublayer.hide();
    }
  };
  AllianceMobilizationEventDialogRanking.prototype.updateTabs = function () {
    this.subLayerDisp.tabs_3.tab_division.basicButton.selectButton = this.currentTab == AllianceMobilizationEventDialogRanking.SUBLAYER_DIVISION;
    this.subLayerDisp.tabs_3.tab_subdivision.basicButton.selectButton = this.currentTab == AllianceMobilizationEventDialogRanking.SUBLAYER_SUBDIVISION;
    this.subLayerDisp.tabs_2.tab_subdivision.basicButton.selectButton = this.currentTab == AllianceMobilizationEventDialogRanking.SUBLAYER_SUBDIVISION;
    this.subLayerDisp.tabs_3.tab_contributions.basicButton.selectButton = this.currentTab == AllianceMobilizationEventDialogRanking.SUBLAYER_CONTRIBUTIONS;
    this.subLayerDisp.tabs_2.tab_contributions.basicButton.selectButton = this.currentTab == AllianceMobilizationEventDialogRanking.SUBLAYER_CONTRIBUTIONS;
  };
  AllianceMobilizationEventDialogRanking.prototype.switchTab = function (__s16param0) {
    this.currentTab = __s16param0;
    this.updateTabs();
    switch (this.currentTab) {
      case AllianceMobilizationEventDialogRanking.SUBLAYER_DIVISION:
        this._leaderBoardSublayer.hide();
        this._contributionsSublayer.hide();
        this._leaderBoardSublayer.show({
          EID: this._eventID
        });
        break;
      case AllianceMobilizationEventDialogRanking.SUBLAYER_SUBDIVISION:
        this._leaderBoardSublayer.hide();
        this._contributionsSublayer.hide();
        this._leaderBoardSublayer.show({
          SDI: this.eventVO.subDivisionId,
          EID: this._eventID
        });
        break;
      case AllianceMobilizationEventDialogRanking.SUBLAYER_CONTRIBUTIONS:
        this._leaderBoardSublayer.hide();
        this._contributionsSublayer.show({
          EID: this._eventID
        });
    }
  };
  AllianceMobilizationEventDialogRanking.prototype.onClick = function (__s19param0) {
    __s1param0.prototype.onClick.call(this, __s19param0);
    switch (__s19param0.target) {
      case this.subLayerDisp.tabs_3.tab_division:
        this.switchTab(AllianceMobilizationEventDialogRanking.SUBLAYER_DIVISION);
        break;
      case this.subLayerDisp.tabs_3.tab_subdivision:
      case this.subLayerDisp.tabs_2.tab_subdivision:
        this.switchTab(AllianceMobilizationEventDialogRanking.SUBLAYER_SUBDIVISION);
        break;
      case this.subLayerDisp.tabs_3.tab_contributions:
      case this.subLayerDisp.tabs_2.tab_contributions:
        this.switchTab(AllianceMobilizationEventDialogRanking.SUBLAYER_CONTRIBUTIONS);
    }
  };
  Object.defineProperty(AllianceMobilizationEventDialogRanking.prototype, "eventVO", {
    get: function () {
      return __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.getActiveEventVO(this._eventID);
    },
    enumerable: true,
    configurable: true
  });
  AllianceMobilizationEventDialogRanking.SUBLAYER_DIVISION = 0;
  AllianceMobilizationEventDialogRanking.SUBLAYER_SUBDIVISION = 1;
  AllianceMobilizationEventDialogRanking.SUBLAYER_CONTRIBUTIONS = 2;
  return AllianceMobilizationEventDialogRanking;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.AllianceMobilizationEventDialogRanking = __s0local0;
