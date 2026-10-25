import { AccountBannedDialog } from "./AccountBannedDialog";
import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { BasicLayoutManager } from "../../../ggs.dll/reconstructed/exports/BasicLayoutManager";
import { BasicTimedNoClickProperties } from "./BasicTimedNoClickProperties";
import { CastleBasicController } from "./CastleBasicController";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CastleRegisterErrorEvent } from "./CastleRegisterErrorEvent";
import { CastleTimedNoClickDialog } from "./CastleTimedNoClickDialog";
import { ClientConstTime } from "./ClientConstTime";
import { ClientFunnelGameStates } from "../../../ggs.dll/reconstructed/exports/ClientFunnelGameStates";
import { ClientFunnelTrackingController } from "../../../ggs.dll/reconstructed/exports/ClientFunnelTrackingController";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { ExternalInterfaceController } from "../../../ggs.dll/reconstructed/exports/ExternalInterfaceController";
import { info } from "../../../ggs.dll/reconstructed/exports/info";
import { JavascriptCallOnRegisterCompleteFactory } from "../../../ggs.dll/reconstructed/exports/JavascriptCallOnRegisterCompleteFactory";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { ServerErrorVO } from "../../../ggs.dll/reconstructed/exports/ServerErrorVO";
import { SPLCommand } from "../../../ggs.dll/reconstructed/exports/SPLCommand";
import { TimeStringHelper } from "../../../ggs.dll/reconstructed/exports/TimeStringHelper";
export class CastleSPLCommand extends SPLCommand {
  static FOUR_WEEKS_IN_SECONDS: any;
  constructor() {
    CONSTRUCTOR_HACK;
    super();
  }
  handleGameSpecificErrors(__s5param0, __s5param1) {
    info("error: " + __s5param0 + ", params: " + __s5param1);
    switch (__s5param0) {
      case ERROR.ALL_OK:
        CastleModel.userData.firstLogin = true;
        if (this.layoutManager.currentState == BasicLayoutManager.STATE_STARTSCREEN && (this.env.loginIsKeyBased || this.env.isFacebook)) {
          ClientFunnelTrackingController.getInstance().trackState(ClientFunnelGameStates.REGISTERED);
          ExternalInterfaceController.instance.executeJavaScriptFunction(new JavascriptCallOnRegisterCompleteFactory());
        }
        break;
      case ERROR.INVALID_NAME:
        var __s5local0 = JSON.parse(__s5param1[1]);
        this.controller.dispatchEvent(new CastleRegisterErrorEvent(CastleRegisterErrorEvent.REGISTER_ERROR, CastleRegisterErrorEvent.INVALID_NAME, __s5local0));
        break;
      case ERROR.NAME_ALREADY_IN_USE:
        __s5local0 = JSON.parse(__s5param1[1]);
        this.controller.dispatchEvent(new CastleRegisterErrorEvent(CastleRegisterErrorEvent.REGISTER_ERROR, CastleRegisterErrorEvent.NAME_ALREADY_IN_USE, __s5local0));
        break;
      case ERROR.NAME_HAS_ONLY_NUMBERS:
        __s5local0 = JSON.parse(__s5param1[1]);
        this.controller.dispatchEvent(new CastleRegisterErrorEvent(CastleRegisterErrorEvent.REGISTER_ERROR, CastleRegisterErrorEvent.NAME_HAS_ONLY_NUMBERS, __s5local0));
        break;
      case ERROR.USAGE_OF_BADWORDS:
        __s5local0 = JSON.parse(__s5param1[1]);
        this.controller.dispatchEvent(new CastleRegisterErrorEvent(CastleRegisterErrorEvent.REGISTER_ERROR, CastleRegisterErrorEvent.USAGE_OF_BADWORDS, __s5local0));
        break;
      case ERROR.NO_FREE_RENAME:
        if (CastleModel.userData.userLevel > 1) {
          CommandController.instance.executeCommand(BasicController.COMMAND_HANDLE_SERVER_ERROR, new ServerErrorVO(__s5param0, __s5param1));
        }
        break;
      case ERROR.IS_BANNED:
        if (!this.env.loginIsKeyBased) {
          this.layoutManager.state = BasicLayoutManager.STATE_STARTSCREEN;
        }
        var __s5local1 = JSON.parse(__s5param1[1]);
        this.handleBannedUser(__s5local1.RS);
        break;
      default:
        CommandController.instance.executeCommand(BasicController.COMMAND_HANDLE_SERVER_ERROR, new ServerErrorVO(__s5param0, __s5param1));
    }
  }
  handleBannedUser(__s11param0) {
    if (__s11param0 >= ClientConstTime.SECONDS_PER_FOUR_WEEKS) {
      CastleDialogHandler.getInstance().registerDialogs(CastleTimedNoClickDialog, new BasicTimedNoClickProperties(Localize.text("generic_alert_watchout"), Localize.text("generic_login_banned"), -1));
    } else {
      var __s11local0;
      var __s11local1 = new Date();
      var __s11local2 = new Date();
      __s11local2.setTime(__s11local2.getTime() + __s11param0 * ClientConstTime.SEC_2_MILLISEC);
      __s11local0 = __s11local1.getFullYear() == __s11local2.getFullYear() && __s11local1.getMonth() == __s11local2.getMonth() && __s11local1.day == __s11local2.day ? TimeStringHelper.getDateToString(__s11local2.getTime(), TimeStringHelper.DATE_TIMEOCLOCK_FORMAT_ADVANCED, CastleModel.languageData.getTextById) : TimeStringHelper.getDateStringFromDate(__s11local2, CastleModel.languageData.getTextById) + " " + TimeStringHelper.getDateToString(__s11local2.getTime(), TimeStringHelper.DATE_TIMEOCLOCK_FORMAT_ADVANCED, CastleModel.languageData.getTextById);
      CastleDialogHandler.getInstance().registerDialogs(AccountBannedDialog, new BasicTimedNoClickProperties(Localize.text("generic_alert_watchout"), Localize.text("generic_login_banned_2", [__s11local0]), __s11param0));
    }
  }
  get controller() {
    return CastleBasicController.getInstance();
  }
  get layoutManager() {
    return CastleLayoutManager.getInstance();
  }
  static __initialize_static_members() {
    CastleSPLCommand.FOUR_WEEKS_IN_SECONDS = 2419200;
  }
}
CastleSPLCommand.__initialize_static_members();
