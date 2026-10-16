var __s0local0;
var __s0local1;
var __s0local2;
__s0local1 = [require("gge-module:opaque_5c61709ecb7732e44481babe"), require("gge-module:class_Globalize"), require("gge-module:opaque_b65804600291f9b6b8e6457f"), require("gge-module:class_MakePlural"), require("gge-module:exact_f70a9f50ff0ced05"), require("gge-module:exact_2eb0a95d73d217d1")];
if ((__s0local2 = typeof (__s0local0 = function (__s1param0, __s1param1) {
  var __s1local0 = __s1param1._formatMessage;
  var __s1local1 = __s1param1._runtimeBind;
  var __s1local2 = __s1param1._validateCldr;
  var __s1local3 = __s1param1._validateDefaultLocale;
  var __s1local4 = __s1param1._validateParameterPresence;
  var __s1local5 = __s1param1._validateParameterTypeString;
  var __s1local6 = __s1param1._validateParameterTypeNumber;
  __s1param1.formatRelativeTime = __s1param1.prototype.formatRelativeTime = function (__s3param0, __s3param1, __s3param2) {
    __s1local4(__s3param0, "value");
    __s1local6(__s3param0, "value");
    return this.relativeTimeFormatter(__s3param1, __s3param2)(__s3param0);
  };
  __s1param1.relativeTimeFormatter = __s1param1.prototype.relativeTimeFormatter = function (__s5param0, __s5param1) {
    var __s5local0;
    var __s5local1;
    var __s5local2;
    var __s5local3;
    var __s5local4;
    var __s5local5;
    __s1local4(__s5param0, "unit");
    __s1local5(__s5param0, "unit");
    __s5local1 = this.cldr;
    __s5local0 = [__s5param0, __s5param1 = __s5param1 || {}];
    __s1local3(__s5local1);
    __s5local1.on("get", __s1local2);
    try {
      __s5local4 = function (__s8param0, __s8param1, __s8param2) {
        var __s8local0;
        var __s8local1;
        var __s8local2;
        var __s8local3 = __s8param2.form;
        if (__s8local3) {
          __s8param0 = __s8param0 + "-" + __s8local3;
        }
        __s8local0 = __s8param1.main(["dates", "fields", __s8param0]);
        __s8local1 = {
          "relativeTime-type-future": __s8local0["relativeTime-type-future"],
          "relativeTime-type-past": __s8local0["relativeTime-type-past"]
        };
        for (__s8local2 in __s8local0) {
          if (__s8local0.hasOwnProperty(__s8local2) && /relative-type-(-?[0-9]+)/.exec(__s8local2)) {
            __s8local1[__s8local2] = __s8local0[__s8local2];
          }
        }
        return __s8local1;
      }(__s5param0, __s5local1, __s5param1);
    } finally {
      __s5local1.off("get", __s1local2);
    }
    __s5local5 = function (__s15param0, __s15param1, __s15param2) {
      return function relativeTimeFormatter(__s17param0) {
        __s1local4(__s17param0, "value");
        __s1local6(__s17param0, "value");
        return function (__s19param0, __s19param1, __s19param2, __s19param3) {
          var __s19local0;
          var __s19local1 = __s19param3["relative-type-" + __s19param0];
          return __s19local1 || (__s19local0 = __s19param0 <= 0 ? __s19param3["relativeTime-type-past"] : __s19param3["relativeTime-type-future"], __s19param0 = Math.abs(__s19param0), __s19local1 = __s19local0["relativeTimePattern-count-" + __s19param2(__s19param0)], __s1local0(__s19local1, [__s19param1(__s19param0)]));
        }(__s17param0, __s15param0, __s15param1, __s15param2);
      };
    }(__s5local2 = this.numberFormatter(__s5param1), __s5local3 = this.pluralGenerator(), __s5local4);
    __s1local1(__s5local0, __s5local1, __s5local5, [__s5local2, __s5local3, __s5local4]);
    return __s5local5;
  };
  return __s1param1;
}) == "function" ? __s0local0.apply(exports, __s0local1) : __s0local0) !== undefined) {
  module.exports = __s0local2;
}
