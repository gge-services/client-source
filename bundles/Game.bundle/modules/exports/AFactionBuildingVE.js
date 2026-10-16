Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_IsoAdditionalClipEnum = require("gge-module:export_IsoAdditionalClipEnum");
var __s0local0 = function (__s1param0) {
  function AFactionBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AFactionBuildingVE, __s1param0);
  AFactionBuildingVE.prototype.createAdditionalClips = function () {
    __s1param0.prototype.createAdditionalClips.call(this);
    if (this.buildingVO.buildingState.isFunctionally) {
      this.additionalClips.addClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.CAMP_FIRE);
    }
  };
  AFactionBuildingVE.prototype.getDispClipColor = function () {
    var __s8local0 = [];
    __s8local0.push(new __dep_exact_9e901e8e2483a22f.ClipColor("flag", __dep_export_CrestHelper.CrestHelper.getPlayerOrFactionCrest(__dep_export_CastleModel.CastleModel.areaData.activeOwnerInfo).colorsTwo));
    return __s8local0;
  };
  AFactionBuildingVE.prototype.getFlagClipColor = function () {
    var __s10local0 = [];
    __s10local0.push(new __dep_exact_9e901e8e2483a22f.ClipColor("flag", __dep_export_CrestHelper.CrestHelper.getPlayerOrFactionCrest(this.isoRenderer.isoData.areaData.areaInfo.ownerInfo).colorsFour));
    return __s10local0;
  };
  return AFactionBuildingVE;
}(require("gge-module:export_ABasicBuildingVE").ABasicBuildingVE);
exports.AFactionBuildingVE = __s0local0;
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
