Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ARingMenuButton = require("gge-module:export_ARingMenuButton");
var __s0local0 = function (__s1param0) {
  function RingMenuButtonRotate() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RingMenuButtonRotate, __s1param0);
  RingMenuButtonRotate.prototype.init = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1, __s5param2);
    this._disp = __s5param1.btn_rotate;
    this._disp.enableButton = true;
    this._disp.visible = __s5param2.vo.canBeRotated && !__s5param2.vo.isInBuildingDistrict;
  };
  RingMenuButtonRotate.prototype.onClick = function (__s7param0, __s7param1) {
    var __s7local0 = this.targetBuilding;
    if (!__s7local0.vo.isInBuildingDistrict) {
      __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
    }
    var __s7local1 = __dep_exact_f855840627e6e145.int(__s7local0.vo.rotation);
    __s7local0.vo.rotate();
    if (__dep_export_Iso.Iso.data.grid.isDimensionFreeForBuild(__s7local0.vo.pos, __s7local0.vo.dimension, __s7local0.vo.objectId) || __s7local0.vo.isInBuildingDistrict) {
      __dep_export_Iso.Iso.controller.dataUpdater.onIsoObjectMoved(__s7local0.vo, __s7local0.vo.pos, __s7local0.vo.rotation);
      __s7local0.updateRotation();
    } else {
      __s7local0.vo.rotation = __s7local1;
      __dep_export_Iso.Iso.renderer.mouse.startDraggingTarget(this.targetBuilding, false);
      __s7local0.vo.rotate();
      __s7local0.updateRotation();
      __s7local0.renewCollisionFloor();
      __dep_export_ARingMenuButton.ARingMenuButton.layoutManager.isoScreen.isoRenderer.mouse.onDragTileMove();
    }
  };
  RingMenuButtonRotate.prototype.getInfoText = function () {
    return __dep_exact_92d05af59ee2ff30.Localize.text("rotate");
  };
  return RingMenuButtonRotate;
}(__dep_export_ARingMenuButton.ARingMenuButton);
exports.RingMenuButtonRotate = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IRingMenuButton");
