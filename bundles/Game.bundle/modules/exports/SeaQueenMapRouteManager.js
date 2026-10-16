Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function SeaQueenMapRouteManager() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeaQueenMapRouteManager, __s1param0);
  SeaQueenMapRouteManager.prototype.updateComponent = function (__s5param0) {
    if (__s5param0) {
      for (var __s5local0 = 0; __s5local0 < __s5param0.tMapNodeVOs.length; __s5local0++) {
        var __s5local1 = __s5param0.tMapNodeVOs[__s5local0];
        for (var __s5local2 = 0, __s5local3 = __s5local1.orUnlockIDs; __s5local2 < __s5local3.length; __s5local2++) {
          var __s5local4 = __s5local3[__s5local2];
          if (__s5local4 !== undefined) {
            var __s5local5 = this._routeLayer["route_" + Math.min(__s5param0.getNodeById(__s5local4).pos, __s5local1.pos) + "_" + Math.max(__s5param0.getNodeById(__s5local4).pos, __s5local1.pos)];
            if (__s5local5) {
              var __s5local6 = !__s5local1.isUnlocked;
              var __s5local7 = __s5local1.isDefeated;
              var __s5local8 = __s5param0.getNodeById(__s5local4).pos == 0 || __s5param0.getNodeById(__s5local4).isDefeated;
              if (__s5local6 || __s5local7 && __s5local8 || !__s5local7 && !__s5local8) {
                __s5local5.gotoAndStop(1);
              } else {
                __s5local5.gotoAndStop(2);
              }
            }
          }
        }
      }
    }
  };
  return SeaQueenMapRouteManager;
}(require("gge-module:export_ATreasureMapRouteManager").ATreasureMapRouteManager);
exports.SeaQueenMapRouteManager = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ITreasureUpdateComponent");
