Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoAdditionalClipEnum = require("gge-module:export_IsoAdditionalClipEnum");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __dep_export_AInteractiveIsoObjectVE = require("gge-module:export_AInteractiveIsoObjectVE");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function EventJudgementVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EventJudgementVE, __s1param0);
  EventJudgementVE.prototype.createDisp = function () {
    if (!this.isoRenderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILD_MODE) && !this.isoRenderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW)) {
      this.dispComponent.addClip(this.loadExternalClip(this.assetClipName, (__s5local0 = this.assetFileName).substr(0, 1).toUpperCase() + __s5local0.slice(1)));
    }
    var __s5local0;
  };
  EventJudgementVE.prototype.getVELayerType = function () {
    return __dep_export_IsoLayerEnum.IsoLayerEnum.UNKNOWN;
  };
  EventJudgementVE.prototype.getScreenPos = function () {
    return new __s0local0();
  };
  EventJudgementVE.prototype.createAdditionalClips = function () {
    this.additionalClips.addClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.EXCLAMATION_MARK);
  };
  EventJudgementVE.prototype.onMouseClick = function () {
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_JUDGEMENT_SPOT_DIALOG_COMMAND);
  };
  EventJudgementVE.prototype.onRenderStrategyChanged = function (__s16param0) {
    this.updateDisp();
  };
  Object.defineProperty(EventJudgementVE.prototype, "judgementEventVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return EventJudgementVE;
}(__dep_export_AInteractiveIsoObjectVE.AInteractiveIsoObjectVE);
exports.EventJudgementVE = __s0local1;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "IIngameUICapable");
