Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstQuestCondition = require("gge-module:export_ClientConstQuestCondition");
var __dep_export_CinematicController = require("gge-module:export_CinematicController");
var __dep_export_C2SSkipGeneralsIntroductionVO = require("gge-module:export_C2SSkipGeneralsIntroductionVO");
var __dep_export_C2SFinishQuestConditionVO = require("gge-module:export_C2SFinishQuestConditionVO");
var __dep_export_GeneralsEvent = require("gge-module:export_GeneralsEvent");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_GeneralCinematicVO = require("gge-module:export_GeneralCinematicVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_ModernYesNoLabeledDialog = require("gge-module:export_ModernYesNoLabeledDialog");
var __dep_export_GeneralsHubDialog = require("gge-module:export_GeneralsHubDialog");
var __s0local0 = createjs.Shape;
var __s0local1 = function (__s1param0) {
  function GeneralHubIntroductionHandler(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._timeout = -1;
    __s3local0._characterAnimationHandler = __s3param1;
    __s3local0._questComponent = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GeneralHubIntroductionHandler, __s1param0);
  GeneralHubIntroductionHandler.prototype.initGeneralIntroductionElements = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.disp.mc_introduction.mc_introduction_quest_ludwig.btn_goto, this.disp.mc_introduction.mc_introduction_quest_horatio.btn_goto, this.disp.mc_introduction.mc_introduction_quest_horatio.btn_skip], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_introduction.mc_introduction_quest_horatio.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generals_characters_104_name"));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_introduction.mc_introduction_quest_horatio.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generals_introduction_guidance_01"));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_introduction.mc_introduction_quest_horatio.btn_goto.btn_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_generals_inn_introduction_worldMap_button"));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_introduction.mc_introduction_quest_horatio.btn_skip.txt_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_generals_inn_introduction_skip_button"));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_introduction.mc_introduction_quest_ludwig.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_generals_inn_character_fatKing"));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_introduction.mc_introduction_quest_ludwig.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generals_introduction_guidance_08"));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_introduction.mc_introduction_quest_ludwig.btn_goto.btn_label, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_generals_inn_gachaPayout_freeDraw_button"));
  };
  GeneralHubIntroductionHandler.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.handleGeneralIntroduction();
  };
  GeneralHubIntroductionHandler.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    if (this._timeout != -1) {
      window.clearTimeout(this._timeout);
    }
  };
  GeneralHubIntroductionHandler.prototype.handleGeneralIntroduction = function () {
    this.disp.mc_introduction.mc_introduction_character_horatio.visible = false;
    this.disp.mc_introduction.mc_introduction_quest_horatio.visible = false;
    this.disp.mc_introduction.mc_introduction_quest_ludwig.visible = false;
    if (this._inputBlocker) {
      this._inputBlocker.visible = false;
    }
    this.updateCinematicPlaylist();
    if (__dep_export_CastleModel.CastleModel.generalsIntroductionData.activeIntroductionQuest) {
      var __s12local0 = __dep_export_CastleModel.CastleModel.generalsIntroductionData.activeIntroductionQuest.conditions[0];
      switch (__s12local0.conditionType) {
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_INN:
          switch (__s12local0.conditionData[0]) {
            case 1:
              this.handleCinematic1();
              break;
            case 2:
              this.handleCinematic2();
          }
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_COMMANDER:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_BARON:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEAT_WOLFKING:
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DEFEND_WOLFKING:
          this.handleHoratioQuest();
          break;
        case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_GACHA_DRAW:
          this.handleFatKingQuest();
          break;
        default:
          this.enableUIComponents(true);
      }
    } else {
      this.enableUIComponents(true);
    }
  };
  GeneralHubIntroductionHandler.prototype.handleCinematic1 = function () {
    var __s19local0 = this;
    this.hideCharacters();
    this._questComponent.hide();
    this.enableUIComponents(false);
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.disp.mc_door_opened, 0, {
      visible: false
    }, {
      visible: true,
      delay: 0.5
    });
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.disp.mc_silhouette, 0, {
      visible: false
    }, {
      visible: true,
      delay: 0.5
    });
    __dep_exact_608de47b6498f9b0.TweenMax.fromTo(this.disp.mc_silhouette, 1, {
      alpha: 0,
      scaleX: 0.9,
      scaleY: 0.9
    }, {
      alpha: 1,
      scaleX: 1,
      scaleY: 1,
      delay: 0.5
    });
    this._timeout = window.setTimeout(function () {
      __s19local0._timeout = -1;
      __dep_export_CinematicController.CinematicController.getInstance().playCinematic(new __dep_export_GeneralCinematicVO.GeneralCinematicVO(1));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFinishQuestConditionVO.C2SFinishQuestConditionVO(__dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_INN, __s19local0.currentQuestConditionTargetID));
      __s19local0.handleHoratioQuest();
    }, 3000);
  };
  GeneralHubIntroductionHandler.prototype.handleCinematic2 = function () {
    var __s23local0 = this;
    this.createInputBlocker();
    this._questComponent.hide();
    this.enableUIComponents(false);
    this._timeout = window.setTimeout(function () {
      __s23local0._timeout = -1;
      __dep_export_CinematicController.CinematicController.getInstance().playCinematic(new __dep_export_GeneralCinematicVO.GeneralCinematicVO(2));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFinishQuestConditionVO.C2SFinishQuestConditionVO(__dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_INN, __s23local0.currentQuestConditionTargetID));
      __s23local0.disp.mc_introduction.mc_introduction_character_horatio.visible = true;
      __s23local0.handleFatKingQuest();
    }, 3000);
  };
  GeneralHubIntroductionHandler.prototype.handleHoratioQuest = function () {
    this.hideCharacters();
    this._questComponent.hide();
    this.enableUIComponents(false);
    this.disp.mc_introduction.mc_introduction_character_horatio.visible = true;
    this.disp.mc_introduction.mc_introduction_quest_horatio.visible = true;
  };
  GeneralHubIntroductionHandler.prototype.handleFatKingQuest = function () {
    this.createInputBlocker();
    this._questComponent.hide();
    this._characterAnimationHandler.removeEventListener();
    this.enableUIComponents(false);
    this.disp.mc_introduction.mc_introduction_quest_ludwig.visible = true;
    this.disp.mc_introduction.mc_introduction_character_horatio.visible = false;
    __dep_export_CastleModel.CastleModel.generalsData.addEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_HUB_REWARDS, this.bindFunction(this.onRewardsGained));
  };
  GeneralHubIntroductionHandler.prototype.onRewardsGained = function () {
    __dep_export_CastleModel.CastleModel.generalsData.removeEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_HUB_REWARDS, this.bindFunction(this.onRewardsGained));
    this._questComponent.show();
    this._characterAnimationHandler.addEventListener();
    this.enableUIComponents(true);
    this.disp.mc_introduction.mc_introduction_quest_ludwig.visible = false;
    this._inputBlocker.visible = true;
  };
  GeneralHubIntroductionHandler.prototype.hideCharacters = function () {
    var __s33local0 = this;
    if (this._characterAnimationHandler.isLoaded) {
      this._characterAnimationHandler.reset();
    } else {
      this._characterAnimationHandler.animationsLoadedSignal.addOnce(function () {
        __s33local0._characterAnimationHandler.reset();
      });
    }
  };
  GeneralHubIntroductionHandler.prototype.updateCinematicPlaylist = function () {
    this.disp.btn_cinematics.visible = __dep_export_CastleModel.CastleModel.generalsIntroductionData.getAvailableCinematics().length > 0;
  };
  GeneralHubIntroductionHandler.prototype.enableUIComponents = function (__s41param0) {
    this.disp.item_rubies.visible = __s41param0;
    this.disp.mc_offerings.visible = __s41param0;
    this.disp.btn_info.visible = __s41param0;
  };
  GeneralHubIntroductionHandler.prototype.onClick = function (__s43param0) {
    __s1param0.prototype.onClick.call(this, __s43param0);
    switch (__s43param0.target) {
      case this.disp.mc_introduction.mc_introduction_quest_ludwig.btn_goto:
        this.disp.mc_introduction.mc_introduction_quest_ludwig.visible = false;
        this.disp.mc_introduction.mc_introduction_character_horatio.visible = false;
        this.enableUIComponents(true);
        this._questComponent.show();
        this._questComponent.performIntroductionDraw();
        break;
      case this.disp.mc_introduction.mc_introduction_quest_horatio.btn_goto:
        if (__dep_export_CastleModel.CastleModel.generalsIntroductionData.activeIntroductionQuest.conditions[0].conditionType == __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_BARON) {
          __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideDialog(__dep_export_GeneralsHubDialog.GeneralsHubDialog);
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, __dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle());
        } else {
          __dep_export_CastleModel.CastleModel.generalsIntroductionData.executeShowMeOfCurrentQuest();
        }
        break;
      case this.disp.mc_introduction.mc_introduction_quest_horatio.btn_skip:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_ModernYesNoLabeledDialog.ModernYesNoLabeledDialog, new __dep_exact_9e901e8e2483a22f_2.BasicStandardYesNoDialogProperties("dialog_generals_inn_SkipIntroduction_header", "dialog_generals_inn_SkipIntroduction_desc", this.bindFunction(this.onSkipIntroduction), null, null, "dialog_generals_inn_SkipIntroduction_Skip_button", "dialog_generals_inn_SkipIntroduction_dontSkip_button"));
    }
  };
  GeneralHubIntroductionHandler.prototype.onSkipIntroduction = function () {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideDialog(__dep_export_GeneralsHubDialog.GeneralsHubDialog);
    __dep_exact_9e901e8e2483a22f_1.ClientFunnelTrackingController.getInstance().trackState("skip_intro_manually");
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSkipGeneralsIntroductionVO.C2SSkipGeneralsIntroductionVO());
    __dep_export_CastleModel.CastleModel.generalsIntroductionData.removeGeneralIntroductionGuidance();
  };
  Object.defineProperty(GeneralHubIntroductionHandler.prototype, "currentQuestConditionTargetID", {
    get: function () {
      return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.generalsIntroductionData.activeIntroductionQuest.conditions[0].conditionData[0]) || -1;
    },
    enumerable: true,
    configurable: true
  });
  GeneralHubIntroductionHandler.prototype.createInputBlocker = function () {
    if (!this._inputBlocker) {
      this._inputBlocker = new __s0local0();
      this._inputBlocker.graphics.beginFill(__dep_export_ClientConstColor.ClientConstColor.GENERIC_BLACK, 0.01);
      this._inputBlocker.graphics.drawRect(0, 0, 1200, 800);
      this._inputBlocker.graphics.endFill();
      this._inputBlocker.setBounds(0, 0, 1200, 800);
      this._inputBlocker.x = -600;
      this._inputBlocker.y = -400;
      this.disp.mc_introduction.addChild(this._inputBlocker);
      this.disp.mc_introduction.setChildIndex(this._inputBlocker, 0);
    }
    this._inputBlocker.visible = true;
  };
  return GeneralHubIntroductionHandler;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.GeneralHubIntroductionHandler = __s0local1;
