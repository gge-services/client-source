Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_TrackingVerificationPatternGenerator = require("gge-module:class_TrackingVerificationPatternGenerator");
var __dep_class_TrackingCache = require("gge-module:class_TrackingCache");
var __s0local0 = function (__s1param0) {
  function BasicVerifyTrackingCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicVerifyTrackingCommand, __s1param0);
  BasicVerifyTrackingCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = this.currentTrackingCase;
    var __s5local1 = __dep_class_TrackingVerificationPatternGenerator.TrackingVerificationPatternGenerator.getPattern(__s5local0);
    if (this.env.doUserTunnelTracking) {
      __dep_class_TrackingCache.TrackingCache.getInstance().trackingVerifier.startVerification(__s5local0, __s5local1, BasicVerifyTrackingCommand.VERIFICATION_DELAY_FOR_FIRST_SESSION);
    } else {
      __dep_class_TrackingCache.TrackingCache.getInstance().trackingVerifier.startVerification(__s5local0, __s5local1);
    }
  };
  Object.defineProperty(BasicVerifyTrackingCommand.prototype, "currentTrackingCase", {
    get: function () {
      if (this.env.doUserTunnelTracking) {
        if (this.env.isSSO) {
          return __dep_class_TrackingVerificationPatternGenerator.TrackingVerificationPatternGenerator.CLASSIC_FIRST_INSTANCE_SSO_PATTERN;
        } else if (this.env.userFromLandingPage) {
          return __dep_class_TrackingVerificationPatternGenerator.TrackingVerificationPatternGenerator.CLASSIC_FIRST_INSTANCE_LP_PATTERN;
        } else {
          return __dep_class_TrackingVerificationPatternGenerator.TrackingVerificationPatternGenerator.CLASSIC_FIRST_INSTANCE_WWW_PATTERN;
        }
      } else {
        return __dep_class_TrackingVerificationPatternGenerator.TrackingVerificationPatternGenerator.CLASSIC_STANDARD_PATTERN;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicVerifyTrackingCommand.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  BasicVerifyTrackingCommand.VERIFICATION_DELAY_FOR_FIRST_SESSION = 180000;
  return BasicVerifyTrackingCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicVerifyTrackingCommand = __s0local0;
