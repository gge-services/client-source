Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function IsoCommandObjectRemoveView(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._vo = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandObjectRemoveView, __s1param0);
  IsoCommandObjectRemoveView.prototype.execute = function () {
    var __s5local0 = this.isoRenderer.objects.provider.getObjectByVO(this._vo);
    if (__s5local0) {
      if (this.mouseHandler.draggedTarget == __s5local0) {
        this.mouseHandler.cancelDraggedTarget();
      }
      if (this.mouseHandler.selectedTarget == __s5local0) {
        this.mouseHandler.deselectTarget();
      }
      if (this.mouseHandler.focusedTarget == __s5local0) {
        this.mouseHandler.unFocusTarget();
      }
      if (this.mouseHandler.hoveredTarget == __s5local0) {
        this.mouseHandler.unHoverTarget();
      }
      for (var __s5local1 = 0, __s5local2 = Array.from(this.isoRenderer.objects.groups.values()); __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined && __s5local3.containsObject(__s5local0)) {
          __s5local3.removeObjectByVE(__s5local0);
          this.isoRenderer.objects.invalidateCompleteObjectsList();
          break;
        }
      }
    }
  };
  return IsoCommandObjectRemoveView;
}(require("gge-module:export_AIsoCommandView").AIsoCommandView);
exports.IsoCommandObjectRemoveView = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
