Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __s0local0 = function (__s1param0) {
  function CastleXPBoosterDialogProperties(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._endTimeStamp = 0;
    __s3local0._boost = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._endTimeStamp = __dep_exact_f855840627e6e145.int(__s3param0);
    __s3local0._boost = __dep_exact_f855840627e6e145.int(__s3param1);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleXPBoosterDialogProperties, __s1param0);
  Object.defineProperty(CastleXPBoosterDialogProperties.prototype, "endTimeStamp", {
    get: function () {
      return this._endTimeStamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleXPBoosterDialogProperties.prototype, "boost", {
    get: function () {
      return this._boost;
    },
    enumerable: true,
    configurable: true
  });
  CastleXPBoosterDialogProperties.prototype.remainingDuration = function (__s9param0) {
    return __dep_exact_f855840627e6e145.int((this.endTimeStamp - __s9param0) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
  };
  return CastleXPBoosterDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleXPBoosterDialogProperties = __s0local0;
