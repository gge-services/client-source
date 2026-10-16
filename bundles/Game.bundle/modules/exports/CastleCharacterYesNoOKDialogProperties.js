Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleCharacterYesNoOKDialogProperties(__s3param0, __s3param1, __s3param2 = 0, __s3param3 = null, __s3param4 = null, __s3param5 = true, __s3param6 = null) {
    var __s3local0 = this;
    __s3local0.showCancleButton = true;
    __s3local0.character = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).title = __s3param0;
    __s3local0.copy = __s3param1;
    __s3local0.functionYes = __s3param3;
    __s3local0.functionNo = __s3param4;
    __s3local0.showCancleButton = __s3param5;
    __s3local0.character = __s3param2;
    __s3local0.params = __s3param6;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCharacterYesNoOKDialogProperties, __s1param0);
  return CastleCharacterYesNoOKDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleCharacterYesNoOKDialogProperties = __s0local0;
