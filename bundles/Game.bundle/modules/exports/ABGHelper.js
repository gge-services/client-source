Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceBattleGroundScoringVO = require("gge-module:export_AllianceBattleGroundScoringVO");
var __s0local0 = function () {
  function ABGHelper() {}
  Object.defineProperty(ABGHelper, "abgEvent", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGHelper, "skinName", {
    get: function () {
      if (ABGHelper.abgEvent) {
        return ABGHelper.abgEvent.settingVO.skin;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGHelper, "isOnABGServer", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isOnAllianceBattleGroundServer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGHelper, "isOnABGAndCollector", {
    get: function () {
      return ABGHelper.isOnABGServer && ABGHelper.isAllianceCollectorScoring;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGHelper, "isAllianceCollectorScoring", {
    get: function () {
      return !!ABGHelper.abgEvent && ABGHelper.abgEvent.settingVO.scoringSystemVO.scoring == __dep_export_AllianceBattleGroundScoringVO.AllianceBattleGroundScoringVO.SCORING_SYSTEM_ALLIANCE_COLLECTOR;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGHelper, "isOnABGAndTower", {
    get: function () {
      return ABGHelper.isOnABGServer && ABGHelper.isAllianceTowerScoring;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGHelper, "isAllianceTowerScoring", {
    get: function () {
      return !!ABGHelper.abgEvent && ABGHelper.abgEvent.settingVO.scoringSystemVO.scoring == __dep_export_AllianceBattleGroundScoringVO.AllianceBattleGroundScoringVO.SCORING_SYSTEM_ALLIANCE_TOWER;
    },
    enumerable: true,
    configurable: true
  });
  return ABGHelper;
}();
exports.ABGHelper = __s0local0;
