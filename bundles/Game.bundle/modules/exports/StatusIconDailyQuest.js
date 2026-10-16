Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CastleQuestDataEvent = require("gge-module:export_CastleQuestDataEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ACastleLabeledStatusIcon = require("gge-module:export_ACastleLabeledStatusIcon");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function StatusIconDailyQuest() {
    var __s3local0 = this;
    __s3local0._initLevel = 0;
    __s3local0.hasEverClickedIcon = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, "Btn_DailyActivity", "mc_icon.mc_count.txt_label", new __dep_exact_92d05af59ee2ff30_1.NumberVO(0)) || this).allowCaching = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconDailyQuest, __s1param0);
  StatusIconDailyQuest.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.icon.basicButton.removeMouseEventListener();
    this.icon.basicButton = null;
    this.icon.mouseChildren = true;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.icon.mc_bubble, this.icon.mc_icon]);
    this.icon.mc_icon.toolTipText = "dialog_dailyQuests_hudName";
    this.initElements();
    if (this._initLevel == __dep_exact_26a421b704832cff.DailyQuestConst.MIN_LEVEL) {
      this.showSpeechbubble();
    } else {
      this.hideSpeechbubble();
    }
  };
  StatusIconDailyQuest.prototype.initElements = function () {
    if (this.icon) {
      this._initLevel = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.userLevel);
      if (this._initLevel == __dep_exact_26a421b704832cff.DailyQuestConst.MIN_LEVEL) {
        this.itxt_bubbleText = this.textFieldManager.registerTextField(this.icon.mc_bubble.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_dailyQuests_hudIntro"));
      } else {
        this.itxt_bubbleText = this.textFieldManager.registerTextField(this.icon.mc_bubble.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_dailyQuests_hudCompleted"));
      }
      this.itxt_bubbleText.autoFitToBounds = true;
      this.itxt_bubbleText.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    }
  };
  StatusIconDailyQuest.prototype.setVisibilityLoaded = function () {
    if (this.isVisible()) {
      this.setIndicator();
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconDailyQuest.prototype.isVisible = function () {
    return __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_exact_26a421b704832cff.DailyQuestConst.MIN_LEVEL && __dep_export_CastleModel.CastleModel.dailyQuestData.getRunningQuestCount() > 0;
  };
  StatusIconDailyQuest.prototype.setIndicator = function () {
    if (this.itxt_label) {
      if (this.itxt_label.textContentVO.numberValue > 0 && this.itxt_label.textContentVO.numberValue > __dep_export_CastleModel.CastleModel.dailyQuestData.getRunningQuestCount()) {
        this.showSpeechbubble();
      }
      this.itxt_label.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.dailyQuestData.getRunningQuestCount();
    }
  };
  StatusIconDailyQuest.prototype.onClick = function () {
    this.hideSpeechbubble();
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleDailyQuestDialog.CastleDailyQuestDialog);
    if (!this.hasEverClickedIcon) {
      this.hasEverClickedIcon = true;
      this.itxt_bubbleText.textContentVO.textId = "dialog_dailyQuests_hudCompleted";
    }
  };
  StatusIconDailyQuest.prototype.showSpeechbubble = function () {
    var __s27local0 = __dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive;
    var __s27local1 = {
      autoAlpha: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
    };
    if (!__s27local0) {
      __s27local1.onComplete = this.bindFunction(this.hideTweenSpeechbubble);
      __s27local1.onCompleteParams = [true];
    }
    __dep_exact_608de47b6498f9b0_1.TweenMax.killTweensOf(this.icon.mc_bubble);
    __dep_exact_608de47b6498f9b0_1.TweenMax.to(this.icon.mc_bubble, StatusIconDailyQuest.QUEST_BUBBLE_ANIMATION_TIME, __s27local1);
  };
  StatusIconDailyQuest.prototype.hideTweenSpeechbubble = function (__s30param0 = false) {
    __dep_exact_608de47b6498f9b0_1.TweenMax.killTweensOf(this.icon.mc_bubble);
    if (!__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive && __s30param0) {
      __dep_exact_608de47b6498f9b0_1.TweenMax.to(this.icon.mc_bubble, StatusIconDailyQuest.QUEST_BUBBLE_ANIMATION_TIME, {
        delay: 4,
        autoAlpha: 0,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeOut
      });
    } else {
      this.icon.mc_bubble.visible = false;
    }
  };
  StatusIconDailyQuest.prototype.hideSpeechbubble = function () {
    this.hideTweenSpeechbubble();
  };
  StatusIconDailyQuest.prototype.onRefresh = function (__s36param0) {
    this.setVisibility();
  };
  StatusIconDailyQuest.prototype.onLevelUp = function (__s38param0) {
    this.checkElements();
    if (this._initLevel < __dep_exact_26a421b704832cff.DailyQuestConst.MIN_LEVEL && __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_exact_26a421b704832cff.DailyQuestConst.MIN_LEVEL && !this.hasEverClickedIcon && this.itxt_bubbleText.textContentVO) {
      this.itxt_bubbleText.textContentVO.textId = "dialog_dailyQuests_hudIntro";
      this.itxt_bubbleText.autoFitToBounds = true;
      this.itxt_bubbleText.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
      this.showSpeechbubble();
      this.setVisibility();
    }
  };
  StatusIconDailyQuest.prototype.checkElements = function () {
    if (!this._initLevel || !this.itxt_bubbleText) {
      this.initElements();
    }
  };
  StatusIconDailyQuest.prototype.onClickInnerMC = function (__s44param0) {
    this.onClick();
  };
  StatusIconDailyQuest.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.dailyQuestData.addEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.DAILYQUEST_REFRESHED, this.bindFunction(this.onRefresh));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    this.icon.mc_bubble.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClickInnerMC));
    this.icon.mc_icon.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClickInnerMC));
  };
  StatusIconDailyQuest.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.dailyQuestData.removeEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.DAILYQUEST_REFRESHED, this.bindFunction(this.onRefresh));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    this.icon.mc_bubble.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClickInnerMC));
    this.icon.mc_icon.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClickInnerMC));
  };
  StatusIconDailyQuest.__initialize_static_members = function () {
    StatusIconDailyQuest.QUEST_BUBBLE_ANIMATION_TIME = 0.8;
  };
  return StatusIconDailyQuest;
}(__dep_export_ACastleLabeledStatusIcon.ACastleLabeledStatusIcon);
exports.StatusIconDailyQuest = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleDailyQuestDialog = require("gge-module:export_CastleDailyQuestDialog");
__s0local1.__initialize_static_members();
