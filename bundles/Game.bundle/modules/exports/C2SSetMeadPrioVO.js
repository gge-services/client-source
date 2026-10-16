Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function C2SSetMeadPrioVO() {
    var __s3local0 = this;
    __s3local0.KID = 0;
    __s3local0.AID = 0;
    __s3local0.PPOT = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).KID = __dep_export_CastleModel.CastleModel.areaData.activeArea.areaInfo.kingdomID;
    __s3local0.AID = __dep_export_CastleModel.CastleModel.areaData.activeArea.areaInfo.objectId;
    __s3local0.PPOT = __dep_export_CastleModel.CastleModel.breweryData.meadPrioSet ? 1 : 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SSetMeadPrioVO, __s1param0);
  C2SSetMeadPrioVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_SET_MEAD_PRIORITY;
  };
  return C2SSetMeadPrioVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SSetMeadPrioVO = __s0local0;
