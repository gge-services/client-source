Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonTax() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonTax, __s1param0);
  RingMenuButtonTax.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_tax;
    this._disp.enableButton = true;
    this._disp.visible = __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5param2, "KeepBuildingVE") && __s5param2.buildingVO.buildingState.isFunctionally;
  };
  RingMenuButtonTax.prototype.onClick = function (__s7param0, __s7param1) {
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_ACTIVE_TAX_DIALOG_COMMAND);
    this.parent.hide();
  };
  RingMenuButtonTax.prototype.getInfoText = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("panel_action_tax");
  };
  return RingMenuButtonTax;
}(require("gge-module:export_ARingMenuButton").ARingMenuButton);
exports.RingMenuButtonTax = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRingMenuButton");
