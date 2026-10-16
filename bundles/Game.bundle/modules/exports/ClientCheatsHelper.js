Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ClientCheatsHelper() {}
  ClientCheatsHelper.performCommand = function (__s5param0) {
    ClientCheatsHelper.cheatObject ||= new __dep_export_ClientCheats.ClientCheats();
    for (var __s5local0 = 0; __s5local0 < __s5param0.length && ClientCheatsHelper.notAlpha(__s5param0.charCodeAt(__s5local0));) {
      __s5local0++;
    }
    var __s5local1 = __dep_exact_f855840627e6e145.int(__s5param0.indexOf(" ", __s5local0));
    if (__s5local1 < 0) {
      __s5local1 = __dep_exact_f855840627e6e145.int(__s5param0.length);
    }
    var __s5local2 = __s5param0.substring(__s5local0, __s5local1);
    var __s5local3 = __s5param0.substr(__s5local1 + 1).split(" ");
    var __s5local4 = [];
    var __s5local5 = ClientCheatsHelper.cheatObject[__s5local2];
    if (__s5local5 && typeof __s5local5 == "function") {
      for (var __s5local6 = 0; __s5local6 < __s5local5.length; __s5local6++) {
        var __s5local7 = __s5local3[__s5local6];
        if (__s5local7) {
          __s5local4[__s5local6] = ClientCheatsHelper.parseValue(__s5local7);
        }
      }
      __s5local5.apply(ClientCheatsHelper.cheatObject, __s5local4);
    } else {
      if (__s5param0.charAt(0) != "/") {
        __s5param0 = "/" + __s5param0;
      }
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBugReportVO.C2SBugReportVO(__s5param0));
    }
  };
  ClientCheatsHelper.parseValue = function (__s16param0) {
    if (__s16param0.match(/true|false/)) {
      return __s16param0 == "true";
    }
    if (__s16param0.match(/["'].*["']/)) {
      return __s16param0 = __s16param0.replace(/["']/g, "");
    }
    if (__s16param0.match(/(.*,+.*)|(\[.*])/)) {
      for (var __s16local0 = (__s16param0 = __s16param0.replace(/\[|]/g, "")).split(","), __s16local1 = [], __s16local2 = 0; __s16local2 < __s16local0.length; __s16local2++) {
        __s16local1[__s16local2] = ClientCheatsHelper.parseValue(__s16local0[__s16local2]);
      }
      return __s16local1;
    }
    var __s16local3 = parseFloat(__s16param0);
    return __s16local3 || __s16param0;
  };
  ClientCheatsHelper.notAlpha = function (__s23param0) {
    return __s23param0 > 122 || __s23param0 < 65 || __s23param0 > 90 && __s23param0 < 97;
  };
  return ClientCheatsHelper;
}();
exports.ClientCheatsHelper = __s0local0;
var __dep_export_ClientCheats = require("gge-module:export_ClientCheats");
var __dep_export_C2SBugReportVO = require("gge-module:export_C2SBugReportVO");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
