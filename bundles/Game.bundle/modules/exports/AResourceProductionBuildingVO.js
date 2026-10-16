Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectEnum = require("gge-module:export_CastleEffectEnum");
var __dep_export_CastleLaboratoryEffectHelper = require("gge-module:export_CastleLaboratoryEffectHelper");
var __dep_export_CollectableItemBeefVO = require("gge-module:export_CollectableItemBeefVO");
var __s0local0 = function (__s1param0) {
  function AResourceProductionBuildingVO() {
    var __s3local0 = this;
    __s3local0._resourceProductions = new __dep_export_CollectableList.CollectableList();
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AResourceProductionBuildingVO, __s1param0);
  AResourceProductionBuildingVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this._resourceProductions = __dep_export_CollectableManager.CollectableManager.parser.createGoodsListSave(new __dep_export_CollectableItemWoodVO.CollectableItemWoodVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Woodproduction", __s5param0)), new __dep_export_CollectableItemStoneVO.CollectableItemStoneVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Stoneproduction", __s5param0)), new __dep_export_CollectableItemFoodVO.CollectableItemFoodVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Foodproduction", __s5param0)), new __dep_export_CollectableItemCoalVO.CollectableItemCoalVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Coalproduction", __s5param0)), new __dep_export_CollectableItemOilVO.CollectableItemOilVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Oilproduction", __s5param0)), new __dep_export_CollectableItemGlassVO.CollectableItemGlassVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Glassproduction", __s5param0)), new __dep_export_CollectableItemIronVO.CollectableItemIronVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Ironproduction", __s5param0)), new __dep_export_CollectableItemMeadVO.CollectableItemMeadVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Meadproduction", __s5param0)), new __dep_export_CollectableItemBeefVO.CollectableItemBeefVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Beefproduction", __s5param0)), new __dep_export_CollectableItemHoneyVO.CollectableItemHoneyVO(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("Honeyproduction", __s5param0)));
  };
  AResourceProductionBuildingVO.prototype.getBaseProductionValue = function () {
    var __s7local0 = this.resourceProductions.getAmountOrDefaultByType(this.resourceType);
    switch (this.resourceType) {
      case __dep_export_CollectableEnum.CollectableEnum.WOOD:
        __s7local0 += this.getConstructionItemEffectValue(__dep_export_CastleEffectEnum.CastleEffectEnum.WOODPRODUCTION);
        break;
      case __dep_export_CollectableEnum.CollectableEnum.STONE:
        __s7local0 += this.getConstructionItemEffectValue(__dep_export_CastleEffectEnum.CastleEffectEnum.STONEPRODUCTION);
        break;
      case __dep_export_CollectableEnum.CollectableEnum.FOOD:
        __s7local0 += this.getConstructionItemEffectValue(__dep_export_CastleEffectEnum.CastleEffectEnum.FOODPRODUCTION);
        break;
      case __dep_export_CollectableEnum.CollectableEnum.COAL:
        __s7local0 += this.getConstructionItemEffectValue(__dep_export_CastleEffectEnum.CastleEffectEnum.COALPRODUCTION);
        break;
      case __dep_export_CollectableEnum.CollectableEnum.OIL:
        __s7local0 += this.getConstructionItemEffectValue(__dep_export_CastleEffectEnum.CastleEffectEnum.OILPRODUCTION);
        break;
      case __dep_export_CollectableEnum.CollectableEnum.GLASS:
        __s7local0 += this.getConstructionItemEffectValue(__dep_export_CastleEffectEnum.CastleEffectEnum.GLASSPRODUCTION);
        break;
      case __dep_export_CollectableEnum.CollectableEnum.IRON:
        __s7local0 += this.getConstructionItemEffectValue(__dep_export_CastleEffectEnum.CastleEffectEnum.IRONPRODUCTION);
        break;
      case __dep_export_CollectableEnum.CollectableEnum.HONEY:
        __s7local0 += this.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_HONEY_PRODUCTION_INCREASE).strength;
        break;
      case __dep_export_CollectableEnum.CollectableEnum.MEAD:
        __s7local0 += this.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MEAD_PRODUCTION_INCREASE).strength;
        break;
      case __dep_export_CollectableEnum.CollectableEnum.BEEF:
        __s7local0 += this.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_BEEF_PRODUCTION_INCREASE).strength;
    }
    return __s7local0;
  };
  AResourceProductionBuildingVO.prototype.getFinalProductionValue = function () {
    var __s10local0 = this.getBaseProductionValue();
    __s10local0 *= this.getFinalProductivityFactor();
    switch (this.resourceType) {
      case __dep_export_CollectableEnum.CollectableEnum.WOOD:
        __s10local0 += this.getConstructionItemEffectValue(__dep_export_CastleEffectEnum.CastleEffectEnum.UNBOOSTEDWOODPRODUCTION);
        break;
      case __dep_export_CollectableEnum.CollectableEnum.STONE:
        __s10local0 += this.getConstructionItemEffectValue(__dep_export_CastleEffectEnum.CastleEffectEnum.UNBOOSTEDSTONEPRODUCTION);
        break;
      case __dep_export_CollectableEnum.CollectableEnum.FOOD:
        __s10local0 += this.getConstructionItemEffectValue(__dep_export_CastleEffectEnum.CastleEffectEnum.UNBOOSTEDFOODPRODUCTION);
        break;
      case __dep_export_CollectableEnum.CollectableEnum.HONEY:
        __s10local0 += this.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNBOOSTED_HONEY_PRODUCTION).strength;
        break;
      case __dep_export_CollectableEnum.CollectableEnum.MEAD:
        __s10local0 += this.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNBOOSTED_MEAD_PRODUCTION).strength;
        break;
      case __dep_export_CollectableEnum.CollectableEnum.BEEF:
        __s10local0 += this.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNBOOSTED_BEEF_PRODUCTION).strength;
    }
    return __s10local0;
  };
  AResourceProductionBuildingVO.prototype.getBaseProductivityFactor = function () {
    var __s13local0 = __dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(this.resourceType).boostFactor;
    return __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.getLawAndOrderFactor() * __s13local0 * this.getLaboratoryBoostFactor() * __dep_exact_26a421b704832cff.ConstructionConst.getDamageFactor(this.hitPoints);
  };
  AResourceProductionBuildingVO.prototype.getFinalProductivityFactor = function () {
    return this.efficiency / 100 * this.getBaseProductivityFactor();
  };
  Object.defineProperty(AResourceProductionBuildingVO.prototype, "isInfluencedByLaboratoryInKingdom", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  AResourceProductionBuildingVO.prototype.getLaboratoryBoostFactor = function () {
    var __s19local0 = this.isInfluencedByLaboratoryInKingdom;
    if (__s19local0) {
      return __dep_exact_f855840627e6e145.int(__dep_export_CastleLaboratoryEffectHelper.CastleLaboratoryEffectHelper.laboratoryResourceBonus(__s19local0.id)) / 100 + 1;
    } else {
      return 1;
    }
  };
  Object.defineProperty(AResourceProductionBuildingVO.prototype, "isOverseerBoosted", {
    get: function () {
      var __s23local0 = __dep_export_CastleModel.CastleModel.boostData.getOverseer(this.resourceType);
      return !!__s23local0 && __s23local0.isActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourceProductionBuildingVO.prototype, "resourceType", {
    get: function () {
      return __dep_export_CollectableEnum.CollectableEnum.UNKNOWN;
    },
    enumerable: true,
    configurable: true
  });
  AResourceProductionBuildingVO.prototype.needsResourceTypeInCastle = function (__s27param0) {
    return this.resourceProductions.getAmountOrDefaultByType(__s27param0) > 0 || __s1param0.prototype.needsResourceTypeInCastle.call(this, __s27param0);
  };
  Object.defineProperty(AResourceProductionBuildingVO.prototype, "resourceProductions", {
    get: function () {
      return this._resourceProductions;
    },
    enumerable: true,
    configurable: true
  });
  return AResourceProductionBuildingVO;
}(require("gge-module:export_AProductionBuildingVO").AProductionBuildingVO);
exports.AResourceProductionBuildingVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableItemCoalVO = require("gge-module:export_CollectableItemCoalVO");
var __dep_export_CollectableItemFoodVO = require("gge-module:export_CollectableItemFoodVO");
var __dep_export_CollectableItemGlassVO = require("gge-module:export_CollectableItemGlassVO");
var __dep_export_CollectableItemIronVO = require("gge-module:export_CollectableItemIronVO");
var __dep_export_CollectableItemOilVO = require("gge-module:export_CollectableItemOilVO");
var __dep_export_CollectableItemStoneVO = require("gge-module:export_CollectableItemStoneVO");
var __dep_export_CollectableItemWoodVO = require("gge-module:export_CollectableItemWoodVO");
var __dep_export_CollectableItemMeadVO = require("gge-module:export_CollectableItemMeadVO");
var __dep_export_CollectableItemHoneyVO = require("gge-module:export_CollectableItemHoneyVO");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");
