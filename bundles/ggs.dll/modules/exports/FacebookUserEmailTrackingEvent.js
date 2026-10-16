Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function FacebookUserEmailTrackingEvent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(FacebookUserEmailTrackingEvent, __s1param0);
  FacebookUserEmailTrackingEvent.prototype.getVars = function () {
    var __s5local0 = {
      playerId: this._playerId,
      _date: this._date,
      facebook_id: this._facebookId
    };
    if (this._email) {
      __s5local0.email = this._email;
    }
    return __s5local0;
  };
  Object.defineProperty(FacebookUserEmailTrackingEvent.prototype, "playerId", {
    set: function (__s8param0) {
      this._playerId = __s8param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserEmailTrackingEvent.prototype, "facebookId", {
    set: function (__s10param0) {
      this._facebookId = __s10param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserEmailTrackingEvent.prototype, "email", {
    set: function (__s12param0) {
      this._email = __s12param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserEmailTrackingEvent.prototype, "date", {
    set: function (__s14param0) {
      this._date = __s14param0;
    },
    enumerable: true,
    configurable: true
  });
  return FacebookUserEmailTrackingEvent;
}(require("gge-module:class_BasicTrackingEvent").BasicTrackingEvent);
exports.FacebookUserEmailTrackingEvent = __s0local0;
