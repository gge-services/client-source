Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function HospitalReviveSlotLevelHandlerComponent() {
    this.init();
  }
  HospitalReviveSlotLevelHandlerComponent.prototype.init = function () {
    this._slots = [];
    for (var __s5local0 = 0, __s5local1 = Array.from(__dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).values()); __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 !== undefined && __dep_exact_81dacdf05bd32292.instanceOfClass(__s5local2, "HospitalBuildingVO")) {
        var __s5local3 = __dep_exact_f855840627e6e145.int(this.getHospitalIndex(__s5local2));
        if (__s5local3 >= 0) {
          if (this._slots[__s5local3].level > __s5local2.level) {
            this._slots[__s5local3] = __s5local2;
          }
        } else {
          this._slots.push(__s5local2);
        }
      }
    }
    this._slots = this._slots.sort(HospitalReviveSlotLevelHandlerComponent.sortBySlotPos);
  };
  HospitalReviveSlotLevelHandlerComponent.prototype.getHospitalIndex = function (__s13param0) {
    for (var __s13local0 = 0; __s13local0 < this._slots.length; __s13local0++) {
      if (this._slots[__s13local0].hospitalSlots == __s13param0.hospitalSlots) {
        return __s13local0;
      }
    }
    return -1;
  };
  HospitalReviveSlotLevelHandlerComponent.sortBySlotPos = function (__s18param0, __s18param1) {
    if (__s18param0.hospitalSlots > __s18param1.hospitalSlots) {
      return 1;
    } else if (__s18param0.hospitalSlots < __s18param1.hospitalSlots) {
      return -1;
    } else {
      return 0;
    }
  };
  HospitalReviveSlotLevelHandlerComponent.prototype.getHospitalLevelForSlotIndex = function (__s23param0) {
    if (__s23param0 >= this._slots.length || __s23param0 < 0) {
      throw new Error("slotId out of bounds");
    }
    return __dep_exact_f855840627e6e145.int(this._slots[__s23param0].level);
  };
  return HospitalReviveSlotLevelHandlerComponent;
}();
exports.HospitalReviveSlotLevelHandlerComponent = __s0local0;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
