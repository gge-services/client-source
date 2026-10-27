import { BasicDialogHandler } from "../../../ggs.dll/reconstructed/exports/BasicDialogHandler";
import { BasicHandleServerErrorCommand } from "../../../ggs.dll/reconstructed/exports/BasicHandleServerErrorCommand";
import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleFactionUnitLimitDialog } from "./CastleFactionUnitLimitDialog";
import { CastleModel } from "./CastleModel";
import { CastleNoMoneyC1Dialog } from "./CastleNoMoneyC1Dialog";
import { CastleNoMoneyC1DialogProperties } from "./CastleNoMoneyC1DialogProperties";
import { CastleNoMoneyC2Dialog } from "./CastleNoMoneyC2Dialog";
import { CastleNoMoneyC2DialogProperties } from "./CastleNoMoneyC2DialogProperties";
import { CastleResourceWaitDialog } from "./CastleResourceWaitDialog";
import { CastleResourceWaitDialogProperties } from "./CastleResourceWaitDialogProperties";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstSF } from "./ClientConstSF";
import { CommKeys } from "../../../ggs.dll/reconstructed/exports/CommKeys";
import { ConfirmC2Dialog } from "./ConfirmC2Dialog";
import { ConfirmC2DialogProperties } from "./ConfirmC2DialogProperties";
import { CostHelper } from "./CostHelper";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { error } from "../../../ggs.dll/reconstructed/exports/error__case_ca00fc";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { ExternalInterface } from "../../../ggs.dll/reconstructed/exports/ExternalInterface";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { ModernPackageShopResourceTipDialog } from "./ModernPackageShopResourceTipDialog";
import { ModernPackageShopResourceTipDialogProperties } from "./ModernPackageShopResourceTipDialogProperties";
import { ModernPackageShopResourceTipEnum } from "./ModernPackageShopResourceTipEnum";
import { OutpostConst } from "../../../ggs.dll/reconstructed/exports/OutpostConst";
import { SpecialServerHelper } from "./SpecialServerHelper";
import { TimeStringHelper } from "../../../ggs.dll/reconstructed/exports/TimeStringHelper";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleHandleServerErrorCommand extends BasicHandleServerErrorCommand {
  handleGameSpecificServerError(argument0) {
    var __s5local0 = int(argument0.error);
    var __s5local1 = argument0.params;
    var __s5local2 = {} as any;
    switch (__s5local0) {
      case ERROR.NOT_ENOUGH_RESOURCES:
        var __s5local3;
        if (__s5local1.length > 1) {
          __s5local2 = JSON.parse(__s5local1[1]);
          if (int(__s5local2.hasOwnProperty("A") ? __s5local2.A : 0) > 0) {
            ModernPackageShopResourceTipEnum.__initialize_static_members();
            CastleDialogHandler.getInstance().registerDefaultDialogs(ModernPackageShopResourceTipDialog, new ModernPackageShopResourceTipDialogProperties(null, [ModernPackageShopResourceTipEnum.AQUAMARINE.typeVO]));
          } else {
            (__s5local3 = new CastleResourceWaitDialogProperties(argument0.commandId)).parseParams(__s5local2);
            CastleDialogHandler.getInstance().registerDefaultDialogs(CastleResourceWaitDialog, __s5local3);
          }
        } else {
          this.performDefaultError(argument0);
        }
        break;
      case ERROR.NOT_ENOUGH_SPECIAL_CURRENCY:
        if (!__s5local1[1]) {
          return;
        }
        var __s5local4 = (__s5local2 = JSON.parse(__s5local1[1])) ? __s5local2.MCIDS : null;
        if (__s5local4 && __s5local4.length != 0) {
          CostHelper.showNotEnoughSpecialCurrencyDialog(__s5local4);
        } else {
          this.performDefaultError(argument0);
        }
        break;
      case ERROR.USAGE_OF_BADWORDS:
        var __s5local5 = "";
        if ((__s5local2 = __s5local1.length > 1 ? JSON.parse(__s5local1[1]) : new Object()).BW && __s5local2.BW[0]) {
          __s5local5 = __s5local2.BW[0];
        }
        if (__s5local5 && __s5local5 != "" && __s5local5 != " ") {
          CastleDialogHandler.getInstance().registerDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("alert_badword_textReplacement", [__s5local5])));
        } else {
          CastleDialogHandler.getInstance().registerDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("alert_badword")));
        }
        break;
      case ERROR.NOT_ENOUGH_CURRENCY1:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleNoMoneyC1Dialog, new CastleNoMoneyC1DialogProperties());
        break;
      case ERROR.NOT_ENOUGH_CURRENCY2:
        if (argument0.commandId == ClientConstSF.S2C_REVIVE_HOSPITAL_UNITS || argument0.commandId == ClientConstSF.S2C_REVIVE_ALL_HOSPITAL_UNITS) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleNoMoneyC2Dialog, new CastleNoMoneyC2DialogProperties());
        } else {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleNoMoneyC2Dialog, new CastleNoMoneyC2DialogProperties(), true, BasicDialogHandler.PRIORITY_TOP);
        }
        break;
      case ERROR.INVALID_EMAIL:
        CastleDialogHandler.getInstance().registerDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("generic_register_emailwrong_copy")));
        break;
      case ERROR.ALLI_NOT_ENOUGH_C2:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleNoMoneyC2Dialog, new CastleNoMoneyC2DialogProperties(CastleNoMoneyC2DialogProperties.TYPE_ALLIANCE));
        break;
      case ERROR.NOT_OWNED_LONG_ENOUGH:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("errorCode_" + __s5local0, [TimeStringHelper.getTimeToString(OutpostConst.MIN_TIME_BEFORE_ABANDON, TimeStringHelper.ONE_TIME_FORMAT, Localize.text)])));
        break;
      case ERROR.CL_OBJECT_ALREADY_IN_LIST:
        break;
      case ERROR.NO_TARGET:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties("", Localize.text("errorCode_191")));
        break;
      case ERROR.IS_RELOCATING:
        var __s5local6 = Localize.text("errorCode_" + __s5local0, [TimeStringHelper.getShortTimeStringBySeconds(CastleModel.userData.remainingRelocationDuration)]);
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), __s5local6));
        break;
      case ERROR.ALLIANCE_ALREADY_HAS_PEACE_REQUEST:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties("", Localize.text("errorCode_289")));
        break;
      case ERROR.TOO_MUCH_UNITS:
        if (CastleModel.areaData.activeArea.isFactionCamp) {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleFactionUnitLimitDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), null));
        } else {
          this.performDefaultError(argument0);
        }
        break;
      case ERROR.CONSTRUCTION_ITEM_INVENTORY_FULL:
        CastleDialogHandler.getInstance().registerDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("alert_ci_inventoryFull_copy")));
        break;
      case ERROR.WORLD_IS_FULL:
        CastleDialogHandler.getInstance().registerDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("world_is_full"), this.bindFunction(this.reloadPage), "", this.bindFunction(this.reloadPage)));
        break;
      case ERROR.C2_CONFIRMATION_REQUIRED:
        __s5local2 = JSON.parse(__s5local1[1]);
        CastleDialogHandler.getInstance().registerDialogs(ConfirmC2Dialog, new ConfirmC2DialogProperties(__s5local2[CommKeys.CONFIRM_C2_THRESHOLD], argument0));
        break;
      default:
        this.performDefaultError(argument0);
    }
  }
  reloadPage(argument0) {
    if (ExternalInterface.available) {
      try {
        ExternalInterface.call("function refresh(){location.reload();}");
      } catch (__s26local0) {
        error("ExternalInterface call failed.");
      }
    }
  }
  performDefaultError(argument0) {
    var __s28local0 = int(argument0.error);
    if (Localize.text("errorCode_" + __s28local0) != "errorCode_" + __s28local0) {
      CastleDialogHandler.getInstance().registerDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text(SpecialServerHelper.checkTextIDForSkinText("errorCode_" + __s28local0)) + (EnvGlobalsHandler.globals.isTest || EnvGlobalsHandler.globals.isLocal ? " (" + argument0.commandId + ")" : "")));
    } else {
      CastleDialogHandler.getInstance().registerDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_bug"), "errorCode: " + __s28local0 + ": " + ERROR.getErrorText(__s28local0) + (EnvGlobalsHandler.globals.isTest || EnvGlobalsHandler.globals.isLocal ? " (" + argument0.commandId + ")" : "")));
    }
  }
}
classImplementsInterfaces(CastleHandleServerErrorCommand, "ISimpleCommand");
