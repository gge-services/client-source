var __s0local0 = require("gge-module:export_codes").codes.ERR_INVALID_OPT_VALUE;
module.exports = {
  getHighWaterMark: function getHighWaterMark(__s1param0, __s1param1, __s1param2, __s1param3) {
    var __s1local0 = function highWaterMarkFrom(__s3param0, __s3param1, __s3param2) {
      return __s3param0.highWaterMark ?? (__s3param1 ? __s3param0[__s3param2] : null);
    }(__s1param1, __s1param3, __s1param2);
    if (__s1local0 != null) {
      if (!isFinite(__s1local0) || Math.floor(__s1local0) !== __s1local0 || __s1local0 < 0) {
        throw new __s0local0(__s1param3 ? __s1param2 : "highWaterMark", __s1local0);
      }
      return Math.floor(__s1local0);
    }
    if (__s1param0.objectMode) {
      return 16;
    } else {
      return 16384;
    }
  }
};
