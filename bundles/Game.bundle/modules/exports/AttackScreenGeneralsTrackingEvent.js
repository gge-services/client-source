Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function AttackScreenGeneralsTrackingEvent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AttackScreenGeneralsTrackingEvent, __s1param0);
  AttackScreenGeneralsTrackingEvent.prototype.getVars = function () {
    var __s5local0 = {
      playerId: this._playerId,
      details: this._details,
      sessionStart: this._sessionStart,
      sessionEnd: this._sessionEnd,
      attackLaunched: this._attackLaunched ? "TRUE" : "FALSE"
    };
    return __s5local0;
  };
  Object.defineProperty(AttackScreenGeneralsTrackingEvent.prototype, "playerId", {
    set: function (__s7param0) {
      this._playerId = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackScreenGeneralsTrackingEvent.prototype, "details", {
    set: function (__s9param0) {
      this._details = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackScreenGeneralsTrackingEvent.prototype, "sessionStart", {
    set: function (__s11param0) {
      this._sessionStart = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackScreenGeneralsTrackingEvent.prototype, "sessionEnd", {
    set: function (__s13param0) {
      this._sessionEnd = __s13param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackScreenGeneralsTrackingEvent.prototype, "attackLaunched", {
    set: function (__s15param0) {
      this._attackLaunched = __s15param0;
    },
    enumerable: true,
    configurable: true
  });
  AttackScreenGeneralsTrackingEvent.__initialize_static_members = function () {};
  return AttackScreenGeneralsTrackingEvent;
}(require("gge-module:exact_9e901e8e2483a22f").BasicTrackingEvent);
exports.AttackScreenGeneralsTrackingEvent = __s0local0;
__s0local0.__initialize_static_members();
