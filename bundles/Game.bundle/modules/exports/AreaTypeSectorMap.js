Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function AreaTypeSectorMap(__s3param0) {
    this.markCounter = 0;
    this.map = __s3param0;
  }
  AreaTypeSectorMap.prototype.put = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4) {
    this.fillWith(AreaTypeSectorMap.BLOCKED_BY_DECO, __s5param1, __s5param2, __s5param3, __s5param4);
    this.map[__s5param2][__s5param1] = __s5param0;
  };
  AreaTypeSectorMap.prototype.getFreePositionsForElements = function (__s7param0, __s7param1) {
    this.markCounter++;
    var __s7local0 = [];
    for (var __s7local1 = 0; __s7local1 < __dep_exact_26a421b704832cff.WorldConst.SECTOR_HEIGHT; __s7local1++) {
      for (var __s7local2 = 0; __s7local2 < __dep_exact_26a421b704832cff.WorldConst.SECTOR_WIDTH; __s7local2++) {
        if (this.isFreeForElementAt(__s7local2, __s7local1, __s7param0, __s7param1)) {
          __s7local0.push(new __s0local0(__s7local2, __s7local1));
          this.fillWith(this.currentBlockedMarker, __s7local2, __s7local1, __s7param0, __s7param1);
        }
      }
    }
    return __s7local0;
  };
  AreaTypeSectorMap.prototype.getAsMap = function () {
    return this.map;
  };
  AreaTypeSectorMap.prototype.fillWith = function (__s16param0, __s16param1, __s16param2, __s16param3, __s16param4) {
    for (var __s16local0 = 0; __s16local0 < __s16param4; __s16local0++) {
      for (var __s16local1 = 0; __s16local1 < __s16param3; __s16local1++) {
        if (!(__s16param2 + __s16local0 > __dep_exact_26a421b704832cff.WorldConst.SECTOR_HEIGHT) && !(__s16param1 + __s16local1 > __dep_exact_26a421b704832cff.WorldConst.SECTOR_WIDTH)) {
          this.map[__s16param2 + __s16local0][__s16param1 + __s16local1] = __s16param0;
        }
      }
    }
  };
  AreaTypeSectorMap.prototype.isFreeForElementAt = function (__s23param0, __s23param1, __s23param2, __s23param3) {
    if (__s23param0 < 0 || __s23param1 < 0 || __s23param0 + __s23param2 > __dep_exact_26a421b704832cff.WorldConst.SECTOR_WIDTH || __s23param1 + __s23param3 > __dep_exact_26a421b704832cff.WorldConst.SECTOR_HEIGHT) {
      return false;
    }
    for (var __s23local0 = 0; __s23local0 < __s23param3; __s23local0++) {
      for (var __s23local1 = 0; __s23local1 < __s23param2; __s23local1++) {
        var __s23local2 = __dep_exact_f855840627e6e145.int(this.map[__s23param1 + __s23local0][__s23param0 + __s23local1]);
        if (!this.isInterpretedAsFree(__s23local2)) {
          return false;
        }
      }
    }
    return true;
  };
  AreaTypeSectorMap.prototype.isInterpretedAsFree = function (__s31param0) {
    return __s31param0 == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_EMPTY || __s31param0 > AreaTypeSectorMap.BLOCKED_BY_DECO && __s31param0 < this.currentBlockedMarker;
  };
  Object.defineProperty(AreaTypeSectorMap.prototype, "currentBlockedMarker", {
    get: function () {
      return AreaTypeSectorMap.BLOCKED_BY_DECO + this.markCounter;
    },
    enumerable: true,
    configurable: true
  });
  AreaTypeSectorMap.__initialize_static_members = function () {
    AreaTypeSectorMap.BLOCKED_BY_DECO = 65536;
  };
  return AreaTypeSectorMap;
}();
exports.AreaTypeSectorMap = __s0local1;
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
__s0local1.__initialize_static_members();
