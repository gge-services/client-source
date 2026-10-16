Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleWorldmapConst = require("gge-module:export_CastleWorldmapConst");
var __s0local0 = function (__s1param0) {
  function ArmyMapmovement() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ArmyMapmovement, __s1param0);
  ArmyMapmovement.prototype.drawMovementIcon = function () {
    this.initMovementIconContainer();
    var __s5local0 = this.baseClipName + ArmyMapmovement.CLIP_KINGDOM_AFFIX_SEPARATOR + this.kingdomAffix;
    var __s5local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s5local0, this.assetFileURL(__s5local0), this.clipColor, 0, false, null, false, 1, false, false, true);
    if (this.direction == 0) {
      __s5local1.scaleX = -1;
    }
    this._movementIconContainer.addChild(__s5local1);
    __s5local1.scaleX = Math.sign(__s5local1.scaleX) * (__s5local1.scaleY /= __dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_MAX);
    if (this.iArmyMapmovementVO && this.iArmyMapmovementVO.autoSkipCooldownType > __dep_exact_26a421b704832cff.AutoSkipCooldownConst.AUTO_SKIP_TYPE_OFF) {
      var __s5local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(ArmyMapmovement.CLIP_AUTOSKIP_INDICATOR, this.assetFileURL(ArmyMapmovement.CLIP_AUTOSKIP_INDICATOR), null, 0, false, null, false, 1, false, false, true);
      this._movementIconContainer.addChild(__s5local2);
      __s5local2.scaleX = __s5local2.scaleY /= __dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_MAX;
      __s5local2.doWhenLoaded(function () {
        __s5local2.currentshownDisplayObject.mouseChildren = false;
        __s5local2.currentshownDisplayObject.toolTipText = "dialog_armyMarching_autoCooldownSkip_active";
      });
    }
  };
  Object.defineProperty(ArmyMapmovement.prototype, "kingdomAffix", {
    get: function () {
      switch (this.mapMovementVO.kingdomID) {
        case __dep_exact_26a421b704832cff_1.WorldIsland.KINGDOM_ID:
          return __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff_1.WorldIsland.KINGDOM_ID).kingdomName;
        default:
          return "Common";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyMapmovement.prototype, "clipColor", {
    get: function () {
      var __s14local0 = [];
      __s14local0.push(new __dep_exact_9e901e8e2483a22f.ClipColor("flag", this.mapMovementVO.movementOwnerCrestVO.colorsFour));
      return __s14local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyMapmovement.prototype, "baseClipName", {
    get: function () {
      if (this.iArmyMapmovementVO.lordVO && !__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.iArmyMapmovementVO.lordVO, "BaronVO") && this.iArmyMapmovementVO.lordVO.equipmentSlots && this.iArmyMapmovementVO.lordVO.skinSlotVO && this.iArmyMapmovementVO.lordVO.skinSlotVO.equipmentVO && this.iArmyMapmovementVO.lordVO.skinSlotVO.equipmentVO.hasSkinInfo()) {
        return "Skin_Mapmovement_" + this.iArmyMapmovementVO.lordVO.skinSlotVO.equipmentVO.skinAssetID;
      }
      if (this.mapMovementVO.kingdomID == __dep_exact_26a421b704832cff_1.WorldIsland.KINGDOM_ID) {
        return "Army_Mapmovement_Level1";
      }
      switch (this.iArmyMapmovementVO.horseBoosterWod) {
        case -1:
          return "Army_Mapmovement_Level" + this.iArmyMapmovementVO.getArmySizeLevel();
        case __dep_export_ClientConstCastle.ClientConstCastle.HORSE_LEVEL1_WOD:
        case __dep_export_ClientConstCastle.ClientConstCastle.HORSE_LEVEL2_WOD:
        case __dep_export_ClientConstCastle.ClientConstCastle.HORSE_LEVEL3_WOD:
          return "Horse_Mapmovement_Level" + this.iArmyMapmovementVO.getArmySizeLevel();
        case __dep_export_ClientConstCastle.ClientConstCastle.HORSE_P1_LEVEL1_WOD:
        case __dep_export_ClientConstCastle.ClientConstCastle.HORSE_P1_LEVEL2_WOD:
        case __dep_export_ClientConstCastle.ClientConstCastle.HORSE_P2_LEVEL1_WOD:
        case __dep_export_ClientConstCastle.ClientConstCastle.HORSE_P2_LEVEL2_WOD:
        case __dep_export_ClientConstCastle.ClientConstCastle.HORSE_P3_LEVEL1_WOD:
        case __dep_export_ClientConstCastle.ClientConstCastle.HORSE_P3_LEVEL2_WOD:
          return "HorseP1_Mapmovement_Level" + this.iArmyMapmovementVO.getArmySizeLevel();
      }
      return "HorseP1_Mapmovement_Level3";
    },
    enumerable: true,
    configurable: true
  });
  ArmyMapmovement.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_MENU, [this, __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_ARMYATTACK]));
  };
  Object.defineProperty(ArmyMapmovement.prototype, "iArmyMapmovementVO", {
    get: function () {
      var __s23local0;
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.vo, "SiegeMapmovementVO")) {
        __s23local0 = this.vo;
      } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.vo, "ArmyAttackMapmovementVO")) {
        __s23local0 = this.vo;
      } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.vo, "ArmyTravelMapMovementVO")) {
        __s23local0 = this.vo;
      }
      return __s23local0;
    },
    enumerable: true,
    configurable: true
  });
  ArmyMapmovement.CLIP_KINGDOM_AFFIX_SEPARATOR = "_";
  ArmyMapmovement.CLIP_AUTOSKIP_INDICATOR = "Mapmovement_Indicator_Autoskip";
  return ArmyMapmovement;
}(require("gge-module:export_InteractiveMapmovement").InteractiveMapmovement);
exports.ArmyMapmovement = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IIngameUICapable", "IWorldmapTooltipData");
