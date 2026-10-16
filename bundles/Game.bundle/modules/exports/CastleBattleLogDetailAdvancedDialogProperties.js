Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleBattleLogDetailAdvancedDialogProperties(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4) {
    var __s3local0 = this;
    __s3local0.forwarded = false;
    __s3local0.messageId = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).logVO = __s3param0;
    __s3local0.forwarded = __s3param2;
    __s3local0.messageId = __s3param1;
    __s3local0.forwardSender = __s3param3;
    __s3local0.onClose = __s3param4;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBattleLogDetailAdvancedDialogProperties, __s1param0);
  return CastleBattleLogDetailAdvancedDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleBattleLogDetailAdvancedDialogProperties = __s0local0;
