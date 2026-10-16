Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleExternalSubLayerDialog = require("gge-module:export_CastleExternalSubLayerDialog");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleStormIslandsMainDialogOverview = require("gge-module:export_CastleStormIslandsMainDialogOverview");
var __dep_export_CastleStormIslandsMainDialogRanking = require("gge-module:export_CastleStormIslandsMainDialogRanking");
var __dep_export_CastleStormIslandsMainDialogPerformancePlayer = require("gge-module:export_CastleStormIslandsMainDialogPerformancePlayer");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleStormIslandsMainDialogTitles = require("gge-module:export_CastleStormIslandsMainDialogTitles");
var __dep_export_CastleStormIslandsMainDialogPerformanceAlliance = require("gge-module:export_CastleStormIslandsMainDialogPerformanceAlliance");
var __dep_export_C2SStormIslandsInfoVO = require("gge-module:export_C2SStormIslandsInfoVO");
var __s0local0 = function (__s1param0) {
  function CastleStormIslandsMainDialog() {
    var __s3local0 = this;
    __s3local0.lastPerformanceTab = "";
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleStormIslandsMainDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStormIslandsMainDialog, __s1param0);
  CastleStormIslandsMainDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_main, this.dialogDisp.btn_tab_ranking, this.dialogDisp.btn_tab_performance]);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this._subLayer = new Map();
    this._subLayer.set(CastleStormIslandsMainDialog.TAB_MAIN, new __dep_export_CastleStormIslandsMainDialogOverview.CastleStormIslandsMainDialogOverview(this.dialogDisp.tab_main));
    this._subLayer.set(CastleStormIslandsMainDialog.TAB_RANKING, new __dep_export_CastleStormIslandsMainDialogRanking.CastleStormIslandsMainDialogRanking(this.dialogDisp.tab_ranking));
    this._subLayer.set(CastleStormIslandsMainDialog.TAB_PERFORMANCE_ALLIANCE, new __dep_export_CastleStormIslandsMainDialogPerformanceAlliance.CastleStormIslandsMainDialogPerformanceAlliance(this.dialogDisp.tab_performance_alliance, this));
    this._subLayer.set(CastleStormIslandsMainDialog.TAB_TITLES, new __dep_export_CastleStormIslandsMainDialogTitles.CastleStormIslandsMainDialogTitles(this.dialogDisp.tab_titles, this));
    this._subLayer.set(CastleStormIslandsMainDialog.TAB_PERFORMANCE_PLAYER, new __dep_export_CastleStormIslandsMainDialogPerformancePlayer.CastleStormIslandsMainDialogPerformancePlayer(this.dialogDisp.tab_performance_player, this));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_timeTitle, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("remainingTime")));
  };
  CastleStormIslandsMainDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    if (this.lastPerformanceTab == "") {
      this.lastPerformanceTab = CastleStormIslandsMainDialog.TAB_PERFORMANCE_ALLIANCE;
    }
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    this.setCategory(this.startTab ? this.startTab : CastleStormIslandsMainDialog.TAB_MAIN);
    this.updateRemainingEventTime();
    this.dialogDisp.btn_tab_main.toolTipText = "dialog_island_main_overview_title";
    this.dialogDisp.btn_tab_ranking.toolTipText = "dialog_island_main_cargoPointsContestRanking_title";
    this.dialogDisp.btn_tab_performance.toolTipText = "internalAllianceContest";
    this.dialogDisp.btn_tab_main.mouseChildren = false;
    this.dialogDisp.btn_tab_ranking.mouseChildren = false;
    this.dialogDisp.btn_tab_performance.mouseChildren = false;
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SStormIslandsInfoVO.C2SStormIslandsInfoVO());
    }
  };
  CastleStormIslandsMainDialog.prototype.updateRemainingEventTime = function () {
    var __s11local0 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID).resetTime;
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.txt_text, __s11local0);
  };
  CastleStormIslandsMainDialog.prototype.onTickEvent = function (__s13param0) {
    this.updateRemainingEventTime();
  };
  CastleStormIslandsMainDialog.prototype.onClick = function (__s15param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target)) {
      __s1param0.prototype.onClick.call(this, __s15param0);
      switch (__s15param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_tab_main:
          this.setCategory(CastleStormIslandsMainDialog.TAB_MAIN);
          break;
        case this.dialogDisp.btn_tab_ranking:
          this.setCategory(CastleStormIslandsMainDialog.TAB_RANKING);
          break;
        case this.dialogDisp.btn_tab_performance:
          this.setCategory(this.lastPerformanceTab);
          break;
        case this.dialogDisp.btn_help:
          this.showHelp();
      }
    }
  };
  CastleStormIslandsMainDialog.prototype.setCategory = function (__s19param0) {
    this.changeCategory(__s19param0);
    this.showSublayer(this._subLayer.get(__s19param0), []);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_main, this._currentCategory == CastleStormIslandsMainDialog.TAB_MAIN);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_ranking, this._currentCategory == CastleStormIslandsMainDialog.TAB_RANKING);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_performance, this.isInPerformanceTab);
    if (this.isInPerformanceTab) {
      this.lastPerformanceTab = __s19param0;
    }
  };
  CastleStormIslandsMainDialog.prototype.showHelp = function () {
    switch (this._currentCategory) {
      case CastleStormIslandsMainDialog.TAB_MAIN:
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text("help_island_main_overview"));
        break;
      case CastleStormIslandsMainDialog.TAB_RANKING:
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text("help_island_main_cargoPointsContestRanking"));
        break;
      case CastleStormIslandsMainDialog.TAB_PERFORMANCE_ALLIANCE:
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text("help_island_main_internalAllianceRanking"));
        break;
      case CastleStormIslandsMainDialog.TAB_TITLES:
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text("help_island_main_stormTitles"));
        break;
      case CastleStormIslandsMainDialog.TAB_PERFORMANCE_PLAYER:
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text("help_island_main_myPerformance"));
    }
  };
  Object.defineProperty(CastleStormIslandsMainDialog.prototype, "isInPerformanceTab", {
    get: function () {
      switch (this._currentCategory) {
        case CastleStormIslandsMainDialog.TAB_PERFORMANCE_ALLIANCE:
        case CastleStormIslandsMainDialog.TAB_PERFORMANCE_PLAYER:
        case CastleStormIslandsMainDialog.TAB_TITLES:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStormIslandsMainDialog.prototype, "startTab", {
    get: function () {
      if (this.dialogProp) {
        return this.dialogProp.startTab;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStormIslandsMainDialog.prototype, "dialogProp", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleStormIslandsMainDialog.NAME = "CastleStormIslandsMain_D";
  CastleStormIslandsMainDialog.TAB_MAIN = "tab_main";
  CastleStormIslandsMainDialog.TAB_RANKING = "tab_ranking";
  CastleStormIslandsMainDialog.TAB_PERFORMANCE_ALLIANCE = "tab_performance_alliance";
  CastleStormIslandsMainDialog.TAB_TITLES = "tab_titles";
  CastleStormIslandsMainDialog.TAB_PERFORMANCE_PLAYER = "tab_performance_player";
  return CastleStormIslandsMainDialog;
}(__dep_export_CastleExternalSubLayerDialog.CastleExternalSubLayerDialog);
exports.CastleStormIslandsMainDialog = __s0local0;
