Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function IsoViewObjectGroupEvent() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoViewObjectGroupEvent, __s1param0);
  IsoViewObjectGroupEvent.prototype.initObjects = function () {
    this.resetList();
    this.createObjectsAndAddToLayerAndList(this.isoData.objects.eventBuildings.list, this.list);
  };
  return IsoViewObjectGroupEvent;
}(require("gge-module:export_AIsoViewObjectGroupSimpleList").AIsoViewObjectGroupSimpleList);
exports.IsoViewObjectGroupEvent = __s0local0;
