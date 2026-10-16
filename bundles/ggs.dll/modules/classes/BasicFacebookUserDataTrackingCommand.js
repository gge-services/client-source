Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicTrackingCommand = require("gge-module:class_BasicTrackingCommand");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_exact_9036b0ddd67c3c6e = require("gge-module:exact_9036b0ddd67c3c6e");
var __dep_exact_ba3768902da9162c = require("gge-module:exact_ba3768902da9162c");
var __dep_class_TrackingCache = require("gge-module:class_TrackingCache");
var __dep_class_TrackingEventIds = require("gge-module:class_TrackingEventIds");
var __s0local0 = function (__s1param0) {
  function BasicFacebookUserDataTrackingCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicFacebookUserDataTrackingCommand, __s1param0);
  BasicFacebookUserDataTrackingCommand.prototype.execute = function (__s5param0 = null) {
    if (__s5param0) {
      var __s5local0 = __dep_class_TrackingCache.TrackingCache.getInstance().getEvent(__dep_class_TrackingEventIds.TrackingEventIds.FACEBOOK_USER_DATA);
      var __s5local1 = __s5param0;
      __s5local0.playerId = __dep_class_BasicModel.BasicModel.userData.playerID;
      __s5local0.timestamp = new Date().getTime() / 1000;
      __s5local0.facebookId = __s5local1.facebookId;
      __s5local0.isAccountVerified = __s5local1.isAccountVerified;
      __s5local0.fullName = __s5local1.fullName;
      __s5local0.firstName = __s5local1.firstName;
      __s5local0.lastName = __s5local1.lastName;
      __s5local0.profileLink = __s5local1.profileLink;
      __s5local0.gender = __s5local1.gender;
      __s5local0.locale = __s5local1.locale;
      __s5local0.ageRange = __s5local1.ageRange;
      __s5local0.utcOffset = __s5local1.utcOffset;
      __s5local0.birthday = __s5local1.birthday;
      __s5local0.email = __s5local1.email;
      __s5local0.facebookBusinessToken = __s5local1.facebookBusinessToken;
      __dep_exact_9036b0ddd67c3c6e.debug("Track FacebookUserData, name: " + __s5local1.fullName + ", facebookId: " + __s5local1.facebookId + ", isAccountVerified: " + __s5local1.isAccountVerified);
      __dep_class_TrackingCache.TrackingCache.getInstance().sendEvent(__dep_class_TrackingEventIds.TrackingEventIds.FACEBOOK_USER_DATA);
    } else {
      __dep_exact_ba3768902da9162c.warn("Object with the invitation information missing!");
    }
  };
  return BasicFacebookUserDataTrackingCommand;
}(__dep_class_BasicTrackingCommand.BasicTrackingCommand);
exports.BasicFacebookUserDataTrackingCommand = __s0local0;
