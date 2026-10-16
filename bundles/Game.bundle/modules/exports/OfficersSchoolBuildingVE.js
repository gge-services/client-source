Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AProductionBuildingVE = require("gge-module:export_AProductionBuildingVE");
var __s0local0 = function (__s1param0) {
  function OfficersSchoolBuildingVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OfficersSchoolBuildingVE, __s1param0);
  OfficersSchoolBuildingVE.prototype.getRingMenuButtons = function () {
    var __s5local0 = __s1param0.prototype.getRingMenuButtons.call(this);
    __s5local0.push(new __dep_export_RingMenuButtonOfficerSchool.RingMenuButtonOfficerSchool());
    return __s5local0;
  };
  Object.defineProperty(OfficersSchoolBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Recruit;
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AProductionBuildingVE.AProductionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  return OfficersSchoolBuildingVE;
}(__dep_export_AProductionBuildingVE.AProductionBuildingVE);
exports.OfficersSchoolBuildingVE = __s0local0;
var __dep_export_RingMenuButtonOfficerSchool = require("gge-module:export_RingMenuButtonOfficerSchool");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
