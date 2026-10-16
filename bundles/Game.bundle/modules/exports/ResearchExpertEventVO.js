Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleResearchExpertEventDialogProperties = require("gge-module:export_CastleResearchExpertEventDialogProperties");
var __dep_export_ASpecialEventVO = require("gge-module:export_ASpecialEventVO");
var __s0local0 = function (__s1param0) {
  function ResearchExpertEventVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResearchExpertEventVO, __s1param0);
  Object.defineProperty(ResearchExpertEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return ResearchExpertEventVO.EVENT_BUILDING_WOD;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchExpertEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_ResearchExpert";
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  ResearchExpertEventVO.prototype.openDialog = function (__s13param0 = true) {
    this.executeOpenDialog(__s13param0, __dep_export_CastleResearchExpertEventDialog.CastleResearchExpertEventDialog, new __dep_export_CastleResearchExpertEventDialogProperties.CastleResearchExpertEventDialogProperties(this));
  };
  ResearchExpertEventVO.__initialize_static_members = function () {
    ResearchExpertEventVO.EVENT_BUILDING_WOD = 299;
  };
  return ResearchExpertEventVO;
}(__dep_export_ASpecialEventVO.ASpecialEventVO);
exports.ResearchExpertEventVO = __s0local0;
var __dep_export_CastleResearchExpertEventDialog = require("gge-module:export_CastleResearchExpertEventDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
__s0local0.__initialize_static_members();
