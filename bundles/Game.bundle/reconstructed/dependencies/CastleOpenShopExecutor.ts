import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { C2SVisitedShopVO } from "./C2SVisitedShopVO";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleShoppingCartPrimeDayConfirmDialog } from "./CastleShoppingCartPrimeDayConfirmDialog";
import { CastleShoppingCartPrimeDayDialog } from "./CastleShoppingCartPrimeDayDialog";
import { CastleStandardYesNoDialogProperties } from "./CastleStandardYesNoDialogProperties";
import { ClientBetaHelper } from "./ClientBetaHelper";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { CXFSourceTrackingConstants } from "./CXFSourceTrackingConstants";
import { DarkOkDialog } from "./DarkOkDialog";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { EnvironmentProvider } from "../../../ggs.dll/reconstructed/exports/EnvironmentProvider";
import { EventConst } from "../../../ggs.dll/reconstructed/exports/EventConst";
import { ExternalInterface } from "../../../ggs.dll/reconstructed/exports/ExternalInterface";
import { getLogger } from "../../../ggs.dll/reconstructed/exports/getLogger";
import { GoodgamePartners } from "../../../ggs.dll/reconstructed/exports/GoodgamePartners";
import { instanceOfClass } from "../../../ggs.dll/reconstructed/exports/instanceOfClass";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
const __s0local0 = getLogger("CastleOpenShopExecutor");
export class CastleOpenShopExecutor {
  static open(argument0?: any, argument1?: any, argument2?: any) {
    var __s5local0 = this;
    if (argument0 === undefined) {
      argument0 = CastleOpenShopExecutor.SOURCE_UNKNOWN;
    }
    if (argument1 === undefined) {
      argument1 = CXFSourceTrackingConstants.SOURCE_UNKNOWN;
    }
    if (argument2 === undefined) {
      argument2 = CastleOpenShopExecutor.SHOP_TAB_DEFAULT;
    }
    if ((!instanceOfClass(EnvironmentProvider.instance.globals, "CastleEnvironmentGlobals") || !EnvironmentProvider.instance.globals.isClosedBeta) && !ClientBetaHelper.isOnOpenBeta) {
      if (CastleModel.deleteAccountData.isAccountDeletionStarted) {
        CastleDialogHandler.getInstance().registerDefaultDialogs(DarkOkDialog, new CastleStandardYesNoDialogProperties("attention", Localize.text("dialog_options_deleteAccount_shopAccessDenied", [CastleModel.deleteAccountData.getDateForDelete()])));
      } else if (CastleModel.userData.disableRubyShop) {
        CastleDialogHandler.getInstance().registerDefaultDialogs(DarkOkDialog, new CastleStandardYesNoDialogProperties("generic_alert_information", "alert_C2PurchaseNotEnabled"));
      } else {
        var __s5local1 = false;
        if (GoodgamePartners.isSpilNetwork(EnvGlobalsHandler.globals.networkId)) {
          if (BasicModel.sessionData.loggedIn) {
            __s5local1 = true;
          }
        } else if (EnvGlobalsHandler.globals.loginIsKeyBased) {
          __s5local1 = true;
        } else if (BasicModel.sessionData.loggedIn) {
          __s5local1 = true;
        }
        if (__s5local1) {
          var __s5local2 = CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_SHOPPING_CART_PRIMEDAY);
          if (__s5local2) {
            if (!(__s5local2.shoppingCartOptionIds.length >= 9) && CastleModel.localData.readShoppingCartWarning()) {
              CastleDialogHandler.getInstance().registerDefaultDialogs(CastleShoppingCartPrimeDayConfirmDialog, new CastleStandardYesNoDialogProperties("", "", function () {
                CastleDialogHandler.getInstance().registerDefaultDialogs(CastleShoppingCartPrimeDayDialog);
              }, function () {
                __s5local0.openShop(argument0);
              }, null, "", "", [__s5local2.endTimestamp]));
              return;
            }
          }
          this.openShop(argument0);
        }
      }
    }
  }
  static openShop(argument0) {
    var __s25local0 = {
      page: "hardCurrency",
      sourceId: argument0
    };
    __s25local0 = CastleModel.userData.splitRunData.handleHCShopABTestPayload(__s25local0);
    __s0local0.info("CXFSourceTracking", __s25local0);
    ExternalInterface.call("UIButtonClicked", ["btn_webshop", __s25local0]);
    CastleModel.smartfoxClient.sendCommandVO(new C2SVisitedShopVO());
    CommandController.instance.executeCommand(BasicController.GTM_CALL_GGS_TRACK_EVENT, "shop_visit");
  }
  static SOURCE_UNKNOWN = 0;
  static SOURCE_USER_STATE_PANEL = 1;
  static SOURCE_NO_MONEY_C2 = 2;
  static SOURCE_FIGHTSCREEN = 3;
  static SOURCE_SPECIAL_OFFER = 4;
  static SOURCE_SPECIAL_OFFER_BETTER = 5;
  static SOURCE_PREMIUM_MARKET_PLACE = 6;
  static SOURCE_DYNAMIC_PAYMENT_REWARD = 7;
  static SOURCE_PAYMENT_REWARD = 8;
  static SOURCE_PRIVATE_OFFER_DECORATION = 9;
  static SOURCE_PRIVATE_PRIME_TIME_OFFER = 10;
  static SOURCE_ALLIANCE_PAYMENT_BONUS = 11;
  static SOURCE_PRIVATE_OFFER_COINMINE = 12;
  static SOURCE_PAYMENT_REWARD_LOTTERY = 13;
  static SOURCE_PRIME_ALLIANCE_BONUS = 14;
  static SOURCE_PREMIUM_PAYMENT = 15;
  static SOURCE_PAYMENT_REWARD_SPECIAL_OFFER = 16;
  static SOURCE_NETWORK_PANEL = 17;
  static SOURCE_PRIME_TIME_WORLDCUP = 18;
  static SOURCE_QUEST_BUY_RUBIES = 19;
  static SOURCE_TIMELESS_SPECIAL_OFFER = 20;
  static SOURCE_PAYMENT_REWARD_CURRENCY_SPECIAL_OFFER = 21;
  static SOURCE_PRIVATE_PRIME_DAY_OFFER = 22;
  static SOURCE_QUEST_VISIT_SHOP = 23;
  static SOURCE_RELIC_UPGRADE = 24;
  static SOURCE_GENERAL_HUB = 25;
  static SHOP_TAB_DEFAULT = 0;
  static SHOP_TAB_RUBIES = 1;
  static SHOP_TAB_PACKS = 2;
  static SHOP_TAB_ONE_TIME_SPECIAL_OFFER = 3;
}
