Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SDefenceWallVO(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5, __s3param6, __s3param7, __s3param8, __s3param9, __s3param10) {
    var __s3local0 = this;
    __s3local0.CX = 0;
    __s3local0.CY = 0;
    __s3local0.AID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).CX = __dep_exact_f855840627e6e145.int(__s3param0.x);
    __s3local0.CY = __dep_exact_f855840627e6e145.int(__s3param0.y);
    __s3local0.AID = __s3param1;
    __s3local0.L = {};
    __s3local0.L.S = __s3param2;
    __s3local0.L.UP = __s3param3;
    __s3local0.L.UC = __s3param4;
    __s3local0.M = {};
    __s3local0.M.S = __s3param5;
    __s3local0.M.UP = __s3param6;
    __s3local0.M.UC = __s3param7;
    __s3local0.R = {};
    __s3local0.R.S = __s3param8;
    __s3local0.R.UP = __s3param9;
    __s3local0.R.UC = __s3param10;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SDefenceWallVO, __s1param0);
  C2SDefenceWallVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_DEFENSE_WALL;
  };
  return C2SDefenceWallVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SDefenceWallVO = __s0local0;
