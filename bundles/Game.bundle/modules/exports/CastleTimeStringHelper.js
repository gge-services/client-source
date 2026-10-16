Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_4 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __s0local0 = function (__s1param0) {
  function CastleTimeStringHelper() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTimeStringHelper, __s1param0);
  CastleTimeStringHelper.getShortTimeString = function (__s5param0) {
    CastleTimeStringHelper.shortTimeFormatter ||= new __dep_exact_92d05af59ee2ff30.CascadeDurationFormat("{minutes:02}:{seconds:02}", null, null, "{hours:02}:{minutes:02}:{seconds:02}");
    return CastleTimeStringHelper.shortTimeFormatter.apply(__s5param0);
  };
  CastleTimeStringHelper.getFullTimeString = function (__s7param0) {
    var __s7local0 = __dep_exact_f855840627e6e145.int(__s7param0 * 1000);
    var __s7local1 = __dep_exact_f855840627e6e145.int(__s7local0 / 1000);
    var __s7local2 = __dep_exact_f855840627e6e145.int(__s7local1 / 60);
    var __s7local3 = __dep_exact_f855840627e6e145.int(__s7local2 / 60);
    var __s7local4 = __dep_exact_f855840627e6e145.int(__s7local3 / 24);
    var __s7local5 = __dep_exact_f855840627e6e145.int(__s7local4 / 30);
    __s7local0 -= __s7local1 * 1000;
    __s7local1 -= __dep_exact_f855840627e6e145.int(__s7local2 * 60);
    __s7local2 -= __dep_exact_f855840627e6e145.int(__s7local3 * 60);
    __s7local3 -= __dep_exact_f855840627e6e145.int(__s7local4 * 24);
    for (var __s7local6 = [__s7local5, __s7local4 -= __dep_exact_f855840627e6e145.int(__s7local5 * 30), __s7local3, __s7local2, __s7local1], __s7local7 = "", __s7local8 = 0; __s7local8 < __s7local6.length; __s7local8++) {
      var __s7local9 = __dep_exact_f855840627e6e145.int(__s7local6[__s7local8]);
      if (__s7local9 > 0) {
        var __s7local10 = CastleTimeStringHelper.TIME_TEXT_IDS[__s7local8] + (__s7local9 > 1 ? "s" : "");
        var __s7local11 = __dep_exact_92d05af59ee2ff30_2.Localize.text(__s7local10);
        var __s7local12 = __dep_exact_92d05af59ee2ff30_2.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_SIMPLE_COMP, [__s7local9, new __dep_exact_92d05af59ee2ff30_4.TextVO(__s7local11)]);
        __s7local7 = __s7local7 == "" ? __s7local12 : __dep_exact_92d05af59ee2ff30_2.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_SIMPLE_COMP, [__s7local7, __s7local12]);
      }
    }
    return __s7local7;
  };
  CastleTimeStringHelper.getCantAttackTimeString = function (__s12param0) {
    return CastleTimeStringHelper.getEventTimeString(__s12param0);
  };
  CastleTimeStringHelper.getEventTimeString = function (__s14param0, __s14param1 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstTime.ClientConstTime.SECONDS_PER_DAY), __s14param2 = 2) {
    if (__s14param0 >= __s14param1) {
      var __s14local0 = __s14param0 * 1000;
      var __s14local1 = __dep_exact_f855840627e6e145.int(__s14local0 / 1000);
      var __s14local2 = __dep_exact_f855840627e6e145.int(__s14local1 / 60);
      var __s14local3 = __dep_exact_f855840627e6e145.int(__s14local2 / 60);
      var __s14local4 = __dep_exact_f855840627e6e145.int(__s14local3 / 24);
      __dep_exact_f855840627e6e145.int(__s14local4 / 30);
      __s14local0 -= __s14local1 * 1000;
      __s14local1 -= __dep_exact_f855840627e6e145.int(__s14local2 * 60);
      __s14local2 -= __dep_exact_f855840627e6e145.int(__s14local3 * 60);
      __s14local3 -= __dep_exact_f855840627e6e145.int(__s14local4 * 24);
      var __s14local5 = __dep_exact_9e901e8e2483a22f_2.MathBase.round(__s14local3 / 24, 1) + __s14local4;
      var __s14local6 = "generic_day" + ((__s14local5 = __dep_exact_9e901e8e2483a22f_2.MathBase.floor(__s14local5, __s14param2)) != 1 ? "s" : "");
      return __dep_exact_92d05af59ee2ff30_2.Localize.number(__s14local5) + " " + __dep_exact_92d05af59ee2ff30_2.Localize.text(__s14local6);
    }
    return CastleTimeStringHelper.getShortTimeString(__s14param0);
  };
  CastleTimeStringHelper.getLongEventTimeString = function (__s17param0) {
    var __s17local0 = __s17param0 * 1000;
    var __s17local1 = __dep_exact_f855840627e6e145.int(__s17local0 / 1000);
    var __s17local2 = __dep_exact_f855840627e6e145.int(__s17local1 / 60);
    var __s17local3 = __dep_exact_f855840627e6e145.int(__s17local2 / 60);
    var __s17local4 = __dep_exact_f855840627e6e145.int(__s17local3 / 24);
    __dep_exact_f855840627e6e145.int(__s17local4 / 30);
    __s17local0 -= __s17local1 * 1000;
    __s17local1 -= __dep_exact_f855840627e6e145.int(__s17local2 * 60);
    __s17local2 -= __dep_exact_f855840627e6e145.int(__s17local3 * 60);
    __s17local3 -= __dep_exact_f855840627e6e145.int(__s17local4 * 24);
    if (__s17local4 >= 1) {
      var __s17local5 = __dep_exact_9e901e8e2483a22f_2.MathBase.round(__s17local3 / 24, 1) + __s17local4;
      var __s17local6 = "generic_day" + ((__s17local5 = __dep_exact_9e901e8e2483a22f_2.MathBase.floor(__s17local5, 1)) != 1 ? "s" : "");
      var __s17local7 = __dep_exact_9e901e8e2483a22f_2.MathBase.floor(__s17local3 / 24, 1);
      return __s17local4 + __dep_exact_92d05af59ee2ff30_2.Localize.text("generic_comma") + __s17local7.toString().substr(__s17local7.toString().indexOf(".") + 1) + " " + __dep_exact_92d05af59ee2ff30_2.Localize.text(__s17local6);
    }
    if (__s17local3 >= 1 || __s17local2 >= 1) {
      return __dep_exact_9e901e8e2483a22f_3.TimeStringHelper.getTimeToString(__s17param0, __dep_exact_9e901e8e2483a22f_3.TimeStringHelper.ONE_TIME_FORMAT_ADVANCED, __dep_exact_92d05af59ee2ff30_2.Localize.text, false, false, false, true);
    } else {
      return __dep_exact_9e901e8e2483a22f_3.TimeStringHelper.getTimeToString(__s17param0, __dep_exact_9e901e8e2483a22f_3.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30_2.Localize.text);
    }
  };
  CastleTimeStringHelper.getEventToolTipString = function (__s22param0) {
    var __s22local0 = __s22param0 * 1000;
    var __s22local1 = __dep_exact_f855840627e6e145.int(__s22local0 / 1000);
    var __s22local2 = __dep_exact_f855840627e6e145.int(__s22local1 / 60);
    var __s22local3 = __dep_exact_f855840627e6e145.int(__s22local2 / 60);
    var __s22local4 = __dep_exact_f855840627e6e145.int(__s22local3 / 24);
    var __s22local5 = __dep_exact_f855840627e6e145.int(__s22local4 / 30);
    __s22local0 -= __s22local1 * 1000;
    __s22local1 -= __dep_exact_f855840627e6e145.int(__s22local2 * 60);
    __s22local2 -= __dep_exact_f855840627e6e145.int(__s22local3 * 60);
    __s22local3 -= __dep_exact_f855840627e6e145.int(__s22local4 * 24);
    if ((__s22local4 -= __dep_exact_f855840627e6e145.int(__s22local5 * 30)) >= 1) {
      return __dep_exact_92d05af59ee2ff30_2.Localize.text("resttime") + "\n" + __dep_exact_9e901e8e2483a22f_3.TimeStringHelper.getShortTimeStringBySeconds(__s22param0);
    } else {
      return "resttime";
    }
  };
  CastleTimeStringHelper.getHoursOrDaysTooltip = function (__s26param0, __s26param1, __s26param2) {
    var __s26local0 = __s26param0 * 1000;
    var __s26local1 = __dep_exact_f855840627e6e145.int(__s26local0 / 1000);
    var __s26local2 = __dep_exact_f855840627e6e145.int(__s26local1 / 60);
    var __s26local3 = __dep_exact_f855840627e6e145.int(__s26local2 / 60);
    var __s26local4 = __dep_exact_f855840627e6e145.int(__s26local3 / 24);
    __dep_exact_f855840627e6e145.int(__s26local4 / 30);
    __s26local0 -= __s26local1 * 1000;
    __s26local1 -= __dep_exact_f855840627e6e145.int(__s26local2 * 60);
    __s26local2 -= __dep_exact_f855840627e6e145.int(__s26local3 * 60);
    __s26local3 -= __dep_exact_f855840627e6e145.int(__s26local4 * 24);
    var __s26local5 = 0;
    var __s26local6 = "";
    if (__s26local4 >= 1) {
      __s26local5 = __dep_exact_9e901e8e2483a22f_2.MathBase.round(__s26local3 / 24, 1) + __s26local4;
      __s26local5 = __dep_exact_9e901e8e2483a22f_2.MathBase.floor(__s26local5, 2);
      __s26local6 = __s26param2;
    } else {
      __s26local5 = __dep_exact_9e901e8e2483a22f_2.MathBase.round(__s26local2 / 60, 1) + __s26local3;
      __s26local5 = __dep_exact_9e901e8e2483a22f_2.MathBase.floor(__s26local5, 2);
      __s26local6 = __s26param1;
    }
    return {
      t: __s26local6,
      p: [new __dep_exact_92d05af59ee2ff30_3.LocalizedNumberVO(__s26local5)]
    };
  };
  CastleTimeStringHelper.setEventTime = function (__s30param0, __s30param1, __s30param2 = null, __s30param3 = null, __s30param4 = false) {
    var __s30local0 = CastleTimeStringHelper.getEventTimeString(__s30param1, __dep_export_ClientConstTime.ClientConstTime.SECONDS_PER_DAY, 1);
    if (__s30param4) {
      __s30local0 = __dep_exact_92d05af59ee2ff30_2.Localize.digitalClock(__s30local0);
    }
    var __s30local1 = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s30param0, new __dep_exact_92d05af59ee2ff30_4.TextVO(__s30local0), __s30param3);
    if (__s30param2) {
      __s30local1.textAlign = __s30param2;
    }
  };
  CastleTimeStringHelper.setEventTimeToolTip = function (__s34param0, __s34param1) {
    __s34param0.mouseChildren = false;
    __s34param0.toolTipText = CastleTimeStringHelper.getEventToolTipString(__s34param1);
  };
  CastleTimeStringHelper.getDateStringFromDate = function (__s36param0) {
    return __dep_exact_92d05af59ee2ff30_2.Localize.datetime(__s36param0, __dep_exact_92d05af59ee2ff30_1.DateTimeStyle.SHORT, __dep_exact_92d05af59ee2ff30_1.DateTimeStyle.NONE);
  };
  CastleTimeStringHelper.__initialize_static_members = function () {
    CastleTimeStringHelper.TIME_TEXT_IDS = [__dep_exact_9e901e8e2483a22f.GenericTextIds.COMMON_MONTH, __dep_exact_9e901e8e2483a22f.GenericTextIds.COMMON_DAY, __dep_exact_9e901e8e2483a22f.GenericTextIds.COMMON_HOUR, __dep_exact_9e901e8e2483a22f.GenericTextIds.COMMON_MINUTE, __dep_exact_9e901e8e2483a22f.GenericTextIds.COMMON_SECOND];
  };
  return CastleTimeStringHelper;
}(__dep_exact_92d05af59ee2ff30_2.Localize);
exports.CastleTimeStringHelper = __s0local0;
__s0local0.__initialize_static_members();
