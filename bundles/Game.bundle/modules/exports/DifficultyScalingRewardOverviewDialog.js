Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = function (__s1param0) {
  function DifficultyScalingRewardOverviewDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, DifficultyScalingRewardOverviewDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DifficultyScalingRewardOverviewDialog, __s1param0);
  DifficultyScalingRewardOverviewDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_tab0Unselected, this.dialogDisp.btn_tab1Unselected, this.dialogDisp.btn_tab2Unselected]);
  };
  DifficultyScalingRewardOverviewDialog.prototype.initScrollList = function () {
    var __s7local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_DifficultyScalingRewardOverviewDialogScrollItem.DifficultyScalingRewardOverviewDialogScrollItem, "EventDifficultyRewardListItem", __dep_export_DifficultyScalingSelectDialog.DifficultyScalingSelectDialog.NAME);
    __s7local0.itemPaddingY = 6;
    __s7local0.useSmoothScroll = true;
    this.scrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.dialogDisp.mc_list).addMaskMc(this.dialogDisp.mc_list.mc_mask).addItemContainerMc(this.dialogDisp.mc_list.mc_items).addSliderMc(this.dialogDisp.mc_list.mc_slider), __s7local0);
    this.scrollList.scrollComponent.deltaStepsMouseWheel = 10;
  };
  DifficultyScalingRewardOverviewDialog.prototype.updateContent = function (__s9param0) {
    var __s9local0 = __s9param0.getRewardsAndPointsArrayForDifficultyDescending(this.dialogProperties.difficultyVO ? this.dialogProperties.difficultyVO.difficultyID : 0);
    this.scrollList.updateWithNewData(__s9local0);
    this.scrollList.scrollToData(0, true);
  };
  DifficultyScalingRewardOverviewDialog.prototype.showLoaded = function (__s11param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s11param0);
    this.initScrollList();
    this.updateText();
    this.scrollList.onShow();
    if (this.dialogProperties.singlePlayerLeagueVO) {
      this.selectTab(0);
    } else if (this.dialogProperties.alliancePlayerLeagueVO) {
      this.selectTab(1);
    }
  };
  DifficultyScalingRewardOverviewDialog.prototype.hideLoaded = function (__s15param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s15param0);
    this.scrollList.destroy();
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list.mc_items);
  };
  DifficultyScalingRewardOverviewDialog.prototype.selectTab = function (__s17param0) {
    this.dialogDisp.btn_tab2Selected.visible = false;
    this.dialogDisp.btn_tab2Unselected.visible = false;
    switch (__s17param0) {
      case 0:
        this.dialogDisp.btn_tab0Selected.visible = !!this.dialogProperties.singlePlayerLeagueVO;
        this.dialogDisp.btn_tab0Unselected.visible = false;
        this.dialogDisp.btn_tab1Unselected.visible = !!this.dialogProperties.alliancePlayerLeagueVO;
        this.dialogDisp.btn_tab1Selected.visible = false;
        this.updateContent(this.dialogProperties.singlePlayerLeagueVO);
        break;
      case 1:
        this.dialogDisp.btn_tab0Selected.visible = false;
        this.dialogDisp.btn_tab0Unselected.visible = !!this.dialogProperties.singlePlayerLeagueVO;
        this.dialogDisp.btn_tab1Unselected.visible = false;
        this.dialogDisp.btn_tab1Selected.visible = !!this.dialogProperties.alliancePlayerLeagueVO;
        this.updateContent(this.dialogProperties.alliancePlayerLeagueVO);
    }
  };
  DifficultyScalingRewardOverviewDialog.prototype.updateText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_rewardOverview_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_difficultyScaling_eventRankingRewards_desc", [this.dialogProperties.difficultyVO ? this.dialogProperties.difficultyVO.name_textID : "dialog_difficultyScaling_confirmClassic_title"]));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab0Selected.txt_copy, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_playerRanking_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab0Unselected.txt_copy, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_playerRanking_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab1Selected.txt_copy, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_allianceRanking_desc")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab1Unselected.txt_copy, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_allianceRanking_desc")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab2Selected.txt_copy, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_extraRewards_desc")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab2Unselected.txt_copy, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_extraRewards_desc")));
  };
  DifficultyScalingRewardOverviewDialog.prototype.onClick = function (__s22param0) {
    __s1param0.prototype.onClick.call(this, __s22param0);
    switch (__s22param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_difficultyScaling"));
        break;
      case this.dialogDisp.btn_tab0Unselected:
        this.selectTab(0);
        break;
      case this.dialogDisp.btn_tab1Unselected:
        this.selectTab(1);
    }
  };
  Object.defineProperty(DifficultyScalingRewardOverviewDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  DifficultyScalingRewardOverviewDialog.NAME = "EventDifficultyRewardList";
  return DifficultyScalingRewardOverviewDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.DifficultyScalingRewardOverviewDialog = __s0local0;
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_DifficultyScalingSelectDialog = require("gge-module:export_DifficultyScalingSelectDialog");
var __dep_export_DifficultyScalingRewardOverviewDialogScrollItem = require("gge-module:export_DifficultyScalingRewardOverviewDialogScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
