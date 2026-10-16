Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleSplitRunData(__s3param0) {
    this._abTests = new Map();
    this.player = __s3param0;
  }
  CastleSplitRunData.prototype.getIntParam = function (__s5param0, __s5param1) {
    var __s5local0 = this.getParam(__s5param0);
    if (__s5local0 != null) {
      if (typeof __s5local0 == "number") {
        return __dep_exact_f855840627e6e145.int(__s5local0);
      }
      if (typeof __s5local0 == "string") {
        return parseInt(__s5local0);
      }
    }
    return __s5param1;
  };
  CastleSplitRunData.prototype.getBooleanParam = function (__s10param0, __s10param1 = false) {
    var __s10local0 = this.getParam(__s10param0);
    if (__s10local0 != null) {
      if (typeof __s10local0 == "number") {
        return __s10local0 == 1;
      }
      if (typeof __s10local0 == "boolean") {
        return __s10local0;
      }
    }
    return __s10param1;
  };
  CastleSplitRunData.prototype.getParam = function (__s15param0) {
    if (this._abTests.has(__s15param0)) {
      return this._abTests.get(__s15param0);
    } else {
      return null;
    }
  };
  CastleSplitRunData.prototype.parse_ATL = function (__s19param0) {
    if (__s19param0) {
      var __s19local0;
      var __s19local1;
      this._abTests = new Map();
      for (__s19local0 in __s19param0) {
        var __s19local2 = __s19param0[__s19local0];
        for (__s19local1 in __s19local2) {
          if (this._abTests.hasOwnProperty(__s19local1)) {
            __dep_export_DebugError.DebugError.handle(new Error("Received double parameter! " + __s19local1));
          }
          this._abTests.set(__s19local1, __s19local2[__s19local1]);
        }
      }
      this.abTestDataArrived();
    }
  };
  CastleSplitRunData.prototype.retrieveTestCaseInfos = function () {};
  CastleSplitRunData.prototype.abTestDataArrived = function () {};
  return CastleSplitRunData;
}();
exports.CastleSplitRunData = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_DebugError = require("gge-module:export_DebugError");
