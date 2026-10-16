Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function () {
  function LordFactory() {}
  LordFactory.createLord = function (__s5param0, __s5param1 = false, __s5param2 = false) {
    if (!__s5param0) {
      return null;
    }
    var __s5local0;
    var __s5local1 = __dep_exact_f855840627e6e145.int(__s5param0.DLID || __s5param0.ID);
    if (__s5local1 < 0) {
      if (__s5local0 = __s5param2 ? __dep_export_CastleModel.CastleModel.lordData.getDefaultLordWithoutEquipmentByID(__s5local1) : __dep_export_CastleModel.CastleModel.lordData.getDefaultLordByID(__s5local1)) {
        __s5local0.parseLord(__s5param0, true, __s5param2);
        return __s5local0;
      } else {
        return null;
      }
    }
    switch (__s5param0.WID) {
      case __dep_exact_26a421b704832cff.EquipmentConst.COMMANDER_WEARER_ID:
        __s5local0 = new __dep_export_CommanderVO.CommanderVO();
        break;
      case __dep_exact_26a421b704832cff.EquipmentConst.BARON_WEARER_ID:
        __s5local0 = new __dep_export_BaronVO.BaronVO();
    }
    __s5local0.parseLord(__s5param0, __s5param1, __s5param2);
    return __s5local0;
  };
  return LordFactory;
}();
exports.LordFactory = __s0local0;
var __dep_export_BaronVO = require("gge-module:export_BaronVO");
var __dep_export_CommanderVO = require("gge-module:export_CommanderVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
