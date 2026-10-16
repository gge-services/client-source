Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_IsoDefencePosition = require("gge-module:export_IsoDefencePosition");
var __dep_export_AIsoGeneratorDefenceComponent = require("gge-module:export_AIsoGeneratorDefenceComponent");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function IsoGeneratorDefenceGate() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoGeneratorDefenceGate, __s1param0);
  IsoGeneratorDefenceGate.prototype.execute = function () {
    var __s5local0;
    var __s5local1 = this.getRelevantGateGround();
    __s5local0 = __s5local1.rotatedWidth == __s5local1.rotatedHeight ? new __s0local0(__s5local1.x2 + 1, __s5local1.y + __s5local1.rotatedHeight / 2) : __s5local1.rotatedWidth > __s5local1.rotatedHeight ? new __s0local0(__s5local1.x2 + 1, __s5local1.y) : new __s0local0(__s5local1.x2 + 1, __s5local1.y + __s5local1.rotatedHeight / 2);
    this.parentGenerator.result.gate = new __dep_export_IsoDefencePosition.IsoDefencePosition(__s5local0, 0, IsoGeneratorDefenceGate.GATE_DIMENSION);
  };
  IsoGeneratorDefenceGate.prototype.getRelevantGateGround = function () {
    var __s7local0;
    for (var __s7local1 = 0, __s7local2 = this.parentGenerator.grounds; __s7local1 < __s7local2.length; __s7local1++) {
      var __s7local3 = __s7local2[__s7local1];
      if (__s7local3 !== undefined && (!__s7local0 || __s7local0.x2 + __s7local0.y2 < __s7local3.x2 + __s7local3.y2 || __s7local3.x2 > __s7local0.x2)) {
        __s7local0 = __s7local3;
      }
    }
    return __s7local0;
  };
  IsoGeneratorDefenceGate.__initialize_static_members = function () {
    IsoGeneratorDefenceGate.GATE_DIMENSION = new __s0local0(3, 4);
  };
  return IsoGeneratorDefenceGate;
}(__dep_export_AIsoGeneratorDefenceComponent.AIsoGeneratorDefenceComponent);
exports.IsoGeneratorDefenceGate = __s0local1;
__s0local1.__initialize_static_members();
