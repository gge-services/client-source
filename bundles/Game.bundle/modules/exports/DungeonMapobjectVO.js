Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_BasicMapobjectVO = require("gge-module:export_BasicMapobjectVO");
var __dep_export_ContainerBuilderMapobjectVO = require("gge-module:export_ContainerBuilderMapobjectVO");
var __s0local0 = function (__s1param0) {
  function DungeonMapobjectVO() {
    var __s3local0 = this;
    __s3local0._victoryCount = 0;
    __s3local0._dungeonLevel = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).name = "Dungeon";
    __s3local0._areaType = __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_DUNGEON;
    __s3local0._isVisibleOnMap = true;
    __s3local0._secondsSinceEspionage = -1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DungeonMapobjectVO, __s1param0);
  DungeonMapobjectVO.prototype.getDisplayObjectClipContainer = function (__s5param0, __s5param1, __s5param2) {
    var __s5local0 = this;
    if (__s5param2 === undefined) {
      __s5param2 = false;
    }
    var __s5local1 = __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID).kingdomName;
    var __s5local2 = "Dungeon_Mapobject_Level" + this.visualDungeonWallLevel + "_" + __s5local1;
    var __s5local3 = "Dungeon_Mapobject_EventSkin_" + __dep_export_SpecialServerHelper.SpecialServerHelper.skinName;
    if (__dep_export_SpecialServerHelper.SpecialServerHelper.useSkin && __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s5local3)) {
      __s5local2 = __s5local3;
    }
    this._graphicClassName = __s5local2;
    return __dep_export_PoolManager.mapObjectsPool.obtain(__s5local2, function (__s9param0) {
      var __s9local0 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
      __s9local0.addItem(__s5local0.getAsExternalClip(__s9param0));
      return __s9local0;
    });
  };
  Object.defineProperty(DungeonMapobjectVO.prototype, "dungeonLevel", {
    get: function () {
      var __s11local0 = __dep_export_CastleModel.CastleModel.allianceBattlegroundData.getDungeonVOByVictoryCount(this.victoryCount);
      if (__dep_export_ABGHelper.ABGHelper.isOnABGServer && __s11local0) {
        return __s11local0.dungeonlevel;
      } else {
        this._dungeonLevel ||= __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.DungeonConst.getLevel(this.victoryCount, this.kingdomID));
        return this._dungeonLevel;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "dungeonWallLevel", {
    get: function () {
      return __dep_exact_26a421b704832cff_1.DungeonConst.getWallUpgradeByLevel(this.dungeonLevel);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "visualDungeonWallLevel", {
    get: function () {
      if (this.kingdomID == __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID) {
        return __dep_exact_26a421b704832cff_1.DungeonConst.getWallUpgradeByLevel(this.dungeonLevel);
      } else if (this.kingdomID == __dep_exact_26a421b704832cff.WorldIce.KINGDOM_ID) {
        if (this.dungeonLevel < 30) {
          return 1;
        } else if (this.dungeonLevel < 40) {
          return 2;
        } else {
          return 3;
        }
      } else if (this.kingdomID == __dep_exact_26a421b704832cff.WorldDessert.KINGDOM_ID) {
        if (this.dungeonLevel < 40) {
          return 1;
        } else if (this.dungeonLevel < 50) {
          return 2;
        } else {
          return 3;
        }
      } else if (this.kingdomID == __dep_exact_26a421b704832cff.WorldVolcano.KINGDOM_ID) {
        if (this.dungeonLevel < 50) {
          return 1;
        } else if (this.dungeonLevel < 60) {
          return 2;
        } else {
          return 3;
        }
      } else if (this.kingdomID == __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID) {
        return this.dungeonWallLevel;
      } else {
        return undefined;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "kingdomID", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_BasicMapobjectVO.BasicMapobjectVO.prototype, "kingdomID").get.call(this);
    },
    set: function (__s36param0) {
      this._kingdomID = __s36param0;
    },
    enumerable: true,
    configurable: true
  });
  DungeonMapobjectVO.prototype.parseAreaInfo = function (__s38param0) {
    this._areaType = __s38param0[0];
    this._absAreaPosX = __s38param0[1];
    this._absAreaPosY = __s38param0[2];
    this._secondsSinceEspionage = __s38param0[3];
    this._victoryCount = __dep_exact_f855840627e6e145.int(__s38param0[4]);
    this._dungeonLevel = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.DungeonConst.getLevel(this._victoryCount, this.kingdomID));
    this._attackCooldownEndTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s38param0[5] * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._kingdomID = __s38param0[6];
    this._spyInfoReceivingTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  DungeonMapobjectVO.prototype.parseAreaInfoBattleLog = function (__s40param0) {
    __s1param0.prototype.parseAreaInfoBattleLog.call(this, __s40param0);
    if (__s40param0.DL) {
      this._dungeonLevel = __dep_exact_f855840627e6e145.int(__s40param0.DL);
      this._victoryCount = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.DungeonConst.getVictories(this._dungeonLevel, this._kingdomID));
    }
  };
  Object.defineProperty(DungeonMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("kingdom_dungeon_castleName_" + this.kingdomID));
    },
    set: function (__s45param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s45param0);
    },
    enumerable: true,
    configurable: true
  });
  DungeonMapobjectVO.prototype.canBeAttacked = function () {
    return true;
  };
  Object.defineProperty(DungeonMapobjectVO.prototype, "victoryCount", {
    get: function () {
      return this._victoryCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return true;
    },
    set: function (__s53param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "canBeSpied").set.call(this, __s53param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "wallLevel", {
    get: function () {
      return this.dungeonWallLevel;
    },
    set: function (__s57param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "wallLevel").set.call(this, __s57param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "gateLevel", {
    get: function () {
      return this.dungeonWallLevel;
    },
    set: function (__s61param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "gateLevel").set.call(this, __s61param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "moatLevel", {
    get: function () {
      return 0;
    },
    set: function (__s65param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "moatLevel").set.call(this, __s65param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "attackCooldownEndTimestamp", {
    set: function (__s67param0) {
      this._attackCooldownEndTimestamp = __s67param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "cooldownCanBeSkipped", {
    get: function () {
      return true;
    },
    set: function (__s71param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "cooldownCanBeSkipped").set.call(this, __s71param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "skipCooldownCostC2", {
    get: function () {
      if (__dep_export_ABGHelper.ABGHelper.isOnABGServer) {
        return __dep_export_CastleModel.CastleModel.allianceBattlegroundData.getDungeonSkipCost(this.victoryCount, this.remainingCooldownTimeInSeconds);
      }
      var __s73local0 = __dep_export_CastleModel.CastleModel.dungeonData.getDungeon(this.kingdomID, this.victoryCount).skipCosts;
      return __dep_exact_26a421b704832cff_1.DungeonConst.getSkipCost(__s73local0, this.remainingCooldownTimeInSeconds);
    },
    set: function (__s76param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "skipCooldownCostC2").set.call(this, __s76param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "totalCooldownTime", {
    get: function () {
      var __s78local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.globalEffectData.getBonusByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_COOLDOWN_REDUCTION, this.areaType));
      var __s78local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_1.DungeonConst.COOLDOWN);
      if (__dep_export_ABGHelper.ABGHelper.isOnABGServer) {
        __s78local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceBattlegroundData.getDungeonVOByVictoryCount(this.victoryCount).coolDown);
      }
      return __s78local1 * (1 - __s78local0 / 100);
    },
    set: function (__s81param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "totalCooldownTime").set.call(this, __s81param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "attackType", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK;
    },
    set: function (__s85param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "attackType").set.call(this, __s85param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.dungeonLevel;
    },
    set: function (__s89param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, __s89param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "baseWallBonus", {
    get: function () {
      if (__dep_export_ABGHelper.ABGHelper.isOnABGServer) {
        return __dep_export_CastleModel.CastleModel.allianceBattlegroundData.getDungeonVOByDungeonLevel(this.dungeonLevel).wallBonus;
      } else {
        return Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "baseWallBonus").get.call(this);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "baseGateBonus", {
    get: function () {
      if (__dep_export_ABGHelper.ABGHelper.isOnABGServer) {
        return __dep_export_CastleModel.CastleModel.allianceBattlegroundData.getDungeonVOByDungeonLevel(this.dungeonLevel).gateBonus;
      } else {
        return Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "baseGateBonus").get.call(this);
      }
    },
    enumerable: true,
    configurable: true
  });
  return DungeonMapobjectVO;
}(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO);
exports.DungeonMapobjectVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_PoolManager = require("gge-module:export_PoolManager");
