Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstNPCs = require("gge-module:export_ClientConstNPCs");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CapturedProduction = require("gge-module:export_CapturedProduction");
var __s0local0 = function () {
  function TMapNodeVO() {
    this._nodeID = 0;
    this._mapID = 0;
    this._countVictories = 0;
    this._payedGoods = new __dep_export_CollectableList.CollectableList();
    this._costsWoodC2 = 0;
    this._costsStoneC2 = 0;
    this._costsC1C2 = 0;
    this._pos = 0;
    this._distance = 0;
    this._dungeonlevel = 0;
    this._wallBonus = 0;
    this._gateBonus = 0;
    this._isUnlocked = false;
    this._isDefeated = false;
    this._isEndNode = false;
    this.eventID = 0;
    this._coolDown = 0;
    this.coolDownEndStemp = 0;
    this.columnOnMap = -1;
    this.isUnockedByPortLevel = true;
    this._villageSize = 0;
    this._ownerID = 0;
    this._isHighlighted = false;
  }
  TMapNodeVO.prototype.fillFromParamXML = function (__s5param0) {
    this._nodeID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("tmapnodeID", __s5param0, "0"));
    this._orUnlockIDs = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("orUnlockIDs", __s5param0, "0").split("+");
    this._andUnlockIDs = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("andUnlockIDs", __s5param0, "0").split("+");
    this._nodeType = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("type", __s5param0, "DUNGEON");
    this._capturedProduction = this._nodeType == "DUNGEON" ? TMapNodeVO.getCapturedProduction(__s5param0) : null;
    this._countVictories = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("countVictories", __s5param0, "1"));
    this._partpaypriceVO = __dep_export_CastleModel.CastleModel.partPayPricesData.getVOById(parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("partPayPriceID", __s5param0, "-1")));
    this._pos = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("pos", __s5param0, "0"));
    this._distance = parseFloat(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("distance", __s5param0, "0"));
    this._dungeonlevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("dungeonlevel", __s5param0, "0"));
    this._coolDown = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("coolDown", __s5param0, "0"));
    this.columnOnMap = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("columnOnMap", __s5param0, "0"));
    this._villageSize = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("villageSize", __s5param0, "-1"));
    this._wallBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("wallBonus", __s5param0, "0"));
    this._gateBonus = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("gateBonus", __s5param0, "0"));
    this._rewardLists = __dep_export_CollectableManager.CollectableManager.parser.createListsFromRewardIdsString(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("rewardIDs", __s5param0, "0"));
    this._ownerID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("ownerID", __s5param0, "" + __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_UNKNOWN_EVENT_OWNER));
  };
  TMapNodeVO.getCapturedProduction = function (__s7param0) {
    var __s7local0 = 0;
    var __s7local1 = __dep_export_CapturedProduction.CapturedProduction.CAPTURED_PRODUCTION_TYPES;
    for (var __s7local2 = __s7local1.length, __s7local3 = 0; __s7local3 < __s7local2; __s7local3++) {
      var __s7local4 = __s7local1[__s7local3];
      var __s7local5 = __dep_export_CapturedProduction.CapturedProduction.CAPTURED_PRODUCTION + __s7local4;
      if ((__s7local0 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault(__s7local5, __s7param0, "-1"))) > 0) {
        return new __dep_export_CapturedProduction.CapturedProduction(__s7local4, __s7local0);
      }
    }
    return null;
  };
  TMapNodeVO.prototype.parseParamObject = function (__s12param0) {
    if (__s12param0.CD > 0) {
      this.coolDownEndStemp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s12param0.CD * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    } else {
      this.coolDownEndStemp = 0;
    }
    if (__s12param0.G) {
      this._payedGoods = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s12param0.G);
    }
    this._costsC1C2 = __dep_exact_f855840627e6e145.int(__s12param0.C1C2 ? __s12param0.C1C2 : 0);
    this._costsStoneC2 = __dep_exact_f855840627e6e145.int(__s12param0.SC2 ? __s12param0.SC2 : 0);
    this._costsWoodC2 = __dep_exact_f855840627e6e145.int(__s12param0.WC2 ? __s12param0.WC2 : 0);
  };
  Object.defineProperty(TMapNodeVO.prototype, "isVillage", {
    get: function () {
      return this.villageSize > -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "nodeID", {
    get: function () {
      return this._nodeID;
    },
    set: function (__s21param0) {
      this._nodeID = __s21param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "countVictories", {
    get: function () {
      return this._countVictories;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "pos", {
    get: function () {
      return this._pos;
    },
    set: function (__s27param0) {
      this._pos = __s27param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "distance", {
    get: function () {
      return this._distance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "dungeonlevel", {
    get: function () {
      return this._dungeonlevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isUnlocked", {
    get: function () {
      return this._isUnlocked;
    },
    set: function (__s35param0) {
      this._isUnlocked = __s35param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isDefeated", {
    get: function () {
      return this._isDefeated;
    },
    set: function (__s39param0) {
      this._isDefeated = __s39param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "orUnlockIDs", {
    get: function () {
      return this._orUnlockIDs;
    },
    set: function (__s43param0) {
      this._orUnlockIDs = __s43param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isStartNode", {
    get: function () {
      return this._nodeID == TMapNodeVO.START_NODE_ID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isEndNode", {
    get: function () {
      return this._isEndNode;
    },
    set: function (__s49param0) {
      this._isEndNode = __s49param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "mapID", {
    get: function () {
      return this._mapID;
    },
    set: function (__s53param0) {
      this._mapID = __s53param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "nodeType", {
    get: function () {
      return this._nodeType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "wallLevel", {
    get: function () {
      return Math.min(__dep_exact_26a421b704832cff.DungeonConst.getWallUpgradeByLevel(this._dungeonlevel), 2);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "keepLevel", {
    get: function () {
      return this.wallLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "towerLevel", {
    get: function () {
      return this.wallLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "gateLevel", {
    get: function () {
      return this.wallLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "moatLevel", {
    get: function () {
      return this.wallLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "crestVO", {
    get: function () {
      return this._crestVO;
    },
    set: function (__s69param0) {
      this._crestVO = __s69param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "hasCoolDown", {
    get: function () {
      return this.coolDownEndStemp - __dep_export_CachedTimer.CachedTimer.getCachedTimer() > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "payedGoods", {
    get: function () {
      return this._payedGoods;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isDungeon", {
    get: function () {
      return this._nodeType == TMapNodeVO.NODE_TYPE_DUNGEON;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isBridgeDungeon", {
    get: function () {
      return this._nodeType == TMapNodeVO.NODE_TYPE_BRIDGEDUNGEON;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isMoralBooster", {
    get: function () {
      return this._nodeType == TMapNodeVO.NODE_TYPE_MORALBOOSTER;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isPort", {
    get: function () {
      return this._nodeType == TMapNodeVO.NODE_TYPE_PORT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isChar", {
    get: function () {
      return this._nodeType == TMapNodeVO.NODE_TYPE_CHAR;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isChest", {
    get: function () {
      return this._nodeType == TMapNodeVO.NODE_TYPE_CHEST;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isBridge", {
    get: function () {
      return this._nodeType == TMapNodeVO.NODE_TYPE_BRIDGE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isSwamp", {
    get: function () {
      return this._nodeType == TMapNodeVO.NODE_TYPE_SWAMP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isQuickSand", {
    get: function () {
      return this._nodeType == TMapNodeVO.NODE_TYPE_QUICK_SAND;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isTreasureHuntObstacle", {
    get: function () {
      return this.isBridge || this.isQuickSand || this.isSwamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "coolDownInRemainingSeconds", {
    get: function () {
      return (this.coolDownEndStemp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "partpaypriceVO", {
    get: function () {
      return this._partpaypriceVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "andUnlockIDs", {
    get: function () {
      return this._andUnlockIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "costsWoodC2", {
    get: function () {
      return this._costsWoodC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "costsStoneC2", {
    get: function () {
      return this._costsStoneC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "costsC1C2", {
    get: function () {
      return this._costsC1C2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "villageSize", {
    get: function () {
      return this._villageSize;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "wallBonus", {
    get: function () {
      return this._wallBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "gateBonus", {
    get: function () {
      return this._gateBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "rewardLists", {
    get: function () {
      return this._rewardLists;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "ownerID", {
    get: function () {
      return this._ownerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "mapIndex", {
    get: function () {
      if (this.eventID > 0) {
        return this.pos;
      } else {
        return this._nodeID;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "capturedProduction", {
    get: function () {
      return this._capturedProduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "coolDown", {
    get: function () {
      return this._coolDown;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isHighlighted", {
    get: function () {
      return this._isHighlighted;
    },
    set: function (__s127param0) {
      this._isHighlighted = __s127param0;
    },
    enumerable: true,
    configurable: true
  });
  TMapNodeVO.START_NODE_ID = 0;
  TMapNodeVO.NODE_TYPE_DUNGEON = "DUNGEON";
  TMapNodeVO.NODE_TYPE_BRIDGE = "BRIDGE";
  TMapNodeVO.NODE_TYPE_MORALBOOSTER = "MORALBOOSTER";
  TMapNodeVO.NODE_TYPE_BRIDGEDUNGEON = "BRIDGEDUNGEON";
  TMapNodeVO.NODE_TYPE_PORT = "PORT";
  TMapNodeVO.NODE_TYPE_CHAR = "CHAR";
  TMapNodeVO.NODE_TYPE_CHEST = "CHEST";
  TMapNodeVO.NODE_TYPE_SWAMP = "SWAMP";
  TMapNodeVO.NODE_TYPE_QUICK_SAND = "SAND";
  return TMapNodeVO;
}();
exports.TMapNodeVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble");
