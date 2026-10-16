Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function AccountDeletionTrackingEvent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AccountDeletionTrackingEvent, __s1param0);
  AccountDeletionTrackingEvent.prototype.getVars = function () {
    var __s5local0 = {
      playerId: this._playerId,
      date: this._date,
      actionType: this._actionType
    };
    return __s5local0;
  };
  Object.defineProperty(AccountDeletionTrackingEvent.prototype, "playerId", {
    set: function (__s7param0) {
      this._playerId = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AccountDeletionTrackingEvent.prototype, "date", {
    set: function (__s9param0) {
      this._date = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AccountDeletionTrackingEvent.prototype, "actionType", {
    set: function (__s11param0) {
      this._actionType = __s11param0;
    },
    enumerable: true,
    configurable: true
  });
  AccountDeletionTrackingEvent.__initialize_static_members = function () {
    AccountDeletionTrackingEvent.DELETION_INITIALIZATION = "deletion_initialization";
    AccountDeletionTrackingEvent.DELETION_INITIALIZATION_CONFIRM = "deletion_initialization_confirm";
    AccountDeletionTrackingEvent.DELETION_INITIALIZATION_CANCEL = "deletion_initialization_cancel";
    AccountDeletionTrackingEvent.ACCOUNT_DELETION_POPUP = "account_deletion_popup";
    AccountDeletionTrackingEvent.ACCOUNT_DELETION_OK = "account_deletion_ok";
    AccountDeletionTrackingEvent.ACCOUNT_DELETION_CANCEL = "account_deletion_cancel";
  };
  return AccountDeletionTrackingEvent;
}(require("gge-module:exact_9e901e8e2483a22f").BasicTrackingEvent);
exports.AccountDeletionTrackingEvent = __s0local0;
__s0local0.__initialize_static_members();
