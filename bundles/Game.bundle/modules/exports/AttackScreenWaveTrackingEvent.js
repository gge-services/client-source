Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function AttackScreenWaveTrackingEvent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AttackScreenWaveTrackingEvent, __s1param0);
  AttackScreenWaveTrackingEvent.prototype.getVars = function () {
    var __s5local0 = {
      playerId: this._playerId,
      date: this._date,
      numberWaves: this._numberWaves,
      actionType: this._actionType
    };
    return __s5local0;
  };
  Object.defineProperty(AttackScreenWaveTrackingEvent.prototype, "playerId", {
    set: function (__s7param0) {
      this._playerId = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackScreenWaveTrackingEvent.prototype, "date", {
    set: function (__s9param0) {
      this._date = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackScreenWaveTrackingEvent.prototype, "numberWaves", {
    set: function (__s11param0) {
      this._numberWaves = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackScreenWaveTrackingEvent.prototype, "actionType", {
    set: function (__s13param0) {
      this._actionType = __s13param0;
    },
    enumerable: true,
    configurable: true
  });
  AttackScreenWaveTrackingEvent.__initialize_static_members = function () {
    AttackScreenWaveTrackingEvent.ACTION_PRESET_ONE_WAVE = "preset_one_wave";
    AttackScreenWaveTrackingEvent.ACTION_PRESET_ALL_WAVES = "preset_all_wave";
    AttackScreenWaveTrackingEvent.ACTION_AUTOFILL_ONE_WAVE = "autofill_one_wave";
    AttackScreenWaveTrackingEvent.ACTION_AUTOFILL_ALL_WAVES = "autofill_all_wave";
  };
  return AttackScreenWaveTrackingEvent;
}(require("gge-module:exact_9e901e8e2483a22f").BasicTrackingEvent);
exports.AttackScreenWaveTrackingEvent = __s0local0;
__s0local0.__initialize_static_members();
