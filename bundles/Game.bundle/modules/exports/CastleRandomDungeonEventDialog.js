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
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleWorldmapConst = require("gge-module:export_CastleWorldmapConst");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ARandomDungeonRewardDialog = require("gge-module:export_ARandomDungeonRewardDialog");
var __s0local0 = function (__s1param0) {
  function CastleRandomDungeonEventDialog() {
    return __s1param0.call(this, CastleRandomDungeonEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRandomDungeonEventDialog, __s1param0);
  CastleRandomDungeonEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_visit, this.dialogDisp.btn_close]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("reward"));
    this.itxt_speechBubble = this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.itxt_speechBubble.autoFitToBounds = true;
    this.itxt_coordinates = this.textFieldManager.registerTextField(this.dialogDisp.mc_CoordinatesDeco.txt_coordinates, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_COORDS, [0, 0]));
    this.itxt_castleName = this.textFieldManager.registerTextField(this.dialogDisp.txt_castleName, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.itxt_remainingTime = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_remainingTime, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.dialogDisp.mc_CoordinatesDeco.mouseChildren = false;
    this.dialogDisp.mc_CoordinatesDeco.toolTipText = "coordinates";
    this.dialogDisp.btn_visit.toolTipText = "panel_action_jumpTo";
  };
  CastleRandomDungeonEventDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_TipHeadline, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eventDungeon_" + this.dialogProperties.eventVO.skinID + "_tip_title")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_Tip, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eventDungeon_" + this.dialogProperties.eventVO.skinID + "_tip_desc"));
    this.dialogDisp.btn_visit.visible = !this.dialogProperties.eventVO.hasUserSolvedEvent;
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRefreshSpecialevent));
    for (var __s7local0 = 0; __s7local0 < this.rewards.length; __s7local0++) {
      this.dialogDisp.mc_rewards["item" + __s7local0].mc_received.visible = this.dialogProperties.eventVO.hasUserSolvedEvent;
    }
    if (!this.dialogProperties.eventVO.hasUserSolvedEvent) {
      this.showTime();
    }
    this.setTime();
  };
  CastleRandomDungeonEventDialog.prototype.showLoaded = function (__s12param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s12param0);
    this.initDialog();
  };
  CastleRandomDungeonEventDialog.prototype.initDialog = function () {
    if (this.dialogProperties.eventVO.hasUserSolvedEvent) {
      this.itxt_speechBubble.textContentVO.textId = "dialog_eventDungeon_" + this.dialogProperties.eventVO.skinID + "_win_desc";
    } else {
      this.itxt_speechBubble.textContentVO.textId = "dialog_eventDungeon_" + this.dialogProperties.eventVO.skinID + "_title";
    }
    this.drawTargetCastle();
    if (this.dialogProperties.eventVO.hasUserSolvedEvent && this.dialogDisp.mc_time.txt_remainingTime.visible) {
      this.hideTime();
    }
  };
  CastleRandomDungeonEventDialog.prototype.drawTargetCastle = function () {
    var __s19local0 = this.dialogProperties.eventVO.targetAreaVO;
    this.itxt_castleName.textContentVO.stringValue = __s19local0.ownerInfo.playerName;
    this.itxt_coordinates.textContentVO.textId = __dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_COORDS;
    this.itxt_coordinates.textContentVO.textReplacements = [__s19local0.absAreaPosX, __s19local0.absAreaPosY];
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_castle);
    var __s19local1 = __s19local0.getDisplayObjectClipContainer(false, null, false);
    __s19local1.asDisplayObject().scaleX = __s19local1.asDisplayObject().scaleY /= __dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_MAX;
    if (this.dialogProperties.eventVO.hasUserSolvedEvent) {
      __s19local1.addItem(this.getFlamesClip());
    }
    this.dialogDisp.mc_castle.addChild(__s19local1.asDisplayObject());
  };
  CastleRandomDungeonEventDialog.prototype.getFlamesClip = function () {
    return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("FlamesLayer", this.worldmapObjectAssetFileURL, null, 0, false);
  };
  Object.defineProperty(CastleRandomDungeonEventDialog.prototype, "worldmapObjectAssetFileURL", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("FlamesLayer");
    },
    enumerable: true,
    configurable: true
  });
  CastleRandomDungeonEventDialog.prototype.onClick = function (__s26param0) {
    __s1param0.prototype.onClick.call(this, __s26param0);
    switch (__s26param0.target) {
      case this.dialogDisp.btn_visit:
        __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, this.dialogProperties.eventVO.targetAreaVO);
        this.hide();
        break;
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleRandomDungeonEventDialog.prototype.hideLoaded = function (__s29param0 = null) {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRefreshSpecialevent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    this.hideTime();
    __s1param0.prototype.hideLoaded.call(this);
  };
  CastleRandomDungeonEventDialog.prototype.onUpdateSpecialEvent = function (__s31param0) {
    this.setTime();
  };
  CastleRandomDungeonEventDialog.prototype.onRefreshSpecialevent = function (__s33param0) {
    if (__s33param0.specialEventVO.eventId == this.dialogProperties.eventVO.eventId) {
      this.dialogProperties.eventVO = __s33param0.specialEventVO;
      this.initDialog();
    }
  };
  CastleRandomDungeonEventDialog.prototype.onRemoveSpecialEvent = function (__s36param0) {
    if (__s36param0.specialEventVO.eventId == this.dialogProperties.eventVO.eventId) {
      this.hide();
    }
  };
  CastleRandomDungeonEventDialog.prototype.setTime = function () {
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_remainingTime, this.dialogProperties.eventVO.remainingEventTimeInSeconds);
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, this.dialogProperties.eventVO.remainingEventTimeInSeconds);
  };
  CastleRandomDungeonEventDialog.prototype.showTime = function () {
    this.dialogDisp.mc_time.txt_remainingTime.visible = true;
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateSpecialEvent));
  };
  CastleRandomDungeonEventDialog.prototype.hideTime = function () {
    this.dialogDisp.mc_time.txt_remainingTime.visible = false;
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateSpecialEvent));
  };
  Object.defineProperty(CastleRandomDungeonEventDialog.prototype, "rewards", {
    get: function () {
      return this.dialogProperties.eventVO.rewardList;
    },
    set: function (__s47param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ARandomDungeonRewardDialog.ARandomDungeonRewardDialog.prototype, "rewards").set.call(this, __s47param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRandomDungeonEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRandomDungeonEventDialog.NAME = "CastleRandomDungeonEventExternal";
  return CastleRandomDungeonEventDialog;
}(__dep_export_ARandomDungeonRewardDialog.ARandomDungeonRewardDialog);
exports.CastleRandomDungeonEventDialog = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
