Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstQuestCondition = require("gge-module:export_ClientConstQuestCondition");
var __dep_export_CastleTutorialArrowController = require("gge-module:export_CastleTutorialArrowController");
var __dep_export_CastleLogoutEvent = require("gge-module:export_CastleLogoutEvent");
var __dep_export_CastleQuestDataEvent = require("gge-module:export_CastleQuestDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_GeneralIntroductionPopUpDialog = require("gge-module:export_GeneralIntroductionPopUpDialog");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_GeneralCinematicVO = require("gge-module:export_GeneralCinematicVO");
var __dep_export_TutorialListenerObject = require("gge-module:export_TutorialListenerObject");
var __s0local0 = function (__s1param0) {
  function GeneralIntroductionData() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._guidanceListeners = [];
    __s3local0.onProgress = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0.reset();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralIntroductionData, __s1param0);
  GeneralIntroductionData.prototype.reset = function () {
    this._activeIntroductionQuest = null;
    this.removeGeneralIntroductionGuidance();
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleLogoutEvent.CastleLogoutEvent.LOGOUT_TRIGGERED, this.bindFunction(this.onLogout));
    __dep_export_CastleModel.CastleModel.smartfoxClient.addEventListener(__dep_exact_9e901e8e2483a22f.SmartfoxEvent.CONNECTION_LOST, this.bindFunction(this.onConnectionLost));
    __dep_export_CastleModel.CastleModel.questData.addEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onQuestStart));
    __dep_export_CastleModel.CastleModel.questData.addEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onQuestStart));
    __dep_export_CastleModel.CastleModel.questData.addEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_FINISHED, this.bindFunction(this.onQuestFinish));
  };
  GeneralIntroductionData.prototype.canAccessGenerals = function () {
    var __s7local0 = __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_GENERALS;
    var __s7local1 = !this._activeIntroductionQuest || this._activeIntroductionQuest.questSeriesNumber > GeneralIntroductionData.QUEST_STARTER_1;
    return __s7local0 && __s7local1;
  };
  GeneralIntroductionData.prototype.isIntroductionFinished = function () {
    var __s9local0 = __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_GENERALS;
    var __s9local1 = __dep_export_CastleModel.CastleModel.questData.isQuestSeriesActive(GeneralIntroductionData.QUEST_SERIES_ID);
    return __s9local0 && !__s9local1;
  };
  GeneralIntroductionData.prototype.canAttackWolfking = function () {
    if (this.activeIntroductionQuest) {
      var __s11local0 = this.activeIntroductionQuest.conditions[0];
      return __s11local0.conditionType == __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_COMMANDER || __s11local0.conditionType == __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEAT_WOLFKING;
    }
    return false;
  };
  GeneralIntroductionData.prototype.canTauntWolfking = function () {
    if (this.activeIntroductionQuest) {
      var __s14local0 = this.activeIntroductionQuest.conditions[0].conditionType == __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEND_WOLFKING;
      var __s14local1 = __dep_export_CastleModel.CastleModel.lordData.getBaronByCastleMapObjectVO(__dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle());
      var __s14local2 = !!__s14local1 && !!__s14local1.assignedGeneralVO;
      return __s14local0 && __s14local2;
    }
    return false;
  };
  GeneralIntroductionData.prototype.getAvailableCinematics = function () {
    var __s17local0 = [];
    var __s17local1 = this.isIntroductionFinished();
    var __s17local2 = new __dep_export_GeneralCinematicVO.GeneralCinematicVO(1);
    var __s17local3 = new __dep_export_GeneralCinematicVO.GeneralCinematicVO(2);
    if (__s17local1 || this._activeIntroductionQuest && this._activeIntroductionQuest.questSeriesNumber >= GeneralIntroductionData.QUEST_GENERALS_INN_1) {
      __s17local0.push(__s17local2);
    }
    if (__s17local1 || this._activeIntroductionQuest && this._activeIntroductionQuest.questSeriesNumber >= GeneralIntroductionData.QUEST_GENERAL_INN_2) {
      __s17local0.push(__s17local3);
    }
    return __s17local0;
  };
  GeneralIntroductionData.prototype.onConnectionLost = function (__s21param0) {
    this.onLogout(null);
  };
  GeneralIntroductionData.prototype.onLogout = function (__s23param0) {
    this.removeGeneralIntroductionGuidance();
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleLogoutEvent.CastleLogoutEvent.LOGOUT_TRIGGERED, this.bindFunction(this.onLogout));
    __dep_export_CastleModel.CastleModel.smartfoxClient.removeEventListener(__dep_exact_9e901e8e2483a22f.SmartfoxEvent.CONNECTION_LOST, this.bindFunction(this.onConnectionLost));
    __dep_export_CastleModel.CastleModel.questData.removeEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onQuestStart));
    __dep_export_CastleModel.CastleModel.questData.removeEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onQuestStart));
    __dep_export_CastleModel.CastleModel.questData.removeEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_FINISHED, this.bindFunction(this.onQuestFinish));
  };
  GeneralIntroductionData.prototype.onQuestStart = function (__s25param0) {
    var __s25local0 = !!this._activeIntroductionQuest || __s25param0.quest && __s25param0.quest.questSeriesID == GeneralIntroductionData.QUEST_SERIES_ID;
    this._activeIntroductionQuest = __dep_export_CastleModel.CastleModel.questData.getActiveQuestFromSeries(GeneralIntroductionData.QUEST_SERIES_ID);
    if (__s25local0 && this._activeIntroductionQuest) {
      var __s25local1 = this._activeIntroductionQuest.conditions[0];
      switch (__s25local1.conditionType) {
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_BARON:
          this.showGeneralIntroductionGuidance(__dep_export_IngameClientCommands.IngameClientCommands.GENERAL_INTRODUCTION_GUIDANCE_ASSIGN_BARON, __s25local1);
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_COMMANDER:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEAT_WOLFKING:
          this.showGeneralIntroductionGuidance(__dep_export_IngameClientCommands.IngameClientCommands.GENERAL_INTRODUCTION_GUIDANCE_ATTACK_WOLFKING, __s25local1);
      }
    }
    this.onProgress.dispatch();
  };
  GeneralIntroductionData.prototype.onQuestFinish = function (__s29param0) {
    this._activeIntroductionQuest = __dep_export_CastleModel.CastleModel.questData.getActiveQuestFromSeries(GeneralIntroductionData.QUEST_SERIES_ID);
    if (__s29param0.quest.questSeriesID == GeneralIntroductionData.QUEST_SERIES_ID) {
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().removeGuidancePanel();
      this.removeGeneralIntroductionGuidance();
      if (__s29param0.quest.questSeriesNumber == GeneralIntroductionData.QUEST_STARTER_1) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_GeneralIntroductionPopUpDialog.GeneralIntroductionPopUpDialog, null, true);
        __dep_exact_9e901e8e2483a22f_1.ClientFunnelTrackingController.getInstance().trackState("start_generals_intro");
      }
    }
    this.onProgress.dispatch();
  };
  Object.defineProperty(GeneralIntroductionData.prototype, "activeIntroductionQuest", {
    get: function () {
      return this._activeIntroductionQuest;
    },
    enumerable: true,
    configurable: true
  });
  GeneralIntroductionData.prototype.executeShowMeOfCurrentQuest = function () {
    __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SHOW_HOW_TODO_QUESTCONDITION_COMMAND, [this._activeIntroductionQuest, this._activeIntroductionQuest.conditions[0]]);
  };
  GeneralIntroductionData.prototype.registerListener = function (__s37param0, __s37param1, __s37param2) {
    var __s37local0 = new __dep_export_TutorialListenerObject.TutorialListenerObject(__s37param0, __s37param1, __s37param2);
    __s37local0.target.addEventListener(__s37param1, __s37param2);
    this._guidanceListeners.push(__s37local0);
    return __s37local0;
  };
  GeneralIntroductionData.prototype.showGeneralIntroductionGuidance = function (__s39param0, __s39param1) {
    this.removeGeneralIntroductionGuidance();
    __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__s39param0, __s39param1);
  };
  GeneralIntroductionData.prototype.removeGeneralIntroductionGuidance = function () {
    if (__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().guidancePanel) {
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().guidancePanel.hide();
    }
    __dep_export_CastleTutorialArrowController.CastleTutorialArrowController.instance.clear();
    this._guidanceListeners.forEach(function (__s44param0) {
      return __s44param0.target.removeEventListener(__s44param0.type, __s44param0.listenerFunc);
    });
    this._guidanceListeners = [];
  };
  GeneralIntroductionData.QUEST_SERIES_ID = 10000;
  GeneralIntroductionData.QUEST_STARTER_1 = 1;
  GeneralIntroductionData.QUEST_GENERALS_INN_1 = 2;
  GeneralIntroductionData.QUEST_ASSIGN_TO_BARON = 3;
  GeneralIntroductionData.QUEST_DEFEND_WOLFKING = 4;
  GeneralIntroductionData.QUEST_STARTER_2 = 5;
  GeneralIntroductionData.QUEST_ASSIGN_TO_COMMANDER = 6;
  GeneralIntroductionData.QUEST_DEFEAT_WOLFKING = 7;
  GeneralIntroductionData.QUEST_GENERAL_INN_2 = 8;
  GeneralIntroductionData.QUEST_GACHA_DRAW = 9;
  GeneralIntroductionData.QUEST_STARTER_3 = 10;
  GeneralIntroductionData.QUEST_GENERAL_OVERVIEW = 11;
  return GeneralIntroductionData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.GeneralIntroductionData = __s0local0;
