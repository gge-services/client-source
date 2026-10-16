Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AIsoFloorMarkVE = require("gge-module:export_AIsoFloorMarkVE");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function IsoTutorialMarkerVE() {
    var __s3local0 = this;
    __s3local0._gridPos = new __s0local0();
    __s3local0._dimension = new __s0local0(5, 5);
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoTutorialMarkerVE, __s1param0);
  IsoTutorialMarkerVE.prototype.createDisp = function () {
    try {
      this.dispComponent.addDisp(new (__dep_exact_81dacdf05bd32292_1.getDefinitionByNameFromLibrary("Basic_Tutorialmarker_" + this.dimension.x + "x" + this.dimension.y))());
    } catch (__s8local0) {}
  };
  IsoTutorialMarkerVE.prototype.show = function (__s10param0, __s10param1) {
    this._gridPos = __s10param0;
    this._dimension = __s10param1;
    this.updateDisp();
    this.elementContainer.visible = true;
  };
  IsoTutorialMarkerVE.prototype.hide = function () {
    this.elementContainer.visible = false;
  };
  IsoTutorialMarkerVE.prototype.getScreenPos = function () {
    return this.isoRenderer.camera.getScreenPosByGridPos(new __s0local0(this.gridPos.x, this.gridPos.y));
  };
  Object.defineProperty(IsoTutorialMarkerVE.prototype, "gridPos", {
    get: function () {
      return this._gridPos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoTutorialMarkerVE.prototype, "dimension", {
    get: function () {
      return this._dimension;
    },
    enumerable: true,
    configurable: true
  });
  return IsoTutorialMarkerVE;
}(__dep_export_AIsoFloorMarkVE.AIsoFloorMarkVE);
exports.IsoTutorialMarkerVE = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "IIngameUICapable");
