Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function ModernWelcomebackDialogProperties(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).rewardList = __dep_export_CastleModel.CastleModel.rewardData.getWelcomeBackRewardListById(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ModernWelcomebackDialogProperties, __s1param0);
  return ModernWelcomebackDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.ModernWelcomebackDialogProperties = __s0local0;
