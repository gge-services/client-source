Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_DynamicTopXVO = require("gge-module:export_DynamicTopXVO");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function (__s1param0) {
  function DynamicTopXxmlData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._zoneIdsToTopX = new Map();
    __s3local0.parseXml(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DynamicTopXxmlData, __s1param0);
  DynamicTopXxmlData.prototype.parseXml = function (__s5param0) {
    var __s5local0 = __s5param0.leaguetypeTopXSizes;
    if (__s5local0 != null) {
      var __s5local1 = undefined;
      for (var __s5local2 = 0, __s5local3 = __s5local0; __s5local2 < __s5local3.length; __s5local2++) {
        var __s5local4 = __s5local3[__s5local2];
        if (__s5local4 !== undefined) {
          var __s5local5 = parseInt(__s5local4.zoneID || "");
          var __s5local6 = parseInt(__s5local4.eventID || "");
          var __s5local7 = parseInt(__s5local4.leaguetypeID || "");
          var __s5local8 = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__s5local4.topXValue || [], ",");
          __s5local1 = new __dep_export_DynamicTopXVO.DynamicTopXVO(__s5local6, __s5local7, __s5local8);
          if (!this._zoneIdsToTopX.has(__s5local5)) {
            this._zoneIdsToTopX.set(__s5local5, []);
          }
          this._zoneIdsToTopX.get(__s5local5).push(__s5local1);
        }
      }
    }
  };
  DynamicTopXxmlData.prototype.getTopX = function (__s12param0, __s12param1, __s12param2) {
    if (!this._zoneIdsToTopX.has(__s12param0)) {
      return [];
    }
    var __s12local0 = this._zoneIdsToTopX.get(__s12param0);
    if (__s12local0) {
      var __s12local1 = undefined;
      for (var __s12local2 = 0; __s12local2 < __s12local0.length; __s12local2++) {
        if ((__s12local1 = __s12local0[__s12local2]).leagueTypeID == __s12param2 && __s12local1.eventId == __s12param1) {
          return __s12local1.topX;
        }
      }
    }
    return [];
  };
  return DynamicTopXxmlData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.DynamicTopXxmlData = __s0local0;
