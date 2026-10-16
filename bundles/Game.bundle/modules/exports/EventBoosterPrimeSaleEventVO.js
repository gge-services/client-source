Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PaymentPopupDialogInfoVO = require("gge-module:export_PaymentPopupDialogInfoVO");
var __s0local0 = function (__s1param0) {
  function EventBoosterPrimeSaleEventVO() {
    var __s3local0 = this;
    __s3local0._activeBoosterSale = -1;
    __s3local0._currentDiscount = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._eventId = __dep_exact_26a421b704832cff_2.EventConst.EVENTTYPE_EVENT_BOOSTER_PRIME_SALE;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EventBoosterPrimeSaleEventVO, __s1param0);
  EventBoosterPrimeSaleEventVO.prototype.parseParamObject = function (__s5param0) {
    __s1param0.prototype.parseParamObject.call(this, __s5param0);
    this._activeBoosterSale = -1;
    this._currentDiscount = 0;
    if (__s5param0) {
      if (__s5param0.hasOwnProperty(__dep_exact_26a421b704832cff_1.CommKeys.BOOSTER_ID) && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5param0[__dep_exact_26a421b704832cff_1.CommKeys.BOOSTER_ID], "Array")) {
        for (var __s5local0 = 0, __s5local1 = __s5param0[__dep_exact_26a421b704832cff_1.CommKeys.BOOSTER_ID]; __s5local0 < __s5local1.length; __s5local0++) {
          var __s5local2 = __s5local1[__s5local0];
          if (__s5local2 !== undefined && __dep_exact_26a421b704832cff.BoosterConst.PRIME_SALE_BOOSTER_IDS.indexOf(__s5local2) != -1) {
            this._activeBoosterSale = __s5local2;
            break;
          }
        }
      }
      if (__s5param0.DIS) {
        this._currentDiscount = __dep_exact_f855840627e6e145.int(__s5param0.DIS);
      }
    }
  };
  EventBoosterPrimeSaleEventVO.prototype.openDialog = function (__s13param0 = true) {
    var __s13local0 = new __dep_export_PaymentPopupDialogInfoVO.PaymentPopupDialogInfoVO(__dep_export_CastlePrimeSaleBoosterDialog.CastlePrimeSaleBoosterDialog, null, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_SALE);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__s13local0.dialogClass, __s13local0.properties, __s13local0.blockDialogs, __s13local0.priority, 0, __s13local0.type);
  };
  Object.defineProperty(EventBoosterPrimeSaleEventVO.prototype, "activeBoosterSale", {
    get: function () {
      return this._activeBoosterSale;
    },
    enumerable: true,
    configurable: true
  });
  EventBoosterPrimeSaleEventVO.prototype.isBoosterDiscounted = function (__s17param0) {
    return this._activeBoosterSale == __s17param0;
  };
  Object.defineProperty(EventBoosterPrimeSaleEventVO.prototype, "currentDiscount", {
    get: function () {
      return this._currentDiscount;
    },
    enumerable: true,
    configurable: true
  });
  EventBoosterPrimeSaleEventVO.prototype.canBeAddedToActiveEvents = function () {
    return this.isPrimeSaleBoosterTargetAvailable(this._activeBoosterSale);
  };
  EventBoosterPrimeSaleEventVO.prototype.isPrimeSaleBoosterTargetAvailable = function (__s23param0) {
    var __s23local0 = __dep_export_CastleModel.CastleModel.boostData.getBoosterByID(__s23param0);
    return !__s23local0 || __s23local0.finalCostsC2 > 0;
  };
  return EventBoosterPrimeSaleEventVO;
}(require("gge-module:export_ASpecialEventVO").ASpecialEventVO);
exports.EventBoosterPrimeSaleEventVO = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePrimeSaleBoosterDialog = require("gge-module:export_CastlePrimeSaleBoosterDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
