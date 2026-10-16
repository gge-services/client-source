Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __s0local0 = function (__s1param0) {
  function BasicTimedNoClickProperties(__s3param0, __s3param1, __s3param2 = 0) {
    var __s3local0 = this;
    __s3local0.endTimestamp = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._title = __s3param0;
    __s3local0._copy = __s3param1;
    __s3local0.endTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s3param2 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BasicTimedNoClickProperties, __s1param0);
  Object.defineProperty(BasicTimedNoClickProperties.prototype, "title", {
    get: function () {
      return this._title;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicTimedNoClickProperties.prototype, "copy", {
    get: function () {
      return this._copy;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicTimedNoClickProperties.prototype, "remainingTimeInSeconds", {
    get: function () {
      console.log("BasicTimedNoClickProperties::remainingTimeInSeconds() - " + __dep_export_CachedTimer.CachedTimer.getCachedTimer() + "-" + this.endTimestamp);
      return Math.max((this.endTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC, 0);
    },
    enumerable: true,
    configurable: true
  });
  return BasicTimedNoClickProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.BasicTimedNoClickProperties = __s0local0;
