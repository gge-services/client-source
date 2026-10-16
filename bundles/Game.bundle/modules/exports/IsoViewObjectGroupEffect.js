Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function IsoViewObjectGroupEffect() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoViewObjectGroupEffect, __s1param0);
  IsoViewObjectGroupEffect.prototype.initObjects = function () {
    this.resetList();
  };
  IsoViewObjectGroupEffect.prototype.render = function () {
    if (this.list != null) {
      for (var __s7local0 = 0, __s7local1 = this.list; __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        if (__s7local2 !== undefined) {
          __s7local2.start();
        }
      }
    }
  };
  IsoViewObjectGroupEffect.prototype.addObject = function (__s13param0) {
    this.addObjectToLayerAndList(__s13param0, this.list);
  };
  return IsoViewObjectGroupEffect;
}(require("gge-module:export_AIsoViewObjectGroupSimpleList").AIsoViewObjectGroupSimpleList);
exports.IsoViewObjectGroupEffect = __s0local0;
