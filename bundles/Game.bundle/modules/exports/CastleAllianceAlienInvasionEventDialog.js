Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SPointEventGetPointsVO = require("gge-module:export_C2SPointEventGetPointsVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceAlienInvasionEventDialog() {
    return __s1param0.call(this, CastleAllianceAlienInvasionEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceAlienInvasionEventDialog, __s1param0);
  CastleAllianceAlienInvasionEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this._subLayer = new Map();
    this._subLayer.set(CastleAllianceAlienInvasionEventDialog.CAT_PLAYER, new __dep_export_CastleAllianceAlienInvasionEventDialogPlayer.CastleAllianceAlienInvasionEventDialogPlayer(this.dialogDisp.mc_sublayer_player));
    this._subLayer.set(CastleAllianceAlienInvasionEventDialog.CAT_ALLIANCE, new __dep_export_CastleAllianceAlienInvasionEventDialogAlliance.CastleAllianceAlienInvasionEventDialogAlliance(this.dialogDisp.mc_sublayer_alliance));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_nextEnemy]);
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_player, this.dialogDisp.btn_tab_alliance]);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
  };
  CastleAllianceAlienInvasionEventDialog.prototype.onClick = function (__s7param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s7param0.target)) {
      __s1param0.prototype.onClick.call(this, __s7param0);
      switch (__s7param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          this._currentSublayer.showHelp();
          break;
        case this.dialogDisp.btn_tab_player:
          this.changeCategory(CastleAllianceAlienInvasionEventDialog.CAT_PLAYER);
          break;
        case this.dialogDisp.btn_tab_alliance:
          this.changeCategory(CastleAllianceAlienInvasionEventDialog.CAT_ALLIANCE);
          break;
        case this.dialogDisp.btn_nextEnemy:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(this.dialogProperties.getFindNextMapObjectVO());
          this.hide();
      }
    }
  };
  CastleAllianceAlienInvasionEventDialog.prototype.updateCopyTexts = function () {
    if (this._currentCategory == CastleAllianceAlienInvasionEventDialog.CAT_PLAYER) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_" + this.dialogProperties.textIDType + "_camp_points_copy"));
    } else if (__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_" + this.dialogProperties.textIDType + "Alliance_camp_points_copy", [this.eventVO.allianceEventVO.pointThresholds[0]]));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_" + this.dialogProperties.textIDType + "Alliance_camp_points_noAlliance_copy"));
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.eventVO.useReroll ? "dialog_invasion_camp_dethrone_copy" : " "));
  };
  CastleAllianceAlienInvasionEventDialog.prototype.showLoaded = function (__s16param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s16param0);
    this.dialogDisp.btn_tab_alliance.toolTipText = "dialog_" + this.dialogProperties.textIDType + "_allianceRanking_tooltip";
    this.dialogDisp.btn_tab_player.toolTipText = "dialog_" + this.dialogProperties.textIDType + "_singleRanking_tooltip";
    this.dialogDisp.btn_nextEnemy.toolTipText = "dialog_" + this.dialogProperties.textIDType + "_jumpto_castleName";
    this.updateCopyTexts();
    this.dialogDisp.mc_difficulty.visible = this.eventVO.isDifficultyScalingActivated;
    if (this.dialogDisp.mc_difficulty.visible) {
      __dep_export_DifficultyScalingHelper.DifficultyScalingHelper.addDifficultyIcon(this.dialogDisp.mc_difficulty.mc_icon, __dep_export_CastleModel.CastleModel.eventDifficultyScaling.getDifficultyVOByDifficultyID(this.eventVO.difficultyIDChoosen), 45, 45, this.dialogDisp.mc_difficulty);
    }
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SPointEventGetPointsVO.C2SPointEventGetPointsVO(this.dialogProperties.eventId));
    this.setSkin();
    this.setButtonVisibility();
    if (this._currentCategory) {
      this.changeCategory(this._currentCategory);
    } else {
      this.changeCategory(CastleAllianceAlienInvasionEventDialog.CAT_PLAYER);
    }
    this.updateTime();
  };
  CastleAllianceAlienInvasionEventDialog.prototype.setSkin = function () {
    var __s21local0 = __dep_exact_f855840627e6e145.int(this.dialogProperties.skinFrame);
    this.dialogDisp.mc_curtain.gotoAndStop(__s21local0);
    this.dialogDisp.mc_teaserImage.gotoAndStop(__s21local0);
  };
  CastleAllianceAlienInvasionEventDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  CastleAllianceAlienInvasionEventDialog.prototype.changeCategory = function (__s25param0) {
    if (this._currentCategory != __s25param0) {
      __s1param0.prototype.changeCategory.call(this, __s25param0);
      this.showSublayer(this._subLayer.get(__s25param0), [this.dialogProperties]);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_player, this._currentCategory == CastleAllianceAlienInvasionEventDialog.CAT_PLAYER);
      __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_alliance, this._currentCategory == CastleAllianceAlienInvasionEventDialog.CAT_ALLIANCE);
      this.updateCopyTexts();
    }
  };
  CastleAllianceAlienInvasionEventDialog.prototype.setButtonVisibility = function () {
    if (this.eventVO.isDualEvent) {
      this.dialogDisp.btn_tab_player.visible = true;
      this.dialogDisp.btn_tab_alliance.visible = true;
    } else {
      this.dialogDisp.btn_tab_player.visible = false;
      this.dialogDisp.btn_tab_alliance.visible = false;
    }
  };
  CastleAllianceAlienInvasionEventDialog.prototype.setCopyTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_" + this.dialogProperties.textIDType + "_camp_copy"));
    var __s32local0 = __dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonEventVO();
    var __s32local1 = __s32local0 && __s32local0.eventId == this.eventVO.eventId ? "_seasonLeague_info" : "_camp_info";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_" + this.dialogProperties.textIDType + __s32local1));
  };
  CastleAllianceAlienInvasionEventDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  CastleAllianceAlienInvasionEventDialog.prototype.updateTime = function (__s36param0 = null) {
    if (this.eventVO) {
      __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_time, this.eventVO.remainingEventTimeInSeconds);
      __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, this.eventVO.remainingEventTimeInSeconds);
    }
  };
  CastleAllianceAlienInvasionEventDialog.prototype.onRemoveEvent = function (__s39param0) {
    if (!this.eventVO || __s39param0.specialEventVO.eventId == this.eventVO.eventId) {
      this.hide();
    }
  };
  Object.defineProperty(CastleAllianceAlienInvasionEventDialog.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.dialogProperties.eventId);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceAlienInvasionEventDialog.NAME = "CastleAllianceAlienInvasionEvent_G";
  CastleAllianceAlienInvasionEventDialog.CAT_PLAYER = "CAT_PLAYER";
  CastleAllianceAlienInvasionEventDialog.CAT_ALLIANCE = "CAT_ALLIANCE";
  return CastleAllianceAlienInvasionEventDialog;
}(require("gge-module:export_CastleExternalSubLayerDialog").CastleExternalSubLayerDialog);
exports.CastleAllianceAlienInvasionEventDialog = __s0local0;
var __dep_export_CastleAllianceAlienInvasionEventDialogAlliance = require("gge-module:export_CastleAllianceAlienInvasionEventDialogAlliance");
var __dep_export_CastleAllianceAlienInvasionEventDialogPlayer = require("gge-module:export_CastleAllianceAlienInvasionEventDialogPlayer");
var __dep_export_DifficultyScalingHelper = require("gge-module:export_DifficultyScalingHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
