Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_C2STemporaryServerHighscoreVO = require("gge-module:export_C2STemporaryServerHighscoreVO");
var __dep_export_CastleHighscoreEvent = require("gge-module:export_CastleHighscoreEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_TempServerHelper = require("gge-module:export_TempServerHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_TempServerConfigurationVO = require("gge-module:export_TempServerConfigurationVO");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __s0local0 = function (__s1param0) {
  function CastleTemporaryServerEventDialogScoring(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTemporaryServerEventDialogScoring, __s1param0);
  CastleTemporaryServerEventDialogScoring.prototype.init = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_scoring_title")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_scoring_header_" + this.eventVO.settingVO.scoringSystem)));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_overall_ranking, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_scoring_overallRankingPoints")));
    this._textScrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.subLayerDisp.mc_descSlider).addMouseWheelElements([this.subLayerDisp.txt_copy]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, 0), true);
  };
  CastleTemporaryServerEventDialogScoring.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    this._textScrollComponent.onScrollSignal.add(this.bindFunction(this.onDescriptionScroll));
    this._textScrollComponent.show();
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_Collector.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_scoring_collector")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_rankSwap.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_scoring_rankSwap")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_Might.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_scoring_might")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_charge_points.txt_points1_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_scoring_tier_charge")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_charge_points.txt_points2_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_scoring_tonic_charge")));
    this.updateDescription();
    this.controller.addEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.TEMPORARY_SERVER_HIGHSCORE, this.bindFunction(this.onPointsChanged));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_MIGHT, this.bindFunction(this.onChangeMight));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2STemporaryServerHighscoreVO.C2STemporaryServerHighscoreVO());
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_teaser);
    this.subLayerDisp.mc_teaser.addChild(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("TempServerScoringTeaser_" + this.eventVO.settingVO.scoringSystem, __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__dep_export_CastleTemporaryServerEventDialog.CastleTemporaryServerEventDialog.NAME), null, 0, false));
    this.setupScoreField();
  };
  CastleTemporaryServerEventDialogScoring.prototype.setupScoreField = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_daily_ranking, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_scoring_dailyRankingPoints")));
    this.subLayerDisp.mc_overall_up.visible = false;
    this.subLayerDisp.mc_Might.visible = this.eventVO.isMightScoring && __dep_export_TempServerHelper.TempServerHelper.isOnTempServer;
    this.subLayerDisp.mc_Collector.visible = this.eventVO.isCollectorScoring && __dep_export_TempServerHelper.TempServerHelper.isOnTempServer;
    this.subLayerDisp.mc_rankSwap.visible = this.eventVO.isRankSwapScoring && __dep_export_TempServerHelper.TempServerHelper.isOnTempServer;
    this.subLayerDisp.mc_charge_points.visible = false;
    this.subLayerDisp.mc_mainserver.visible = !__dep_export_TempServerHelper.TempServerHelper.isOnTempServer;
    this.subLayerDisp.mc_charge_mainserver.visible = false;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_mainserver.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tempServer_scoring_mainServer"));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_charge_mainserver.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tempServer_scoring_mainServer"));
    if (__dep_export_TempServerHelper.TempServerHelper.isOnTempServer) {
      switch (this.eventVO.settingVO.scoringSystem) {
        case __dep_export_TempServerConfigurationVO.TempServerConfigurationVO.SCORING_SYSTEM_MIGHT:
          this.textFieldManager.registerTextField(this.subLayerDisp.mc_Might.txt_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.mightData.userCurrentBuildingMight));
          break;
        case __dep_export_TempServerConfigurationVO.TempServerConfigurationVO.SCORING_SYSTEM_COLLECTOR:
          this.textFieldManager.registerTextField(this.subLayerDisp.mc_Collector.txt_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.currencyData.getAmountByKey("HE")));
          break;
        case __dep_export_TempServerConfigurationVO.TempServerConfigurationVO.SCORING_SYSTEM_RANK_SWAP:
          this.textFieldManager.registerTextField(this.subLayerDisp.mc_rankSwap.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tempServer_scoring_rankSwap_range", [1, this.eventVO.ownDailyRank]));
      }
    }
  };
  CastleTemporaryServerEventDialogScoring.prototype.onChangeMight = function (__s13param0 = null) {
    this.setupScoreField();
  };
  CastleTemporaryServerEventDialogScoring.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._textScrollComponent.onScrollSignal.remove(this.bindFunction(this.onDescriptionScroll));
    this._textScrollComponent.hide();
    this.controller.removeEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.TEMPORARY_SERVER_HIGHSCORE, this.bindFunction(this.onPointsChanged));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_MIGHT, this.bindFunction(this.onChangeMight));
  };
  CastleTemporaryServerEventDialogScoring.prototype.onPointsChanged = function (__s17param0) {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_daily_ranking_amount, this.castleEnv.isOnTemporaryServer ? new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.tempServerData.getDailyRankPointsByRank(this.eventVO.ownDailyRank)) : new __dep_exact_92d05af59ee2ff30.TextVO(" "));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_overall_ranking_amount, this.castleEnv.isOnTemporaryServer ? new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.eventVO.ownOverallPoints) : new __dep_exact_92d05af59ee2ff30.TextVO(" "));
  };
  CastleTemporaryServerEventDialogScoring.prototype.updateDescription = function () {
    this._tfDesc = this.textFieldManager.registerTextField(this.subLayerDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tempServer_scoring_desc_" + this.eventVO.settingVO.scoringSystem));
    var __s19local0 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstUtils.ClientConstUtils.isTlfMode ? 20 : 1);
    this._textScrollComponent.init(1, this._tfDesc.maxScrollV, __s19local0, __s19local0);
    this._textScrollComponent.setVisibility(this._tfDesc.maxScrollV > 1);
    this._textScrollComponent.scrollToPercent(0);
  };
  Object.defineProperty(CastleTemporaryServerEventDialogScoring.prototype, "eventVO", {
    get: function () {
      return __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent;
    },
    enumerable: true,
    configurable: true
  });
  CastleTemporaryServerEventDialogScoring.prototype.onDescriptionScroll = function () {
    this._tfDesc.scrollV = __dep_exact_9e901e8e2483a22f_1.MathBase.clamp(this._textScrollComponent.currentValue, 1, this._tfDesc.maxScrollV);
  };
  return CastleTemporaryServerEventDialogScoring;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleTemporaryServerEventDialogScoring = __s0local0;
var __dep_export_CastleTemporaryServerEventDialog = require("gge-module:export_CastleTemporaryServerEventDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
