Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CastleSlotRewardEventDialogProperties(__s3param0) {
    var __s3local0 = this;
    __s3local0._isToolSlot = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._isToolSlot = Boolean(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSlotRewardEventDialogProperties, __s1param0);
  Object.defineProperty(CastleSlotRewardEventDialogProperties.prototype, "isToolSlot", {
    get: function () {
      return this._isToolSlot;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSlotRewardEventDialogProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.CastleSlotRewardEventDialogProperties = __s0local0;
