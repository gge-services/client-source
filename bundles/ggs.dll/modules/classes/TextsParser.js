Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_TimeUtils = require("gge-module:export_TimeUtils");
var __s0local0 = function () {
  function TextsParser() {}
  TextsParser.jsonToMap = function (__s5param0, __s5param1) {
    var __s5local0 = new Map();
    if (__s5param0) {
      for (var __s5local1 in __s5param0) {
        if (__s5param0.hasOwnProperty(__s5local1)) {
          var __s5local2 = __s5param0[__s5local1];
          for (var __s5local3 in __s5local2) {
            if (__s5local2.hasOwnProperty(__s5local3)) {
              var __s5local4 = __s5param1 ? __s5local3 : __s5local3.toLowerCase();
              var __s5local5 = TextsParser.formatText(__s5local2[__s5local3]);
              __s5local0.set(__s5local4, __s5local5);
            }
          }
        }
      }
    }
    return __s5local0;
  };
  TextsParser.parseVersionNo = function (__s14param0) {
    var __s14local0;
    var __s14local1 = __s14param0["@metadata"];
    if (__s14local1) {
      __s14local0 = __s14local1.versionNo;
    }
    return __s14local0;
  };
  TextsParser.parseDeployTime = function (__s17param0) {
    var __s17local0;
    var __s17local1 = __s17param0["@metadata"];
    if (__s17local1) {
      var __s17local2 = __s17local1.deployTime;
      __s17local0 = __dep_export_TimeUtils.TimeUtils.unixToHumanTime(parseInt(__s17local2));
    }
    return __s17local0;
  };
  TextsParser.parseBranch = function (__s20param0) {
    var __s20local0;
    var __s20local1 = __s20param0["@metadata"];
    if (__s20local1) {
      __s20local0 = __s20local1.branch;
    }
    return __s20local0;
  };
  TextsParser.formatText = function (__s23param0) {
    return __s23param0 = (__s23param0 = __s23param0.replace(TextsParser.REGEXP_AMP, "&")).replace(TextsParser.REGEXP_NEWLINES, "\n");
  };
  TextsParser.REGEXP_NEWLINES = /\\n/g;
  TextsParser.REGEXP_AMP = /&amp;/g;
  return TextsParser;
}();
exports.TextsParser = __s0local0;
