Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function DetailViewCreator() {}
  DetailViewCreator.createDetailViewFromIWorldmapObject = function (__s5param0, __s5param1, __s5param2, __s5param3) {
    var __s5local0;
    if (__dep_export_SpecialServerHelper.SpecialServerHelper.skinName == __dep_export_SpecialServerHelper.SpecialServerHelper.SKIN_MAYA && (__s5local0 = DetailViewCreator.getMayaDetailView(__s5param0, __s5param1, __s5param2, __s5param3))) {
      return __s5local0;
    } else {
      return DetailViewCreator.getDefaultDetailView(__s5param0, __s5param1, __s5param2, __s5param3);
    }
  };
  DetailViewCreator.getMayaDetailView = function (__s9param0, __s9param1, __s9param2, __s9param3) {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s9param0, "DungeonMapobjectVO")) {
      return new __dep_export_AABGDetailView.AABGDetailView(__s9param0, __s9param1, __s9param2, __s9param3, "Dungeon");
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s9param0, "CastleMapobjectVO")) {
      return new __dep_export_AABGDetailView.AABGDetailView(__s9param0, __s9param1, __s9param2, __s9param3, "Castle");
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s9param0, "CapitalMapobjectVO")) {
      return new __dep_export_AABGDetailView.AABGDetailView(__s9param0, __s9param1, __s9param2, __s9param3, "Capital");
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s9param0, "MetropolMapobjectVO")) {
      return new __dep_export_AABGDetailView.AABGDetailView(__s9param0, __s9param1, __s9param2, __s9param3, "Metropolis");
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s9param0, "KingstowerMapobjectVO")) {
      return new __dep_export_AABGDetailView.AABGDetailView(__s9param0, __s9param1, __s9param2, __s9param3, "Kingstower");
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s9param0, "OutpostMapobjectVO")) {
      return new __dep_export_AABGDetailView.AABGDetailView(__s9param0, __s9param1, __s9param2, __s9param3, "Outpost");
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s9param0, "ABGAllianceTowerMapobjectVO")) {
      return new __dep_export_AABGDetailView.AABGDetailView(__s9param0, __s9param1, __s9param2, __s9param3, "AllianceTower");
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s9param0, "ABGResourceTowerMapobjectVO")) {
      return new __dep_export_AABGDetailView.AABGDetailView(__s9param0, __s9param1, __s9param2, __s9param3, "ResourceTower");
    } else {
      return null;
    }
  };
  DetailViewCreator.getDefaultDetailView = function (__s20param0, __s20param1, __s20param2, __s20param3) {
    if (__s20param0) {
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "TMapNodeVO")) {
        return new __dep_export_EventTreasurmapDetailView.EventTreasurmapDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "DungeonMapobjectVO")) {
        return new __dep_export_DungeonDetailView.DungeonDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "CastleMapobjectVO")) {
        return new __dep_export_CastleDetailView.CastleDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "CapitalMapobjectVO")) {
        return new __dep_export_CastleDetailView.CastleDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "MetropolMapobjectVO")) {
        return new __dep_export_CastleDetailView.CastleDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "OutpostMapobjectVO")) {
        return new __dep_export_CastleDetailView.CastleDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "VillageMapobjectVO")) {
        return new __dep_export_VillageDetailView.VillageDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "BossdungeonMapobjectVO")) {
        return new __dep_export_BossDungeonDetailView.BossDungeonDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "EventdungeonMapobjectVO")) {
        return new __dep_export_EventDungeonDetailView.EventDungeonDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "FactionTowerMapobjectVO")) {
        return new __dep_export_FactionTowerDetailView.FactionTowerDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "FactionCapitalMapobjectVO")) {
        return new __dep_export_FactionCapitalDetailView.FactionCapitalDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "FactionVillageMapobjectVO")) {
        return new __dep_export_FactionVillageDetailView.FactionVillageDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "FactionCampMapobjectVO")) {
        return new __dep_export_FactionCampDetailView.FactionCampDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "AAlienInvasionMapobjectVO")) {
        return new __dep_export_CastleDetailView.CastleDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "NomadCampMapObjectVO")) {
        return new __dep_export_NomadCampDetailView.NomadCampDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "NomadKhanCampMapObjectVO")) {
        return new __dep_export_KhanCampDetailView.KhanCampDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "KingstowerMapobjectVO")) {
        return new __dep_export_KingstowerDetailView.KingstowerDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "MonumentMapobjectVO")) {
        return new __dep_export_MonumentDetailView.MonumentDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "LaboratoryMapobjectVO")) {
        return new __dep_export_LaboratoryDetailView.LaboratoryDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "SamuraiCampMapObjectVO")) {
        return new __dep_export_SamuraiCampDetailView.SamuraiCampDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "FactionInvasionCampMapObjectVO")) {
        return new __dep_export_FactionInvasionCampDetailView.FactionInvasionCampDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "DaimyoCastleMapObjectVO")) {
        return new __dep_export_DaimyoCastleDetailView.DaimyoCastleDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "DaimyoTownshipMapObjectVO")) {
        return new __dep_export_DaimyoTownshipDetailView.DaimyoTownshipDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "WolfkingCastleMapObjectVO")) {
        return new __dep_export_WolfkingCastleDetailView.WolfkingCastleDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s20param0, "AllianceRaidEventPortalMapobjectVO")) {
        return new __dep_export_AllianceRaidBossDetailView.AllianceRaidBossDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
      } else {
        return null;
      }
    } else {
      return new __dep_export_DefaultDetailView.DefaultDetailView(__s20param0, __s20param1, __s20param2, __s20param3);
    }
  };
  return DetailViewCreator;
}();
exports.DetailViewCreator = __s0local0;
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_AllianceRaidBossDetailView = require("gge-module:export_AllianceRaidBossDetailView");
var __dep_export_EventTreasurmapDetailView = require("gge-module:export_EventTreasurmapDetailView");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_BossDungeonDetailView = require("gge-module:export_BossDungeonDetailView");
var __dep_export_CastleDetailView = require("gge-module:export_CastleDetailView");
var __dep_export_DefaultDetailView = require("gge-module:export_DefaultDetailView");
var __dep_export_DungeonDetailView = require("gge-module:export_DungeonDetailView");
var __dep_export_EventDungeonDetailView = require("gge-module:export_EventDungeonDetailView");
var __dep_export_FactionCampDetailView = require("gge-module:export_FactionCampDetailView");
var __dep_export_FactionCapitalDetailView = require("gge-module:export_FactionCapitalDetailView");
var __dep_export_FactionInvasionCampDetailView = require("gge-module:export_FactionInvasionCampDetailView");
var __dep_export_FactionTowerDetailView = require("gge-module:export_FactionTowerDetailView");
var __dep_export_FactionVillageDetailView = require("gge-module:export_FactionVillageDetailView");
var __dep_export_KhanCampDetailView = require("gge-module:export_KhanCampDetailView");
var __dep_export_KingstowerDetailView = require("gge-module:export_KingstowerDetailView");
var __dep_export_LaboratoryDetailView = require("gge-module:export_LaboratoryDetailView");
var __dep_export_MonumentDetailView = require("gge-module:export_MonumentDetailView");
var __dep_export_NomadCampDetailView = require("gge-module:export_NomadCampDetailView");
var __dep_export_SamuraiCampDetailView = require("gge-module:export_SamuraiCampDetailView");
var __dep_export_VillageDetailView = require("gge-module:export_VillageDetailView");
var __dep_export_DaimyoCastleDetailView = require("gge-module:export_DaimyoCastleDetailView");
var __dep_export_DaimyoTownshipDetailView = require("gge-module:export_DaimyoTownshipDetailView");
var __dep_export_AABGDetailView = require("gge-module:export_AABGDetailView");
var __dep_export_WolfkingCastleDetailView = require("gge-module:export_WolfkingCastleDetailView");
