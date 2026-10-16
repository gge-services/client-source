Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectEnum = require("gge-module:export_CastleEffectEnum");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_IsoBuildingStateEnum = require("gge-module:export_IsoBuildingStateEnum");
var __dep_export_AResourceProductionBuildingVO = require("gge-module:export_AResourceProductionBuildingVO");
var __s0local0 = function (__s1param0) {
  function KeepBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(KeepBuildingVO, __s1param0);
  Object.defineProperty(KeepBuildingVO.prototype, "canCollectTax", {
    get: function () {
      return this.buildingState == __dep_export_IsoBuildingStateEnum.IsoBuildingStateEnum.BUILD_COMPLETED && this.taxInfoVO.isTaxReadyForCollection && __dep_export_Iso.Iso.data.areaData.isMyArea && !__dep_export_Iso.Iso.data.areaData.isUnderConquerProcess;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KeepBuildingVO.prototype, "taxCollectProgressAsFactor", {
    get: function () {
      return Number(this.taxInfoVO.currentIncome) / this.taxInfoVO.expectedIncome;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KeepBuildingVO.prototype, "usesColorFourCrest", {
    get: function () {
      return true;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResourceProductionBuildingVO.AResourceProductionBuildingVO.prototype, "usesColorFourCrest").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KeepBuildingVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return !this.taxInfoVO.isTaxReadyForCollection;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResourceProductionBuildingVO.AResourceProductionBuildingVO.prototype, "isRingmenuAvailable").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KeepBuildingVO.prototype, "isClickAvailable", {
    get: function () {
      return this.taxInfoVO.isTaxReadyForCollection;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResourceProductionBuildingVO.AResourceProductionBuildingVO.prototype, "isClickAvailable").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  KeepBuildingVO.prototype.createInfoPanelItems = function (__s21param0) {
    __s21param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BuildNoShadow, "buildingSpeed", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [__dep_export_Iso.Iso.data.areaData.commonInfo.buildSpeedBoost]), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.BUILDSPEEDBOOST));
    __s21param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "protection_tt", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.DECOPOINTS));
    if (!__dep_export_SpecialServerHelper.SpecialServerHelper.isOnSpecialServer) {
      __s21param0.addInfoItem(Library.CastleInterfaceElements.Icon_UnitAmount_Keep, "unitsInCourtyard_limit_player_tooltip", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength));
    }
    if (!__dep_export_SpecialServerHelper.SpecialServerHelper.isOnSpecialServer) {
      __s21param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_AllianceDefenseUnitAmountYardBonus, "allianceDefenseUnitAmount", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ALLIANCE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength));
    }
  };
  KeepBuildingVO.prototype.createInfoDialogItems = function (__s25param0) {
    __s25param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BuildNoShadow, "buildingSpeed", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [this._buildSpeedBoost + 100]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    __s25param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_SaveStorage, "saveStorage", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.maxStorageValue), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    if (!__dep_export_SpecialServerHelper.SpecialServerHelper.isOnSpecialServer) {
      __s25param0.addInfoItem(Library.CastleInterfaceElements.Icon_UnitAmount_Keep, "unitsInCourtyard_limit_player_tooltip", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
    if (!__dep_export_SpecialServerHelper.SpecialServerHelper.isOnSpecialServer) {
      __s25param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_AllianceDefenseUnitAmountYardBonus, "allianceDefenseUnitAmount", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ALLIANCE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  Object.defineProperty(KeepBuildingVO.prototype, "taxInfoVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.taxData.taxInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KeepBuildingVO.prototype, "hasFlag", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  KeepBuildingVO.prototype.getUpgradeInfoString = function () {
    if (this._level >= 5) {
      return "keep_upgrade_LegendTemple_info";
    } else {
      return __s1param0.prototype.getUpgradeInfoString.call(this);
    }
  };
  return KeepBuildingVO;
}(__dep_export_AResourceProductionBuildingVO.AResourceProductionBuildingVO);
exports.KeepBuildingVO = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
