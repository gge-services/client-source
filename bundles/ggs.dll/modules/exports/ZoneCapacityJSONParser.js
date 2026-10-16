Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ZoneCapacity = require("gge-module:export_ZoneCapacity");
var __s0local0 = function () {
  function ZoneCapacityJSONParser() {}
  ZoneCapacityJSONParser.parse = function (__s5param0) {
    var __s5local0;
    var __s5local1 = [];
    var __s5local2 = JSON.parse(__s5param0);
    if ("zones" in __s5local2) {
      for (var __s5local3 = 0; __s5local3 < __s5local2.zones.length; __s5local3++) {
        __s5local0 = this.parseZone(__s5local2.zones[__s5local3]);
        __s5local1.push(__s5local0);
      }
    }
    return __s5local1;
  };
  ZoneCapacityJSONParser.parseZone = function (__s10param0) {
    var __s10local0 = new __dep_export_ZoneCapacity.ZoneCapacity();
    __s10local0.zoneId = "zoneId" in __s10param0 ? __s10param0.zoneId : -1;
    __s10local0.remainingRegistrationCapacity = "remainingRegistrationCapacity" in __s10param0 ? __s10param0.remainingRegistrationCapacity : 100;
    return __s10local0;
  };
  return ZoneCapacityJSONParser;
}();
exports.ZoneCapacityJSONParser = __s0local0;
