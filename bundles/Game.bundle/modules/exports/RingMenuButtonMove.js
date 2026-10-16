Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ARingMenuButton = require("gge-module:export_ARingMenuButton");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonMove() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonMove, __s1param0);
  RingMenuButtonMove.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_move;
    this._disp.visible = __s5param2.vo.isMovable;
    if (this._disp.visible) {
      var __s5local0 = 1;
      if (__s5param2.vo.isInBuildingDistrict) {
        __s5local0 = __dep_exact_f855840627e6e145.int(__s5param2.buildingVO.districtTypeID) + 1;
      }
      this._disp.gotoAndStop(__s5local0);
    }
  };
  RingMenuButtonMove.prototype.onClick = function (__s9param0, __s9param1) {
    var __s9local0 = this.targetBuilding;
    __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
    __dep_export_Iso.Iso.renderer.mouse.startDraggingTarget(__s9local0, false);
    if (__s9local0.vo.isInBuildingDistrict) {
      __dep_export_ARingMenuButton.ARingMenuButton.layoutManager.hideAllDialogs();
    }
  };
  RingMenuButtonMove.prototype.getInfoText = function () {
    if (this.targetBuilding.vo.isInBuildingDistrict) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("ringmenu_removeFromDistrict");
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text("ringmenu_move");
    }
  };
  return RingMenuButtonMove;
}(__dep_export_ARingMenuButton.ARingMenuButton);
exports.RingMenuButtonMove = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRingMenuButton");
