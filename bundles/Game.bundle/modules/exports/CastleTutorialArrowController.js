// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: Game.bundle; Webpack module: 308
// Export: CastleTutorialArrowController; preserved source: modules/webpack/exports/CastleTutorialArrowController.js
// Original canonical SHA-256: d09be7bab6b8f54cd634f59a3e6e2f9825fb795ab4dc3e0e7ee075fa79f29052
var __s0local0 = function () {
  function CastleTutorialArrowController(__s3param0) {
    this.arrows = [];
    if (__s3param0 == null) {
      throw new Error("do not instantiate, use instance getter");
    }
  }
  Object.defineProperty(CastleTutorialArrowController, "instance", {
    get: function () {
      CastleTutorialArrowController._instance ||= new CastleTutorialArrowController(new __s0local1());
      return CastleTutorialArrowController._instance;
    },
    enumerable: true,
    configurable: true
  });
  CastleTutorialArrowController.prototype.replace = function (__s8param0, __s8param1 = true, __s8param2 = false, __s8param3 = 1, __s8param4 = undefined) {
    if (!__s8param0) {
      throw new ReferenceError("target must not be null!");
    }
    this.clear();
    this.add(__s8param0, __s8param1, __s8param2, __s8param3, __s8param4);
  };
  CastleTutorialArrowController.prototype.add = function (__s11param0, __s11param1 = true, __s11param2 = false, __s11param3 = 1, __s11param4 = undefined) {
    if (!__s11param0) {
      throw new ReferenceError("target must not be null!");
    }
    var __s11local0 = new __dep_export_CastleTutorialArrow.CastleTutorialArrow(__s11param0);
    this.arrows.push(__s11local0);
    if (__s11param2) {
      __s11local0.flip();
    }
    if (__s11param1) {
      __s11local0.mirror();
    }
    __s11local0.scale = __s11param3;
    __s11local0.offset = __s11param4;
    __s11local0.display();
  };
  CastleTutorialArrowController.prototype.remove = function (__s16param0) {
    if (this.arrows[__s16param0]) {
      this.arrows[__s16param0].destroy();
      this.arrows.splice(__s16param0, 1);
    }
  };
  CastleTutorialArrowController.prototype.clear = function () {
    if (this.arrows != null) {
      for (var __s19local0 = 0, __s19local1 = this.arrows; __s19local0 < __s19local1.length; __s19local0++) {
        var __s19local2 = __s19local1[__s19local0];
        if (__s19local2 !== undefined) {
          __s19local2.destroy();
        }
      }
    }
    this.arrows = [];
  };
  return CastleTutorialArrowController;
}();
exports.CastleTutorialArrowController = __s0local0;
