Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleRecruitDialogProperties = require("gge-module:export_CastleRecruitDialogProperties");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonFactionBarracks() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonFactionBarracks, __s1param0);
  RingMenuButtonFactionBarracks.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_berimond_unit;
    this._disp.visible = __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5param2, "FactionBarracksBuildingVE") && __s5param2.buildingVO.buildingState.isFunctionally;
  };
  RingMenuButtonFactionBarracks.prototype.onClick = function (__s7param0, __s7param1) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitDialog.CastleRecruitDialog, new __dep_export_CastleRecruitDialogProperties.CastleRecruitDialogProperties(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES));
    this.parent.hide();
  };
  RingMenuButtonFactionBarracks.prototype.getInfoText = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("hire");
  };
  return RingMenuButtonFactionBarracks;
}(require("gge-module:export_RingMenuButtonRecruit").RingMenuButtonRecruit);
exports.RingMenuButtonFactionBarracks = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleRecruitDialog = require("gge-module:export_CastleRecruitDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRingMenuButton");
