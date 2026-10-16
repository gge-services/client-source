Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SCreateTreasureHuntMovementVO(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5, __s3param6) {
    var __s3local0 = this;
    __s3local0.LID = 0;
    __s3local0.BT = 0;
    __s3local0.BPC = 0;
    __s3local0.MID = 0;
    __s3local0.NID = 0;
    __s3local0.PTT = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).A = __s3param0;
    __s3local0.LID = __s3param5;
    __s3local0.BT = __dep_exact_f855840627e6e145.int(__s3param6 ? -1 : __s3param1);
    __s3local0.BPC = __s3param2;
    __s3local0.MID = __s3param3;
    __s3local0.NID = __s3param4;
    __s3local0.PTT = __dep_exact_f855840627e6e145.int(__s3param6 ? 1 : 0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SCreateTreasureHuntMovementVO, __s1param0);
  C2SCreateTreasureHuntMovementVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_CREATE_TREASUREHUNT_MOVEMENT;
  };
  return C2SCreateTreasureHuntMovementVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SCreateTreasureHuntMovementVO = __s0local0;
