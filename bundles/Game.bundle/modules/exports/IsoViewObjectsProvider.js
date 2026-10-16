Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function IsoViewObjectsProvider(__s3param0) {
    this._objects = __s3param0;
  }
  IsoViewObjectsProvider.prototype.getObjectsByGroupType = function (__s5param0 = null) {
    if (__s5param0) {
      var __s5local0 = this.objects.getGroupByType(__s5param0);
      if (!__s5local0) {
        return [];
      }
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5local0, "AIsoViewObjectGroupSimpleList")) {
        return __s5local0.list;
      }
      var __s5local1 = [];
      __s5local0.fillInCompleteList(__s5local1);
      return __s5local1;
    }
    return this.objects.getCompleteObjectsList();
  };
  IsoViewObjectsProvider.prototype.getObjectByVO = function (__s10param0) {
    if (!__s10param0) {
      return null;
    }
    for (var __s10local0 = 0, __s10local1 = this.getObjectsByGroupType(); __s10local0 < __s10local1.length; __s10local0++) {
      var __s10local2 = __s10local1[__s10local0];
      if (__s10local2 && __s10local2.vo == __s10param0) {
        return __s10local2;
      }
    }
    return null;
  };
  IsoViewObjectsProvider.prototype.getObjectById = function (__s16param0) {
    if (__s16param0 < 0) {
      return null;
    }
    for (var __s16local0 = 0, __s16local1 = this.getObjectsByGroupType(); __s16local0 < __s16local1.length; __s16local0++) {
      var __s16local2 = __s16local1[__s16local0];
      if (__s16local2 && __s16local2.vo && __s16local2.vo.objectId == __s16param0) {
        return __s16local2;
      }
    }
    return null;
  };
  IsoViewObjectsProvider.prototype.getObjectByClass = function (__s22param0) {
    for (var __s22local0 = 0, __s22local1 = this.getObjectsByGroupType(); __s22local0 < __s22local1.length; __s22local0++) {
      var __s22local2 = __s22local1[__s22local0];
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s22local2, __dep_exact_81dacdf05bd32292.getQualifiedClassName(__s22param0))) {
        return __s22local2;
      }
    }
    return null;
  };
  IsoViewObjectsProvider.prototype.getObjectByType = function (__s27param0) {
    for (var __s27local0 = 0, __s27local1 = this.objects.getCompleteObjectsList(); __s27local0 < __s27local1.length; __s27local0++) {
      var __s27local2 = __s27local1[__s27local0];
      if (__s27local2.vo && __s27local2.vo.objectType == __s27param0) {
        return __s27local2;
      }
    }
    return null;
  };
  Object.defineProperty(IsoViewObjectsProvider.prototype, "objects", {
    get: function () {
      return this._objects;
    },
    enumerable: true,
    configurable: true
  });
  return IsoViewObjectsProvider;
}();
exports.IsoViewObjectsProvider = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
