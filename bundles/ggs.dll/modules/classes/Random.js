Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function Random() {
    throw new Error("Random is a static class and cannot be instantiated.");
  }
  Random.randBit = function () {
    return Math.random();
  };
  Random.hexColor = function () {
    return Number("0x" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase());
  };
  Random.float = function (__s9param0, __s9param1 = NaN) {
    if (isNaN(__s9param1)) {
      __s9param1 = __s9param0;
      __s9param0 = 0;
    }
    return Random.randBit() * (__s9param1 - __s9param0) + __s9param0;
  };
  Random.boolean = function (__s12param0 = 0.5) {
    return Random.randBit() < __s12param0;
  };
  Random.sign = function (__s14param0 = 0.5) {
    if (Random.randBit() < __s14param0) {
      return 1;
    } else {
      return -1;
    }
  };
  Random.bit = function (__s18param0 = 0.5) {
    if (Random.randBit() < __s18param0) {
      return 1;
    } else {
      return 0;
    }
  };
  Random.integer = function (__s22param0, __s22param1 = NaN) {
    if (isNaN(__s22param1)) {
      __s22param1 = __s22param0;
      __s22param0 = 0;
    }
    return Math.floor(Random.float(__s22param0, __s22param1));
  };
  return Random;
}();
exports.Random = __s0local0;
