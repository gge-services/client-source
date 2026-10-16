Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CountrySorters() {}
  CountrySorters.sortAlphabetically = function (__s5param0, __s5param1) {
    var __s5local0 = [__s5param0.ggsCountryCode, __s5param1.ggsCountryCode];
    __s5local0.sort();
    if (__s5param0.ggsCountryCode === __s5param1.ggsCountryCode) {
      return 0;
    } else if (__s5local0.indexOf(__s5param0.ggsCountryCode) < __s5local0.indexOf(__s5param1.ggsCountryCode)) {
      return -1;
    } else {
      return 1;
    }
  };
  return CountrySorters;
}();
exports.CountrySorters = __s0local0;
