Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function GenerateInviteCodeEvent(__s3param0, __s3param1, __s3param2 = null, __s3param3 = false, __s3param4 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param3, __s3param4) || this;
    __s3local0._statusId = __s3param1;
    __s3local0._inviteCodeOrLink = __s3param2;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(GenerateInviteCodeEvent, __s1param0);
  Object.defineProperty(GenerateInviteCodeEvent.prototype, "statusId", {
    get: function () {
      return this._statusId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenerateInviteCodeEvent.prototype, "inviteCodeOrLink", {
    get: function () {
      return this._inviteCodeOrLink;
    },
    enumerable: true,
    configurable: true
  });
  GenerateInviteCodeEvent.INVITE_CODE_GENERATED = "inviteCodeGenerated";
  GenerateInviteCodeEvent.GENERATE_INVITE_CODE_FAILED = "generateInviteCodeFailed";
  return GenerateInviteCodeEvent;
}(createjs.Event);
exports.GenerateInviteCodeEvent = __s0local0;
