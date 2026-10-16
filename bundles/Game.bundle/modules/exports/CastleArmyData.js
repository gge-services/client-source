Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleArmyDataEvent = require("gge-module:export_CastleArmyDataEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_instanceOf_IArmyMapmovementVO = require("gge-module:export_instanceOf_IArmyMapmovementVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleArmyData() {
    var __s3local0 = this;
    __s3local0._attacksOnPlayerCount = 0;
    __s3local0._attacksOnAlliesCount = 0;
    __s3local0._attacksOnAllianceCityCount = 0;
    __s3local0._nextAttackingArmyTimestamp = 0;
    __s3local0._nextAllyAttackingArmyTimestamp = 0;
    __s3local0._nextAllianceCityAttackingArmyTimestamp = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).reset();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleArmyData, __s1param0);
  CastleArmyData.prototype.reset = function () {
    __s1param0.prototype.reset.call(this);
    this._mapMovements = new Map();
    this._attacksOnPlayerCount = 0;
    this._attacksOnAlliesCount = 0;
    this._attacksOnAllianceCityCount = 0;
    this._nextAttackingArmyTimestamp = 0;
    this._nextAllyAttackingArmyTimestamp = 0;
    this._nextAllianceCityAttackingArmyTimestamp = 0;
  };
  CastleArmyData.prototype.resetAndRemove = function () {
    if (this._mapMovements != null) {
      for (var __s7local0 = 0, __s7local1 = Array.from(this._mapMovements.values()); __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        if (__s7local2 !== undefined) {
          this.removeArmyMovementById(__s7local2.objectId);
          __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleArmyDataEvent.CastleArmyDataEvent(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.MOVEMENTS_CHANGED));
        }
      }
    }
    this.updateABGWorldMap();
    this.reset();
  };
  CastleArmyData.prototype.parseMapMovementArray = function (__s13param0) {
    if (__s13param0) {
      this._mapMovements ||= new Map();
      for (var __s13local0 = 0; __s13local0 < __s13param0.length; __s13local0++) {
        var __s13local1 = __s13param0[__s13local0];
        var __s13local2 = __dep_export_MapmovementFactory.MapmovementFactory.parseMapMovement(__s13local1);
        this.removeArmyMovementById(__s13local2.objectId);
        this._mapMovements.set(__s13local2.objectId, __s13local2);
        __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleArmyDataEvent.CastleArmyDataEvent(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.NEW_MOVEMENT, __s13local2));
      }
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleArmyDataEvent.CastleArmyDataEvent(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.MOVEMENTS_CHANGED));
      this.updateABGWorldMap();
    }
  };
  CastleArmyData.prototype.parse_MRM = function (__s18param0) {
    this.removeArmyMovementById(__s18param0);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleArmyDataEvent.CastleArmyDataEvent(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.MOVEMENTS_CHANGED));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleArmyDataEvent.CastleArmyDataEvent(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.MOVEMENTS_REMOVED));
    this.updateABGWorldMap();
  };
  CastleArmyData.prototype.parse_MFC = function (__s20param0) {
    var __s20local0 = this.getMovementByID(__s20param0.MID);
    if (__s20local0) {
      if (__s20local0) {
        __s20local0.isForceCancelable = true;
      }
      if (__s20local0) {
        __s20local0.isForceCancelable = true;
      }
    }
  };
  CastleArmyData.prototype.getMovementByID = function (__s25param0) {
    return this._mapMovements.get(__s25param0);
  };
  CastleArmyData.prototype.parse_GAM = function (__s27param0) {
    this.parseMapMovementArray(__s27param0.M);
    this.checkAllAttackMovements();
  };
  CastleArmyData.prototype.parse_ASR = function (__s29param0) {
    this.parseMapMovementArray([__s29param0.A]);
    this.checkAllAttackMovements();
  };
  CastleArmyData.prototype.parse_ABR = function (__s31param0) {
    this.parseMapMovementArray([__s31param0.A]);
    this.checkAllAttackMovements();
  };
  CastleArmyData.prototype.getAreaSiegeMovement = function (__s33param0) {
    if (this._mapMovements != null) {
      for (var __s33local0 = 0, __s33local1 = Array.from(this._mapMovements.values()); __s33local0 < __s33local1.length; __s33local0++) {
        var __s33local2 = __s33local1[__s33local0];
        if (__s33local2 !== undefined && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s33local2, "SiegeMapmovementVO") && __s33local2.targetArea.absAreaPos.equals(__s33param0.absAreaPos)) {
          return __s33local2;
        }
      }
    }
    return null;
  };
  Object.defineProperty(CastleArmyData.prototype, "hasCapitalOwnConquerMovement", {
    get: function () {
      if (this._mapMovements && this._mapMovements != null) {
        for (var __s39local0 = 0, __s39local1 = Array.from(this._mapMovements.values()); __s39local0 < __s39local1.length; __s39local0++) {
          var __s39local2 = __s39local1[__s39local0];
          if (__s39local2 !== undefined && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s39local2, "ArmyAttackMapmovementVO") && __s39local2.isConquerCapitalMovement && __s39local2.targetArea.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_CAPITAL && __s39local2.isMyMovement) {
            return true;
          }
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArmyData.prototype, "hasMetropolOwnConquerMovement", {
    get: function () {
      if (this._mapMovements && this._mapMovements != null) {
        for (var __s45local0 = 0, __s45local1 = Array.from(this._mapMovements.values()); __s45local0 < __s45local1.length; __s45local0++) {
          var __s45local2 = __s45local1[__s45local0];
          if (__s45local2 !== undefined) {
            if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s45local2, "ArmyAttackMapmovementVO")) {
              return __s45local2.isConquerTradeCentralMovement && __s45local2.targetArea.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_METROPOL && __s45local2.isMyMovement;
            }
            if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s45local2, "SiegeMapmovementVO")) {
              return __s45local2.targetArea.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_METROPOL && __s45local2.isMyMovement;
            }
          }
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  CastleArmyData.prototype.checkAllAttackMovements = function () {
    this._attacksOnPlayerCount = 0;
    this._attacksOnAlliesCount = 0;
    this._attacksOnAllianceCityCount = 0;
    this._nextAttackingArmyTimestamp = 0;
    this._nextAllyAttackingArmyTimestamp = 0;
    this._nextAllianceCityAttackingArmyTimestamp = 0;
    var __s53local0 = 0;
    var __s53local1 = 0;
    if (this._mapMovements != null) {
      for (var __s53local2 = 0, __s53local3 = Array.from(this._mapMovements.values()); __s53local2 < __s53local3.length; __s53local2++) {
        var __s53local4 = __s53local3[__s53local2];
        if (__s53local4 !== undefined && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s53local4, "ArmyAttackMapmovementVO")) {
          if (__s53local4.isAttackingMovement) {
            this._attacksOnPlayerCount++;
            if (__s53local0 == 0 || __s53local0 > __s53local4.getTimeUntiMovmentReachTargetInMilliSeconds()) {
              __s53local0 = __s53local4.getTimeUntiMovmentReachTargetInMilliSeconds();
              this._nextAttackingArmyTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s53local0;
            }
          } else if (__s53local4.isAllyAttackingMovement && __s53local4.showAsAllianceAttackWarning && __s53local4.movementOwnerID != __dep_export_CastleModel.CastleModel.userData.playerID) {
            this._attacksOnAlliesCount++;
            if (__s53local1 == 0 || __s53local1 > __s53local4.getTimeUntiMovmentReachTargetInMilliSeconds()) {
              __s53local1 = __s53local4.getTimeUntiMovmentReachTargetInMilliSeconds();
              this._nextAllyAttackingArmyTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s53local1;
            }
          }
        }
      }
    }
    this.dispatchEvent(new __dep_export_CastleArmyDataEvent.CastleArmyDataEvent(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.ATTACK_WARNINGS_UPDATED));
  };
  CastleArmyData.prototype.getRemainingAttackTimeInMilliseconds = function () {
    return __dep_exact_f855840627e6e145.int(Math.max(0, this._nextAttackingArmyTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()));
  };
  CastleArmyData.prototype.getRemainingAllyAttackTimeInMilliseconds = function () {
    return __dep_exact_f855840627e6e145.int(Math.max(0, this._nextAllyAttackingArmyTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()));
  };
  CastleArmyData.prototype.getRemainingAllianceCityAttackTimeInMilliseconds = function () {
    return __dep_exact_f855840627e6e145.int(Math.max(0, this._nextAllianceCityAttackingArmyTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()));
  };
  CastleArmyData.prototype.executeUpdate = function (__s69param0) {
    this.updateMapmovements();
  };
  CastleArmyData.prototype.updateMapmovements = function () {
    if (this._mapMovements) {
      var __s71local0 = false;
      if (this._mapMovements != null) {
        for (var __s71local1 = 0, __s71local2 = Array.from(this._mapMovements.values()); __s71local1 < __s71local2.length; __s71local1++) {
          var __s71local3 = __s71local2[__s71local1];
          if (__s71local3 !== undefined && __s71local3.currentProgress >= 1) {
            this.removeArmyMovementById(__s71local3.objectId);
            __s71local0 = true;
            __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleArmyDataEvent.CastleArmyDataEvent(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.MOVEMENTS_CHANGED));
          }
        }
      }
      if (__s71local0) {
        this.updateABGWorldMap();
      }
    }
  };
  CastleArmyData.prototype.removeArmyMovementById = function (__s79param0) {
    if (this._mapMovements) {
      if (this._mapMovements.get(__s79param0)) {
        __s79local0 = this._mapMovements.get(__s79param0);
        this._mapMovements.delete(__s79param0);
        __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleArmyDataEvent.CastleArmyDataEvent(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.REMOVE_MOVEMENT, __s79local0));
      }
      this.checkAllAttackMovements();
      return __s79local0;
    } else {
      return null;
    }
    var __s79local0;
  };
  CastleArmyData.prototype.removeAllMovementsByKingdomID = function (__s84param0) {
    var __s84local0 = [];
    if (this._mapMovements != null) {
      for (var __s84local1 = 0, __s84local2 = Array.from(this._mapMovements.values()); __s84local1 < __s84local2.length; __s84local1++) {
        var __s84local3 = __s84local2[__s84local1];
        if (__s84local3 !== undefined) {
          if (!__s84local3) {
            break;
          }
          if (!__s84local3.sourceArea || !__s84local3.targetArea || __s84local3.sourceArea.kingdomID == __s84param0 || __s84local3.targetArea.kingdomID == __s84param0) {
            __s84local0.push(__s84local3.objectId);
          }
        }
      }
    }
    for (var __s84local4 = 0; __s84local4 < __s84local0.length; ++__s84local4) {
      this.removeArmyMovementById(__s84local0[__s84local4]);
    }
    this.checkAllAttackMovements();
    this.updateABGWorldMap();
  };
  CastleArmyData.prototype.getTreasureMovementsByMapID = function (__s94param0) {
    var __s94local0 = [];
    if (this._mapMovements != null) {
      for (var __s94local1 = 0, __s94local2 = Array.from(this._mapMovements.values()); __s94local1 < __s94local2.length; __s94local1++) {
        var __s94local3 = __s94local2[__s94local1];
        if (__s94local3 !== undefined && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s94local3, "TreasureHuntMovementVO") && __s94local3.treasureMapID == __s94param0 && __s94local3.getTimeUnitMovmentReachTargetInSeconds() > 0) {
          __s94local0.push(__s94local3);
        }
      }
    }
    if (__s94local0.length > 0) {
      return __s94local0;
    } else {
      return null;
    }
  };
  CastleArmyData.prototype.removeTreasureMovementsByMapID = function (__s102param0) {
    var __s102local0 = [];
    var __s102local1 = this.getTreasureMovementsByMapID(__s102param0);
    if (__s102local1) {
      for (var __s102local2 = 0, __s102local3 = __s102local1; __s102local2 < __s102local3.length; __s102local2++) {
        var __s102local4 = __s102local3[__s102local2];
        if (!__s102local4) {
          break;
        }
        __s102local0.push(__s102local4.objectId);
      }
    }
    for (var __s102local5 = 0; __s102local5 < __s102local0.length; ++__s102local5) {
      this.removeArmyMovementById(__s102local0[__s102local5]);
    }
    this.checkAllAttackMovements();
    this.updateABGWorldMap();
  };
  Object.defineProperty(CastleArmyData.prototype, "isAttackWarning", {
    get: function () {
      return this._attacksOnPlayerCount > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArmyData.prototype, "mapMovements", {
    get: function () {
      return this._mapMovements;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArmyData.prototype, "mapMovementsAsVector", {
    get: function () {
      var __s114local0 = [];
      if (this._mapMovements != null) {
        for (var __s114local1 = 0, __s114local2 = Array.from(this._mapMovements.values()); __s114local1 < __s114local2.length; __s114local1++) {
          var __s114local3 = __s114local2[__s114local1];
          if (__s114local3 !== undefined) {
            __s114local0.push(__s114local3);
          }
        }
      }
      return __s114local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArmyData.prototype, "isAllyAttackWarning", {
    get: function () {
      return this._attacksOnAlliesCount > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArmyData.prototype, "attacksOnAllianceCityCount", {
    get: function () {
      return this._attacksOnAllianceCityCount;
    },
    set: function (__s124param0) {
      this._attacksOnAllianceCityCount = __s124param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArmyData.prototype, "attacksOnAlliesCount", {
    get: function () {
      return this._attacksOnAlliesCount;
    },
    set: function (__s128param0) {
      this._attacksOnAlliesCount = __s128param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArmyData.prototype, "attacksOnPlayerCount", {
    get: function () {
      return this._attacksOnPlayerCount;
    },
    set: function (__s132param0) {
      this._attacksOnPlayerCount = __s132param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleArmyData.prototype.getAllMyMovementsByTargetType = function (__s134param0, __s134param1 = -1) {
    var __s134local0 = [];
    if (this._mapMovements != null) {
      for (var __s134local1 = 0, __s134local2 = Array.from(this._mapMovements.values()); __s134local1 < __s134local2.length; __s134local1++) {
        var __s134local3 = __s134local2[__s134local1];
        if (__s134local3 !== undefined) {
          if (__s134local3.kingdomID == __s134param1 || __s134param1 == -1) {
            if (__s134local3.isMyMovement && __s134local3.targetArea.areaType == __s134param0) {
              __s134local0.push(__s134local3);
            }
          }
        }
      }
    }
    return __s134local0;
  };
  Object.defineProperty(CastleArmyData.prototype, "nextAttackingArmyTimestamp", {
    set: function (__s142param0) {
      this._nextAttackingArmyTimestamp = __s142param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArmyData.prototype, "nextAllyAttackingArmyTimestamp", {
    set: function (__s144param0) {
      this._nextAllyAttackingArmyTimestamp = __s144param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArmyData.prototype, "nextAllianceCityAttackingArmyTimestamp", {
    set: function (__s146param0) {
      this._nextAllianceCityAttackingArmyTimestamp = __s146param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleArmyData.prototype.getMyMovementsFromArea = function (__s148param0) {
    var __s148local0 = [];
    if (this._mapMovements != null) {
      for (var __s148local1 = 0, __s148local2 = Array.from(this._mapMovements.values()); __s148local1 < __s148local2.length; __s148local1++) {
        var __s148local3 = __s148local2[__s148local1];
        if (__s148local3 !== undefined && __dep_export_instanceOf_IArmyMapmovementVO.instanceOf_IArmyMapmovementVO(__s148local3) && __s148local3.isMyMovement && (__s148local3.sourceArea.equalsOtherWMO(__s148param0.objectId, __s148param0.kingdomID) || __s148local3.targetArea.equalsOtherWMO(__s148param0.objectId, __s148param0.kingdomID) && __s148local3.isReturnHome)) {
          __s148local0.push(__s148local3);
        }
      }
    }
    return __s148local0;
  };
  CastleArmyData.prototype.getMyMovementsToAreaPos = function (__s154param0) {
    var __s154local0 = [];
    if (this._mapMovements != null) {
      for (var __s154local1 = 0, __s154local2 = Array.from(this._mapMovements.values()); __s154local1 < __s154local2.length; __s154local1++) {
        var __s154local3 = __s154local2[__s154local1];
        if (__s154local3 !== undefined && __dep_export_instanceOf_IArmyMapmovementVO.instanceOf_IArmyMapmovementVO(__s154local3) && __s154local3.isMyMovement && __s154local3.targetArea.absAreaPosX == __s154param0.absAreaPosX && __s154local3.targetArea.absAreaPosY == __s154param0.absAreaPosY && __s154local3.targetArea.kingdomID == __s154param0.kingdomID) {
          __s154local0.push(__s154local3);
        }
      }
    }
    return __s154local0;
  };
  CastleArmyData.prototype.getMovementsToAreaPos = function (__s160param0) {
    var __s160local0 = [];
    if (this._mapMovements != null) {
      for (var __s160local1 = 0, __s160local2 = Array.from(this._mapMovements.values()); __s160local1 < __s160local2.length; __s160local1++) {
        var __s160local3 = __s160local2[__s160local1];
        if (__s160local3 !== undefined && __dep_export_instanceOf_IArmyMapmovementVO.instanceOf_IArmyMapmovementVO(__s160local3) && __s160local3.targetArea.absAreaPosX == __s160param0.absAreaPosX && __s160local3.targetArea.absAreaPosY == __s160param0.absAreaPosY && __s160local3.targetArea.kingdomID == __s160param0.kingdomID) {
          __s160local0.push(__s160local3);
        }
      }
    }
    return __s160local0;
  };
  CastleArmyData.prototype.getMovementsFromAreaPos = function (__s166param0) {
    var __s166local0 = [];
    if (this._mapMovements != null) {
      for (var __s166local1 = 0, __s166local2 = Array.from(this._mapMovements.values()); __s166local1 < __s166local2.length; __s166local1++) {
        var __s166local3 = __s166local2[__s166local1];
        if (__s166local3 !== undefined && __dep_export_instanceOf_IArmyMapmovementVO.instanceOf_IArmyMapmovementVO(__s166local3) && __s166local3.sourceArea.absAreaPosX == __s166param0.absAreaPosX && __s166local3.sourceArea.absAreaPosY == __s166param0.absAreaPosY && __s166local3.sourceArea.kingdomID == __s166param0.kingdomID) {
          __s166local0.push(__s166local3);
        }
      }
    }
    return __s166local0;
  };
  CastleArmyData.prototype.getUnitSupportUnitCountToArea = function (__s172param0) {
    var __s172local0 = 0;
    if (this._mapMovements != null) {
      for (var __s172local1 = 0, __s172local2 = Array.from(this._mapMovements.values()); __s172local1 < __s172local2.length; __s172local1++) {
        var __s172local3 = __s172local2[__s172local1];
        if (__s172local3 !== undefined && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s172local3, "SupportDefenceMapmovementVO") && __s172local3.targetArea.absAreaPosX == __s172param0.absAreaPosX && __s172local3.targetArea.absAreaPosY == __s172param0.absAreaPosY && __s172local3.targetArea.kingdomID == __s172param0.kingdomID) {
          __s172local0 += __dep_exact_f855840627e6e145.int(__s172local3.armySize);
        }
      }
    }
    return __s172local0;
  };
  CastleArmyData.prototype.getSupportUnitsAtArea = function (__s178param0) {
    var __s178local0 = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    if (this._mapMovements != null) {
      Array.from(this._mapMovements.values()).forEach(function (__s181param0) {
        if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s181param0, "SupportDefenceMapmovementVO") && __s181param0.targetArea.absAreaPosX == __s178param0.absAreaPosX && __s181param0.targetArea.absAreaPosY == __s178param0.absAreaPosY && __s181param0.targetArea.kingdomID == __s178param0.kingdomID) {
          __s178local0.addAll(__s181param0.inventory.getUnits(null));
        }
      });
    }
    return __s178local0;
  };
  CastleArmyData.prototype.updateABGWorldMap = function () {
    if (__dep_export_ABGHelper.ABGHelper.isOnABGAndTower && __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP) {
      var __s184local0 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.getAreaViewportRectangle();
      __dep_export_CastleModel.CastleModel.worldmapData.updateAreaRange(__s184local0.x, __s184local0.y, __s184local0.x + __s184local0.width, __s184local0.y + __s184local0.height);
    }
  };
  CastleArmyData.prototype.getAdvisorMovements = function (__s187param0 = -1) {
    var __s187local0 = [];
    if (this.mapMovements) {
      __s187local0 = Array.from(this.mapMovements.values()).filter(function (__s190param0) {
        return __s190param0.isMyMovement && __s190param0.advisorType == __s187param0;
      });
    }
    return __s187local0;
  };
  return CastleArmyData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleArmyData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_MapmovementFactory = require("gge-module:export_MapmovementFactory");
var __dep_export_UnitInventoryDictionary = require("gge-module:export_UnitInventoryDictionary");
