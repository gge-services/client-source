Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function SeasonLeagueMainDialog() {
    return __s1param0.call(this, SeasonLeagueMainDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueMainDialog, __s1param0);
  SeasonLeagueMainDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_eventRank, this.dialogDisp.btn_tab_promotion, this.dialogDisp.btn_tab_seasonRank, this.dialogDisp.btn_tab_info]);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this._subLayer = new Map();
    this._subLayer.set(SeasonLeagueMainDialog.TAB_EVENT_RANK, new __dep_export_SeasonLeagueMainDialogEventRank.SeasonLeagueMainDialogEventRank(this.dialogDisp.tab_eventRank));
    this._subLayer.set(SeasonLeagueMainDialog.TAB_PROMOTION, new __dep_export_SeasonLeagueMainDialogPromotion.SeasonLeagueMainDialogPromotion(this.dialogDisp.tab_promotion));
    this._subLayer.set(SeasonLeagueMainDialog.TAB_SEASON_RANK, new __dep_export_SeasonLeagueMainDialogSeasonRank.SeasonLeagueMainDialogSeasonRank(this.dialogDisp.tab_seasonRank));
    this._subLayer.set(SeasonLeagueMainDialog.TAB_INFO, new __dep_export_SeasonLeagueMainDialogInfo.SeasonLeagueMainDialogInfo(this.dialogDisp.tab_info));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_timeTitle, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_seasonTimeremaining_copy"))).autoFitToBounds = true;
    this.dialogDisp.mc_time.mouseChildren = false;
    this.dialogDisp.btn_tab_eventRank.toolTipText = "dialog_seasonLeague_divisionRanking_tab_tooltip";
    this.dialogDisp.btn_tab_promotion.toolTipText = "dialog_seasonLeague_promotionRanks_tab_tooltip";
    this.dialogDisp.btn_tab_seasonRank.toolTipText = "dialog_seasonLeague_seasonRanking_tab_tooltip";
    this.dialogDisp.btn_tab_info.toolTipText = "dialog_seasonLeague_infoSection_tab_tooltip";
  };
  SeasonLeagueMainDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.changeCategory(SeasonLeagueMainDialog.TAB_EVENT_RANK);
    this.updateEventTime();
  };
  SeasonLeagueMainDialog.prototype.hide = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    __s1param0.prototype.hide.call(this);
  };
  SeasonLeagueMainDialog.prototype.changeCategory = function (__s11param0) {
    function updateButton(__s13param0, __s13param1) {
      __s13param0.gotoAndStop(__s13param1 ? 2 : 1);
    }
    if (this._currentCategory != __s11param0) {
      __s1param0.prototype.changeCategory.call(this, __s11param0);
      this.showSublayer(this._subLayer.get(__s11param0), []);
      updateButton(this.dialogDisp.btn_tab_eventRank, this._currentCategory == SeasonLeagueMainDialog.TAB_EVENT_RANK);
      updateButton(this.dialogDisp.btn_tab_promotion, this._currentCategory == SeasonLeagueMainDialog.TAB_PROMOTION);
      updateButton(this.dialogDisp.btn_tab_seasonRank, this._currentCategory == SeasonLeagueMainDialog.TAB_SEASON_RANK);
      updateButton(this.dialogDisp.btn_tab_info, this._currentCategory == SeasonLeagueMainDialog.TAB_INFO);
    }
  };
  SeasonLeagueMainDialog.prototype.updateEventTime = function () {
    var __s16local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_KINGDOMS_LEAGUE);
    if (__s16local0) {
      var __s16local1 = __s16local0.remainingEventTimeInSeconds;
      __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_text, __s16local1);
      this.dialogDisp.mc_time.toolTipText = "dialog_seasonLeague_seasonTimeremaining_tooltip";
    }
  };
  SeasonLeagueMainDialog.prototype.getHelpTextId = function () {
    switch (this._currentCategory) {
      case SeasonLeagueMainDialog.TAB_EVENT_RANK:
        return "help_seasonLeague_divisionRanking";
      case SeasonLeagueMainDialog.TAB_PROMOTION:
        return "help_seasonLeague_promotionRanks";
      case SeasonLeagueMainDialog.TAB_SEASON_RANK:
        return "help_seasonLeague_seasonRanking";
      case SeasonLeagueMainDialog.TAB_INFO:
        return "help_seasonLeague_infoSection";
      default:
        return "";
    }
  };
  SeasonLeagueMainDialog.prototype.onClick = function (__s22param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s22param0.target)) {
      __s1param0.prototype.onClick.call(this, __s22param0);
      switch (__s22param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_tab_eventRank:
          this.changeCategory(SeasonLeagueMainDialog.TAB_EVENT_RANK);
          break;
        case this.dialogDisp.btn_tab_promotion:
          this.changeCategory(SeasonLeagueMainDialog.TAB_PROMOTION);
          break;
        case this.dialogDisp.btn_tab_seasonRank:
          this.changeCategory(SeasonLeagueMainDialog.TAB_SEASON_RANK);
          break;
        case this.dialogDisp.btn_tab_info:
          this.changeCategory(SeasonLeagueMainDialog.TAB_INFO);
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text(this.getHelpTextId()));
      }
    }
  };
  SeasonLeagueMainDialog.prototype.onRemoveEvent = function (__s26param0) {
    if (__s26param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_KINGDOMS_LEAGUE) {
      this.hide();
    }
  };
  SeasonLeagueMainDialog.prototype.onTickEvent = function (__s29param0) {
    this.updateEventTime();
  };
  SeasonLeagueMainDialog.NAME = "SeasonLeagueMain_RewardHub";
  SeasonLeagueMainDialog.TAB_EVENT_RANK = "tab_eventRank";
  SeasonLeagueMainDialog.TAB_PROMOTION = "tab_promotion";
  SeasonLeagueMainDialog.TAB_SEASON_RANK = "tab_seasonRank";
  SeasonLeagueMainDialog.TAB_INFO = "tab_info";
  return SeasonLeagueMainDialog;
}(require("gge-module:export_CastleExternalSubLayerDialog").CastleExternalSubLayerDialog);
exports.SeasonLeagueMainDialog = __s0local0;
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_SeasonLeagueMainDialogEventRank = require("gge-module:export_SeasonLeagueMainDialogEventRank");
var __dep_export_SeasonLeagueMainDialogInfo = require("gge-module:export_SeasonLeagueMainDialogInfo");
var __dep_export_SeasonLeagueMainDialogPromotion = require("gge-module:export_SeasonLeagueMainDialogPromotion");
var __dep_export_SeasonLeagueMainDialogSeasonRank = require("gge-module:export_SeasonLeagueMainDialogSeasonRank");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
