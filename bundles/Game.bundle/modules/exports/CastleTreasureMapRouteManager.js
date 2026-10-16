Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleTreasureMapRouteManager() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTreasureMapRouteManager, __s1param0);
  CastleTreasureMapRouteManager.prototype.updateComponent = function (__s5param0) {
    if (__s5param0) {
      var __s5local0;
      var __s5local1;
      var __s5local2;
      var __s5local3 = 0;
      var __s5local4 = 0;
      if (__s5param0.treasureMovementsVOs) {
        __s5local1 = __s5param0.treasureMovementsVOs[0];
      }
      for (var __s5local5 = 0; __s5local5 < __s5param0.tMapNodeVOs.length; __s5local5++) {
        if (!(__s5local0 = __s5param0.tMapNodeVOs[__s5local5]).isStartNode) {
          var __s5local6;
          var __s5local7 = __s5local0;
          do {
            __s5local6 = __s5local7;
            __s5local3 = (__s5local7 = __s5param0.getNodeById(__s5local6.orUnlockIDs[0])).nodeID;
            __s5local4 = __s5local6.nodeID;
            (__s5local2 = this._routeLayer["path_" + __s5local3 + "_" + __s5local4]).mouseEnabled = false;
            if (__s5local1 && __s5local1.tMapNodeID == __s5local0.nodeID) {
              __s5local2.gotoAndStop(3);
            } else if (__s5local6.isUnlocked && __s5param0.hasAllPieces) {
              __s5local2.gotoAndStop(2);
            } else {
              __s5local2.gotoAndStop(1);
            }
          } while (__s5local7 && __s5local7.isTreasureHuntObstacle);
        }
      }
    }
  };
  return CastleTreasureMapRouteManager;
}(require("gge-module:export_ATreasureMapRouteManager").ATreasureMapRouteManager);
exports.CastleTreasureMapRouteManager = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ITreasureUpdateComponent");
