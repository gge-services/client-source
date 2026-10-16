Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SCreateArmyAttackMovementTempServerVO(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5, __s3param6, __s3param7, __s3param8, __s3param9, __s3param10, __s3param11, __s3param12, __s3param13, __s3param14, __s3param15, __s3param16, __s3param17) {
    var __s3local0 = this;
    __s3local0.SX = 0;
    __s3local0.SY = 0;
    __s3local0.TX = 0;
    __s3local0.TY = 0;
    __s3local0.KID = 0;
    __s3local0.LID = 0;
    __s3local0.WT = 0;
    __s3local0.HBW = 0;
    __s3local0.BPC = 0;
    __s3local0.ATT = 0;
    __s3local0.AV = 0;
    __s3local0.LP = 0;
    __s3local0.FC = 0;
    __s3local0.PTT = 0;
    __s3local0.SD = 0;
    __s3local0.ICA = 0;
    __s3local0.CD = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).KID = __s3param11;
    __s3local0.SX = __dep_exact_f855840627e6e145.int(__s3param0.x);
    __s3local0.SY = __dep_exact_f855840627e6e145.int(__s3param0.y);
    __s3local0.TX = __dep_exact_f855840627e6e145.int(__s3param1.x);
    __s3local0.TY = __dep_exact_f855840627e6e145.int(__s3param1.y);
    __s3local0.A = __s3param2;
    __s3local0.LID = __s3param9;
    __s3local0.WT = __s3param3;
    __s3local0.HBW = __dep_exact_f855840627e6e145.int(__s3param12 ? -1 : __s3param4);
    __s3local0.BPC = __s3param5;
    __s3local0.ATT = __s3param6;
    __s3local0.AV = __dep_exact_f855840627e6e145.int(__s3param7 ? 1 : 0);
    __s3local0.LP = __s3param8;
    __s3local0.FC = __dep_exact_f855840627e6e145.int(__s3param10 ? 1 : 0);
    __s3local0.PTT = __dep_exact_f855840627e6e145.int(__s3param12 ? 1 : 0);
    __s3local0.SD = __s3param13;
    __s3local0.ICA = 0;
    __s3local0.BKS = __s3param15;
    __s3local0.CD = 99;
    __s3local0.AST = __s3param16;
    __s3local0.RW = __s3param17;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SCreateArmyAttackMovementTempServerVO, __s1param0);
  C2SCreateArmyAttackMovementTempServerVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_CREATE_ARMY_ATTACK_MOVEMENT_TEMP_SERVER;
  };
  return C2SCreateArmyAttackMovementTempServerVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SCreateArmyAttackMovementTempServerVO = __s0local0;
