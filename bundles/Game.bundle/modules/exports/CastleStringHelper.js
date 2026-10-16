Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleStringHelper() {}
  CastleStringHelper.parseToStringOrEmpty = function (__s5param0) {
    var __s5local0 = "";
    if (__s5param0 != null) {
      __s5local0 = __s5param0.toString();
    }
    return __s5local0;
  };
  CastleStringHelper.isNullOrEmpty = function (__s8param0) {
    return __s8param0 == null || __s8param0 == "";
  };
  return CastleStringHelper;
}();
exports.CastleStringHelper = __s0local0;
