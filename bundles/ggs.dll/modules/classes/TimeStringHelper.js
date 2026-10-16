Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_MathBase = require("gge-module:class_MathBase");
var __dep_exact_6fa490d8c1ec56fc = require("gge-module:exact_6fa490d8c1ec56fc");
var __dep_opaque_c83528567256175cfb346d7d = require("gge-module:opaque_c83528567256175cfb346d7d");
var __s0local0 = function () {
  function TimeStringHelper() {}
  TimeStringHelper.getShortTimeStringBySeconds = function (__s5param0, __s5param1 = "") {
    return TimeStringHelper.getShortTimeString(__s5param0 * 1000, __s5param1);
  };
  TimeStringHelper.getShortTimeStringByMinutes = function (__s7param0, __s7param1 = "") {
    return TimeStringHelper.getShortTimeString(__s7param0 * 1000 * 60, __s7param1);
  };
  TimeStringHelper.getShortTimeString = function (__s9param0, __s9param1 = "") {
    if (__s9param0 <= 0) {
      return "-";
    }
    var __s9local0 = __dep_exact_6fa490d8c1ec56fc.int(__s9param0 / 1000);
    var __s9local1 = __dep_exact_6fa490d8c1ec56fc.int(__s9local0 / 60);
    var __s9local2 = __dep_exact_6fa490d8c1ec56fc.int(__s9local1 / 60);
    var __s9local3 = "";
    __s9local0 -= __s9local1 * 60;
    __s9local1 -= __s9local2 * 60;
    __s9local3 += TimeStringHelper.addLeadingZero(__s9local1);
    if (__s9param1 == TimeStringHelper.TWO_TIME_FORMAT && __s9local2 == 0 || __s9param1 != TimeStringHelper.TWO_TIME_FORMAT) {
      __s9local3 += ":";
      __s9local3 += TimeStringHelper.addLeadingZero(__s9local0);
    }
    if (__s9local2 > 0 || __s9param1 == TimeStringHelper.HOURS_MINUTES_SECONDS_FORMAT) {
      __s9local3 = TimeStringHelper.addLeadingZero(__s9local2) + ":" + __s9local3;
    }
    return __dep_opaque_c83528567256175cfb346d7d.Localize.digitalClock(__s9local3);
  };
  TimeStringHelper.getHoureMinutesTimeString = function (__s14param0) {
    if (__s14param0 <= 0) {
      return "-";
    }
    var __s14local0 = __dep_exact_6fa490d8c1ec56fc.int(__s14param0 / 60);
    var __s14local1 = __dep_exact_6fa490d8c1ec56fc.int(__s14local0 / 60);
    var __s14local2 = "";
    if ((__s14local0 -= __s14local1 * 60) < 10) {
      __s14local2 += "0";
    }
    __s14local2 = __s14local1 + ":" + (__s14local2 += __s14local0);
    return __dep_opaque_c83528567256175cfb346d7d.Localize.digitalClock(__s14local2);
  };
  TimeStringHelper.getHoureMinuteSecondTimeString = function (__s18param0) {
    if (__s18param0 <= 0) {
      return __dep_opaque_c83528567256175cfb346d7d.Localize.digitalClock("00:00:00");
    }
    var __s18local0 = __dep_exact_6fa490d8c1ec56fc.int(__s18param0 % 60);
    var __s18local1 = __dep_exact_6fa490d8c1ec56fc.int(__s18param0 / 60 % 60);
    var __s18local2 = __dep_exact_6fa490d8c1ec56fc.int(__s18param0 / 3600);
    var __s18local3 = "";
    __s18local3 += (__s18local2 < 10 ? "0" : "") + __s18local2;
    __s18local3 += ":" + (__s18local1 < 10 ? "0" : "") + __s18local1;
    __s18local3 += ":" + (__s18local0 < 10 ? "0" : "") + __s18local0;
    return __dep_opaque_c83528567256175cfb346d7d.Localize.digitalClock(__s18local3);
  };
  TimeStringHelper.getNewDateToString = function (__s21param0, __s21param1, __s21param2) {
    if (__s21param0 <= 0) {
      return "-";
    }
    var __s21local0 = new Date(__s21param0);
    var __s21local1 = "-";
    if (__s21param1 == TimeStringHelper.DATE_DAY_FORMAT) {
      __s21local1 = __s21param2("generic_dayformat", [TimeStringHelper.getDayStringFromDate(__s21local0), TimeStringHelper.getMonthStringFromDate(__s21local0), TimeStringHelper.getYearStringFromDate(__s21local0)]);
    } else if (__s21param1 == TimeStringHelper.DATE_SHORT_DAY_FORMAT) {
      __s21local1 = __s21param2("generic_dayformat_short", [TimeStringHelper.getDayStringFromDate(__s21local0), TimeStringHelper.getMonthStringFromDate(__s21local0)]);
    }
    return __s21local1;
  };
  TimeStringHelper.getYearStringFromDate = function (__s26param0) {
    return __s26param0.getFullYear().toString();
  };
  TimeStringHelper.getMonthStringFromDate = function (__s28param0) {
    if (__s28param0.getMonth() + 1 < 10) {
      return "0" + (__s28param0.getMonth() + 1);
    } else {
      return (__s28param0.getMonth() + 1).toString();
    }
  };
  TimeStringHelper.getDayStringFromDate = function (__s32param0) {
    if (__s32param0.getDate() < 10) {
      return "0" + __s32param0.getDate();
    } else {
      return __s32param0.getDate().toString();
    }
  };
  TimeStringHelper.getDateToString = function (__s36param0, __s36param1, __s36param2) {
    if (__s36param0 <= 0) {
      return "-";
    }
    var __s36local0 = "";
    var __s36local1 = new Date(__s36param0);
    if (__s36param1 == TimeStringHelper.DATE_DAY_FORMAT_WITHOUT_YEAR) {
      return __s36local1.getDate() + "." + (__s36local1.getMonth() + 1);
    } else if (__s36param1 == TimeStringHelper.DATE_DAY_FORMAT) {
      return __s36local1.getDate() + "." + (__s36local1.getMonth() + 1) + "." + __s36local1.getFullYear();
    } else if (__s36param1 == TimeStringHelper.DATE_SHORT_DAY_FORMAT) {
      return __s36param2("generic_dayformat_short", [__s36local1.getDate() < 10 ? "0" + __s36local1.getDate() : __s36local1.getDate().toString(), __s36local1.getMonth() + 1 < 10 ? "0" + (__s36local1.getMonth() + 1) : (__s36local1.getMonth() + 1).toString]);
    } else {
      if (__s36param1 == TimeStringHelper.DATE_TIMEOCLOCK_FORMAT) {
        __s36local0 += __s36local1.getHours() + ".";
        if (__s36local1.getMinutes() < 10) {
          __s36local0 += "0";
        }
        __s36local0 += __s36local1.getMinutes();
      }
      if (__s36param1 == TimeStringHelper.DATE_TIMEOCLOCK_FORMAT_ADVANCED) {
        if (__s36local1.getHours() < 10) {
          __s36local0 += "0";
        }
        __s36local0 += __s36local1.getHours() + ":";
        if (__s36local1.getMinutes() < 10) {
          __s36local0 += "0";
        }
        __s36local0 += __s36local1.getMinutes();
      }
      return __s36local0 + __s36param2("timeformat_clock");
    }
  };
  TimeStringHelper.multiOrShortTimeString = function (__s48param0, __s48param1, __s48param2) {
    var __s48local0 = __s48param0;
    return __s48local0 += __s48param2 ? "_short" : __s48param1 != 1 ? "s" : "";
  };
  TimeStringHelper.getTimeToString = function (__s50param0, __s50param1, __s50param2, __s50param3 = false, __s50param4 = false, __s50param5 = false, __s50param6 = false) {
    if (__s50param0 <= 0) {
      return "-";
    }
    if (__s50param6 && !__s50param4) {
      __s50param0 = TimeStringHelper.roundTimeToNextHour(__s50param0);
    }
    var __s50local0;
    var __s50local1 = __s50param0 * 1000;
    var __s50local2 = __dep_exact_6fa490d8c1ec56fc.int(__s50local1 / 1000);
    var __s50local3 = __dep_exact_6fa490d8c1ec56fc.int(__s50local2 / 60);
    var __s50local4 = __dep_exact_6fa490d8c1ec56fc.int(__s50local3 / 60);
    var __s50local5 = __dep_exact_6fa490d8c1ec56fc.int(__s50local4 / 24);
    var __s50local6 = __dep_exact_6fa490d8c1ec56fc.int(__s50local5 / 30);
    var __s50local7 = "";
    var __s50local8 = "";
    __s50local1 -= __s50local2 * 1000;
    __s50local2 -= __s50local3 * 60;
    __s50local3 -= __s50local4 * 60;
    if (__s50param1 != TimeStringHelper.ONE_TIME_HOURS_FORMAT) {
      __s50local4 -= __s50local5 * 24;
      __s50local5 -= __s50local6 * 30;
    }
    if (__s50param1 != TimeStringHelper.ONE_TIME_HOURS_FORMAT && __s50local6 > 0) {
      __s50local7 = __s50local6 + " " + __s50param2(__s50local8 = TimeStringHelper.multiOrShortTimeString("generic_month", __s50local6, __s50param4));
      if (__s50param1 == TimeStringHelper.ONE_TIME_FORMAT_ADVANCED) {
        return (__s50local0 = __dep_class_MathBase.MathBase.round(__s50local5 / 30, 1) + __s50local6) + " " + __s50param2(__s50local8 = TimeStringHelper.multiOrShortTimeString("generic_month", __s50local0, __s50param4));
      }
      if (__s50param1 == TimeStringHelper.ONE_TIME_FORMAT) {
        return __s50local7;
      }
    }
    if (__s50param1 != TimeStringHelper.ONE_TIME_HOURS_FORMAT && __s50local5 > 0) {
      __s50local8 = TimeStringHelper.multiOrShortTimeString("generic_day", __s50local5, __s50param4);
      if (__s50local7.length > 0) {
        __s50local7 += __s50param3 ? "\n" : " ";
      }
      __s50local7 += __s50local5 + " " + __s50param2(__s50local8);
      if (__s50param1 == TimeStringHelper.ONE_TIME_FORMAT_ADVANCED) {
        return (__s50local0 = __dep_class_MathBase.MathBase.round(__s50local4 / 24, 1) + __s50local5) + " " + __s50param2(__s50local8 = TimeStringHelper.multiOrShortTimeString("generic_day", __s50local0, __s50param4));
      }
      if (__s50param1 == TimeStringHelper.ONE_TIME_FORMAT) {
        return __s50local7;
      }
      if (__s50local6 > 0) {
        return __s50local7;
      }
    }
    if (__s50local4 > 0) {
      if (__s50param5 && __s50local5 > 0) {
        var __s50local9 = __dep_class_MathBase.MathBase.floor(__s50local3 / 60, 1);
        if (__s50local9 >= 1) {
          __s50local4++;
        } else if (__s50local9 > 0) {
          return __s50local7 + " " + __s50local4 + __s50param2("generic_comma") + __s50local9.toString().substr(__s50local9.toString().indexOf(".") + 1) + " " + __s50param2("generic_hours");
        }
      }
      __s50local8 = TimeStringHelper.multiOrShortTimeString("generic_hour", __s50local4, __s50param4);
      if (__s50local7.length > 0) {
        __s50local7 += __s50param3 ? "\n" : " ";
      }
      __s50local7 += __s50local4 + " " + __s50param2(__s50local8);
      if (__s50param1.indexOf("onetime") >= 0 || __s50param1 == TimeStringHelper.TWO_TIME_FORMAT && __s50local5 > 0) {
        return __s50local7;
      }
    }
    if (__s50local3 > 0) {
      __s50local8 = TimeStringHelper.multiOrShortTimeString("generic_minute", __s50local3, __s50param4);
      if (__s50local7.length > 0) {
        __s50local7 += __s50param3 ? "\n" : " ";
      }
      __s50local7 += __s50local3 + " " + __s50param2(__s50local8);
      if (__s50param1.indexOf("onetime") >= 0 || __s50param1 == TimeStringHelper.TWO_TIME_FORMAT && (__s50local4 > 0 || __s50local5 > 0)) {
        return __s50local7;
      }
    } else if (__s50param1 == TimeStringHelper.TWO_TIME_FORMAT && __s50local7 != "") {
      return __s50local7;
    }
    if (__s50local2 > 0) {
      __s50local8 = TimeStringHelper.multiOrShortTimeString("generic_second", __s50local2, __s50param4);
      if (__s50local7.length > 0) {
        __s50local7 += __s50param3 ? "\n" : " ";
      }
      __s50local7 += __s50local2 + " " + __s50param2(__s50local8);
    }
    return __s50local7;
  };
  TimeStringHelper.roundTimeToNextHour = function (__s75param0) {
    if (__s75param0 > 3600) {
      __s75param0 += 1800;
    }
    return __s75param0;
  };
  TimeStringHelper.addLeadingZero = function (__s78param0) {
    var __s78local0 = String(__s78param0);
    if (__s78param0 < 10) {
      __s78local0 = "0" + __s78param0;
    }
    return __s78local0;
  };
  TimeStringHelper.getDateStringFromDate = function (__s81param0, __s81param1) {
    return __s81param1("generic_dayformat", [__s81param0.getDate(), __s81param0.getMonth() + 1, __s81param0.getFullYear()]);
  };
  TimeStringHelper.getTimeStringFromDate = function (__s83param0, __s83param1, __s83param2 = TimeStringHelper.TWO_TIME_FORMAT) {
    var __s83local0 = "";
    __s83local0 += __s83param0.getHours() < 10 ? "0" + __s83param0.getHours() : String(__s83param0.getHours());
    __s83local0 += ":" + (__s83param0.getMinutes() < 10 ? "0" + __s83param0.getMinutes() : String(__s83param0.getMinutes()));
    if (__s83param2 == TimeStringHelper.HOURS_MINUTES_SECONDS_FORMAT) {
      __s83local0 += ":" + (__s83param0.getSeconds() < 10 ? "0" + __s83param0.getSeconds() : String(__s83param0.getSeconds()));
    }
    return __dep_opaque_c83528567256175cfb346d7d.Localize.digitalClock(__s83local0);
  };
  TimeStringHelper.getCommaTimeStringFromSeconds = function (__s86param0, __s86param1, __s86param2 = "") {
    if (__s86param0 <= 0) {
      return "-";
    }
    var __s86local0;
    var __s86local1 = __s86param0 * 1000;
    var __s86local2 = __dep_exact_6fa490d8c1ec56fc.int(__s86local1 / 1000);
    var __s86local3 = __dep_exact_6fa490d8c1ec56fc.int(__s86local2 / 60);
    var __s86local4 = __dep_exact_6fa490d8c1ec56fc.int(__s86local3 / 60);
    var __s86local5 = __dep_exact_6fa490d8c1ec56fc.int(__s86local4 / 24);
    var __s86local6 = __dep_exact_6fa490d8c1ec56fc.int(__s86local5 / 30);
    var __s86local7 = __s86local6;
    var __s86local8 = __dep_exact_6fa490d8c1ec56fc.int(__s86local5 - __s86local6 * 30);
    var __s86local9 = __dep_exact_6fa490d8c1ec56fc.int(__s86local4 - __s86local5 * 24);
    var __s86local10 = __dep_exact_6fa490d8c1ec56fc.int(__s86local3 - __s86local4 * 60);
    var __s86local11 = __dep_exact_6fa490d8c1ec56fc.int(__s86local2 - __s86local3 * 60);
    if (__s86local7 > 0) {
      if ((__s86local0 = __dep_class_MathBase.MathBase.ceil(__s86local8 / 30, 1)) >= 1) {
        __s86local7++;
      } else if (__s86local0 > 0) {
        return __s86local7 + __s86param1("generic_comma") + __s86local0.toString().substr(__s86local0.toString().indexOf(".") + 1) + " " + __s86param1("generic_months");
      }
      return __s86local7 + " " + __s86param1(TimeStringHelper.multiOrShortTimeString("generic_month", __s86local7, false));
    }
    if (__s86local8 > 0) {
      if ((__s86local0 = __dep_class_MathBase.MathBase.ceil(__s86local9 / 24, 1)) >= 1) {
        __s86local8++;
      } else if (__s86local0 > 0) {
        return __s86local8 + __s86param1("generic_comma") + __s86local0.toString().substr(__s86local0.toString().indexOf(".") + 1) + " " + __s86param1("generic_days");
      }
      return __s86local8 + " " + __s86param1(TimeStringHelper.multiOrShortTimeString("generic_day", __s86local8, false));
    }
    if (__s86param2 == TimeStringHelper.HOURS_MINUTES_SECONDS_FORMAT) {
      return TimeStringHelper.getShortTimeString(__s86local1, TimeStringHelper.HOURS_MINUTES_SECONDS_FORMAT);
    }
    if (__s86local9 > 0) {
      if ((__s86local0 = __dep_class_MathBase.MathBase.ceil(__s86local10 / 60, 1)) >= 1) {
        __s86local9++;
      } else if (__s86local0 > 0) {
        return __s86local9 + __s86param1("generic_comma") + __s86local0.toString().substr(__s86local0.toString().indexOf(".") + 1) + " " + __s86param1("generic_hours");
      }
      return __s86local9 + " " + __s86param1(TimeStringHelper.multiOrShortTimeString("generic_hour", __s86local9, false));
    }
    if (__s86local10 > 0) {
      return __s86local10 + " " + __s86param1(TimeStringHelper.multiOrShortTimeString("generic_minute", __s86local10, false));
    } else if (__s86local11 > 0) {
      return __s86local11 + " " + __s86param1(TimeStringHelper.multiOrShortTimeString("generic_second", __s86local11, false));
    } else {
      return "";
    }
  };
  TimeStringHelper.getPrimeTimeToString = function (__s102param0, __s102param1) {
    if (__s102param0 <= 0) {
      return "-";
    }
    var __s102local0 = __dep_exact_6fa490d8c1ec56fc.int(__s102param0);
    var __s102local1 = __dep_exact_6fa490d8c1ec56fc.int(__s102local0 / 60);
    var __s102local2 = "";
    __s102local0 -= __s102local1 * 60;
    return __s102local2 += __s102local1 > 0 ? __s102local1 + " " + __s102param1(TimeStringHelper.multiOrShortTimeString("generic_minute", __s102local1, false)) : __s102local0 + " " + __s102param1(TimeStringHelper.multiOrShortTimeString("generic_second", __s102local0, false));
  };
  TimeStringHelper.getTextIdFormattedTimeString = function (__s105param0, __s105param1, __s105param2, __s105param3) {
    var __s105local0 = Math.floor(__s105param0 / 86400);
    var __s105local1 = __dep_exact_6fa490d8c1ec56fc.int(__s105param0 / 60 % 60);
    var __s105local2 = __dep_exact_6fa490d8c1ec56fc.int(__s105param0 / 3600 % 24);
    if (__s105local0 == 0) {
      return __s105param3(__s105param2, [__s105local2, __s105local1]);
    } else {
      return __s105param3(__s105param1, [__s105local0, __s105local2, __s105local1]);
    }
  };
  TimeStringHelper.TWO_TIME_FORMAT = "nonMiliSec";
  TimeStringHelper.DATE_DAY_FORMAT = "dateDay";
  TimeStringHelper.DATE_DAY_FORMAT_WITHOUT_YEAR = "dateDayWithoutYear";
  TimeStringHelper.DATE_SHORT_DAY_FORMAT = "shortDay";
  TimeStringHelper.DATE_TIMEOCLOCK_FORMAT = "dateTimeOclock";
  TimeStringHelper.DATE_TIMEOCLOCK_FORMAT_ADVANCED = "dateTimeOclockAdvanced";
  TimeStringHelper.ONE_TIME_FORMAT = "onetime";
  TimeStringHelper.ONE_TIME_FORMAT_ADVANCED = "onetimeAdvanced";
  TimeStringHelper.ONE_TIME_HOURS_FORMAT = "onetimehour";
  TimeStringHelper.HOURS_MINUTES_SECONDS_FORMAT = "hoursMinutesSeconds";
  return TimeStringHelper;
}();
exports.TimeStringHelper = __s0local0;
