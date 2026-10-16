Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstNPCs = require("gge-module:export_ClientConstNPCs");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __dep_export_BasicMapmovementVO = require("gge-module:export_BasicMapmovementVO");
var __s0local0 = function (__s1param0) {
  function ArmyAttackMapmovementVO() {
    var __s3local0 = this;
    __s3local0._guessedSize = 0;
    __s3local0._attackType = 0;
    __s3local0._isShadowMovement = false;
    __s3local0._isForceCancelable = false;
    __s3local0._armyState = 0;
    __s3local0._autoSkipCooldownType = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).name = ArmyAttackMapmovementVO.NAME;
    __s3local0.group = "Mapmovement";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ArmyAttackMapmovementVO, __s1param0);
  ArmyAttackMapmovementVO.prototype.loadFromParamObject = function (__s5param0) {
    __s1param0.prototype.loadFromParamObject.call(this, __s5param0);
    __dep_exact_9e901e8e2483a22f.debug("__________________________________________");
    __dep_exact_9e901e8e2483a22f.debug("FA: " + __s5param0.FA);
    __dep_exact_9e901e8e2483a22f.debug("GA: " + __s5param0.GA);
    __dep_exact_9e901e8e2483a22f.debug("GS: " + __s5param0.GS);
    if (__s5param0.FA) {
      this.parseArmy(__s5param0.FA);
      this._armyState = ArmyAttackMapmovementVO.ARMY_FULL;
    } else if (__s5param0.GA) {
      this.parseArmy(__s5param0.GA);
      this._armyState = ArmyAttackMapmovementVO.ARMY_FULL;
    } else if (__s5param0.GS) {
      this._guessedSize = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__s5param0.GS));
      this._armyState = ArmyAttackMapmovementVO.ARMY_SHORT;
    } else {
      __dep_exact_9e901e8e2483a22f.debug("no state found?");
    }
    this._attackType = parseInt(__s5param0.ATT);
    this._isShadowMovement = Boolean(__s5param0.SM);
    this._isForceCancelable = !!__s5param0.FC && Boolean(__s5param0.FC);
    if (this._attackArmyVO && __s5param0.AST) {
      this._attackArmyVO.parseSupportTools(__s5param0.AST);
    }
    if (__s5param0.ASCT) {
      this._autoSkipCooldownType = __s5param0.ASCT;
    }
  };
  ArmyAttackMapmovementVO.prototype.parseArmy = function (__s13param0) {
    this._attackArmyVO = new __dep_export_CastleCompactArmyVO.CastleCompactArmyVO();
    this._attackArmyVO.parseSimpleArmy(__s13param0);
    if (this._attackArmyVO && __s13param0.RW) {
      this._attackArmyVO.parseYardWave(__s13param0.RW);
    }
  };
  ArmyAttackMapmovementVO.prototype.getArmySizeLevel = function () {
    var __s16local0 = 0;
    if (this._guessedSize > 0) {
      __s16local0 = this._guessedSize;
    }
    if (this.attackArmyVO) {
      __s16local0 = __dep_exact_f855840627e6e145.int(this.attackArmyVO.itemsLeft.getSoldierCount() + this.attackArmyVO.itemsRight.getSoldierCount() + this.attackArmyVO.itemsMiddle.getSoldierCount());
    }
    if (__s16local0 < __dep_export_ClientConstCastle.ClientConstCastle.SMALL_ARMY_LIMIT) {
      return 1;
    } else if (__s16local0 > __dep_export_ClientConstCastle.ClientConstCastle.SMALL_ARMY_LIMIT && __s16local0 < __dep_export_ClientConstCastle.ClientConstCastle.BIG_ARMY_LIMIT) {
      return 2;
    } else if (__s16local0 >= __dep_export_ClientConstCastle.ClientConstCastle.BIG_ARMY_LIMIT) {
      return 3;
    } else {
      return 1;
    }
  };
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "isAccurateInfo", {
    get: function () {
      return this._armyState == ArmyAttackMapmovementVO.ARMY_FULL;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "armyState", {
    get: function () {
      return this._armyState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "armySize", {
    get: function () {
      if (this.attackArmyVO) {
        return this.attackArmyVO.itemsLeft.getUnitCount(null) + this.attackArmyVO.itemsRight.getUnitCount(null) + this.attackArmyVO.itemsMiddle.getUnitCount(null);
      } else {
        return this._guessedSize;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "canBeRetreated", {
    get: function () {
      return !!__dep_export_CastleModel.CastleModel.userData.hasLevelFor(__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_RETREAT_MOVEMENTS) && this.isMyMovement && !this.isReturnHome;
    },
    set: function (__s34param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapmovementVO.BasicMapmovementVO.prototype, "canBeRetreated").set.call(this, __s34param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "tooLateToBeRetreated", {
    get: function () {
      return !this.isForceCancelable && !this.isUselessNomadAttack() && !this.isFactionTowerAttack && this.getPassedTimeInSeconds() > __dep_exact_26a421b704832cff_2.TravelConst.MAX_FALLBACK_TIME;
    },
    set: function (__s38param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapmovementVO.BasicMapmovementVO.prototype, "tooLateToBeRetreated").set.call(this, __s38param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "isFactionTowerAttack", {
    get: function () {
      return this.targetArea.areaType == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_FACTION_TOWER;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "isFactionVillageAttack", {
    get: function () {
      return this.targetArea.areaType == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_FACTION_VILLAGE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "isAttackingMovement", {
    get: function () {
      return this.targetOwnerID == __dep_export_CastleModel.CastleModel.userData.playerID || this.targetOwnerID == __dep_exact_26a421b704832cff.DungeonConst.BASIC_DAIMYO_TOWNSHIP_PLAYER_ID;
    },
    set: function (__s46param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapmovementVO.BasicMapmovementVO.prototype, "isAttackingMovement").set.call(this, __s46param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "isAllyAttackingMovement", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.userData.isInAlliance && __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO) {
        for (var __s48local0 = 0; __s48local0 < __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.memberList.length; __s48local0++) {
          var __s48local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.memberList[__s48local0].playerID);
          if (this.targetOwnerID == __s48local1 && this.targetOwnerID != __dep_export_CastleModel.CastleModel.userData.playerID) {
            return true;
          }
        }
      }
      return false;
    },
    set: function (__s54param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapmovementVO.BasicMapmovementVO.prototype, "isAllyAttackingMovement").set.call(this, __s54param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "needGeneral", {
    get: function () {
      return this.isMyMovement;
    },
    set: function (__s58param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapmovementVO.BasicMapmovementVO.prototype, "needGeneral").set.call(this, __s58param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "attackArmyVO", {
    get: function () {
      return this._attackArmyVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "isConquerMovement", {
    get: function () {
      return this._attackType == __dep_exact_26a421b704832cff.CombatConst.ATTACK_TYPE_CONQUER;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "isConquerOutpostMovement", {
    get: function () {
      return this.isConquerMovement && (this._targetArea.areaType == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_OUTPOST || this._targetArea.areaType == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_FACTION_CAMP);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "isConquerCapitalMovement", {
    get: function () {
      return this.isConquerMovement && this._targetArea.areaType == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_CAPITAL;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "isConquerTradeCentralMovement", {
    get: function () {
      return this.isConquerMovement && this.targetArea.areaType == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_METROPOL;
    },
    enumerable: true,
    configurable: true
  });
  ArmyAttackMapmovementVO.prototype.isUselessNomadAttack = function () {
    return __dep_export_PlayerHelper.PlayerHelper.isNomadPlayer(this.targetOwnerID) && !__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
  };
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "isShadowMovement", {
    get: function () {
      return this._isShadowMovement;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "isForceCancelable", {
    get: function () {
      return this._isForceCancelable;
    },
    set: function (__s76param0) {
      this._isForceCancelable = __s76param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "attackType", {
    get: function () {
      return this._attackType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "showAsAllianceAttackWarning", {
    get: function () {
      return this._movementOwnerInfo.playerID == __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_ALLIANCE_NOMAD_CAMP || Object.getOwnPropertyDescriptor(__dep_export_BasicMapmovementVO.BasicMapmovementVO.prototype, "showAsAllianceAttackWarning").get.call(this);
    },
    set: function (__s82param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicMapmovementVO.BasicMapmovementVO.prototype, "showAsAllianceAttackWarning").set.call(this, __s82param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "foodSupply", {
    get: function () {
      if (this._attackArmyVO) {
        return this._attackArmyVO.foodSupply;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "meadSupply", {
    get: function () {
      if (this._attackArmyVO) {
        return this._attackArmyVO.meadSupply;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "beefSupply", {
    get: function () {
      if (this._attackArmyVO) {
        return this._attackArmyVO.beefSupply;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "autoSkipCooldownType", {
    get: function () {
      return this._autoSkipCooldownType;
    },
    enumerable: true,
    configurable: true
  });
  ArmyAttackMapmovementVO.__initialize_static_members = function () {
    ArmyAttackMapmovementVO.ARMY_FULL = 0;
    ArmyAttackMapmovementVO.ARMY_SHORT = 2;
    ArmyAttackMapmovementVO.NAME = "Armyattack";
  };
  return ArmyAttackMapmovementVO;
}(__dep_export_BasicMapmovementVO.BasicMapmovementVO);
exports.ArmyAttackMapmovementVO = __s0local0;
var __dep_export_CastleCompactArmyVO = require("gge-module:export_CastleCompactArmyVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IMapMovementVO", "IArmyMapmovementVO");
__s0local0.__initialize_static_members();
