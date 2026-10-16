Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");
var __dep_export_ASpotJudgementVE = require("gge-module:export_ASpotJudgementVE");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function KeepSpotJudgementVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(KeepSpotJudgementVE, __s1param0);
  KeepSpotJudgementVE.prototype.updateSpot = function () {
    __s1param0.prototype.updateSpot.call(this);
    this.updatePosition();
    __dep_export_Iso.Iso.controller.processor.executeCommand(new __dep_export_IsoCommandZSortObject.IsoCommandZSortObject(this));
  };
  KeepSpotJudgementVE.prototype.getVELayerType = function () {
    return __dep_export_IsoLayerEnum.IsoLayerEnum.ISO_OBJECTS;
  };
  KeepSpotJudgementVE.prototype.getScreenPos = function () {
    var __s9local0 = this.getGridPosByGate();
    this.spotVO.x = __s9local0.x;
    this.spotVO.y = __s9local0.y;
    this.spotVO.updateData();
    return this.isoRenderer.camera.getScreenPosByGridPos(__s9local0);
  };
  KeepSpotJudgementVE.prototype.getGridPosByGate = function () {
    var __s11local0 = new __s0local0();
    var __s11local1 = this.vo && this.vo.isoData ? this.vo.isoData.objects.defences.gate : null;
    if (!__s11local1) {
      return __s11local0;
    }
    var __s11local2 = KeepSpotJudgementVE.BRIDGE_START_OFFSET + KeepSpotJudgementVE.BRIDGE_LENGTH + KeepSpotJudgementVE.DISTANCE_TO_BRIDGE;
    if (__s11local1.rotation == 0) {
      __s11local0.x = __s11local1.x + __s11local2;
      __s11local0.y = __s11local1.y + KeepSpotJudgementVE.BRIDGE_LANE_OFFSET;
    } else {
      __s11local0.x = __s11local1.x + KeepSpotJudgementVE.BRIDGE_LANE_OFFSET;
      __s11local0.y = __s11local1.y + __s11local2;
    }
    return __s11local0;
  };
  KeepSpotJudgementVE.BRIDGE_START_OFFSET = 2;
  KeepSpotJudgementVE.BRIDGE_LENGTH = 3;
  KeepSpotJudgementVE.BRIDGE_LANE_OFFSET = 1;
  KeepSpotJudgementVE.DISTANCE_TO_BRIDGE = 2;
  return KeepSpotJudgementVE;
}(__dep_export_ASpotJudgementVE.ASpotJudgementVE);
exports.KeepSpotJudgementVE = __s0local1;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_IsoCommandZSortObject = require("gge-module:export_IsoCommandZSortObject");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "IIngameUICapable");
