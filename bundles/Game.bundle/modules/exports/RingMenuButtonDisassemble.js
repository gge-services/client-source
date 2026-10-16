Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCharacterYesNoOKDialogProperties = require("gge-module:export_CastleCharacterYesNoOKDialogProperties");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonDisassemble() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonDisassemble, __s1param0);
  RingMenuButtonDisassemble.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_disassemble;
    this._disp.visible = __s5param2.buildingVO.canBeDisassembled;
    switch (__s5param2.buildingVO.buildingState) {
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
      case __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.REPAIR_STOPPED:
        this._disp.visible = false;
    }
    this._disp.enableButton = __dep_export_CastleModel.CastleModel.userData.hasLevelFor(__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_DESTRUCTION);
    if (__s5param2.buildingVO.isDistrict) {
      var __s5local0 = __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo;
      var __s5local1 = __dep_exact_f855840627e6e145.int(__s5param2.buildingVO.districtTypeID);
      this._disp.enableButton = __s5local0 && __s5local0.isDistrictEmpty(__s5local1);
      this._disp.toolTipText = "ringmenu_demolish_districtNotEmpty";
    } else {
      this._disp.toolTipText = null;
    }
  };
  RingMenuButtonDisassemble.prototype.onClick = function (__s10param0, __s10param1) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.targetBuilding, "DworkshopBuildingVE") && this.targetBuilding.unitProductionBuildingVO.isProductive || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.targetBuilding, "WorkshopBuildingVE") && this.targetBuilding.unitProductionBuildingVO.isProductive || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.targetBuilding, "BarracksBuildingVE") && this.targetBuilding.unitProductionBuildingVO.isProductive) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog, new __dep_export_CastleCharacterYesNoOKDialogProperties.CastleCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_disassembleWhileProductiv"), 4, null, null, false));
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardYesNoDialog.CastleStandardYesNoDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_disassembleBuilding_copy"), this.bindFunction(this.onDisassemble)));
    }
  };
  RingMenuButtonDisassemble.prototype.onDisassemble = function (__s14param0 = null) {
    __dep_export_Iso.Iso.controller.server.demolishBuilding(this.targetBuilding.vo.objectId);
  };
  RingMenuButtonDisassemble.prototype.getAction = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_RingMenuBuilding.RingMenuBuilding.ACTION_DISASSEMBLE);
  };
  return RingMenuButtonDisassemble;
}(require("gge-module:export_ARingMenuButton").ARingMenuButton);
exports.RingMenuButtonDisassemble = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleCharacterYesNoOKDialog = require("gge-module:export_CastleCharacterYesNoOKDialog");
var __dep_export_CastleStandardYesNoDialog = require("gge-module:export_CastleStandardYesNoDialog");
var __dep_export_RingMenuBuilding = require("gge-module:export_RingMenuBuilding");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRingMenuButton");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
