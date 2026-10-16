Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ArmyMapmovement = require("gge-module:export_ArmyMapmovement");
var __dep_export_BasicMapmovement = require("gge-module:export_BasicMapmovement");
var __s0local0 = function (__s1param0) {
  function ArmyattackMapmovement() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ArmyattackMapmovement, __s1param0);
  Object.defineProperty(ArmyattackMapmovement.prototype, "arrowColor", {
    get: function () {
      if (this.mapMovementVO.isMyMovement) {
        return 16737792;
      }
      switch (this.armyAttackMapmovementVO.armyState) {
        case __dep_export_ArmyAttackMapmovementVO.ArmyAttackMapmovementVO.ARMY_FULL:
          if (this.mapMovementVO.targetOwnerID == __dep_export_CastleModel.CastleModel.userData.playerID) {
            return 16711680;
          } else {
            return 7152959;
          }
        case __dep_export_ArmyAttackMapmovementVO.ArmyAttackMapmovementVO.ARMY_SHORT:
          if (this.mapMovementVO.targetOwnerID == __dep_export_CastleModel.CastleModel.userData.playerID) {
            return 9326630;
          } else {
            return 8336235;
          }
      }
      return Object.getOwnPropertyDescriptor(__dep_export_BasicMapmovement.BasicMapmovement.prototype, "arrowColor").get.call(this);
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyMapmovement.ArmyMapmovement.prototype, "arrowColor").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyattackMapmovement.prototype, "baseClipName", {
    get: function () {
      if (this.armyAttackMapmovementVO.isConquerOutpostMovement) {
        return "Army_Mapmovement_Baron";
      } else if (this.armyAttackMapmovementVO.isConquerCapitalMovement || this.armyAttackMapmovementVO.isConquerTradeCentralMovement) {
        return "Army_Mapmovement_Capital";
      } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.armyAttackMapmovementVO.sourceArea, "NomadKhanCampMapObjectVO")) {
        return "Army_Mapmovement_NomadKhanCampAttack";
      } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.armyAttackMapmovementVO.sourceArea, "DaimyoCastleMapObjectVO")) {
        return "Army_Mapmovement_DaimyoAttack";
      } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.armyAttackMapmovementVO.sourceArea, "WolfkingCastleMapObjectVO")) {
        return "Army_Mapmovement_WolfkingAttack";
      } else if (this.armyAttackMapmovementVO.isNPCMovement) {
        return "Army_Mapmovement_Dungeon";
      } else {
        return Object.getOwnPropertyDescriptor(__dep_export_ArmyMapmovement.ArmyMapmovement.prototype, "baseClipName").get.call(this);
      }
    },
    set: function (__s24param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyMapmovement.ArmyMapmovement.prototype, "baseClipName").set.call(this, __s24param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyattackMapmovement.prototype, "kingdomAffix", {
    get: function () {
      if (this.armyAttackMapmovementVO.isNPCMovement) {
        return __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this.mapMovementVO.kingdomID).kingdomName;
      } else {
        return Object.getOwnPropertyDescriptor(__dep_export_ArmyMapmovement.ArmyMapmovement.prototype, "kingdomAffix").get.call(this);
      }
    },
    set: function (__s30param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyMapmovement.ArmyMapmovement.prototype, "kingdomAffix").set.call(this, __s30param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyattackMapmovement.prototype, "armyAttackMapmovementVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return ArmyattackMapmovement;
}(__dep_export_ArmyMapmovement.ArmyMapmovement);
exports.ArmyattackMapmovement = __s0local0;
var __dep_export_ArmyAttackMapmovementVO = require("gge-module:export_ArmyAttackMapmovementVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IIngameUICapable", "IWorldmapTooltipData");
