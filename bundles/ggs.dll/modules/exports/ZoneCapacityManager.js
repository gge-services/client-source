Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ZoneCapacityManager() {}
  ZoneCapacityManager.prototype.getCapacityForZone = function (__s5param0) {
    var __s5local0 = -1;
    for (var __s5local1 = this.zoneCapacities.length, __s5local2 = 0; __s5local2 < __s5local1; __s5local2++) {
      var __s5local3 = this.zoneCapacities[__s5local2];
      if (__s5local3.zoneId === __s5param0) {
        __s5local0 = __s5local3.remainingRegistrationCapacity;
        break;
      }
    }
    return __s5local0;
  };
  return ZoneCapacityManager;
}();
exports.ZoneCapacityManager = __s0local0;
