Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function IsoViewObjectGroupMovement() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoViewObjectGroupMovement, __s1param0);
  IsoViewObjectGroupMovement.prototype.initObjects = function () {
    __s1param0.prototype.initObjects.call(this);
    this.resetList();
  };
  IsoViewObjectGroupMovement.prototype.addObject = function (__s7param0) {
    this.addObjectToLayerAndList(__s7param0, this.list);
  };
  return IsoViewObjectGroupMovement;
}(require("gge-module:export_AIsoViewObjectGroupSimpleList").AIsoViewObjectGroupSimpleList);
exports.IsoViewObjectGroupMovement = __s0local0;
