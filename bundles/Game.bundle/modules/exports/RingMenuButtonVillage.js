Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonVillage() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonVillage, __s1param0);
  RingMenuButtonVillage.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_village;
    this._disp.visible = __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5param2, "ContorBuildingVE");
    this._disp.enableButton = this.isOutOfTutorial();
  };
  RingMenuButtonVillage.prototype.onClick = function (__s7param0, __s7param1) {
    this.parent.hide();
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleResourceVillageOverviewDialog.CastleResourceVillageOverviewDialog);
  };
  RingMenuButtonVillage.prototype.getInfoText = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_villageListOverview_title");
  };
  return RingMenuButtonVillage;
}(require("gge-module:export_ARingMenuButton").ARingMenuButton);
exports.RingMenuButtonVillage = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleResourceVillageOverviewDialog = require("gge-module:export_CastleResourceVillageOverviewDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRingMenuButton");
