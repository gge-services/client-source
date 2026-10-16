Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_C2SQuestStarterClickVO = require("gge-module:export_C2SQuestStarterClickVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.GlowFilter;
var __s0local1 = function (__s1param0) {
  function CastleStartQuestDialog() {
    var __s3local0 = this;
    __s3local0._questStartPanelIsHidden = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleStartQuestDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStartQuestDialog, __s1param0);
  CastleStartQuestDialog.prototype.hideLoaded = function (__s5param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    if (this._questStartPanelIsHidden) {
      var __s5local0 = __dep_exact_81dacdf05bd32292_1.castAs(this.layoutManager.getPanel(__dep_export_CastleQuestStartPanel.CastleQuestStartPanel), "CastleQuestStartPanel");
      if (__s5local0) {
        __s5local0.showWithoutSpeechBubble();
      }
      this._questStartPanelIsHidden = false;
    }
    this.finishQuestStarter();
    __dep_export_CastleModel.CastleModel.questData.isFirstQuestAfterStarter = this.dialogProperties.quest.numberOfQuestsInSeries > 1;
  };
  CastleStartQuestDialog.prototype.applyPropertiesLoaded = function (__s9param0 = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("commons_continue"));
    this.dialogDisp.btn_ok.mouseChildren = false;
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    if (!this.isOutOfTutorial()) {
      var __s9local0 = __dep_exact_81dacdf05bd32292_1.castAs(this.layoutManager.getPanel(__dep_export_CastleQuestStartPanel.CastleQuestStartPanel), "CastleQuestStartPanel");
      if (__s9local0) {
        __s9local0.hide();
      }
      this._questStartPanelIsHidden = true;
    }
    var __s9local1;
    var __s9local2 = __dep_exact_f855840627e6e145.int(this.dialogProperties.quest.questGiverID);
    var __s9local3 = this.dialogProperties.quest.getQuestSeriesTextWithNumbers();
    var __s9local4 = this.dialogProperties.quest.getQuestInfoTextId();
    __s9local1 = this.dialogProperties.quest.isHeroQuest ? "hero_unique_" + __dep_export_CastleModel.CastleModel.userData.selectedHeroID + "_name" : "dialog_npcName_" + this.dialogProperties.quest.questGiverID.toString();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s9local3));
    var __s9local5 = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s9local4));
    __s9local5.mouseEnabled = false;
    this.setQuestGiverSymbol(__s9local2);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_questGiver, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("commons_NPCsays", [new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s9local1)]));
    if (this.dialogDisp.txt_questGiver.filters.length == 0) {
      this.dialogDisp.txt_questGiver.filters = [new __s0local0(16774602, 1, 5, 5, 5)];
    }
    this.dialogDisp.speechBubble.height = CastleStartQuestDialog.SPEECHBUBBLE_PADDING + __s9local5.textHeight;
    this.dialogDisp.btn_ok.y = this.dialogDisp.speechBubble.y + this.dialogDisp.speechBubble.height - this.dialogDisp.btn_ok.height + CastleStartQuestDialog.BUTTON_OFFSET;
  };
  CastleStartQuestDialog.prototype.setQuestGiverSymbol = function (__s14param0) {
    if (this.characterClip) {
      this.characterClip.clipLoaded.removeAll();
      this.characterClip = null;
    }
    if (__s14param0 == __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER) {
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_questGiver);
      var __s14local0 = __dep_export_ClientConstCharacter.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_NAMES.get(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER);
      this.characterClip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s14local0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s14local0), null, 0, false);
      this.characterClip.doWhenLoaded(this.bindFunction(this.onLoaded));
    } else {
      __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(__s14param0, this.dialogDisp.mc_questGiver, 200, 250);
    }
  };
  CastleStartQuestDialog.prototype.onLoaded = function (__s19param0) {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_questGiver);
    this.dialogDisp.mc_questGiver.addChild(this.characterClip);
    this.updatePosition();
  };
  CastleStartQuestDialog.prototype.onClick = function (__s21param0) {
    __s1param0.prototype.onClick.call(this, __s21param0);
    switch (__s21param0.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleStartQuestDialog.prototype.updatePosition = function () {
    if (this.dialogProperties && this.dialogProperties.quest.questGiverID == __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER) {
      if (this.disp && this.disp.stage) {
        if (this.characterClip) {
          var __s24local0 = new __dep_exact_9e901e8e2483a22f_2.ClipSizeComponent(this.disp.stage.stageWidth * 0.9, this.disp.stage.stageHeight * 0.9, 1);
          this.characterClip.clipSizeComponent = __s24local0;
        }
        this.disp.x = this.disp.stage.stageWidth * 0.5 + 175;
        this.disp.y = this.disp.stage.stageHeight - Math.min(this.disp.stage.stageHeight - 50, 850);
        this.dialogDisp.btn_ok.y = this.dialogDisp.speechBubble.y + this.dialogDisp.speechBubble.height - this.dialogDisp.btn_ok.height + CastleStartQuestDialog.BUTTON_OFFSET;
        if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
          if (__dep_exact_81dacdf05bd32292.MobileHelper.isLandscape()) {
            this.disp.x = this.disp.stage.stageWidth * 0.7;
            this.disp.y = -this.disp.stage.stageHeight * 0.03;
            if (this.dialogDisp.speechBubble.height > this.dialogDisp.stage.stageHeight) {
              this.dialogDisp.btn_ok.y = this.dialogDisp.stage.stageHeight - this.dialogDisp.btn_ok.height;
            }
          } else {
            this.disp.x = this.disp.stage.stageWidth * 0.5;
          }
        }
        this.disp.x = __dep_exact_f855840627e6e145.int(this.disp.x);
        this.disp.y = __dep_exact_f855840627e6e145.int(this.disp.y);
      }
    } else {
      __s1param0.prototype.updatePosition.call(this);
      if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall() && __dep_exact_81dacdf05bd32292.MobileHelper.isLandscape()) {
        this.disp.x += (this.disp.stage ? this.disp.stage.stageWidth : document.documentElement.clientWidth) * 0.15;
        this.disp.y += (this.disp.stage ? this.disp.stage.stageHeight : document.documentElement.clientHeight) * 0.1;
      }
    }
  };
  CastleStartQuestDialog.prototype.finishQuestStarter = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SQuestStarterClickVO.C2SQuestStarterClickVO(this.dialogProperties.quest.questID));
  };
  Object.defineProperty(CastleStartQuestDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleStartQuestDialog.NAME = "CastleStartQuestEx";
  CastleStartQuestDialog.SPEECHBUBBLE_PADDING = 91;
  CastleStartQuestDialog.BUTTON_OFFSET = 20;
  return CastleStartQuestDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleStartQuestDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
var __dep_export_CastleQuestStartPanel = require("gge-module:export_CastleQuestStartPanel");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
