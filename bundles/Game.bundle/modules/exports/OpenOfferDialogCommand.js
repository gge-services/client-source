Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PaymentPopupDialogInfoVO = require("gge-module:export_PaymentPopupDialogInfoVO");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleOfferDialogProperties = require("gge-module:export_CastleOfferDialogProperties");
var __s0local0 = function (__s1param0) {
  function OpenOfferDialogCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OpenOfferDialogCommand, __s1param0);
  OpenOfferDialogCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __dep_exact_81dacdf05bd32292.castAs(__s5param0, "GlobalOfferVO");
    if (__s5local0 && __dep_exact_9e901e8e2483a22f_1.BasicModel.sessionData.loggedIn) {
      var __s5local1;
      var __s5local2 = new __dep_export_CastleOfferDialogProperties.CastleOfferDialogProperties(__s5local0);
      switch (__s5local0.offerType) {
        case __dep_export_CastleGlobalOfferData.CastleGlobalOfferData.EVENT_SPECIALINGAMEOFFER:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSpecialIngameOfferDialog.CastleSpecialIngameOfferDialog, new __dep_export_CastleOfferDialogProperties.CastleOfferDialogProperties(__s5local0), true, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_LOW);
          break;
        case __dep_export_CastleGlobalOfferData.CastleGlobalOfferData.EVENT_SPECIALOFFER:
          if (__dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_PRIMETIME) {
            if (__s5local0.isTimeless) {
              __s5local1 = new __dep_export_PaymentPopupDialogInfoVO.PaymentPopupDialogInfoVO(__dep_export_CastleTimelessSpecialOfferDialog.CastleTimelessSpecialOfferDialog, __s5local2, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_TIME, true, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_MIDDLE);
            } else {
              var __s5local3 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PRIME_TIME_SKIN);
              __s5local1 = !!__s5local3 && __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.isItemAssetVersioned("PrimeTimeDialog_" + __s5local3.skinName) ? new __dep_export_PaymentPopupDialogInfoVO.PaymentPopupDialogInfoVO(__dep_export_PrimeTimeSkinDialog.PrimeTimeSkinDialog, __s5local2, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_TIME, true, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_MIDDLE) : new __dep_export_PaymentPopupDialogInfoVO.PaymentPopupDialogInfoVO(__dep_export_ModernPrimeTimeDialog.ModernPrimeTimeDialog, __s5local2, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_TIME, true, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_MIDDLE);
            }
          }
          break;
        case __dep_export_CastleGlobalOfferData.CastleGlobalOfferData.PRIME_TIME:
          __s5local1 = __s5local0.isTimeless ? new __dep_export_PaymentPopupDialogInfoVO.PaymentPopupDialogInfoVO(__dep_export_CastleTimelessSpecialOfferDialog.CastleTimelessSpecialOfferDialog, __s5local2, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_TIME, true, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_MIDDLE) : new __dep_export_PaymentPopupDialogInfoVO.PaymentPopupDialogInfoVO(__dep_export_CastlePrivatePrimeTimeOfferDialog.CastlePrivatePrimeTimeOfferDialog, __s5local2, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIVATE_PRIME_TIME);
      }
      if (__s5local1 && !__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().isDialogVisibleByName(__s5local1.dialogClass)) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__s5local1.dialogClass, __s5local1.properties, __s5local1.blockDialogs, __s5local1.priority, 0, __s5local1.type);
      }
    }
  };
  return OpenOfferDialogCommand;
}(__dep_exact_9e901e8e2483a22f_2.SimpleCommand);
exports.OpenOfferDialogCommand = __s0local0;
var __dep_export_CastleGlobalOfferData = require("gge-module:export_CastleGlobalOfferData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePrivatePrimeTimeOfferDialog = require("gge-module:export_CastlePrivatePrimeTimeOfferDialog");
var __dep_export_CastleSpecialIngameOfferDialog = require("gge-module:export_CastleSpecialIngameOfferDialog");
var __dep_export_CastleTimelessSpecialOfferDialog = require("gge-module:export_CastleTimelessSpecialOfferDialog");
var __dep_export_ModernPrimeTimeDialog = require("gge-module:export_ModernPrimeTimeDialog");
var __dep_export_PrimeTimeSkinDialog = require("gge-module:export_PrimeTimeSkinDialog");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ISimpleCommand");
