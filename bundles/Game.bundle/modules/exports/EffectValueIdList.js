Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function () {
  function EffectValueIdList() {
    this.idList = [];
  }
  EffectValueIdList.prototype.parseFromValueString = function (__s5param0) {
    this.idList = [];
    var __s5local0 = __s5param0.split("#");
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          this.idList.push(parseInt(__s5local3));
        }
      }
    }
    return this;
  };
  EffectValueIdList.prototype.parseFromValueArray = function (__s11param0) {
    this.idList = [];
    if (__s11param0 != null) {
      for (var __s11local0 = 0, __s11local1 = __s11param0; __s11local0 < __s11local1.length; __s11local0++) {
        var __s11local2 = __s11local1[__s11local0];
        if (__s11local2 !== undefined) {
          this.idList.push(__s11local2);
        }
      }
    }
    return this;
  };
  EffectValueIdList.prototype.add = function (__s17param0, __s17param1) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s17param0, "EffectValueIdList")) {
      for (var __s17local0 = 0, __s17local1 = __s17param0.rawValues; __s17local0 < __s17local1.length; __s17local0++) {
        var __s17local2 = __s17local1[__s17local0];
        if (__s17local2 !== undefined) {
          this.idList.push(__s17local2);
        }
      }
    }
    return this;
  };
  Object.defineProperty(EffectValueIdList.prototype, "textReplacements", {
    get: function () {
      return this.idList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueIdList.prototype, "rawValues", {
    get: function () {
      return this.idList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueIdList.prototype, "strength", {
    get: function () {
      return this.idList[0];
    },
    enumerable: true,
    configurable: true
  });
  EffectValueIdList.prototype.clone = function () {
    return new EffectValueIdList().parseFromValueArray(this.rawValues);
  };
  EffectValueIdList.prototype.hasID = function (__s31param0) {
    return this.idList.indexOf(__s31param0) > -1;
  };
  EffectValueIdList.prototype.getContextTextReplacements = function (__s33param0) {
    return this.textReplacements;
  };
  return EffectValueIdList;
}();
exports.EffectValueIdList = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEffectValue");
