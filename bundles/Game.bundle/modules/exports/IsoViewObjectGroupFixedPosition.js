Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function IsoViewObjectGroupFixedPosition() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoViewObjectGroupFixedPosition, __s1param0);
  IsoViewObjectGroupFixedPosition.prototype.initObjects = function () {
    this.resetList();
    this.createObjectsAndAddToLayerAndList(this.isoData.objects.fixedPositions.list, this.list);
  };
  IsoViewObjectGroupFixedPosition.prototype.addObject = function (__s7param0) {
    var __s7local0 = __dep_exact_81dacdf05bd32292.instanceOfClass(__s7param0, "RubyWishingWellFixedPositionBuildingVE");
    if (__s7local0 && this.isoData.areaData.isMyHomeCastle || !__s7local0) {
      this.addObjectToLayerAndList(__s7param0, this.list);
    }
  };
  return IsoViewObjectGroupFixedPosition;
}(require("gge-module:export_AIsoViewObjectGroupSimpleList").AIsoViewObjectGroupSimpleList);
exports.IsoViewObjectGroupFixedPosition = __s0local0;
