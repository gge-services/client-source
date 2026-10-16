Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function MathUtils() {}
  MathUtils.asDegrees = function (__s5param0) {
    return __s5param0 * MathUtils.RADTODEG;
  };
  MathUtils.asRadians = function (__s7param0) {
    return __s7param0 * MathUtils.DEGTORAD;
  };
  MathUtils.randomInt = function (__s9param0, __s9param1) {
    return __s9param0 + Number(Math.random() * (__s9param1 - __s9param0 + 1));
  };
  MathUtils.randomNumber = function (__s11param0, __s11param1) {
    return __s11param0 + Math.random() * (__s11param1 - __s11param0);
  };
  MathUtils.RADTODEG = 180 / Math.PI;
  MathUtils.DEGTORAD = Math.PI / 180;
  return MathUtils;
}();
exports.MathUtils = __s0local0;
