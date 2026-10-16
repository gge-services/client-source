Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleScoreEventEvent = require("gge-module:export_CastleScoreEventEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceMobilizationEventEventVO = require("gge-module:export_AllianceMobilizationEventEventVO");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ClickFeedbackButtonHoverTabButton = require("gge-module:export_ClickFeedbackButtonHoverTabButton");
var __dep_export_AllianceCrestEnum = require("gge-module:export_AllianceCrestEnum");
var __dep_export_AllianceCrestSizeEnum = require("gge-module:export_AllianceCrestSizeEnum");
var __dep_export_CastleAllianceCrestHelper = require("gge-module:export_CastleAllianceCrestHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalSubLayerDialog = require("gge-module:export_CastleExternalSubLayerDialog");
var __dep_export_AllianceMobilizationEventDialogQuests = require("gge-module:export_AllianceMobilizationEventDialogQuests");
var __dep_export_AllianceMobilizationEventDialogRanking = require("gge-module:export_AllianceMobilizationEventDialogRanking");
var __dep_export_AllianceMobilizationEventDialogRules = require("gge-module:export_AllianceMobilizationEventDialogRules");
var __dep_export_AllianceMobilizationRewardDialog = require("gge-module:export_AllianceMobilizationRewardDialog");
var __dep_export_AllianceMobilizationRewardDialogProperties = require("gge-module:export_AllianceMobilizationRewardDialogProperties");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __s0local0 = function (__s1param0) {
  function AllianceMobilizationEventDialog() {
    var __s3local0 = __s1param0.call(this, AllianceMobilizationEventDialog.NAME) || this;
    __s3local0.charClickCount = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceMobilizationEventDialog, __s1param0);
  AllianceMobilizationEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_rewards], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    for (var __s5local0 = 0; __s5local0 < AllianceMobilizationEventDialog.NUM_MAX_TABS; __s5local0++) {
      __dep_export_ButtonHelper.ButtonHelper.initButton(this.dialogDisp["tab_" + __s5local0], 1, __dep_export_ClickFeedbackButtonHoverTabButton.ClickFeedbackButtonHoverTabButton);
    }
    this.dialogDisp.tab_0.toolTipText = "dialogue_ame_rules_button_title";
    this.dialogDisp.tab_1.toolTipText = "dialog_ame_start_desc1_title";
    this.dialogDisp.tab_2.toolTipText = "dialog_ame_start_desc2_title";
    this._itxt_timer = this.textFieldManager.registerTextField(this.dialogDisp.mc_timer.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this._itxt_points = this.textFieldManager.registerTextField(this.dialogDisp.mc_points.txt_points, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this._itxt_allianceLevel = this.textFieldManager.registerTextField(this.dialogDisp.txt_allianceLevel, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(1));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_rewards.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("button_ame_ranking_rewards"))).autoFitToBounds = true;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.btn_help.visible = false;
    this.dialogDisp.mc_timer.toolTipText = "resttime";
    this.dialogDisp.mc_timer.mouseChildren = false;
    this._subLayer = new Map();
    this._subLayer.set(AllianceMobilizationEventDialog.TAB_RULES, new __dep_export_AllianceMobilizationEventDialogRules.AllianceMobilizationEventDialogRules(this.dialogDisp[AllianceMobilizationEventDialog.TAB_RULES]));
    this._subLayer.set(AllianceMobilizationEventDialog.TAB_QUESTS, new __dep_export_AllianceMobilizationEventDialogQuests.AllianceMobilizationEventDialogQuests(this.dialogDisp[AllianceMobilizationEventDialog.TAB_QUESTS]));
    this._subLayer.set(AllianceMobilizationEventDialog.TAB_RANKING, new __dep_export_AllianceMobilizationEventDialogRanking.AllianceMobilizationEventDialogRanking(this.dialogDisp[AllianceMobilizationEventDialog.TAB_RANKING]));
    this._tabs = [AllianceMobilizationEventDialog.TAB_RULES, AllianceMobilizationEventDialog.TAB_QUESTS, AllianceMobilizationEventDialog.TAB_RANKING];
  };
  AllianceMobilizationEventDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    if (this.eventVO) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.eventVO.getEventSpecificTextID("dialogue_ame_title")))).autoFitToBounds = true;
      this.textFieldManager.registerTextField(this.dialogDisp.txt_allianceName, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_export_CastleModel.CastleModel.userData.allianceName))).autoFitToBounds = true;
      __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
      this.controller.addEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
      this.changeCategory(this.dialogProperties.startTab);
      this.loadBG();
      this.onUpdatePoints(null);
    } else {
      this.hide();
    }
  };
  AllianceMobilizationEventDialog.prototype.hideLoaded = function () {
    __s1param0.prototype.hideLoaded.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    this.controller.removeEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  AllianceMobilizationEventDialog.prototype.changeCategory = function (__s15param0) {
    if (this._currentCategory != __s15param0) {
      __s1param0.prototype.changeCategory.call(this, __s15param0);
      this.showSublayer(this._subLayer.get(this._currentCategory), [this.dialogProperties.eventID]);
      for (var __s15local0 = 0; __s15local0 < AllianceMobilizationEventDialog.NUM_MAX_TABS; __s15local0++) {
        var __s15local1 = __dep_export_ButtonHelper.ButtonHelper.getBasicButton(this.dialogDisp["tab_" + __s15local0]);
        if (__s15local0 == this._tabs.indexOf(__s15param0)) {
          __s15local1.selected();
        } else {
          __s15local1.deselected();
        }
        if (__s15local1.disp.icon_tab) {
          __s15local1.disp.icon_tab.gotoAndStop(this.getTabIconFrame());
        }
      }
    }
  };
  AllianceMobilizationEventDialog.prototype.onRemoveEvent = function (__s23param0) {
    if (__s23param0.specialEventVO && __s23param0.specialEventVO.eventId == this.eventId) {
      this.hide();
    }
  };
  AllianceMobilizationEventDialog.prototype.onTimerUpdate = function (__s26param0) {
    if (this.eventVO) {
      this._itxt_timer.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.eventVO.remainingEventTimeInSeconds);
    }
  };
  AllianceMobilizationEventDialog.prototype.onUpdatePoints = function (__s29param0) {
    var __s29local0 = this.eventVO.allianceBarVO.ownPoints;
    var __s29local1 = this.eventVO.nextRewardThresholdIndex;
    var __s29local2 = __s29local1 - 1 >= 0 ? this.eventVO.allianceBarVO.pointThresholds[__s29local1 - 1] : 0;
    var __s29local3 = this.eventVO.allianceBarVO.pointThresholds[__s29local1];
    this._itxt_points.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s29local0 || 0), new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s29local3 || 0)]);
    this._itxt_allianceLevel.textContentVO.numberValue = this.eventVO.allianceBarVO.rewardsReceivedRaw;
    this.dialogDisp.mc_points.progressbar.scaleX = __dep_exact_9e901e8e2483a22f.MathBase.clamp((__s29local0 - __s29local2) / (__s29local3 - __s29local2), 0, 1);
  };
  AllianceMobilizationEventDialog.prototype.onClick = function (__s31param0) {
    __s1param0.prototype.onClick.call(this, __s31param0);
    switch (__s31param0.target) {
      case this.dialogDisp.btn_help:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", "TODO: HELP");
        break;
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_rewards:
        this.openRewardDialog();
        break;
      case this.dialogDisp.tab_0:
      case this.dialogDisp.tab_1:
      case this.dialogDisp.tab_2:
        var __s31local0 = parseInt(__s31param0.target.name.charAt(4));
        if (__s31local0 >= 0 && __s31local0 < this._tabs.length) {
          this.changeCategory(this._tabs[__s31local0]);
        }
        break;
      case this.charMC:
        this.onClickChar();
    }
  };
  AllianceMobilizationEventDialog.prototype.openRewardDialog = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AllianceMobilizationRewardDialog.AllianceMobilizationRewardDialog, new __dep_export_AllianceMobilizationRewardDialogProperties.AllianceMobilizationRewardDialogProperties(this.dialogProperties.eventID));
  };
  AllianceMobilizationEventDialog.prototype.loadBG = function () {
    var __s37local0 = this;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_bg);
    this.charMC = null;
    this.mouseMC = null;
    if (this.dialogProperties.eventID == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_MOBILISATION) {
      var __s37local1 = "AllianceMobilizationEventBG_" + this.eventVO.mode;
      if (!__dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s37local1)) {
        __s37local1 = "AllianceMobilizationEventBG_" + __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.MODE_NORMAL;
      }
      var __s37local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s37local1, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s37local1), null, 0, false);
      this.dialogDisp.mc_bg.addChild(__s37local2);
      __s37local2.doWhenLoaded(function (__s41param0) {
        var __s41local0 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.allianceCrestVO;
        __dep_export_CastleAllianceCrestHelper.CastleAllianceCrestHelper.setCrestGraphics(__s41param0.currentshownDisplayObject.mc_CoatOfArms, __s41local0, __dep_export_AllianceCrestSizeEnum.AllianceCrestSizeEnum.CREST_AME_BG, __dep_export_AllianceCrestEnum.AllianceCrestEnum.DEFAULT_CREST);
        __s37local0.charMC = __s37local2.currentshownDisplayObject.mc_char;
        __s37local0.charMC.mouseChildren = false;
        __s37local0.mouseMC = __s37local2.currentshownDisplayObject.mc_mouse;
      });
    }
  };
  AllianceMobilizationEventDialog.prototype.onClickChar = function () {
    var __s43local0 = this;
    if (this.charMC && this.mouseMC && (this.charClickCount++, this.charClickCount == 5 && this.mouseMC)) {
      this.charMC.mouseEnabled = false;
      var __s43local1 = this.mouseMC.y;
      __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.mouseMC, 2, {
        y: __s43local1
      }, {
        y: __s43local1 - 30,
        ease: __dep_exact_608de47b6498f9b0.Power4.easeIn,
        delay: 0,
        repeat: 0,
        onComplete: function () {
          __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(__s43local0.mouseMC, 0.3, {
            y: __s43local1 - 30
          }, {
            y: __s43local0.mouseMC.y - 35,
            ease: __dep_exact_608de47b6498f9b0.Power4.easeIn,
            delay: 0,
            yoyo: true,
            repeat: 4,
            onComplete: function () {
              __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(__s43local0.mouseMC, 2, {
                y: __s43local1 - 30
              }, {
                y: __s43local1,
                ease: __dep_exact_608de47b6498f9b0.Power4.easeIn,
                delay: 0,
                repeat: 0,
                onComplete: function () {
                  __s43local0.charMC.mouseEnabled = true;
                  __s43local0.charClickCount = 0;
                }
              });
            }
          });
        }
      });
    }
  };
  AllianceMobilizationEventDialog.prototype.getTabIconFrame = function () {
    switch (this.dialogProperties.eventID) {
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_MOBILISATION:
        return 1;
      case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_RAID_MOBILISATION:
        return 2;
    }
    return 1;
  };
  Object.defineProperty(AllianceMobilizationEventDialog.prototype, "eventVO", {
    get: function () {
      return __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.getActiveEventVO(this.dialogProperties.eventID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMobilizationEventDialog.prototype, "eventId", {
    get: function () {
      return this.dialogProperties.eventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMobilizationEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AllianceMobilizationEventDialog.NAME = "AllianceMobilizationEventMainExt_Jul26";
  AllianceMobilizationEventDialog.NUM_MAX_TABS = 3;
  AllianceMobilizationEventDialog.TAB_RULES = "sublayer_rules";
  AllianceMobilizationEventDialog.TAB_QUESTS = "sublayer_quests";
  AllianceMobilizationEventDialog.TAB_RANKING = "sublayer_ranking";
  return AllianceMobilizationEventDialog;
}(__dep_export_CastleExternalSubLayerDialog.CastleExternalSubLayerDialog);
exports.AllianceMobilizationEventDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
