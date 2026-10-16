Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonHunter() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonHunter, __s1param0);
  RingMenuButtonHunter.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_hunter;
    this._disp.visible = __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5param2, "AHunterBuildingVE") && __dep_export_CastleModel.CastleModel.hunterData.isHunterBuildingBuilt;
  };
  RingMenuButtonHunter.prototype.onClick = function (__s7param0, __s7param1) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleHunterDialog.CastleHunterDialog);
    this.parent.hide();
  };
  RingMenuButtonHunter.prototype.getInfoText = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_hunter_title");
  };
  return RingMenuButtonHunter;
}(require("gge-module:export_ARingMenuButton").ARingMenuButton);
exports.RingMenuButtonHunter = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleHunterDialog = require("gge-module:export_CastleHunterDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRingMenuButton");
