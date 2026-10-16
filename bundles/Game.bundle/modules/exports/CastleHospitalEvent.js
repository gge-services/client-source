Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleHospitalEvent(__s3param0, __s3param1, __s3param2 = false, __s3param3 = false) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this)._hospitalFlags = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleHospitalEvent, __s1param0);
  Object.defineProperty(CastleHospitalEvent.prototype, "hospitalFlags", {
    get: function () {
      return this._hospitalFlags;
    },
    enumerable: true,
    configurable: true
  });
  CastleHospitalEvent.HOSPITAL_FLAGS_RECEIVED = "hospitalFlagsReceived";
  return CastleHospitalEvent;
}(createjs.Event);
exports.CastleHospitalEvent = __s0local0;
