Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function SeasonLeagueStartDialog() {
    return __s1param0.call(this, SeasonLeagueStartDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueStartDialog, __s1param0);
  SeasonLeagueStartDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp.btn_showMe, -1, __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_starterMessage_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title1, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_starterMessage_infoSectionOne_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc1, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_seasonLeague_starterMessage_infoSectionOne_copy")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title2, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_starterMessage_infoSectionTwo_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc2, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_seasonLeague_starterMessage_infoSectionTwo_copy")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_status, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_starterMessage_statusSection_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_showMe.txt_text, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_starterMessage_goLeague_text"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_progress.txt_text, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_seasonLeague_starterMessage_statusSection_noEventBar_copy")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_rank.txt_playersTitle, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_playersInDivision_text"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_rank.txt_rankTitle, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_yourCurrentRank_text"))).autoFitToBounds = true;
    this._promotionIcon = new __dep_export_SeasonLeaguePromotionIconComponent.SeasonLeaguePromotionIconComponent(this.dialogDisp.mc_rank.mc_rankIcon, __dep_export_SeasonLeaguePromotionIconComponent.SeasonLeaguePromotionIconComponent.TYPE_NORMAL, new __s0local0(80, 80));
  };
  SeasonLeagueStartDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    if (!__dep_export_CastleModel.CastleModel.seasonLeagueData.server.seasonStartDialogSeen) {
      __dep_export_CastleModel.CastleModel.seasonLeagueData.server.requestKSS(true, true);
    }
    this.setupSeasonState();
    this.updateInfoSection();
  };
  SeasonLeagueStartDialog.prototype.setupSeasonState = function () {
    if (__dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonEventVO() != null) {
      if (__dep_export_CastleModel.CastleModel.seasonLeagueData.server.divisionSize > 0) {
        this._state = SeasonLeagueStartDialog.STATE_EVENT_ACTIVE;
      } else {
        this._state = SeasonLeagueStartDialog.STATE_EVENT_ACTIVE_NO_RANK;
      }
    } else {
      this._state = SeasonLeagueStartDialog.STATE_EVENT_INACTIVE;
    }
  };
  SeasonLeagueStartDialog.prototype.updateInfoSection = function () {
    this.dialogDisp.mc_progress.visible = this.state == SeasonLeagueStartDialog.STATE_EVENT_INACTIVE;
    this.dialogDisp.mc_rank.visible = this.state == SeasonLeagueStartDialog.STATE_EVENT_ACTIVE;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(this.getInfoTextId(), [__dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonEventNameId()])).autoFitToBounds = true;
    if (this.state == SeasonLeagueStartDialog.STATE_EVENT_ACTIVE) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_rank.txt_playersAmount, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.seasonLeagueData.server.divisionSize)).autoFitToBounds = true;
      this._promotionIcon.updateWithNewVO(__dep_export_CastleModel.CastleModel.seasonLeagueData.getCurrentPlayerPromotion());
      this.textFieldManager.registerTextField(this.dialogDisp.mc_rank.txt_rankName, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this._promotionIcon.vo.getNameTextId()))).autoFitToBounds = true;
    }
  };
  SeasonLeagueStartDialog.prototype.getInfoTextId = function () {
    switch (this.state) {
      case SeasonLeagueStartDialog.STATE_EVENT_ACTIVE:
        return "dialog_seasonLeague_starterMessage_statusSection_currentLeague_copy";
      case SeasonLeagueStartDialog.STATE_EVENT_ACTIVE_NO_RANK:
        return "dialog_seasonLeague_starterMessage_statusSection_matchmaking_copy";
      case SeasonLeagueStartDialog.STATE_EVENT_INACTIVE:
        return "dialog_seasonLeague_starterMessage_statusSection_noEvent_copy";
      default:
        return "[INVALID]";
    }
  };
  SeasonLeagueStartDialog.prototype.onClick = function (__s22param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s22param0.target)) {
      __s1param0.prototype.onClick.call(this, __s22param0);
      switch (__s22param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_seasonLeague_starterMessage"));
          break;
        case this.dialogDisp.btn_showMe:
          __dep_export_CastleModel.CastleModel.seasonLeagueData.openEventDialog();
          this.hide();
      }
    }
  };
  Object.defineProperty(SeasonLeagueStartDialog.prototype, "state", {
    get: function () {
      return this._state;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueStartDialog.NAME = "SeasonLeagueStart";
  SeasonLeagueStartDialog.STATE_EVENT_INACTIVE = "eventInactive";
  SeasonLeagueStartDialog.STATE_EVENT_ACTIVE = "eventActive";
  SeasonLeagueStartDialog.STATE_EVENT_ACTIVE_NO_RANK = "eventActiveNoRank";
  return SeasonLeagueStartDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.SeasonLeagueStartDialog = __s0local1;
var __dep_export_SeasonLeaguePromotionIconComponent = require("gge-module:export_SeasonLeaguePromotionIconComponent");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
