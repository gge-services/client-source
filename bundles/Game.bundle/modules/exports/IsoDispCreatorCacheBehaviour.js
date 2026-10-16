Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function () {
  function IsoDispCreatorCacheBehaviour() {}
  IsoDispCreatorCacheBehaviour.prototype.updateCache = function (__s5param0) {
    if (__dep_export_Iso.Iso.renderer.layers.transformLayer) {
      var __s5local0;
      if (__s5param0.dispContainer.cacheCanvas) {
        __s5local0 = __s5param0.dispContainer.cacheCanvas;
        __s5param0.dispContainer.uncache();
      }
      var __s5local1 = __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.getScreenScaleY(__s5param0.dispContainer);
      var __s5local2 = __dep_exact_81dacdf05bd32292_1.currentBrowserInfo.isEdge || __dep_exact_81dacdf05bd32292_1.currentBrowserInfo.isIE || __s5local1 < 0.5 ? 0.6 : 1;
      var __s5local3 = __s5param0.dispContainer.getBounds();
      if (__s5local3.width > 0 && __s5local3.height > 0) {
        if (__s5local0) {
          __s5param0.dispContainer.cacheCanvas = __s5local0;
        }
        try {
          __s5param0.dispContainer.cache(Math.floor(__s5local3.x), Math.floor(__s5local3.y), Math.ceil(__s5local3.width), Math.ceil(__s5local3.height), __s5local2);
        } catch (__s12local0) {
          __dep_exact_9e901e8e2483a22f.warn("cache() failed!  bounds.x: " + Math.floor(__s5local3.x).toString() + " bounds.y: " + Math.floor(__s5local3.y).toString() + " bounds.width: " + Math.ceil(__s5local3.width).toString() + " bounds.height: " + Math.ceil(__s5local3.height).toString() + " More info: " + __s12local0);
        }
      }
    }
  };
  return IsoDispCreatorCacheBehaviour;
}();
exports.IsoDispCreatorCacheBehaviour = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDispCreatorCacheBehaviour");
