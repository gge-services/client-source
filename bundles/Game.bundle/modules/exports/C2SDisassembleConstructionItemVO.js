Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function C2SDisassembleConstructionItemVO(__s3param0, __s3param1, __s3param2 = 1) {
    var __s3local0 = this;
    __s3local0.CID = 0;
    __s3local0.KID = 0;
    __s3local0.AID = 0;
    __s3local0.LFID = 0;
    __s3local0.AMT = 1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).CID = __s3param0;
    __s3local0.KID = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
    __s3local0.AID = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId);
    __s3local0.LFID = __s3param1;
    __s3local0.AMT = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SDisassembleConstructionItemVO, __s1param0);
  C2SDisassembleConstructionItemVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_DISASSEMBLE_CONSTRUCTION_ITEM;
  };
  return C2SDisassembleConstructionItemVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SDisassembleConstructionItemVO = __s0local0;
