Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleSpyinfoDetailsDialogProperties(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    __s3local0.forwarded = false;
    __s3local0.messageId = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).spyInfoVO = __s3param0;
    __s3local0.hideParentDialog = __s3param2;
    __s3local0.forwarded = __s3param1.forwarded;
    __s3local0.messageId = __s3param1.messageID;
    __s3local0.messageVO = __s3param1;
    __s3local0.forwardSender = __s3param1.senderName;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSpyinfoDetailsDialogProperties, __s1param0);
  return CastleSpyinfoDetailsDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleSpyinfoDetailsDialogProperties = __s0local0;
