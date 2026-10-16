Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceCrestVO = require("gge-module:export_AllianceCrestVO");
var __dep_export_CrestVO = require("gge-module:export_CrestVO");
var __dep_export_ABGTowerConnectionVO = require("gge-module:export_ABGTowerConnectionVO");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_ContainerBuilderMapobjectVO = require("gge-module:export_ContainerBuilderMapobjectVO");
var __s0local0 = function (__s1param0) {
  function ABGAllianceTowerMapobjectVO() {
    var __s3local0 = this;
    __s3local0._isAttackable = false;
    __s3local0._victoryCount = 0;
    __s3local0._defeatedConnections = -1;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).name = "ABGAllianceTower";
    __s3local0.group = "Mapobject";
    __s3local0._isVisibleOnMap = true;
    __s3local0._secondsSinceEspionage = -1;
    __s3local0._areaType = __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_OUTPOST;
    __s3local0._keepLevel = -1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ABGAllianceTowerMapobjectVO, __s1param0);
  ABGAllianceTowerMapobjectVO.prototype.parseAreaInfo = function (__s5param0) {
    this._areaType = __s5param0[0];
    this._absAreaPosX = __s5param0[1];
    this._absAreaPosY = __s5param0[2];
    this._objectId = __s5param0[3];
    this.areaNameString = __s5param0[4];
    this._isAttackable = __s5param0[5];
    this._victoryCount = __dep_exact_f855840627e6e145.int(__s5param0[6]);
    this._towerInfoVO = __dep_export_CastleModel.CastleModel.allianceBattlegroundData.getTowerInfoByCountVictory(this._victoryCount);
    var __s5local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s5local0.allianceID = __dep_exact_f855840627e6e145.int(__s5param0[7]);
    __s5local0.allianceName = __s5param0[8];
    __s5local0.allianceCrestVO = new __dep_export_AllianceCrestVO.AllianceCrestVO();
    __s5local0.allianceCrestVO.fillFromArray(__s5param0[9]);
    __s5local0.playerLevel = 70;
    if (__s5local0.allianceCrestVO.isEmpty) {
      __s5local0.allianceCrestVO = ABGAllianceTowerMapobjectVO.DEFAULT_CREST_TOWER;
    }
    this._ownerInfo = __s5local0;
    this._customConnections = this.parseConnections(__s5param0[10]);
    this.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_VisualVOEvent.VisualVOEvent, __dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  ABGAllianceTowerMapobjectVO.prototype.parseAreaInfoBattleLog = function (__s8param0) {
    __s1param0.prototype.parseAreaInfoBattleLog.call(this, __s8param0);
    this._victoryCount = __dep_exact_f855840627e6e145.int(__s8param0.ACVC || 0);
    this._towerInfoVO = __dep_export_CastleModel.CastleModel.allianceBattlegroundData.getTowerInfoByCountVictory(this._victoryCount);
    var __s8local0 = new __dep_export_WorldMapOwnerInfoVO.WorldMapOwnerInfoVO();
    __s8local0.allianceID = __dep_exact_f855840627e6e145.int(__s8param0.AID);
    __s8local0.allianceName = __s8param0.N;
    __s8local0.allianceCrestVO = new __dep_export_AllianceCrestVO.AllianceCrestVO();
    __s8local0.allianceCrestVO.fillWithData(__s8param0.E);
    __s8local0.crest = __dep_export_CrestVO.CrestVO.createDummyCrest();
    __s8local0.playerLevel = 70;
    this._ownerInfo = __s8local0;
    this._isAttackable = true;
    this._customConnections = this.parseConnections([]);
  };
  ABGAllianceTowerMapobjectVO.prototype.parseConnections = function (__s10param0) {
    var __s10local0 = [];
    this._defeatedConnections = 0;
    for (var __s10local1 = 0; __s10local1 < __s10param0.length; __s10local1++) {
      var __s10local2 = __s10param0[__s10local1];
      var __s10local3 = new __dep_export_ABGTowerConnectionVO.ABGTowerConnectionVO();
      __s10local3.fillFromConnectionValues(__s10local2);
      __s10local0.push(__s10local3);
      this._defeatedConnections += __s10local3.status;
    }
    return __s10local0;
  };
  ABGAllianceTowerMapobjectVO.prototype.canBeTroupsSended = function () {
    return this.isOwnedByMyAlliance && this.supportCapacity - this.getCurrentUnitSupport() > 0;
  };
  ABGAllianceTowerMapobjectVO.prototype.getCurrentUnitSupport = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.armyData.getUnitSupportUnitCountToArea(this));
  };
  ABGAllianceTowerMapobjectVO.prototype.getDisplayObjectClipContainer = function (__s18param0, __s18param1, __s18param2 = false) {
    var __s18local0 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    var __s18local1 = "ABGAllianceTower_Mapobject_" + __dep_export_SpecialServerHelper.SpecialServerHelper.skinName + "_Level" + this.level + (__s18param2 ? "_big" : "");
    if (!__dep_export_SpecialServerHelper.SpecialServerHelper.useSkin || !__dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s18local1)) {
      __s18local1 = "ABGAllianceTower_Mapobject_Maya_Level" + this.level + (__s18param2 ? "_big" : "");
    }
    __s18local0.addItem(this.getAsExternalClip(__s18local1));
    if (this._defeatedConnections < this._customConnections.length || this.isAttackable) {
      __s18local0.addItem(this.getAsExternalClip(__s18local1 + this.assetStatusName, this.assetFileURL(__s18local1)));
    }
    return __s18local0;
  };
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "areaNameString", {
    get: function () {
      if (this._areaNameString == "" || this._areaNameString == null) {
        return __dep_exact_92d05af59ee2ff30.Localize.text("allianceTower_Maya");
      } else {
        return __dep_exact_92d05af59ee2ff30.Localize.text("allianceTower_placeholder_Maya", [this._areaNameString]);
      }
    },
    set: function (__s26param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s26param0);
    },
    enumerable: true,
    configurable: true
  });
  ABGAllianceTowerMapobjectVO.prototype.canBeSupported = function () {
    return this.isOwnedByMyAlliance;
  };
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "canChangeDefenceOnWorldmap", {
    get: function () {
      return this.isOwnedByMyAlliance;
    },
    set: function (__s32param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "canChangeDefenceOnWorldmap").set.call(this, __s32param0);
    },
    enumerable: true,
    configurable: true
  });
  ABGAllianceTowerMapobjectVO.prototype.canBeAttacked = function () {
    return this._isAttackable && !this.isOwnedByMyAlliance;
  };
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "isOwnedByMyAlliance", {
    get: function () {
      return this.ownerInfo.allianceID == __dep_export_CastleModel.CastleModel.userData.allianceID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "hasOtherPlayerInfo", {
    get: function () {
      return this.ownerInfo != null && !this.isOwnMapobject && (!this.ownerInfo || !this.ownerInfo.isOutpostOwner);
    },
    set: function (__s40param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "hasOtherPlayerInfo").set.call(this, __s40param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "ownerInfo", {
    get: function () {
      var __s42local0 = Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "ownerInfo").get.call(this);
      __s42local0 ||= __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__dep_exact_26a421b704832cff_1.OutpostConst.OUTPOST_DEFAULT_OWNER_ID);
      return __s42local0;
    },
    set: function (__s44param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "ownerInfo").set.call(this, __s44param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "attackType", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_ATTACK_ABG_TOWERS;
    },
    set: function (__s48param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO.prototype, "attackType").set.call(this, __s48param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "level", {
    get: function () {
      return this._towerInfoVO.level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "assetStatusName", {
    get: function () {
      if (this._isAttackable) {
        return "_Attackable";
      } else {
        return "_Rechargeable";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "allianceName", {
    get: function () {
      return this._ownerInfo.allianceName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "allianceCrest", {
    get: function () {
      return this._ownerInfo.allianceCrestVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "connections", {
    get: function () {
      return this._customConnections;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "currentTowerPoints", {
    get: function () {
      return __dep_exact_26a421b704832cff.AllianceBattleGroundConst.calculateAllianceTowerPointsToLoot(this.towerInfoVO.addStatuette, this.towerInfoVO.defeatedPVPBasePoints, this.defeatedConnections, this.towerInfoVO.allianceTowerLevelMultiplier);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "supportCapacity", {
    get: function () {
      return this._towerInfoVO.unitCapacity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "supportCapacityToolTipID", {
    get: function () {
      return "dialog_beyondTheHorizon_AllianceTower_support_defenseLimit_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "supportCapacityReachedToolTipID", {
    get: function () {
      return "dialog_beyondTheHorizon_AllianceTower_support_defenseLimitReached_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "defenceCapacityToolTipID", {
    get: function () {
      return "dialog_beyondTheHorizon_AllianceTower_tower_troopsStationed_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "defenceCapacityReachedToolTipID", {
    get: function () {
      return "dialog_beyondTheHorizon_AllianceTower_tower_troopsStationed_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "supportOverviewToolTip", {
    get: function () {
      return "dialog_beyondTheHorizon_AllianceTower_defense_yourTroops_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "supportOverviewNoTroopsToolTipID", {
    get: function () {
      return "dialog_beyondTheHorizon_AllianceTower_defense_yourTroopsEmpty_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "towerInfoVO", {
    get: function () {
      return this._towerInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "neededVictoryCountForLevel", {
    get: function () {
      var __s80local0 = __dep_export_CastleModel.CastleModel.allianceBattlegroundData.getTowerInfoByCountLevel(this.level + 1);
      if (__s80local0) {
        return __s80local0.countVictory - this.towerInfoVO.countVictory;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "currentVictoryCountFromLevel", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.allianceBattlegroundData.getTowerInfoByCountLevel(this.level + 1)) {
        return this._victoryCount - this.towerInfoVO.countVictory;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "isAttackable", {
    get: function () {
      return this._isAttackable;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "defeatedConnections", {
    get: function () {
      return this._defeatedConnections;
    },
    enumerable: true,
    configurable: true
  });
  ABGAllianceTowerMapobjectVO.createDefaultCrestVO = function () {
    var __s92local0 = new __dep_export_AllianceCrestVO.AllianceCrestVO();
    __s92local0.fillFromArray([0, [2]]);
    return __s92local0;
  };
  ABGAllianceTowerMapobjectVO.__initialize_static_members = function () {
    ABGAllianceTowerMapobjectVO.DEFAULT_CREST_TOWER = ABGAllianceTowerMapobjectVO.createDefaultCrestVO();
  };
  return ABGAllianceTowerMapobjectVO;
}(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO);
exports.ABGAllianceTowerMapobjectVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO", "ISupportCapacityVO");
var __dep_export_WorldMapOwnerInfoVO = require("gge-module:export_WorldMapOwnerInfoVO");
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
__s0local0.__initialize_static_members();
