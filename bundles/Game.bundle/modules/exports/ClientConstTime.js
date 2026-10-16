Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ClientConstTime() {}
  ClientConstTime.isOneDay = function (__s5param0) {
    return __s5param0 / ClientConstTime.SECONDS_PER_DAY == 1;
  };
  ClientConstTime.isOneHour = function (__s7param0) {
    return __s7param0 * ClientConstTime.SEC_2_HOURES == 1;
  };
  ClientConstTime.isOneMinute = function (__s9param0) {
    return __s9param0 / ClientConstTime.SEC_2_MILLISEC == 1;
  };
  ClientConstTime.__initialize_static_members = function () {
    ClientConstTime.MILLISEC_2_SEC = 0.001;
    ClientConstTime.SEC_2_HOURES = 1 / 3600;
    ClientConstTime.SEC_2_MILLISEC = 1000;
    ClientConstTime.SIX_HOURS_2_MILLISEC = 21600000;
    ClientConstTime.DAYS_2_MILLISEC = 86400000;
    ClientConstTime.HOURES_2_SEC = 3600;
    ClientConstTime.MINUTES_2_MILLISEC = ClientConstTime.SEC_2_MILLISEC * 60;
    ClientConstTime.HOURES_2_MILLISEC = ClientConstTime.MINUTES_2_MILLISEC * 60;
    ClientConstTime.MINUTES_2_SEC = 60;
    ClientConstTime.SECONDS_PER_DAY = ClientConstTime.HOURES_2_SEC * 24;
    ClientConstTime.SECONDS_PER_YEAR = ClientConstTime.SECONDS_PER_DAY * 365;
    ClientConstTime.SECONDS_PER_FOUR_WEEKS = __dep_exact_f855840627e6e145.int(ClientConstTime.SECONDS_PER_DAY * 28);
    ClientConstTime.DEFAULT_ENABLE_BUTTON_WAIT_IN_SECONDS = 0.5;
  };
  return ClientConstTime;
}();
exports.ClientConstTime = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
__s0local0.__initialize_static_members();
