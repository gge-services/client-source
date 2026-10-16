Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_IsoRenderStrategyEnum = require("gge-module:export_IsoRenderStrategyEnum");
var __s0local0 = function (__s1param0) {
  function IsoViewObjectGroupInnerBuilding() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoViewObjectGroupInnerBuilding, __s1param0);
  IsoViewObjectGroupInnerBuilding.prototype.initObjects = function () {
    this.resetList();
    this.createObjectsAndAddToLayerAndList(this.isoData.objects.innerBuildings.list, this.list);
  };
  IsoViewObjectGroupInnerBuilding.prototype.addObject = function (__s7param0) {
    this.addObjectToLayerAndList(__s7param0, this.list);
  };
  IsoViewObjectGroupInnerBuilding.prototype.setCollisionFloorVisibility = function (__s9param0) {
    var __s9local0 = this.isoRenderer.strategies.currentStrategy.isActive(__dep_export_IsoRenderStrategyEnum.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW);
    var __s9local1 = this.isoRenderer.mouse.draggedTarget;
    if (this.list != null) {
      for (var __s9local2 = 0, __s9local3 = this.list; __s9local2 < __s9local3.length; __s9local2++) {
        var __s9local4 = __s9local3[__s9local2];
        if (__s9local4 !== undefined) {
          if (__s9local4 && (__s9param0 && __s9local0 && __s9local4 == __s9local1 || !__s9param0 || !__s9local0)) {
            __s9local4.setCollisionFloorVisibility(__s9param0);
          }
        }
      }
    }
  };
  return IsoViewObjectGroupInnerBuilding;
}(require("gge-module:export_AIsoViewObjectGroupSimpleList").AIsoViewObjectGroupSimpleList);
exports.IsoViewObjectGroupInnerBuilding = __s0local0;
