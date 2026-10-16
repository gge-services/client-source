Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastlePrimeSaleDialogReviveAllDialogProperties = require("gge-module:export_CastlePrimeSaleDialogReviveAllDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PaymentPopupDialogInfoVO = require("gge-module:export_PaymentPopupDialogInfoVO");
var __s0local0 = function (__s1param0) {
  function PrimeSaleReviveAllEventVO() {
    var __s3local0 = this;
    __s3local0._discount = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PrimeSaleReviveAllEventVO, __s1param0);
  PrimeSaleReviveAllEventVO.prototype.parseParamObject = function (__s5param0) {
    this._discount = parseInt(__s5param0.DIS);
  };
  PrimeSaleReviveAllEventVO.prototype.openDialog = function (__s7param0 = true) {
    if (!__dep_export_CastleModel.CastleModel.privateOfferData.isHiddenEvent(this._eventId)) {
      var __s7local0 = new __dep_export_PaymentPopupDialogInfoVO.PaymentPopupDialogInfoVO(__dep_export_CastlePrimeSaleReviveAllDialog.CastlePrimeSaleReviveAllDialog, new __dep_export_CastlePrimeSaleDialogReviveAllDialogProperties.CastlePrimeSaleDialogReviveAllDialogProperties(this), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_SALE);
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__s7local0.dialogClass, __s7local0.properties, __s7local0.blockDialogs, __s7local0.priority, 0, __s7local0.type);
    }
  };
  Object.defineProperty(PrimeSaleReviveAllEventVO.prototype, "discount", {
    get: function () {
      return this._discount;
    },
    enumerable: true,
    configurable: true
  });
  return PrimeSaleReviveAllEventVO;
}(require("gge-module:export_ASpecialEventVO").ASpecialEventVO);
exports.PrimeSaleReviveAllEventVO = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePrimeSaleReviveAllDialog = require("gge-module:export_CastlePrimeSaleReviveAllDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
