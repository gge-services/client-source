Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstInstanceIDs = require("gge-module:export_ClientConstInstanceIDs");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleLogoutEvent = require("gge-module:export_CastleLogoutEvent");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleTutorialEvent = require("gge-module:export_CastleTutorialEvent");
var __dep_export_CastleQuestDataEvent = require("gge-module:export_CastleQuestDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_TutorialStepVO = require("gge-module:export_TutorialStepVO");
var __dep_export_TutorialListenerObject = require("gge-module:export_TutorialListenerObject");
var __s0local0 = function (__s1param0) {
  function CastleTutorialData(__s3param0) {
    var __s3local0 = this;
    __s3local0._tutorialStepVOs = [];
    __s3local0._existingListeners = new Array();
    __s3local0._isTutorialActive = false;
    __s3local0._isWaitingToStartTutorial = false;
    __s3local0._isCompletelyLoggedIn = false;
    __s3local0.isSkippingTutorial = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).parseChapters(__s3param0.tutorials);
    __s3local0.reinit();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTutorialData, __s1param0);
  CastleTutorialData.prototype.reset = function () {
    this.reinit();
  };
  CastleTutorialData.prototype.reinit = function () {
    this._isTutorialActive = false;
    this._isWaitingToStartTutorial = false;
    this._isCompletelyLoggedIn = false;
    this._currentStep = null;
    this._delayedSteps = [];
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onLoginProcessComplete));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleLogoutEvent.CastleLogoutEvent.LOGOUT_TRIGGERED, this.bindFunction(this.onLogout));
    __dep_export_CastleModel.CastleModel.questData.addEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onQuestStart));
    __dep_export_CastleModel.CastleModel.questData.addEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onQuestStart));
    __dep_export_CastleModel.CastleModel.questData.addEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.QUEST_FINISHED, this.bindFunction(this.onQuestFinish));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleTutorialEvent.CastleTutorialEvent.STEP_FINISHED, this.bindFunction(this.onStepFinished));
  };
  CastleTutorialData.prototype.onQuestStart = function (__s9param0) {
    this.checkQuest(CastleTutorialData.QUEST_IDS, function (__s11param0) {
      return __dep_export_CastleModel.CastleModel.questData.getActiveQuestByID(__s11param0);
    });
  };
  CastleTutorialData.prototype.onQuestFinish = function (__s13param0) {
    this.checkQuest(CastleTutorialData.FINISH_QUEST_IDS, function (__s15param0) {
      return __s13param0.quest.questID == __s15param0;
    });
  };
  CastleTutorialData.prototype.onStepFinished = function (__s17param0) {
    this.checkQuest(CastleTutorialData.STEP_FINISHED, function (__s19param0) {
      return __s17param0.params[0] == __s19param0;
    });
  };
  CastleTutorialData.prototype.checkQuest = function (__s21param0, __s21param1) {
    if (!this.isSkippingTutorial && this._tutorialStepVOs != null) {
      for (var __s21local0 = 0, __s21local1 = this._tutorialStepVOs; __s21local0 < __s21local1.length; __s21local0++) {
        var __s21local2 = __s21local1[__s21local0];
        if (__s21local2 !== undefined && __s21local2.attributes.has(__s21param0)) {
          var __s21local3 = __s21local2.attributes.get(__s21param0).split(",");
          if (__s21local3 != null) {
            for (var __s21local4 = 0, __s21local5 = __s21local3; __s21local4 < __s21local5.length; __s21local4++) {
              var __s21local6 = __s21local5[__s21local4];
              if (__s21local6 !== undefined) {
                var __s21local7 = parseInt(__s21local6);
                if (__s21param1(__s21local7)) {
                  this.handleStep(__s21local2, __s21local7);
                  return;
                }
              }
            }
          }
        }
      }
    }
  };
  CastleTutorialData.prototype.handleStep = function (__s32param0, __s32param1) {
    if (!this._currentStep || __s32param0.id != this._currentStep.id) {
      if (this._isCompletelyLoggedIn) {
        if (this.isTutorialActive) {
          this.delayStep(__s32param0, __s32param1);
        } else {
          this.startTutorialStep(__s32param0, __s32param1);
        }
      } else {
        this.delayStep(__s32param0, __s32param1);
        this._isWaitingToStartTutorial = true;
      }
    }
  };
  CastleTutorialData.prototype.delayStep = function (__s39param0, __s39param1) {
    if (this._delayedSteps != null) {
      for (var __s39local0 = 0, __s39local1 = this._delayedSteps; __s39local0 < __s39local1.length; __s39local0++) {
        var __s39local2 = __s39local1[__s39local0];
        if (__s39local2 !== undefined && (__s39local2.step.id == __s39param0.id || __s39local2.questId == __s39param1)) {
          return;
        }
      }
    }
    this._delayedSteps.push({
      step: __s39param0,
      questId: __s39param1
    });
  };
  CastleTutorialData.prototype.onLoginProcessComplete = function (__s45param0) {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onLoginProcessComplete));
    if (!__dep_export_ClientConstInstanceIDs.ClientConstInstanceIDs.isBetaInstance()) {
      this.startTutorialOnLoginComplete();
    }
  };
  CastleTutorialData.prototype.startTutorialOnLoginComplete = function () {
    this._isCompletelyLoggedIn = true;
    if (this._isWaitingToStartTutorial) {
      this._isWaitingToStartTutorial = false;
      if (!this.isTutorialFinished()) {
        __dep_exact_9e901e8e2483a22f_1.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f.ClientFunnelGameStates.TUTORIAL_START);
      }
      this.checkDelayedSteps();
    }
  };
  CastleTutorialData.prototype.startTutorialStep = function (__s52param0, __s52param1) {
    this._isWaitingToStartTutorial = false;
    if (this.isTutorialFinished()) {
      __dep_exact_9e901e8e2483a22f_2.debug("We should've started a tutorial step although it seems to be finished! Step: " + (__s52param0 ? __s52param0.id : "null"));
      this.activateTutorial(false);
      __dep_export_CastleTutorialSpotlight.CastleTutorialSpotlight.instance.destroyTutorialCanvas();
      return;
    }
    this._currentStep = __s52param0;
    __dep_export_CastleTutorialController.CastleTutorialController.getInstance().startStep(__s52param0, __s52param1);
  };
  CastleTutorialData.prototype.parseChapters = function (__s55param0) {
    if (__s55param0 != null) {
      for (var __s55local0 = 0, __s55local1 = __s55param0; __s55local0 < __s55local1.length; __s55local0++) {
        var __s55local2 = __s55local1[__s55local0];
        if (__s55local2 !== undefined) {
          var __s55local3 = new __dep_export_TutorialStepVO.TutorialStepVO().parseData(__s55local2);
          this._tutorialStepVOs.push(__s55local3);
        }
      }
    }
  };
  CastleTutorialData.prototype.activateTutorial = function (__s61param0) {
    this._isTutorialActive = __s61param0;
  };
  Object.defineProperty(CastleTutorialData.prototype, "isTutorialActive", {
    get: function () {
      return this._isTutorialActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTutorialData.prototype, "currentTutorialCommand", {
    get: function () {
      if (this._currentStep) {
        return this._currentStep.command;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleTutorialData.prototype.removeAllListeners = function () {
    if (this._existingListeners != null) {
      for (var __s69local0 = 0, __s69local1 = this._existingListeners; __s69local0 < __s69local1.length; __s69local0++) {
        var __s69local2 = __s69local1[__s69local0];
        if (__s69local2 !== undefined) {
          __s69local2.target.removeEventListener(__s69local2.type, __s69local2.listenerFunc);
        }
      }
    }
    this._existingListeners = new Array();
  };
  CastleTutorialData.prototype.removeFromExisting = function (__s75param0) {
    for (var __s75local0 = 0; __s75local0 < this._existingListeners.length; __s75local0++) {
      if (this._existingListeners[__s75local0].listenerFunc == __s75param0) {
        this._existingListeners.splice(__s75local0, 1);
        break;
      }
    }
  };
  CastleTutorialData.prototype.registerListener = function (__s80param0, __s80param1, __s80param2) {
    var __s80local0 = new __dep_export_TutorialListenerObject.TutorialListenerObject(__s80param0, __s80param1, __s80param2);
    __s80local0.target.addEventListener(__s80param1, __s80param2);
    this._existingListeners.push(__s80local0);
    return __s80local0;
  };
  CastleTutorialData.prototype.removeListener = function (__s82param0, __s82param1, __s82param2) {
    if (this._existingListeners != null) {
      for (var __s82local0 = 0, __s82local1 = this._existingListeners; __s82local0 < __s82local1.length; __s82local0++) {
        var __s82local2 = __s82local1[__s82local0];
        if (__s82local2 !== undefined && __s82local2.listenerFunc == __s82param2 && __s82local2.target == __s82param0 && __s82local2.type == __s82param1) {
          __s82local2.target.removeEventListener(__s82param1, __s82param2);
          this._existingListeners.splice(this._existingListeners.indexOf(__s82local2), 1);
          return;
        }
      }
    }
  };
  CastleTutorialData.prototype.onLogout = function (__s88param0) {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleLogoutEvent.CastleLogoutEvent.LOGOUT_TRIGGERED, this.bindFunction(this.onLogout));
    this.removeAllListeners();
    this.clearBlockers();
    this.reinit();
  };
  CastleTutorialData.prototype.clearBlockers = function () {
    __dep_export_CastleTutorialArrowController.CastleTutorialArrowController.instance.clear();
    __dep_export_CastleTutorialClickBlocker.CastleTutorialClickBlocker.instance.clear();
    __dep_export_CastleTutorialSpotlight.CastleTutorialSpotlight.instance.clear();
    __dep_export_CastleTutorialDialogFilter.CastleTutorialDialogFilter.instance.clear();
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.LOCK_CAMERA, [false]));
  };
  Object.defineProperty(CastleTutorialData.prototype, "existingListeners", {
    get: function () {
      return this._existingListeners;
    },
    enumerable: true,
    configurable: true
  });
  CastleTutorialData.prototype.isInTutorial = function () {
    return this.isTutorialActive;
  };
  CastleTutorialData.prototype.isTutorialFinished = function () {
    return __dep_export_CastleModel.CastleModel.userData.userXP >= __dep_exact_26a421b704832cff.TutorialConst.LAST_TUTORIAL_STEP_XP;
  };
  CastleTutorialData.prototype.checkDelayedSteps = function () {
    var __s98local0 = this._delayedSteps.shift();
    return !!__s98local0 && (this.startTutorialStep(__s98local0.step, __s98local0.questId), true);
  };
  CastleTutorialData.QUEST_IDS = "questIDs";
  CastleTutorialData.FINISH_QUEST_IDS = "onfinishQuestIDs";
  CastleTutorialData.STEP_FINISHED = "stepFinished";
  return CastleTutorialData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleTutorialData = __s0local0;
var __dep_export_CastleTutorialArrowController = require("gge-module:export_CastleTutorialArrowController");
var __dep_export_CastleTutorialClickBlocker = require("gge-module:export_CastleTutorialClickBlocker");
var __dep_export_CastleTutorialController = require("gge-module:export_CastleTutorialController");
var __dep_export_CastleTutorialDialogFilter = require("gge-module:export_CastleTutorialDialogFilter");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleTutorialSpotlight = require("gge-module:export_CastleTutorialSpotlight");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
