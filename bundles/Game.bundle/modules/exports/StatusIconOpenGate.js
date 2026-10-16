Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_OpenGateEvent = require("gge-module:export_OpenGateEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleManagementDialogProperties = require("gge-module:export_CastleManagementDialogProperties");
var __dep_export_CastleTextFieldHelper = require("gge-module:export_CastleTextFieldHelper");
var __s0local0 = function (__s1param0) {
  function StatusIconOpenGate() {
    var __s3local0 = __s1param0.call(this, "Btn_OpengateIcon", "txt_label", new __dep_exact_92d05af59ee2ff30.TextVO(""), __dep_export_ACastleStatusIcon.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
    __s3local0.setTooltip("dialog_startOpenGate_title");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconOpenGate, __s1param0);
  StatusIconOpenGate.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.itxt_label.autoFitToBounds = true;
  };
  StatusIconOpenGate.prototype.setVisibilityLoaded = function () {
    if (this.openGateVisible && this.isNotOnWorldmapOrOtherCastle) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconOpenGate.prototype.onClick = function () {
    __s1param0.prototype.onClick.call(this);
    if (this.layoutManager.currentState != __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleManagementDialog.CastleManagementDialog, new __dep_export_CastleManagementDialogProperties.CastleManagementDialogProperties(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo));
    }
  };
  StatusIconOpenGate.prototype.addEventListenerForVisibility = function () {
    __s1param0.prototype.addEventListenerForVisibility.call(this);
    this.controller.addEventListener(__dep_export_OpenGateEvent.OpenGateEvent.OPEN_GATE_CHANGED, this.bindFunction(this.onOpenGateUpdate));
    this.controller.addEventListener(__dep_export_OpenGateEvent.OpenGateEvent.OPEN_GATE_FINISHED, this.bindFunction(this.onOpenGateUpdate));
  };
  StatusIconOpenGate.prototype.removeEventListenerForVisibility = function () {
    __s1param0.prototype.removeEventListenerForVisibility.call(this);
    this.controller.removeEventListener(__dep_export_OpenGateEvent.OpenGateEvent.OPEN_GATE_CHANGED, this.bindFunction(this.onOpenGateUpdate));
    this.controller.removeEventListener(__dep_export_OpenGateEvent.OpenGateEvent.OPEN_GATE_FINISHED, this.bindFunction(this.onOpenGateUpdate));
  };
  StatusIconOpenGate.prototype.onOpenGateUpdate = function (__s18param0) {
    this.setVisibility();
  };
  StatusIconOpenGate.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconOpenGate.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconOpenGate.prototype.onTimerUpdate = function (__s24param0) {
    this.itxt_label.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeStringBySeconds(__dep_export_CastleModel.CastleModel.userData.getOwnCastle(__dep_export_CastleModel.CastleModel.areaData.activeArea.areaId, __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID).remainingOpenGateTime, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT);
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.restoreWidth(this.itxt_label);
  };
  Object.defineProperty(StatusIconOpenGate.prototype, "isNotOnWorldmapOrOtherCastle", {
    get: function () {
      return this.layoutManager.currentState != __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP && this.layoutManager.currentState != __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_KINGDOMMAP && !this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconOpenGate.prototype, "openGateVisible", {
    get: function () {
      return !!this.layoutManager.isInMyCastle && !!this.myCastle && this.myCastle.remainingOpenGateTime > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconOpenGate.prototype, "myCastle", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.userData.castleList && this.layoutManager.isInMyCastle && __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo) {
        return __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.kingdomID);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  return StatusIconOpenGate;
}(require("gge-module:export_ACastleLabeledStatusIcon").ACastleLabeledStatusIcon);
exports.StatusIconOpenGate = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleManagementDialog = require("gge-module:export_CastleManagementDialog");
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");
