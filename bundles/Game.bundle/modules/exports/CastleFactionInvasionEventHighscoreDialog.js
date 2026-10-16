Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_SublayerSwitcher = require("gge-module:export_SublayerSwitcher");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleGenericHighscoreDialogProperties = require("gge-module:export_CastleGenericHighscoreDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleFactionInvasionEventHighscoreDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleFactionInvasionEventHighscoreDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionInvasionEventHighscoreDialog, __s1param0);
  CastleFactionInvasionEventHighscoreDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_ok]);
    this.dialogDisp.tab_red.toolTipText = "dialog_berimondInvasion_rankings_red_header";
    this.dialogDisp.tab_blue.toolTipText = "dialog_berimondInvasion_rankings_blue_header";
    this.dialogDisp.tab_alliance.toolTipText = "dialog_berimondInvasion_rankings_alliance_header";
    this.dialogDisp.sublayer_blue.mc_scoreIcon.toolTipText = "dialog_berimondInvasion_reputation_blue";
    this.dialogDisp.sublayer_red.mc_scoreIcon.toolTipText = "dialog_berimondInvasion_reputation_red";
    this.sublayerSwitcher = new __dep_export_SublayerSwitcher.SublayerSwitcher(this.bindFunction(this.createProperties));
    this.sublayerSwitcher.add(CastleFactionInvasionEventHighscoreDialog.TAB_BLUE, this.dialogDisp.tab_blue, new __dep_export_CastleFactionInvasionEventHighscoreFactionSublayer.CastleFactionInvasionEventHighscoreFactionSublayer(this.dialogDisp.sublayer_blue, "dialog_berimondInvasion_rankings_blue_header", this.createProperties(CastleFactionInvasionEventHighscoreDialog.TAB_BLUE), true));
    this.sublayerSwitcher.add(CastleFactionInvasionEventHighscoreDialog.TAB_RED, this.dialogDisp.tab_red, new __dep_export_CastleFactionInvasionEventHighscoreFactionSublayer.CastleFactionInvasionEventHighscoreFactionSublayer(this.dialogDisp.sublayer_red, "dialog_berimondInvasion_rankings_red_header", this.createProperties(CastleFactionInvasionEventHighscoreDialog.TAB_RED), false));
    this.sublayerSwitcher.add(CastleFactionInvasionEventHighscoreDialog.TAB_ALLIANCE, this.dialogDisp.tab_alliance, new __dep_export_CastleFactionInvasionEventHighscoreAllianceSublayer.CastleFactionInvasionEventHighscoreAllianceSublayer(this.dialogDisp.sublayer_alliance, "dialog_berimondInvasion_rankings_alliance_header", this.createProperties(CastleFactionInvasionEventHighscoreDialog.TAB_ALLIANCE)));
  };
  CastleFactionInvasionEventHighscoreDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.sublayerSwitcher.switchTo(this.dialogProperties.tabID);
    this.sublayerSwitcher.show();
  };
  CastleFactionInvasionEventHighscoreDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    this.sublayerSwitcher.hide();
  };
  CastleFactionInvasionEventHighscoreDialog.prototype.addEventListenerOnShow = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
  };
  CastleFactionInvasionEventHighscoreDialog.prototype.onEventRemoved = function (__s13param0) {
    if (__s13param0.specialEventVO.eventId == this.dialogProperties.eventID) {
      this.hide();
    }
  };
  CastleFactionInvasionEventHighscoreDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
  };
  CastleFactionInvasionEventHighscoreDialog.prototype.onClick = function (__s18param0) {
    __s1param0.prototype.onClick.call(this, __s18param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s18param0.target)) {
      switch (__s18param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          this.showHelp();
      }
    }
  };
  CastleFactionInvasionEventHighscoreDialog.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_highscore_berimondInvasion"));
  };
  CastleFactionInvasionEventHighscoreDialog.prototype.createProperties = function (__s24param0) {
    var __s24local0;
    var __s24local1;
    switch (__s24param0) {
      case CastleFactionInvasionEventHighscoreDialog.TAB_BLUE:
        __s24local1 = this.dialogProperties.eventVO.blueEventVO;
        __s24local0 = new __dep_export_CastleGenericHighscoreDialogProperties.CastleGenericHighscoreDialogProperties(54, __s24local1.numberOfLeagues, __s24local1.leagueID, __s24local1.ownRank);
        break;
      case CastleFactionInvasionEventHighscoreDialog.TAB_RED:
        __s24local1 = this.dialogProperties.eventVO.redEventVO;
        __s24local0 = new __dep_export_CastleGenericHighscoreDialogProperties.CastleGenericHighscoreDialogProperties(55, __s24local1.numberOfLeagues, __s24local1.leagueID, __s24local1.ownRank);
        break;
      case CastleFactionInvasionEventHighscoreDialog.TAB_ALLIANCE:
        __s24local1 = this.dialogProperties.eventVO.allianceEventVO;
        __s24local0 = new __dep_export_CastleGenericHighscoreDialogProperties.CastleGenericHighscoreDialogProperties(56, __s24local1.numberOfLeagues, __s24local1.leagueID, __s24local1.ownRank);
    }
    return __s24local0;
  };
  Object.defineProperty(CastleFactionInvasionEventHighscoreDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionInvasionEventHighscoreDialog.__initialize_static_members = function () {
    CastleFactionInvasionEventHighscoreDialog.NAME = "CastleFactionInvasionEventHighscore";
    CastleFactionInvasionEventHighscoreDialog.TAB_RED = 1;
    CastleFactionInvasionEventHighscoreDialog.TAB_BLUE = 2;
    CastleFactionInvasionEventHighscoreDialog.TAB_ALLIANCE = 3;
  };
  return CastleFactionInvasionEventHighscoreDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleFactionInvasionEventHighscoreDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleFactionInvasionEventHighscoreAllianceSublayer = require("gge-module:export_CastleFactionInvasionEventHighscoreAllianceSublayer");
var __dep_export_CastleFactionInvasionEventHighscoreFactionSublayer = require("gge-module:export_CastleFactionInvasionEventHighscoreFactionSublayer");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
