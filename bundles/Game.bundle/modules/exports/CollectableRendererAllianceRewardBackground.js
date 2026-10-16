Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function (__s1param0) {
  function CollectableRendererAllianceRewardBackground() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableRendererAllianceRewardBackground, __s1param0);
  CollectableRendererAllianceRewardBackground.prototype.reset = function () {
    if (this.clips.allianceRewardBackgroundMc) {
      this.clips.allianceRewardBackgroundMc.visible = false;
    }
  };
  CollectableRendererAllianceRewardBackground.prototype.update = function () {
    if (this.clips.allianceRewardBackgroundMc) {
      this.clips.allianceRewardBackgroundMc.visible = this.itemVO.grantType == __dep_exact_26a421b704832cff.RewardConst.ALLIANCE;
    }
  };
  CollectableRendererAllianceRewardBackground.prototype.setVisibility = function (__s11param0) {
    if (this.clips.allianceRewardBackgroundMc) {
      this.clips.allianceRewardBackgroundMc.visible = __s11param0;
    }
  };
  return CollectableRendererAllianceRewardBackground;
}(require("gge-module:export_ACollectableRenderComponent").ACollectableRenderComponent);
exports.CollectableRendererAllianceRewardBackground = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
