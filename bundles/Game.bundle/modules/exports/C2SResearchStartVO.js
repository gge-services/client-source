Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SResearchStartVO(__s3param0, __s3param1 = -1, __s3param2 = false) {
    var __s3local0 = this;
    __s3local0.RID = 0;
    __s3local0.PO = 0;
    __s3local0.PWR = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).RID = __s3param0;
    __s3local0.PO = __s3param1;
    __s3local0.PWR = __dep_exact_f855840627e6e145.int(__s3param2 == 1 ? 1 : 0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SResearchStartVO, __s1param0);
  C2SResearchStartVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_RESEARCH_START;
  };
  return C2SResearchStartVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SResearchStartVO = __s0local0;
