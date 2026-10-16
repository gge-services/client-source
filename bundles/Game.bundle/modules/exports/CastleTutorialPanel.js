Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function (__s1param0) {
  function CastleTutorialPanel(__s3param0 = null) {
    var __s3local0 = this;
    __s3local0._fadeAllowed = true;
    __s3local0._currentPosition = 0;
    __s3local0._lockedQuestGiverID = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0 ?? new Library.CastleInterfaceElements.TutorialPanel()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTutorialPanel, __s1param0);
  CastleTutorialPanel.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.icopy = this.textFieldManager.registerTextField(this.tutorialPanel.mc_speechBubble.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.icopy.autoFitToBounds = true;
    this.icopy.mouseEnabled = false;
    this.tutorialPanel.mc_questGiver.mouseChildren = false;
    if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
      this.tutorialPanel.mc_questGiver.scaleX = this.tutorialPanel.mc_questGiver.scaleY = 0.6;
      this.tutorialPanel.mc_speechBubble.scaleX = this.tutorialPanel.mc_speechBubble.scaleY = 0.6;
    }
  };
  CastleTutorialPanel.prototype.showSpeechBubble = function (__s8param0, __s8param1 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_UNKNOWN), __s8param2 = __dep_exact_f855840627e6e145.int(CastleTutorialPanel.POS_CENTER), __s8param3 = true, __s8param4 = false) {
    this.setText(__s8param0, __s8param1);
    this.showWithFadeIn(__s8param2, __s8param3, __s8param4);
  };
  CastleTutorialPanel.prototype.hide = function () {
    this._lockedQuestGiverID = -1;
    __s1param0.prototype.hide.call(this);
  };
  CastleTutorialPanel.prototype.show = function () {
    __s1param0.prototype.show.call(this);
  };
  CastleTutorialPanel.prototype.showWithText = function (__s14param0, __s14param1, __s14param2 = CastleTutorialPanel.POS_TOP_RIGHT, __s14param3 = null) {
    __s1param0.prototype.show.call(this);
    this.setText(__s14param0, __s14param1, __s14param3);
    this.showWithFadeIn(__s14param2, false);
  };
  CastleTutorialPanel.prototype.setText = function (__s16param0, __s16param1, __s16param2 = null) {
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.tutorialPanel.mc_questGiver);
    var __s16local0 = __dep_export_CastleModel.CastleModel.questData.getQuestGiverSmallClassName(__s16param1, __dep_export_CastleModel.CastleModel.userData.hasAlternativeQuestGiver);
    var __s16local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s16local0 + "_Icon", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s16local0), null, 0, false, __dep_exact_81dacdf05bd32292.getDefinitionByName("QuestGiverSmall_" + __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_UNKNOWN + "_Icon"));
    if (__s16param1 != __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER) {
      __s16local1.clipSizeComponent = new __dep_exact_9e901e8e2483a22f_1.ClipSizeComponent(134, 153);
    }
    this.tutorialPanel.mc_questGiver.addChild(__s16local1.asDisplayObject());
    this._lockedQuestGiverID = __s16param1;
    this.icopy ||= this.textFieldManager.registerTextField(this.tutorialPanel.mc_speechBubble.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this._fadeAllowed = this.icopy.textContentVO.textId != __s16param0;
    this.icopy.textContentVO.textId = __s16param0;
    if (__s16param2) {
      this.icopy.textContentVO.textReplacements = __s16param2;
    }
    this.icopy.verticalAlign = __dep_exact_9e901e8e2483a22f_2.GGSVerticalAlign.MIDDLE;
  };
  CastleTutorialPanel.prototype.showWithFadeIn = function (__s20param0, __s20param1 = true, __s20param2 = false) {
    this._currentPosition = __s20param0;
    this.updatePosition();
    this.hideOkButton();
    this.tutorialPanel.mc_speechBubble.visible = false;
    this.tutorialPanel.mc_questGiver.visible = true;
    this.show();
    if (__s20param1 && this._fadeAllowed) {
      __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.tutorialPanel.mc_questGiver, 0, {
        alpha: 0.1
      }, {
        alpha: 1,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeOut,
        onComplete: this.fadeInSpeechBubble,
        onCompleteParams: [__s20param2]
      });
    } else {
      this.tutorialPanel.mc_questGiver.alpha = 1;
      this.fadeInSpeechBubble([__s20param2]);
    }
  };
  CastleTutorialPanel.prototype.fadeInSpeechBubble = function (__s24param0) {
    if (__s24param0.shift()) {
      this.showOkButton();
    }
    this.tutorialPanel.mc_speechBubble.visible = true;
    if (this._fadeAllowed) {
      __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.tutorialPanel.mc_speechBubble, 0, {
        alpha: 0.1
      }, {
        alpha: 1,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeOut
      });
    }
  };
  CastleTutorialPanel.prototype.showOkButton = function () {
    this.tutorialPanel.mc_speechBubble.btn_ok.visible = true;
    this.tutorialPanel.mouseChildren = true;
  };
  CastleTutorialPanel.prototype.hideOkButton = function () {
    this.tutorialPanel.mc_speechBubble.btn_ok.visible = false;
    this.tutorialPanel.mouseChildren = false;
  };
  CastleTutorialPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var __s32local0 = __dep_exact_f855840627e6e145.int(this._lockedQuestGiverID == __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER ? 30 : 0);
      switch (this._currentPosition) {
        case CastleTutorialPanel.POS_TOP_RIGHT:
          this.disp.x = this.disp.stage.stageWidth - __s32local0;
          this.disp.y = -50;
          break;
        case CastleTutorialPanel.POS_BOTTOM_RIGHT:
          this.disp.x = this.disp.stage.stageWidth - __s32local0;
          this.disp.y = this.disp.stage.stageHeight - 275;
          break;
        case CastleTutorialPanel.POS_TOP_RIGHT_MINUS_FIFTY:
          this.disp.x = this.disp.stage.stageWidth - __s32local0;
          this.disp.y = -100;
          break;
        case CastleTutorialPanel.POS_MIDDLE_RIGHT:
        case CastleTutorialPanel.POS_CENTER:
          this.disp.x = this.disp.stage.stageWidth - __s32local0;
          this.disp.y = this.disp.stage.stageHeight * 0.5 - this.disp.height * 0.5;
      }
    }
  };
  Object.defineProperty(CastleTutorialPanel.prototype, "lockedQuestGiverID", {
    get: function () {
      return this._lockedQuestGiverID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTutorialPanel.prototype, "tutorialPanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleTutorialPanel.NAME = "CastleTutorialPanel";
  CastleTutorialPanel.POS_TOP_RIGHT = 0;
  CastleTutorialPanel.POS_BOTTOM_RIGHT = 1;
  CastleTutorialPanel.POS_TOP_RIGHT_MINUS_FIFTY = 2;
  CastleTutorialPanel.POS_MIDDLE_RIGHT = 3;
  CastleTutorialPanel.POS_CENTER = 4;
  return CastleTutorialPanel;
}(require("gge-module:export_CastlePanel").CastlePanel);
exports.CastleTutorialPanel = __s0local0;
