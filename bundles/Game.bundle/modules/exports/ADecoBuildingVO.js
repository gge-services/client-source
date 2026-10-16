Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_FusionForgeItemInfoVO = require("gge-module:export_FusionForgeItemInfoVO");
var __dep_export_CastleDataHolder = require("gge-module:export_CastleDataHolder");
var __dep_export_AEffectBuildingVO = require("gge-module:export_AEffectBuildingVO");
var __s0local0 = function (__s1param0) {
  function ADecoBuildingVO() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._fusionInfoVO = new __dep_export_FusionForgeItemInfoVO.FusionForgeItemInfoVO();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ADecoBuildingVO, __s1param0);
  ADecoBuildingVO.prototype.parseServerInfoShort = function (__s5param0) {
    this._wodId = __s5param0.WID;
    this._objectId = __s5param0.OID;
    this._fusionInfoVO.serverXP = __dep_exact_f855840627e6e145.int(__s5param0.FXP);
    this._fusionInfoVO.uniqueId = __dep_exact_f855840627e6e145.int(__s5param0.UID ? __s5param0.UID : -1);
  };
  ADecoBuildingVO.prototype.parseXmlNode = function (__s7param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s7param0);
    this._fusionInfoVO.parseXmlNode(__s7param0);
  };
  ADecoBuildingVO.prototype.cloneFrom = function (__s9param0) {
    __s1param0.prototype.cloneFrom.call(this, __s9param0);
    var __s9local0 = __s9param0;
    if (__s9local0) {
      this._fusionInfoVO.serverXP = __dep_exact_f855840627e6e145.int(__s9local0._fusionInfoVO.serverXP);
      this._fusionInfoVO.uniqueId = __dep_exact_f855840627e6e145.int(__s9local0._fusionInfoVO.uniqueId);
    }
  };
  Object.defineProperty(ADecoBuildingVO.prototype, "decoPoints", {
    get: function () {
      if (this._fusionInfoVO.isForged()) {
        return __dep_exact_26a421b704832cff.FusionConst.getDecorationPointsFromFusionLevel(this._fusionInfoVO.getCurrentLevel());
      } else if (this._fusionInfoVO.initialFusionLevel > 0 && this._decoPoints <= 0) {
        return __dep_exact_26a421b704832cff.FusionConst.getDecorationPointsFromFusionLevel(this._fusionInfoVO.initialFusionLevel);
      } else {
        return Object.getOwnPropertyDescriptor(__dep_export_AEffectBuildingVO.AEffectBuildingVO.prototype, "decoPoints").get.call(this);
      }
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AEffectBuildingVO.AEffectBuildingVO.prototype, "decoPoints").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  ADecoBuildingVO.prototype.getUpgradeInfoString = function () {
    return "";
  };
  ADecoBuildingVO.prototype.isFusionRelevant = function () {
    return true;
  };
  Object.defineProperty(ADecoBuildingVO.prototype, "uniqueBuildingId", {
    get: function () {
      return this._fusionInfoVO.uniqueId;
    },
    enumerable: true,
    configurable: true
  });
  ADecoBuildingVO.prototype.isUnique = function () {
    return this.fusionInfoVO.isForged();
  };
  ADecoBuildingVO.prototype.createStorageDialogItems = function (__s27param0) {
    var __s27local0 = this.allBuildingEffects && this.allBuildingEffects.length > 0;
    if (__s27local0) {
      this.createAdditionalEffectItems(__s27param0);
    }
    __s27param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_GridSize, "gridSize", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("filter_gridSize_custom", [this.width, this.height]));
    if (this.mightValue > 0 && !__s27local0) {
      __s27param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Might_starOnly_noShadow, "playerMight", new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.mightValue));
    }
    if (this.morality > 0 && !__s27local0) {
      __s27param0.addInfoItem(Library.CastleInterfaceElements.Icon_Morality, "morality", new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.morality));
    } else if (this.decoPoints > 0) {
      __s27param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.decoPoints));
    }
    if ((!!this.fusionInfoVO.isFusionSource || !!this.fusionInfoVO.isFusionTarget) && !__s27local0) {
      __s27param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Fusion_Level, "fusionLevel", new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.fusionInfoVO.getCurrentLevel()));
    }
  };
  ADecoBuildingVO.prototype.createAdditionalEffectItems = function (__s34param0) {
    this.allBuildingEffects.forEach(function (__s36param0) {
      var __s36local0 = __s36param0.effect.effectType.type.simpleEffectIconClass;
      var __s36local1 = __dep_exact_92d05af59ee2ff30.Localize.text("effect_name_" + __s36param0.effect.getEnhancedName(__s36param0.effectValue), __s36param0.effectValue.textReplacements) + (__dep_export_CastleDataHolder.CastleDataHolder.instance.showEffectTypeIDs ? "  || TypeID: " + __s36param0.effect.effectTypeID + " ||" : "");
      var __s36local2 = __dep_export_CastleModel.CastleModel.effectsData.getEffectCap(__s36param0.effect.capId);
      var __s36local3 = __s36local2 ? __s36local2.maxTotalBonus : Number.MAX_VALUE;
      var __s36local4 = __dep_exact_92d05af59ee2ff30.Localize.text(__s36param0.effect.effectType.type.simpleValueTextID == __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD ? "equipment_bonus_maximum_noPercentage" : "equipment_bonus_maximum", [__s36local3]);
      var __s36local5 = __s36local3 < Number.MAX_VALUE ? __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_SIMPLE_COMP, [__s36local1, __s36local4]) : __s36local1;
      __s34param0.addInfoItem(__s36local0, __s36local5, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s36param0.effect.effectType.type.simpleValueTextID, __s36param0.effectValue.textReplacements), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, false, false, true);
    });
  };
  Object.defineProperty(ADecoBuildingVO.prototype, "fusionInfoVO", {
    get: function () {
      return this._fusionInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  return ADecoBuildingVO;
}(__dep_export_AEffectBuildingVO.AEffectBuildingVO);
exports.ADecoBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO", "IUniqueBuildingVO");
