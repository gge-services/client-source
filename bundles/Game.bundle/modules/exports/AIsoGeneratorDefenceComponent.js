Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AIsoGeneratorDefenceComponent() {}
  AIsoGeneratorDefenceComponent.prototype.init = function (__s5param0) {
    this._parentGenerator = __s5param0;
  };
  AIsoGeneratorDefenceComponent.prototype.execute = function () {};
  AIsoGeneratorDefenceComponent.prototype.cleanup = function () {};
  AIsoGeneratorDefenceComponent.prototype.isCollidingWithAnyOtherPosition = function (__s11param0, __s11param1) {
    if (__s11param0 != null) {
      for (var __s11local0 = 0, __s11local1 = __s11param0; __s11local0 < __s11local1.length; __s11local0++) {
        var __s11local2 = __s11local1[__s11local0];
        if (__s11local2 !== undefined && __s11local2.collidesWith(__s11param1)) {
          return true;
        }
      }
    }
    return false;
  };
  AIsoGeneratorDefenceComponent.prototype.addPosToListOrCreateOne = function (__s17param0, __s17param1) {
    var __s17local0 = __s17param0;
    if (__s17param1) {
      __s17local0 ||= [];
      __s17local0.push(__s17param1);
    }
    return __s17local0;
  };
  Object.defineProperty(AIsoGeneratorDefenceComponent.prototype, "parentGenerator", {
    get: function () {
      return this._parentGenerator;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoGeneratorDefenceComponent.prototype, "result", {
    get: function () {
      return this.parentGenerator.result;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoGeneratorDefenceComponent.prototype, "map", {
    get: function () {
      return this.parentGenerator.grid.map;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoGeneratorDefenceComponent.prototype, "grounds", {
    get: function () {
      return this.parentGenerator.grounds;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoGeneratorDefenceComponent;
}();
exports.AIsoGeneratorDefenceComponent = __s0local0;
