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
  function SamuraiDaimyoEventDialog() {
    return __s1param0.call(this, SamuraiDaimyoEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SamuraiDaimyoEventDialog, __s1param0);
  SamuraiDaimyoEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_ranking, this.dialogDisp.btn_tab_contracts, this.dialogDisp.btn_tab_info]);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this._subLayer = new Map();
    this._subLayer.set(SamuraiDaimyoEventDialog.TAB_RANKING, new __dep_export_SamuraiDaimyoEventDialogRanking.SamuraiDaimyoEventDialogRanking(this.dialogDisp.tab_ranking));
    this._subLayer.set(SamuraiDaimyoEventDialog.TAB_CONTRACTS, new __dep_export_SamuraiDaimyoEventDialogContracts.SamuraiDaimyoEventDialogContracts(this.dialogDisp.tab_contracts));
    this._subLayer.set(SamuraiDaimyoEventDialog.TAB_INFO, new __dep_export_SamuraiDaimyoEventDialogInfo.SamuraiDaimyoEventDialogInfo(this.dialogDisp.tab_info));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_timeTitle, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("resttime"))).autoFitToBounds = true;
    this.dialogDisp.mc_time.mouseChildren = false;
    this.dialogDisp.btn_tab_ranking.toolTipText = "allianceRanking";
    this.dialogDisp.btn_tab_contracts.toolTipText = "allianceContracts";
    this.dialogDisp.btn_tab_info.toolTipText = "eventGuide";
    this.dialogDisp.btn_help.toolTipText = "help";
    this._bottomMenu = new __dep_export_SamuraiDaimyoEventDialogBottomMenu.SamuraiDaimyoEventDialogBottomMenu(this.dialogDisp.mc_bottom);
  };
  SamuraiDaimyoEventDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._bottomMenu.onShow();
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    if (this.dialogProperties.preselectedTab != "") {
      this.changeCategory(this.dialogProperties.preselectedTab);
    } else {
      this.changeCategory(SamuraiDaimyoEventDialog.TAB_RANKING);
    }
    this.updateRemainingEventTime();
  };
  SamuraiDaimyoEventDialog.prototype.hideLoaded = function (__s11param0 = null) {
    this._bottomMenu.onHide();
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    __s1param0.prototype.hideLoaded.call(this, __s11param0);
  };
  SamuraiDaimyoEventDialog.prototype.updateRemainingEventTime = function () {
    var __s13local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION);
    if (__s13local0) {
      var __s13local1 = __s13local0.remainingEventTimeInSeconds;
      __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_text, __s13local1);
      this.dialogDisp.mc_time.toolTipText = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventToolTipString(__s13local1);
    }
  };
  SamuraiDaimyoEventDialog.prototype.changeCategory = function (__s16param0) {
    function updateButton(__s18param0, __s18param1) {
      __s18param0.gotoAndStop(__s18param1 ? 2 : 1);
    }
    if (this._currentCategory != __s16param0) {
      __s1param0.prototype.changeCategory.call(this, __s16param0);
      this.showSublayer(this._subLayer.get(__s16param0), []);
      updateButton(this.dialogDisp.btn_tab_ranking, this._currentCategory == SamuraiDaimyoEventDialog.TAB_RANKING);
      updateButton(this.dialogDisp.btn_tab_contracts, this._currentCategory == SamuraiDaimyoEventDialog.TAB_CONTRACTS);
      updateButton(this.dialogDisp.btn_tab_info, this._currentCategory == SamuraiDaimyoEventDialog.TAB_INFO);
    }
  };
  SamuraiDaimyoEventDialog.prototype.onClick = function (__s21param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s21param0.target)) {
      __s1param0.prototype.onClick.call(this, __s21param0);
      switch (__s21param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_tab_ranking:
          this.changeCategory(SamuraiDaimyoEventDialog.TAB_RANKING);
          break;
        case this.dialogDisp.btn_tab_contracts:
          this.changeCategory(SamuraiDaimyoEventDialog.TAB_CONTRACTS);
          break;
        case this.dialogDisp.btn_tab_info:
          this.changeCategory(SamuraiDaimyoEventDialog.TAB_INFO);
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text("help_samuraiInvasionDaimyo_contestTab"));
      }
    }
  };
  SamuraiDaimyoEventDialog.prototype.onTickEvent = function (__s25param0) {
    this.updateRemainingEventTime();
  };
  SamuraiDaimyoEventDialog.prototype.onRemoveEvent = function (__s27param0) {
    if (__s27param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SAMURAI_INVASION) {
      this.hide();
    }
  };
  Object.defineProperty(SamuraiDaimyoEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SamuraiDaimyoEventDialog.NAME = "SamuraiDaimyoEvent";
  SamuraiDaimyoEventDialog.TAB_RANKING = "tab_ranking";
  SamuraiDaimyoEventDialog.TAB_CONTRACTS = "tab_contracts";
  SamuraiDaimyoEventDialog.TAB_INFO = "tab_info";
  return SamuraiDaimyoEventDialog;
}(require("gge-module:export_CastleExternalSubLayerDialog").CastleExternalSubLayerDialog);
exports.SamuraiDaimyoEventDialog = __s0local0;
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_SamuraiDaimyoEventDialogBottomMenu = require("gge-module:export_SamuraiDaimyoEventDialogBottomMenu");
var __dep_export_SamuraiDaimyoEventDialogContracts = require("gge-module:export_SamuraiDaimyoEventDialogContracts");
var __dep_export_SamuraiDaimyoEventDialogInfo = require("gge-module:export_SamuraiDaimyoEventDialogInfo");
var __dep_export_SamuraiDaimyoEventDialogRanking = require("gge-module:export_SamuraiDaimyoEventDialogRanking");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
