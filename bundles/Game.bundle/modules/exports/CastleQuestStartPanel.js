Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstTracking = require("gge-module:export_ClientConstTracking");
var __dep_export_C2SClientSideTrackingVO = require("gge-module:export_C2SClientSideTrackingVO");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleDialogEvent = require("gge-module:export_CastleDialogEvent");
var __dep_export_CastleQuestDataEvent = require("gge-module:export_CastleQuestDataEvent");
var __dep_export_SettingsEvent = require("gge-module:export_SettingsEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleStartQuestDialogProperties = require("gge-module:export_CastleStartQuestDialogProperties");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastlePanel = require("gge-module:export_CastlePanel");
var __dep_export_CastleQuestDialogProperties = require("gge-module:export_CastleQuestDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleQuestStartPanel() {
    var __s3local0 = this;
    __s3local0._dontShowSpeechBubble = false;
    __s3local0.questUserSawBefore = null;
    __s3local0._questReminderWasShown = false;
    __s3local0._showQuestProgressBubble = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, new Library.CastleInterfaceElements.QuestStartPanel()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleQuestStartPanel, __s1param0);
  CastleQuestStartPanel.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.questStartPanel.mc_newQuest.mouseChildren = false;
    this.questStartPanel.mc_newQuest.basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(this.questStartPanel.mc_newQuest);
    this.questStartPanel.btn_questGiver.mouseChildren = false;
    this.questStartPanel.btn_questGiver.basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(this.questStartPanel.btn_questGiver);
    this.questStartPanel.btn_questBook.txt_questCount.textColor = 16777215;
    this.itxt_questCount = this.textFieldManager.registerTextField(this.questStartPanel.btn_questBook.txt_questCount, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.itxt_quest_txt_title = this.textFieldManager.registerTextField(this.questStartPanel.mc_newQuest.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      this.questStartPanel.mc_newQuest.scaleX = this.questStartPanel.mc_newQuest.scaleY = 0.8;
      this.questStartPanel.btn_questBook.scaleX = this.questStartPanel.btn_questBook.scaleY = 0.8;
    }
    this.questStartPanel.mc_newQuest.doCache();
    this.questStartPanel.btn_questBook.doCache();
  };
  CastleQuestStartPanel.prototype.destroy = function () {
    __dep_export_CastleModel.CastleModel.settingsData.removeEventListener(__dep_export_SettingsEvent.SettingsEvent.MINICHAT_VISIBILITY_CHANGED, this.bindFunction(this.onChatChange));
    __dep_export_CastleModel.CastleModel.questData.removeEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onQuestStart));
    __dep_export_CastleModel.CastleModel.questData.removeEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_PROGRESS, this.bindFunction(this.onQuestProgress));
    __dep_export_CastleModel.CastleModel.questData.removeEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_FINISHED, this.bindFunction(this.onQuestFinished));
    __dep_export_CastleModel.CastleModel.questData.removeEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onGetQuestList));
    __dep_export_CastleModel.CastleModel.settingsData.removeEventListener(__dep_export_SettingsEvent.SettingsEvent.QUESTREMINDER_STATE_CHANGED, this.bindFunction(this.onQuestReminderStateChanged));
    this.controller.removeEventListener(__dep_export_CastleDialogEvent.CastleDialogEvent.CLOSE_QUESTINFO, this.bindFunction(this.onClosedQuestInfo));
    this.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.hideBubbleOnWorldmap));
  };
  CastleQuestStartPanel.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.settingsData.addEventListener(__dep_export_SettingsEvent.SettingsEvent.MINICHAT_VISIBILITY_CHANGED, this.bindFunction(this.onChatChange));
    __dep_export_CastleModel.CastleModel.questData.addEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onQuestStart));
    __dep_export_CastleModel.CastleModel.questData.addEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_PROGRESS, this.bindFunction(this.onQuestProgress));
    __dep_export_CastleModel.CastleModel.questData.addEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_FINISHED, this.bindFunction(this.onQuestFinished));
    __dep_export_CastleModel.CastleModel.questData.addEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onGetQuestList));
    __dep_export_CastleModel.CastleModel.settingsData.addEventListener(__dep_export_SettingsEvent.SettingsEvent.QUESTREMINDER_STATE_CHANGED, this.bindFunction(this.onQuestReminderStateChanged));
    this.controller.addEventListener(__dep_export_CastleDialogEvent.CastleDialogEvent.CLOSE_QUESTINFO, this.bindFunction(this.onClosedQuestInfo));
    this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.hideBubbleOnWorldmap));
  };
  CastleQuestStartPanel.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.settingsData.removeEventListener(__dep_export_SettingsEvent.SettingsEvent.MINICHAT_VISIBILITY_CHANGED, this.bindFunction(this.onChatChange));
    __dep_export_CastleModel.CastleModel.questData.removeEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onQuestStart));
    __dep_export_CastleModel.CastleModel.questData.removeEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_PROGRESS, this.bindFunction(this.onQuestProgress));
    __dep_export_CastleModel.CastleModel.questData.removeEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_FINISHED, this.bindFunction(this.onQuestFinished));
    __dep_export_CastleModel.CastleModel.questData.removeEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onGetQuestList));
    __dep_export_CastleModel.CastleModel.settingsData.removeEventListener(__dep_export_SettingsEvent.SettingsEvent.QUESTREMINDER_STATE_CHANGED, this.bindFunction(this.onQuestReminderStateChanged));
    this.controller.removeEventListener(__dep_export_CastleDialogEvent.CastleDialogEvent.CLOSE_QUESTINFO, this.bindFunction(this.onClosedQuestInfo));
    this.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.hideBubbleOnWorldmap));
  };
  CastleQuestStartPanel.prototype.onClosedQuestInfo = function (__s14param0) {
    this.questUserSawBefore = __s14param0.params[0];
    this.show();
  };
  CastleQuestStartPanel.prototype.onQuestStart = function (__s16param0) {
    if (!__s16param0.quest.hidden) {
      if (__s16param0.quest || !__dep_export_CastleModel.CastleModel.tutorialData.isTutorialFinished()) {
        if (__s16param0.quest && __s16param0.quest.isStarterQuest) {
          this._focusQuestVO = __s16param0.quest;
          this.showSpeechBubble("panel_quest_newMessage");
          this.showQuestGiverById(__s16param0.quest.questGiverID);
        } else {
          if (__dep_export_CastleModel.CastleModel.questData.activeQuestCount == 1 && __dep_export_CastleModel.CastleModel.userData.userLevel < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_TO_SHOW_QUESTBOOK_WHEN_ONLY_ONE_QUEST_ACTIVE) {
            this._focusQuestVO = __dep_export_CastleModel.CastleModel.questData.getCurrentSingleQuest();
          }
          if (!this.questUserSawBefore || this._focusQuestVO && this.questUserSawBefore && this._focusQuestVO.questID != this.questUserSawBefore.questID) {
            this.showSpeechBubble("panel_quest_newQuest");
          } else {
            this.hideSpeechBubble();
          }
          if (__dep_export_CastleModel.CastleModel.questData.isFirstQuestAfterStarter) {
            if (__dep_export_CastleModel.CastleModel.userData.userLevel > __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_TO_AUTO_SHOW_QEUST_INFO) {
              __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleQuestDialog.CastleQuestDialog, new __dep_export_CastleQuestDialogProperties.CastleQuestDialogProperties(__s16param0.quest));
            }
            if (__dep_export_CastleModel.CastleModel.questData.activeQuestCount > 1) {
              this._focusQuestVO = null;
            }
            this.hideSpeechBubble();
          }
        }
      } else {
        this.hide();
      }
    }
  };
  CastleQuestStartPanel.prototype.onQuestProgress = function (__s29param0) {
    if (!__s29param0.quest.hidden && !__s29param0.quest.isObjective) {
      this.initPanel();
      if (!this._focusQuestVO || !this._focusQuestVO.isStarterQuest) {
        this._focusQuestVO = __s29param0.quest;
        this.showSpeechBubble("panel_quest_progress");
        this.itxt_questCount.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.integer(__dep_export_CastleModel.CastleModel.questData.activeQuestCount) + "";
        this._showQuestProgressBubble = true;
        this.questStartPanel.btn_questBook.doCache();
      }
    }
  };
  CastleQuestStartPanel.prototype.onQuestFinished = function (__s33param0) {
    this._focusQuestVO = null;
    this.itxt_questCount.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.integer(__dep_export_CastleModel.CastleModel.questData.activeQuestCount) + "";
    this.questStartPanel.btn_questBook.doCache();
  };
  CastleQuestStartPanel.prototype.onGetQuestList = function (__s35param0) {
    this._focusQuestVO &&= __dep_export_CastleModel.CastleModel.questData.getActiveQuestByID(this._focusQuestVO.questID);
    if (__dep_export_CastleModel.CastleModel.questData.getCurrentStarterQuestVO()) {
      this._focusQuestVO = __dep_export_CastleModel.CastleModel.questData.getCurrentStarterQuestVO();
      this.showSpeechBubble("panel_quest_newMessage");
    } else if (__dep_export_CastleModel.CastleModel.questData.activeQuestCount == 1) {
      this._focusQuestVO = __dep_export_CastleModel.CastleModel.questData.getCurrentSingleQuest();
    }
    this.initPanel();
  };
  CastleQuestStartPanel.prototype.onQuestReminderStateChanged = function (__s39param0) {
    if (!__dep_export_CastleModel.CastleModel.settingsData.questReminderActive) {
      this.hideSpeechBubble();
    }
    this._questReminderWasShown = false;
    this.initFocus();
  };
  CastleQuestStartPanel.prototype.initFocus = function () {
    var __s42local0 = __dep_export_CastleModel.CastleModel.questData.getCurrentStarterQuestVO();
    if (__s42local0) {
      this._focusQuestVO = __s42local0;
      this.showSpeechBubble("panel_quest_newMessage");
    } else if (__dep_export_CastleModel.CastleModel.questData.activeQuestCount == 1) {
      this._focusQuestVO = __dep_export_CastleModel.CastleModel.questData.getCurrentSingleQuest();
      if (!this.questUserSawBefore || this._focusQuestVO && this._focusQuestVO.questID != this.questUserSawBefore.questID) {
        this.showSpeechBubble("panel_quest_newQuest");
      } else {
        this.hideSpeechBubble();
      }
    } else {
      this._focusQuestVO = null;
      if (__dep_export_CastleModel.CastleModel.settingsData.questReminderActive && !this._questReminderWasShown) {
        this.showSpeechBubble("panel_quest_openQuests");
        this._questReminderWasShown = true;
      } else if (this._showQuestProgressBubble) {
        this.showSpeechBubble("panel_quest_progress");
      } else {
        this.hideSpeechBubble();
      }
    }
  };
  CastleQuestStartPanel.prototype.initPanel = function () {
    if (__dep_export_CastleModel.CastleModel.tutorialData.isInTutorial() && __dep_export_CastleModel.CastleModel.questData.activeQuestCount < 1) {
      this.disp.visible = false;
    } else {
      this.disp.visible = true;
    }
    var __s52local0 = __dep_export_CastleModel.CastleModel.questData.getCurrentStarterQuestVO();
    if (__s52local0) {
      this.showQuestGiverById(__s52local0.questGiverID);
    } else {
      __s52local0 = __dep_export_CastleModel.CastleModel.questData.getCurrentSingleQuest();
      if (__dep_export_CastleModel.CastleModel.questData.activeQuestCount == 1 && __s52local0) {
        this.showQuestGiverById(__s52local0.questGiverID);
      } else {
        this.showQuestBook();
      }
    }
    if (__s52local0 && __s52local0.autoShow) {
      __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.AUTO_SHOW_START_QUEST_DIALOG, __s52local0);
    }
  };
  CastleQuestStartPanel.prototype.setQuestGiverSymbol = function (__s61param0) {
    var __s61local0 = this;
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.questStartPanel.btn_questGiver);
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this.questStartPanel.btn_questGiver);
    var __s61local1;
    var __s61local2 = __dep_export_CastleModel.CastleModel.questData.getQuestGiverSmallClassName(__s61param0, __dep_export_CastleModel.CastleModel.userData.hasAlternativeQuestGiver);
    if (__dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.wasAssetLoaded("QuestGiverSmall_" + __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_UNKNOWN)) {
      var __s61local3 = __dep_exact_81dacdf05bd32292.getDefinitionByName("QuestGiverSmall_" + __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_UNKNOWN + "_Button");
      __s61local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s61local2 + "_Button", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s61local2), null, 0, false, __s61local3);
    } else {
      __s61local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s61local2 + "_Button", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s61local2), null, 0, false);
    }
    __s61local1.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_1.ClipSizeComponent(80, 200);
    this.questStartPanel.btn_questGiver.addChild(__s61local1.asDisplayObject());
    __s61local1.doWhenLoaded(this.questStartPanel.btn_questGiver.bindFunction(function () {
      __s61local0.questStartPanel.btn_questGiver.doCache(0, __dep_export_CastleLayoutManager.CastleLayoutManager.UI_SCALE_FACTOR);
    }));
  };
  CastleQuestStartPanel.prototype.showQuestGiverById = function (__s67param0) {
    if (__dep_export_CastleModel.CastleModel.tutorialData.isTutorialFinished()) {
      this.questStartPanel.btn_questBook.visible = false;
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this.questStartPanel.btn_questBook);
      this.setQuestGiverSymbol(__s67param0);
    } else {
      this.showQuestBook();
    }
  };
  CastleQuestStartPanel.prototype.showQuestBook = function () {
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.questStartPanel.btn_questGiver);
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this.questStartPanel.btn_questGiver);
    this.questStartPanel.btn_questBook.visible = true;
    if (this.itxt_questCount && this.itxt_questCount.textContentVO) {
      this.itxt_questCount.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.integer(__dep_export_CastleModel.CastleModel.questData.activeQuestCount) + "";
    } else {
      this.itxt_questCount = this.textFieldManager.registerTextField(this.questStartPanel.btn_questBook.txt_questCount, new __dep_exact_92d05af59ee2ff30_2.TextVO("" + __dep_exact_92d05af59ee2ff30.Localize.integer(__dep_export_CastleModel.CastleModel.questData.activeQuestCount)), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    }
    this.questStartPanel.btn_questBook.toolTipText = "quests";
    this.questStartPanel.btn_questBook.doCache();
  };
  CastleQuestStartPanel.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.initPanel();
    this.initFocus();
  };
  CastleQuestStartPanel.prototype.showWithoutSpeechBubble = function () {
    this._dontShowSpeechBubble = true;
    this.show();
    this._dontShowSpeechBubble = false;
  };
  CastleQuestStartPanel.prototype.showSpeechBubble = function (__s79param0) {
    if (!this.questStartPanel.btn_questBook.visible && this.questStartPanel.btn_questGiver.numChildren == 0 || this._dontShowSpeechBubble) {
      this.hideSpeechBubble();
    } else {
      this.itxt_questCount.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.integer(__dep_export_CastleModel.CastleModel.questData.activeQuestCount);
      this.itxt_quest_txt_title.textContentVO.textId = __s79param0;
      this.questStartPanel.btn_questBook.doCache();
      this.showNewQuestBubble();
    }
  };
  CastleQuestStartPanel.prototype.showNewQuestBubble = function () {
    var __s83local0 = __dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive;
    var __s83local1 = {
      autoAlpha: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
    };
    if (!__s83local0) {
      __s83local1.onComplete = this.bindFunction(this.hideNewQuestBubble);
      __s83local1.onCompleteParams = [true];
    }
    __dep_exact_608de47b6498f9b0_1.TweenMax.killTweensOf(this.questStartPanel.mc_newQuest);
    __dep_exact_608de47b6498f9b0_1.TweenMax.to(this.questStartPanel.mc_newQuest, CastleQuestStartPanel.QUEST_BUBBLE_ANIMATION_TIME, __s83local1);
  };
  CastleQuestStartPanel.prototype.hideNewQuestBubble = function (__s86param0 = false) {
    __dep_exact_608de47b6498f9b0_1.TweenMax.killTweensOf(this.questStartPanel.mc_newQuest);
    if (!__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive && __s86param0) {
      __dep_exact_608de47b6498f9b0_1.TweenMax.to(this.questStartPanel.mc_newQuest, CastleQuestStartPanel.QUEST_BUBBLE_ANIMATION_TIME, {
        delay: 4,
        autoAlpha: 0,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeOut
      });
    } else {
      this.questStartPanel.mc_newQuest.visible = false;
    }
  };
  CastleQuestStartPanel.prototype.hideSpeechBubble = function () {
    this.hideNewQuestBubble();
    this.itxt_quest_txt_title.clearText();
  };
  CastleQuestStartPanel.prototype.onClick = function (__s92param0) {
    __s1param0.prototype.onClick.call(this, __s92param0);
    switch (__s92param0.target) {
      case this.questStartPanel.btn_questGiver:
      case this.questStartPanel.mc_newQuest:
      case this.questStartPanel.btn_questBook:
        this.onClickQuestPanel();
    }
  };
  CastleQuestStartPanel.prototype.onClickQuestPanel = function () {
    var __s95local0 = false;
    if (this._focusQuestVO) {
      if (this._focusQuestVO.isStarterQuest) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStartQuestDialog.CastleStartQuestDialog, new __dep_export_CastleStartQuestDialogProperties.CastleStartQuestDialogProperties(this._focusQuestVO));
      } else {
        if (this._showQuestProgressBubble) {
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleQuestDialog.CastleQuestDialog, new __dep_export_CastleQuestDialogProperties.CastleQuestDialogProperties(this._focusQuestVO));
        } else {
          __s95local0 = true;
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleQuestDialog.CastleQuestDialog, new __dep_export_CastleQuestDialogProperties.CastleQuestDialogProperties());
        }
        if (__dep_export_CastleModel.CastleModel.questData.activeQuestCount > 1) {
          this._focusQuestVO = null;
        }
      }
    } else if (__dep_export_CastleModel.CastleModel.questData.activeQuestCount >= 1) {
      __s95local0 = true;
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleQuestDialog.CastleQuestDialog, new __dep_export_CastleQuestDialogProperties.CastleQuestDialogProperties());
    }
    this.hideSpeechBubble();
    this._showQuestProgressBubble = false;
    if (__s95local0) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SClientSideTrackingVO.C2SClientSideTrackingVO(__dep_export_ClientConstTracking.ClientConstTracking.TRACKING_RECOMMENDED_QUEST, 0));
    }
  };
  CastleQuestStartPanel.prototype.onChatChange = function (__s105param0) {
    this.updatePosition();
  };
  CastleQuestStartPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.y = this.disp.stage.stageHeight + CastleQuestStartPanel.DAILY_QUEST_SPACE_OFFSET;
      this.disp.x = this.disp.stage.stageWidth;
      if (this.env.hasNetworkBuddies) {
        this.disp.y -= __dep_export_ClientConstCastle.ClientConstCastle.BUDDY_PANEL_HEIGHT;
      }
      if (CastleQuestStartPanel.movePanelUp()) {
        this.disp.y += __dep_export_ClientConstCastle.ClientConstCastle.SEASON_PANEL_OFFSET;
      }
      if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall() && __dep_exact_81dacdf05bd32292.MobileHelper.isLandscape()) {
        this.disp.x -= 20;
        this.disp.y += 20;
      }
    }
  };
  CastleQuestStartPanel.movePanelUp = function () {
    return !!__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().isInTreasureEvent && __dep_export_CastleModel.CastleModel.settingsData.miniChatVisible;
  };
  CastleQuestStartPanel.prototype.hideBubbleOnWorldmap = function (__s115param0) {
    if (__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().currentState != __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO && this.questStartPanel.mc_newQuest.visible) {
      this.questStartPanel.mc_newQuest.visible = false;
      this.itxt_quest_txt_title = this.textFieldManager.registerTextField(this.questStartPanel.mc_newQuest.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    }
  };
  Object.defineProperty(CastleQuestStartPanel.prototype, "questStartPanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleQuestStartPanel.__initialize_static_members = function () {
    CastleQuestStartPanel.NAME = "CastleQuestStartPanel";
    CastleQuestStartPanel.DAILY_QUEST_SPACE_OFFSET = 15;
    CastleQuestStartPanel.QUEST_BUBBLE_ANIMATION_TIME = 0.8;
  };
  return CastleQuestStartPanel;
}(__dep_export_CastlePanel.CastlePanel);
exports.CastleQuestStartPanel = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleQuestDialog = require("gge-module:export_CastleQuestDialog");
var __dep_export_CastleStartQuestDialog = require("gge-module:export_CastleStartQuestDialog");
__s0local0.__initialize_static_members();
