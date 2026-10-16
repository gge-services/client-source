Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function IsoCommandObjectsInitView(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._objectsType = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandObjectsInitView, __s1param0);
  IsoCommandObjectsInitView.prototype.execute = function () {
    var __s5local0 = this.isoRenderer.objects.getGroupByType(this._objectsType);
    if (this.isoRenderer.isReady && __s5local0) {
      if (this.objectExistsAndHasGroupType(this.mouseHandler.draggedTarget)) {
        this.mouseHandler.cancelDraggedTarget();
      }
      if (this.objectExistsAndHasGroupType(this.mouseHandler.selectedTarget)) {
        this.mouseHandler.deselectTarget();
      }
      if (this.objectExistsAndHasGroupType(this.mouseHandler.focusedTarget)) {
        this.mouseHandler.unFocusTarget();
      }
      if (this.objectExistsAndHasGroupType(this.mouseHandler.hoveredTarget)) {
        this.mouseHandler.unFocusTarget();
      }
      __s5local0.initObjects();
      this.isoRenderer.objects.invalidateCompleteObjectsList();
      __s5local0.render();
    }
  };
  IsoCommandObjectsInitView.prototype.objectExistsAndHasGroupType = function (__s12param0) {
    return !!__s12param0 && __s12param0.objectType.groupType == this._objectsType;
  };
  return IsoCommandObjectsInitView;
}(require("gge-module:export_AIsoCommandView").AIsoCommandView);
exports.IsoCommandObjectsInitView = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
