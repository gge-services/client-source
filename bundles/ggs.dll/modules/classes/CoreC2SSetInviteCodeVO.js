Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __s0local0 = function (__s1param0) {
  function CoreC2SSetInviteCodeVO(__s3param0, __s3param1, __s3param2 = null, __s3param3 = null) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.IC = __s3param0;
    __s3local0.RM = __s3param1;
    __s3local0.EID_INVITED = __s3param3;
    __s3local0.EID_INVITER = __s3param2;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(CoreC2SSetInviteCodeVO, __s1param0);
  CoreC2SSetInviteCodeVO.prototype.getCmdId = function () {
    return __dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.C2S_SET_INVITE_CODE;
  };
  return CoreC2SSetInviteCodeVO;
}(require("gge-module:class_BasicCommandVO").BasicCommandVO);
exports.CoreC2SSetInviteCodeVO = __s0local0;
