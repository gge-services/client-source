Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleRelicEnchanterPrimeSaleDialog = require("gge-module:export_CastleRelicEnchanterPrimeSaleDialog");
var __dep_export_CastleRelicEnchanterPrimeSaleDialogProperties = require("gge-module:export_CastleRelicEnchanterPrimeSaleDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PaymentPopupDialogInfoVO = require("gge-module:export_PaymentPopupDialogInfoVO");
var __s0local0 = function (__s1param0) {
  function RelicEnchanterPrimeSaleEventVO() {
    var __s3local0 = this;
    __s3local0._discount = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RelicEnchanterPrimeSaleEventVO, __s1param0);
  RelicEnchanterPrimeSaleEventVO.prototype.parseParamObject = function (__s5param0) {
    this._discount = __dep_exact_f855840627e6e145.int(__s5param0.DIS);
  };
  RelicEnchanterPrimeSaleEventVO.prototype.openDialog = function (__s7param0 = true) {
    if (!__dep_export_CastleModel.CastleModel.privateOfferData.isHiddenEvent(this._eventId)) {
      var __s7local0 = new __dep_export_PaymentPopupDialogInfoVO.PaymentPopupDialogInfoVO(__dep_export_CastleRelicEnchanterPrimeSaleDialog.CastleRelicEnchanterPrimeSaleDialog, new __dep_export_CastleRelicEnchanterPrimeSaleDialogProperties.CastleRelicEnchanterPrimeSaleDialogProperties(this), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_SALE);
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__s7local0.dialogClass, __s7local0.properties, __s7local0.blockDialogs, __s7local0.priority, 0, __s7local0.type);
    }
  };
  Object.defineProperty(RelicEnchanterPrimeSaleEventVO.prototype, "discount", {
    get: function () {
      return this._discount;
    },
    enumerable: true,
    configurable: true
  });
  return RelicEnchanterPrimeSaleEventVO;
}(require("gge-module:export_ASpecialEventVO").ASpecialEventVO);
exports.RelicEnchanterPrimeSaleEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
