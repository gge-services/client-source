Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SIsoBuyObjectVO(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4 = -1, __s3param5 = false, __s3param6 = -1) {
    var __s3local0 = this;
    __s3local0.WID = 0;
    __s3local0.X = 0;
    __s3local0.Y = 0;
    __s3local0.R = 0;
    __s3local0.PWR = 0;
    __s3local0.PO = 0;
    __s3local0.DOID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).WID = __s3param0;
    __s3local0.X = __s3param1;
    __s3local0.Y = __s3param2;
    __s3local0.R = __s3param3;
    __s3local0.PO = __s3param4;
    __s3local0.DOID = __s3param6;
    __s3local0.PWR = __dep_exact_f855840627e6e145.int(__s3param5 == 1 ? 1 : 0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SIsoBuyObjectVO, __s1param0);
  C2SIsoBuyObjectVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_BUY_OBJECT;
  };
  return C2SIsoBuyObjectVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SIsoBuyObjectVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IBuildingConstructionCommandVO");
