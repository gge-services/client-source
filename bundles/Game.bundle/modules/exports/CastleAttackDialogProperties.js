Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleAttackDialogProperties(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    if (!__s3param0) {
      throw new ReferenceError("CastleAttackInfoVO must not be null!");
    }
    __s3local0._attackInfoVO = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAttackDialogProperties, __s1param0);
  Object.defineProperty(CastleAttackDialogProperties.prototype, "attackInfoVO", {
    get: function () {
      return this._attackInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAttackDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleAttackDialogProperties = __s0local0;
