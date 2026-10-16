Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SSkipDungeonCooldownVO(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    __s3local0.X = 0;
    __s3local0.Y = 0;
    __s3local0.KID = 0;
    __s3local0.MID = 0;
    __s3local0.NID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).KID = __s3param1;
    __s3local0.X = __dep_exact_f855840627e6e145.int(__s3param0.x);
    __s3local0.Y = __dep_exact_f855840627e6e145.int(__s3param0.y);
    if (__s3param2) {
      __s3local0.MID = __s3param2.mapID;
      __s3local0.NID = __s3param2.nodeID;
    } else {
      __s3local0.MID = -1;
      __s3local0.NID = -1;
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SSkipDungeonCooldownVO, __s1param0);
  C2SSkipDungeonCooldownVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_SKIP_DUNGEON_COOLDOWN;
  };
  return C2SSkipDungeonCooldownVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SSkipDungeonCooldownVO = __s0local0;
