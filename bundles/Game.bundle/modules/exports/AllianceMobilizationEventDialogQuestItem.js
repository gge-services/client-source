Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceQuestSlotVO = require("gge-module:export_AllianceQuestSlotVO");
var __dep_export_AllianceMobilizationEventEventVO = require("gge-module:export_AllianceMobilizationEventEventVO");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_PlaceholderToolTip = require("gge-module:export_PlaceholderToolTip");
var __dep_export_AllianceMobilizationEventQuestInfoDialog = require("gge-module:export_AllianceMobilizationEventQuestInfoDialog");
var __dep_export_AllianceMobilizationEventQuestInfoDialogProperties = require("gge-module:export_AllianceMobilizationEventQuestInfoDialogProperties");
var __s0local0 = function (__s1param0) {
  function AllianceMobilizationEventDialogQuestItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceMobilizationEventDialogQuestItem, __s1param0);
  AllianceMobilizationEventDialogQuestItem.prototype.fill = function () {
    __s1param0.prototype.fill.call(this);
    if (this.questSlotVO) {
      this.getItemMc().visible = true;
      __dep_export_ButtonHelper.ButtonHelper.initButtons([this.getItemMc().btn_collect], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
      __dep_export_ButtonHelper.ButtonHelper.initButtons([this.getItemMc().mc_content], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().btn_collect.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("button_ame_quest_collect"));
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().mc_content.mc_collect.txt_collect, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("button_ame_quest_completed"));
      this.getItemMc().mc_content.mc_assigned.visible = false;
      this.getItemMc().mc_content.mc_collect.visible = false;
      this.getItemMc().mc_content.mc_unassigned.visible = false;
      this.getItemMc().mc_content.mc_cooldown.visible = false;
      this.getItemMc().btn_collect.visible = false;
      this.getItemMc().icon_limitedTime.visible = this.questSlotVO.allianceQuestVO.hasEventTimer();
      this.getItemMc().icon_limitedTime.mouseChildren = false;
      __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTimer));
      switch (this.questSlotVO.state) {
        case __dep_export_AllianceQuestSlotVO.AllianceQuestSlotVO.QUEST_COLLECT:
          this.showCollect();
          break;
        case __dep_export_AllianceQuestSlotVO.AllianceQuestSlotVO.QUEST_ASSIGNED:
        case __dep_export_AllianceQuestSlotVO.AllianceQuestSlotVO.QUEST_ASSIGNED_SELF:
          this.showAssigned();
          break;
        case __dep_export_AllianceQuestSlotVO.AllianceQuestSlotVO.QUEST_COOLDOWN:
          this.showCooldown();
          this.showUnassigned();
          break;
        case __dep_export_AllianceQuestSlotVO.AllianceQuestSlotVO.QUEST_UNASSIGNED:
          this.showUnassigned();
      }
    } else {
      this.getItemMc().visible = false;
    }
  };
  AllianceMobilizationEventDialogQuestItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTimer));
  };
  AllianceMobilizationEventDialogQuestItem.prototype.showAssigned = function () {
    this.getItemMc().mc_content.mc_assigned.visible = true;
    this.getItemMc().mc_content.mc_assigned.mc_questIcon.gotoAndStop(this.getIconFrame());
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().mc_content.mc_assigned.txt_playerName, new __dep_exact_92d05af59ee2ff30.TextVO(this.questSlotVO.playerName));
  };
  AllianceMobilizationEventDialogQuestItem.prototype.showCollect = function () {
    this.getItemMc().btn_collect.visible = true;
    this.getItemMc().mc_content.mc_collect.visible = true;
    this.getItemMc().mc_content.mc_collect.mc_questIcon.gotoAndStop(this.getIconFrame());
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.getItemMc().btn_collect, this.questSlotVO.playerID == __dep_export_CastleModel.CastleModel.userData.playerID);
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().mc_content.mc_collect.txt_points, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, [this.questSlotVO.allianceQuestVO.rewardPoints]));
  };
  AllianceMobilizationEventDialogQuestItem.prototype.showCooldown = function () {
    this.getItemMc().mc_content.mc_cooldown.visible = true;
    this._itxt_cooldown = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().mc_content.mc_cooldown.txt_cooldown, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.onUpdateTimer();
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTimer));
  };
  AllianceMobilizationEventDialogQuestItem.prototype.showUnassigned = function () {
    this.getItemMc().mc_content.mc_unassigned.visible = true;
    this.getItemMc().mc_content.mc_unassigned.mc_questIcon.gotoAndStop(this.getIconFrame());
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().mc_content.mc_unassigned.txt_points, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, [this.questSlotVO.allianceQuestVO.rewardPoints]));
  };
  AllianceMobilizationEventDialogQuestItem.prototype.onUpdateTimer = function (__s20param0 = null) {
    var __s20local0 = this.questSlotVO ? this.questSlotVO.getRemainingTimeInSeconds() : 0;
    this._itxt_cooldown.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__s20local0);
    if (__s20local0 <= 0) {
      __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTimer));
      this.update();
    }
  };
  AllianceMobilizationEventDialogQuestItem.prototype.onClick = function (__s23param0) {
    __s1param0.prototype.onClick.call(this, __s23param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s23param0.target)) {
      switch (__s23param0.target) {
        case this.getItemMc().btn_collect:
          if (this.eventVO) {
            this.eventVO.completeAllianceQuest();
          }
          break;
        default:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AllianceMobilizationEventQuestInfoDialog.AllianceMobilizationEventQuestInfoDialog, new __dep_export_AllianceMobilizationEventQuestInfoDialogProperties.AllianceMobilizationEventQuestInfoDialogProperties(this.questSlotVO));
      }
    }
  };
  AllianceMobilizationEventDialogQuestItem.prototype.onMouseOver = function (__s28param0) {
    __s1param0.prototype.onMouseOver.call(this, __s28param0);
    switch (__s28param0.target) {
      case this.getItemMc().icon_limitedTime:
        this.showTimeLimitTooltip();
    }
  };
  AllianceMobilizationEventDialogQuestItem.prototype.onMouseOut = function (__s31param0) {
    __s1param0.prototype.onMouseOut.call(this, __s31param0);
    switch (__s31param0.target) {
      case this.getItemMc().icon_limitedTime:
        __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTimer));
        __dep_export_PlaceholderToolTip.PlaceholderToolTip.hideToolTip();
    }
  };
  AllianceMobilizationEventDialogQuestItem.prototype.showTimeLimitTooltip = function () {
    AllianceMobilizationEventDialogQuestItem.timeLimitTooltip ||= new (__dep_exact_81dacdf05bd32292.getDefinitionByName("AllianceMobilizationEventMainExt_TimeLimitTooltip"))();
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(AllianceMobilizationEventDialogQuestItem.timeLimitTooltip.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ame_limited_time_event_specific_quest", [this.questSlotVO.allianceQuestVO.getEventNameTextId()]));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(AllianceMobilizationEventDialogQuestItem.timeLimitTooltip.txt_eventName, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_ame_specific_event_timer"));
    AllianceMobilizationEventDialogQuestItem._itxt_eventTimer = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(AllianceMobilizationEventDialogQuestItem.timeLimitTooltip.txt_timer, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __dep_export_PlaceholderToolTip.PlaceholderToolTip.show(this.getItemMc().icon_limitedTime, AllianceMobilizationEventDialogQuestItem.timeLimitTooltip);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTimer));
    this.onUpdateEventTimer(null);
  };
  AllianceMobilizationEventDialogQuestItem.prototype.onUpdateEventTimer = function (__s36param0 = null) {
    if (!this.questSlotVO.allianceQuestVO.hasEventTimer() || !(this.questSlotVO.allianceQuestVO.getRemainingEventTime() > 0)) {
      __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTimer));
      __dep_export_PlaceholderToolTip.PlaceholderToolTip.hideToolTip();
      return;
    }
    var __s36local0 = this.questSlotVO.allianceQuestVO.getRemainingEventTime();
    AllianceMobilizationEventDialogQuestItem._itxt_eventTimer.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__s36local0);
  };
  Object.defineProperty(AllianceMobilizationEventDialogQuestItem.prototype, "eventVO", {
    get: function () {
      return __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.getActiveEventVO(this.questSlotVO ? this.questSlotVO.eventID : 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMobilizationEventDialogQuestItem.prototype, "questSlotVO", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  AllianceMobilizationEventDialogQuestItem.prototype.getIconFrame = function () {
    return this.questSlotVO.allianceQuestVO.questIconFrame;
  };
  AllianceMobilizationEventDialogQuestItem.prototype.destroy = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTimer));
    __s1param0.prototype.destroy.call(this);
  };
  return AllianceMobilizationEventDialogQuestItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.AllianceMobilizationEventDialogQuestItem = __s0local0;
