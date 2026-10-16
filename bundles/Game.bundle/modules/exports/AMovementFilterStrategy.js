Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AMovementFilterStrategy() {}
  AMovementFilterStrategy.prototype.getFilteredList = function () {
    var __s5local0 = [];
    var __s5local1 = __dep_export_CastleModel.CastleModel.armyData.mapMovementsAsVector.filter(this.bindFunction(this.filterFunction));
    __s5local1.sort(this.bindFunction(this.compareFunction));
    if (__s5local1 != null) {
      for (var __s5local2 = 0, __s5local3 = __s5local1; __s5local2 < __s5local3.length; __s5local2++) {
        var __s5local4 = __s5local3[__s5local2];
        if (__s5local4 !== undefined) {
          __s5local0.push(new __dep_export_CastleMovementItemVO.CastleMovementItemVO(__s5local4));
        }
      }
    }
    return __s5local0;
  };
  AMovementFilterStrategy.prototype.compareFunction = function (__s11param0, __s11param1) {
    var __s11local0 = __s11param0.getTimeUntilWaitOverInSeconds() - __s11param0.getTimeUntilWaitOverInSeconds();
    return __s11local0 || __dep_exact_f855840627e6e145.int(__s11param0.getTimeUntiMovmentReachTargetInMilliSeconds() - __s11param1.getTimeUntiMovmentReachTargetInMilliSeconds());
  };
  AMovementFilterStrategy.prototype.filterFunction = function (__s13param0, __s13param1, __s13param2) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  Object.defineProperty(AMovementFilterStrategy.prototype, "name", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  return AMovementFilterStrategy;
}();
exports.AMovementFilterStrategy = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleMovementItemVO = require("gge-module:export_CastleMovementItemVO");
