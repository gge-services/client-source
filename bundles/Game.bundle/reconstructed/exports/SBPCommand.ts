import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstSF } from "./ClientConstSF";
import { CostHelper } from "./CostHelper";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { ModernPackageShopResourceTipDialog } from "./ModernPackageShopResourceTipDialog";
import { ModernPackageShopResourceTipDialogProperties } from "./ModernPackageShopResourceTipDialogProperties";
import { PackageConst } from "../../../ggs.dll/reconstructed/exports/PackageConst";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SBPCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_BUY_EVENTPACKAGE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    var __s9local0;
    switch (__s9param0) {
      case ERROR.ALL_OK:
        __s9local0 = JSON.parse(__s9param1[1]);
        CastleModel.currencyData.parseGCU(__s9local0.gcu);
        CastleModel.militaryData.parse_GUI(__s9local0.gui);
        if (CastleModel.areaData.activeArea) {
          CastleModel.areaData.activeArea.updater.parseGRC(__s9local0.grc);
        }
        CastleModel.spyData.parse_CPI(__s9local0.cpi);
        CastleModel.decoStorage.parseSIN(__s9local0.sin);
        CastleModel.vipData.parse_VIP(__s9local0.vip);
        CastleModel.eventPackageData.parseBoughtCount(__s9local0);
        break;
      case ERROR.NOT_ENOUGH_SPECIAL_CURRENCY:
        if (__s9param1.length) {
          __s9local0 = JSON.parse(__s9param1[1]);
          var __s9local1 = CastleModel.eventPackageData.getEventPackageByID(__s9local0.PID);
          var __s9local2 = new ModernPackageShopResourceTipDialogProperties(__s9local1);
          if (__s9local2.isHandledByTipDialog()) {
            CastleDialogHandler.getInstance().registerDefaultDialogs(ModernPackageShopResourceTipDialog, __s9local2);
          } else {
            CostHelper.showNotEnoughSpecialCurrencyDialog(__s9local2.extractCurrencyIds());
          }
          break;
        }
        this.showErrorDialog(__s9param0, __s9param1);
        break;
      case ERROR.STORAGE_CAPACITY_REACHED:
        this.showCustomErrorDialog("dialog_storageFull");
        break;
      case ERROR.PLAYER_GIFT_STORAGE_FULL:
        if (CastleModel.playerGiftData.giftPackagesInInventoryAmount < PackageConst.MAX_PLAYER_GIFT_STORAGE) {
          this.showCustomErrorDialog("giftTrader_inventoryNotEnoughSpace", [PackageConst.MAX_PLAYER_GIFT_STORAGE - CastleModel.playerGiftData.giftPackagesInInventoryAmount]);
        } else {
          this.showCustomErrorDialog("giftTrader_inventoryLimitReached", [PackageConst.MAX_PLAYER_GIFT_STORAGE]);
        }
        break;
      case ERROR.CONSTRUCTION_ITEM_INVENTORY_FULL:
        this.showCustomErrorDialog("alert_ci_inventoryFull_copy");
        break;
      case ERROR.CONSTRUCTION_ITEM_INVENTORY_MAX_AMOUNT_REACHED:
        this.showCustomErrorDialog("alert_ci_itemInventoryFull_copy");
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
  showCustomErrorDialog(__s18param0, __s18param1 = null) {
    CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text(__s18param0, __s18param1)));
  }
}
classImplementsInterfaces(SBPCommand, "IExecCommand");
