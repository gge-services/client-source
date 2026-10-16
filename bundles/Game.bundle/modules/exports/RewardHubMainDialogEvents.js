Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ARewardHubDialogSublayer = require("gge-module:export_ARewardHubDialogSublayer");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function RewardHubMainDialogEvents(__s3param0, __s3param1) {
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RewardHubMainDialogEvents, __s1param0);
  RewardHubMainDialogEvents.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.subLayerDisp.mc_events.visible = true;
    this.subLayerDisp.mc_season.visible = false;
  };
  RewardHubMainDialogEvents.prototype.dataList = function () {
    var __s7local0 = [];
    for (var __s7local1 = 0; __s7local1 < 50; __s7local1++) {
      var __s7local2 = {
        mainEventID: __dep_exact_9e901e8e2483a22f.MathBase.random(1, 150, true),
        subEventID: __dep_exact_9e901e8e2483a22f.MathBase.random(1, 150, true),
        points: 3
      };
      __s7local0.push(__s7local2);
    }
    this.updateTabButton(__s7local0.length);
    return __s7local0;
  };
  RewardHubMainDialogEvents.prototype.updateTabButton = function (__s11param0) {
    this.parent.setEventAmount(__s11param0);
  };
  RewardHubMainDialogEvents.prototype.onClick = function (__s13param0) {
    __s1param0.prototype.onClick.call(this, __s13param0);
    switch (__s13param0.target) {
      case this.subLayerDisp.mc_events.btn_triggerAll:
      case this.subLayerDisp.mc_events.btn_deleteAll:
    }
  };
  return RewardHubMainDialogEvents;
}(__dep_export_ARewardHubDialogSublayer.ARewardHubDialogSublayer);
exports.RewardHubMainDialogEvents = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
