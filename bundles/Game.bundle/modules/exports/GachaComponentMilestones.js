Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_GachaEvent = require("gge-module:export_GachaEvent");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_GachaMilestoneTooltipHelper = require("gge-module:export_GachaMilestoneTooltipHelper");
var __dep_export_GachaMilestoneTooltip = require("gge-module:export_GachaMilestoneTooltip");
var __s0local0 = function (__s1param0) {
  function GachaComponentMilestones(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.disp.btn_info], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __s3local0.itxt_points = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.txt_points, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    __s3local0.itxt_pointsLabel = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3local0.disp.txt_pointsLabel, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GachaComponentMilestones, __s1param0);
  GachaComponentMilestones.prototype.onShow = function () {
    var __s5local0 = this.getEventVO().pointThresholds.length > 0;
    this.setVisibility(__s5local0);
    if (__s5local0) {
      __s1param0.prototype.onShow.call(this);
      this.updateMilestones();
    }
  };
  GachaComponentMilestones.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    this.destroyCollectableRenderList();
  };
  GachaComponentMilestones.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_GachaEvent.GachaEvent.UPDATED, this.bindFunction(this.onGachaUpdate));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_GachaEvent.GachaEvent.MULTIPULL_CHANGED, this.bindFunction(this.onMultiPullChange));
  };
  GachaComponentMilestones.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_GachaEvent.GachaEvent.UPDATED, this.bindFunction(this.onGachaUpdate));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_GachaEvent.GachaEvent.MULTIPULL_CHANGED, this.bindFunction(this.onMultiPullChange));
  };
  GachaComponentMilestones.prototype.onGachaUpdate = function (__s14param0) {
    if (__s14param0.eventVO.eventId == this.getEventVO().eventId) {
      this.updateMilestones();
    }
  };
  GachaComponentMilestones.prototype.onMultiPullChange = function (__s17param0) {
    if (__s17param0.eventVO.eventId == this.getEventVO().eventId) {
      this.updateMilestones();
    }
  };
  GachaComponentMilestones.prototype.onMouseOver = function (__s20param0) {
    __s1param0.prototype.onMouseOver.call(this, __s20param0);
    var __s20local0 = __s20param0.target.name;
    if (__s20local0 && __s20local0.startsWith("reward")) {
      this.showRewardTooltip(__s20param0.target);
    }
  };
  GachaComponentMilestones.prototype.updateMilestones = function () {
    this.itxt_points.textContentVO.numberValue = this.getEventVO().ownPoints || 0;
    this.itxt_pointsLabel.textContentVO.textId = "gachaPull_milestone_" + this.getEventVO().assetName();
    var __s23local0 = this.updateProgressBar(this.disp.mc_progress.progressbar, this.getEventVO().ownPoints);
    this.updateProgressBar(this.disp.mc_progress.mc_foreshadow, this.getEventVO().ownPoints + this.getEventVO().currentMultiPull);
    for (var __s23local1 = 0; __s23local1 < GachaComponentMilestones.MILESTONES; __s23local1++) {
      this.disp["reward" + __s23local1].gotoAndStop(__s23local1 < __s23local0 ? 2 : 1);
      this.disp["reward" + __s23local1].mouseChildren = false;
    }
  };
  GachaComponentMilestones.prototype.updateProgressBar = function (__s27param0, __s27param1) {
    if (__s27param0) {
      var __s27local0 = this.getEventVO().pointThresholds;
      var __s27local1 = 0;
      for (var __s27local2 = 0; __s27local2 < GachaComponentMilestones.MILESTONES; __s27local2++) {
        if (__s27param1 >= __s27local0[__s27local2]) {
          __s27local1++;
        }
      }
      if (__s27local1 >= GachaComponentMilestones.MILESTONES) {
        __s27param0.scaleY = 1;
      } else {
        var __s27local3 = __s27local1 / GachaComponentMilestones.MILESTONES;
        var __s27local4 = __s27local1 > 0 ? __s27local0[__s27local1 - 1] : 0;
        var __s27local5 = (__s27param1 - __s27local4) / (__s27local0[__s27local1] - __s27local4) / GachaComponentMilestones.MILESTONES;
        __s27param0.scaleY = __dep_exact_9e901e8e2483a22f.MathBase.clamp(__s27local3 + __s27local5, 0, 1);
      }
      return __s27local1;
    }
  };
  GachaComponentMilestones.prototype.showRewardTooltip = function (__s35param0) {
    var __s35local0 = parseInt(__s35param0.name.replace("reward", ""));
    var __s35local1 = this.getEventVO().rewardLists[__s35local0];
    var __s35local2 = [];
    if (this.getEventVO().ownPoints >= this.getEventVO().pointThresholds[__s35local0]) {
      __s35local2.push(__dep_exact_92d05af59ee2ff30.Localize.text("Completed"));
    } else {
      __s35local2.push(__dep_exact_92d05af59ee2ff30.Localize.text("gachaPull_milestone_tooltip_amount_" + this.getEventVO().assetName(), [this.getEventVO().ownPoints, this.getEventVO().pointThresholds[__s35local0]]));
      __s35local2.push(__dep_exact_92d05af59ee2ff30.Localize.text("gachaPull_milestone_tooltip_amountLeft_" + this.getEventVO().assetName(), [this.getEventVO().pointThresholds[__s35local0] - this.getEventVO().ownPoints]));
    }
    __dep_export_GachaMilestoneTooltipHelper.GachaMilestoneTooltipHelper.showToolTip(__s35param0, __s35local2, __s35local1, __dep_export_GachaMilestoneTooltip.GachaMilestoneTooltip.TARGET_RIGHT);
  };
  GachaComponentMilestones.prototype.getEventVO = function () {
    return this._params[0];
  };
  GachaComponentMilestones.MILESTONES = 4;
  return GachaComponentMilestones;
}(require("gge-module:export_AGachaComponent").AGachaComponent);
exports.GachaComponentMilestones = __s0local0;
