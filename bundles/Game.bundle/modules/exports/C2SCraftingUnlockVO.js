Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CraftingSlotVO = require("gge-module:export_CraftingSlotVO");
var __s0local0 = function (__s1param0) {
  function C2SCraftingUnlockVO(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.KID = 0;
    __s3local0.AID = 0;
    __s3local0.OID = 0;
    __s3local0.S = [];
    __s3local0.ST = "";
    __s3local0.KID = __s3param0;
    __s3local0.AID = __s3param1;
    __s3local0.OID = __s3param2;
    __s3local0.S = __s3param3;
    __s3local0.ST = __s3param4 == __dep_export_CraftingSlotVO.CraftingSlotVO.SLOT_TYPE_PRODUCTION ? "production" : "queue";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SCraftingUnlockVO, __s1param0);
  C2SCraftingUnlockVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_CRAFTING_UNLOCK;
  };
  return C2SCraftingUnlockVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SCraftingUnlockVO = __s0local0;
