Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function () {
  function IsoMovementDispCreatorCacheBehaviour() {}
  IsoMovementDispCreatorCacheBehaviour.prototype.updateCache = function (__s5param0) {
    if (__s5param0.dispContainer.cacheCanvas) {
      __s5param0.dispContainer.updateCache();
    } else {
      var __s5local0 = __s5param0.dispContainer.getBounds();
      if (__s5local0.width > 0 && __s5local0.height > 0) {
        __s5param0.dispContainer.doCache(__s5param0.additionalCacheSize);
      }
    }
  };
  return IsoMovementDispCreatorCacheBehaviour;
}();
exports.IsoMovementDispCreatorCacheBehaviour = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDispCreatorCacheBehaviour");
