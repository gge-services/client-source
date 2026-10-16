Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SeasonLeagueEvent = require("gge-module:export_SeasonLeagueEvent");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function SeasonLeagueMainDialogInfoPagePass(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueMainDialogInfoPagePass, __s1param0);
  SeasonLeagueMainDialogInfoPagePass.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.disp.btn_buy, -1, __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    this.disp.mc_time.mouseChildren = false;
    this.disp.mc_cost.mouseChildren = false;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.btn_buy.txt_text, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_infoSection_seasonPassPurchase_button"))).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_seasonLeague_infoSection_seasonPass_text_1")).autoFitToBounds = true;
    this.disp.mc_time.toolTipText = "dialog_seasonLeague_infoSection_seasonPassTime_tooltip";
    this.disp.mc_cost.toolTipText = "costs";
  };
  SeasonLeagueMainDialogInfoPagePass.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onSeasonInfoUpdated));
  };
  SeasonLeagueMainDialogInfoPagePass.prototype.removeEventListener = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onSeasonInfoUpdated));
    __s1param0.prototype.removeEventListener.call(this);
  };
  SeasonLeagueMainDialogInfoPagePass.prototype.update = function () {
    this.updateCost();
    this.updateTimer();
    this.updateButton();
  };
  SeasonLeagueMainDialogInfoPagePass.prototype.updateCost = function () {
    var __s13local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PRIME_SALES_KINGDOM_LEAGUE_PASS), "SeasonPassPrimeSaleEventVO");
    var __s13local1 = __s13local0 != null;
    var __s13local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.seasonLeagueData.getCurrentSeasonPassCostWithSale());
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_cost.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s13local2)).autoFitToBounds = true;
    this.disp.mc_sale.visible = __s13local1;
    if (__s13local1) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_sale.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_percentage_subtract", [__s13local0.discount])).autoFitToBounds = true;
    }
  };
  SeasonLeagueMainDialogInfoPagePass.prototype.updateTimer = function () {
    var __s16local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_KINGDOMS_LEAGUE);
    var __s16local1 = __dep_exact_f855840627e6e145.int(__s16local0 ? __s16local0.remainingEventTimeInSeconds : -1);
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.disp.mc_time.txt_text, __s16local1);
  };
  SeasonLeagueMainDialogInfoPagePass.prototype.updateButton = function () {
    var __s18local0 = !__dep_export_CastleModel.CastleModel.seasonLeagueData.server.passSeasonActive;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_buy, __s18local0);
    this.disp.btn_buy.toolTipText = __s18local0 ? "" : "dialog_seasonLeague_infoSection_seasonPassPurchase_tooltip";
  };
  SeasonLeagueMainDialogInfoPagePass.prototype.onClick = function (__s20param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s20param0.target)) {
      __s1param0.prototype.onClick.call(this, __s20param0);
      switch (__s20param0.target) {
        case this.disp.btn_buy:
          __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_SeasonLeagueBuyPassesDialog.SeasonLeagueBuyPassesDialog, new __dep_export_SeasonLeagueBuyPassesDialogProperties.SeasonLeagueBuyPassesDialogProperties());
      }
    }
  };
  SeasonLeagueMainDialogInfoPagePass.prototype.onTickEvent = function (__s24param0) {
    this.updateTimer();
    this.updateCost();
  };
  SeasonLeagueMainDialogInfoPagePass.prototype.onRefreshSpecialEvent = function (__s26param0) {
    this.updateCost();
  };
  SeasonLeagueMainDialogInfoPagePass.prototype.onSeasonInfoUpdated = function (__s28param0) {
    this.updateButton();
  };
  return SeasonLeagueMainDialogInfoPagePass;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.SeasonLeagueMainDialogInfoPagePass = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
var __dep_export_SeasonLeagueBuyPassesDialog = require("gge-module:export_SeasonLeagueBuyPassesDialog");
var __dep_export_SeasonLeagueBuyPassesDialogProperties = require("gge-module:export_SeasonLeagueBuyPassesDialogProperties");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
