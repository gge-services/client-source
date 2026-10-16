Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableItemBeefVO = require("gge-module:export_CollectableItemBeefVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_SimpleEffectSource = require("gge-module:export_SimpleEffectSource");
var __s0local0 = function () {
  function CastleTradeVO() {
    this.kingdomId = 0;
    this.startCastleID = 0;
    this.totalCarriages = 0;
    this.availableCarriages = 0;
    this.wood = 0;
    this.food = 0;
    this.stone = 0;
    this.coal = 0;
    this.oil = 0;
    this.glass = 0;
    this.iron = 0;
    this.mead = 0;
    this.beef = 0;
    this.honey = 0;
    this.targetCastlePosX = 0;
    this.targetCastlePosY = 0;
    this.costs = 0;
    this.travelTime = 0;
    this.travelDistance = NaN;
    this.unitCount = 0;
    this.targetAreaType = 0;
    this.isTravelTimeSubscriptionBoosted = false;
    this._areaEffects = new __dep_export_SimpleEffectSource.SimpleEffectSource();
  }
  CastleTradeVO.prototype.fillFromParamObject = function (__s5param0) {
    this.kingdomId = __dep_exact_f855840627e6e145.int(__s5param0.KID);
    this.startCastleID = __dep_exact_f855840627e6e145.int(__s5param0.CID);
    this.totalCarriages = __dep_exact_f855840627e6e145.int(__s5param0.TC);
    this.availableCarriages = __dep_exact_f855840627e6e145.int(__s5param0.AC);
    this.wood = __dep_exact_f855840627e6e145.int(__s5param0.W);
    this.food = __dep_exact_f855840627e6e145.int(__s5param0.F);
    this.stone = __dep_exact_f855840627e6e145.int(__s5param0.S);
    this.coal = __dep_exact_f855840627e6e145.int(__s5param0.C);
    this.oil = __dep_exact_f855840627e6e145.int(__s5param0.O);
    this.glass = __dep_exact_f855840627e6e145.int(__s5param0.G);
    this.iron = __dep_exact_f855840627e6e145.int(__s5param0.I);
    this.mead = __dep_exact_f855840627e6e145.int(__s5param0.MEAD);
    this.beef = __dep_exact_f855840627e6e145.int(__s5param0.BEEF);
    this.honey = __dep_exact_f855840627e6e145.int(__s5param0.HONEY);
    if (__s5param0.AE) {
      this._areaEffects.parseEffects(__s5param0.AE);
    }
  };
  CastleTradeVO.prototype.getMaxCapacityForCurrentLevel = function (__s8param0) {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.boostData.getResourcesTransportablePerCarriage(__dep_export_CastleModel.CastleModel.boostData.caravanOverloaderVO.level, this.getCapacityBoost(__s8param0), this.getCapacityBonus(__s8param0))) * this.availableCarriages;
  };
  CastleTradeVO.prototype.getCapacityBoost = function (__s10param0) {
    var __s10local0 = 100;
    return __s10local0 += this.areaEffects.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MARKET_CARRIAGE_CAPACITY_BOOST, __s10param0).strength;
  };
  CastleTradeVO.prototype.getCapacityBonus = function (__s12param0) {
    var __s12local0 = 0;
    var __s12local1 = __dep_export_CastleModel.CastleModel.lordData.getBaronByCastleId(this.startCastleID);
    if (__s12local1) {
      __s12local0 += __dep_exact_f855840627e6e145.int(__s12local1.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MARKET_CARRIAGE_CAPACITY_BONUS));
    }
    return __s12local0 += this.areaEffects.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MARKET_CARRIAGE_CAPACITY_BONUS, __s12param0).strength;
  };
  CastleTradeVO.prototype.getAreaSpeedBoostModifier = function (__s15param0) {
    return this.areaEffects.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MARKET_SPEED_BONUS, __s15param0).strength;
  };
  Object.defineProperty(CastleTradeVO.prototype, "isSubscriptionBuffActive", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.subscriptionData.isEffectTypeActive(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MARKET_CARRIAGE_CAPACITY_BOOST);
    },
    enumerable: true,
    configurable: true
  });
  CastleTradeVO.prototype.getResourcesAsCollectableList = function () {
    var __s19local0 = new __dep_export_CollectableList.CollectableList();
    __s19local0.addItem(new __dep_export_CollectableItemWoodVO.CollectableItemWoodVO(this.wood));
    __s19local0.addItem(new __dep_export_CollectableItemStoneVO.CollectableItemStoneVO(this.stone));
    __s19local0.addItem(new __dep_export_CollectableItemFoodVO.CollectableItemFoodVO(this.food));
    __s19local0.addItem(new __dep_export_CollectableItemCoalVO.CollectableItemCoalVO(this.coal));
    __s19local0.addItem(new __dep_export_CollectableItemOilVO.CollectableItemOilVO(this.oil));
    __s19local0.addItem(new __dep_export_CollectableItemGlassVO.CollectableItemGlassVO(this.glass));
    __s19local0.addItem(new __dep_export_CollectableItemIronVO.CollectableItemIronVO(this.iron));
    __s19local0.addItem(new __dep_export_CollectableItemMeadVO.CollectableItemMeadVO(this.mead));
    __s19local0.addItem(new __dep_export_CollectableItemBeefVO.CollectableItemBeefVO(this.beef));
    __s19local0.addItem(new __dep_export_CollectableItemHoneyVO.CollectableItemHoneyVO(this.honey));
    return __s19local0;
  };
  Object.defineProperty(CastleTradeVO.prototype, "areaEffects", {
    get: function () {
      return this._areaEffects;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTradeVO;
}();
exports.CastleTradeVO = __s0local0;
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
