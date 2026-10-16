Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PaymentPopupDialogInfoVO = require("gge-module:export_PaymentPopupDialogInfoVO");
var __s0local0 = function (__s1param0) {
  function AlliPaymentBonusEventVO() {
    var __s3local0 = this;
    __s3local0._primeFactorInPercent = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AlliPaymentBonusEventVO, __s1param0);
  AlliPaymentBonusEventVO.prototype.parseParamObject = function (__s5param0) {
    this._primeFactorInPercent = __dep_exact_f855840627e6e145.int(__s5param0.APP);
  };
  Object.defineProperty(AlliPaymentBonusEventVO.prototype, "primeFactorInPercent", {
    get: function () {
      return this._primeFactorInPercent;
    },
    enumerable: true,
    configurable: true
  });
  AlliPaymentBonusEventVO.prototype.onDestroy = function () {
    __dep_exact_9e901e8e2483a22f.BasicDialogHandler.getInstance().removeDialog(__dep_export_CastleAlliPaymentBonusDialog.CastleAlliPaymentBonusDialog);
  };
  AlliPaymentBonusEventVO.prototype.openDialog = function (__s11param0 = true) {
    if (!__dep_export_CastleModel.CastleModel.privateOfferData.isHiddenEvent(this._eventId)) {
      var __s11local0 = __dep_exact_f855840627e6e145.int(__s11param0 ? __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_TOP : __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_LOW);
      var __s11local1 = new __dep_export_PaymentPopupDialogInfoVO.PaymentPopupDialogInfoVO(__dep_export_CastleAlliPaymentBonusDialog.CastleAlliPaymentBonusDialog, null, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_TIME, false, __s11local0);
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__s11local1.dialogClass, __s11local1.properties, __s11local1.blockDialogs, __s11local1.priority);
    }
  };
  return AlliPaymentBonusEventVO;
}(require("gge-module:export_ASpecialEventVO").ASpecialEventVO);
exports.AlliPaymentBonusEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAlliPaymentBonusDialog = require("gge-module:export_CastleAlliPaymentBonusDialog");
