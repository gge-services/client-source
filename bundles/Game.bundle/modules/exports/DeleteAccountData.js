Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleAccountDeletionEvent = require("gge-module:export_CastleAccountDeletionEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function DeleteAccountData() {
    this._remainingTimeTillDeleteTimeStamp = -1;
  }
  Object.defineProperty(DeleteAccountData.prototype, "isAccountDeletionStarted", {
    get: function () {
      return this._remainingTimeTillDeleteTimeStamp && this._remainingTimeTillDeleteTimeStamp != -1 && this.remainingTimeTillDeleteTimeStamp > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DeleteAccountData.prototype, "remainingTimeTillDeleteTimeStamp", {
    get: function () {
      return this._remainingTimeTillDeleteTimeStamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    },
    set: function (__s9param0) {
      this._remainingTimeTillDeleteTimeStamp = __s9param0;
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleAccountDeletionEvent.CastleAccountDeletionEvent(__dep_export_CastleAccountDeletionEvent.CastleAccountDeletionEvent.ACCOUNT_DELETION_TIMER_UPDATED));
    },
    enumerable: true,
    configurable: true
  });
  DeleteAccountData.prototype.getDateForDelete = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.datetime(new Date(Date.now() + __dep_export_CastleModel.CastleModel.deleteAccountData.remainingTimeTillDeleteTimeStamp * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC), __dep_exact_92d05af59ee2ff30.DateTimeStyle.LONG, __dep_exact_92d05af59ee2ff30.DateTimeStyle.NONE);
  };
  return DeleteAccountData;
}();
exports.DeleteAccountData = __s0local0;
