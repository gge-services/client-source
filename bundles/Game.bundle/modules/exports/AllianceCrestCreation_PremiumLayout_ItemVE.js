Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __s0local0 = function (__s1param0) {
  function AllianceCrestCreation_PremiumLayout_ItemVE(__s3param0) {
    var __s3local0 = this;
    __s3local0._activated = false;
    CONSTRUCTOR_HACK;
    __s3local0 = __s1param0.call(this, __s3param0) || this;
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, __s3local0.bindFunction(__s3local0.onTimer));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceCrestCreation_PremiumLayout_ItemVE, __s1param0);
  AllianceCrestCreation_PremiumLayout_ItemVE.prototype.updateDisp = function () {
    this.disp.mc_effect.visible = this.layoutVO.effects.length > 0;
    this.disp.mc_effect.gotoAndStop(this.layoutVO.effectIconID);
    this.disp.mc_locked.visible = this.layoutVO.remainingSeconds <= 0;
    this.disp.mc_frame.mc_selected.visible = this._selected;
    this.disp.mc_frame.mc_active.visible = false;
    this.disp.mc_frame.mc_unlocked.visible = this.layoutVO.remainingSeconds > 0;
    this.disp.mc_frame.mc_locked.visible = this.layoutVO.remainingSeconds <= 0;
    this.onTimer();
  };
  AllianceCrestCreation_PremiumLayout_ItemVE.prototype.onTimer = function (__s7param0 = null) {
    if (this.layoutVO.remainingSeconds <= 0) {
      this.disp.mc_time.visible = false;
    } else {
      this.disp.mc_time.visible = true;
      var __s7local0 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(this.layoutVO.remainingSeconds);
      this._itxtTime ||= __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_time.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(""));
      this._itxtTime.textContentVO.stringValue = __s7local0;
      this._itxtTime.autoFitToBounds = true;
    }
  };
  Object.defineProperty(AllianceCrestCreation_PremiumLayout_ItemVE.prototype, "activated", {
    set: function (__s11param0) {
      this._activated = __s11param0;
      this.updateDisp();
    },
    enumerable: true,
    configurable: true
  });
  AllianceCrestCreation_PremiumLayout_ItemVE.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  Object.defineProperty(AllianceCrestCreation_PremiumLayout_ItemVE.prototype, "layoutType", {
    get: function () {
      return "Premium";
    },
    enumerable: true,
    configurable: true
  });
  return AllianceCrestCreation_PremiumLayout_ItemVE;
}(require("gge-module:export_AllianceCrestCreation_ALayout_ItemVE").AllianceCrestCreation_ALayout_ItemVE);
exports.AllianceCrestCreation_PremiumLayout_ItemVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
