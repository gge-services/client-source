Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AgeGateValidator() {}
  AgeGateValidator.validate = function (__s5param0) {
    return __s5param0 >= AgeGateValidator.MINIMUM_AGE;
  };
  AgeGateValidator.MINIMUM_AGE = 13;
  return AgeGateValidator;
}();
exports.AgeGateValidator = __s0local0;
