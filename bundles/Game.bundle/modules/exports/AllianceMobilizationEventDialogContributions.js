Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SAllianceDivisionPlayerContributionVO = require("gge-module:export_C2SAllianceDivisionPlayerContributionVO");
var __dep_export_AllianceDivisionContributionsEvent = require("gge-module:export_AllianceDivisionContributionsEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceMobilizationEventEventVO = require("gge-module:export_AllianceMobilizationEventEventVO");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_HighlightAndClearInputTextBehaviour = require("gge-module:export_HighlightAndClearInputTextBehaviour");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_AllianceMobilizationEventDialogContributionItem = require("gge-module:export_AllianceMobilizationEventDialogContributionItem");
var __s0local0 = function (__s1param0) {
  function AllianceMobilizationEventDialogContributions(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._items = [];
    __s3local0._eventID = 0;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceMobilizationEventDialogContributions, __s1param0);
  AllianceMobilizationEventDialogContributions.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.subLayerDisp.btn_search, this.findMeButton, this.subLayerDisp.btn_refresh, this.subLayerDisp.btn_rewards], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    if (this.subLayerDisp.btn_refresh) {
      this.subLayerDisp.btn_refresh.toolTipText = "refresh";
    }
    if (this.subLayerDisp.btn_rewards && this.subLayerDisp.btn_rewards.txt_label) {
      this.textFieldManager.registerTextField(this.subLayerDisp.btn_rewards.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("rewards")));
    }
    this.subLayerDisp.mc_top.icon_ranking.toolTipText = "rank";
    this.subLayerDisp.mc_top.info_name.visible = false;
    this.subLayerDisp.mc_top.info_points.visible = false;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_top.txt_allianceName, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("player")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_top.txt_server, new __dep_exact_92d05af59ee2ff30.TextVO(" "));
    this.registerTotalHeader();
    for (var __s5local0 = 0; this.subLayerDisp.mc_list["mc_item" + __s5local0];) {
      var __s5local1 = new __dep_export_AllianceMobilizationEventDialogContributionItem.AllianceMobilizationEventDialogContributionItem(this.subLayerDisp.mc_list["mc_item" + __s5local0]);
      this._items.push(__s5local1);
      __s5local0++;
    }
    var __s5local2 = new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.subLayerDisp.mc_list.mc_slider);
    var __s5local3 = new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, this._items.length);
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(__s5local2, __s5local3);
    this._txtInput = this.textFieldManager.registerTextField(this.subLayerDisp.mc_find.txt_input, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_highscore_search")));
    this._txtInput.multiline = false;
    this._txtInput.wordwrap = false;
    this._txtInput.maxChars = 99;
    this._inputTextBehavior = new __dep_export_HighlightAndClearInputTextBehaviour.HighlightAndClearInputTextBehaviour(this.subLayerDisp.mc_find, this._txtInput);
    this.subLayerDisp.mc_find.mc_searchResults.visible = false;
  };
  AllianceMobilizationEventDialogContributions.prototype.show = function (__s11param0) {
    var __s11local0 = this;
    __s1param0.prototype.show.call(this, __s11param0);
    if (__s11param0 && __s11param0.EID) {
      this._eventID = __s11param0.EID;
    }
    this._contributionVOs = [];
    this.updateScrollComponent();
    this._inputTextBehavior.onShow();
    this._inputTextBehavior.onEnterPressSignal.add(this.bindFunction(this.onSearch));
    var __s11local1 = __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.getActiveEventVO(this._eventID);
    this.subLayerDisp.mc_top.icon_rewards.toolTipText = {
      t: __s11local1.getEventSpecificTextID("dialogue_ame_ranking_rewards_tooltip"),
      p: [__s11local1.scoreBarVO.allianceRewardThresholdPoints]
    };
    this._items.forEach(function (__s14param0) {
      return __s14param0.setEventID(__s11local0._eventID);
    });
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceDivisionPlayerContributionVO.C2SAllianceDivisionPlayerContributionVO(this._eventID));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_AllianceDivisionContributionsEvent.AllianceDivisionContributionsEvent.ALLIANCE_CONTRIBUTIONS_RECEIVED, this.bindFunction(this.onContributionsReceived));
  };
  AllianceMobilizationEventDialogContributions.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this._scrollComponent) {
      this._scrollComponent.hide();
    }
    if (this._inputTextBehavior) {
      this._inputTextBehavior.onHide();
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_AllianceDivisionContributionsEvent.AllianceDivisionContributionsEvent.ALLIANCE_CONTRIBUTIONS_RECEIVED, this.bindFunction(this.onContributionsReceived));
  };
  AllianceMobilizationEventDialogContributions.prototype.onContributionsReceived = function (__s20param0) {
    this._contributionVOs = __s20param0.contributionVOs;
    this.updateScrollComponent();
  };
  AllianceMobilizationEventDialogContributions.prototype.onScroll = function () {
    this.updateList();
  };
  AllianceMobilizationEventDialogContributions.prototype.updateScrollComponent = function () {
    this._scrollComponent.init(0, Math.max(0, this._contributionVOs.length - this._items.length), this._items.length, this._items.length);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    this._scrollComponent.scrollToValue(0);
  };
  AllianceMobilizationEventDialogContributions.prototype.updateList = function () {
    var __s26local0 = this;
    var __s26local1 = this._scrollComponent.currentValue;
    this._items.forEach(function (__s28param0, __s28param1, __s28param2) {
      if (__s26local1 + __s28param1 < __s26local0._contributionVOs.length) {
        __s28param0.update(__s26local0._contributionVOs[__s26local1 + __s28param1]);
        __s28param0.setVisibility(true);
        __s28param0.onShow();
      } else {
        __s28param0.setVisibility(false);
        __s28param0.onHide();
      }
    });
  };
  AllianceMobilizationEventDialogContributions.prototype.onClick = function (__s32param0) {
    __s1param0.prototype.onClick.call(this, __s32param0);
    switch (__s32param0.target) {
      case this.subLayerDisp.btn_search:
        this.onSearch();
        break;
      case this.findMeButton:
        this.searchForRankOrName(__dep_export_CastleModel.CastleModel.userData.userName);
        break;
      case this.subLayerDisp.btn_refresh:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceDivisionPlayerContributionVO.C2SAllianceDivisionPlayerContributionVO(this._eventID));
    }
  };
  AllianceMobilizationEventDialogContributions.prototype.registerTotalHeader = function () {
    var __s35local0 = __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_highscore_totalPoints");
    var __s35local1 = this.textFieldManager.registerTextField(this.subLayerDisp.mc_top.txt_total, new __dep_exact_92d05af59ee2ff30.TextVO(__s35local0));
    if (__s35local1.numLines == 1) {
      __s35local1.textContentVO.stringValue = "\n" + __s35local0;
    }
  };
  Object.defineProperty(AllianceMobilizationEventDialogContributions.prototype, "findMeButton", {
    get: function () {
      return this.subLayerDisp.btn_findMe || this.subLayerDisp.btn_findme;
    },
    enumerable: true,
    configurable: true
  });
  AllianceMobilizationEventDialogContributions.prototype.onSearch = function () {
    this.searchForRankOrName(this._inputTextBehavior.text);
  };
  AllianceMobilizationEventDialogContributions.prototype.searchForRankOrName = function (__s42param0) {
    var __s42local0 = this._contributionVOs.findIndex(function (__s44param0) {
      return __s44param0.R.toString() == __s42param0 || __s44param0.PN.toLowerCase() == __s42param0.toLowerCase();
    });
    if (__s42local0 > -1) {
      this._scrollComponent.scrollToValue(Math.max(__s42local0 - this._items.length + 1, 0));
    }
  };
  return AllianceMobilizationEventDialogContributions;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.AllianceMobilizationEventDialogContributions = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
