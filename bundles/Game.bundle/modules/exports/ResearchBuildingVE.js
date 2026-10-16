Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleResearchEvent = require("gge-module:export_CastleResearchEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function ResearchBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResearchBuildingVE, __s1param0);
  ResearchBuildingVE.prototype.addEventListener = function () {
    __dep_export_CastleModel.CastleModel.researchData.addEventListener(__dep_export_CastleResearchEvent.CastleResearchEvent.RESEARCH_INFO_UPDATE, this.bindFunction(this.onResearchDataUpdate));
    __s1param0.prototype.addEventListener.call(this);
  };
  ResearchBuildingVE.prototype.removeEventListener = function () {
    __dep_export_CastleModel.CastleModel.researchData.removeEventListener(__dep_export_CastleResearchEvent.CastleResearchEvent.RESEARCH_INFO_UPDATE, this.bindFunction(this.onResearchDataUpdate));
    __s1param0.prototype.removeEventListener.call(this);
  };
  ResearchBuildingVE.prototype.createStatusIcons = function () {
    __s1param0.prototype.createStatusIcons.call(this);
    if (this.buildingVO.buildingState.isFunctionally && !this.statusIcons.isUpgradeIconActive) {
      this.statusIcons.addIcon(__dep_export_CastleModel.CastleModel.researchData.isSomeResearchActive ? __dep_export_IsoStatusIconEnum.IsoStatusIconEnum.PRODUCTIVE : __dep_export_IsoStatusIconEnum.IsoStatusIconEnum.UNPRODUCTIVE);
    }
  };
  ResearchBuildingVE.prototype.getRingMenuButtons = function () {
    var __s12local0 = __s1param0.prototype.getRingMenuButtons.call(this);
    __s12local0.push(new __dep_export_RingMenuButtonResearch.RingMenuButtonResearch());
    return __s12local0;
  };
  ResearchBuildingVE.prototype.onResearchDataUpdate = function (__s14param0) {
    this.updateStatusIcon();
  };
  return ResearchBuildingVE;
}(require("gge-module:export_ABasicBuildingVE").ABasicBuildingVE);
exports.ResearchBuildingVE = __s0local0;
var __dep_export_RingMenuButtonResearch = require("gge-module:export_RingMenuButtonResearch");
var __dep_export_IsoStatusIconEnum = require("gge-module:export_IsoStatusIconEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
