Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_SublayerSwitcher = require("gge-module:export_SublayerSwitcher");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleKingdomEvent = require("gge-module:export_CastleKingdomEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleTitleSublayerFactionProperties = require("gge-module:export_CastleTitleSublayerFactionProperties");
var __s0local0 = function (__s1param0) {
  function FactionEventMainDialog() {
    return __s1param0.call(this, FactionEventMainDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionEventMainDialog, __s1param0);
  FactionEventMainDialog.prototype.initLoaded = function (__s5param0 = null) {
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help]);
    this.dialogDisp.mc_time.toolTipText = "resttime";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_time.mouseChildren = false;
    this.dialogDisp.tab_introduction.toolTipText = "dialog_faction_tutorial";
    this.dialogDisp.tab_overview.toolTipText = "dialog_faction_overview";
    this.dialogDisp.tab_join.toolTipText = "dialog_faction_join";
    this.dialogDisp.tab_rankings.toolTipText = "dialog_faction_rewards";
    this.dialogDisp.tab_titles.toolTipText = "dialog_faction_titles";
    this.itxt_remainingTime = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new __dep_exact_92d05af59ee2ff30_1.TextVO("-"));
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  FactionEventMainDialog.prototype.setupSublayers = function () {
    if (!this.sublayers) {
      this.dialogDisp.sublayer_titles.addChild(this.dialogProperties.titlesSublayer);
      this.sublayers = new __dep_export_SublayerSwitcher.SublayerSwitcher(this.bindFunction(this.createProperties));
      this.sublayers.add(FactionEventMainDialog.SUBLAYER_INTRODUCTION, this.dialogDisp.tab_introduction, new __dep_export_FactionEventIntroductionSublayer.FactionEventIntroductionSublayer(this.dialogDisp.sublayer_introduction));
      this.sublayers.add(FactionEventMainDialog.SUBLAYER_OVERVIEW, this.dialogDisp.tab_overview, new __dep_export_FactionEventOverviewSublayer.FactionEventOverviewSublayer(this.dialogDisp.sublayer_overview));
      this.sublayers.add(FactionEventMainDialog.SUBLAYER_RANKINGS, this.dialogDisp.tab_rankings, new __dep_export_FactionEventRankingsSublayer.FactionEventRankingsSublayer(this.dialogDisp.sublayer_rankings));
      this.sublayers.add(FactionEventMainDialog.SUBLAYER_JOIN, this.dialogDisp.tab_join, new __dep_export_FactionEventJoinSublayer.FactionEventJoinSublayer(this.dialogDisp.sublayer_join, this.sublayers));
      this.sublayers.add(FactionEventMainDialog.SUBLAYER_TITLES, this.dialogDisp.tab_titles, new __dep_export_FactionEventTitlesSublayer.FactionEventTitlesSublayer(this.dialogProperties.titlesSublayer));
    }
  };
  FactionEventMainDialog.prototype.createProperties = function (__s10param0) {
    if (__s10param0 == FactionEventMainDialog.SUBLAYER_TITLES) {
      return new __dep_export_CastleTitleSublayerFactionProperties.CastleTitleSublayerFactionProperties();
    } else {
      return null;
    }
  };
  FactionEventMainDialog.prototype.showLoaded = function (__s14param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s14param0);
    this.setupSublayers();
    if (this.dialogProperties && this.dialogProperties.layerID != -1) {
      this.sublayers.switchTo(this.dialogProperties.layerID);
    } else {
      this.sublayers.switchTo(FactionEventMainDialog.SUBLAYER_OVERVIEW);
    }
    this.updateShowJoinOrEnterTab();
    this.updateTimer();
    this.sublayers.show();
  };
  FactionEventMainDialog.prototype.hideLoaded = function (__s18param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s18param0);
    this.sublayers.hide();
  };
  FactionEventMainDialog.prototype.updateShowJoinOrEnterTab = function () {
    var __s20local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
    this.dialogDisp.tab_join.visible = __s20local0.isLocked;
    this.dialogDisp.tab_overview.visible = !__s20local0.isLocked;
    if (__s20local0.isLocked || this.sublayers.activeTab != FactionEventMainDialog.SUBLAYER_JOIN) {
      if (__s20local0.isLocked && this.sublayers.activeTab == FactionEventMainDialog.SUBLAYER_OVERVIEW) {
        this.sublayers.switchTo(FactionEventMainDialog.SUBLAYER_JOIN);
      }
    } else {
      this.sublayers.switchTo(FactionEventMainDialog.SUBLAYER_OVERVIEW);
    }
  };
  FactionEventMainDialog.prototype.addEventListenerOnShow = function () {
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    __dep_export_CastleModel.CastleModel.kingdomData.addEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onKingdomDataUpdated));
  };
  FactionEventMainDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    __dep_export_CastleModel.CastleModel.kingdomData.removeEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onKingdomDataUpdated));
  };
  FactionEventMainDialog.prototype.onKingdomDataUpdated = function (__s29param0) {
    this.updateShowJoinOrEnterTab();
  };
  FactionEventMainDialog.prototype.onRemoveEvent = function (__s31param0) {
    if (__s31param0.specialEventVO.eventId == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION) {
      this.hide();
    }
  };
  FactionEventMainDialog.prototype.onClick = function (__s34param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s34param0.target)) {
      switch (__s34param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", this.helpText);
      }
    }
  };
  FactionEventMainDialog.prototype.onTimer = function (__s38param0 = null) {
    this.updateTimer();
  };
  FactionEventMainDialog.prototype.updateTimer = function () {
    var __s40local0;
    var __s40local1 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
    __s40local0 = __s40local1 ? __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s40local1.remainingEventTimeInSeconds) : "-";
    this.itxt_remainingTime.textContentVO.stringValue = __s40local0;
  };
  Object.defineProperty(FactionEventMainDialog.prototype, "helpText", {
    get: function () {
      switch (this.sublayers.activeTab) {
        case FactionEventMainDialog.SUBLAYER_OVERVIEW:
          return __dep_exact_92d05af59ee2ff30.Localize.text("help_berimond_overview");
        case FactionEventMainDialog.SUBLAYER_INTRODUCTION:
          return __dep_exact_92d05af59ee2ff30.Localize.text("help_berimond_instructions");
        case FactionEventMainDialog.SUBLAYER_RANKINGS:
          return __dep_exact_92d05af59ee2ff30.Localize.text("help_berimond_pointsEvent");
        case FactionEventMainDialog.SUBLAYER_JOIN:
          return __dep_exact_92d05af59ee2ff30.Localize.text("help_berimond_join");
        case FactionEventMainDialog.SUBLAYER_TITLES:
          return __dep_exact_92d05af59ee2ff30.Localize.text("help_berimond_titles", [__dep_exact_26a421b704832cff_1.FactionConst.TITLE_RESET_INTERVAL_SECONDS / __dep_export_ClientConstTime.ClientConstTime.HOURES_2_SEC]);
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventMainDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  FactionEventMainDialog.NAME = "FactionEventMain_SeasonLeague";
  FactionEventMainDialog.SUBLAYER_OVERVIEW = 0;
  FactionEventMainDialog.SUBLAYER_INTRODUCTION = 1;
  FactionEventMainDialog.SUBLAYER_RANKINGS = 2;
  FactionEventMainDialog.SUBLAYER_JOIN = 3;
  FactionEventMainDialog.SUBLAYER_TITLES = 4;
  return FactionEventMainDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.FactionEventMainDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_FactionEventIntroductionSublayer = require("gge-module:export_FactionEventIntroductionSublayer");
var __dep_export_FactionEventJoinSublayer = require("gge-module:export_FactionEventJoinSublayer");
var __dep_export_FactionEventOverviewSublayer = require("gge-module:export_FactionEventOverviewSublayer");
var __dep_export_FactionEventRankingsSublayer = require("gge-module:export_FactionEventRankingsSublayer");
var __dep_export_FactionEventTitlesSublayer = require("gge-module:export_FactionEventTitlesSublayer");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
