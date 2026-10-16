Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleEnum = require("gge-module:export_CastleEnum");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SeasonLeagueEvent = require("gge-module:export_SeasonLeagueEvent");
var __dep_export_AModernInfoCatalogDialogSublayer = require("gge-module:export_AModernInfoCatalogDialogSublayer");
var __dep_export_InfoCatalogTopicVO = require("gge-module:export_InfoCatalogTopicVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function SeasonLeagueMainDialogInfo(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueMainDialogInfo, __s1param0);
  SeasonLeagueMainDialogInfo.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.subLayerDisp.mc_promotion.mouseChildren = false;
    this.subLayerDisp.mc_rank.mouseChildren = false;
    this.subLayerDisp.mc_pass.mouseChildren = false;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.subLayerDisp.mc_passesActivated.btn_buy], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_infoSection_tab_tooltip"))).autoFitToBounds = true;
    this.subLayerDisp.mc_rank.toolTipText = "dialog_seasonLeague_divisionRanking_tooltip";
    this.subLayerDisp.mc_pass.toolTipText = "dialog_seasonLeague_infoSection_seasonPass_header";
    this.subLayerDisp.mc_passesActivated.btn_buy.toolTipText = "dialog_seasonLeague_infoSection_seasonPassPurchase_button";
    this.topics.init(this.getTopics(), SeasonLeagueMainDialogInfo.TOPIC_ASSET_CLIP_NAME, __dep_export_SeasonLeagueMainDialog.SeasonLeagueMainDialog.NAME, SeasonLeagueMainDialogInfo.TOPIC_MASK_HEIGHT);
    this.addPage(SeasonLeagueMainDialogInfo.PAGE_MEDALS, __dep_export_SeasonLeagueMainDialogInfoPageMedals.SeasonLeagueMainDialogInfoPageMedals, this.subLayerDisp.mc_pages.mc_pageMedals);
    this.addPage(SeasonLeagueMainDialogInfo.PAGE_PASS, __dep_export_SeasonLeagueMainDialogInfoPagePass.SeasonLeagueMainDialogInfoPagePass, this.subLayerDisp.mc_pages.mc_pagePass);
    this.addPage(SeasonLeagueMainDialogInfo.PAGE_TEXT, __dep_export_InfoCatalogPageScrollText.InfoCatalogPageScrollText, this.subLayerDisp.mc_pages.mc_pageText);
    this.addPage(SeasonLeagueMainDialogInfo.PAGE_PASSES, __dep_export_SeasonLeagueMainDialogInfoPagePasses.SeasonLeagueMainDialogInfoPagePasses, this.subLayerDisp.mc_pages.mc_pagePasses);
    this._promotionIcon = new __dep_export_SeasonLeaguePromotionIconComponent.SeasonLeaguePromotionIconComponent(this.subLayerDisp.mc_promotion.mc_icon, __dep_export_SeasonLeaguePromotionIconComponent.SeasonLeaguePromotionIconComponent.TYPE_NORMAL, new __s0local0(90, 90));
  };
  SeasonLeagueMainDialogInfo.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    this.controller.addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onPlayerRankUpdated));
    this.controller.addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onPlayerRankUpdated));
    this.updateTopInfos();
    __dep_export_CastleModel.CastleModel.seasonLeagueData.server.requestKLH();
  };
  SeasonLeagueMainDialogInfo.prototype.hide = function () {
    this.controller.removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onPlayerRankUpdated));
    this.controller.removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onPlayerRankUpdated));
    __s1param0.prototype.hide.call(this);
  };
  SeasonLeagueMainDialogInfo.prototype.onClick = function (__s11param0) {
    __s1param0.prototype.onClick.call(this, __s11param0);
    switch (__s11param0.target) {
      case this.subLayerDisp.mc_passesActivated.btn_buy:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_SeasonLeagueBuyPassesDialog.SeasonLeagueBuyPassesDialog, new __dep_export_SeasonLeagueBuyPassesDialogProperties.SeasonLeagueBuyPassesDialogProperties(true, true, -1, -1, __dep_export_CastleModel.CastleModel.seasonLeagueData.getCurrentPlayerPromotion().id + 1, -1, -1));
    }
  };
  SeasonLeagueMainDialogInfo.prototype.updateInfoPage = function (__s14param0, __s14param1) {
    switch (__s14param1.topicType) {
      case __dep_export_SeasonLeagueMainDialogInfoEnum.SeasonLeagueMainDialogInfoEnum.TOPIC_PASS_SEASON:
        __s14param0.update("season");
        break;
      case __dep_export_SeasonLeagueMainDialogInfoEnum.SeasonLeagueMainDialogInfoEnum.TOPIC_PASS_EVENT:
        __s14param0.update("event");
        break;
      case __dep_export_SeasonLeagueMainDialogInfoEnum.SeasonLeagueMainDialogInfoEnum.TOPIC_PASS_PROMOTION:
        __s14param0.update("promotion");
        break;
      case __dep_export_SeasonLeagueMainDialogInfoEnum.SeasonLeagueMainDialogInfoEnum.TOPIC_MEDALS:
      case __dep_export_SeasonLeagueMainDialogInfoEnum.SeasonLeagueMainDialogInfoEnum.TOPIC_PASS:
        __s14param0.update();
        break;
      default:
        __s14param0.fillContent("dialog_seasonLeague_infoSection_" + __s14param1.topicType.name + "_text_1", [__dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO().minLevel]);
    }
  };
  SeasonLeagueMainDialogInfo.prototype.updateTopInfos = function () {
    var __s17local0 = __dep_export_CastleModel.CastleModel.seasonLeagueData.getCurrentPlayerPromotion();
    this._promotionIcon.updateWithNewVO(__s17local0);
    this.subLayerDisp.mc_promotion.toolTipText = __s17local0.getNameTextId();
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_promotion.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s17local0.getNameTextId()))).autoFitToBounds = true;
    var __s17local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.seasonLeagueData.server.playerSeasonEventRank);
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_rank.txt_text, __s17local1 > 0 ? new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s17local1) : new __dep_exact_92d05af59ee2ff30.TextVO("-")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_pass.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_seasonLeague_infoSection_seasonPassActive_text")).autoFitToBounds = true;
    this.subLayerDisp.mc_pass.visible = __dep_export_CastleModel.CastleModel.seasonLeagueData.server.passSeasonActive;
    this.subLayerDisp.mc_passesActivated.visible = !__dep_export_CastleModel.CastleModel.seasonLeagueData.server.passSeasonActive;
    if (this.subLayerDisp.mc_passesActivated.visible) {
      this.subLayerDisp.mc_passesActivated.mc_eventActive.visible = __dep_export_CastleModel.CastleModel.seasonLeagueData.server.passEventActive;
      this.subLayerDisp.mc_passesActivated.mc_eventInactive.visible = !__dep_export_CastleModel.CastleModel.seasonLeagueData.server.passEventActive;
      var __s17local2 = false;
      var __s17local3 = "dialog_seasonLeague_infoSection_promotionPassInactive_text";
      if (__dep_export_CastleModel.CastleModel.seasonLeagueData.hasReachedHighestPromotion()) {
        __s17local2 = true;
        __s17local3 = "rewardPass_condition_topPromotion_desc";
      } else if (__dep_export_CastleModel.CastleModel.seasonLeagueData.server.amountOfBoughtPromoPasses > 1) {
        __s17local2 = true;
        __s17local3 = "dialog_seasonLeague_infoSection_promotionPassActiveMultiple_text";
      } else if (__s17local2 = __dep_export_CastleModel.CastleModel.seasonLeagueData.server.boughtPromoPassForPromoID(__dep_export_CastleModel.CastleModel.seasonLeagueData.getCurrentPlayerPromotion().id + 1)) {
        __s17local3 = "dialog_seasonLeague_infoSection_promotionPassActive_text";
      }
      this.subLayerDisp.mc_passesActivated.mc_promotionActive.visible = __s17local2;
      this.subLayerDisp.mc_passesActivated.mc_promotionInactive.visible = !__s17local2;
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_passesActivated.txt_event, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_export_CastleModel.CastleModel.seasonLeagueData.server.passEventActive ? "dialog_seasonLeague_infoSection_eventPassActive_text" : "dialog_seasonLeague_infoSection_eventPassInactive_text"));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_passesActivated.txt_promotion, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s17local3, [__dep_export_CastleModel.CastleModel.seasonLeagueData.server.amountOfBoughtPromoPasses]));
    }
  };
  SeasonLeagueMainDialogInfo.prototype.getTopics = function () {
    var __s23local0 = [];
    for (var __s23local1 = 0, __s23local2 = __dep_export_CastleEnum.CastleEnum.getEnumListByClass(__dep_export_SeasonLeagueMainDialogInfoEnum.SeasonLeagueMainDialogInfoEnum); __s23local1 < __s23local2.length; __s23local1++) {
      var __s23local3 = __s23local2[__s23local1];
      __s23local0.push(new __dep_export_InfoCatalogTopicVO.InfoCatalogTopicVO(__s23local3, "dialog_seasonLeague_infoSection_" + __s23local3.name + "_header"));
    }
    return __s23local0;
  };
  SeasonLeagueMainDialogInfo.prototype.onPlayerRankUpdated = function (__s27param0) {
    this.updateTopInfos();
  };
  SeasonLeagueMainDialogInfo.TOPIC_ASSET_CLIP_NAME = "SeasonLeagueMain_Info_Topic_Item";
  SeasonLeagueMainDialogInfo.TOPIC_MASK_HEIGHT = 332;
  SeasonLeagueMainDialogInfo.PAGE_MEDALS = "pageMedals";
  SeasonLeagueMainDialogInfo.PAGE_PASS = "pagePass";
  SeasonLeagueMainDialogInfo.PAGE_TEXT = "pageText";
  SeasonLeagueMainDialogInfo.PAGE_PASSES = "pagePasses";
  return SeasonLeagueMainDialogInfo;
}(__dep_export_AModernInfoCatalogDialogSublayer.AModernInfoCatalogDialogSublayer);
exports.SeasonLeagueMainDialogInfo = __s0local1;
var __dep_export_InfoCatalogPageScrollText = require("gge-module:export_InfoCatalogPageScrollText");
var __dep_export_SeasonLeaguePromotionIconComponent = require("gge-module:export_SeasonLeaguePromotionIconComponent");
var __dep_export_SeasonLeagueMainDialogInfoEnum = require("gge-module:export_SeasonLeagueMainDialogInfoEnum");
var __dep_export_SeasonLeagueMainDialogInfoPageMedals = require("gge-module:export_SeasonLeagueMainDialogInfoPageMedals");
var __dep_export_SeasonLeagueMainDialogInfoPagePass = require("gge-module:export_SeasonLeagueMainDialogInfoPagePass");
var __dep_export_SeasonLeagueMainDialog = require("gge-module:export_SeasonLeagueMainDialog");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_SeasonLeagueBuyPassesDialog = require("gge-module:export_SeasonLeagueBuyPassesDialog");
var __dep_export_SeasonLeagueMainDialogInfoPagePasses = require("gge-module:export_SeasonLeagueMainDialogInfoPagePasses");
var __dep_export_SeasonLeagueBuyPassesDialogProperties = require("gge-module:export_SeasonLeagueBuyPassesDialogProperties");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "ISublayer");
