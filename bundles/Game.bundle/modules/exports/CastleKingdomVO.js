Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __s0local0 = function () {
  function CastleKingdomVO() {
    this._kID = 0;
    this._unitTravelTime = 0;
    this._ressourceTravelTime = 0;
    this._minLevel = 0;
    this._minPremiumUnlockLevel = 0;
    this._numMaxVillages = 0;
    this._unlocked = false;
    this._skipUnitTravelC2Cost = 0;
    this._skipResourceTravelC2Cost = 0;
    this._unitTravelTaxRate = 0;
    this._resourceTravelTaxRate = 0;
    this._noobProtectionTime = 0;
    this._requiredKingdomID = 0;
    this._hasContor = false;
    this._villageCapWood = 0;
    this._villageCapFood = 0;
    this._villageCapStone = 0;
    this._villageCapCoal = 0;
    this._villageCapOliveoil = 0;
    this._villageCapGlass = 0;
    this._villageCapIron = 0;
    this.slumVOs = [];
    this._activeSlumLevel = 0;
    this._kingdomResetTimestamp = 0;
    this._rewardSet = 0;
  }
  Object.defineProperty(CastleKingdomVO.prototype, "isPaid", {
    get: function () {
      return this._unlocked;
    },
    enumerable: true,
    configurable: true
  });
  CastleKingdomVO.prototype.fillFromParamXML = function (__s7param0) {
    this._kID = parseInt(__s7param0.kID || "");
    this._kingdomName = __s7param0.kingdomName || "";
    this._unitTravelTime = parseInt(__s7param0.unitTravelTime || "");
    this._ressourceTravelTime = parseInt(__s7param0.resourceTravelTime || "");
    this._minLevel = parseInt(__s7param0.minLevel || "0");
    this._minPremiumUnlockLevel = parseInt(__s7param0.minC2Level || "0");
    this._numMaxVillages = parseInt(__s7param0.numMaxVillages || "");
    this._skipUnitTravelC2Cost = parseInt(__s7param0.skipUnitTravelC2Cost || "");
    this._skipResourceTravelC2Cost = parseInt(__s7param0.skipResourceTravelC2Cost || "");
    this._unitTravelTaxRate = parseInt(__s7param0.unitTravelTaxRate || "");
    this._resourceTravelTaxRate = parseInt(__s7param0.resourceTravelTaxRate || "");
    this._noobProtectionTime = parseInt(__s7param0.noobProtectionTime || "");
    this._requiredKingdomID = parseInt(__s7param0.requiredKingdomID || "");
    this._villageCapWood = parseInt(__s7param0.villageCapWood || "");
    this._villageCapFood = parseInt(__s7param0.villageCapFood || "");
    this._villageCapStone = parseInt(__s7param0.villageCapStone || "");
    this._villageCapCoal = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("villageCapCoal", __s7param0, "0"));
    this._villageCapOliveoil = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("villageCapOil", __s7param0, "0"));
    this._villageCapGlass = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("villageCapGlass", __s7param0, "0"));
    this._villageCapIron = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("villageCapIron", __s7param0, "0"));
  };
  CastleKingdomVO.prototype.parseUnlockInfo = function (__s9param0) {
    this._unlocked = __s9param0.U == 1;
    this._hasContor = __s9param0.C == 1;
    this._activeSlumLevel = __dep_exact_f855840627e6e145.int(__s9param0.SL);
    if (this._activeSlumLevel <= 4) {
      CastleKingdomVO.updateSlumLevel(this._activeSlumLevel, __s9param0.KID);
    }
    var __s9local0 = this.getSlumVOByLevel(__s9param0.SL + 1);
    if (__s9local0) {
      __s9local0.payedGoods = __dep_export_CollectableManager.CollectableManager.parser.createGoodsListSave(new __dep_export_CollectableItemWoodVO.CollectableItemWoodVO(__s9param0.SPW), new __dep_export_CollectableItemStoneVO.CollectableItemStoneVO(__s9param0.SPS), new __dep_export_CollectableItemFoodVO.CollectableItemFoodVO(__s9param0.SPF), new __dep_export_CollectableItemC1VO.CollectableItemC1VO(__s9param0.SPC1));
    }
    if (__s9param0.KRS) {
      this._kingdomResetTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s9param0.KRS * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    } else {
      this._kingdomResetTimestamp = 0;
    }
    if (__s9param0.CRS) {
      this._rewardSet = __s9param0.CRS;
    } else {
      this._rewardSet = 0;
    }
  };
  CastleKingdomVO.updateSlumLevel = function (__s17param0, __s17param1) {
    var __s17local0 = __dep_export_CastleModel.CastleModel.areaData.activeArea;
    if (__s17local0 && __s17local0.areaInfo.kingdomID == __s17param1 && __s17local0.slum) {
      __s17local0.slum.setSlumLevel(__s17param0);
    }
  };
  CastleKingdomVO.prototype.getSlumVOByLevel = function (__s20param0) {
    for (var __s20local0 = 0; __s20local0 < this.slumVOs.length; __s20local0++) {
      if (this.slumVOs[__s20local0].level === __s20param0) {
        return this.slumVOs[__s20local0];
      }
    }
    return null;
  };
  Object.defineProperty(CastleKingdomVO.prototype, "kID", {
    get: function () {
      return this._kID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "isBlockedByServer", {
    get: function () {
      return this.kID == 4 && this.resetTime < 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "kingdomName", {
    get: function () {
      return this._kingdomName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "kingdomNameString", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("kingdomName_" + this.kingdomName));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "minNonPremiumUnlockLevel", {
    get: function () {
      return this._minLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "minLevel", {
    get: function () {
      if (this._minPremiumUnlockLevel) {
        return Math.min(this._minPremiumUnlockLevel, this._minLevel);
      } else {
        return this._minLevel;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "minPremiumUnlockLevel", {
    get: function () {
      return this._minPremiumUnlockLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "canBeUnlockedEarlyWithC2", {
    get: function () {
      return this._minPremiumUnlockLevel > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "unitTravelTime", {
    get: function () {
      var __s43local0 = __dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TRAVEL_KINGDOM_TROOP_TIME_BOOST).strength;
      return this._unitTravelTime * (100 + __s43local0) / 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "ressourceTravelTime", {
    get: function () {
      var __s45local0 = __dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TRAVEL_KINGDOM_MARKET_TIME_BOOST).strength;
      return this._ressourceTravelTime * (100 + __s45local0) / 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "skipUnitTravelC2Cost", {
    get: function () {
      return this._skipUnitTravelC2Cost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "skipResourceTravelC2Cost", {
    get: function () {
      return this._skipResourceTravelC2Cost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "resourceTravelTaxRate", {
    get: function () {
      return this._resourceTravelTaxRate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "unitTravelTaxRate", {
    get: function () {
      return this._unitTravelTaxRate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "requiredKingdomID", {
    get: function () {
      return this._requiredKingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "hasContor", {
    get: function () {
      return this._hasContor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "villageCapWood", {
    get: function () {
      return this._villageCapWood;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "villageCapFood", {
    get: function () {
      return this._villageCapFood;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "villageCapStone", {
    get: function () {
      return this._villageCapStone;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "activeSlumLevel", {
    get: function () {
      return this._activeSlumLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "hasTimer", {
    get: function () {
      return this._kingdomResetTimestamp > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "resetTime", {
    get: function () {
      return (this._kingdomResetTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) / __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    },
    enumerable: true,
    configurable: true
  });
  CastleKingdomVO.prototype.resetUnlockData = function () {
    this._unlocked = false;
  };
  Object.defineProperty(CastleKingdomVO.prototype, "boostedResourceTravelTaxRate", {
    get: function () {
      var __s73local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.researchData.getResearchEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TRANSPORT_TAX_DECREASE_BOOST, -1, this.kID).strength);
      var __s73local1 = __dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TRANSPORT_TAX_DECREASE_BOOST, -1, this.kID) / 100;
      var __s73local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.returnTitleEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TRANSPORT_TAX_DECREASE_BOOST, -1, -1, this.kID).strength);
      return Math.max((this.resourceTravelTaxRate - __s73local0 - __s73local2) * (1 - __s73local1), 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "isSubscriptionBuffed", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_TRANSPORT_TAX_DECREASE_BOOST, -1, this.kID) > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "dungeonType", {
    get: function () {
      if (this._kID == __dep_exact_26a421b704832cff_1.WorldIsland.KINGDOM_ID) {
        return __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ISLE_DUNGEON;
      } else {
        return __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_DUNGEON;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleKingdomVO.prototype.isVillageTypeAvailable = function (__s81param0) {
    return this.getVillageCapByType(__s81param0) > 0;
  };
  CastleKingdomVO.prototype.getVillageCapByType = function (__s83param0) {
    switch (__s83param0) {
      case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_WOOD:
        return this._villageCapWood;
      case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_STONE:
        return this._villageCapStone;
      case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_FOOD:
        return this._villageCapFood;
      case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_COAL:
        return this._villageCapCoal;
      case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_OIL:
        return this._villageCapOliveoil;
      case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_GLASS:
        return this._villageCapGlass;
      case __dep_exact_26a421b704832cff.WorldConst.VILLAGE_TYPE_IRON:
        return this._villageCapIron;
      default:
        return 0;
    }
  };
  CastleKingdomVO.prototype.hasAccessToPrivateResourceVillages = function () {
    return this._villageCapWood + this._villageCapStone + this._villageCapFood + this._villageCapCoal + this._villageCapOliveoil + this._villageCapGlass + this._villageCapIron > 0;
  };
  Object.defineProperty(CastleKingdomVO.prototype, "kingdomResetTimestamp", {
    get: function () {
      return this._kingdomResetTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVO.prototype, "rewardSet", {
    get: function () {
      return this._rewardSet;
    },
    enumerable: true,
    configurable: true
  });
  return CastleKingdomVO;
}();
exports.CastleKingdomVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableItemC1VO = require("gge-module:export_CollectableItemC1VO");
var __dep_export_CollectableItemFoodVO = require("gge-module:export_CollectableItemFoodVO");
var __dep_export_CollectableItemStoneVO = require("gge-module:export_CollectableItemStoneVO");
var __dep_export_CollectableItemWoodVO = require("gge-module:export_CollectableItemWoodVO");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
