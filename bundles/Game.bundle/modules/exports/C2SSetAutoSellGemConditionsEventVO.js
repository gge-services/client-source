Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __s0local0 = function (__s1param0) {
  function C2SSetAutoSellGemConditionsEventVO(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.GCS = [];
    for (var __s3local1 = 0, __s3local2 = Array.from(__s3param0.actives.keys()); __s3local1 < __s3local2.length; __s3local1++) {
      var __s3local3 = __s3local2[__s3local1];
      __s3local0.GCS.push([__s3param0.actives.get(__s3local3), __s3local3]);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SSetAutoSellGemConditionsEventVO, __s1param0);
  C2SSetAutoSellGemConditionsEventVO.prototype.getCmdId = function () {
    return __dep_export_ClientConstSF.ClientConstSF.C2S_SET_AUTO_SELL_GEM_CONDITIONS;
  };
  return C2SSetAutoSellGemConditionsEventVO;
}(__dep_exact_9e901e8e2483a22f.BasicCommandVO);
exports.C2SSetAutoSellGemConditionsEventVO = __s0local0;
