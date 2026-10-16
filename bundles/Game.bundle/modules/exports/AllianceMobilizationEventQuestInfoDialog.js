Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_AllianceQuestEvent = require("gge-module:export_AllianceQuestEvent");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceQuestSlotVO = require("gge-module:export_AllianceQuestSlotVO");
var __dep_export_AllianceMobilizationEventEventVO = require("gge-module:export_AllianceMobilizationEventEventVO");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_AllianceQuestProgressComponent = require("gge-module:export_AllianceQuestProgressComponent");
var __dep_export_AllianceQuestTicketComponent = require("gge-module:export_AllianceQuestTicketComponent");
var __s0local0 = function (__s1param0) {
  function AllianceMobilizationEventQuestInfoDialog() {
    return __s1param0.call(this, AllianceMobilizationEventQuestInfoDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceMobilizationEventQuestInfoDialog, __s1param0);
  AllianceMobilizationEventQuestInfoDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this._questProgress = new __dep_export_AllianceQuestProgressComponent.AllianceQuestProgressComponent();
    this._questTicketComponent = new __dep_export_AllianceQuestTicketComponent.AllianceQuestTicketComponent(this.dialogDisp.mc_unassigned.mc_tickets);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.mc_cooldown.btn_skipCooldown, this.dialogDisp.mc_unassigned.btn_reroll, this.dialogDisp.mc_unassigned.btn_accept, this.dialogDisp.mc_assigned_self.btn_cancel], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_cooldown.btn_skipCooldown.txt_label, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("button_ame_quest_skip_cooldown")));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_unassigned.btn_reroll.txt_label, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("button_ame_quest_rerrol")));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_unassigned.btn_accept.txt_label, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("button_ame_quest_accept")));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_unassigned.txt_attempts, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("popup_ame_quest_ticket_counter"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_assigned_self.btn_cancel.txt_label, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("button_ame_quest_cancel")));
    this._itxt_eventTime = this.textFieldManager.registerTextField(this.dialogDisp.mc_eventTimer.txt_timer, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
  };
  AllianceMobilizationEventQuestInfoDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.updateDialog();
    this.textFieldManager.registerTextField(this.dialogDisp.mc_eventTimer.txt_eventName, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.dialogProperties.questSlotVO.allianceQuestVO.getEventNameTextId()));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_AllianceQuestEvent.AllianceQuestEvent.ALLIANCE_QUESTS_UPDATED, this.bindFunction(this.onAllianceQuestsUpdated));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onEventTimerUpdate));
  };
  AllianceMobilizationEventQuestInfoDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    if (this._questTicketComponent) {
      this._questTicketComponent.onHide();
    }
    if (this._questProgress) {
      this._questProgress.hide();
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_AllianceQuestEvent.AllianceQuestEvent.ALLIANCE_QUESTS_UPDATED, this.bindFunction(this.onAllianceQuestsUpdated));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onCooldowntimerUpdate));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onEventTimerUpdate));
  };
  AllianceMobilizationEventQuestInfoDialog.prototype.updateDialog = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text("popup_ame_quest_header"))));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_title.txt_value, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30.Localize.text(this.dialogProperties.questSlotVO.allianceQuestVO.getTitleTextId(this.eventVO), this.dialogProperties.questSlotVO.allianceQuestVO.getTitleTextReplacements())))).autoFitToBounds = true;
    this.showTeaser();
    this.dialogDisp.mc_cooldown.visible = false;
    this.dialogDisp.mc_assigned.visible = false;
    this.dialogDisp.mc_assigned_self.visible = false;
    this.dialogDisp.mc_unassigned.visible = false;
    this.dialogDisp.mc_eventTimer.visible = false;
    switch (this.dialogProperties.questSlotVO.state) {
      case __dep_export_AllianceQuestSlotVO.AllianceQuestSlotVO.QUEST_COLLECT:
      case __dep_export_AllianceQuestSlotVO.AllianceQuestSlotVO.QUEST_ASSIGNED:
        this.showAssigned();
        break;
      case __dep_export_AllianceQuestSlotVO.AllianceQuestSlotVO.QUEST_ASSIGNED_SELF:
        this.showAssignedSelf();
        break;
      case __dep_export_AllianceQuestSlotVO.AllianceQuestSlotVO.QUEST_COOLDOWN:
        this.showCooldown();
        break;
      case __dep_export_AllianceQuestSlotVO.AllianceQuestSlotVO.QUEST_UNASSIGNED:
        this.showUnassigned();
    }
  };
  AllianceMobilizationEventQuestInfoDialog.prototype.showTeaser = function () {
    var __s16local0;
    var __s16local1 = this;
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_teaser);
    this.dialogDisp.mc_teaser.y = -253;
    if (this.dialogProperties.questSlotVO.eventID == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_MOBILISATION) {
      var __s16local2 = "AllianceQuestTeaser_" + this.dialogProperties.questSlotVO.allianceQuestVO.questType;
      __s16local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s16local2, __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s16local2), null, 0, false);
    } else if (this.dialogProperties.questSlotVO.eventID == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_RAID_MOBILISATION) {
      var __s16local3 = "General";
      if (this.dialogProperties.questSlotVO.allianceQuestVO.useAREBanner) {
        var __s16local4 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_RAID);
        __s16local3 = __s16local4 ? __s16local4.raidBossServerDataVO.getCurrentXMLBossDataVO().name : "General";
      }
      (__s16local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("AllianceQuestTeaser_ARE_" + __s16local3, __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl("AllianceQuestTeaser_ARE"), null, 0, false)).doWhenLoaded(function (__s21param0) {
        __s21param0.currentshownDisplayObject.mc_icon.gotoAndStop(__s16local1.dialogProperties.questSlotVO.allianceQuestVO.questIconFrame);
      });
    }
    this.dialogDisp.mc_teaser.addChild(__s16local0);
  };
  AllianceMobilizationEventQuestInfoDialog.prototype.showAssigned = function () {
    this.dialogDisp.mc_assigned.visible = true;
    this._questProgress.show(this.dialogDisp.mc_assigned.mc_progress, this.dialogProperties.questSlotVO);
    this._questProgress.questExpirationSignal.add(this.bindFunction(this.onQuestExpire));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_assigned.mc_progress.txt_playerName, new __dep_exact_92d05af59ee2ff30_1.TextVO(this.dialogProperties.questSlotVO.playerName));
    this.showRewardPoints(this.dialogDisp.mc_assigned.mc_reward);
  };
  AllianceMobilizationEventQuestInfoDialog.prototype.showAssignedSelf = function () {
    this.dialogDisp.mc_assigned_self.visible = true;
    this._questProgress.show(this.dialogDisp.mc_assigned_self.mc_progress, this.dialogProperties.questSlotVO);
    this._questProgress.questExpirationSignal.add(this.bindFunction(this.onQuestExpire));
    var __s25local0 = this.dialogProperties.questSlotVO.allianceQuestVO.cancelCostC2;
    this._itxt_cancelCosts = this.textFieldManager.registerTextField(this.dialogDisp.mc_assigned_self.txt_cancelCosts, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s25local0));
    this._itxt_cancelCosts.color = __dep_export_CastleModel.CastleModel.currencyData.c2Amount >= __s25local0 ? __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT : __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_assigned_self.txt_playerName, new __dep_exact_92d05af59ee2ff30_1.TextVO(this.dialogProperties.questSlotVO.playerName));
    this.showRewardPoints(this.dialogDisp.mc_assigned_self.mc_reward);
  };
  AllianceMobilizationEventQuestInfoDialog.prototype.showCooldown = function () {
    this.dialogDisp.mc_cooldown.visible = true;
    this._questProgress.show(this.dialogDisp.mc_cooldown.mc_progress, this.dialogProperties.questSlotVO);
    this.showRewardPoints(this.dialogDisp.mc_cooldown.mc_reward);
    this._itxt_skipCosts = this.textFieldManager.registerTextField(this.dialogDisp.mc_cooldown.txt_skipCosts, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this._itxt_cooldown = this.textFieldManager.registerTextField(this.dialogDisp.mc_cooldown.mc_cooldownTimer.txt_cooldown, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_cooldown.mc_cooldownTimer.txt_cooldownLabel, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_cooldown_timer"));
    this.onCooldowntimerUpdate(null);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onCooldowntimerUpdate));
  };
  AllianceMobilizationEventQuestInfoDialog.prototype.showUnassigned = function () {
    this.dialogDisp.mc_unassigned.visible = true;
    this._questProgress.show(this.dialogDisp.mc_unassigned.mc_progress, this.dialogProperties.questSlotVO);
    this.showRewardPoints(this.dialogDisp.mc_unassigned.mc_reward);
    this._questTicketComponent.setEventID(this.eventVO.eventId);
    this._questTicketComponent.onShow();
    var __s29local0 = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(this.eventVO.ticketCurrencyID) > 0;
    var __s29local1 = this.eventVO.questSlots.some(function (__s31param0) {
      return __s31param0.playerID == __dep_export_CastleModel.CastleModel.userData.playerID;
    });
    this.dialogDisp.mc_unassigned.btn_accept.toolTipText = __s29local1 ? "popup_ame_quest_claim_notification" : __s29local0 ? null : "popup_ame_quest_ticket_counter_tooltip";
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_unassigned.btn_accept, __s29local0 && !__s29local1);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
  };
  AllianceMobilizationEventQuestInfoDialog.prototype.showRewardPoints = function (__s33param0) {
    this.textFieldManager.registerTextField(__s33param0.txt_rewardTitle, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__dep_exact_92d05af59ee2ff30.Localize.text(this.eventVO.getEventSpecificTextID("popup_ame_quest_reward_title")))));
    var __s33local0 = this.textFieldManager.registerTextField(__s33param0.txt_rewardPoints, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_NOMINAL_ADD, [this.dialogProperties.questSlotVO.allianceQuestVO.rewardPoints]));
    __s33local0.textAlign = __dep_exact_9e901e8e2483a22f.GGSTextAlign.LEFT;
    var __s33local1 = this.textFieldManager.registerTextField(__s33param0.txt_points, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.eventVO.getEventSpecificTextID("popup_ame_quest_reward")));
    var __s33local2 = __s33local0.textWidth + __s33local1.textWidth;
    __s33local0.x = -__s33local2 / 2;
    __s33local1.x = __s33local0.x + __s33local0.textWidth + 5;
  };
  AllianceMobilizationEventQuestInfoDialog.prototype.onCooldowntimerUpdate = function (__s35param0 = null) {
    var __s35local0 = this.dialogProperties.questSlotVO.getRemainingTimeInSeconds();
    if (this._itxt_cooldown) {
      this._itxt_cooldown.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__s35local0);
      var __s35local1 = this.dialogProperties.questSlotVO.getCooldownSkipCosts();
      this._itxt_skipCosts.textContentVO.numberValue = this.dialogProperties.questSlotVO.getCooldownSkipCosts();
      this._itxt_skipCosts.color = __dep_export_CastleModel.CastleModel.currencyData.c2Amount >= __s35local1 ? __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT : __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    }
    if (__s35local0 <= 0) {
      __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onCooldowntimerUpdate));
      this.updateDialog();
    }
  };
  AllianceMobilizationEventQuestInfoDialog.prototype.onAllianceQuestsUpdated = function (__s39param0) {
    this.updateDialog();
  };
  AllianceMobilizationEventQuestInfoDialog.prototype.onCurrenciesUpdated = function (__s41param0 = null) {
    if (this.dialogProperties.questSlotVO.state === __dep_export_AllianceQuestSlotVO.AllianceQuestSlotVO.QUEST_UNASSIGNED) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_unassigned.btn_accept, __dep_export_CastleModel.CastleModel.currencyData.getAmountById(this.eventVO.ticketCurrencyID) > 0);
    }
  };
  AllianceMobilizationEventQuestInfoDialog.prototype.onQuestExpire = function () {
    if (this.eventVO) {
      this.eventVO.requestAllianceQuestStatus();
    }
    this.hide();
  };
  AllianceMobilizationEventQuestInfoDialog.prototype.onEventTimerUpdate = function (__s47param0 = null) {
    if (this.dialogProperties.questSlotVO.allianceQuestVO.hasEventTimer()) {
      this.dialogDisp.mc_eventTimer.visible = true;
      if (this._itxt_eventTime) {
        var __s47local0 = this.dialogProperties.questSlotVO.allianceQuestVO.getRemainingEventTime();
        this._itxt_eventTime.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__s47local0);
      }
    } else {
      this.dialogDisp.mc_eventTimer.visible = false;
    }
  };
  AllianceMobilizationEventQuestInfoDialog.prototype.onClick = function (__s52param0) {
    __s1param0.prototype.onClick.call(this, __s52param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s52param0.target)) {
      switch (__s52param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.mc_cooldown.btn_skipCooldown:
          this.eventVO.skipCooldown(this.dialogProperties.questSlotVO.slotID, this.dialogProperties.questSlotVO.allianceQuestID);
          this.hide();
          break;
        case this.dialogDisp.mc_unassigned.btn_reroll:
          this.eventVO.rerollAllianceQuest(this.dialogProperties.questSlotVO.slotID, this.dialogProperties.questSlotVO.allianceQuestID);
          this.hide();
          break;
        case this.dialogDisp.mc_unassigned.btn_accept:
          this.eventVO.startAllianceQuest(this.dialogProperties.questSlotVO.slotID, this.dialogProperties.questSlotVO.allianceQuestID);
          this.hide();
          break;
        case this.dialogDisp.mc_assigned_self.btn_cancel:
          this.eventVO.cancelAllianceQuest();
          this.hide();
      }
    }
  };
  Object.defineProperty(AllianceMobilizationEventQuestInfoDialog.prototype, "eventVO", {
    get: function () {
      return __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.getActiveEventVO(this.dialogProperties.questSlotVO ? this.dialogProperties.questSlotVO.eventID : 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMobilizationEventQuestInfoDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AllianceMobilizationEventQuestInfoDialog.NAME = "AllianceMobilizationEventQuestInfoExt_Dec25";
  return AllianceMobilizationEventQuestInfoDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.AllianceMobilizationEventQuestInfoDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
