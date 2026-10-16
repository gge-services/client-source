Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function CastleCooldownComponent(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4) {
    this.totalTime = 0;
    this.currentTime = 0;
    this.cooldownComponent = __s3param0;
    this.onTimeUpFunction = __s3param1;
    this.currentTime = __s3param2;
    this.totalTime = __s3param3;
    this.itxt_cooldown_title = this.textFieldManager.registerTextField(__s3param0.text_cooldown_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s3param4));
    this._itxt_cooldown_time = this.textFieldManager.registerTextField(__s3param0.text_cooldown, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
  }
  CastleCooldownComponent.prototype.addEventListenerOnShow = function () {
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.on1SecTimer));
  };
  CastleCooldownComponent.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.on1SecTimer));
  };
  CastleCooldownComponent.prototype.on1SecTimer = function (__s9param0 = null) {
    this._itxt_cooldown_time.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getTimeToString(this.currentTime, __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
    this.cooldownComponent.mc_progressBar.scaleX = Math.max(0, (this.totalTime - this.currentTime) / this.totalTime);
    this.currentTime--;
    if (this.currentTime < 0) {
      this.onTimeUpFunction();
    }
  };
  CastleCooldownComponent.prototype.updateTime = function (__s12param0) {
    this.currentTime = __s12param0;
    this.on1SecTimer();
  };
  Object.defineProperty(CastleCooldownComponent.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCooldownComponent.prototype, "itxt_cooldown_time", {
    get: function () {
      return this._itxt_cooldown_time;
    },
    enumerable: true,
    configurable: true
  });
  return CastleCooldownComponent;
}();
exports.CastleCooldownComponent = __s0local0;
