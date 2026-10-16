Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PrivateOfferDataEvent = require("gge-module:export_PrivateOfferDataEvent");
var __s0local0 = createjs.Event;
var __s0local1 = function (__s1param0) {
  function CastleBoosterSaleData() {
    var __s3local0 = __s1param0.call(this) || this;
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, __s3local0.bindFunction(__s3local0.onPrivateOfferAdded));
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_STATE_CHANGED, __s3local0.bindFunction(__s3local0.onPrivateOfferAdded));
    __dep_export_CastleModel.CastleModel.privateOfferData.addEventListener(__dep_export_PrivateOfferDataEvent.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, __s3local0.bindFunction(__s3local0.onPrivateOfferRemoved));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, __s3local0.bindFunction(__s3local0.onSpecialEventAdded));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, __s3local0.bindFunction(__s3local0.onSpecialEventRemoved));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBoosterSaleData, __s1param0);
  CastleBoosterSaleData.prototype.reset = function () {
    __s1param0.prototype.reset.call(this);
    this.currentOffer = null;
    this.currentEvent = null;
    this.currentPrimeSale = null;
  };
  CastleBoosterSaleData.prototype.onSpecialEventAdded = function (__s7param0) {
    if (__s7param0 && __s7param0.specialEventVO && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s7param0.specialEventVO, "EventBoosterPrimeSaleEventVO")) {
      this.currentEvent = __s7param0.specialEventVO;
      this.dispatchEvent(new __s0local0(CastleBoosterSaleData.BOOSTER_SALE_UPDATE, false, false));
    }
  };
  CastleBoosterSaleData.prototype.onSpecialEventRemoved = function (__s10param0) {
    if (__s10param0 && __s10param0.specialEventVO && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s10param0.specialEventVO, "EventBoosterPrimeSaleEventVO")) {
      this.currentEvent = null;
      this.dispatchEvent(new __s0local0(CastleBoosterSaleData.BOOSTER_SALE_UPDATE, false, false));
    }
  };
  CastleBoosterSaleData.prototype.onPrivateOfferAdded = function (__s13param0) {
    if (__s13param0 && __s13param0.offerVO) {
      var __s13local0 = __s13param0.offerVO.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_BOOSTER_SALE);
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s13local0, "OfferDescriptionBoosterPrimeSale")) {
        this.currentOffer = __s13param0.offerVO;
        this.currentPrimeSale = __s13local0;
        this.dispatchEvent(new __s0local0(CastleBoosterSaleData.BOOSTER_SALE_UPDATE, false, false));
      }
    }
  };
  CastleBoosterSaleData.prototype.onPrivateOfferRemoved = function (__s17param0) {
    if (__s17param0 && __s17param0.offerVO && __s17param0.offerVO.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_BOOSTER_SALE)) {
      this.currentOffer = null;
      this.currentPrimeSale = null;
      this.dispatchEvent(new __s0local0(CastleBoosterSaleData.BOOSTER_SALE_UPDATE, false, false));
    }
  };
  CastleBoosterSaleData.prototype.isAnyBoosterOnSale = function () {
    return !!this.currentOffer || !!this.currentEvent;
  };
  CastleBoosterSaleData.prototype.isBoosterOnSale = function (__s22param0) {
    if (__dep_exact_26a421b704832cff.BoosterConst.PRIME_SALE_BOOSTER_IDS.indexOf(__s22param0) == -1) {
      return false;
    }
    if (this.currentOffer && this.currentOffer.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_BOOSTER_SALE).boosterId == __s22param0) {
      return true;
    }
    return !!this.currentEvent && this.currentEvent.isBoosterDiscounted(__s22param0);
  };
  CastleBoosterSaleData.prototype.anyTimeLeft = function () {
    if (this.currentOffer && this.currentPrimeSale) {
      return this.currentOffer.remainingSeconds;
    } else if (this.currentEvent) {
      return __dep_exact_f855840627e6e145.int(this.currentEvent.remainingEventTimeInSeconds);
    } else {
      return -1;
    }
  };
  CastleBoosterSaleData.prototype.getDiscount = function (__s31param0) {
    var __s31local0 = 0;
    var __s31local1 = __dep_export_CastleModel.CastleModel.boostData.getBoosterByID(__s31param0);
    if (__s31local1 && __s31local1.hasRebuyDiscount) {
      __s31local0 += __s31local1.rebuyDiscount;
    }
    var __s31local2 = false;
    if (this.currentOffer && this.currentPrimeSale && this.currentPrimeSale.boosterId == __s31param0) {
      __s31local0 += this.currentPrimeSale.discount;
      __s31local2 = true;
    }
    if (!__s31local2 && this.currentEvent && this.currentEvent.isBoosterDiscounted(__s31param0)) {
      __s31local0 += this.currentEvent.currentDiscount;
    }
    return __s31local0;
  };
  CastleBoosterSaleData.prototype.handleMc = function (__s36param0, __s36param1) {
    if (!__s36param0 || !__s36param0.hasOwnProperty("txt_value")) {
      return false;
    }
    var __s36local0 = this.isBoosterOnSale(__s36param1);
    __s36param0.visible = __s36local0;
    if (__s36local0) {
      __s36param0.txt_value.getTextFormat().size = 14;
      __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s36param0.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this.getDiscount(__s36param1)])).color = 16250871;
    }
    return __s36local0;
  };
  CastleBoosterSaleData.prototype.hideDiscount = function () {
    return false;
  };
  CastleBoosterSaleData.prototype.getOfferId = function (__s42param0) {
    if (this.currentOffer && this.currentPrimeSale && this.currentPrimeSale.boosterId == __s42param0) {
      return this.currentOffer.id;
    } else {
      return -1;
    }
  };
  CastleBoosterSaleData.BOOSTER_SALE_UPDATE = "BOOSTER_SALE_UPDATE";
  return CastleBoosterSaleData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastleBoosterSaleData = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IUpdatable", "ICastleBasicData");
