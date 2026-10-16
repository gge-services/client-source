Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_FlagHelper = require("gge-module:export_FlagHelper");
var __s0local0 = function () {
  function CastleSeasonMovementCreator() {}
  CastleSeasonMovementCreator.prototype.createMovements = function (__s5param0, __s5param1) {
    var __s5local0;
    var __s5local1;
    var __s5local2 = [];
    if ((__s5param1 && (__s5local0 = __s5param1.treasureMovementsVOs), __s5local0) && __s5local0 != null) {
      for (var __s5local3 = 0, __s5local4 = __s5local0; __s5local3 < __s5local4.length; __s5local3++) {
        var __s5local5 = __s5local4[__s5local3];
        if (__s5local5 !== undefined && (__s5local1 = this.createMovement(__s5local5, __s5param1))) {
          __s5local2.push(__s5local1);
        }
      }
    }
    return __s5local2;
  };
  CastleSeasonMovementCreator.prototype.createMovement = function (__s11param0, __s11param1) {
    var __s11local0;
    var __s11local1 = false;
    var __s11local2 = __dep_exact_f855840627e6e145.int(__s11param1.getRandomAchivedNodeByNodeID(__s11param0.tMapNodeID).pos);
    var __s11local3 = __dep_exact_f855840627e6e145.int(__s11param1.getNodeById(__s11param0.tMapNodeID).pos);
    if (!(__s11local0 = __dep_exact_9e901e8e2483a22f.MovieClipHelper.getMovieClipByClassName("Event" + __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.eventId + "_Movement_" + __s11local2 + "_" + __s11local3))) {
      __s11local0 = __dep_exact_9e901e8e2483a22f.MovieClipHelper.getMovieClipByClassName("Event" + __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.eventId + "_Movement_" + __s11local3 + "_" + __s11local2);
      __s11local1 = true;
    }
    if (!__s11local0) {
      console.warn("Movement asset not found for event:", __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.eventId, "from:", __s11local2, "to:", __s11local3);
      return null;
    }
    for (var __s11local4 = 0; __s11local4 < 3; __s11local4++) {
      if (__s11local0 && __s11local0.mcArmy["flag" + __s11local4]) {
        __dep_export_FlagHelper.FlagHelper.colorFlag(__s11local0.mcArmy["flag" + __s11local4], __dep_export_CastleModel.CastleModel.userData.playerCrest);
      }
    }
    return new __dep_export_CastleTreasureMapMovement.CastleTreasureMapMovement(__s11local0, __s11param0, __s11local2, __s11local3, __s11local1);
  };
  return CastleSeasonMovementCreator;
}();
exports.CastleSeasonMovementCreator = __s0local0;
var __dep_export_CastleTreasureMapMovement = require("gge-module:export_CastleTreasureMapMovement");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ITreasureMovementCreator");
