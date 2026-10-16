Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleKingdomEvent = require("gge-module:export_CastleKingdomEvent");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleKingdomData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._kingdomID = -1;
    __s3local0._willBecomeFaction = -1;
    __s3local0.tempTargetSpaceID = 0;
    __s3local0._kingdomVOs = new Map();
    var __s3local1 = __s3param0.kingdoms;
    if (__s3local1 != null) {
      for (var __s3local2 = 0, __s3local3 = __s3local1; __s3local2 < __s3local3.length; __s3local2++) {
        var __s3local4 = __s3local3[__s3local2];
        if (__s3local4 !== undefined) {
          var __s3local5 = new __dep_export_CastleKingdomVO.CastleKingdomVO();
          __s3local5.fillFromParamXML(__s3local4);
          __s3local0._kingdomVOs.set(__s3local5.kID, __s3local5);
        }
      }
    }
    var __s3local6 = __s3param0.slums;
    if (__s3local6 != null) {
      for (var __s3local7 = 0, __s3local8 = __s3local6; __s3local7 < __s3local8.length; __s3local7++) {
        var __s3local9 = __s3local8[__s3local7];
        if (__s3local9 !== undefined) {
          var __s3local10 = new __dep_export_CastleSlumDataVO.CastleSlumDataVO();
          __s3local10.fillFromParamXML(__s3local9);
          __s3local0._kingdomVOs.get(__s3local10.kID).slumVOs.push(__s3local10);
        }
      }
    }
    var __s3local11 = __s3param0.villages;
    if (__s3local11 != null) {
      for (var __s3local12 = 0, __s3local13 = __s3local11; __s3local12 < __s3local13.length; __s3local12++) {
        var __s3local14 = __s3local13[__s3local12];
        if (__s3local14 !== undefined) {
          var __s3local15 = new __dep_export_KingdomVillagesInfoVO.KingdomVillagesInfoVO();
          __s3local15.fillFromParamXML(__s3local14);
          __s3local0._kingdomVOs.get(__s3local15.kID).villagesInfo = __s3local15;
        }
      }
    }
    __s3local0._eilandRewards = new __dep_export_CastleEilandRewardsVO.CastleEilandRewardsVO(__s3param0);
    __s3local0._stormIslandsPreBuildCastles = [];
    if (__s3param0.islandPreBuiltCastles) {
      for (var __s3local16 = 0, __s3local17 = __s3param0.islandPreBuiltCastles; __s3local16 < __s3local17.length; __s3local16++) {
        var __s3local18 = __s3local17[__s3local16];
        if (__s3local18 !== undefined) {
          var __s3local19 = new __dep_export_SpecialServerPreBuiltCastleVO.SpecialServerPreBuiltCastleVO();
          __s3local19.parseXML(__s3local18);
          __s3local0._stormIslandsPreBuildCastles.push(__s3local19);
        }
      }
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleKingdomData, __s1param0);
  CastleKingdomData.prototype.parse_KPI = function (__s21param0) {
    if (__s21param0) {
      if (__s21param0.UL) {
        for (var __s21local0 = 0, __s21local1 = __s21param0.UL; __s21local0 < __s21local1.length; __s21local0++) {
          var __s21local2 = __s21local1[__s21local0];
          if (__s21local2 !== undefined) {
            this.getKingdomVOByID(__s21local2.KID).parseUnlockInfo(__s21local2);
          }
        }
      }
      this._unitTransfers = [];
      if (__s21param0.UT) {
        for (var __s21local3 = 0, __s21local4 = __s21param0.UT; __s21local3 < __s21local4.length; __s21local3++) {
          var __s21local5 = __s21local4[__s21local3];
          if (__s21local5 !== undefined) {
            var __s21local6 = new __dep_export_CastleKingdomUnitTransferVO.CastleKingdomUnitTransferVO();
            __s21local6.fillFromParamObject(__s21local5);
            this._unitTransfers.push(__s21local6);
          }
        }
      }
      this._goodsTransfers = [];
      if (__s21param0.RT) {
        for (var __s21local7 = 0, __s21local8 = __s21param0.RT; __s21local7 < __s21local8.length; __s21local7++) {
          var __s21local9 = __s21local8[__s21local7];
          if (__s21local9 !== undefined) {
            var __s21local10 = new __dep_export_CastleKingdomGoodsTransferVO.CastleKingdomGoodsTransferVO();
            __s21local10.fillFromParamObject(__s21local9);
            this._goodsTransfers.push(__s21local10);
          }
        }
      }
      if (__s21param0.fki) {
        var __s21local11 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
        if (__s21local11) {
          __s21local11.parse_FKI(__s21param0.fki);
        }
      }
      this.dispatchEvent(new __dep_export_CastleKingdomEvent.CastleKingdomEvent(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOMDATA_ARRIVED));
    }
  };
  Object.defineProperty(CastleKingdomData.prototype, "activeKingdomID", {
    get: function () {
      return this._kingdomID;
    },
    set: function (__s40param0) {
      var __s40local0 = this._kingdomID;
      this._willBecomeFaction = -1;
      this._kingdomID = __s40param0;
      if (__s40local0 != this._kingdomID) {
        this.dispatchEvent(new __dep_export_CastleKingdomEvent.CastleKingdomEvent(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOM_SWITCHED));
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomData.prototype, "activeKingdomVO", {
    get: function () {
      return this._kingdomVOs.get(this.activeKingdomID);
    },
    enumerable: true,
    configurable: true
  });
  CastleKingdomData.prototype.getKingdomThatIsReadyForUnlock = function () {
    for (var __s45local0 = 0, __s45local1 = __dep_exact_26a421b704832cff_2.WorldConst.WORLD_IDS; __s45local0 < __s45local1.length; __s45local0++) {
      var __s45local2 = __s45local1[__s45local0];
      if (__s45local2 !== undefined && __dep_exact_26a421b704832cff_2.WorldConst.isLaboratoryKingdom(__s45local2)) {
        var __s45local3 = this.getKingdomVOByID(__s45local2);
        if (__s45local3 && __s45local3.canBeUnlockedEarlyWithC2 && __dep_export_CastleModel.CastleModel.userData.userLevel >= __s45local3.minPremiumUnlockLevel && __dep_export_CastleModel.CastleModel.userData.userLevel < __s45local3.minNonPremiumUnlockLevel && !__s45local3.isPaid) {
          return __s45local3;
        }
      }
    }
    return null;
  };
  CastleKingdomData.prototype.getKingdomVOByID = function (__s51param0) {
    return this._kingdomVOs.get(__s51param0);
  };
  CastleKingdomData.prototype.getIncomingGoodsTransferByKingdomID = function (__s53param0) {
    if (this._goodsTransfers != null) {
      for (var __s53local0 = 0, __s53local1 = this._goodsTransfers; __s53local0 < __s53local1.length; __s53local0++) {
        var __s53local2 = __s53local1[__s53local0];
        if (__s53local2 !== undefined && __s53local2.targetKingdomID === __s53param0) {
          return __s53local2;
        }
      }
    }
    return null;
  };
  CastleKingdomData.prototype.getIncomingUnitsTransferByKingdomID = function (__s59param0) {
    if (this._unitTransfers != null) {
      for (var __s59local0 = 0, __s59local1 = this._unitTransfers; __s59local0 < __s59local1.length; __s59local0++) {
        var __s59local2 = __s59local1[__s59local0];
        if (__s59local2 !== undefined && __s59local2.targetKingdomID === __s59param0) {
          return __s59local2;
        }
      }
    }
    return null;
  };
  Object.defineProperty(CastleKingdomData.prototype, "numUnlockedKingdoms", {
    get: function () {
      var __s65local0 = 0;
      if (this._kingdomVOs != null) {
        for (var __s65local1 = 0, __s65local2 = Array.from(this._kingdomVOs.values()); __s65local1 < __s65local2.length; __s65local1++) {
          var __s65local3 = __s65local2[__s65local1];
          if (__s65local3.isPaid && __s65local3.kID != __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID) {
            __s65local0++;
          }
        }
      }
      return __s65local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomData.prototype, "minNonPremiumUnlockLevelForKingdoms", {
    get: function () {
      var __s71local0 = 99;
      if (this._kingdomVOs != null) {
        for (var __s71local1 = 0, __s71local2 = Array.from(this._kingdomVOs.values()); __s71local1 < __s71local2.length; __s71local1++) {
          var __s71local3 = __s71local2[__s71local1];
          if (__s71local3 !== undefined && __s71local3.minNonPremiumUnlockLevel < __s71local0 && __s71local3.minNonPremiumUnlockLevel > 0) {
            __s71local0 = __s71local3.minNonPremiumUnlockLevel;
          }
        }
      }
      return __s71local0;
    },
    enumerable: true,
    configurable: true
  });
  CastleKingdomData.prototype.isKingdomUnlockable = function (__s77param0) {
    if (__s77param0.requiredKingdomID <= 0) {
      return true;
    }
    if (this._kingdomVOs != null) {
      for (var __s77local0 = 0, __s77local1 = Array.from(this._kingdomVOs.values()); __s77local0 < __s77local1.length; __s77local0++) {
        var __s77local2 = __s77local1[__s77local0];
        if (__s77local2 !== undefined && __s77local2.kID == __s77param0.requiredKingdomID) {
          return __s77local2.isPaid;
        }
      }
    }
    return false;
  };
  CastleKingdomData.prototype.isAnyKingdomUnlocked = function (__s84param0) {
    if (__s84param0 != null) {
      for (var __s84local0 = 0, __s84local1 = __s84param0; __s84local0 < __s84local1.length; __s84local0++) {
        var __s84local2 = __s84local1[__s84local0];
        if (__s84local2 !== undefined && this.isKingdomUnlocked(__s84local2)) {
          return true;
        }
      }
    }
    return false;
  };
  CastleKingdomData.prototype.isKingdomUnlocked = function (__s90param0) {
    var __s90local0 = this._kingdomVOs.get(__s90param0);
    return !!__s90local0 && __s90local0.isPaid;
  };
  CastleKingdomData.prototype.getSlumVOByPartPayPriceId = function (__s92param0) {
    if (this._kingdomVOs != null) {
      for (var __s92local0 = 0, __s92local1 = Array.from(this._kingdomVOs.values()); __s92local0 < __s92local1.length; __s92local0++) {
        var __s92local2 = __s92local1[__s92local0];
        if (__s92local2 !== undefined) {
          for (var __s92local3 = 0, __s92local4 = __s92local2.slumVOs; __s92local3 < __s92local4.length; __s92local3++) {
            var __s92local5 = __s92local4[__s92local3];
            if (__s92local5 !== undefined && __s92local5.partpaypriceVO != null && __s92local5.partpaypriceVO.id == __s92param0) {
              return __s92local5;
            }
          }
        }
      }
    }
    return null;
  };
  CastleKingdomData.prototype.canPlayerGoToKingdom = function (__s101param0) {
    if (__s101param0 == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID && !__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION)) {
      return false;
    }
    var __s101local0 = this.getKingdomVOByID(__s101param0);
    return __dep_export_CastleModel.CastleModel.userData.userLevel >= __s101local0.minLevel && __s101local0.isPaid;
  };
  Object.defineProperty(CastleKingdomData.prototype, "eilandRewards", {
    get: function () {
      return this._eilandRewards;
    },
    enumerable: true,
    configurable: true
  });
  CastleKingdomData.prototype.resetEilandData = function () {
    this.getKingdomVOByID(__dep_exact_26a421b704832cff_3.WorldIsland.KINGDOM_ID).resetUnlockData();
  };
  Object.defineProperty(CastleKingdomData.prototype, "willBecomeFaction", {
    get: function () {
      return this._willBecomeFaction;
    },
    set: function (__s110param0) {
      this._willBecomeFaction = __s110param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomData.prototype, "kingdomVOs", {
    get: function () {
      return this._kingdomVOs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomData.prototype, "stormIslandsPreBuildCastles", {
    get: function () {
      return this._stormIslandsPreBuildCastles;
    },
    enumerable: true,
    configurable: true
  });
  return CastleKingdomData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleKingdomData = __s0local0;
var __dep_export_CastleEilandRewardsVO = require("gge-module:export_CastleEilandRewardsVO");
var __dep_export_CastleKingdomGoodsTransferVO = require("gge-module:export_CastleKingdomGoodsTransferVO");
var __dep_export_CastleKingdomUnitTransferVO = require("gge-module:export_CastleKingdomUnitTransferVO");
var __dep_export_CastleKingdomVO = require("gge-module:export_CastleKingdomVO");
var __dep_export_CastleSlumDataVO = require("gge-module:export_CastleSlumDataVO");
var __dep_export_KingdomVillagesInfoVO = require("gge-module:export_KingdomVillagesInfoVO");
var __dep_export_SpecialServerPreBuiltCastleVO = require("gge-module:export_SpecialServerPreBuiltCastleVO");
