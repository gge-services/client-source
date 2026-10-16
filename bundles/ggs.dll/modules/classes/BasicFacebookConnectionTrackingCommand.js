Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_TrackingEventIds = require("gge-module:class_TrackingEventIds");
var __dep_class_TrackingCache = require("gge-module:class_TrackingCache");
var __dep_class_BasicTrackingCommand = require("gge-module:class_BasicTrackingCommand");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_exact_9036b0ddd67c3c6e = require("gge-module:exact_9036b0ddd67c3c6e");
var __dep_exact_ba3768902da9162c = require("gge-module:exact_ba3768902da9162c");
var __s0local0 = function (__s1param0) {
  function BasicFacebookConnectionTrackingCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicFacebookConnectionTrackingCommand, __s1param0);
  BasicFacebookConnectionTrackingCommand.prototype.execute = function (__s5param0 = null) {
    if (__s5param0) {
      var __s5local0 = __dep_class_TrackingCache.TrackingCache.getInstance().getEvent(__dep_class_TrackingEventIds.TrackingEventIds.FACEBOOK_CONNECTION);
      var __s5local1 = __s5param0;
      __s5local0.playerId = __dep_class_BasicModel.BasicModel.userData.playerID;
      __s5local0.zoneId = __dep_class_BasicModel.BasicModel.instanceProxy.selectedInstanceVO.zoneId;
      __s5local0.timestamp = new Date().getTime() / 1000;
      __s5local0.facebookExternalState = __s5local1.facebookConnectionState;
      __s5local0.facebookId = __s5local1.facebookId;
      __s5local0.gameLevel = __s5local1.gameLevel;
      __dep_exact_9036b0ddd67c3c6e.debug("Track FacebookConnection, facebookConnectionState: " + __s5local1.facebookConnectionState + ", facebookId: " + __s5local1.facebookId + ", gameLevel: " + __s5local1.gameLevel);
      __dep_class_TrackingCache.TrackingCache.getInstance().sendEvent(__dep_class_TrackingEventIds.TrackingEventIds.FACEBOOK_CONNECTION);
    } else {
      __dep_exact_ba3768902da9162c.warn("Object with the invitation information missing!");
    }
  };
  return BasicFacebookConnectionTrackingCommand;
}(__dep_class_BasicTrackingCommand.BasicTrackingCommand);
exports.BasicFacebookConnectionTrackingCommand = __s0local0;
