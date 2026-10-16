Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function DonationEventTrackingEvent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DonationEventTrackingEvent, __s1param0);
  DonationEventTrackingEvent.prototype.getVars = function () {
    var __s5local0 = {
      playerId: this._playerId,
      date: this._date,
      actionType: this._actionType
    };
    return __s5local0;
  };
  Object.defineProperty(DonationEventTrackingEvent.prototype, "playerId", {
    set: function (__s7param0) {
      this._playerId = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventTrackingEvent.prototype, "date", {
    set: function (__s9param0) {
      this._date = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventTrackingEvent.prototype, "actionType", {
    set: function (__s11param0) {
      this._actionType = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  DonationEventTrackingEvent.__initialize_static_members = function () {
    DonationEventTrackingEvent.OPENED_DONATION_MAIN_DIALOG = "opened_donation_main_dialog";
  };
  return DonationEventTrackingEvent;
}(require("gge-module:exact_9e901e8e2483a22f").BasicTrackingEvent);
exports.DonationEventTrackingEvent = __s0local0;
__s0local0.__initialize_static_members();
