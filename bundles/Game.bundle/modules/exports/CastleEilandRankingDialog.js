Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleEilandEvent = require("gge-module:export_CastleEilandEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleEilandRankingDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleEilandRankingDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEilandRankingDialog, __s1param0);
  CastleEilandRankingDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this._subLayer = new Map();
    this._subLayer.set(CastleEilandRankingDialog.SUBLAYER_RULES, new __dep_export_CastleEilandRankingDialogRules.CastleEilandRankingDialogRules(this.dialogDisp.sublayer_rules));
    this._subLayer.set(CastleEilandRankingDialog.SUBLAYER_ALLIANCE_RANKING, new __dep_export_CastleEilandRankingDialogAlliance.CastleEilandRankingDialogAlliance(this.dialogDisp.sublayer_allianceRanking));
    this._subLayer.set(CastleEilandRankingDialog.SUBLAYER_PLAYER_RANKING, new __dep_export_CastleEilandRankingDialogPlayer.CastleEilandRankingDialogPlayer(this.dialogDisp.sublayer_playerRanking));
    this._subLayer.set(CastleEilandRankingDialog.SUBLAYER_TITLE, new __dep_export_CastleEilandRankingDialogTitle.CastleEilandRankingDialogTitle(this.dialogDisp.sublayer_title));
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_RULES], this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_ALLIANCE_RANKING], this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_PLAYER_RANKING], this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_TITLE]]);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_RULES].toolTipText = "dialog_eiland_tutorial_tooltip";
    this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_ALLIANCE_RANKING].toolTipText = "dialog_eiland_cargoRanking_tooltip";
    this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_TITLE].toolTipText = "dialog_eiland_titleMenu_tooltip";
    this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_PLAYER_RANKING].toolTipText = "dialog_eiland_allianceRanking_tooltip";
  };
  CastleEilandRankingDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_RULES].gotoAndStop(1);
    this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_ALLIANCE_RANKING].gotoAndStop(1);
    var __s7local0 = this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_PLAYER_RANKING];
    __s7local0.gotoAndStop(1);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(__s7local0, __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO != null);
    if (__s7local0.enabled) {
      this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_PLAYER_RANKING].toolTipText = "dialog_eiland_allianceRanking_tooltip";
    } else {
      this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_PLAYER_RANKING].toolTipText = "dialog_eiland_allianceRanking_noAlliance_tooltip";
    }
    this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_TITLE].gotoAndStop(1);
    this.switchSublayer(this.dialogProperties.startCategory);
    this.controller.addEventListener(__dep_export_CastleEilandEvent.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onEilandReset));
  };
  CastleEilandRankingDialog.prototype.hideLoaded = function (__s11param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s11param0);
    this.controller.removeEventListener(__dep_export_CastleEilandEvent.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onEilandReset));
  };
  CastleEilandRankingDialog.prototype.onEilandReset = function (__s13param0) {
    this.hide();
  };
  CastleEilandRankingDialog.prototype.onClick = function (__s15param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target)) {
      switch (__s15param0.target) {
        case this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_RULES]:
          this.switchSublayer(CastleEilandRankingDialog.SUBLAYER_RULES);
          break;
        case this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_ALLIANCE_RANKING]:
          this.switchSublayer(CastleEilandRankingDialog.SUBLAYER_ALLIANCE_RANKING);
          break;
        case this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_PLAYER_RANKING]:
          this.switchSublayer(CastleEilandRankingDialog.SUBLAYER_PLAYER_RANKING);
          break;
        case this.dialogDisp["btn_" + CastleEilandRankingDialog.SUBLAYER_TITLE]:
          this.switchSublayer(CastleEilandRankingDialog.SUBLAYER_TITLE);
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          this.showHelpText();
      }
    }
  };
  CastleEilandRankingDialog.prototype.showHelpText = function () {
    switch (this._currentCategory) {
      case CastleEilandRankingDialog.SUBLAYER_RULES:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_eiland_instructionsList"));
        break;
      case CastleEilandRankingDialog.SUBLAYER_ALLIANCE_RANKING:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_eiland_allianceRanglist"));
        break;
      case CastleEilandRankingDialog.SUBLAYER_PLAYER_RANKING:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_eiland_membersRanglist"));
        break;
      case CastleEilandRankingDialog.SUBLAYER_TITLE:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_eiland_titleMenu"));
    }
  };
  CastleEilandRankingDialog.prototype.switchSublayer = function (__s22param0) {
    var __s22local0;
    if (this._currentCategory) {
      this.dialogDisp["btn_" + this._currentCategory].gotoAndStop(1);
    }
    this.dialogDisp["btn_" + __s22param0].gotoAndStop(2);
    this.changeCategory(__s22param0);
    this.showSublayer(this._subLayer.get(__s22param0), []);
    switch (this._currentCategory) {
      case CastleEilandRankingDialog.SUBLAYER_RULES:
        __s22local0 = "dialog_eiland_instructions_header";
        break;
      case CastleEilandRankingDialog.SUBLAYER_ALLIANCE_RANKING:
        __s22local0 = "dialog_eiland_allianceRanglist_header";
        break;
      case CastleEilandRankingDialog.SUBLAYER_PLAYER_RANKING:
        __s22local0 = "dialog_eiland_membersRanglist_header";
        break;
      case CastleEilandRankingDialog.SUBLAYER_TITLE:
        __s22local0 = "dialog_eiland_titleMenu_header";
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s22local0)).autoFitToBounds = true;
    this.adjustBackgroundHeight();
  };
  CastleEilandRankingDialog.prototype.adjustBackgroundHeight = function () {
    switch (this._currentCategory) {
      case CastleEilandRankingDialog.SUBLAYER_RULES:
      case CastleEilandRankingDialog.SUBLAYER_ALLIANCE_RANKING:
      case CastleEilandRankingDialog.SUBLAYER_PLAYER_RANKING:
        this.dialogDisp.mc_background.height = CastleEilandRankingDialog.BACKGROUND_HEIGHT_NORMAL;
        break;
      case CastleEilandRankingDialog.SUBLAYER_TITLE:
        this.dialogDisp.mc_background.height = CastleEilandRankingDialog.BACKGROUND_HEIGHT_TITLE;
    }
  };
  Object.defineProperty(CastleEilandRankingDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleEilandRankingDialog.__initialize_static_members = function () {
    CastleEilandRankingDialog.NAME = "CastleEilandRanking";
    CastleEilandRankingDialog.SUBLAYER_RULES = "sublayerRules";
    CastleEilandRankingDialog.SUBLAYER_ALLIANCE_RANKING = "sublayerAllianceRanking";
    CastleEilandRankingDialog.SUBLAYER_PLAYER_RANKING = "sublayerPlayerRanking";
    CastleEilandRankingDialog.SUBLAYER_TITLE = "sublayerTitle";
    CastleEilandRankingDialog.BACKGROUND_HEIGHT_TITLE = 571.5;
    CastleEilandRankingDialog.BACKGROUND_HEIGHT_NORMAL = 442.1;
  };
  return CastleEilandRankingDialog;
}(require("gge-module:export_CastleExternalSubLayerDialog").CastleExternalSubLayerDialog);
exports.CastleEilandRankingDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleEilandRankingDialogAlliance = require("gge-module:export_CastleEilandRankingDialogAlliance");
var __dep_export_CastleEilandRankingDialogPlayer = require("gge-module:export_CastleEilandRankingDialogPlayer");
var __dep_export_CastleEilandRankingDialogRules = require("gge-module:export_CastleEilandRankingDialogRules");
var __dep_export_CastleEilandRankingDialogTitle = require("gge-module:export_CastleEilandRankingDialogTitle");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
