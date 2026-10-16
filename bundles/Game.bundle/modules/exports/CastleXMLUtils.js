Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function () {
  function CastleXMLUtils() {}
  CastleXMLUtils.getIntArrayFromString = function (__s5param0, __s5param1) {
    for (var __s5local0 = __s5param0.split(__s5param1), __s5local1 = new Array(), __s5local2 = 0; __s5local2 < __s5local0.length; ++__s5local2) {
      if (__s5local0[__s5local2] != "") {
        __s5local1.push(parseInt(__s5local0[__s5local2]));
      }
    }
    return __s5local1;
  };
  CastleXMLUtils.getValueOrDefault = function (__s10param0, __s10param1, __s10param2, __s10param3 = false) {
    if (__s10param1.attribute === undefined) {
      if (__s10param1[__s10param0]) {
        return __s10param1[__s10param0];
      } else {
        return __s10param2;
      }
    }
    var __s10local0 = __s10param1.attribute(__s10param0);
    if (__s10local0) {
      return __s10local0;
    }
    if (__s10param3) {
      throw new Error("--> Error: Required XML-Entry \"" + __s10param0 + "\" is missing");
    }
    return __s10param2;
  };
  CastleXMLUtils.getStringAttribute = function (__s17param0, __s17param1, __s17param2 = "") {
    return CastleXMLUtils.getValueOrDefault(__s17param0, __s17param1, __s17param2);
  };
  CastleXMLUtils.getBooleanAttribute = function (__s19param0, __s19param1, __s19param2 = false) {
    return CastleXMLUtils.getValueOrDefault(__s19param0, __s19param1, String(__s19param2 ? 1 : 0)) != "0";
  };
  CastleXMLUtils.getIntAttribute = function (__s21param0, __s21param1, __s21param2 = 0) {
    return parseInt(CastleXMLUtils.getValueOrDefault(__s21param0, __s21param1, String(__s21param2)));
  };
  CastleXMLUtils.getNumberAttribute = function (__s23param0, __s23param1, __s23param2 = 0) {
    return parseFloat(CastleXMLUtils.getValueOrDefault(__s23param0, __s23param1, String(__s23param2)));
  };
  CastleXMLUtils.getUintAttribute = function (__s25param0, __s25param1, __s25param2 = 0) {
    return __dep_exact_f855840627e6e145.int(CastleXMLUtils.getValueOrDefault(__s25param0, __s25param1, String(__s25param2)));
  };
  CastleXMLUtils.createIntListFromAttribute = function (__s27param0, __s27param1, __s27param2 = ",") {
    return CastleXMLUtils.createIntListFromString(CastleXMLUtils.getValueOrDefault(__s27param0, __s27param1, ""), __s27param2);
  };
  CastleXMLUtils.createIntListFromString = function (__s29param0, __s29param1 = ",") {
    var __s29local0 = [];
    if (__s29param0 != "") {
      var __s29local1 = __s29param0.split(__s29param1);
      if (__s29local1 != null) {
        for (var __s29local2 = 0, __s29local3 = __s29local1; __s29local2 < __s29local3.length; __s29local2++) {
          var __s29local4 = __s29local3[__s29local2];
          if (__s29local4 !== undefined && __s29local4 != "") {
            __s29local0.push(parseInt(__s29local4));
          }
        }
      }
    }
    return __s29local0;
  };
  CastleXMLUtils.createDicFromXmlNode = function (__s36param0, __s36param1, __s36param2, __s36param3 = "id", __s36param4 = "parseXml") {
    var __s36local0 = new Map();
    for (var __s36local1 = 0, __s36local2 = __s36param0[__s36param1]; __s36local1 < __s36local2.length; __s36local1++) {
      var __s36local3 = __s36local2[__s36local1];
      var __s36local4 = new __s36param2();
      var __s36local5 = __s36local4[__s36param4];
      if (__s36local5) {
        __s36local5.apply(__s36local4, [__s36local3]);
      } else {
        __dep_exact_9e901e8e2483a22f.error("CastleXMLUtils.createDicFromXmlNode(): parseFunction '" + __s36param4 + "' does not exist.");
      }
      var __s36local6 = __s36local4[__s36param3];
      if (__s36local6 != null) {
        __s36local0.set(__s36local6, __s36local4);
      } else {
        __dep_exact_9e901e8e2483a22f.error("CastleXMLUtils.createDicFromXmlNode(): id '" + __s36param3 + "' does not exist.");
      }
    }
    return __s36local0;
  };
  return CastleXMLUtils;
}();
exports.CastleXMLUtils = __s0local0;
