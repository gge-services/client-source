Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_TrackingEventIds = require("gge-module:class_TrackingEventIds");
var __dep_class_TrackingCache = require("gge-module:class_TrackingCache");
var __dep_class_BasicFirstSessionTrackingCommand = require("gge-module:class_BasicFirstSessionTrackingCommand");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __s0local0 = function (__s1param0) {
  function BasicConnectionTrackingCommand() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.alreadyTrackedDelayList = [];
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicConnectionTrackingCommand, __s1param0);
  BasicConnectionTrackingCommand.prototype.execute = function (__s5param0 = null) {
    if (this.commandIsAllowed) {
      var __s5local0 = __s5param0;
      var __s5local1 = __dep_class_TrackingCache.TrackingCache.getInstance().getEvent(__dep_class_TrackingEventIds.TrackingEventIds.CONNECTION);
      __s5local1.playerID = __dep_class_BasicModel.BasicModel.userData.playerID;
      __s5local1.cv = this.env.campainVars;
      __s5local1.delay = __s5local0.delay;
      __s5local1.roundTrip = __s5local0.roundTrip;
      __s5local1.bluebox = __s5local0.bluebox;
      __s5local1.accountId = this.env.accountId;
      __s5local1.storeId = this.env.storeId;
      var __s5local2 = __s5local1.delay / 60000;
      if (!this.wasExecutedForDelay(__s5local2)) {
        this.alreadyTrackedDelayList[__s5local2] = true;
        __dep_class_TrackingCache.TrackingCache.getInstance().sendEvent(__dep_class_TrackingEventIds.TrackingEventIds.CONNECTION);
      }
    }
  };
  BasicConnectionTrackingCommand.prototype.wasExecutedForDelay = function (__s9param0) {
    return this.alreadyTrackedDelayList[__s9param0];
  };
  return BasicConnectionTrackingCommand;
}(__dep_class_BasicFirstSessionTrackingCommand.BasicFirstSessionTrackingCommand);
exports.BasicConnectionTrackingCommand = __s0local0;
