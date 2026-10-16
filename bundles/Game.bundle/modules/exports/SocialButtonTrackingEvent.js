Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function SocialButtonTrackingEvent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SocialButtonTrackingEvent, __s1param0);
  SocialButtonTrackingEvent.prototype.getVars = function () {
    var __s5local0 = {
      playerId: this._playerId,
      date: this._date,
      buttonName: this._buttonName
    };
    return __s5local0;
  };
  Object.defineProperty(SocialButtonTrackingEvent.prototype, "playerId", {
    set: function (__s7param0) {
      this._playerId = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SocialButtonTrackingEvent.prototype, "date", {
    set: function (__s9param0) {
      this._date = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SocialButtonTrackingEvent.prototype, "buttonName", {
    set: function (__s11param0) {
      this._buttonName = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  SocialButtonTrackingEvent.__initialize_static_members = function () {
    SocialButtonTrackingEvent.BUTTON_NAME_DISCORD = "Discord";
    SocialButtonTrackingEvent.BUTTON_NAME_DISCORD_MAINTENANCE = "Maintenance";
  };
  return SocialButtonTrackingEvent;
}(require("gge-module:exact_9e901e8e2483a22f").BasicTrackingEvent);
exports.SocialButtonTrackingEvent = __s0local0;
__s0local0.__initialize_static_members();
