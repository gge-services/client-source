var __s0local0;
var __s0local1;
var __s0local2;
__s0local1 = [require("gge-module:opaque_5c61709ecb7732e44481babe"), require("gge-module:class_Globalize"), require("gge-module:opaque_b65804600291f9b6b8e6457f"), require("gge-module:class_MakePlural")];
if ((__s0local2 = typeof (__s0local0 = function (__s1param0, __s1param1) {
  var __s1local0 = __s1param1._formatMessage;
  var __s1local1 = __s1param1._runtimeBind;
  var __s1local2 = __s1param1._validateParameterPresence;
  var __s1local3 = __s1param1._validateParameterTypePlainObject;
  var __s1local4 = __s1param1._validateParameterTypeNumber;
  var __s1local5 = __s1param1._validateParameterTypeString;
  var __s1local6 = ["acceleration", "angle", "area", "digital", "duration", "length", "mass", "power", "pressure", "speed", "temperature", "volume"];
  function __s1local7(__s3param0, __s3param1, __s3param2) {
    var __s3local0;
    __s3param0 = __s3param0.replace(/\//, "-per-");
    [""].concat(__s1local6).some(function (__s5param0) {
      return __s3local0 = __s3param2.main(["units", __s3param1, __s5param0.length ? __s5param0 + "-" + __s3param0 : __s3param0]);
    });
    if ((__s3local0 = function stripPluralGarbage(__s7param0) {
      var __s7local0;
      var __s7local1;
      if (__s7param0) {
        __s7local0 = {};
        for (__s7local1 in __s7param0) {
          __s7local0[__s7local1.replace(/unitPattern-count-/, "")] = __s7param0[__s7local1];
        }
      }
      return __s7local0;
    }(__s3local0)) || !/-per-/.test(__s3param0) || (__s3param0 = __s3param0.split("-per-"), (__s3local0 = __s3param0.map(function (__s12param0) {
      return __s1local7(__s12param0, __s3param1, __s3param2);
    }))[0] && __s3local0[1])) {
      return __s3local0;
    }
  }
  var __s1local8 = __s1local7;
  __s1param1.formatUnit = __s1param1.prototype.formatUnit = function (__s15param0, __s15param1, __s15param2) {
    __s1local2(__s15param0, "value");
    __s1local4(__s15param0, "value");
    return this.unitFormatter(__s15param1, __s15param2)(__s15param0);
  };
  __s1param1.unitFormatter = __s1param1.prototype.unitFormatter = function (__s17param0, __s17param1) {
    var __s17local0;
    var __s17local1;
    var __s17local2;
    var __s17local3;
    var __s17local4;
    __s1local2(__s17param0, "unit");
    __s1local5(__s17param0, "unit");
    __s1local3(__s17param1, "options");
    __s17local0 = [__s17param0, __s17param1 = __s17param1 || {}];
    __s17local4 = function (__s19param0, __s19param1, __s19param2) {
      var __s19local0;
      var __s19local1;
      __s19local0 = __s19param2.main(["units", __s19param1, "per/compoundUnitPattern"]);
      __s19local1 = __s1local8(__s19param0, __s19param1, __s19param2);
      return {
        compoundUnitPattern: __s19local0,
        unitProperties: __s19local1
      };
    }(__s17param0, __s17param1.form || "long", this.cldr);
    __s17local3 = function (__s21param0, __s21param1, __s21param2) {
      return function unitFormatter(__s23param0) {
        __s1local2(__s23param0, "value");
        __s1local4(__s23param0, "value");
        return function (__s25param0, __s25param1, __s25param2, __s25param3) {
          var __s25local0;
          var __s25local1;
          var __s25local2;
          var __s25local3;
          var __s25local4;
          var __s25local5;
          var __s25local6;
          var __s25local7;
          var __s25local8 = __s25param3.compoundUnitPattern;
          __s25param3 = __s25param3.unitProperties;
          __s25local2 = __s25param1(__s25param0);
          __s25local6 = __s25param2(__s25param0);
          if (__s25param3 instanceof Array) {
            __s25local1 = __s25param3[0];
            __s25local4 = __s25param3[1];
            __s25local7 = __s25local4.hasOwnProperty("one") ? "one" : "other";
            __s25local0 = __s1local0(__s25local1[__s25local6], [__s25local2]);
            __s25local3 = __s1local0(__s25local4[__s25local7], [""]).trim();
            return __s1local0(__s25local8, [__s25local0, __s25local3]);
          } else {
            __s25local5 = __s25param3[__s25local6];
            return __s1local0(__s25local5, [__s25local2]);
          }
        }(__s23param0, __s21param0, __s21param1, __s21param2);
      };
    }(__s17local1 = __s17param1.numberFormatter || this.numberFormatter(), __s17local2 = this.pluralGenerator(), __s17local4);
    __s1local1(__s17local0, this.cldr, __s17local3, [__s17local1, __s17local2, __s17local4]);
    return __s17local3;
  };
  return __s1param1;
}) == "function" ? __s0local0.apply(exports, __s0local1) : __s0local0) !== undefined) {
  module.exports = __s0local2;
}
