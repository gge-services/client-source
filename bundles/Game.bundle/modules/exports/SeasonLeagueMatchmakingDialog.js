Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SeasonLeagueEvent = require("gge-module:export_SeasonLeagueEvent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function SeasonLeagueMatchmakingDialog() {
    return __s1param0.call(this, SeasonLeagueMatchmakingDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueMatchmakingDialog, __s1param0);
  SeasonLeagueMatchmakingDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_matchmakingDialog_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_status, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_matchmakingDialog_status_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_playersTitle, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_playersInDivision_text"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rankTitle, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_yourCurrentRank_text"))).autoFitToBounds = true;
    this._promotionIcon = new __dep_export_SeasonLeaguePromotionIconComponent.SeasonLeaguePromotionIconComponent(this.dialogDisp.mc_rankIcon, __dep_export_SeasonLeaguePromotionIconComponent.SeasonLeaguePromotionIconComponent.TYPE_NORMAL, new __s0local0(80, 80));
  };
  SeasonLeagueMatchmakingDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.controller.addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onSeasonInfoUpdated));
    if (__dep_export_CastleModel.CastleModel.seasonLeagueData.server.divisionSize == -1) {
      __dep_export_CastleModel.CastleModel.seasonLeagueData.server.requestKLI();
    }
    this.updateInfo();
  };
  SeasonLeagueMatchmakingDialog.prototype.hide = function () {
    this.controller.removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onSeasonInfoUpdated));
    __s1param0.prototype.hide.call(this);
  };
  SeasonLeagueMatchmakingDialog.prototype.updateInfo = function () {
    if (this.dialogDisp) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_seasonLeague_matchmakingDialog_copy", [__dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonEventNameId()])).autoFitToBounds = true;
      var __s12local0 = __dep_export_CastleModel.CastleModel.seasonLeagueData.server.divisionSize != -1 ? __dep_exact_92d05af59ee2ff30.Localize.integer(__dep_export_CastleModel.CastleModel.seasonLeagueData.server.divisionSize) : "-";
      this.textFieldManager.registerTextField(this.dialogDisp.txt_playersAmount, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s12local0)).autoFitToBounds = true;
      var __s12local1 = __dep_export_CastleModel.CastleModel.seasonLeagueData.getCurrentPlayerPromotion();
      this._promotionIcon.updateWithNewVO(__s12local1);
      if (__s12local1) {
        this.textFieldManager.registerTextField(this.dialogDisp.txt_rankName, new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s12local1.getNameTextId()))).autoFitToBounds = true;
      }
    }
  };
  SeasonLeagueMatchmakingDialog.prototype.onClick = function (__s16param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s16param0.target)) {
      __s1param0.prototype.onClick.call(this, __s16param0);
      switch (__s16param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_SeasonLeagueMainDialog.SeasonLeagueMainDialog);
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_seasonLeague_matchmakingDialog"));
      }
    }
  };
  SeasonLeagueMatchmakingDialog.prototype.onSeasonInfoUpdated = function (__s20param0) {
    this.updateInfo();
  };
  SeasonLeagueMatchmakingDialog.NAME = "SeasonLeagueMatchmaking";
  return SeasonLeagueMatchmakingDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.SeasonLeagueMatchmakingDialog = __s0local1;
var __dep_export_SeasonLeaguePromotionIconComponent = require("gge-module:export_SeasonLeaguePromotionIconComponent");
var __dep_export_SeasonLeagueMainDialog = require("gge-module:export_SeasonLeagueMainDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
