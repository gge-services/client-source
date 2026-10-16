Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SSetAutoSellEquipmentConditionsEventVO(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.ECS = [];
    for (var __s3local1 = 0, __s3local2 = Array.from(__s3param0.actives.keys()); __s3local1 < __s3local2.length; __s3local1++) {
      var __s3local3 = __s3local2[__s3local1];
      if (__s3local3 !== undefined) {
        var __s3local4 = __s3param0.actives.get(__s3local3);
        if (__s3local4 != null) {
          for (var __s3local5 = 0, __s3local6 = Array.from(__s3local4.keys()); __s3local5 < __s3local6.length; __s3local5++) {
            var __s3local7 = __s3local6[__s3local5];
            if (__s3local7 !== undefined) {
              if (__s3local4.get(__s3local7)) {
                __s3local0.ECS.push([__s3local3, __s3local3 == __dep_exact_26a421b704832cff.EquipmentConst.SLOT_HERO ? __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_COMMON - 1 + __s3local7 : __s3local7]);
              }
            }
          }
        }
      }
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SSetAutoSellEquipmentConditionsEventVO, __s1param0);
  C2SSetAutoSellEquipmentConditionsEventVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_SET_AUTO_SELL_EQUIPMENT_CONDITIONS;
  };
  return C2SSetAutoSellEquipmentConditionsEventVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SSetAutoSellEquipmentConditionsEventVO = __s0local0;
