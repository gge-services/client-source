Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_TimeRangeValidator = require("gge-module:export_TimeRangeValidator");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleSetTimeDialogProperties = require("gge-module:export_CastleSetTimeDialogProperties");
var __dep_export_CastleBookmarkPasserProperties = require("gge-module:export_CastleBookmarkPasserProperties");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function TeamAttackConfiguration(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._checkButtonSubmitState = __s3param1;
    __s3local0._disp = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TeamAttackConfiguration, __s1param0);
  TeamAttackConfiguration.prototype.show = function (__s5param0) {
    this._date = new Date();
    this._allianceInfo = __dep_export_CastleModel.CastleModel.allianceData.getAllianceInfoVOByID(__dep_export_CastleModel.CastleModel.userData.allianceID);
    this._bookmarkAttackTimeValidator = new __dep_export_TimeRangeValidator.TimeRangeValidator(__dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_BOOKMARK_MIN_TIME_OFFSET, __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_BOOKMARK_MAX_TIME_OFFSET);
    this._bookmarkAttackTimeValidator.updateCurrentTime();
    this._bookmarkVO = __s5param0;
    this._bookmarkVO.attackOrderDetails.attackDate = new Date();
    this._bookmarkVO.attackOrderDetails.attackTimeStamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + 3600000;
    if (this._bookmarkVO.attackOrderDetails.assignedAttackers.length == 0) {
      this._bookmarkVO.attackOrderDetails.assignedAttackers.push(__dep_export_CastleModel.CastleModel.userData.playerID);
    }
    this._disp.visible = true;
    this.initButtons();
    this.initTexts();
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this._disp.btn_sendMessage, this._bookmarkVO.attackOrderDetails.sendMessageToAssignedAttackers);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerSecondTick));
    this.updateDateAndTimeDisplay();
    this._checkButtonSubmitState();
  };
  TeamAttackConfiguration.prototype.onTimerSecondTick = function (__s8param0) {
    this.updateDateAndTimeDisplay();
  };
  TeamAttackConfiguration.prototype.updateDateAndTimeDisplay = function () {
    this._bookmarkAttackTimeValidator.updateCurrentTime();
    this._bookmarkAttackTimeValidator.validateTime(this._date);
    var __s10local0 = __dep_exact_f855840627e6e145.int(this._date.getTime() - new Date().getTime());
    this._bookmarkVO.attackOrderDetails.attackTimeStamp = __s10local0 * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    this._selectedDate.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30_1.Localize.datetime(this._date, __dep_exact_92d05af59ee2ff30.DateTimeStyle.SHORT, __dep_exact_92d05af59ee2ff30.DateTimeStyle.NONE);
    this._selectedTime.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30_1.Localize.datetime(this._date, __dep_exact_92d05af59ee2ff30.DateTimeStyle.NONE, __dep_exact_92d05af59ee2ff30.DateTimeStyle.SHORT);
  };
  TeamAttackConfiguration.prototype.hide = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerSecondTick));
    this.disposeButtons();
    this._disp.visible = false;
  };
  TeamAttackConfiguration.prototype.initTexts = function () {
    this.textFieldManager.registerTextField(this._disp.btn_choose_arrivaltime.txt_text, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("Bookmarks_addBookmark_alliance_setTime"));
    this.textFieldManager.registerTextField(this._disp.btn_select_attackers.txt_text, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("Bookmarks_addBookmark_alliance_setParticipants"));
    if (this._disp.btn_select_attackers.cacheCanvas) {
      this._disp.btn_select_attackers.updateCache();
    }
    this.textFieldManager.registerTextField(this._disp.txt_send_message_to_attackers, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("Bookmarks_addBookmark_alliance_sendConfirmation"));
    this._selectedDate = this.textFieldManager.registerTextField(this._disp.mc_attack_date.txt_value, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    this._disp.mc_attack_date.toolTipText = "Bookmarks_alliance_setTime_attackDay_copy";
    this._disp.mc_attack_date.mouseChildren = false;
    this._selectedTime = this.textFieldManager.registerTextField(this._disp.mc_attack_time.txt_value, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    this._disp.mc_attack_time.toolTipText = "Bookmarks_alliance_setTime_attackTime_copy";
    this._disp.mc_attack_time.mouseChildren = false;
    var __s14local0 = __dep_exact_f855840627e6e145.int(this.countAssignedAttackers());
    this._selectedAttackers = this.textFieldManager.registerTextField(this._disp.mc_assigned_players.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__s14local0 > 1 ? "dialog_alliance_bookmarks_attackerAmount" : "dialog_alliance_bookmarks_attackerAmount_singular", [__s14local0]));
    this._disp.mc_assigned_players.mouseChildren = false;
    this._disp.mc_assigned_players.toolTipText = "Bookmarks_addBookmark_alliance_participants_tooltip";
  };
  TeamAttackConfiguration.prototype.countAssignedAttackers = function () {
    return this._bookmarkVO.attackOrderDetails.assignedAttackers.length;
  };
  TeamAttackConfiguration.prototype.onClick = function (__s19param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s19param0.target)) {
      switch (__s19param0.target) {
        case this._disp.btn_choose_arrivaltime:
          this.showArrivalSelection();
          break;
        case this._disp.btn_select_attackers:
          this.showAttackerSelection();
          break;
        case this._disp.btn_sendMessage:
          this._bookmarkVO.attackOrderDetails.sendMessageToAssignedAttackers = !this._bookmarkVO.attackOrderDetails.sendMessageToAssignedAttackers;
          __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this._disp.btn_sendMessage, this._bookmarkVO.attackOrderDetails.sendMessageToAssignedAttackers);
      }
    }
  };
  TeamAttackConfiguration.prototype.showAttackerSelection = function () {
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
      TeamAttackConfiguration.dialogHandler.registerDefaultDialogs(__dep_export_CastleBookmarkAttackerSelectionDialog.CastleBookmarkAttackerSelectionDialog, new __dep_export_CastleBookmarkPasserProperties.CastleBookmarkPasserProperties(this._bookmarkVO, this.bindFunction(this.onAttackerSelectionChange)));
    }
  };
  TeamAttackConfiguration.prototype.onAttackerSelectionChange = function () {
    var __s26local0 = __dep_exact_f855840627e6e145.int(this.countAssignedAttackers());
    this._selectedAttackers.textContentVO.textId = __s26local0 > 1 ? "dialog_alliance_bookmarks_attackerAmount" : "dialog_alliance_bookmarks_attackerAmount_singular";
    this._selectedAttackers.textContentVO.textReplacements = [__s26local0];
    this._checkButtonSubmitState();
  };
  TeamAttackConfiguration.prototype.showArrivalSelection = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerSecondTick));
    TeamAttackConfiguration.dialogHandler.registerDefaultDialogs(__dep_export_CastleAllianceBookmarkSetTimeDialog.CastleAllianceBookmarkSetTimeDialog, new __dep_export_CastleSetTimeDialogProperties.CastleSetTimeDialogProperties(this._date.getTime(), __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_BOOKMARK_MIN_TIME_OFFSET, __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_BOOKMARK_MAX_TIME_OFFSET, this.bindFunction(this.onTimeSelectionComplete)));
  };
  TeamAttackConfiguration.prototype.onTimeSelectionComplete = function (__s30param0) {
    this._date.setTime(__s30param0);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerSecondTick));
  };
  TeamAttackConfiguration.prototype.initButtons = function () {
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this._disp.btn_choose_arrivaltime);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this._disp.btn_select_attackers);
    __dep_export_ButtonHelper.ButtonHelper.initCheckBox(this._disp.btn_sendMessage);
    this._disp.btn_choose_arrivaltime.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this._disp.btn_select_attackers.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this._disp.btn_sendMessage.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    var __s32local0 = __dep_export_CastleModel.CastleModel.allianceData.hasRight(__dep_export_CastleModel.CastleModel.userData.allianceRank, __dep_exact_26a421b704832cff.AllianceConst.RIGHT_MANAGE_BOOKMARKS);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_select_attackers, __s32local0);
    this._disp.btn_select_attackers.toolTipText = __s32local0 ? "" : "Bookmarks_addBookmark_alliance_rankToLow_tooltip";
  };
  TeamAttackConfiguration.prototype.disposeButtons = function () {
    this._disp.btn_choose_arrivaltime.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this._disp.btn_select_attackers.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this._disp.btn_sendMessage.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
  };
  Object.defineProperty(TeamAttackConfiguration.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TeamAttackConfiguration, "dialogHandler", {
    get: function () {
      return __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return TeamAttackConfiguration;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.TeamAttackConfiguration = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAllianceBookmarkSetTimeDialog = require("gge-module:export_CastleAllianceBookmarkSetTimeDialog");
var __dep_export_CastleBookmarkAttackerSelectionDialog = require("gge-module:export_CastleBookmarkAttackerSelectionDialog");
