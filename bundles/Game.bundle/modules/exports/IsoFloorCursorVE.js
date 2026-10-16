Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AIsoFloorMarkVE = require("gge-module:export_AIsoFloorMarkVE");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function IsoFloorCursorVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoFloorCursorVE, __s1param0);
  IsoFloorCursorVE.prototype.createDisp = function () {
    this.dispComponent.addDisp(__dep_export_IsoHelper.IsoHelper.view.createFloorDisp(new __s0local0(1, 1), 0, 0.2));
  };
  IsoFloorCursorVE.prototype.getScreenPos = function () {
    return this.isoRenderer.camera.getScreenPosByGridPos(this.isoRenderer.mouse.getMouseGridPos());
  };
  Object.defineProperty(IsoFloorCursorVE.prototype, "dispOffset", {
    get: function () {
      return new __s0local0();
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AIsoFloorMarkVE.AIsoFloorMarkVE.prototype, "dispOffset").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  return IsoFloorCursorVE;
}(__dep_export_AIsoFloorMarkVE.AIsoFloorMarkVE);
exports.IsoFloorCursorVE = __s0local1;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "IIngameUICapable");
