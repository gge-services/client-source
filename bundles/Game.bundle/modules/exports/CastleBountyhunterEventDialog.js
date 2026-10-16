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
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SBountyHunterBuySkipTargetVO = require("gge-module:export_C2SBountyHunterBuySkipTargetVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __s0local0 = function (__s1param0) {
  function CastleBountyhunterEventDialog() {
    return __s1param0.call(this, CastleBountyhunterEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBountyhunterEventDialog, __s1param0);
  CastleBountyhunterEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_buyNextTarget, this.dialogDisp.btn_visit]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_TipHeadline, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_bountyhunter_tipHeadine"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_Tip, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_bountyhunter_tip"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("reward"));
    this.itxt_c1 = this.textFieldManager.registerTextField(this.dialogDisp.txt_c1, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this.itxt_c2 = this.textFieldManager.registerTextField(this.dialogDisp.txt_c2, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this.i_skipTool_txt_cost = this.textFieldManager.registerTextField(this.dialogDisp.mc_skipTooltip.txt_cost0.txt_cost, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.i_skipTool_txt_name = this.textFieldManager.registerTextField(this.dialogDisp.mc_skipTooltip.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_bountyhunter_skipTooltip", [""]));
    this.itxt_speechBubble = this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_bountyhunter_title_won"));
    this.itxt_coordinates = this.textFieldManager.registerTextField(this.dialogDisp.mc_coordinates.txt_coordinates, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxt_castleName = this.textFieldManager.registerTextField(this.dialogDisp.txt_castleName, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.itxt_castleName.autoFitToBounds = true;
    this.itxt_remainingTime = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_remainingTime, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.dialogDisp.mc_c1.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C1;
    this.dialogDisp.mc_c2.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.dialogDisp.btn_visit.toolTipText = "panel_action_jumpTo";
    this.dialogDisp.mc_skipTooltip.txt_cost0.mc_icon.gotoAndStop(5);
    this.dialogDisp.mc_skipTooltip.visible = false;
  };
  CastleBountyhunterEventDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRefreshSpecialevent));
    this.showTime();
    this.initDialog();
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBountyHunterValidateOrResetTargetVO.C2SBountyHunterValidateOrResetTargetVO());
  };
  CastleBountyhunterEventDialog.prototype.initDialog = function () {
    this.dialogDisp.btn_visit.visible = !this.dialogProperties.specialEventVO.hasWon;
    this.dialogDisp.mc_wonReward.visible = this.dialogProperties.specialEventVO.hasWon;
    this.itxt_c1.textContentVO.numberValue = this.dialogProperties.specialEventVO.bountyRewardC1;
    this.itxt_c2.textContentVO.numberValue = this.dialogProperties.specialEventVO.bountyRewardC2;
    this.i_skipTool_txt_cost.textContentVO.stringValue = String(this.dialogProperties.specialEventVO.skipPriceC2);
    if (this.dialogProperties.specialEventVO.hasWon) {
      this.itxt_speechBubble.textContentVO.textId = "dialog_bountyhunter_title_won";
    } else {
      this.itxt_speechBubble.textContentVO.textId = "dialog_bountyhunter_title";
    }
    this.dialogDisp.btn_visit.visible = !this.dialogProperties.specialEventVO.hasWon;
    this.dialogDisp.mc_wonReward.visible = this.dialogProperties.specialEventVO.hasWon;
    this.dialogDisp.btn_buyNextTarget.visible = !this.dialogProperties.specialEventVO.hasWon;
    this.drawTargetCastle();
    if (this.dialogProperties.specialEventVO.hasUserSolvedEvent && this.dialogDisp.mc_time.txt_remainingTime.visible) {
      this.hideTime();
    }
  };
  CastleBountyhunterEventDialog.prototype.drawTargetCastle = function () {
    var __s14local0 = this.dialogProperties.specialEventVO.targetAreaVO;
    if (__s14local0) {
      this.itxt_coordinates.textContentVO.textId = __dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_COORDS;
      this.itxt_coordinates.textContentVO.textReplacements = [__s14local0.absAreaPosX, __s14local0.absAreaPosY];
      this.itxt_castleName.textContentVO.stringValue = __s14local0.areaNameString;
      __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_castle);
      var __s14local1 = __s14local0.getDisplayObjectClipContainer(false, null, false);
      if (this.dialogProperties.specialEventVO.hasWon) {
        var __s14local2 = this.getFlamesClip();
        __s14local2.y = -15;
        __s14local1.addItem(__s14local2);
      }
      __s14local1.asDisplayObject().y = -15;
      this.dialogDisp.mc_castle.addChild(__s14local1.asDisplayObject());
      this.dialogDisp.mc_castle.scaleX = this.dialogDisp.mc_castle.scaleY = 0.7;
    } else {
      this.itxt_coordinates.textContentVO.textId = "";
      this.itxt_castleName.textContentVO.stringValue = "";
      __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_castle);
    }
  };
  CastleBountyhunterEventDialog.prototype.getFlamesClip = function () {
    return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("FlamesLayer", this.worldmapObjectAssetFileURL, null, 0, false);
  };
  Object.defineProperty(CastleBountyhunterEventDialog.prototype, "worldmapObjectAssetFileURL", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("FlamesLayer");
    },
    enumerable: true,
    configurable: true
  });
  CastleBountyhunterEventDialog.prototype.onUpdateSpecialEvent = function (__s23param0) {
    this.setTime();
  };
  CastleBountyhunterEventDialog.prototype.onRefreshSpecialevent = function (__s25param0) {
    if (__s25param0.specialEventVO.eventId == this.dialogProperties.specialEventVO.eventId) {
      this.dialogProperties.specialEventVO = __s25param0.specialEventVO;
      this.initDialog();
    }
  };
  CastleBountyhunterEventDialog.prototype.onRemoveSpecialEvent = function (__s28param0) {
    if (__s28param0.specialEventVO.eventId == this.dialogProperties.specialEventVO.eventId) {
      this.hide();
    }
  };
  CastleBountyhunterEventDialog.prototype.onClick = function (__s31param0) {
    __s1param0.prototype.onClick.call(this, __s31param0);
    switch (__s31param0.target) {
      case this.dialogDisp.mc_mouse:
        break;
      case this.dialogDisp.btn_visit:
        __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, this.dialogProperties.specialEventVO.targetAreaVO);
        this.hide();
        break;
      case this.dialogDisp.btn_buyNextTarget:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBountyHunterBuySkipTargetVO.C2SBountyHunterBuySkipTargetVO());
        break;
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleBountyhunterEventDialog.prototype.onMouseOver = function (__s34param0) {
    __s1param0.prototype.onMouseOver.call(this, __s34param0);
    if (__s34param0.target == this.dialogDisp.btn_buyNextTarget) {
      this.dialogDisp.mc_skipTooltip.alpha = 0;
      this.dialogDisp.mc_skipTooltip.visible = true;
      this.dialogDisp.setChildIndex(this.dialogDisp.mc_skipTooltip, this.dialogDisp.numChildren - 1);
      __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.dialogDisp.mc_skipTooltip, 0.2, {
        alpha: 0
      }, {
        alpha: 1,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeIn
      });
    }
  };
  CastleBountyhunterEventDialog.prototype.onMouseOut = function (__s37param0) {
    __s1param0.prototype.onMouseOut.call(this, __s37param0);
    if (__s37param0.target == this.dialogDisp.btn_buyNextTarget) {
      __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.dialogDisp.mc_skipTooltip, 0.2, {
        alpha: 1
      }, {
        alpha: 0,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeIn,
        onComplete: this.bindFunction(this.onTweenComplete)
      });
    }
  };
  CastleBountyhunterEventDialog.prototype.onTweenComplete = function () {
    this.dialogDisp.mc_skipTooltip.visible = false;
  };
  CastleBountyhunterEventDialog.prototype.hideLoaded = function (__s42param0 = null) {
    this.hideTime();
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRefreshSpecialevent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    __s1param0.prototype.hideLoaded.call(this);
  };
  CastleBountyhunterEventDialog.prototype.setToolTips = function () {
    __s1param0.prototype.setToolTips.call(this);
    this.dialogDisp.mc_coordinates.mouseChildren = false;
    this.dialogDisp.mc_coordinates.toolTipText = "coordinates";
  };
  CastleBountyhunterEventDialog.prototype.setTime = function () {
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.createHitArea(this.dialogDisp.mc_time);
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_remainingTime, this.dialogProperties.specialEventVO.remainingEventTimeInSeconds);
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, this.dialogProperties.specialEventVO.remainingEventTimeInSeconds);
  };
  CastleBountyhunterEventDialog.prototype.showTime = function () {
    this.itxt_remainingTime.visible = true;
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateSpecialEvent));
  };
  CastleBountyhunterEventDialog.prototype.hideTime = function () {
    this.itxt_remainingTime.visible = false;
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateSpecialEvent));
  };
  Object.defineProperty(CastleBountyhunterEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBountyhunterEventDialog.NAME = "CastleBountyhunterEventExternal";
  return CastleBountyhunterEventDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleBountyhunterEventDialog = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_C2SBountyHunterValidateOrResetTargetVO = require("gge-module:export_C2SBountyHunterValidateOrResetTargetVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
