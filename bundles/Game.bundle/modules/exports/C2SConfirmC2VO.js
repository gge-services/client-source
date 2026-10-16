Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function C2SConfirmC2VO(__s3param0, __s3param1) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).cmdID = __s3param0;
    Object.assign(__s3local0, JSON.parse(__s3param1));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(C2SConfirmC2VO, __s1param0);
  C2SConfirmC2VO.prototype.getCmdId = function () {
    return this.cmdID;
  };
  return C2SConfirmC2VO;
}(require("gge-module:exact_9e901e8e2483a22f").BasicCommandVO);
exports.C2SConfirmC2VO = __s0local0;
