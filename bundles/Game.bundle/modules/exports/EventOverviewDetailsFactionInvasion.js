Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function EventOverviewDetailsFactionInvasion() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.dispClassName = "list_rewards_berimond_invasion";
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EventOverviewDetailsFactionInvasion, __s1param0);
  EventOverviewDetailsFactionInvasion.prototype.updateRewards = function (__s5param0, __s5param1) {
    var __s5local0 = __s5param0.singleEventVO(false).rewardLists;
    var __s5local1 = __s5param0.singleEventVO(true).rewardLists;
    for (var __s5local2 = 0; __s5local2 < 3; __s5local2++) {
      this.fillList(__s5local0[__s5local2], __s5local2);
    }
    for (; __s5local2 < 6; __s5local2++) {
      this.fillList(__s5local1[__s5local2 - 3], __s5local2);
    }
  };
  return EventOverviewDetailsFactionInvasion;
}(require("gge-module:export_EventOverviewDetailedEventView").EventOverviewDetailedEventView);
exports.EventOverviewDetailsFactionInvasion = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
