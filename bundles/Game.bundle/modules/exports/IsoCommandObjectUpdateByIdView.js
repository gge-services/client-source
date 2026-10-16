Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function IsoCommandObjectUpdateByIdView(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._objectId = -1;
    __s3local0._wasFastCompleted = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._objectId = __s3param0;
    __s3local0._wasFastCompleted = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandObjectUpdateByIdView, __s1param0);
  IsoCommandObjectUpdateByIdView.prototype.execute = function () {
    var __s5local0 = this.isoRenderer.objects.provider.getObjectById(this._objectId);
    if (__s5local0) {
      if (this.mouseHandler.draggedTarget == __s5local0) {
        this.mouseHandler.cancelDraggedTarget();
      }
      var __s5local1 = false;
      if (this.mouseHandler.selectedTarget == __s5local0) {
        this.mouseHandler.deselectTarget();
        __s5local1 = true;
      }
      if (this.mouseHandler.focusedTarget == __s5local0) {
        this.mouseHandler.unFocusTarget();
      }
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5local0, "CastlewallDefenceVE")) {
        this.viewObjects.defenceObjects.updateWalls();
        this.viewObjects.defenceObjects.updateTowers();
      } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5local0, "BasicMoatVE")) {
        this.viewObjects.defenceObjects.initMoat();
        (__s5local0 = this.viewObjects.defenceObjects.moat).updateDisp();
      } else {
        __s5local0.updateDisp();
      }
      var __s5local2 = __s5local0;
      var __s5local3 = false;
      if (__s5local2 && !this.mouseHandler.isDragging && !this.mouseHandler.selectedTarget && __s5local2.interactiveVO.isRingmenuAvailable && (__s5local1 || this._wasFastCompleted || __s5local2.buildingVO.buildingState.isInProgress) && (__dep_export_CastleComponent.CastleComponent.layoutManager.numVisibleDialogs == 0 && !__s5local2.vo.isInBuildingDistrict || __dep_exact_81dacdf05bd32292_1.instanceOfClass(__dep_export_CastleComponent.CastleComponent.layoutManager.highestShownDialog, "BuildingDistrictDialog") && __s5local2.vo.isInBuildingDistrict)) {
        __s5local3 = true;
      }
      if (__s5local3) {
        this.mouseHandler.changeSelectedTarget(__s5local2);
      }
    }
  };
  return IsoCommandObjectUpdateByIdView;
}(require("gge-module:export_AIsoCommandView").AIsoCommandView);
exports.IsoCommandObjectUpdateByIdView = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
