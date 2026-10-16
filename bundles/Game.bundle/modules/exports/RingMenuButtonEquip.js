Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEquipmentDialogProperties = require("gge-module:export_CastleEquipmentDialogProperties");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonEquip() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonEquip, __s1param0);
  RingMenuButtonEquip.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_equip;
    this._disp.visible = __s5param2.buildingVO.usesLords;
    this._disp.enableButton = __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_EQUIPMENT;
  };
  RingMenuButtonEquip.prototype.onClick = function (__s7param0, __s7param1) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.targetBuilding, "EstateBuildingVE")) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEquipmentDialog.CastleEquipmentDialog, new __dep_export_CastleEquipmentDialogProperties.CastleEquipmentDialogProperties(null, __dep_export_CastleModel.CastleModel.lordData.barons[0].id));
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.targetBuilding, "MilitarycampBuildingVE")) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEquipmentDialog.CastleEquipmentDialog, new __dep_export_CastleEquipmentDialogProperties.CastleEquipmentDialogProperties(null, __dep_export_CastleModel.CastleModel.lordData.commanders[0].id));
    }
    this.parent.hide();
  };
  RingMenuButtonEquip.prototype.getInfoText = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("panel_multiinfo_equipment");
  };
  return RingMenuButtonEquip;
}(require("gge-module:export_ARingMenuButton").ARingMenuButton);
exports.RingMenuButtonEquip = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleEquipmentDialog = require("gge-module:export_CastleEquipmentDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRingMenuButton");
