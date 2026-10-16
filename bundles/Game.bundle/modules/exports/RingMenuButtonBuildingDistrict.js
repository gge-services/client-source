Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_BuildingDistrictDialogProperties = require("gge-module:export_BuildingDistrictDialogProperties");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonBuildingDistrict() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonBuildingDistrict, __s1param0);
  RingMenuButtonBuildingDistrict.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_buildingDistrict;
    this._disp.visible = __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5param2, "ADistrictBuildingVE") && __s5param2.buildingVO.buildingState.isFunctionally;
    this._disp.gotoAndStop(__dep_exact_f855840627e6e145.int(__s5param2.buildingVO.districtTypeID));
  };
  RingMenuButtonBuildingDistrict.prototype.onClick = function (__s7param0, __s7param1) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_BuildingDistrictDialog.BuildingDistrictDialog, new __dep_export_BuildingDistrictDialogProperties.BuildingDistrictDialogProperties(this.targetBuilding.buildingVO));
    this.parent.hide();
  };
  RingMenuButtonBuildingDistrict.prototype.getInfoText = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("ringmenu_enterDistrict");
  };
  return RingMenuButtonBuildingDistrict;
}(require("gge-module:export_ARingMenuButton").ARingMenuButton);
exports.RingMenuButtonBuildingDistrict = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_BuildingDistrictDialog = require("gge-module:export_BuildingDistrictDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRingMenuButton");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
