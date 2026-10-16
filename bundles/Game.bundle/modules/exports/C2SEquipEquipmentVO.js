Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SEquipEquipmentVO(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    __s3local0.EID = 0;
    __s3local0.LID = 0;
    __s3local0.E = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).EID = __s3param0;
    __s3local0.LID = __s3param1;
    __s3local0.E = __dep_exact_f855840627e6e145.int(__s3param2 ? 1 : 0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SEquipEquipmentVO, __s1param0);
  C2SEquipEquipmentVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_EQUIP_EQUIPMENT;
  };
  return C2SEquipEquipmentVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SEquipEquipmentVO = __s0local0;
