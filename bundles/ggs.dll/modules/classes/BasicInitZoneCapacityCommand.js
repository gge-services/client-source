Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicClientCommand = require("gge-module:class_BasicClientCommand");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __s0local0 = function (__s1param0) {
  function BasicInitZoneCapacityCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicInitZoneCapacityCommand, __s1param0);
  BasicInitZoneCapacityCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __s5param0.zoneCapacity;
    var __s5local1 = __dep_class_BasicModel.BasicModel.instanceProxy.instanceMap;
    for (var __s5local2 = __s5local1.length, __s5local3 = 0; __s5local3 < __s5local2; __s5local3++) {
      var __s5local4 = __s5local1[__s5local3];
      __s5local4.remainingRegistrationCapacity = this._getCapacityForZone(__s5local4.zoneId, __s5local0.zones);
    }
  };
  BasicInitZoneCapacityCommand.prototype._getCapacityForZone = function (__s9param0, __s9param1) {
    var __s9local0 = -1;
    for (var __s9local1 = __s9param1.length, __s9local2 = 0; __s9local2 < __s9local1; __s9local2++) {
      var __s9local3 = __s9param1[__s9local2];
      if (__s9local3.zoneId == __s9param0) {
        __s9local0 = __s9local3.remainingRegistrationCapacity;
        break;
      }
    }
    return __s9local0;
  };
  return BasicInitZoneCapacityCommand;
}(__dep_class_BasicClientCommand.BasicClientCommand);
exports.BasicInitZoneCapacityCommand = __s0local0;
