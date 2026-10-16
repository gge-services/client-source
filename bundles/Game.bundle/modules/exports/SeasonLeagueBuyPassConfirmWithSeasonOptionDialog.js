Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CollectableItemSeasonLeagueSeasonPassVO = require("gge-module:export_CollectableItemSeasonLeagueSeasonPassVO");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_export_SeasonLeagueBuyPassConfirmDialogProperties = require("gge-module:export_SeasonLeagueBuyPassConfirmDialogProperties");
var __dep_export_SeasonLeagueBuyPassConfirmDialog = require("gge-module:export_SeasonLeagueBuyPassConfirmDialog");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_C2SGetSeasonPassPriceInfoEventVO = require("gge-module:export_C2SGetSeasonPassPriceInfoEventVO");
var __s0local0 = function (__s1param0) {
  function SeasonLeagueBuyPassConfirmWithSeasonOptionDialog() {
    return __s1param0.call(this, SeasonLeagueBuyPassConfirmWithSeasonOptionDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueBuyPassConfirmWithSeasonOptionDialog, __s1param0);
  SeasonLeagueBuyPassConfirmWithSeasonOptionDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_buySeason], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_season, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_seasonLeague_seasonPass_info_copy"));
  };
  SeasonLeagueBuyPassConfirmWithSeasonOptionDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetSeasonPassPriceInfoEventVO.C2SGetSeasonPassPriceInfoEventVO());
  };
  SeasonLeagueBuyPassConfirmWithSeasonOptionDialog.prototype.onClick = function (__s9param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s9param0.target)) {
      __s1param0.prototype.onClick.call(this, __s9param0);
      switch (__s9param0.target) {
        case this.dialogDisp.btn_buySeason:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_SeasonLeagueBuyPassConfirmDialog.SeasonLeagueBuyPassConfirmDialog, new __dep_export_SeasonLeagueBuyPassConfirmDialogProperties.SeasonLeagueBuyPassConfirmDialogProperties(new __dep_export_CollectableItemSeasonLeagueSeasonPassVO.CollectableItemSeasonLeagueSeasonPassVO(), __dep_export_CastleModel.CastleModel.seasonLeagueData.getCurrentSeasonPassCostWithSale(), this.seasonPassSale, __dep_export_CastleModel.CastleModel.seasonLeagueData.server.promotionId, this.activeEventID, this.dialogProps.instanceID));
          this.hide();
      }
    }
  };
  Object.defineProperty(SeasonLeagueBuyPassConfirmWithSeasonOptionDialog.prototype, "seasonPassSale", {
    get: function () {
      return Math.max(__dep_export_CastleModel.CastleModel.seasonLeagueData.server.seasonPassDiscount, __dep_export_CastleModel.CastleModel.seasonLeagueData.currentSetting.seasonPassFullDiscount);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueBuyPassConfirmWithSeasonOptionDialog.prototype, "activeEventID", {
    get: function () {
      if (this.dialogProps.eventID > 0) {
        return this.dialogProps.eventID;
      } else if (__dep_export_CastleModel.CastleModel.seasonLeagueData.isAnySeasonEventActive()) {
        return __dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonEventVO().eventId;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueBuyPassConfirmWithSeasonOptionDialog.NAME = "SeasonLeaguePassBuyConfirmWithSeasonOption";
  return SeasonLeagueBuyPassConfirmWithSeasonOptionDialog;
}(__dep_export_SeasonLeagueBuyPassConfirmDialog.SeasonLeagueBuyPassConfirmDialog);
exports.SeasonLeagueBuyPassConfirmWithSeasonOptionDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
