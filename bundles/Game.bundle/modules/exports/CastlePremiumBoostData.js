Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SBoosterInfoVO = require("gge-module:export_C2SBoosterInfoVO");
var __dep_export_C2SGetCastleProductionDataVO = require("gge-module:export_C2SGetCastleProductionDataVO");
var __dep_export_UnitPackageListEvent = require("gge-module:export_UnitPackageListEvent");
var __dep_export_CastleResourceBoosterEvent = require("gge-module:export_CastleResourceBoosterEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_FestivalVO = require("gge-module:export_FestivalVO");
var __dep_export_PremiumAccountVO = require("gge-module:export_PremiumAccountVO");
var __dep_export_CastleOverseerBeefPremiumShopVO = require("gge-module:export_CastleOverseerBeefPremiumShopVO");
var __s0local0 = function (__s1param0) {
  function CastlePremiumBoostData(__s3param0) {
    var __s3local0 = this;
    __s3local0._boughtUnitSlots = 0;
    __s3local0._boughtToolSlots = 0;
    __s3local0._permanentUnitSlots = 0;
    __s3local0._permanentToolSlots = 0;
    __s3local0._caravanBoostAndCosts = new Map();
    __s3local0._returningSpeedBoostAndCosts = new Map();
    __s3local0._xpBoostValues = new Map();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).init();
    __s3local0.parseXML(__s3param0);
    new __dep_exact_92d05af59ee2ff30.LocalizedTextVO();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePremiumBoostData, __s1param0);
  CastlePremiumBoostData.prototype.parseXML = function (__s5param0) {
    var __s5local0 = __s5param0.levelBoosters;
    if (__s5local0 != null) {
      for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
        var __s5local3 = __s5local2[__s5local1];
        if (__s5local3 !== undefined) {
          parseInt(__s5local3.boosterID || "");
          var __s5local4 = parseInt(__s5local3.boosterType || "");
          var __s5local5 = parseInt(__s5local3.level || "");
          var __s5local6 = parseInt(__s5local3.costC2 || "");
          var __s5local7 = parseInt(__s5local3.boostPercentage || "");
          if (__s5local4 == __dep_exact_26a421b704832cff.BoosterConst.CARAVAN_OVERLOADER) {
            this._caravanBoostAndCosts.set(__s5local5, [__s5local7, __s5local6]);
          } else if (__s5local4 == __dep_exact_26a421b704832cff.BoosterConst.RETURNING_SPEED) {
            this._returningSpeedBoostAndCosts.set(__s5local5, [__s5local7, __s5local6]);
          } else if (__s5local4 == __dep_exact_26a421b704832cff.BoosterConst.XP_BUILDING_BOOSTER_ID) {
            this._xpBoostValues.set(__s5local5, __s5local7);
          }
        }
      }
    }
  };
  CastlePremiumBoostData.prototype.reset = function () {
    this.init();
  };
  CastlePremiumBoostData.prototype.init = function () {
    this._festivalVO = new __dep_export_FestivalVO.FestivalVO();
    this.overseerFoodVO = new __dep_export_CastleOverseerFoodPremiumShopVO.CastleOverseerFoodPremiumShopVO();
    this.overseerStoneVO = new __dep_export_CastleOverseerStonePremiumShopVO.CastleOverseerStonePremiumShopVO();
    this.overseerWoodVO = new __dep_export_CastleOverseerWoodPremiumShopVO.CastleOverseerWoodPremiumShopVO();
    this.overseerMeadVO = new __dep_export_CastleOverseerMeadPremiumShopVO.CastleOverseerMeadPremiumShopVO();
    this.overseerBeefVO = new __dep_export_CastleOverseerBeefPremiumShopVO.CastleOverseerBeefPremiumShopVO();
    this.overseerHoneyVO = new __dep_export_CastleOverseerHoneyPremiumShopVO.CastleOverseerHoneyPremiumShopVO();
    this.marauderVO = new __dep_export_CastleMarauderPremiumShopVO.CastleMarauderPremiumShopVO();
    this.taxBribeVO = new __dep_export_CastleTaxCollectorPremiumShopVO.CastleTaxCollectorPremiumShopVO();
    this.instructorVO = new __dep_export_CastleInstructorPremiumShopVO.CastleInstructorPremiumShopVO();
    this.premiumAccountVO = new __dep_export_PremiumAccountVO.PremiumAccountVO();
    this.caravanOverloaderVO = new __dep_export_CastleCaravanOverloaderPremiumShopVO.CastleCaravanOverloaderPremiumShopVO();
    this.returnSpeedBoosterVO = new __dep_export_CastleReturnSpeedBoosterPremiumShopVO.CastleReturnSpeedBoosterPremiumShopVO();
    this.privateOfferFameBoosterVO = new __dep_export_CastlePointBoosterShopVO.CastlePointBoosterShopVO(__dep_exact_26a421b704832cff.BoosterConst.GLORY_BOOST_ID);
    this.personalFameBoosterVO = new __dep_export_CastlePointBoosterShopVO.CastlePointBoosterShopVO(__dep_exact_26a421b704832cff.BoosterConst.PERSONAL_GLORY_BOOST_ID);
    this.xpBoosterVO = new __dep_export_CastlePointBoosterShopVO.CastlePointBoosterShopVO(__dep_exact_26a421b704832cff.BoosterConst.XP_BOOSTER_ID);
    this.gallantryBoosterVO = new __dep_export_CastlePointBoosterShopVO.CastlePointBoosterShopVO(__dep_exact_26a421b704832cff.BoosterConst.GALLANTRY_POINTS_BOOST_ID);
    this.factionInvasionBoosterVO = new __dep_export_CastlePointBoosterShopVO.CastlePointBoosterShopVO(__dep_exact_26a421b704832cff.BoosterConst.REPUTATION_POINT_BOOST_ID);
    this.rageBoosterVO = new __dep_export_CastlePointBoosterShopVO.CastlePointBoosterShopVO(__dep_exact_26a421b704832cff.BoosterConst.RAGE_POINT_BOOST_ID);
    this.khanMedalBoosterVO = new __dep_export_CastlePointBoosterShopVO.CastlePointBoosterShopVO(__dep_exact_26a421b704832cff.BoosterConst.KHAN_MEDAL_BOOST_ID);
    this.khanTabletBoosterVO = new __dep_export_CastlePointBoosterShopVO.CastlePointBoosterShopVO(__dep_exact_26a421b704832cff.BoosterConst.KHAN_BOOST_ID);
    this.samuraiBoosterVO = new __dep_export_SamuraiBoosterShopVO.SamuraiBoosterShopVO();
    this.longTermPointEventBoosterVO = new __dep_export_LongTermPointEventShopVO.LongTermPointEventShopVO();
    this.allianceCoinsBoosterVO = new __dep_export_AllianceCoinBoosterShopVO.AllianceCoinBoosterShopVO();
    this._boosterList = new Map();
    this._boosterList.set(this.overseerWoodVO.id, this.overseerWoodVO);
    this._boosterList.set(this.overseerStoneVO.id, this.overseerStoneVO);
    this._boosterList.set(this.overseerFoodVO.id, this.overseerFoodVO);
    this._boosterList.set(this.overseerMeadVO.id, this.overseerMeadVO);
    this._boosterList.set(this.overseerBeefVO.id, this.overseerBeefVO);
    this._boosterList.set(this.overseerHoneyVO.id, this.overseerHoneyVO);
    this._boosterList.set(this.marauderVO.id, this.marauderVO);
    this._boosterList.set(this.taxBribeVO.id, this.taxBribeVO);
    this._boosterList.set(this.instructorVO.id, this.instructorVO);
    this._boosterList.set(this.privateOfferFameBoosterVO.id, this.privateOfferFameBoosterVO);
    this._boosterList.set(this.personalFameBoosterVO.id, this.personalFameBoosterVO);
    this._boosterList.set(this.khanTabletBoosterVO.id, this.khanTabletBoosterVO);
    this._boosterList.set(this.samuraiBoosterVO.id, this.samuraiBoosterVO);
    this._boosterList.set(this.longTermPointEventBoosterVO.id, this.longTermPointEventBoosterVO);
    this._boosterList.set(this.allianceCoinsBoosterVO.id, this.allianceCoinsBoosterVO);
    this._boosterList.set(this.xpBoosterVO.id, this.xpBoosterVO);
    this._boosterList.set(this.gallantryBoosterVO.id, this.gallantryBoosterVO);
    this._boosterList.set(this.factionInvasionBoosterVO.id, this.factionInvasionBoosterVO);
    this._boosterList.set(this.caravanOverloaderVO.id, this.caravanOverloaderVO);
    this._boosterList.set(this.returnSpeedBoosterVO.id, this.returnSpeedBoosterVO);
    this._boosterList.set(this.rageBoosterVO.id, this.rageBoosterVO);
    this._boosterList.set(this.khanMedalBoosterVO.id, this.khanMedalBoosterVO);
    this._activeBoosterList = new Map();
  };
  CastlePremiumBoostData.prototype.executeUpdate = function (__s18param0) {
    var __s18local0 = false;
    if (this._activeBoosterList != null) {
      for (var __s18local1 = 0, __s18local2 = Array.from(this._activeBoosterList.keys()); __s18local1 < __s18local2.length; __s18local1++) {
        var __s18local3 = __s18local2[__s18local1];
        if (__s18local3 !== undefined) {
          if (!this._activeBoosterList.get(__s18local3).isPermanentBooster && !this._activeBoosterList.get(__s18local3).isActive) {
            this.removeActiveBooster(this._activeBoosterList.get(__s18local3));
            __s18local0 = true;
          }
        }
      }
    }
    if (__s18local0) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBoosterInfoVO.C2SBoosterInfoVO());
    }
    if (this.premiumAccountVO.isOutrun) {
      this.premiumAccountVO.isOutrun = false;
      this.removeActiveBooster(this.premiumAccountVO);
      __s18local0 = true;
    }
    if (__s18local0) {
      this.controller.sendCommandVOAndWait(new __dep_export_C2SGetCastleProductionDataVO.C2SGetCastleProductionDataVO());
    }
  };
  CastlePremiumBoostData.prototype.removeActiveBooster = function (__s28param0) {
    if (this._activeBoosterList.get(__s28param0) !== undefined) {
      this._activeBoosterList.set(__s28param0, null);
      this._activeBoosterList.delete(__s28param0);
      this.dispatchEvent(new __dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, __s28param0));
    }
  };
  CastlePremiumBoostData.prototype.addActiveBooster = function (__s31param0) {
    if (this._activeBoosterList.get(__s31param0) === undefined) {
      this._activeBoosterList.set(__s31param0, __s31param0);
    }
  };
  CastlePremiumBoostData.prototype.parse_BOI = function (__s34param0) {
    if (__s34param0) {
      var __s34local0 = 0;
      var __s34local1 = false;
      for (__s34local0 = 0; __s34local0 < __s34param0.BO.length; __s34local0++) {
        if (this._boosterList.get(__s34param0.BO[__s34local0].ID) !== undefined) {
          __s34local1 = this._boosterList.get(__s34param0.BO[__s34local0].ID).isActive;
          this._boosterList.get(__s34param0.BO[__s34local0].ID).parseServerInfo(__s34param0.BO[__s34local0]);
          if (__s34local1 && !this._boosterList.get(__s34param0.BO[__s34local0].ID).isActive) {
            this.removeActiveBooster(this._boosterList.get(__s34param0.BO[__s34local0].ID));
          } else if (!__s34local1 && this._boosterList.get(__s34param0.BO[__s34local0].ID).isActive) {
            this.addActiveBooster(this._boosterList.get(__s34param0.BO[__s34local0].ID));
          }
        }
      }
      __s34local1 = this.premiumAccountVO.isActive;
      this.premiumAccountVO.parseServerInfo(__s34param0);
      this.premiumAccountVO.premiumAccountType = __s34param0.PT;
      if (__s34local1 && !this.premiumAccountVO.isActive) {
        this.removeActiveBooster(this.premiumAccountVO);
      } else if (!__s34local1 && this.premiumAccountVO.isActive) {
        this.addActiveBooster(this.premiumAccountVO);
      }
      this._boughtUnitSlots = 0;
      this._permanentUnitSlots = 0;
      for (var __s34local2 = 0, __s34local3 = __s34param0.SU; __s34local2 < __s34local3.length; __s34local2++) {
        var __s34local4 = __s34local3[__s34local2];
        if (__s34local4 !== undefined) {
          if (__s34local4 > 0) {
            this._boughtUnitSlots++;
          } else if (__s34local4 < 0) {
            this._permanentUnitSlots++;
          }
        }
      }
      this._boughtToolSlots = 0;
      this._permanentToolSlots = 0;
      for (var __s34local5 = 0, __s34local6 = __s34param0.ST; __s34local5 < __s34local6.length; __s34local5++) {
        var __s34local7 = __s34local6[__s34local5];
        if (__s34local7 !== undefined) {
          if (__s34local7 > 0) {
            this._boughtToolSlots++;
          } else if (__s34local7 < 0) {
            this._permanentToolSlots++;
          }
        }
      }
      this.parse_bfs(__s34param0.bfs);
      this.dispatchEvent(new __dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, null));
    }
  };
  CastlePremiumBoostData.prototype.parse_bfs = function (__s54param0) {
    if (__s54param0) {
      this._festivalVO.fillFromParamObject(__s54param0);
      this.dispatchEvent(new __dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.FESTIVAL_UPDATED, null));
      this.dispatchEvent(new __dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, null));
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_UnitPackageListEvent.UnitPackageListEvent(__dep_export_UnitPackageListEvent.UnitPackageListEvent.PACKAGE_UPDATE));
    }
  };
  CastlePremiumBoostData.prototype.getTempBoostOverseerVOByID = function (__s57param0) {
    switch (__s57param0) {
      case CastlePremiumBoostData.BOOST_WOOD:
        return this.overseerWoodVO;
      case CastlePremiumBoostData.BOOST_STONE:
        return this.overseerStoneVO;
      case CastlePremiumBoostData.BOOST_FOOD:
        return this.overseerFoodVO;
      case CastlePremiumBoostData.BOOST_MEAD:
        return this.overseerMeadVO;
      case CastlePremiumBoostData.BOOST_BEEF:
        return this.overseerBeefVO;
      case CastlePremiumBoostData.BOOST_HONEY:
        return this.overseerHoneyVO;
      case __dep_exact_26a421b704832cff.BoosterConst.TAX:
        return this.taxBribeVO;
      case __dep_exact_26a421b704832cff.BoosterConst.INSTRUCTOR:
        return this.instructorVO;
      case __dep_exact_26a421b704832cff.BoosterConst.MARAUDER:
        return this.marauderVO;
      default:
        return null;
    }
  };
  CastlePremiumBoostData.prototype.getOverseerVOByID = function (__s60param0) {
    switch (__s60param0) {
      case CastlePremiumBoostData.BOOST_WOOD:
        return this.overseerWoodVO;
      case CastlePremiumBoostData.BOOST_STONE:
        return this.overseerStoneVO;
      case CastlePremiumBoostData.BOOST_FOOD:
        return this.overseerFoodVO;
      case CastlePremiumBoostData.BOOST_MEAD:
        return this.overseerMeadVO;
      case CastlePremiumBoostData.BOOST_BEEF:
        return this.overseerBeefVO;
      case CastlePremiumBoostData.BOOST_HONEY:
        return this.overseerHoneyVO;
      case __dep_exact_26a421b704832cff.BoosterConst.TAX:
        return this.taxBribeVO;
      case __dep_exact_26a421b704832cff.BoosterConst.INSTRUCTOR:
        return this.instructorVO;
      case __dep_exact_26a421b704832cff.BoosterConst.MARAUDER:
        return this.marauderVO;
      case __dep_exact_26a421b704832cff.BoosterConst.RETURNING_SPEED:
        return this.returnSpeedBoosterVO;
      case __dep_exact_26a421b704832cff.BoosterConst.CARAVAN_OVERLOADER:
        return this.caravanOverloaderVO;
      default:
        return null;
    }
  };
  CastlePremiumBoostData.prototype.getCaravanBoosterMaxLevel = function () {
    return __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f.DictionaryUtil.getDictionaryLength(this._caravanBoostAndCosts) - 1);
  };
  CastlePremiumBoostData.prototype.getReturningSpeedBoosterMaxLevel = function () {
    return __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f.DictionaryUtil.getDictionaryLength(this._returningSpeedBoostAndCosts) - 1);
  };
  CastlePremiumBoostData.prototype.getCostsForNextReturningSpeedLevel = function (__s67param0) {
    var __s67local0 = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f.DictionaryUtil.getDictionaryLength(this._returningSpeedBoostAndCosts));
    if (__s67local0 > 0 && __s67local0 >= __s67param0 + 1) {
      return __dep_exact_f855840627e6e145.int(this._returningSpeedBoostAndCosts.get(__s67param0 + 1)[1]);
    } else {
      return -1;
    }
  };
  CastlePremiumBoostData.prototype.getBoostForReturningSpeedLevel = function (__s71param0) {
    var __s71local0 = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f.DictionaryUtil.getDictionaryLength(this._returningSpeedBoostAndCosts));
    if (__s71local0 > 0 && __s71local0 >= __s71param0) {
      return __dep_exact_f855840627e6e145.int(this._returningSpeedBoostAndCosts.get(__s71param0)[0]);
    } else {
      return 0;
    }
  };
  CastlePremiumBoostData.prototype.getCarriagesNeededToTransport = function (__s75param0, __s75param1, __s75param2, __s75param3) {
    return __dep_exact_f855840627e6e145.int(Math.ceil(__s75param0 * 1 / this.getResourcesTransportablePerCarriage(__s75param1, __s75param2, __s75param3)));
  };
  CastlePremiumBoostData.prototype.getResourcesTransportablePerCarriage = function (__s77param0, __s77param1, __s77param2) {
    var __s77local0 = 1 + this._caravanBoostAndCosts.get(__s77param0)[0] * 0.01;
    var __s77local1 = __dep_exact_26a421b704832cff_1.MarketConst.RESOURCES_PER_CARRIAGE * (__s77param1 * 0.01) * __s77local0 + __s77param2;
    var __s77local2 = __dep_exact_9e901e8e2483a22f.MathBase.round(__s77local1, 1);
    return 1 + Math.round(__s77local2);
  };
  CastlePremiumBoostData.prototype.getResourcesTransportablePerCarriageIgnoringResearch = function (__s79param0) {
    var __s79local0 = parseFloat((1 + this._caravanBoostAndCosts.get(__s79param0)[0] * 0.01).toFixed(2));
    var __s79local1 = parseFloat((__dep_exact_26a421b704832cff_1.MarketConst.RESOURCES_PER_CARRIAGE * __s79local0).toFixed(2));
    return 1 + Math.ceil(__s79local1);
  };
  CastlePremiumBoostData.prototype.getCostsForNextCaravanLevel = function (__s81param0) {
    if (__dep_exact_9e901e8e2483a22f.DictionaryUtil.getDictionaryLength(this._caravanBoostAndCosts) > __s81param0 + 1) {
      return __dep_exact_f855840627e6e145.int(this._caravanBoostAndCosts.get(__s81param0 + 1)[1]);
    } else {
      return -1;
    }
  };
  Object.defineProperty(CastlePremiumBoostData.prototype, "xpBoostValues", {
    get: function () {
      return this._xpBoostValues;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumBoostData.prototype, "caravanBoostAndCosts", {
    get: function () {
      return this._caravanBoostAndCosts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumBoostData.prototype, "boughtUnitSlots", {
    get: function () {
      return this._boughtUnitSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumBoostData.prototype, "boughtToolSlots", {
    get: function () {
      return this._boughtToolSlots;
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumBoostData.prototype.getBoosterByID = function (__s93param0) {
    if (this._boosterList.get(__s93param0) !== undefined) {
      return this._boosterList.get(__s93param0);
    } else {
      return null;
    }
  };
  Object.defineProperty(CastlePremiumBoostData.prototype, "festivalVO", {
    get: function () {
      return this._festivalVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumBoostData.prototype, "permanentUnitSlots", {
    get: function () {
      return this._permanentUnitSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumBoostData.prototype, "permanentToolSlots", {
    get: function () {
      return this._permanentToolSlots;
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumBoostData.prototype.getOverseer = function (__s103param0) {
    switch (__s103param0) {
      case __dep_export_CollectableEnum.CollectableEnum.WOOD:
        return this.overseerWoodVO;
      case __dep_export_CollectableEnum.CollectableEnum.FOOD:
        return this.overseerFoodVO;
      case __dep_export_CollectableEnum.CollectableEnum.STONE:
        return this.overseerStoneVO;
      case __dep_export_CollectableEnum.CollectableEnum.MEAD:
        return this.overseerMeadVO;
      case __dep_export_CollectableEnum.CollectableEnum.BEEF:
        return this.overseerBeefVO;
      case __dep_export_CollectableEnum.CollectableEnum.HONEY:
        return this.overseerHoneyVO;
    }
    return null;
  };
  CastlePremiumBoostData.BOOST_WOOD = 0;
  CastlePremiumBoostData.BOOST_STONE = 1;
  CastlePremiumBoostData.BOOST_FOOD = 2;
  CastlePremiumBoostData.BOOST_HONEY = 3;
  CastlePremiumBoostData.BOOST_MEAD = 4;
  CastlePremiumBoostData.BOOST_BEEF = 5;
  return CastlePremiumBoostData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastlePremiumBoostData = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_AllianceCoinBoosterShopVO = require("gge-module:export_AllianceCoinBoosterShopVO");
var __dep_export_LongTermPointEventShopVO = require("gge-module:export_LongTermPointEventShopVO");
var __dep_export_CastleCaravanOverloaderPremiumShopVO = require("gge-module:export_CastleCaravanOverloaderPremiumShopVO");
var __dep_export_CastleInstructorPremiumShopVO = require("gge-module:export_CastleInstructorPremiumShopVO");
var __dep_export_CastleMarauderPremiumShopVO = require("gge-module:export_CastleMarauderPremiumShopVO");
var __dep_export_CastleOverseerFoodPremiumShopVO = require("gge-module:export_CastleOverseerFoodPremiumShopVO");
var __dep_export_CastleOverseerStonePremiumShopVO = require("gge-module:export_CastleOverseerStonePremiumShopVO");
var __dep_export_CastleOverseerWoodPremiumShopVO = require("gge-module:export_CastleOverseerWoodPremiumShopVO");
var __dep_export_CastlePointBoosterShopVO = require("gge-module:export_CastlePointBoosterShopVO");
var __dep_export_CastleReturnSpeedBoosterPremiumShopVO = require("gge-module:export_CastleReturnSpeedBoosterPremiumShopVO");
var __dep_export_CastleTaxCollectorPremiumShopVO = require("gge-module:export_CastleTaxCollectorPremiumShopVO");
var __dep_export_SamuraiBoosterShopVO = require("gge-module:export_SamuraiBoosterShopVO");
var __dep_export_CastleOverseerMeadPremiumShopVO = require("gge-module:export_CastleOverseerMeadPremiumShopVO");
var __dep_export_CastleOverseerHoneyPremiumShopVO = require("gge-module:export_CastleOverseerHoneyPremiumShopVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
