Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonRepair() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonRepair, __s1param0);
  RingMenuButtonRepair.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_repair;
    this._disp.visible = __s5param2.buildingVO.needsReparation;
    switch (__s5param2.buildingVO.buildingState) {
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
        this._disp.visible = false;
    }
  };
  RingMenuButtonRepair.prototype.onClick = function (__s8param0, __s8param1) {
    __dep_export_Iso.Iso.controller.server.repairBuilding(this.targetBuilding.vo.objectId);
  };
  RingMenuButtonRepair.prototype.getAction = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_RingMenuBuilding.RingMenuBuilding.ACTION_REPAIR);
  };
  return RingMenuButtonRepair;
}(require("gge-module:export_ARingMenuButton").ARingMenuButton);
exports.RingMenuButtonRepair = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_RingMenuBuilding = require("gge-module:export_RingMenuBuilding");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRingMenuButton");
