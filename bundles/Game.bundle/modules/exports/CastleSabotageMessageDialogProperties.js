Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleSabotageMessageDialogProperties(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = this;
    __s3local0.messageType = 0;
    __s3local0.castleID = 0;
    __s3local0.messageID = 0;
    __s3local0.isMessageUnread = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).messageType = __s3param0;
    __s3local0.castleID = __s3param1;
    __s3local0.messageID = __s3param2;
    __s3local0.isMessageUnread = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSabotageMessageDialogProperties, __s1param0);
  return CastleSabotageMessageDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleSabotageMessageDialogProperties = __s0local0;
