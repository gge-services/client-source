Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __s0local0 = function (__s1param0) {
  function CoreC2SGenerateInviteCodeVO(__s3param0 = "code", __s3param1 = null) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.T = __s3param0;
    __s3local0.CC = __s3param1;
    __s3local0.RR = "html5";
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(CoreC2SGenerateInviteCodeVO, __s1param0);
  CoreC2SGenerateInviteCodeVO.prototype.getCmdId = function () {
    return __dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.C2S_GENERATE_INVITE_CODE;
  };
  return CoreC2SGenerateInviteCodeVO;
}(require("gge-module:class_BasicCommandVO").BasicCommandVO);
exports.CoreC2SGenerateInviteCodeVO = __s0local0;
