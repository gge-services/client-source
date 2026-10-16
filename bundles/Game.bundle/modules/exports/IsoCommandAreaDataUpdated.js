Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __s0local0 = function (__s1param0) {
  function IsoCommandAreaDataUpdated(__s3param0, __s3param1 = true) {
    var __s3local0 = this;
    __s3local0._triggerCallback = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._triggerCallback = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandAreaDataUpdated, __s1param0);
  IsoCommandAreaDataUpdated.prototype.execute = function () {
    __dep_export_CastleModel.CastleModel.militaryData.updateMilitaryData();
    if (this.areaData.areaInfo && this.areaData.areaInfo.isOwnMapobject) {
      __dep_export_CastleModel.CastleModel.researchData.setResearchBuildingData(this.isoData.objects.provider.getObjectByClass(__dep_export_ResearchBuildingVO.ResearchBuildingVO, __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.INNER_BUILDINGS));
      __dep_export_CastleModel.CastleModel.researchData.setResearchBoostBuildingData(this.isoData.objects.provider.getObjectByClass(__dep_export_UniversityBuildingVO.UniversityBuildingVO, __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.INNER_BUILDINGS));
      __dep_export_CastleModel.CastleModel.hunterData.setHunterBuildingData(this.isoData.objects.provider.getObjectByClass(__dep_export_AHunterBuildingVO.AHunterBuildingVO, __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.INNER_BUILDINGS));
      __dep_export_CastleModel.CastleModel.breweryData.setBreweryBuildingData(this.isoData.objects.provider.getObjectByClass(__dep_export_RelicBreweryBuildingVO.RelicBreweryBuildingVO, __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.INNER_BUILDINGS));
      __dep_export_CastleModel.CastleModel.equipData.setRelicEnchanterBuildingData(this.isoData.objects.provider.getObjectByClass(__dep_export_RelicEnchanterBuildingVO.RelicEnchanterBuildingVO, __dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.INNER_BUILDINGS));
    }
    this.isoData.objects.movements.updateInfos();
    if (this.areaData.commonInfo) {
      this.areaData.commonInfo.updateInfos();
    }
    if (this.triggerCallback) {
      __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_AreaDataEvent.AreaDataEvent(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED));
    }
  };
  Object.defineProperty(IsoCommandAreaDataUpdated.prototype, "triggerCallback", {
    get: function () {
      return this._triggerCallback;
    },
    enumerable: true,
    configurable: true
  });
  return IsoCommandAreaDataUpdated;
}(require("gge-module:export_AIsoCommandModel").AIsoCommandModel);
exports.IsoCommandAreaDataUpdated = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_IsoObjectGroupEnum = require("gge-module:export_IsoObjectGroupEnum");
var __dep_export_AHunterBuildingVO = require("gge-module:export_AHunterBuildingVO");
var __dep_export_ResearchBuildingVO = require("gge-module:export_ResearchBuildingVO");
var __dep_export_UniversityBuildingVO = require("gge-module:export_UniversityBuildingVO");
var __dep_export_RelicEnchanterBuildingVO = require("gge-module:export_RelicEnchanterBuildingVO");
var __dep_export_RelicBreweryBuildingVO = require("gge-module:export_RelicBreweryBuildingVO");
