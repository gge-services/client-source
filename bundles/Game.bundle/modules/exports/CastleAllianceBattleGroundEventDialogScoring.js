Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_C2SAllianceBattleGroundGetOwnRanksVO = require("gge-module:export_C2SAllianceBattleGroundGetOwnRanksVO");
var __dep_export_CastleHighscoreEvent = require("gge-module:export_CastleHighscoreEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceBattleGroundScoringVO = require("gge-module:export_AllianceBattleGroundScoringVO");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceBattleGroundEventDialogScoring(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.init();
    __s3local0.mainDialog = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBattleGroundEventDialogScoring, __s1param0);
  CastleAllianceBattleGroundEventDialogScoring.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.subLayerDisp.btn_tower, this.subLayerDisp.btn_help], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_main_journey_title_" + this.scoringName)));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_main_journey_subtitle_" + this.scoringName)));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_Landmark.txt_alliRanking, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("allianceRank")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_Landmark.txt_points, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("currency_name_Influence")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_Landmark.txt_alliPoints, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("currency_name_AllianceInfluence")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_tower.txt_alliRanking, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("allianceRank")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_tower.txt_points, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("stats_contributeAllianceStatuette")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_tower.txt_alliPoints, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("currency_name_AllianceStatuette")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_tower.txt_malus, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("currency_name_StatuetteMalus")));
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_help.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("moreInfo")));
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_tower.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_main_AllianceTower_overview_title")));
    this.subLayerDisp.txt_copy.mouseEnabled = true;
    this._textScrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.subLayerDisp.mc_descSlider).addMouseWheelElements([this.subLayerDisp.txt_copy]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, 0), true);
  };
  CastleAllianceBattleGroundEventDialogScoring.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    this._textScrollComponent.onScrollSignal.add(this.bindFunction(this.onDescriptionScroll));
    this._textScrollComponent.show();
    this.subLayerDisp.btn_tower.visible = __dep_export_ABGHelper.ABGHelper.isOnABGAndTower;
    this.updateDescription();
    this.onPointsChanged();
    this.controller.addEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.ALLIANCE_BATTLEGROUND_SERVER_HIGHSCORE, this.bindFunction(this.onPointsChanged));
    if (__dep_export_ABGHelper.ABGHelper.isOnABGServer) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceBattleGroundGetOwnRanksVO.C2SAllianceBattleGroundGetOwnRanksVO(__dep_export_CastleModel.CastleModel.userData.allianceID));
    }
    __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_teaser);
    this.subLayerDisp.mc_teaser.addChild(new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("AllianceBattleGroundScoringTeaser_" + this.scoringName, __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__dep_export_CastleAllianceBattleGroundEventDialog.CastleAllianceBattleGroundEventDialog.NAME), null, 0, false));
    this.setupScoreField();
  };
  CastleAllianceBattleGroundEventDialogScoring.prototype.onClick = function (__s10param0) {
    __s1param0.prototype.onClick.call(this, __s10param0);
    switch (__s10param0.target) {
      case this.subLayerDisp.btn_help:
        __dep_exact_9e901e8e2483a22f_1.BasicDialogHandler.getInstance().registerDialogs(__dep_export_CastleAllianceBattlegroundStartDialog.CastleAllianceBattlegroundStartDialog);
        break;
      case this.subLayerDisp.btn_tower:
        this.mainDialog.setCategory(__dep_export_CastleAllianceBattleGroundEventDialog.CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_TOWER);
    }
  };
  CastleAllianceBattleGroundEventDialogScoring.prototype.setupScoreField = function () {
    this.subLayerDisp.mc_Landmark.visible = __dep_export_ABGHelper.ABGHelper.isOnABGAndCollector;
    this.subLayerDisp.mc_tower.visible = __dep_export_ABGHelper.ABGHelper.isOnABGAndTower;
    this.subLayerDisp.mc_mainserver.visible = !__dep_export_ABGHelper.ABGHelper.isOnABGServer;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_mainserver.txt_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_beyondTheHorizon_main_journey_AllianceCollector_hiddenProgress"));
    if (__dep_export_ABGHelper.ABGHelper.isOnABGServer) {
      var __s13local0 = __dep_exact_f855840627e6e145.int(__dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.currencyID);
      var __s13local1 = __dep_exact_f855840627e6e145.int(__dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.allianceCurrencyID);
      var __s13local2 = __dep_exact_f855840627e6e145.int(__dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.malusCurrencyID);
      var __s13local3 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.currencyData.getAmountByType(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __s13local0)));
      var __s13local4 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.storage.getItemByTypeVO(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __s13local1));
      var __s13local5 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.storage.getItemByTypeVO(new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __s13local2));
      switch (this.scoringName) {
        case __dep_export_AllianceBattleGroundScoringVO.AllianceBattleGroundScoringVO.SCORING_SYSTEM_ALLIANCE_COLLECTOR:
          this.textFieldManager.registerTextField(this.subLayerDisp.mc_Landmark.txt_points_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s13local3));
          this.textFieldManager.registerTextField(this.subLayerDisp.mc_Landmark.txt_alliPoints_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s13local4 ? __s13local4.amount : 0));
          break;
        case __dep_export_AllianceBattleGroundScoringVO.AllianceBattleGroundScoringVO.SCORING_SYSTEM_ALLIANCE_TOWER:
          this.textFieldManager.registerTextField(this.subLayerDisp.mc_tower.txt_points_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s13local3));
          this.textFieldManager.registerTextField(this.subLayerDisp.mc_tower.txt_alliPoints_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s13local4 ? __s13local4.amount : 0));
          var __s13local6 = __s13local5 ? __s13local5.amount : 0;
          if (__s13local6 == 0) {
            this.textFieldManager.registerTextField(this.subLayerDisp.mc_tower.txt_malus_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_5.GenericTextIds.VALUE_PERCENTAGE, [__s13local6])).color = 15974986;
          } else {
            this.textFieldManager.registerTextField(this.subLayerDisp.mc_tower.txt_malus_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_5.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [__s13local6])).color = __dep_export_ClientConstColor.ClientConstColor.MODERN_RED2;
          }
      }
    }
  };
  CastleAllianceBattleGroundEventDialogScoring.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._textScrollComponent.onScrollSignal.remove(this.bindFunction(this.onDescriptionScroll));
    this._textScrollComponent.hide();
    this.controller.removeEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.ALLIANCE_BATTLEGROUND_SERVER_HIGHSCORE, this.bindFunction(this.onPointsChanged));
  };
  CastleAllianceBattleGroundEventDialogScoring.prototype.onPointsChanged = function (__s21param0 = null) {
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_Landmark.txt_alliRanking_value, __dep_export_ABGHelper.ABGHelper.isOnABGServer ? new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__dep_export_ABGHelper.ABGHelper.abgEvent.ownAllianceRank) : new __dep_exact_92d05af59ee2ff30.TextVO(" "));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_tower.txt_alliRanking_value, __dep_export_ABGHelper.ABGHelper.isOnABGServer ? new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__dep_export_ABGHelper.ABGHelper.abgEvent.ownAllianceRank) : new __dep_exact_92d05af59ee2ff30.TextVO(" "));
  };
  CastleAllianceBattleGroundEventDialogScoring.prototype.updateDescription = function () {
    this._tfDesc = this.textFieldManager.registerTextField(this.subLayerDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_beyondTheHorizon_main_journey_desc_" + this.scoringName));
    var __s23local0 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstUtils.ClientConstUtils.isTlfMode ? 20 : 1);
    this._textScrollComponent.init(1, Math.ceil(this._tfDesc.maxScrollV), __s23local0, __s23local0);
    this._textScrollComponent.setVisibility(this._tfDesc.maxScrollV > 1);
    this._textScrollComponent.scrollToPercent(0);
  };
  Object.defineProperty(CastleAllianceBattleGroundEventDialogScoring.prototype, "scoringName", {
    get: function () {
      return __dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.scoringSystemVO.scoring;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattleGroundEventDialogScoring.prototype.onDescriptionScroll = function () {
    this._tfDesc.scrollV = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this._textScrollComponent.currentValue, 1, this._tfDesc.maxScrollV);
  };
  Object.defineProperty(CastleAllianceBattleGroundEventDialogScoring.prototype, "castleEnv_0", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceBattleGroundEventDialogScoring;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleAllianceBattleGroundEventDialogScoring = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_CastleAllianceBattleGroundEventDialog = require("gge-module:export_CastleAllianceBattleGroundEventDialog");
var __dep_export_CastleAllianceBattlegroundStartDialog = require("gge-module:export_CastleAllianceBattlegroundStartDialog");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
