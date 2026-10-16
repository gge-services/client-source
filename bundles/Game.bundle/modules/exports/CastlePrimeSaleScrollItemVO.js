Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastlePrimeSaleScrollItemVO(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._packageID = 0;
    __s3local0._discount = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._packageID = __s3param0;
    __s3local0._discount = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrimeSaleScrollItemVO, __s1param0);
  Object.defineProperty(CastlePrimeSaleScrollItemVO.prototype, "packageVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(this._packageID);
    },
    enumerable: true,
    configurable: true
  });
  return CastlePrimeSaleScrollItemVO;
}(__dep_exact_9e901e8e2483a22f.ScrollItemVO);
exports.CastlePrimeSaleScrollItemVO = __s0local0;
