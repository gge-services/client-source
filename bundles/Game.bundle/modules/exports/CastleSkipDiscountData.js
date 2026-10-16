Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleSkipDiscountData() {
    this._skipDiscountPOActive = false;
    this._activeSkipDataPrivateOffers = [];
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, this.bindFunction(this.onNewPrivateOffer));
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onPrivateOfferRemoved));
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, this.bindFunction(this.onNewPrivateOffer));
    __dep_exact_9e901e8e2483a22f.BasicController.getInstance().addEventListener(__dep_export_BoosterDataEvent.BoosterDataEvent.BOOSTER_REMOVED, this.bindFunction(this.onBoosterRemoved));
  }
  CastleSkipDiscountData.prototype.onBoosterRemoved = function (__s5param0) {
    this.showNextPrivateOffer();
  };
  CastleSkipDiscountData.prototype.onPrivateOfferRemoved = function (__s7param0) {
    if (__s7param0.offerVO.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_SKIP)) {
      var __s7local0 = __dep_exact_f855840627e6e145.int(this._activeSkipDataPrivateOffers.indexOf(__s7param0.offerVO));
      if (__s7local0 > -1) {
        this._activeSkipDataPrivateOffers.splice(__s7local0, 1);
        if (this._activeSkipDataPrivateOffers.length < 1) {
          this._skipDiscountPOActive = false;
        } else {
          this.showNextPrivateOffer();
        }
      }
    }
  };
  CastleSkipDiscountData.prototype.showNextPrivateOffer = function () {
    var __s13local0 = this.getBestPrivateOffer();
    if (__s13local0) {
      var __s13local1 = __s13local0.getDescriptionByName(__dep_export_ClientConstOffer.ClientConstOffer.VISUAL_COMPONENT_CONTAINER);
      if (__s13local1) {
        for (var __s13local2 = 0, __s13local3 = Array.from(__s13local1.visuals.values()); __s13local2 < __s13local3.length; __s13local2++) {
          var __s13local4 = __s13local3[__s13local2];
          if (__s13local4 !== undefined && __s13local4.toExecuteInState(__s13local0.offerState) && __dep_exact_81dacdf05bd32292.instanceOfClass(__s13local4, "OfferDescriptionVisualInterfaceButton")) {
            __s13local4.execute(__s13local0);
          }
        }
      }
    }
  };
  CastleSkipDiscountData.prototype.onNewPrivateOffer = function (__s20param0) {
    if (__s20param0.offerVO.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_SKIP)) {
      if (this._activeSkipDataPrivateOffers.indexOf(__s20param0.offerVO) < 0 && __s20param0.offerVO.offerState == __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_PENDING) {
        this._activeSkipDataPrivateOffers.push(__s20param0.offerVO);
        this._skipDiscountPOActive = true;
      } else if (this._activeSkipDataPrivateOffers.indexOf(__s20param0.offerVO) >= 0 && __s20param0.offerVO.offerState != __dep_export_PrivateOfferStateEnum.PrivateOfferStateEnum.OFFER_PENDING) {
        this.onPrivateOfferRemoved(__s20param0);
      }
    }
  };
  Object.defineProperty(CastleSkipDiscountData.prototype, "skipDiscountPOActive", {
    get: function () {
      return this._skipDiscountPOActive;
    },
    enumerable: true,
    configurable: true
  });
  CastleSkipDiscountData.prototype.privateOfferIsBetter = function () {
    var __s27local0 = false;
    var __s27local1 = this.getBestPrivateOffer();
    if (__s27local1 && this.skipDiscountPOBetter(__s27local1)) {
      __s27local0 = true;
    }
    return __s27local0;
  };
  CastleSkipDiscountData.prototype.skipDiscountPOBetter = function (__s30param0) {
    return true;
  };
  CastleSkipDiscountData.prototype.isBestOfferSoFar = function (__s32param0) {
    if (this.skipDiscountPOBetter(__s32param0)) {
      var __s32local0 = this.getBestPrivateOffer();
      return !__s32local0 || __s32local0 === __s32param0 || __dep_exact_f855840627e6e145.int(__s32param0.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_SKIP).primeSaleSkipBuildingComponent.discount) > __dep_exact_f855840627e6e145.int(__s32local0.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_SKIP).primeSaleSkipBuildingComponent.discount);
    }
    return false;
  };
  CastleSkipDiscountData.prototype.getBestDiscount = function () {
    var __s35local0;
    var __s35local1 = this.getBestPrivateOffer();
    var __s35local2 = {
      discount: 0,
      remaining: 0
    };
    if (__s35local1) {
      __s35local0 = __s35local1.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_SKIP).primeSaleSkipBuildingComponent;
    }
    if (__s35local1) {
      __s35local2.discount = __s35local0.discount;
      __s35local2.remaining = __s35local1.remainingSeconds;
      return __s35local2;
    } else {
      return __s35local2;
    }
  };
  CastleSkipDiscountData.prototype.getBestPrivateOffer = function () {
    var __s40local0;
    var __s40local1 = 0;
    var __s40local2 = 0;
    if (this._activeSkipDataPrivateOffers != null) {
      for (var __s40local3 = 0, __s40local4 = this._activeSkipDataPrivateOffers; __s40local3 < __s40local4.length; __s40local3++) {
        var __s40local5 = __s40local4[__s40local3];
        if (__s40local5 !== undefined) {
          if (__s40local5.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_SKIP).primeSaleSkipBuildingComponent.discount > __s40local1) {
            __s40local1 = __dep_exact_f855840627e6e145.int(__s40local5.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_SKIP).primeSaleSkipBuildingComponent.discount);
            __s40local2 = __s40local5.remainingSeconds;
            __s40local0 = __s40local5;
          } else if (__s40local5.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_SKIP).primeSaleSkipBuildingComponent.discount == __s40local1 && __s40local5.remainingSeconds > __s40local2) {
            __s40local2 = __s40local5.remainingSeconds;
            __s40local0 = __s40local5;
          }
        }
      }
    }
    return __s40local0;
  };
  CastleSkipDiscountData.prototype.hasBoostedSkipDiscount = function (__s48param0 = null) {
    __s48param0 ||= this.getBestDiscount();
    return __s48param0.discount > 0 && __s48param0.remaining > 0;
  };
  CastleSkipDiscountData.prototype.getBoostedSkipDiscount = function (__s50param0 = null) {
    __s50param0 ||= this.getBestDiscount();
    return __dep_exact_f855840627e6e145.int(__s50param0.discount);
  };
  CastleSkipDiscountData.prototype.getBoostedSkipDiscountTime = function (__s52param0 = null) {
    __s52param0 ||= this.getBestDiscount();
    return __dep_exact_f855840627e6e145.int(__s52param0.remaining);
  };
  CastleSkipDiscountData.prototype.getSkipBoostTooltip = function (__s54param0 = null) {
    var __s54local0 = __dep_exact_f855840627e6e145.int(this.getBoostedSkipDiscountTime(__s54param0));
    if (__s54local0 < 1) {
      return "";
    }
    var __s54local1 = __s54local0 / 60;
    var __s54local2 = __s54local1 / 60;
    var __s54local3 = __s54local1;
    var __s54local4 = "Minutes";
    if (__s54local3 < 1) {
      __s54local3 = 1;
    }
    if (__s54local2 > 0) {
      __s54local3 = __s54local2;
      __s54local4 = "Hours";
    }
    var __s54local5 = "dialog_primeday_primesale_buildingSkip_noise_tooltip" + __s54local4 + (__s54local3 == 1 ? "_singular" : "_plural");
    return __dep_exact_92d05af59ee2ff30.Localize.text(__s54local5, [new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, [this.getBoostedSkipDiscount(__s54param0)]), __s54local3]);
  };
  return CastleSkipDiscountData;
}();
exports.CastleSkipDiscountData = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BoosterDataEvent = require("gge-module:export_BoosterDataEvent");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __dep_export_PrivateOfferStateEnum = require("gge-module:export_PrivateOfferStateEnum");
