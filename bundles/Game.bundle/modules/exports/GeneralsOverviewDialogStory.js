Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_GeneralsEvent = require("gge-module:export_GeneralsEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_ClickFeedBackHoverSliderButton = require("gge-module:export_ClickFeedBackHoverSliderButton");
var __dep_export_GeneralsHelper = require("gge-module:export_GeneralsHelper");
var __s0local0 = function (__s1param0) {
  function GeneralsOverviewDialogStory(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._scrollY = 0;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.subLayerDisp.btn_slider], __dep_export_ClickFeedBackHoverSliderButton.ClickFeedBackHoverSliderButton, 1);
    __s3local0._itxt_name = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s3local0._itxt_name_subtitle = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.txt_subtitle, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_content.mc_stats.txt_starlevel, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_generals_overview_starLevel_desc"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_content.mc_stats.txt_rarity, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_generals_overview_rarity_desc"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_content.mc_stats.txt_stat1, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_generals_overview_experience_desc"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_content.mc_stats.txt_stat2, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_generals_overview_battlesWon_desc"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_content.mc_stats.txt_stat3, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_generals_overview_battlesLost_desc"));
    __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_content.mc_story.txt_storyTitle, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_generals_overview_story_header"));
    __s3local0._itxt_rarity = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_content.mc_stats.txt_rarityVal, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
    __s3local0._itxt_stat1 = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_content.mc_stats.txt_stat1Val, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    __s3local0._itxt_stat2 = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_content.mc_stats.txt_stat2Val, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    __s3local0._itxt_stat3 = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_content.mc_stats.txt_stat3Val, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    __s3local0._itxt_story = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_content.mc_story.txt_story, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
    __s3local0._itxt_rarity.autoFitToBounds = true;
    __s3local0.originialYDivider = __s3local0.subLayerDisp.mc_divider.y;
    __s3local0.originialYSliderline = __s3local0.subLayerDisp.mc_sliderLine.y;
    __s3local0.originalHeightSliderLine = __s3local0.subLayerDisp.mc_sliderLine.height;
    var __s3local1 = new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(__s3local0.subLayerDisp).addMouseWheelElements([__s3local0.subLayerDisp.parent]);
    var __s3local2 = new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(false, __s3local0.subLayerDisp.mc_content.mask.height, true);
    __s3local0._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(__s3local1, __s3local2);
    __s3local0._scrollY = __s3local0.subLayerDisp.mc_content.y;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralsOverviewDialogStory, __s1param0);
  GeneralsOverviewDialogStory.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.updateElements();
    var __s5local0 = Math.max(0, Math.max(0, this.subLayerDisp.mc_content.height + 10 - this.subLayerDisp.mc_content.mask.height));
    this._scrollComponent.init(0, __s5local0, 40, 40);
    this._scrollComponent.scrollToValue(0);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    __dep_export_CastleModel.CastleModel.generalsData.addEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
  };
  GeneralsOverviewDialogStory.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._scrollComponent.scrollToValue(0);
    this._scrollComponent.hide();
    __dep_export_CastleModel.CastleModel.generalsData.removeEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
  };
  GeneralsOverviewDialogStory.prototype.updateElements = function () {
    __dep_export_GeneralsHelper.GeneralsHelper.updateStarLevel(this.subLayerDisp.mc_content.mc_stats, this.sublayerProperties.generalVO);
    if (this.sublayerProperties.generalVO.isNPCGeneral) {
      this._itxt_name.textContentVO.stringValue = this.sublayerProperties.generalVO.nameTextShort;
      this._itxt_name_subtitle.textContentVO.stringValue = this.sublayerProperties.generalVO.nameSubtitleText;
    } else {
      this._itxt_name.textContentVO.stringValue = this.sublayerProperties.generalVO.nameText;
    }
    this._itxt_name.autoFitToBounds = true;
    this._itxt_rarity.textContentVO.textId = this.sublayerProperties.generalVO.rarityTextID;
    this._itxt_stat1.textContentVO.numberValue = this.sublayerProperties.generalVO.currentXP;
    this._itxt_stat2.textContentVO.numberValue = this.sublayerProperties.generalVO.won;
    this._itxt_stat3.textContentVO.numberValue = this.sublayerProperties.generalVO.lost;
    this.subLayerDisp.mc_content.mc_stats.visible = this.sublayerProperties.generalVO.isUnlocked;
    this.subLayerDisp.mc_content.mc_story.y = this.sublayerProperties.generalVO.isUnlocked ? this.subLayerDisp.mc_content.mc_stats.height : 0;
    this._itxt_story.height = 9999;
    this._itxt_story.textContentVO.textId = this.sublayerProperties.generalVO.storyTextID;
    this._itxt_story.height = this._itxt_story.textHeight;
    this._itxt_rarity.color = this.sublayerProperties.generalVO.rarityTextColor;
  };
  GeneralsOverviewDialogStory.prototype.onGeneralsUpdated = function (__s13param0) {
    this.updateElements();
  };
  GeneralsOverviewDialogStory.prototype.onScroll = function () {
    this.subLayerDisp.mc_content.y = this._scrollY - this._scrollComponent.currentValue;
  };
  Object.defineProperty(GeneralsOverviewDialogStory.prototype, "sublayerProperties", {
    get: function () {
      return this._params;
    },
    enumerable: true,
    configurable: true
  });
  return GeneralsOverviewDialogStory;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.GeneralsOverviewDialogStory = __s0local0;
