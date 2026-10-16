Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTieredPrimeDayRewardProperties = require("gge-module:export_CastleTieredPrimeDayRewardProperties");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function PARCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PARCommand, __s1param0);
  Object.defineProperty(PARCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_PAYMENT_REWARD;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  PARCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        if (__s9local0 != null) {
          for (var __s9local1 = 0, __s9local2 = __s9local0; __s9local1 < __s9local2.length; __s9local1++) {
            var __s9local3 = __s9local2[__s9local1];
            if (__s9local3 !== undefined) {
              var __s9local4 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_TIERED_PRIME_DAY), "TieredPaymentrewardEventVO");
              if (__s9local4) {
                __s9local4.boughtC2 = __s9local3.BC2;
              }
              var __s9local5 = __dep_export_CastleModel.CastleModel.primeDayData.getPrimeDayXMLNodeByID(__s9local3.ST);
              if (__s9local5 && __s9local5.isMultiTiered) {
                var __s9local6 = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList(__s9local3.RW);
                var __s9local7 = new __dep_export_CastleTieredPrimeDayRewardProperties.CastleTieredPrimeDayRewardProperties(__s9local6);
                __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleTieredPrimeDayRewardDialog.CastleTieredPrimeDayRewardDialog, __s9local7, true, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_HIGH);
              } else {
                __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastlePaymentRewardSpecialOfferFinishDialog.CastlePaymentRewardSpecialOfferFinishDialog, new __dep_export_CastlePaymentRewardSpecialOfferFinishDialogProperties.CastlePaymentRewardSpecialOfferFinishDialogProperties(__s9local3), true, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_HIGH);
              }
            }
          }
        }
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return PARCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.PARCommand = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePaymentRewardSpecialOfferFinishDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferFinishDialog");
var __dep_export_CastlePaymentRewardSpecialOfferFinishDialogProperties = require("gge-module:export_CastlePaymentRewardSpecialOfferFinishDialogProperties");
var __dep_export_CastleTieredPrimeDayRewardDialog = require("gge-module:export_CastleTieredPrimeDayRewardDialog");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IExecCommand");
