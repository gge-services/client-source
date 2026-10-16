Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_IsoLayerEnum = require("gge-module:export_IsoLayerEnum");
var __dep_export_ASpotJudgementVE = require("gge-module:export_ASpotJudgementVE");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ResourceFieldSpotJudgementVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourceFieldSpotJudgementVE, __s1param0);
  ResourceFieldSpotJudgementVE.prototype.updateSpot = function () {
    __s1param0.prototype.updateSpot.call(this);
    this.updatePosition();
  };
  ResourceFieldSpotJudgementVE.prototype.getVELayerType = function () {
    return __dep_export_IsoLayerEnum.IsoLayerEnum.ISO_OBJECTS;
  };
  ResourceFieldSpotJudgementVE.prototype.getScreenPos = function () {
    var __s9local0 = this.getGridPosByFoodResourceFieldType();
    this.spotVO.x = __s9local0.x;
    this.spotVO.y = __s9local0.y;
    this.spotVO.updateData();
    return this.isoRenderer.camera.getScreenPosByGridPos(__s9local0);
  };
  ResourceFieldSpotJudgementVE.prototype.getGridPosByFoodResourceFieldType = function () {
    var __s11local0 = new __s0local0();
    var __s11local1 = __dep_exact_81dacdf05bd32292.castAs(this.isoRenderer.objects.provider.getObjectByType(__dep_export_IsoObjectEnum.IsoObjectEnum.FOOD_RESOURCE_FIELD), "FoodResourceFieldVE");
    if (__s11local1) {
      __s11local0 = __s11local1.getJudgementSpotGridPos();
    }
    return __s11local0;
  };
  return ResourceFieldSpotJudgementVE;
}(__dep_export_ASpotJudgementVE.ASpotJudgementVE);
exports.ResourceFieldSpotJudgementVE = __s0local1;
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "IIngameUICapable");
