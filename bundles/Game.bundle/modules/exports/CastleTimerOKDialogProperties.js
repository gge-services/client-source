Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __s0local0 = function (__s1param0) {
  function CastleTimerOKDialogProperties(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._titleTextID = __s3param0;
    __s3local0._descTextID = __s3param1;
    __s3local0.endTimeStamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s3param2 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTimerOKDialogProperties, __s1param0);
  Object.defineProperty(CastleTimerOKDialogProperties.prototype, "titleTextID", {
    get: function () {
      return this._titleTextID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTimerOKDialogProperties.prototype, "descTextID", {
    get: function () {
      return this._descTextID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTimerOKDialogProperties.prototype, "remainingSeconds", {
    get: function () {
      return Math.max(0, this.endTimeStamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTimerOKDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleTimerOKDialogProperties = __s0local0;
