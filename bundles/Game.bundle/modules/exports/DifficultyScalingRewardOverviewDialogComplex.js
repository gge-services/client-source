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
var __dep_export_AccordionComponentProperties = require("gge-module:export_AccordionComponentProperties");
var __dep_export_GenericCollapsibleItemProperties = require("gge-module:export_GenericCollapsibleItemProperties");
var __dep_export_LayoutMargin = require("gge-module:export_LayoutMargin");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = function (__s1param0) {
  function DifficultyScalingRewardOverviewDialogComplex() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, DifficultyScalingRewardOverviewDialogComplex.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DifficultyScalingRewardOverviewDialogComplex, __s1param0);
  DifficultyScalingRewardOverviewDialogComplex.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_tab0Unselected, this.dialogDisp.btn_tab1Unselected, this.dialogDisp.btn_tab2Unselected]);
  };
  DifficultyScalingRewardOverviewDialogComplex.prototype.initScrollList = function () {
    var __s7local0 = new __dep_export_AccordionComponentProperties.AccordionComponentProperties();
    __s7local0.scrollStrategy = __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical;
    __s7local0.disableButtons = true;
    __s7local0.scrollStepPixels = 40;
    __s7local0.scrollDuration = 0;
    this.scrollList = new __dep_export_DynamicSliderAccordionComponent.DynamicSliderAccordionComponent(this.dialogDisp.mc_list, __s7local0);
  };
  DifficultyScalingRewardOverviewDialogComplex.prototype.updateContent = function (__s9param0, __s9param1) {
    var __s9local0 = __s9param0.getRewardsAndPointsArrayForDifficultyDescending(this.dialogProperties.difficultyVO ? this.dialogProperties.difficultyVO.difficultyID : 0);
    var __s9local1 = new __dep_export_GenericCollapsibleItemProperties.GenericCollapsibleItemProperties(new __dep_export_LayoutMargin.LayoutMargin(0, 6, 0, 0), true, 0.2, 0.2, false);
    this.scrollList.hide();
    var __s9local2 = [];
    if (__s9param1) {
      for (var __s9local3 = 0; __s9local3 < __s9local0.length; __s9local3++) {
        var __s9local4 = new __dep_export_DifficultyScalingRewardDialogListItem.DifficultyScalingRewardDialogListItem(__s9local0[__s9local3], __s9local1);
        __s9local2.push(__s9local4);
      }
    } else {
      for (var __s9local5 = 0; __s9local5 < 3; __s9local5++) {
        __s9local4 = new __dep_export_DifficultyScalingRewardDialogListItem.DifficultyScalingRewardDialogListItem(__s9local0[__s9local5], __s9local1);
        __s9local2.push(__s9local4);
      }
      for (var __s9local6 = __s9param0.getRewardGroupsAndPointsArrayForDifficultyDescending(), __s9local7 = 0; __s9local7 < __s9local6.length; __s9local7++) {
        var __s9local8;
        __s9local8 = __s9local6[__s9local7][0].length == 1 ? new __dep_export_DifficultyScalingRewardDialogListItemSingleHeader.DifficultyScalingRewardDialogListItemSingleHeader(__s9local6[__s9local7], __s9local1) : new __dep_export_DifficultyScalingRewardDialogListItemDoubleHeader.DifficultyScalingRewardDialogListItemDoubleHeader(__s9local6[__s9local7], __s9local1);
        __s9local2.push(__s9local8);
      }
    }
    for (var __s9local9 = 0; __s9local9 < __s9local2.length; __s9local9++) {
      this.scrollList.addItem(__s9local2[__s9local9]);
    }
    this.scrollList.show();
    this.scrollList.scrollToTop();
  };
  DifficultyScalingRewardOverviewDialogComplex.prototype.showLoaded = function (__s21param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s21param0);
    this.initScrollList();
    this.updateText();
    if (this.dialogProperties.singlePlayerLeagueVO) {
      this.selectTab(0);
    } else if (this.dialogProperties.alliancePlayerLeagueVO) {
      this.selectTab(1);
    }
  };
  DifficultyScalingRewardOverviewDialogComplex.prototype.hideLoaded = function (__s25param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s25param0);
    this.scrollList.hide();
    this.scrollList.destroy();
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list.mc_items);
  };
  DifficultyScalingRewardOverviewDialogComplex.prototype.selectTab = function (__s27param0) {
    this.dialogDisp.btn_tab2Selected.visible = false;
    this.dialogDisp.btn_tab2Unselected.visible = false;
    switch (__s27param0) {
      case 0:
        this.dialogDisp.btn_tab0Selected.visible = !!this.dialogProperties.singlePlayerLeagueVO;
        this.dialogDisp.btn_tab0Unselected.visible = false;
        this.dialogDisp.btn_tab1Unselected.visible = !!this.dialogProperties.alliancePlayerLeagueVO;
        this.dialogDisp.btn_tab1Selected.visible = false;
        this.updateContent(this.dialogProperties.singlePlayerLeagueVO, false);
        break;
      case 1:
        this.dialogDisp.btn_tab0Selected.visible = false;
        this.dialogDisp.btn_tab0Unselected.visible = !!this.dialogProperties.singlePlayerLeagueVO;
        this.dialogDisp.btn_tab1Unselected.visible = false;
        this.dialogDisp.btn_tab1Selected.visible = !!this.dialogProperties.alliancePlayerLeagueVO;
        this.updateContent(this.dialogProperties.alliancePlayerLeagueVO, true);
    }
  };
  DifficultyScalingRewardOverviewDialogComplex.prototype.updateText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_rewardOverview_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_difficultyScaling_eventRankingRewards_desc", [this.dialogProperties.difficultyVO ? this.dialogProperties.difficultyVO.name_textID : "dialog_difficultyScaling_confirmClassic_title"]));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab0Selected.txt_copy, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_playerRanking_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab0Unselected.txt_copy, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_playerRanking_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab1Selected.txt_copy, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_allianceRanking_desc")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab1Unselected.txt_copy, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_allianceRanking_desc")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab2Selected.txt_copy, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_extraRewards_desc")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab2Unselected.txt_copy, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_extraRewards_desc")));
  };
  DifficultyScalingRewardOverviewDialogComplex.prototype.onClick = function (__s32param0) {
    __s1param0.prototype.onClick.call(this, __s32param0);
    switch (__s32param0.target) {
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
  Object.defineProperty(DifficultyScalingRewardOverviewDialogComplex.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  DifficultyScalingRewardOverviewDialogComplex.NAME = "EventDifficultyRewardList2";
  return DifficultyScalingRewardOverviewDialogComplex;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.DifficultyScalingRewardOverviewDialogComplex = __s0local0;
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_DynamicSliderAccordionComponent = require("gge-module:export_DynamicSliderAccordionComponent");
var __dep_export_DifficultyScalingRewardDialogListItem = require("gge-module:export_DifficultyScalingRewardDialogListItem");
var __dep_export_DifficultyScalingRewardDialogListItemDoubleHeader = require("gge-module:export_DifficultyScalingRewardDialogListItemDoubleHeader");
var __dep_export_DifficultyScalingRewardDialogListItemSingleHeader = require("gge-module:export_DifficultyScalingRewardDialogListItemSingleHeader");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
