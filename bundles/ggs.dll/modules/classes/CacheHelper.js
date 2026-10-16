Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __s0local0 = function () {
  function CacheHelper() {}
  CacheHelper.cacheGraphic = function (__s5param0, __s5param1 = 5000, __s5param2 = 5000) {
    __s5param0.uncache();
    var __s5local0 = __s5param0.getBounds();
    if (__s5local0.width > 0 && __s5local0.height > 0 && __s5local0.width <= __s5param1 && __s5local0.height <= __s5param2) {
      if (__s5param0.cacheCanvas) {
        __s5param0.updateCache();
      } else {
        __s5param0.cache(__s5local0.x, __s5local0.y, __s5local0.width, __s5local0.height);
      }
    } else {
      CacheHelper.logger.warn("Could not cache Graphic " + __s5param0.name + ", because size is " + __s5local0.width + "x" + __s5local0.height);
    }
  };
  CacheHelper.showWhatsCached = function (__s11param0 = null) {
    for (var __s11local0 = __s11param0 || window.gamestage, __s11local1 = 0; __s11local1 < __s11local0.numChildren; __s11local1++) {
      if (CacheHelper._showCacheMarkers) {
        CacheHelper.hideWhatsCachedOnContainer(__s11local0.getChildAt(__s11local1));
      } else {
        CacheHelper.showWhatsCachedOfContainer(__s11local0.getChildAt(__s11local1));
      }
    }
    CacheHelper._showCacheMarkers = !CacheHelper._showCacheMarkers;
  };
  CacheHelper.showWhatsCachedOfContainer = function (__s17param0) {
    for (var __s17local0 = 0; __s17local0 < __s17param0.numChildren; __s17local0++) {
      var __s17local1 = __s17param0.getChildAt(__s17local0);
      if (__s17local1.name != CacheHelper.markerName && __s17local1.cacheCanvas) {
        var __s17local2 = new createjs.Shape();
        var __s17local3 = __s17local1.getBounds();
        __s17local2.graphics.beginFill(CacheHelper.markerColor, CacheHelper.markerAlpha);
        __s17local2.graphics.drawCircle(__s17local3.right - __s17local3.left / 2, __s17local3.top - __s17local3.bottom / 2, 25);
        __s17local2.graphics.endFill();
        __s17local2.name = CacheHelper.markerName;
        __s17local1.addChild(__s17local2);
        __s17local1.updateCache();
      }
      if (__s17local1 instanceof createjs.Container && __s17local1.numChildren > 0) {
        CacheHelper.showWhatsCachedOfContainer(__s17local1);
      }
    }
  };
  CacheHelper.hideWhatsCachedOnContainer = function (__s23param0) {
    for (var __s23local0 = 0; __s23local0 < __s23param0.numChildren; __s23local0++) {
      var __s23local1 = __s23param0.getChildAt(__s23local0);
      if (__s23local1.name == CacheHelper.markerName) {
        var __s23local2 = __s23local1.parent;
        __s23local2.removeChild(__s23local1);
        if (__s23local2.cacheCanvas) {
          __s23local2.updateCache();
        }
        __s23local0--;
      } else if (__s23local1 instanceof createjs.Container && __s23local1.numChildren > 0) {
        CacheHelper.hideWhatsCachedOnContainer(__s23local1);
      }
    }
  };
  CacheHelper._showCacheMarkers = false;
  CacheHelper.markerName = "CacheMarker";
  CacheHelper.markerColor = "#ff0000";
  CacheHelper.markerAlpha = 0.85;
  CacheHelper.logger = __dep_export_LoggerConfigurator.getLogger("CacheHelper");
  return CacheHelper;
}();
exports.CacheHelper = __s0local0;
