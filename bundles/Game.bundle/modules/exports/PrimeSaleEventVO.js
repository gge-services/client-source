Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastlePrimeSaleDialogProperties = require("gge-module:export_CastlePrimeSaleDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PaymentPopupDialogInfoVO = require("gge-module:export_PaymentPopupDialogInfoVO");
var __s0local0 = function (__s1param0) {
  function PrimeSaleEventVO() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PrimeSaleEventVO, __s1param0);
  PrimeSaleEventVO.prototype.parseParamObject = function (__s5param0) {
    var __s5local0 = [];
    for (var __s5local1 = 0, __s5local2 = __s5param0.WID; __s5local1 < __s5local2.length; __s5local1++) {
      var __s5local3 = __s5local2[__s5local1];
      if (__s5local3 !== undefined) {
        __s5local0.push(__s5local3);
      }
    }
    if (__s5local0.length == 0 && typeof __s5param0.WID == "number") {
      __s5local0.push(__s5param0.WID);
    }
    this._primeSaleComponent = new __dep_export_PrimeSaleComponent.PrimeSaleComponent(__s5local0, __s5param0.DIS);
  };
  PrimeSaleEventVO.prototype.openDialog = function (__s11param0 = true) {
    if (!__dep_export_CastleModel.CastleModel.privateOfferData.isHiddenEvent(this._eventId)) {
      var __s11local0 = new __dep_export_PaymentPopupDialogInfoVO.PaymentPopupDialogInfoVO(__dep_export_CastlePrimeSaleDialog.CastlePrimeSaleDialog, new __dep_export_CastlePrimeSaleDialogProperties.CastlePrimeSaleDialogProperties(this), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_SALE);
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__s11local0.dialogClass, __s11local0.properties, __s11local0.blockDialogs, __s11local0.priority, 0, __s11local0.type);
    }
  };
  Object.defineProperty(PrimeSaleEventVO.prototype, "primeSaleComponent", {
    get: function () {
      return this._primeSaleComponent;
    },
    enumerable: true,
    configurable: true
  });
  return PrimeSaleEventVO;
}(require("gge-module:export_ASpecialEventVO").ASpecialEventVO);
exports.PrimeSaleEventVO = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePrimeSaleDialog = require("gge-module:export_CastlePrimeSaleDialog");
var __dep_export_PrimeSaleComponent = require("gge-module:export_PrimeSaleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
