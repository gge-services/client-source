Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicTrackingCommand = require("gge-module:class_BasicTrackingCommand");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_exact_ba3768902da9162c = require("gge-module:exact_ba3768902da9162c");
var __dep_class_TrackingCache = require("gge-module:class_TrackingCache");
var __dep_class_TrackingEventIds = require("gge-module:class_TrackingEventIds");
var __s0local0 = function (__s1param0) {
  function BasicFacebookUserEmailTrackingCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicFacebookUserEmailTrackingCommand, __s1param0);
  BasicFacebookUserEmailTrackingCommand.prototype.execute = function (__s5param0 = null) {
    if (__s5param0) {
      var __s5local0 = __dep_class_TrackingCache.TrackingCache.getInstance().getEvent(__dep_class_TrackingEventIds.TrackingEventIds.FACBOOK_USER_EMAIL);
      var __s5local1 = __s5param0;
      __s5local0.playerId = __dep_class_BasicModel.BasicModel.userData.playerID;
      __s5local0.date = Math.round(new Date().time / 1000);
      __s5local0.email = __s5local1.email;
      __dep_class_TrackingCache.TrackingCache.getInstance().sendEvent(__dep_class_TrackingEventIds.TrackingEventIds.FACBOOK_USER_EMAIL);
    } else {
      __dep_exact_ba3768902da9162c.warn("Object with the invitation information missing!");
    }
  };
  return BasicFacebookUserEmailTrackingCommand;
}(__dep_class_BasicTrackingCommand.BasicTrackingCommand);
exports.BasicFacebookUserEmailTrackingCommand = __s0local0;
