Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_AllianceRaidEventDialogActivityRewards = require("gge-module:export_AllianceRaidEventDialogActivityRewards");
var __dep_export_AllianceRaidEventDialogBossDefeatRewards = require("gge-module:export_AllianceRaidEventDialogBossDefeatRewards");
var __s0local0 = function (__s1param0) {
  function AllianceRaidEventDialogBossRewards(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._startRewardTab = AllianceRaidEventDialogBossRewards.REWARD_TAB_BOSS_DEFEAT;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceRaidEventDialogBossRewards, __s1param0);
  AllianceRaidEventDialogBossRewards.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.content.tab_activity, this.content.tab_bossDefeat], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_timer.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("remainingTime"));
    this._itxt_timer = this.textFieldManager.registerTextField(this.subLayerDisp.mc_timer.txt_remainingTime, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this._rewardTabs = new Map();
    this._rewardTabs.set(AllianceRaidEventDialogBossRewards.REWARD_TAB_ACTIVITY, new __dep_export_AllianceRaidEventDialogActivityRewards.AllianceRaidEventDialogActivityRewards(this.content[AllianceRaidEventDialogBossRewards.REWARD_TAB_ACTIVITY]));
    this._rewardTabs.set(AllianceRaidEventDialogBossRewards.REWARD_TAB_BOSS_DEFEAT, new __dep_export_AllianceRaidEventDialogBossDefeatRewards.AllianceRaidEventDialogBossDefeatRewards(this.content[AllianceRaidEventDialogBossRewards.REWARD_TAB_BOSS_DEFEAT]));
    this.initTabIcon(this.content.tab_activity, "mc_activity");
    this.initTabIcon(this.content.tab_bossDefeat, "mc_bossDefeat");
  };
  AllianceRaidEventDialogBossRewards.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    this._itxt_title = this.textFieldManager.registerTextField(this.content.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this._itxt_title.autoFitToBounds = true;
    this.setTabLabel(this.content.tab_activity, __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_are_activityreward_title"));
    this.setTabLabel(this.content.tab_bossDefeat, this._rewardTabs.get(AllianceRaidEventDialogBossRewards.REWARD_TAB_BOSS_DEFEAT).titleText);
    this._currentRewardTab = null;
    this.changeRewardTab(this._startRewardTab);
    this.onTimerUpdate();
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  AllianceRaidEventDialogBossRewards.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this._currentRewardTabView) {
      this._currentRewardTabView.hide();
      this._currentRewardTabView = null;
    }
    this._currentRewardTab = null;
    this._startRewardTab = AllianceRaidEventDialogBossRewards.REWARD_TAB_BOSS_DEFEAT;
    this.portalBossID = 0;
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  AllianceRaidEventDialogBossRewards.prototype.showRewardTab = function (__s12param0) {
    this._startRewardTab = __s12param0;
    if (this.isSublayerActive) {
      this.changeRewardTab(__s12param0);
    }
  };
  AllianceRaidEventDialogBossRewards.prototype.changeRewardTab = function (__s15param0) {
    if (this._rewardTabs.has(__s15param0) && this._currentRewardTab != __s15param0) {
      if (this._currentRewardTabView) {
        this._currentRewardTabView.hide();
      }
      this._currentRewardTab = __s15param0;
      this._currentRewardTabView = this._rewardTabs.get(__s15param0);
      this._currentRewardTabView.show(this._params);
      this._itxt_title.textContentVO.stringValue = __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_are_boss_defeated_rewards");
      this.updateTabSelection();
    }
  };
  AllianceRaidEventDialogBossRewards.prototype.updateTabSelection = function () {
    this.setTabSelected(this.content.tab_activity, this._currentRewardTab == AllianceRaidEventDialogBossRewards.REWARD_TAB_ACTIVITY);
    this.setTabSelected(this.content.tab_bossDefeat, this._currentRewardTab == AllianceRaidEventDialogBossRewards.REWARD_TAB_BOSS_DEFEAT);
  };
  AllianceRaidEventDialogBossRewards.prototype.initTabIcon = function (__s21param0, __s21param1) {
    if (__s21param0) {
      if (__s21param0.mc_activity) {
        __s21param0.mc_activity.visible = __s21param1 == "mc_activity";
      }
      if (__s21param0.mc_bossDefeat) {
        __s21param0.mc_bossDefeat.visible = __s21param1 == "mc_bossDefeat";
      }
    }
  };
  AllianceRaidEventDialogBossRewards.prototype.setTabLabel = function (__s26param0, __s26param1) {
    if (__s26param0) {
      if (__s26param0.txt_selected) {
        this.textFieldManager.registerTextField(__s26param0.txt_selected, new __dep_exact_92d05af59ee2ff30.TextVO(__s26param1)).autoFitToBounds = true;
      }
      if (__s26param0.txt_not_selected) {
        this.textFieldManager.registerTextField(__s26param0.txt_not_selected, new __dep_exact_92d05af59ee2ff30.TextVO(__s26param1)).autoFitToBounds = true;
      }
    }
  };
  AllianceRaidEventDialogBossRewards.prototype.setTabSelected = function (__s31param0, __s31param1) {
    if (__s31param0.txt_selected) {
      __s31param0.txt_selected.visible = __s31param1;
    }
    if (__s31param0.mc_selected) {
      __s31param0.mc_selected.visible = __s31param1;
    }
    if (__s31param0.txt_not_selected) {
      __s31param0.txt_not_selected.visible = !__s31param1;
    }
  };
  Object.defineProperty(AllianceRaidEventDialogBossRewards.prototype, "portalBossID", {
    get: function () {
      return this._rewardTabs.get(AllianceRaidEventDialogBossRewards.REWARD_TAB_BOSS_DEFEAT).portalBossID;
    },
    set: function (__s38param0) {
      this._rewardTabs.forEach(function (__s40param0) {
        __s40param0.portalBossID = __s38param0;
      });
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidEventDialogBossRewards.prototype.onTimerUpdate = function (__s42param0 = null) {
    this._itxt_timer.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.eventVO.remainingEventTimeInSeconds);
  };
  AllianceRaidEventDialogBossRewards.prototype.onClick = function (__s44param0) {
    __s1param0.prototype.onClick.call(this, __s44param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s44param0.target)) {
      switch (__s44param0.target) {
        case this.content.tab_activity:
          this.changeRewardTab(AllianceRaidEventDialogBossRewards.REWARD_TAB_ACTIVITY);
          break;
        case this.content.tab_bossDefeat:
          this.changeRewardTab(AllianceRaidEventDialogBossRewards.REWARD_TAB_BOSS_DEFEAT);
      }
    }
  };
  Object.defineProperty(AllianceRaidEventDialogBossRewards.prototype, "content", {
    get: function () {
      return this.subLayerDisp.mc_content;
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidEventDialogBossRewards.prototype.updatePosition = function (__s50param0, __s50param1) {
    __s1param0.prototype.updatePosition.call(this, __s50param0, __s50param1);
    var __s50local0 = this.subLayerDisp.parent;
    this.subLayerDisp.mc_timer.x = __s50param0 - __s50local0.mc_buttons.width - 10;
    this.subLayerDisp.mc_timer.y = 5;
    this.content.x = __s50param0 / 2;
    this.content.y = (__s50param1 - __s50local0.mc_tabs.height - 8) / 2 + __s50local0.mc_tabs.height + 8;
  };
  AllianceRaidEventDialogBossRewards.REWARD_TAB_ACTIVITY = "tab_activityRewards";
  AllianceRaidEventDialogBossRewards.REWARD_TAB_BOSS_DEFEAT = "sublayer_bossDefeat";
  return AllianceRaidEventDialogBossRewards;
}(require("gge-module:export_AllianceRaidEventDialogSublayer").AllianceRaidEventDialogSublayer);
exports.AllianceRaidEventDialogBossRewards = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
