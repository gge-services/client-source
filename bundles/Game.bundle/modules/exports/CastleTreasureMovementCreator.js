Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_FlagHelper = require("gge-module:export_FlagHelper");
var __s0local0 = function () {
  function CastleTreasureMovementCreator() {}
  CastleTreasureMovementCreator.prototype.createMovements = function (__s5param0, __s5param1) {
    var __s5local0;
    var __s5local1 = [];
    var __s5local2 = __s5param1.treasureMovementsVOs;
    if (__s5local2 != null) {
      for (var __s5local3 = 0, __s5local4 = __s5local2; __s5local3 < __s5local4.length; __s5local3++) {
        var __s5local5 = __s5local4[__s5local3];
        if (__s5local5 !== undefined) {
          __s5local0 = this.createMovement(__s5local5, __s5param1);
          __s5local1.push(__s5local0);
        }
      }
    }
    return __s5local1;
  };
  CastleTreasureMovementCreator.prototype.createMovement = function (__s11param0, __s11param1) {
    var __s11local0 = __dep_exact_f855840627e6e145.int(this.getLastValidNodeId(__s11param0.tMapNodeID, __s11param1));
    var __s11local1 = __s11param0.tMapNodeID;
    var __s11local2 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("Movement_" + __s11local0 + "_" + __s11local1))();
    __dep_export_FlagHelper.FlagHelper.colorFlag(__s11local2.mcArmy.flag1, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    __dep_export_FlagHelper.FlagHelper.colorFlag(__s11local2.mcArmy.flag2, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    return new __dep_export_CastleTreasureMapMovement.CastleTreasureMapMovement(__s11local2, __s11param0, __s11local0, __s11local1);
  };
  CastleTreasureMovementCreator.prototype.getLastValidNodeId = function (__s13param0, __s13param1) {
    for (var __s13local0 = __s13param1.getNodeById(__s13param1.getNodeById(__s13param0).orUnlockIDs[0]); __s13local0 && __s13local0.isTreasureHuntObstacle;) {
      __s13local0 = __s13param1.getNodeById(__s13local0.orUnlockIDs[0]);
    }
    var __s13local1 = 0;
    if (__s13local0) {
      __s13local1 = __s13local0.nodeID;
    }
    return __s13local1;
  };
  return CastleTreasureMovementCreator;
}();
exports.CastleTreasureMovementCreator = __s0local0;
var __dep_export_CastleTreasureMapMovement = require("gge-module:export_CastleTreasureMapMovement");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ITreasureMovementCreator");
