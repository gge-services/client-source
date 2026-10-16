Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function IsoCommandSpawnEffect(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._ve = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandSpawnEffect, __s1param0);
  IsoCommandSpawnEffect.prototype.execute = function () {
    if (this.ve) {
      this.isoRenderer.objects.effects.addObject(this.ve);
      this.ve.start();
    }
  };
  Object.defineProperty(IsoCommandSpawnEffect.prototype, "ve", {
    get: function () {
      return this._ve;
    },
    enumerable: true,
    configurable: true
  });
  return IsoCommandSpawnEffect;
}(require("gge-module:export_AIsoCommandView").AIsoCommandView);
exports.IsoCommandSpawnEffect = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
