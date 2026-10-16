Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function () {
  function CastleEquipmentFactory() {}
  CastleEquipmentFactory.createEquipmentVO = function (__s5param0, __s5param1) {
    var __s5local0;
    if (__s5param1 === undefined) {
      __s5param1 = false;
    }
    if (__s5param0.length >= 12 && __s5param0[11] == __dep_exact_26a421b704832cff.EquipmentConst.EQUIPMENT_TYPE_ID_RELIC) {
      __s5local0 = new __dep_export_RelicEquipmentVO.RelicEquipmentVO();
    } else {
      switch (__s5param0[1]) {
        case __dep_exact_26a421b704832cff.EquipmentConst.SLOT_HERO:
          __s5local0 = new __dep_export_CastleHeroVO.CastleHeroVO();
          break;
        default:
          __s5local0 = new __dep_export_BasicEquipmentVO.BasicEquipmentVO();
      }
    }
    if (__s5param1) {
      __s5local0.parseCustomPrivateOfferEquipment(__s5param0);
    } else {
      __s5local0.parseEquipFromArray(__s5param0);
    }
    return __s5local0;
  };
  return CastleEquipmentFactory;
}();
exports.CastleEquipmentFactory = __s0local0;
var __dep_export_BasicEquipmentVO = require("gge-module:export_BasicEquipmentVO");
var __dep_export_CastleHeroVO = require("gge-module:export_CastleHeroVO");
var __dep_export_RelicEquipmentVO = require("gge-module:export_RelicEquipmentVO");
