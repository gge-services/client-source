Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleLoginBonusEvent = require("gge-module:export_CastleLoginBonusEvent");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ACastleLabeledStatusIcon = require("gge-module:export_ACastleLabeledStatusIcon");
var __s0local0 = function (__s1param0) {
  function StatusIconActivityBonusComponent() {
    var __s3local0 = this;
    __s3local0.blink = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, "Btn_Activity_Reward", "txt_value", new __dep_exact_92d05af59ee2ff30.TextVO("")) || this).allowCaching = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconActivityBonusComponent, __s1param0);
  Object.defineProperty(StatusIconActivityBonusComponent.prototype, "width", {
    get: function () {
      return 64;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleLabeledStatusIcon.ACastleLabeledStatusIcon.prototype, "width").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconActivityBonusComponent.prototype.addEventListenerForVisibility = function () {
    this.blink = false;
    __dep_export_CastleModel.CastleModel.activityBonusData.addEventListener(__dep_export_CastleLoginBonusEvent.CastleLoginBonusEvent.ACTIVITYBONUS_STATE_CHANGED, this.bindFunction(this.onActivityStateChanged));
    this.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdate));
  };
  StatusIconActivityBonusComponent.prototype.removeEventListenerForVisibility = function () {
    this.blink = false;
    __dep_export_CastleModel.CastleModel.activityBonusData.removeEventListener(__dep_export_CastleLoginBonusEvent.CastleLoginBonusEvent.ACTIVITYBONUS_STATE_CHANGED, this.bindFunction(this.onActivityStateChanged));
    this.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdate));
  };
  StatusIconActivityBonusComponent.prototype.onClick = function () {
    var __s13local0 = this.isOutOfTutorial();
    if (__dep_export_CastleModel.CastleModel.activityBonusData.isReadyToCollect && __s13local0) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleActivityBonusDialog.CastleActivityBonusDialog);
    }
  };
  StatusIconActivityBonusComponent.prototype.setVisibilityLoaded = function () {
    if (!this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle && __dep_export_CastleModel.CastleModel.activityBonusData.isActive && __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().currentState != __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_KINGDOMMAP) {
      this.show();
      this.itxt_label.textContentVO.stringValue = "";
      this.itxt_label.visible = true;
      if (__dep_export_CastleModel.CastleModel.activityBonusData.isReadyToCollect) {
        this.onReadyForCollect(null);
      } else {
        this.iconDisp.bg.gotoAndStop(1);
        __dep_exact_9e901e8e2483a22f.MovieClipHelper.stopAllMoviesGotoFrameOne(this.iconDisp.bg.mc_chest);
      }
    } else {
      this.hide();
    }
  };
  StatusIconActivityBonusComponent.prototype.onUpdate = function (__s22param0) {
    this.update();
  };
  StatusIconActivityBonusComponent.prototype.updateLoaded = function () {
    var __s24local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.activityBonusData.remainingTimeTillNextActivityBonus);
    if (__s24local0 > 0) {
      this.blink = false;
      this.itxt_label.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getShortTimeStringBySeconds(__s24local0);
      this.setTooltip("dialog_activityreward_tooltipp1");
    } else if (this.blink && this.itxt_label && this.itxt_label.model) {
      this.itxt_label.visible = !this.itxt_label.visible;
    }
  };
  StatusIconActivityBonusComponent.prototype.onActivityStateChanged = function (__s28param0) {
    this.setVisibility();
  };
  StatusIconActivityBonusComponent.prototype.onReadyForCollect = function (__s30param0) {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.playAllMovies(this.iconDisp.bg.mc_chest);
    this.iconDisp.bg.gotoAndStop(2);
    this.blink = true;
    this.itxt_label.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getHoureMinuteSecondTimeString(0);
    this.setTooltip("dialog_activityreward_tooltipp2");
  };
  return StatusIconActivityBonusComponent;
}(__dep_export_ACastleLabeledStatusIcon.ACastleLabeledStatusIcon);
exports.StatusIconActivityBonusComponent = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleActivityBonusDialog = require("gge-module:export_CastleActivityBonusDialog");
