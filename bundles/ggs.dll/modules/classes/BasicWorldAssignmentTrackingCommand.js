Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicFirstSessionTrackingCommand = require("gge-module:class_BasicFirstSessionTrackingCommand");
var __dep_class_TrackingCache = require("gge-module:class_TrackingCache");
var __dep_class_TrackingEventIds = require("gge-module:class_TrackingEventIds");
var __s0local0 = function (__s1param0) {
  function BasicWorldAssignmentTrackingCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicWorldAssignmentTrackingCommand, __s1param0);
  BasicWorldAssignmentTrackingCommand.prototype.execute = function (__s5param0 = null) {
    if (this.commandIsAllowed) {
      var __s5local0 = window.ggs.worldAssignment.facade;
      var __s5local1 = __dep_class_TrackingCache.TrackingCache.getInstance().getEvent(__dep_class_TrackingEventIds.TrackingEventIds.WORLD_ASSIGNMENT);
      __s5local1.accountId = this.env.accountId;
      __s5local1.countryDetectionFactor = __s5local0.detectionFactor;
      __s5local1.country = __s5local0.currentCountry;
      __s5local1.campaignVars = this.env.campainVars;
      __s5local1.websiteId = this.env.urlVariables.websiteId;
      __s5local1.storeId = this.env.storeId;
      __dep_class_TrackingCache.TrackingCache.getInstance().sendEvent(__dep_class_TrackingEventIds.TrackingEventIds.WORLD_ASSIGNMENT);
    }
  };
  return BasicWorldAssignmentTrackingCommand;
}(__dep_class_BasicFirstSessionTrackingCommand.BasicFirstSessionTrackingCommand);
exports.BasicWorldAssignmentTrackingCommand = __s0local0;
