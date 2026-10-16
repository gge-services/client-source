Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstNPCs = require("gge-module:export_ClientConstNPCs");
var __dep_export_TMapHelper = require("gge-module:export_TMapHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_DungeonMapobjectVO = require("gge-module:export_DungeonMapobjectVO");
var __s0local0 = function (__s1param0) {
  function TreasureDungeonMapObjectVO() {
    var __s3local0 = this;
    __s3local0.tmapID = -1;
    __s3local0._baseWallBonus = 0;
    __s3local0._baseGateBonus = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._areaType = __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_TREASURE_DUNGEON;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TreasureDungeonMapObjectVO, __s1param0);
  TreasureDungeonMapObjectVO.prototype.getDisplayObjectClipContainer = function (__s5param0, __s5param1, __s5param2 = false) {
    this.tMapNode = __s5param1;
    var __s5local0;
    var __s5local1;
    var __s5local2;
    var __s5local3 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    if (__dep_exact_26a421b704832cff.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(this.mapID) > -1) {
      switch (__s5param1.nodeType) {
        case __dep_export_TMapNodeVO.TMapNodeVO.NODE_TYPE_DUNGEON:
          __s5local0 = __s5param1.isEndNode ? "Boss" : __s5param1.isVillage ? "Village" + __dep_exact_f855840627e6e145.int(this.villageSize / 3) : "Dungeon";
          break;
        case __dep_export_TMapNodeVO.TMapNodeVO.NODE_TYPE_BRIDGEDUNGEON:
          __s5local0 = "Bridge";
          break;
        case __dep_export_TMapNodeVO.TMapNodeVO.NODE_TYPE_MORALBOOSTER:
          __s5local0 = "Morale";
          break;
        default:
          __s5local0 = "Dungeon";
      }
      this.mapID = __dep_export_TMapHelper.TMapHelper.getMapIDForGraphics(this.mapID);
      if (this.mapID == __dep_exact_26a421b704832cff.TreasureMapsConst.MAP_ID_THORNKING_EASY && __s5param1.ownerID == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_THORNKING_COW_DUNGEON) {
        __s5local0 += "Cow";
      }
      __s5local1 = "Season" + __s5local0 + "_Mapobject_" + this.mapID;
      __s5local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s5local1, this.assetFileURL("SeasonEvent_" + this.mapID), null, 0, false);
    } else {
      __s5local1 = __s5param1.isEndNode ? "TreasureMapFinish_" + this.mapID : "TreasureMapDungeon_" + this.mapID;
      __s5local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s5local1, this.assetFileURL(this.generateTreasureMapAssetName(this.mapID)), null, 0, false);
    }
    __s5local3.addItem(__s5local2);
    return __s5local3;
  };
  Object.defineProperty(TreasureDungeonMapObjectVO.prototype, "victoryCount", {
    get: function () {
      return this.tMapNode.countVictories * -1;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_DungeonMapobjectVO.DungeonMapobjectVO.prototype, "victoryCount").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureDungeonMapObjectVO.prototype, "skipCooldownCostC2", {
    get: function () {
      var __s15local0 = __dep_export_CastleModel.CastleModel.dungeonData.getDungeon(this.kingdomID, this.tMapNode.countVictories).skipCosts;
      return __dep_exact_26a421b704832cff.DungeonConst.getSkipCost(__s15local0, this.remainingCooldownTimeInSeconds);
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_DungeonMapobjectVO.DungeonMapobjectVO.prototype, "skipCooldownCostC2").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureDungeonMapObjectVO.prototype, "totalCooldownTime", {
    get: function () {
      return this.tMapNode.coolDown;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_DungeonMapobjectVO.DungeonMapobjectVO.prototype, "totalCooldownTime").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureDungeonMapObjectVO.prototype, "remainingCooldownTimeInSeconds", {
    get: function () {
      return this.tMapNode.coolDownInRemainingSeconds;
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_DungeonMapobjectVO.DungeonMapobjectVO.prototype, "remainingCooldownTimeInSeconds").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  TreasureDungeonMapObjectVO.prototype.generateTreasureMapAssetName = function (__s27param0) {
    return "Treasuremap_" + __s27param0 + "_Assets";
  };
  Object.defineProperty(TreasureDungeonMapObjectVO.prototype, "areaNameString", {
    get: function () {
      this.tmapID = __dep_exact_f855840627e6e145.int(this.mapID);
      if (__dep_export_TMapHelper.TMapHelper.isThornKingMap(this.mapID)) {
        if (this.tMapNode.nodeID == __dep_exact_26a421b704832cff.TreasureMapsConst.NODE_ID_HIDDEN_COW_DUNGEON) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_seasonEvent_2_cowDungeon");
        } else if (this.tMapNode.isEndNode) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_seasonEvent_2_FinalCastle");
        } else if (this.tMapNode.isVillage) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("village");
        } else {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_seasonEvent_2_Dungeon");
        }
      } else if (__dep_export_TMapHelper.TMapHelper.isSeaQueenMap(this.mapID)) {
        if (this.tMapNode.isEndNode) {
          if (this.tMapNode.isUnlocked) {
            return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_seasonEvent_4_FinalCastle");
          } else {
            return __dep_exact_92d05af59ee2ff30.Localize.text("Castle");
          }
        } else if (this.tMapNode.isVillage) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_seasonEvent_4_konvy");
        } else {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_seasonEvent_2_Dungeon");
        }
      } else if (__dep_export_TMapHelper.TMapHelper.isUnderworldMap(this.mapID)) {
        if (this.tMapNode.isEndNode) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_seasonEvent_64_FinalCastle");
        } else if (this.tMapNode.isVillage) {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_seasonEvent_64_village");
        } else {
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_seasonEvent_2_Dungeon");
        }
      } else if (this.tMapNode.isEndNode) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_treasureMap_TreasureTooltip");
      } else {
        return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_treasureMap_DungeonTooltip");
      }
    },
    set: function (__s48param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s48param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureDungeonMapObjectVO.prototype, "baseWallBonus", {
    get: function () {
      if (__dep_exact_26a421b704832cff.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(this.tmapID) > -1 && this._baseWallBonus > 0) {
        return this._baseWallBonus;
      } else {
        return Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "baseWallBonus").get.call(this);
      }
    },
    set: function (__s54param0) {
      this._baseWallBonus = __s54param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureDungeonMapObjectVO.prototype, "baseGateBonus", {
    get: function () {
      if (__dep_exact_26a421b704832cff.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(this.tmapID) > -1 && this._baseGateBonus > 0) {
        return this._baseGateBonus;
      } else {
        return Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "baseGateBonus").get.call(this);
      }
    },
    set: function (__s60param0) {
      this._baseGateBonus = __s60param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureDungeonMapObjectVO.prototype, "villageSize", {
    get: function () {
      if (__dep_exact_26a421b704832cff.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(this.tmapID) > -1 && this.tMapNode.isVillage) {
        return this.tMapNode.villageSize;
      } else {
        return this._dungeonLevel;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureDungeonMapObjectVO.prototype, "cooldownCanBeSkipped", {
    get: function () {
      return false;
    },
    set: function (__s68param0) {
      Object.getOwnPropertyDescriptor(__dep_export_DungeonMapobjectVO.DungeonMapobjectVO.prototype, "cooldownCanBeSkipped").set.call(this, __s68param0);
    },
    enumerable: true,
    configurable: true
  });
  return TreasureDungeonMapObjectVO;
}(__dep_export_DungeonMapobjectVO.DungeonMapobjectVO);
exports.TreasureDungeonMapObjectVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");
var __dep_export_TMapNodeVO = require("gge-module:export_TMapNodeVO");
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
