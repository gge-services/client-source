Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CollectablesCosts = require("gge-module:export_CollectablesCosts");
var __dep_export_IsoExpansionEnum = require("gge-module:export_IsoExpansionEnum");
var __dep_export_AInteractiveIsoObjectVO = require("gge-module:export_AInteractiveIsoObjectVO");
var __s0local0 = function (__s1param0) {
  function CastleExpansionVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._direction = 0;
    __s3local0._expansionType = __dep_export_IsoExpansionEnum.IsoExpansionEnum.NORMAL;
    __s3local0._name = "Castle";
    __s3local0._group = "Expansion";
    __s3local0._type = "";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleExpansionVO, __s1param0);
  Object.defineProperty(CastleExpansionVO.prototype, "userHasResourcesForBuy", {
    get: function () {
      var __s5local0 = new __dep_export_CollectablesCosts.CollectablesCosts(__dep_export_CastleModel.CastleModel.expansionCostsData.getExpandCostNormal());
      return __dep_export_CostHelper.CostHelper.canAfford(__s5local0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVO.prototype, "userHasC2ForBuy", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.currencyData.c2Amount >= __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_export_CastleModel.CastleModel.expansionCostsData.getExpandCostC2());
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVO.prototype, "userHasLevelForBuyPremium", {
    get: function () {
      var __s9local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.ConstructionConst.getExpandLimitForC2(__dep_export_CastleModel.CastleModel.userData.userLevel, this.areaData.areaInfo.objectId, this.areaData.areaInfo.kingdomID));
      return this.areaData.isSeasonCamp || this.isoData.objects.groundObjects.expansionAmount < __s9local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVO.prototype, "userHasLevelForBuyNormal", {
    get: function () {
      if (!this.isoData) {
        return false;
      }
      var __s11local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.ConstructionConst.getExpandLimitForResources(__dep_export_CastleModel.CastleModel.userData.userLevel, this.areaData.areaInfo.objectId, this.areaData.areaInfo.kingdomID));
      return this.areaData.isSeasonCamp || this.isoData.objects.groundObjects.expansionAmount < __s11local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVO.prototype, "isSceatLocked", {
    get: function () {
      var __s14local0 = __dep_export_CastleModel.CastleModel.expansionCostsData.getCurrentExpansionCostsVO();
      return __s14local0.sceatSkillLocked > 0 && __dep_export_CastleModel.CastleModel.legendSkillData.getSceatSkillEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ENABLE_EXPANSION).rawValues.indexOf(__s14local0.expansionID) == -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return false;
    },
    set: function (__s18param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInteractiveIsoObjectVO.AInteractiveIsoObjectVO.prototype, "isInfoTooltipAvailable").set.call(this, __s18param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return false;
    },
    set: function (__s22param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInteractiveIsoObjectVO.AInteractiveIsoObjectVO.prototype, "isHoverGlowAvailable").set.call(this, __s22param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (__s26param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInteractiveIsoObjectVO.AInteractiveIsoObjectVO.prototype, "isRingmenuAvailable").set.call(this, __s26param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVO.prototype, "isClickAvailable", {
    get: function () {
      var __s28local0 = __dep_export_Iso.Iso.renderer.objects.provider.getObjectByVO(this);
      return !!__s28local0 && __s28local0.isHoveringOverClickElement;
    },
    set: function (__s30param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AInteractiveIsoObjectVO.AInteractiveIsoObjectVO.prototype, "isClickAvailable").set.call(this, __s30param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVO.prototype, "areaData", {
    get: function () {
      return this.isoData.areaData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVO.prototype, "storageData", {
    get: function () {
      return this.areaData.storage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVO.prototype, "direction", {
    get: function () {
      return this._direction;
    },
    set: function (__s38param0) {
      this._direction = __s38param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVO.prototype, "expansionType", {
    get: function () {
      return this._expansionType;
    },
    set: function (__s42param0) {
      this._expansionType = __s42param0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleExpansionVO;
}(__dep_export_AInteractiveIsoObjectVO.AInteractiveIsoObjectVO);
exports.CastleExpansionVO = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
