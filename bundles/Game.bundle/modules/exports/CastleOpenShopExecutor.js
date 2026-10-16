Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_c549e43d1112dfff = require("gge-module:exact_c549e43d1112dfff");
var __dep_export_ClientBetaHelper = require("gge-module:export_ClientBetaHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardYesNoDialogProperties = require("gge-module:export_CastleStandardYesNoDialogProperties");
var __dep_export_DarkOkDialog = require("gge-module:export_DarkOkDialog");
var __dep_export_CastleShoppingCartPrimeDayConfirmDialog = require("gge-module:export_CastleShoppingCartPrimeDayConfirmDialog");
var __dep_export_CastleShoppingCartPrimeDayDialog = require("gge-module:export_CastleShoppingCartPrimeDayDialog");
var __dep_export_C2SVisitedShopVO = require("gge-module:export_C2SVisitedShopVO");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
var __s0local0 = __dep_exact_c549e43d1112dfff.getLogger("CastleOpenShopExecutor");
var __s0local1 = function () {
  function CastleOpenShopExecutor() {}
  CastleOpenShopExecutor.open = function (__s5param0, __s5param1, __s5param2) {
    var __s5local0 = this;
    if (__s5param0 === undefined) {
      __s5param0 = CastleOpenShopExecutor.SOURCE_UNKNOWN;
    }
    if (__s5param1 === undefined) {
      __s5param1 = __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_UNKNOWN;
    }
    if (__s5param2 === undefined) {
      __s5param2 = CastleOpenShopExecutor.SHOP_TAB_DEFAULT;
    }
    if ((!__dep_exact_81dacdf05bd32292.instanceOfClass(__dep_exact_9e901e8e2483a22f.EnvironmentProvider.instance.globals, "CastleEnvironmentGlobals") || !__dep_exact_9e901e8e2483a22f.EnvironmentProvider.instance.globals.isClosedBeta) && !__dep_export_ClientBetaHelper.ClientBetaHelper.isOnOpenBeta) {
      if (__dep_export_CastleModel.CastleModel.deleteAccountData.isAccountDeletionStarted) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_DarkOkDialog.DarkOkDialog, new __dep_export_CastleStandardYesNoDialogProperties.CastleStandardYesNoDialogProperties("attention", __dep_exact_92d05af59ee2ff30.Localize.text("dialog_options_deleteAccount_shopAccessDenied", [__dep_export_CastleModel.CastleModel.deleteAccountData.getDateForDelete()])));
      } else if (__dep_export_CastleModel.CastleModel.userData.disableRubyShop) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_DarkOkDialog.DarkOkDialog, new __dep_export_CastleStandardYesNoDialogProperties.CastleStandardYesNoDialogProperties("generic_alert_information", "alert_C2PurchaseNotEnabled"));
      } else {
        var __s5local1 = false;
        if (__dep_exact_9e901e8e2483a22f.GoodgamePartners.isSpilNetwork(__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.networkId)) {
          if (__dep_exact_9e901e8e2483a22f.BasicModel.sessionData.loggedIn) {
            __s5local1 = true;
          }
        } else if (__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.loginIsKeyBased) {
          __s5local1 = true;
        } else if (__dep_exact_9e901e8e2483a22f.BasicModel.sessionData.loggedIn) {
          __s5local1 = true;
        }
        if (__s5local1) {
          var __s5local2 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_SHOPPING_CART_PRIMEDAY);
          if (__s5local2) {
            if (!(__s5local2.shoppingCartOptionIds.length >= 9) && __dep_export_CastleModel.CastleModel.localData.readShoppingCartWarning()) {
              __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleShoppingCartPrimeDayConfirmDialog.CastleShoppingCartPrimeDayConfirmDialog, new __dep_export_CastleStandardYesNoDialogProperties.CastleStandardYesNoDialogProperties("", "", function () {
                __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleShoppingCartPrimeDayDialog.CastleShoppingCartPrimeDayDialog);
              }, function () {
                __s5local0.openShop(__s5param0);
              }, null, "", "", [__s5local2.endTimestamp]));
              return;
            }
          }
          this.openShop(__s5param0);
        }
      }
    }
  };
  CastleOpenShopExecutor.openShop = function (__s25param0) {
    var __s25local0 = {
      page: "hardCurrency",
      sourceId: __s25param0
    };
    __s25local0 = __dep_export_CastleModel.CastleModel.userData.splitRunData.handleHCShopABTestPayload(__s25local0);
    __s0local0.info("CXFSourceTracking", __s25local0);
    __dep_exact_81dacdf05bd32292.ExternalInterface.call("UIButtonClicked", ["btn_webshop", __s25local0]);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SVisitedShopVO.C2SVisitedShopVO());
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.GTM_CALL_GGS_TRACK_EVENT, "shop_visit");
  };
  CastleOpenShopExecutor.SOURCE_UNKNOWN = 0;
  CastleOpenShopExecutor.SOURCE_USER_STATE_PANEL = 1;
  CastleOpenShopExecutor.SOURCE_NO_MONEY_C2 = 2;
  CastleOpenShopExecutor.SOURCE_FIGHTSCREEN = 3;
  CastleOpenShopExecutor.SOURCE_SPECIAL_OFFER = 4;
  CastleOpenShopExecutor.SOURCE_SPECIAL_OFFER_BETTER = 5;
  CastleOpenShopExecutor.SOURCE_PREMIUM_MARKET_PLACE = 6;
  CastleOpenShopExecutor.SOURCE_DYNAMIC_PAYMENT_REWARD = 7;
  CastleOpenShopExecutor.SOURCE_PAYMENT_REWARD = 8;
  CastleOpenShopExecutor.SOURCE_PRIVATE_OFFER_DECORATION = 9;
  CastleOpenShopExecutor.SOURCE_PRIVATE_PRIME_TIME_OFFER = 10;
  CastleOpenShopExecutor.SOURCE_ALLIANCE_PAYMENT_BONUS = 11;
  CastleOpenShopExecutor.SOURCE_PRIVATE_OFFER_COINMINE = 12;
  CastleOpenShopExecutor.SOURCE_PAYMENT_REWARD_LOTTERY = 13;
  CastleOpenShopExecutor.SOURCE_PRIME_ALLIANCE_BONUS = 14;
  CastleOpenShopExecutor.SOURCE_PREMIUM_PAYMENT = 15;
  CastleOpenShopExecutor.SOURCE_PAYMENT_REWARD_SPECIAL_OFFER = 16;
  CastleOpenShopExecutor.SOURCE_NETWORK_PANEL = 17;
  CastleOpenShopExecutor.SOURCE_PRIME_TIME_WORLDCUP = 18;
  CastleOpenShopExecutor.SOURCE_QUEST_BUY_RUBIES = 19;
  CastleOpenShopExecutor.SOURCE_TIMELESS_SPECIAL_OFFER = 20;
  CastleOpenShopExecutor.SOURCE_PAYMENT_REWARD_CURRENCY_SPECIAL_OFFER = 21;
  CastleOpenShopExecutor.SOURCE_PRIVATE_PRIME_DAY_OFFER = 22;
  CastleOpenShopExecutor.SOURCE_QUEST_VISIT_SHOP = 23;
  CastleOpenShopExecutor.SOURCE_RELIC_UPGRADE = 24;
  CastleOpenShopExecutor.SOURCE_GENERAL_HUB = 25;
  CastleOpenShopExecutor.SHOP_TAB_DEFAULT = 0;
  CastleOpenShopExecutor.SHOP_TAB_RUBIES = 1;
  CastleOpenShopExecutor.SHOP_TAB_PACKS = 2;
  CastleOpenShopExecutor.SHOP_TAB_ONE_TIME_SPECIAL_OFFER = 3;
  return CastleOpenShopExecutor;
}();
exports.CastleOpenShopExecutor = __s0local1;
