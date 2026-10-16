Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SGetAttackABGTowerInfosVO(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    __s3local0.TX = 0;
    __s3local0.TY = 0;
    __s3local0.SX = 0;
    __s3local0.SY = 0;
    __s3local0.KID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).TX = __dep_exact_f855840627e6e145.int(__s3param0.x);
    __s3local0.TY = __dep_exact_f855840627e6e145.int(__s3param0.y);
    __s3local0.SX = __dep_exact_f855840627e6e145.int(__s3param1.x);
    __s3local0.SY = __dep_exact_f855840627e6e145.int(__s3param1.y);
    __s3local0.KID = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SGetAttackABGTowerInfosVO, __s1param0);
  C2SGetAttackABGTowerInfosVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_GET_ATTACK_ABG_TOWER_INFOS;
  };
  return C2SGetAttackABGTowerInfosVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SGetAttackABGTowerInfosVO = __s0local0;
