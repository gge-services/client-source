Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_C2SCreateMarketMovementVO = require("gge-module:export_C2SCreateMarketMovementVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectConditionVO = require("gge-module:export_CastleEffectConditionVO");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __dep_export_ACastlePostActionDialog = require("gge-module:export_ACastlePostActionDialog");
var __s0local0 = function (__s1param0) {
  function CastlePostSendGoodsDialog(__s3param0 = null) {
    return __s1param0.call(this, __s3param0 || CastlePostSendGoodsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePostSendGoodsDialog, __s1param0);
  CastlePostSendGoodsDialog.prototype.showLoaded = function (__s5param0 = null) {
    __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_MERCHANT, this.dialogDisp.mc_char, 190, 135);
    __s1param0.prototype.showLoaded.call(this, __s5param0);
  };
  CastlePostSendGoodsDialog.prototype.sendGoods = function () {
    var __s7local0 = this.selectedHorse;
    var __s7local1 = __dep_exact_f855840627e6e145.int(__s7local0 ? __s7local0.wodId : -1);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SCreateMarketMovementVO.C2SCreateMarketMovementVO(__dep_export_CastleModel.CastleModel.userData.castleList.getKingdomIdByCastleId(this.tradeVO.startCastleID), this.tradeVO.startCastleID, this.tradeVO.targetCastlePosX, this.tradeVO.targetCastlePosY, __s7local1, this.tradeVO.goods, this.checkForHorsePayedWithPegasusTickets(), this.getSlowDownOffsetInSeconds()));
    this.callHideFunction();
    this.hide();
  };
  CastlePostSendGoodsDialog.prototype.callHideFunction = function () {
    if (this.dialogProperties.hideFunction != null) {
      this.dialogProperties.hideFunction();
    }
  };
  Object.defineProperty(CastlePostSendGoodsDialog.prototype, "tradeVO", {
    get: function () {
      return this.dialogProperties.castleTraveVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostSendGoodsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePostSendGoodsDialog.prototype.startTravelAction = function () {
    this.sendGoods();
  };
  Object.defineProperty(CastlePostSendGoodsDialog.prototype, "distance", {
    get: function () {
      return this.tradeVO.travelDistance;
    },
    set: function (__s20param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastlePostActionDialog.ACastlePostActionDialog.prototype, "distance").set.call(this, __s20param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostSendGoodsDialog.prototype, "cost", {
    get: function () {
      return this.tradeVO.costs;
    },
    set: function (__s24param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastlePostActionDialog.ACastlePostActionDialog.prototype, "cost").set.call(this, __s24param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostSendGoodsDialog.prototype, "unlockedHorses", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.permanentCastleData.getCastleByWorldAreaId(this.tradeVO.startCastleID, this.tradeVO.kingdomId).horsesVO.horses;
    },
    enumerable: true,
    configurable: true
  });
  CastlePostSendGoodsDialog.prototype.getTravelBoost = function (__s28param0) {
    return __dep_exact_f855840627e6e145.int(__s28param0.marketBoost);
  };
  CastlePostSendGoodsDialog.prototype.getBoostCostC1 = function (__s30param0) {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC1(__dep_exact_26a421b704832cff_1.MarketConst.getHorseCostC1(this.distance, this.tradeVO.unitCount, __s30param0.costFactorC1)));
  };
  CastlePostSendGoodsDialog.prototype.getBoostCostC2 = function (__s32param0) {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_exact_26a421b704832cff_1.MarketConst.getHorseCostC2(this.distance, this.tradeVO.unitCount, __s32param0.isPayedWithPegasusTickets ? 0 : __s32param0.costFactorC2)));
  };
  Object.defineProperty(CastlePostSendGoodsDialog.prototype, "normalTravelTime", {
    get: function () {
      return this.tradeVO.travelTime;
    },
    set: function (__s36param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastlePostActionDialog.ACastlePostActionDialog.prototype, "normalTravelTime").set.call(this, __s36param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlePostSendGoodsDialog.prototype.getBoostedTravelTime = function (__s38param0) {
    var __s38local0;
    var __s38local1;
    var __s38local2 = 1;
    if (this.tradeVO.targetOwner.isOwnOwnerInfo) {
      __s38local2 = 1 + __dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MARKET_SPEED_BONUS, -1, -1, -1, this.tradeVO.targetOwner).strength / 100;
    } else if (__dep_export_CastleModel.CastleModel.allianceData && __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO) {
      __s38local0 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO;
      if ((__s38local1 = __dep_export_CastleModel.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(__dep_exact_26a421b704832cff.AllianceConst.TYPE_MARKET_SPEED_BOOST, __s38local0.getBoostLevel(__dep_exact_26a421b704832cff.AllianceConst.TYPE_MARKET_SPEED_BOOST)).getBonusVOByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MARKET_SPEED_BONUS)) && __s38local1.effect.isForAreaType(this.tradeVO.targetAreaType) && __s38local1.effect.checkPlayerRelation(this.tradeVO.targetOwner)) {
        __s38local2 += __s38local1.strength / 100;
      }
    }
    if (this.isTravelTimeSubscriptionBoosted) {
      __s38local2 += __dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MARKET_SPEED_BONUS, this.tradeVO.targetAreaType, this.tradeVO.kingdomId) / 100;
    }
    __s38local2 += __dep_export_CastleModel.CastleModel.globalEffectData.getBonusByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS, this.tradeVO.targetAreaType, this.tradeVO.kingdomId) / 100;
    __s38local2 += this.tradeVO.getAreaSpeedBoostModifier(this.effectCondition) / 100;
    __s38local2 += __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.returnTitleEffectValues([__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MARKET_SPEED_BONUS, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS], -1, -1, this.tradeVO.kingdomId).strength / 100;
    return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff_2.TravelConst.getTravelTimeWithHorse(__dep_exact_26a421b704832cff_1.MarketConst.MARKET_TRAVEL_SPEED, this.distance, __s38local2, __s38param0, 0, this.distance, false));
  };
  Object.defineProperty(CastlePostSendGoodsDialog.prototype, "effectCondition", {
    get: function () {
      return new __dep_export_CastleEffectConditionVO.CastleEffectConditionVO(this.tradeVO.targetAreaType, this.tradeVO.kingdomId, -1, this.tradeVO.targetOwner);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostSendGoodsDialog.prototype, "isTravelTimeSubscriptionBoosted", {
    get: function () {
      return this.tradeVO.isTravelTimeSubscriptionBoosted;
    },
    set: function (__s48param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastlePostActionDialog.ACastlePostActionDialog.prototype, "isTravelTimeSubscriptionBoosted").set.call(this, __s48param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostSendGoodsDialog.prototype, "shipsInsteadOfHorses", {
    get: function () {
      return this.tradeVO.kingdomId == __dep_exact_26a421b704832cff_3.WorldIsland.KINGDOM_ID;
    },
    set: function (__s52param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastlePostActionDialog.ACastlePostActionDialog.prototype, "shipsInsteadOfHorses").set.call(this, __s52param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlePostSendGoodsDialog.NAME = "CastlePostSendGoods";
  return CastlePostSendGoodsDialog;
}(__dep_export_ACastlePostActionDialog.ACastlePostActionDialog);
exports.CastlePostSendGoodsDialog = __s0local0;
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
