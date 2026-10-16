Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleOfferDataEvent = require("gge-module:export_CastleOfferDataEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_GlobalOfferScopeEnum = require("gge-module:export_GlobalOfferScopeEnum");
var __dep_export_GlobalOfferVO = require("gge-module:export_GlobalOfferVO");
var __dep_export_GlobalOfferVOAdditionalParams = require("gge-module:export_GlobalOfferVOAdditionalParams");
var __s0local0 = function (__s1param0) {
  function CastleGlobalOfferData() {
    var __s3local0 = this;
    __s3local0._activeGlobalOffers = 0;
    __s3local0._activePrivateOffers = 0;
    __s3local0._activeIngameDiscounts = 0;
    __s3local0._highestActiveIngameDiscount = 0;
    __s3local0._webShopOffersAmount = 0;
    __s3local0._showPrivatePrimeTimeOffersOnLogin = true;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).reset();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGlobalOfferData, __s1param0);
  CastleGlobalOfferData.prototype.reset = function () {
    this._offerVOs = [];
    this._activeGlobalOffers = 0;
    this._activePrivateOffers = 0;
    this._activeIngameDiscounts = 0;
    this._highestActiveIngameDiscount = 0;
    this._webShopOffersAmount = 0;
    this._showPrivatePrimeTimeOffersOnLogin = true;
  };
  CastleGlobalOfferData.prototype.executeUpdate = function (__s7param0) {
    if (this._offerVOs.length > 0 && this._offerVOs[0].isOfferExpired(__s7param0)) {
      this.removeOffer(this._offerVOs[0]);
    }
  };
  CastleGlobalOfferData.prototype.addOffer = function (__s10param0) {
    if (!this.hasGlobalSpecialOfferRunning(__s10param0)) {
      if (this.isPrimeTimeOffer(__s10param0)) {
        if (this.isPrioritisedPrimeTime(__s10param0)) {
          this.showOfferDialog(__s10param0);
        }
      } else {
        this.showOfferDialog(__s10param0);
      }
      if (__s10param0.offerScope === __dep_export_GlobalOfferScopeEnum.GlobalOfferScopeEnum.GLOBAL) {
        ++this._activeGlobalOffers;
      }
      if (__s10param0.offerScope === __dep_export_GlobalOfferScopeEnum.GlobalOfferScopeEnum.PRIVATE) {
        ++this._activePrivateOffers;
      }
      if (this.isOfferWithIngameDiscount(__s10param0)) {
        ++this._activeIngameDiscounts;
        this.calculateHighestIngameDiscount();
      }
      this._offerVOs.push(__s10param0);
      __dep_exact_9e901e8e2483a22f_1.VectorSortHelper.sort(this._offerVOs, this.bindFunction(this.sortOnTime));
      __dep_exact_9e901e8e2483a22f.info("Offer Added!");
      this.traceAllOffers();
      this.dispatchEvent(new __dep_export_CastleOfferDataEvent.CastleOfferDataEvent(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ADDED, __s10param0));
    }
  };
  CastleGlobalOfferData.prototype.showOfferDialog = function (__s19param0) {
    if (__s19param0.hasPopup) {
      __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_OFFER_DIALOG_COMMAND, __s19param0);
    }
  };
  CastleGlobalOfferData.prototype.isPrimeTimeOffer = function (__s22param0) {
    return __s22param0.offerScope == __dep_export_GlobalOfferScopeEnum.GlobalOfferScopeEnum.GLOBAL && __s22param0.offerType == CastleGlobalOfferData.EVENT_SPECIALOFFER || __s22param0.offerScope == __dep_export_GlobalOfferScopeEnum.GlobalOfferScopeEnum.PRIVATE && __s22param0.offerType == CastleGlobalOfferData.PRIME_TIME;
  };
  CastleGlobalOfferData.prototype.isPrioritisedPrimeTime = function (__s24param0) {
    var __s24local0;
    if (__s24param0.offerScope == __dep_export_GlobalOfferScopeEnum.GlobalOfferScopeEnum.PRIVATE) {
      for (var __s24local1 = 0, __s24local2 = this._offerVOs; __s24local1 < __s24local2.length; __s24local1++) {
        if ((__s24local0 = __s24local2[__s24local1]).offerScope == __dep_export_GlobalOfferScopeEnum.GlobalOfferScopeEnum.GLOBAL && __s24local0.offerType == CastleGlobalOfferData.EVENT_SPECIALOFFER) {
          return __s24param0.cashDiscount > __s24local0.goldDiscount;
        }
      }
      return true;
    }
    if (__s24param0.offerScope == __dep_export_GlobalOfferScopeEnum.GlobalOfferScopeEnum.GLOBAL) {
      for (var __s24local3 = 0, __s24local4 = this._offerVOs; __s24local3 < __s24local4.length; __s24local3++) {
        if ((__s24local0 = __s24local4[__s24local3]).offerScope == __dep_export_GlobalOfferScopeEnum.GlobalOfferScopeEnum.PRIVATE && __s24local0.offerType == CastleGlobalOfferData.PRIME_TIME) {
          return __s24param0.goldDiscount > __s24local0.cashDiscount;
        }
      }
      return true;
    }
    return true;
  };
  CastleGlobalOfferData.prototype.removeOffer = function (__s34param0) {
    if (__s34param0) {
      this._offerVOs.splice(this._offerVOs.indexOf(__s34param0), 1);
      __dep_exact_9e901e8e2483a22f_1.VectorSortHelper.sort(this._offerVOs, this.bindFunction(this.sortOnTime));
      if (__s34param0.offerScope === __dep_export_GlobalOfferScopeEnum.GlobalOfferScopeEnum.GLOBAL) {
        this._activeGlobalOffers = __dep_exact_f855840627e6e145.int(Math.max(this._activeGlobalOffers - 1, 0));
      }
      if (__s34param0.offerScope === __dep_export_GlobalOfferScopeEnum.GlobalOfferScopeEnum.PRIVATE) {
        this._activePrivateOffers = __dep_exact_f855840627e6e145.int(Math.max(this._activePrivateOffers - 1, 0));
      }
      if (this.isOfferWithIngameDiscount(__s34param0)) {
        this._activeIngameDiscounts = __dep_exact_f855840627e6e145.int(Math.max(this._activeIngameDiscounts - 1, 0));
        this.calculateHighestIngameDiscount();
      }
      __dep_exact_9e901e8e2483a22f.info("OFFER REMOVED");
      this.traceAllOffers();
      this.dispatchEvent(new __dep_export_CastleOfferDataEvent.CastleOfferDataEvent(__dep_export_CastleOfferDataEvent.CastleOfferDataEvent.OFFER_ENDED, __s34param0));
      if (__s34param0.offerScope == __dep_export_GlobalOfferScopeEnum.GlobalOfferScopeEnum.GLOBAL && __s34param0.offerType == CastleGlobalOfferData.EVENT_SPECIALOFFER && this.hasGlobalSpecialOfferRunning(__s34param0)) {
        this._offerVOs.splice(this._offerVOs.indexOf(__s34param0), 1);
        __dep_exact_9e901e8e2483a22f_1.VectorSortHelper.sort(this._offerVOs, this.bindFunction(this.sortOnTime));
      }
    }
  };
  CastleGlobalOfferData.prototype.hasGlobalSpecialOfferRunning = function (__s41param0) {
    if (this._offerVOs != null) {
      for (var __s41local0 = 0, __s41local1 = this._offerVOs; __s41local0 < __s41local1.length; __s41local0++) {
        var __s41local2 = __s41local1[__s41local0];
        if (__s41local2 !== undefined && __s41local2 && __s41local2.remainingDuration(Date.now()) > 0 && __s41local2.offerScope == __dep_export_GlobalOfferScopeEnum.GlobalOfferScopeEnum.GLOBAL && __s41param0.offerScope == __dep_export_GlobalOfferScopeEnum.GlobalOfferScopeEnum.GLOBAL && __s41local2.offerType == CastleGlobalOfferData.EVENT_SPECIALOFFER && __s41param0.offerType == CastleGlobalOfferData.EVENT_SPECIALOFFER) {
          return true;
        }
      }
    }
    return false;
  };
  CastleGlobalOfferData.prototype.calculateHighestIngameDiscount = function () {
    this._highestActiveIngameDiscount = 0;
    if (this._offerVOs != null) {
      for (var __s47local0 = 0, __s47local1 = this._offerVOs; __s47local0 < __s47local1.length; __s47local0++) {
        var __s47local2 = __s47local1[__s47local0];
        if (__s47local2 !== undefined && this.isOfferWithIngameDiscount(__s47local2)) {
          if (this.isGlobalOfferActive && __s47local2.offerScope === __dep_export_GlobalOfferScopeEnum.GlobalOfferScopeEnum.PRIVATE || this.isPrivateOfferActive && __s47local2.offerScope === __dep_export_GlobalOfferScopeEnum.GlobalOfferScopeEnum.GLOBAL) {
            continue;
          }
          this._highestActiveIngameDiscount = __dep_exact_f855840627e6e145.int(Math.max(this._highestActiveIngameDiscount, __s47local2.cashDiscount));
        }
      }
    }
  };
  CastleGlobalOfferData.prototype.isOfferWithIngameDiscount = function (__s54param0) {
    return __s54param0.offerType == CastleGlobalOfferData.EVENT_SPECIALINGAMEOFFER;
  };
  CastleGlobalOfferData.prototype.isOfferActive = function (__s56param0) {
    if (this._offerVOs != null) {
      for (var __s56local0 = 0, __s56local1 = this._offerVOs; __s56local0 < __s56local1.length; __s56local0++) {
        var __s56local2 = __s56local1[__s56local0];
        if (__s56local2 !== undefined && __s56local2.offerType == __s56param0) {
          return true;
        }
      }
    }
    return false;
  };
  CastleGlobalOfferData.prototype.getActiveOffer = function (__s62param0) {
    if (this._offerVOs != null) {
      for (var __s62local0 = 0, __s62local1 = this._offerVOs; __s62local0 < __s62local1.length; __s62local0++) {
        var __s62local2 = __s62local1[__s62local0];
        if (__s62local2 !== undefined && __s62local2.offerType == __s62param0 && (!__s62local2.isOfferExpired(__dep_export_CachedTimer.CachedTimer.getCachedTimer()) || __s62local2.isTimeless)) {
          return __s62local2;
        }
      }
    }
    return null;
  };
  CastleGlobalOfferData.prototype.isAnyIngameDiscountActive = function () {
    return this._activeIngameDiscounts > 0;
  };
  CastleGlobalOfferData.prototype.sortOnTime = function (__s70param0, __s70param1) {
    if (__s70param0.offerEndTimeStamp > __s70param1.offerEndTimeStamp) {
      return 1;
    } else {
      return 0;
    }
  };
  CastleGlobalOfferData.prototype.isAnyOfferActive = function () {
    return this._offerVOs.length > 0;
  };
  Object.defineProperty(CastleGlobalOfferData.prototype, "isGlobalOfferActive", {
    get: function () {
      return this._activeGlobalOffers > 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleGlobalOfferData.prototype.getActivePrivatePrimeTimeOffer = function () {
    var __s78local0 = this.getActiveOffer(CastleGlobalOfferData.PRIME_TIME);
    if (__s78local0 && this.isPrioritisedPrimeTime(__s78local0)) {
      return __s78local0;
    } else {
      return null;
    }
  };
  CastleGlobalOfferData.prototype.getActiveGlobalPrimeTimeOffer = function () {
    var __s82local0 = this.getActiveOffer(CastleGlobalOfferData.EVENT_SPECIALOFFER);
    if (__s82local0 && this.isPrioritisedPrimeTime(__s82local0)) {
      return __s82local0;
    } else {
      return null;
    }
  };
  Object.defineProperty(CastleGlobalOfferData.prototype, "isPrivateOfferActive", {
    get: function () {
      return this._activePrivateOffers > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGlobalOfferData.prototype, "highestActiveIngameDiscount", {
    get: function () {
      return this._highestActiveIngameDiscount;
    },
    enumerable: true,
    configurable: true
  });
  CastleGlobalOfferData.prototype.parse_POE = function (__s90param0) {
    switch (parseInt(__s90param0.type)) {
      case CastleGlobalOfferData.PRIME_EVENT_TYPE_PPT:
        this.parse_PPT(__s90param0);
        break;
      case CastleGlobalOfferData.PRIME_EVENT_TYPE_SOE:
        this.parse_SOE(__s90param0);
        break;
      case CastleGlobalOfferData.PRIME_EVENT_TYPE_SIO:
        this.parse_SIO(__s90param0);
    }
  };
  CastleGlobalOfferData.prototype.parse_SOE = function (__s93param0) {
    if (__s93param0) {
      var __s93local0 = parseInt(__s93param0.bonusPremium);
      var __s93local1 = parseInt(__s93param0.bonusStandard);
      var __s93local2 = parseInt(__s93param0.remainingTime);
      var __s93local3 = __s93param0.isTimeless == 1;
      var __s93local4 = __s93param0.duration ? parseInt(__s93param0.duration) : __s93local2;
      if (__s93local2 <= 0) {
        this.removeOffer(this.getActiveOffer(CastleGlobalOfferData.EVENT_SPECIALOFFER));
      } else {
        this.addOffer(new __dep_export_GlobalOfferVO.GlobalOfferVO(CastleGlobalOfferData.EVENT_SPECIALOFFER, __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s93local2 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, __dep_export_GlobalOfferScopeEnum.GlobalOfferScopeEnum.GLOBAL, new __dep_export_GlobalOfferVOAdditionalParams.GlobalOfferVOAdditionalParams(__s93local1, __s93local0), true, __s93local3, __dep_export_CachedTimer.CachedTimer.getCachedTimer() - (__s93local4 - __s93local2) * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC));
      }
    }
  };
  CastleGlobalOfferData.prototype.parse_PPT = function (__s98param0) {
    if (__s98param0) {
      var __s98local0 = parseInt(__s98param0.bonusStandard);
      var __s98local1 = parseInt(__s98param0.bonusPremium);
      var __s98local2 = parseInt(__s98param0.typeId);
      var __s98local3 = parseInt(__s98param0.remainingTime);
      var __s98local4 = __s98param0.isTimeless == CastleGlobalOfferData.TEXT_TRUE;
      var __s98local5 = parseInt(__s98param0.duration);
      if (!(__s98local3 <= 0)) {
        var __s98local6 = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s98local3 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
        this.addOffer(new __dep_export_GlobalOfferVO.GlobalOfferVO(CastleGlobalOfferData.PRIME_TIME, __s98local6, __dep_export_GlobalOfferScopeEnum.GlobalOfferScopeEnum.PRIVATE, new __dep_export_GlobalOfferVOAdditionalParams.GlobalOfferVOAdditionalParams(__s98local1, __s98local0, __s98local2), this._showPrivatePrimeTimeOffersOnLogin, __s98local4, __s98local6 - __s98local5 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC));
        this._showPrivatePrimeTimeOffersOnLogin &&= false;
      }
    }
  };
  CastleGlobalOfferData.prototype.parse_SIO = function (__s102param0) {
    if (__s102param0) {
      var __s102local0 = parseInt(__s102param0.bonusPremium);
      var __s102local1 = parseInt(__s102param0.remainingTime);
      this.addOffer(new __dep_export_GlobalOfferVO.GlobalOfferVO(CastleGlobalOfferData.EVENT_SPECIALINGAMEOFFER, __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s102local1 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, __dep_export_GlobalOfferScopeEnum.GlobalOfferScopeEnum.GLOBAL, new __dep_export_GlobalOfferVOAdditionalParams.GlobalOfferVOAdditionalParams(__s102local0), false));
    }
  };
  CastleGlobalOfferData.prototype.parse_DIO = function (__s105param0) {
    if (__s105param0) {
      this.addOffer(new __dep_export_GlobalOfferVO.GlobalOfferVO(__s105param0.T, __dep_export_CachedTimer.CachedTimer.getCachedTimer() + parseInt(__s105param0.RT) * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, __dep_export_GlobalOfferScopeEnum.GlobalOfferScopeEnum.PRIVATE, new __dep_export_GlobalOfferVOAdditionalParams.GlobalOfferVOAdditionalParams(parseInt(__s105param0.DP)), false));
    }
  };
  CastleGlobalOfferData.prototype.activateDecoOffer = function () {
    this.addOffer(new __dep_export_GlobalOfferVO.GlobalOfferVO(CastleGlobalOfferData.DECORATION_OFFER, __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC * 30, __dep_export_GlobalOfferScopeEnum.GlobalOfferScopeEnum.RETENTION, null, false));
  };
  CastleGlobalOfferData.prototype.activateBrandOffer = function () {
    this.addOffer(new __dep_export_GlobalOfferVO.GlobalOfferVO(CastleGlobalOfferData.BRAND_OFFER, __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC * 30, __dep_export_GlobalOfferScopeEnum.GlobalOfferScopeEnum.RETENTION, null, false));
  };
  CastleGlobalOfferData.prototype.activateTimeOffer = function () {
    this.addOffer(new __dep_export_GlobalOfferVO.GlobalOfferVO(CastleGlobalOfferData.TIME_CHALLENGE_OFFER, __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC * 30, __dep_export_GlobalOfferScopeEnum.GlobalOfferScopeEnum.RETENTION, null, false));
  };
  CastleGlobalOfferData.prototype.activatePrimeTime = function () {
    this.addOffer(new __dep_export_GlobalOfferVO.GlobalOfferVO(CastleGlobalOfferData.EVENT_SPECIALOFFER, __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC * 30, __dep_export_GlobalOfferScopeEnum.GlobalOfferScopeEnum.GLOBAL, new __dep_export_GlobalOfferVOAdditionalParams.GlobalOfferVOAdditionalParams(0, 200), false));
  };
  CastleGlobalOfferData.prototype.activatePrimeAction = function () {
    this.addOffer(new __dep_export_GlobalOfferVO.GlobalOfferVO(CastleGlobalOfferData.EVENT_SPECIALINGAMEOFFER, __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC * 25, __dep_export_GlobalOfferScopeEnum.GlobalOfferScopeEnum.GLOBAL, new __dep_export_GlobalOfferVOAdditionalParams.GlobalOfferVOAdditionalParams(75), false));
  };
  CastleGlobalOfferData.prototype.traceAllOffers = function () {
    __dep_exact_9e901e8e2483a22f.info("-------- Active Offers --------");
    if (this._offerVOs != null) {
      for (var __s118local0 = 0, __s118local1 = this._offerVOs; __s118local0 < __s118local1.length; __s118local0++) {
        var __s118local2 = __s118local1[__s118local0];
        if (__s118local2 !== undefined) {
          __dep_exact_9e901e8e2483a22f.info("Offer: type:" + __s118local2.offerType + " remaining: " + __s118local2.remainingDuration(__dep_export_CachedTimer.CachedTimer.getCachedTimer()));
        }
      }
    }
    __dep_exact_9e901e8e2483a22f.info("Highest Ingame Discount: " + this._highestActiveIngameDiscount);
  };
  Object.defineProperty(CastleGlobalOfferData.prototype, "webShopOffersAmount", {
    get: function () {
      return this._webShopOffersAmount;
    },
    set: function (__s126param0) {
      this._webShopOffersAmount = __s126param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleGlobalOfferData.__initialize_static_members = function () {
    CastleGlobalOfferData.EVENT_SPECIALOFFER = __dep_exact_26a421b704832cff.PremiumConst.EVENT_SPECIALOFFER;
    CastleGlobalOfferData.EVENT_SPECIALINGAMEOFFER = __dep_exact_26a421b704832cff.PremiumConst.EVENT_SPECIALINGAMEOFFER;
    CastleGlobalOfferData.EVENT_REGISTERBONUS = __dep_exact_26a421b704832cff.PremiumConst.EVENT_REGISTERBONUS;
  };
  CastleGlobalOfferData.PRIME_EVENT_TYPE_PPT = 0;
  CastleGlobalOfferData.PRIME_EVENT_TYPE_SOE = 1;
  CastleGlobalOfferData.PRIME_EVENT_TYPE_SIO = 2;
  CastleGlobalOfferData.TIME_CHALLENGE_OFFER = 10;
  CastleGlobalOfferData.DECORATION_OFFER = 11;
  CastleGlobalOfferData.BRAND_OFFER = 12;
  CastleGlobalOfferData.PRIME_TIME = 13;
  CastleGlobalOfferData.SKIP_DISCOUNT = 14;
  CastleGlobalOfferData.TEXT_TRUE = "true";
  return CastleGlobalOfferData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleGlobalOfferData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
__s0local0.__initialize_static_members();
