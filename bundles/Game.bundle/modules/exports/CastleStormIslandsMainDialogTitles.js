Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleStormIslandsMainDialog = require("gge-module:export_CastleStormIslandsMainDialog");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_DynamicSliderAccordionComponent = require("gge-module:export_DynamicSliderAccordionComponent");
var __dep_export_AccordionComponentProperties = require("gge-module:export_AccordionComponentProperties");
var __dep_export_ACollapsibleItem = require("gge-module:export_ACollapsibleItem");
var __dep_export_CastleStormIslandsMainDialogTitlesItem = require("gge-module:export_CastleStormIslandsMainDialogTitlesItem");
var __dep_export_GenericCollapsibleItemProperties = require("gge-module:export_GenericCollapsibleItemProperties");
var __dep_export_LayoutMargin = require("gge-module:export_LayoutMargin");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstTitle = require("gge-module:export_ClientConstTitle");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __s0local0 = function (__s1param0) {
  function CastleStormIslandsMainDialogTitles(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.mainDialog = __s3param1;
    __s3local0._collapsibleProperties = new __dep_export_GenericCollapsibleItemProperties.GenericCollapsibleItemProperties(new __dep_export_LayoutMargin.LayoutMargin(0, 4, 0, 0));
    var __s3local1 = new __dep_export_AccordionComponentProperties.AccordionComponentProperties();
    __s3local1.onlyOneActiveItem = false;
    __s3local1.scrollStrategy = __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical;
    __s3local1.scrollDuration = 0.1;
    __s3local1.scrollStepPixels = 100;
    __s3local1.disableButtons = true;
    __s3local0._accordionComponent = new __dep_export_DynamicSliderAccordionComponent.DynamicSliderAccordionComponent(__s3local0.subLayerDisp.mc_list, __s3local1);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStormIslandsMainDialogTitles, __s1param0);
  CastleStormIslandsMainDialogTitles.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.subLayerDisp.btn_performanceAlliance.actLikeButton = true;
    this.subLayerDisp.btn_performancePlayer.actLikeButton = true;
    this.subLayerDisp.btn_titles.actLikeButton = true;
    this.subLayerDisp.btn_performanceAlliance.gotoAndStop(1);
    this.subLayerDisp.btn_performancePlayer.gotoAndStop(1);
    this.subLayerDisp.btn_titles.gotoAndStop(2);
    this.subLayerDisp.btn_performanceAlliance.mouseChildren = false;
    this.subLayerDisp.btn_performancePlayer.mouseChildren = false;
    this.subLayerDisp.btn_titles.mouseChildren = false;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_performanceAlliance.txt_text1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("alliancePerformance"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_performancePlayer.txt_text1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("myPerformance"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_titles.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_stormTitles_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_island_main_stormTitles_desc"));
    this._accordionComponent.clear();
    this.addWarning();
    this.addTitles();
    this._accordionComponent.show();
  };
  CastleStormIslandsMainDialogTitles.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._accordionComponent.hide();
  };
  CastleStormIslandsMainDialogTitles.prototype.addWarning = function () {
    var __s9local0 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("CastleStormIslandsMainTitles_Warning"))();
    var __s9local1 = new __dep_export_ACollapsibleItem.ACollapsibleItem(__s9local0, this._collapsibleProperties);
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
      if (__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.currentIslandRank != 1) {
        if (__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.isIslandKing) {
          this.textFieldManager.registerTextField(__s9local0.headerMC.txt_warning, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_island_main_stormTitles_notQualified_titleLoss_desc"));
        } else {
          this.textFieldManager.registerTextField(__s9local0.headerMC.txt_warning, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_island_main_stormTitles_notQualified_desc"));
        }
        this._accordionComponent.addItem(__s9local1);
      } else if (__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.currentIslandRank == 1 && __dep_export_CastleModel.CastleModel.userData.aquaPoints <= 0) {
        this.textFieldManager.registerTextField(__s9local0.headerMC.txt_warning, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_island_main_stormTitles_notQualified_titleLossPlayer_desc"));
        this._accordionComponent.addItem(__s9local1);
      }
    } else {
      this.textFieldManager.registerTextField(__s9local0.headerMC.txt_warning, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_island_main_stormTitles_notQualified_noAlliance_desc"));
      this._accordionComponent.addItem(__s9local1);
    }
  };
  CastleStormIslandsMainDialogTitles.prototype.addTitles = function () {
    var __s17local0 = __dep_exact_81dacdf05bd32292_1.getDefinitionByName("CastleStormIslandsMainTitles_Item");
    var __s17local1 = __dep_export_CastleModel.CastleModel.titleData.getTitlesFromSystem(__dep_export_ClientConstTitle.ClientConstTitle.ISLAND_TITLE);
    for (var __s17local2 = __s17local1.length - 1; __s17local2 >= 0; __s17local2--) {
      var __s17local3 = __s17local1[__s17local2];
      var __s17local4 = new __s17local0();
      var __s17local5 = new __dep_export_CastleStormIslandsMainDialogTitlesItem.CastleStormIslandsMainDialogTitlesItem(__s17local4, __s17local3, this._collapsibleProperties);
      this._accordionComponent.addItem(__s17local5);
    }
  };
  CastleStormIslandsMainDialogTitles.prototype.onClick = function (__s21param0) {
    __s1param0.prototype.onClick.call(this, __s21param0);
    switch (__s21param0.target) {
      case this.subLayerDisp.btn_performanceAlliance:
        this.mainDialog.setCategory(__dep_export_CastleStormIslandsMainDialog.CastleStormIslandsMainDialog.TAB_PERFORMANCE_ALLIANCE);
        break;
      case this.subLayerDisp.btn_performancePlayer:
        this.mainDialog.setCategory(__dep_export_CastleStormIslandsMainDialog.CastleStormIslandsMainDialog.TAB_PERFORMANCE_PLAYER);
        break;
      case this.subLayerDisp.btn_titles:
        this.mainDialog.setCategory(__dep_export_CastleStormIslandsMainDialog.CastleStormIslandsMainDialog.TAB_TITLES);
    }
  };
  return CastleStormIslandsMainDialogTitles;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleStormIslandsMainDialogTitles = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
