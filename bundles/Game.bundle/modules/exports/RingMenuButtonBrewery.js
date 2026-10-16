Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonBrewery() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonBrewery, __s1param0);
  RingMenuButtonBrewery.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_mead;
    this._disp.enableButton = true;
    this._disp.visible = __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5param2, "RelicBreweryBuildingVE") && __s5param2.buildingVO.buildingState.isFunctionally;
  };
  RingMenuButtonBrewery.prototype.onClick = function (__s7param0, __s7param1) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__dep_export_CastleBreweryDialog.CastleBreweryDialog);
    this.parent.hide();
  };
  RingMenuButtonBrewery.prototype.getInfoText = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_relicBrewery_insufficientResources_toBreweryButton");
  };
  return RingMenuButtonBrewery;
}(require("gge-module:export_ARingMenuButton").ARingMenuButton);
exports.RingMenuButtonBrewery = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleBreweryDialog = require("gge-module:export_CastleBreweryDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRingMenuButton");
