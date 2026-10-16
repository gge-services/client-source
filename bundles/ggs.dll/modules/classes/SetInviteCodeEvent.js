Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function SetInviteCodeEvent(__s3param0, __s3param1, __s3param2 = false, __s3param3 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this;
    __s3local0._statusId = __s3param1;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(SetInviteCodeEvent, __s1param0);
  Object.defineProperty(SetInviteCodeEvent.prototype, "statusId", {
    get: function () {
      return this._statusId;
    },
    enumerable: true,
    configurable: true
  });
  SetInviteCodeEvent.INVITE_CODE_SET = "inviteCodeSet";
  SetInviteCodeEvent.SET_INVITE_CODE_FAILED = "setInviteCodeFailed";
  return SetInviteCodeEvent;
}(createjs.Event);
exports.SetInviteCodeEvent = __s0local0;
