Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function SsoUserMoveTrackingEvent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SsoUserMoveTrackingEvent, __s1param0);
  SsoUserMoveTrackingEvent.prototype.getVars = function () {
    var __s5local0 = {
      playerId: this._playerId,
      date: this._date,
      actionType: this._actionType,
      login_method: this._login_method
    };
    return __s5local0;
  };
  Object.defineProperty(SsoUserMoveTrackingEvent.prototype, "playerId", {
    set: function (__s7param0) {
      this._playerId = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SsoUserMoveTrackingEvent.prototype, "date", {
    set: function (__s9param0) {
      this._date = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SsoUserMoveTrackingEvent.prototype, "actionType", {
    set: function (__s11param0) {
      this._actionType = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SsoUserMoveTrackingEvent.prototype, "login_method", {
    set: function (__s13param0) {
      this._login_method = __s13param0;
    },
    enumerable: true,
    configurable: true
  });
  SsoUserMoveTrackingEvent.__initialize_static_members = function () {
    SsoUserMoveTrackingEvent.POPUP_SHOWN = "popup_shown";
    SsoUserMoveTrackingEvent.POPUP_CONFIRMED = "popup_confirmed";
    SsoUserMoveTrackingEvent.LOGIN_WITH_PASSWORD = "login_with_password";
    SsoUserMoveTrackingEvent.LOGIN_WITH_SSO = "login_with_sso";
  };
  return SsoUserMoveTrackingEvent;
}(require("gge-module:exact_9e901e8e2483a22f").BasicTrackingEvent);
exports.SsoUserMoveTrackingEvent = __s0local0;
__s0local0.__initialize_static_members();
