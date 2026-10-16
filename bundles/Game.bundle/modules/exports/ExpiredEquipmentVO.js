Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function ExpiredEquipmentVO() {
    this.equipments = [];
  }
  ExpiredEquipmentVO.prototype.parseData = function (__s5param0) {
    this.lordVO = __dep_export_CastleModel.CastleModel.lordData.getLordByID(__s5param0.LID);
    for (var __s5local0 = 0; __s5local0 < __s5param0.EE.length; ++__s5local0) {
      var __s5local1 = __s5param0.EE[__s5local0];
      var __s5local2 = __dep_export_CastleModel.CastleModel.equipData.getEquipmentByUniqueID(__s5local1[0]);
      if (__s5local1.length >= 2) {
        __s5local2.enchantmentLevel = __dep_exact_f855840627e6e145.int(__s5local1[1]);
      }
      if (__s5local1.length >= 3) {
        __s5local2.gemVO = __dep_export_CastleModel.CastleModel.gemData.getGemVO(__s5local1[2]);
      }
      this.equipments.push(__s5local2);
    }
  };
  ExpiredEquipmentVO.prototype.getEquipmentBySlotType = function (__s11param0) {
    if (this.equipments != null) {
      for (var __s11local0 = 0, __s11local1 = this.equipments; __s11local0 < __s11local1.length; __s11local0++) {
        var __s11local2 = __s11local1[__s11local0];
        if (__s11local2 !== undefined && __s11local2.slotType == __s11param0) {
          return __s11local2;
        }
      }
    }
    return null;
  };
  return ExpiredEquipmentVO;
}();
exports.ExpiredEquipmentVO = __s0local0;
