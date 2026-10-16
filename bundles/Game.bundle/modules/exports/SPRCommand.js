Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function SPRCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SPRCommand, __s1param0);
  Object.defineProperty(SPRCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_SHOPPING_CART_REWARD;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  SPRCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff_1.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        var __s9local1 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_2.EventConst.EVENTTYPE_SHOPPING_CART_PRIMEDAY), "ShoppingCartPrimeSaleEventVO");
        if (__s9local1) {
          var __s9local2 = __s9local1.rewardCount;
          __s9local1.c2Payed = __s9local0[__dep_exact_26a421b704832cff.CommKeys.PAYED_C2];
          __s9local1.cartsPaid = __s9local1.rewardCount - __s9local2;
        }
        var __s9local3 = __s9local0[__dep_exact_26a421b704832cff.CommKeys.SHOPPING_CART];
        if (!__s9local3 || __s9local3.length < __dep_exact_26a421b704832cff_3.ShoppingCartConst.SHOPPING_CART_SIZE) {
          break;
        }
        var __s9local4 = new __dep_export_CollectableList.CollectableList();
        var __s9local5 = undefined;
        for (var __s9local6 = 0; __s9local6 < __s9local3.length; __s9local6++) {
          (__s9local5 = __dep_export_CastleModel.CastleModel.shoppingCartPrimeDayData.getNodeByOption(__s9local3[__s9local6]).item.clone()).amount *= __s9local1 ? __s9local1.cartsPaid : 1;
          __s9local4.addItem(__s9local5);
        }
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastlePaymentRewardSpecialOfferFinishDialog.CastlePaymentRewardSpecialOfferFinishDialog, new __dep_export_CastleShoppingCartPrimeDayFinishDialogProperties.CastleShoppingCartPrimeDayFinishDialogProperties(__s9local4, __s9local1), true, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_HIGH);
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return true;
  };
  return SPRCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.SPRCommand = __s0local0;
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePaymentRewardSpecialOfferFinishDialog = require("gge-module:export_CastlePaymentRewardSpecialOfferFinishDialog");
var __dep_export_CastleShoppingCartPrimeDayFinishDialogProperties = require("gge-module:export_CastleShoppingCartPrimeDayFinishDialogProperties");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IExecCommand");
