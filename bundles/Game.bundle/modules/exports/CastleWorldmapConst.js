Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function () {
  function CastleWorldmapConst() {}
  CastleWorldmapConst._adjust = function () {
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isEdge || __dep_exact_81dacdf05bd32292.currentBrowserInfo.isIE) {
      CastleWorldmapConst.ZOOM_MIN = 1;
    }
  };
  CastleWorldmapConst.ZOOM_MIN = 0.8;
  CastleWorldmapConst.ZOOM_MAX = 1.5;
  CastleWorldmapConst.ZOOM_STEP = 0.05;
  CastleWorldmapConst.VIEWPORT_MARGIN = 100;
  CastleWorldmapConst.KEY_STEP = 3;
  CastleWorldmapConst.KEY_STEP_MAX = 50;
  return CastleWorldmapConst;
}();
exports.CastleWorldmapConst = __s0local0;
__s0local0._adjust();
