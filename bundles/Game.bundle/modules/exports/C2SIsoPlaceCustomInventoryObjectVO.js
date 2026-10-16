Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SIsoPlaceCustomInventoryObjectVO(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = this;
    __s3local0.COID = 0;
    __s3local0.X = 0;
    __s3local0.Y = 0;
    __s3local0.R = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).COID = __s3param0;
    __s3local0.X = __s3param1;
    __s3local0.Y = __s3param2;
    __s3local0.R = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SIsoPlaceCustomInventoryObjectVO, __s1param0);
  C2SIsoPlaceCustomInventoryObjectVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_PLACE_CUSTOM_INVENTORY_OBJECT;
  };
  return C2SIsoPlaceCustomInventoryObjectVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SIsoPlaceCustomInventoryObjectVO = __s0local0;
