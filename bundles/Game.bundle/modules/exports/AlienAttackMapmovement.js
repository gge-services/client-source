Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstNPCs = require("gge-module:export_ClientConstNPCs");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleWorldmapConst = require("gge-module:export_CastleWorldmapConst");
var __dep_export_ArmyattackMapmovement = require("gge-module:export_ArmyattackMapmovement");
var __s0local0 = function (__s1param0) {
  function AlienAttackMapmovement() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AlienAttackMapmovement, __s1param0);
  AlienAttackMapmovement.prototype.initVisualRep = function () {
    __s1param0.prototype.initVisualRep.call(this);
    if (!this.mapMovementVO.isAttackingMovement) {
      var __s5local0 = this.mapMovementVO.sourceArea.getDisplayObjectClipContainer(false, null);
      __s5local0.asDisplayObject().scaleX = __s5local0.asDisplayObject().scaleY /= __dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_MAX;
      this.baseCampLayer.addChild(__s5local0.asDisplayObject());
    }
  };
  Object.defineProperty(AlienAttackMapmovement.prototype, "baseClipName", {
    get: function () {
      var __s8local0;
      switch (this.mapMovementVO.movementOwnerID) {
        case __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_RED_ALIEN_INVASION:
          __s8local0 = "Army_Mapmovement_RedAlienInvasion";
          break;
        default:
          __s8local0 = "Army_Mapmovement_UserInvasion";
      }
      return __s8local0;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyattackMapmovement.ArmyattackMapmovement.prototype, "baseClipName").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlienAttackMapmovement.prototype, "kingdomAffix", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this.mapMovementVO.kingdomID).kingdomName;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ArmyattackMapmovement.ArmyattackMapmovement.prototype, "kingdomAffix").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  return AlienAttackMapmovement;
}(__dep_export_ArmyattackMapmovement.ArmyattackMapmovement);
exports.AlienAttackMapmovement = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IIngameUICapable", "IWorldmapTooltipData");
