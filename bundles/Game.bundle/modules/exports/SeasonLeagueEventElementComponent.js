Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SeasonLeagueEvent = require("gge-module:export_SeasonLeagueEvent");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function SeasonLeagueEventElementComponent(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._eventId = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._eventId = __s3param1;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueEventElementComponent, __s1param0);
  SeasonLeagueEventElementComponent.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.disp.btn_showMe, -1, __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.btn_showMe.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_eventInterface_showMe_text"))).autoFitToBounds = true;
    this.disp.btn_showMe.toolTipText = "dialog_seasonLeague_eventInterface_showMe_text";
    if (this.disp.txt_title) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_faction_seasonLeague_header")).autoFitToBounds = true;
    }
    this.disp.mc_rank.mouseChildren = false;
  };
  SeasonLeagueEventElementComponent.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    if (__dep_export_CastleModel.CastleModel.seasonLeagueData.isSeasonLeagueActive() && __dep_export_CastleModel.CastleModel.seasonLeagueData.isAnySeasonEventActive()) {
      __dep_export_CastleModel.CastleModel.seasonLeagueData.server.requestKLH();
    }
    this.update();
  };
  SeasonLeagueEventElementComponent.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onPlayerRankUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
  };
  SeasonLeagueEventElementComponent.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onPlayerRankUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
  };
  SeasonLeagueEventElementComponent.prototype.update = function () {
    var __s15local0 = __dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonEventVO();
    this.disp.visible = __s15local0 && __s15local0.eventId == this.eventId;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_showMe, __dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO() != null);
    var __s15local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.seasonLeagueData.server.playerSeasonEventRank);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_rank.txt_text, __s15local1 > 0 ? new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s15local1) : new __dep_exact_92d05af59ee2ff30.TextVO("-")).autoFitToBounds = true;
    this.disp.mc_rank.toolTipText = __s15local1 > 0 ? "dialog_seasonLeague_divisionRanking_tooltip" : "dialog_seasonLeague_divisionRankingNoMatch_tooltip";
  };
  SeasonLeagueEventElementComponent.prototype.onClick = function (__s17param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s17param0.target)) {
      __s1param0.prototype.onClick.call(this, __s17param0);
      switch (__s17param0.target) {
        case this.disp.btn_showMe:
          __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_SeasonLeagueMainDialog.SeasonLeagueMainDialog);
      }
    }
  };
  SeasonLeagueEventElementComponent.prototype.onPlayerRankUpdated = function (__s21param0) {
    this.update();
  };
  SeasonLeagueEventElementComponent.prototype.onRefreshSpecialEvent = function (__s23param0) {
    this.update();
  };
  Object.defineProperty(SeasonLeagueEventElementComponent.prototype, "eventId", {
    get: function () {
      return this._eventId;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueEventElementComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.SeasonLeagueEventElementComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_SeasonLeagueMainDialog = require("gge-module:export_SeasonLeagueMainDialog");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
