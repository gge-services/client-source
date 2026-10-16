Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleHighscoreEvent = require("gge-module:export_CastleHighscoreEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ACastleTournamentEventDialog(__s3param0) {
    var __s3local0 = this;
    __s3local0.DEFAULT_ICON_DIMENSION = new __s0local0(42, 42);
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACastleTournamentEventDialog, __s1param0);
  ACastleTournamentEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close]);
    this.updateStaticText();
    this.initRankListComponent();
    this._rankList.requestHighscoreDataFunction = this.bindFunction(this.requestHighscoreData);
  };
  ACastleTournamentEventDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._rankList.reset();
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRefreshSpecialEvent));
    __dep_export_CastleModel.CastleModel.highscoreData.addEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onGetHighscore));
    __dep_export_CastleModel.CastleModel.highscoreData.addEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR, this.bindFunction(this.onGetHighscoreDataError));
    this.requestHighscoreData("-1");
    this.updateRewards();
    this.updateDialog();
    this._rankList.onShow();
  };
  ACastleTournamentEventDialog.prototype.hideLoaded = function (__s9param0 = null) {
    this._rankList.onHide();
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRefreshSpecialEvent));
    __dep_export_CastleModel.CastleModel.highscoreData.removeEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onGetHighscore));
    __dep_export_CastleModel.CastleModel.highscoreData.removeEventListener(__dep_export_CastleHighscoreEvent.CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR, this.bindFunction(this.onGetHighscoreDataError));
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
  };
  ACastleTournamentEventDialog.prototype.initRankListComponent = function () {};
  ACastleTournamentEventDialog.prototype.updateStaticText = function () {};
  ACastleTournamentEventDialog.prototype.requestHighscoreData = function (__s15param0) {};
  ACastleTournamentEventDialog.prototype.updateTimeText = function () {
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_remainingTime, this.dialogProperties.eventVO.remainingEventTimeInSeconds);
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, this.dialogProperties.eventVO.remainingEventTimeInSeconds);
  };
  ACastleTournamentEventDialog.prototype.setOwnRankTexts = function (__s19param0, __s19param1) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_yourFame, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s19param1));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_yourRank, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s19param0 <= 0 ? "-" : String(__s19param0)));
  };
  ACastleTournamentEventDialog.prototype.updateDialog = function () {
    this.updateTimeText();
  };
  ACastleTournamentEventDialog.prototype.updateRewards = function () {
    this.destroyCollectableRenderList();
  };
  ACastleTournamentEventDialog.prototype.setRewardsTop1 = function (__s25param0) {
    this.setRewardsBySimpleRewardList("mc_reward_top1_", __s25param0);
  };
  ACastleTournamentEventDialog.prototype.setRewardsTop2 = function (__s27param0) {
    this.setRewardsBySimpleRewardList("mc_reward_top2_", __s27param0);
  };
  ACastleTournamentEventDialog.prototype.setRewardsTop3 = function (__s29param0) {
    this.setRewardsBySimpleRewardList("mc_reward_top3_", __s29param0);
  };
  ACastleTournamentEventDialog.prototype.setRewardsBySimpleRewardList = function (__s31param0, __s31param1) {
    for (var __s31local0, __s31local1 = 0; __s31local1 < __s31param1.length && (__s31local0 = this.dialogDisp[__s31param0 + __s31local1]); ++__s31local1) {
      this.addCollectableItem(__s31local0, __s31param1.getItemByIndexSave(__s31local1));
    }
  };
  ACastleTournamentEventDialog.prototype.addCollectableItem = function (__s35param0, __s35param1) {
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s35param0).addColorBgMc(__s35param0.mc_background), __s35param1, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_TOURNAMENT_DEFAULT, this.defaultRewardIconDimension));
  };
  Object.defineProperty(ACastleTournamentEventDialog.prototype, "defaultRewardIconDimension", {
    get: function () {
      return this.DEFAULT_ICON_DIMENSION;
    },
    enumerable: true,
    configurable: true
  });
  ACastleTournamentEventDialog.prototype.onClick = function (__s39param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s39param0.target)) {
      __s1param0.prototype.onClick.call(this, __s39param0);
      switch (__s39param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  ACastleTournamentEventDialog.prototype.onRemoveSpecialEvent = function (__s43param0) {
    if (__s43param0.specialEventVO.eventId == this.dialogProperties.eventVO.eventId) {
      this.hide();
    }
  };
  ACastleTournamentEventDialog.prototype.onTimerUpdate = function (__s46param0) {
    this.updateTimeText();
  };
  ACastleTournamentEventDialog.prototype.onRefreshSpecialEvent = function (__s48param0) {
    if (__s48param0.specialEventVO.eventId == this.dialogProperties.eventVO.eventId) {
      this.dialogProperties.eventVO = __s48param0.specialEventVO;
      this.updateDialog();
    }
  };
  ACastleTournamentEventDialog.prototype.onGetHighscoreDataError = function (__s51param0) {
    this.isWaitingForServerMessage = false;
  };
  ACastleTournamentEventDialog.prototype.onGetHighscore = function (__s53param0 = null) {
    this.isWaitingForServerMessage = false;
    this._rankList.updateWithNewData(__s53param0.params[0]);
  };
  Object.defineProperty(ACastleTournamentEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  return ACastleTournamentEventDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.ACastleTournamentEventDialog = __s0local1;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
