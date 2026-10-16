Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_DefaultGlobalLeaderBoardItem = require("gge-module:export_DefaultGlobalLeaderBoardItem");
var __dep_export_GlobalLeaderBoardComponent = require("gge-module:export_GlobalLeaderBoardComponent");
var __dep_export_GlobalLeaderBoardLeagueComponent = require("gge-module:export_GlobalLeaderBoardLeagueComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_DonationRankingRewardsDialogProperties = require("gge-module:export_DonationRankingRewardsDialogProperties");
var __dep_export_GlobalLeaderboardRankingRankingRewardsDialog = require("gge-module:export_GlobalLeaderboardRankingRankingRewardsDialog");
var __s0local0 = function (__s1param0) {
  function AGlobalLeaderBoardDialog(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AGlobalLeaderBoardDialog, __s1param0);
  AGlobalLeaderBoardDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_rewards], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this._globalLeaderBoardComponent = new __dep_export_GlobalLeaderBoardComponent.GlobalLeaderBoardComponent(this.dialogDisp, this.getListItemClass(), this.getDefaultSearchString());
  };
  AGlobalLeaderBoardDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._globalLeaderBoardComponent.init(this.listType, new __dep_export_GlobalLeaderBoardLeagueComponent.GlobalLeaderBoardLeagueComponent(this.dialogDisp, this.eventID));
    this._globalLeaderBoardComponent.onShow();
    this._globalLeaderBoardComponent.openRewardDialogSignal.add(this.bindFunction(this.showRewards));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
  };
  AGlobalLeaderBoardDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    if (this._globalLeaderBoardComponent) {
      this._globalLeaderBoardComponent.onHide();
      this._globalLeaderBoardComponent.openRewardDialogSignal.removeAll();
    }
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
  };
  AGlobalLeaderBoardDialog.prototype.onRemoveSpecialEvent = function (__s12param0) {
    if (__s12param0.specialEventVO.eventId == this.eventID) {
      this.hide();
    }
  };
  AGlobalLeaderBoardDialog.prototype.onClick = function (__s15param0) {
    __s1param0.prototype.onClick.call(this, __s15param0);
    switch (__s15param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        this.showHelp();
    }
  };
  AGlobalLeaderBoardDialog.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text(this.helpTextId));
  };
  AGlobalLeaderBoardDialog.prototype.showRewards = function (__s20param0 = -1) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_GlobalLeaderboardRankingRankingRewardsDialog.GlobalLeaderboardRankingRankingRewardsDialog, new __dep_export_DonationRankingRewardsDialogProperties.DonationRankingRewardsDialogProperties(this.rewardDialogTextID, this.getGlobalLeaderBoardRewards(__s20param0)));
  };
  AGlobalLeaderBoardDialog.prototype.getListItemClass = function () {
    return __dep_export_DefaultGlobalLeaderBoardItem.DefaultGlobalLeaderBoardItem;
  };
  AGlobalLeaderBoardDialog.prototype.getDefaultSearchString = function () {
    return "dialog_highscore_name_alliance_search";
  };
  Object.defineProperty(AGlobalLeaderBoardDialog.prototype, "helpTextId", {
    get: function () {
      return "help_highscore";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGlobalLeaderBoardDialog.prototype, "rewardDialogTextID", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  AGlobalLeaderBoardDialog.prototype.getGlobalLeaderBoardRewards = function (__s30param0 = -1) {
    return [];
  };
  Object.defineProperty(AGlobalLeaderBoardDialog.prototype, "eventID", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGlobalLeaderBoardDialog.prototype, "listType", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGlobalLeaderBoardDialog.prototype, "leagueTypeID", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  return AGlobalLeaderBoardDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.AGlobalLeaderBoardDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
