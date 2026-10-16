Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SLaunchDaimyoTauntAttackVO(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = this;
    __s3local0.TX = 0;
    __s3local0.TY = 0;
    __s3local0.SMK = 0;
    __s3local0.SPK = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).TX = __s3param0;
    __s3local0.TY = __s3param1;
    __s3local0.SMK = __s3param2;
    __s3local0.SPK = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SLaunchDaimyoTauntAttackVO, __s1param0);
  C2SLaunchDaimyoTauntAttackVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_LAUNCH_DAIMYO_TAUNT_ATTACK;
  };
  return C2SLaunchDaimyoTauntAttackVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SLaunchDaimyoTauntAttackVO = __s0local0;
