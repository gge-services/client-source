Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AdvancedTroopsSelectionStrategyBasics() {}
  AdvancedTroopsSelectionStrategyBasics.prototype.getExchangeableSlots = function (__s5param0, __s5param1) {
    var __s5local0 = [];
    if (__s5param1 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5param1; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined && __s5local3.unitVO && __s5local3.getWodId() != __s5param0.wodId) {
          __s5local0.push(__s5local3);
        }
      }
    }
    return __s5local0;
  };
  AdvancedTroopsSelectionStrategyBasics.prototype.getFreeAndSameSlots = function (__s11param0, __s11param1) {
    var __s11local0 = [];
    if (__s11param1 != null) {
      for (var __s11local1 = 0, __s11local2 = __s11param1; __s11local1 < __s11local2.length; __s11local1++) {
        var __s11local3 = __s11local2[__s11local1];
        if (__s11local3 !== undefined && (__s11local3.isFree() || __s11local3.unitVO && __s11local3.getWodId() == __s11param0.wodId)) {
          __s11local0.push(__s11local3);
        }
      }
    }
    return __s11local0;
  };
  AdvancedTroopsSelectionStrategyBasics.prototype.getSameSlots = function (__s17param0, __s17param1) {
    var __s17local0 = [];
    if (__s17param1 != null) {
      for (var __s17local1 = 0, __s17local2 = __s17param1; __s17local1 < __s17local2.length; __s17local1++) {
        var __s17local3 = __s17local2[__s17local1];
        if (__s17local3 !== undefined && __s17local3.unitVO && __s17local3.getWodId() == __s17param0.wodId) {
          __s17local0.push(__s17local3);
        }
      }
    }
    return __s17local0;
  };
  AdvancedTroopsSelectionStrategyBasics.prototype.getFreeSlots = function (__s23param0, __s23param1) {
    var __s23local0 = [];
    if (__s23param1 != null) {
      for (var __s23local1 = 0, __s23local2 = __s23param1; __s23local1 < __s23local2.length; __s23local1++) {
        var __s23local3 = __s23local2[__s23local1];
        if (__s23local3 !== undefined && __s23local3.isFree()) {
          __s23local0.push(__s23local3);
        }
      }
    }
    return __s23local0;
  };
  return AdvancedTroopsSelectionStrategyBasics;
}();
exports.AdvancedTroopsSelectionStrategyBasics = __s0local0;
