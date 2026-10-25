import { AccountBannedDialog } from "./AccountBannedDialog";
import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { BasicDialogHandler } from "../../../ggs.dll/reconstructed/exports/BasicDialogHandler";
import { BasicLayoutManager } from "../../../ggs.dll/reconstructed/exports/BasicLayoutManager";
import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { BasicTimedNoClickProperties } from "./BasicTimedNoClickProperties";
import { CastleCheatData } from "./CastleCheatData";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleFacebookModule } from "./CastleFacebookModule";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CastleRegisterErrorEvent } from "./CastleRegisterErrorEvent";
import { CastleStartscreenPanel } from "./CastleStartscreenPanel";
import { CastleTimerOkDialog } from "./CastleTimerOkDialog";
import { CastleTimerOKDialogProperties } from "./CastleTimerOKDialogProperties";
import { ClientConstSF } from "./ClientConstSF";
import { ClientConstTime } from "./ClientConstTime";
import { ClientFunnelGameStates } from "../../../ggs.dll/reconstructed/exports/ClientFunnelGameStates";
import { ClientFunnelTrackingController } from "../../../ggs.dll/reconstructed/exports/ClientFunnelTrackingController";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { CommKeys } from "../../../ggs.dll/reconstructed/exports/CommKeys";
import { DarkOkDialog } from "./DarkOkDialog";
import { error } from "../../../ggs.dll/reconstructed/exports/error__case_ca00fc";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { GGSCountryController } from "../../../ggs.dll/reconstructed/exports/GGSCountryController";
import { IdentityManagementConstants } from "../../../ggs.dll/reconstructed/exports/IdentityManagementConstants";
import { IngameClientCommands } from "./IngameClientCommands";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { TimeStringHelper } from "../../../ggs.dll/reconstructed/exports/TimeStringHelper";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class LLICommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_LOGIN;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    var __s9local0;
    CastleCheatData.cheatLoginName = null;
    if (__s9param0 != ERROR.ALL_OK) {
      BasicDialogHandler.getInstance().blockDialogs = false;
      this.controller.dispatchEvent(new CastleRegisterErrorEvent(CastleRegisterErrorEvent.LLI_ERROR, "LLI", __s9param0));
    }
    BasicModel.smartfoxClient.onLoginResponceSuccess();
    switch (__s9param0) {
      case ERROR.PLAYER_NOT_FOUND:
        ClientFunnelTrackingController.getInstance().trackState(ClientFunnelGameStates.ERROR_LOGIN_NAME);
        break;
      case ERROR.INVALID_PASSWORD:
        ClientFunnelTrackingController.getInstance().trackState(ClientFunnelGameStates.ERROR_LOGIN_PASSWORD);
    }
    switch (__s9param0) {
      case ERROR.ALL_OK:
        this.layoutManager.onEndProgressbar();
        LLICommand.authenticateToBugsnag();
        this.env.isFirstVisitOfGGS;
        (() => {
          const sourceObject = this.env;
          const sourceKey = "isFirstVisit";
          const previousValue = sourceObject[sourceKey];
          return previousValue ? sourceObject[sourceKey] = false : previousValue;
        })();
        if (CastleFacebookModule.hasAuthResponse && !CastleFacebookModule.credentialsFromLandingPage) {
          CommandController.instance.executeCommand(IngameClientCommands.UPDATE_DATA_FOR_FACEBOOK_LOGIN_REGISTRATION);
        } else if (CastleModel.userData.persistentLogin) {
          CastleModel.localData.saveFacebookID("");
          CastleModel.localData.saveUsername(CastleModel.userData.userName);
        }
        CastleModel.localData.saveCountryData(GGSCountryController.instance.currentCountry.ggsCountryCode);
        BasicModel.sessionData.loggedIn = true;
        if (this.env.currentCountryLanguageCode == "ko") {
          if (!this.env.isIdentityManagementActive) {
            CommandController.instance.executeCommand(BasicController.COMMAND_IDENTITY_MANAGEMENT, true);
          }
          BasicModel.identityManagement.showStuff = true;
        }
        return true;
      case ERROR.PLAYER_NOT_FOUND:
      case ERROR.INVALID_PASSWORD:
        if (!this.env.loginIsKeyBased) {
          this.layoutManager.state = BasicLayoutManager.STATE_STARTSCREEN;
        }
        this.layoutManager.unLockPanel(CastleStartscreenPanel);
        break;
      case ERROR.NO_AVATAR_CREATED:
        this.layoutManager.state = BasicLayoutManager.STATE_STARTSCREEN;
        break;
      case ERROR.IS_BANNED:
        if (!this.env.loginIsKeyBased) {
          this.layoutManager.state = BasicLayoutManager.STATE_STARTSCREEN;
        }
        if ((__s9local0 = JSON.parse(__s9param1[1])).GDPR) {
          CastleDialogHandler.getInstance().registerDialogs(DarkOkDialog, new BasicStandardOkDialogProperties(Localize.text("attention"), Localize.text("generic_login_deleted")));
        } else {
          this.handleBannedUser(__s9local0.RS);
        }
        break;
      case IdentityManagementConstants.ERROR_SERVER_AGE_CHECK_FAILED:
        CommandController.instance.executeCommand(BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, IdentityManagementConstants.ERROR_CLIENT_LOGIN_AGE_CHECK_FAILED);
        break;
      case IdentityManagementConstants.ERROR_SERVER_MISSING_KOREA_USER_DATA:
        CommandController.instance.executeCommand(BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, IdentityManagementConstants.ERROR_SERVER_MISSING_KOREA_USER_DATA);
        break;
      case IdentityManagementConstants.ERROR_SERVER_NO_KOREA_USER_DATA_AVAILABLE:
        __s9local0 = JSON.parse(__s9param1[1]);
        CastleModel.userData.playerID = __s9local0 && __s9local0.PID ? __s9local0.PID : CastleModel.userData.playerID;
        CommandController.instance.executeCommand(BasicController.COMMAND_IDENTITY_MANAGEMENT, true);
        BasicModel.identityManagement.authenticateViaJS();
        break;
      case IdentityManagementConstants.ERROR_SERVER_AGE_CHECK_FAILED_GAME_NOT_ALLOWED_FOR_AGE:
        CommandController.instance.executeCommand(BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, IdentityManagementConstants.ERROR_CLIENT_LOGIN_AGE_CHECK_FAILED);
        break;
      case ERROR.EXISTING_MAPPING_WRONG_SERVER:
        __s9local0 = JSON.parse(__s9param1[1]);
        var __s9local1 = BasicModel.instanceProxy.getInstanceVOByID(__s9local0[CommKeys.INSTANCE_ID]);
        if (__s9local1) {
          if (CastleFacebookModule.hasAuthResponse) {
            CastleModel.localData.saveUsername("");
            CastleModel.localData.saveFacebookID(CastleFacebookModule.userID);
            CastleModel.localData.saveIsRedirectedWithFacebook(true);
          }
          CommandController.instance.executeCommand(BasicController.COMMAND_CONNECT_TO_INSTANCEVO, __s9local1);
        } else {
          error("facebook account mapped to unknown instance ID or wrong network");
        }
        break;
      case ERROR.INVALID_LOGIN_TOKEN:
        CastleModel.localData.deleteLoginData();
        CastleLayoutManager.getInstance().state = BasicLayoutManager.STATE_STARTSCREEN;
        break;
      case ERROR.UNEXPECTED_FACEBOOK_ERROR:
        break;
      case ERROR.LOGIN_COOLDOWN_ACTIVE:
        this.layoutManager.state = BasicLayoutManager.STATE_STARTSCREEN;
        __s9local0 = JSON.parse(__s9param1[1]);
        CastleDialogHandler.getInstance().registerDialogs(CastleTimerOkDialog, new CastleTimerOKDialogProperties("generic_alert_information", "login_attempt_cooldown", __s9local0[CommKeys.REMAINING_COOLDOWN]));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
  handleBannedUser(__s25param0) {
    var __s25local0;
    var __s25local1 = new Date();
    var __s25local2 = new Date();
    __s25local2.setTime(__s25local2.getTime() + __s25param0 * ClientConstTime.SEC_2_MILLISEC);
    __s25local0 = __s25local1.getFullYear() == __s25local2.getFullYear() && __s25local1.getMonth() == __s25local2.getMonth() && __s25local1.getDate() == __s25local2.getDate() ? TimeStringHelper.getDateToString(__s25local2.getTime(), TimeStringHelper.DATE_TIMEOCLOCK_FORMAT_ADVANCED, Localize.text) : Localize.datetime(__s25local2);
    if (__s25param0 >= ClientConstTime.SECONDS_PER_FOUR_WEEKS) {
      CastleDialogHandler.getInstance().registerDialogs(AccountBannedDialog, new BasicTimedNoClickProperties(Localize.text("generic_alert_watchout"), Localize.text("generic_login_banned", [__s25local0]), __s25param0));
    } else {
      CastleDialogHandler.getInstance().registerDialogs(AccountBannedDialog, new BasicTimedNoClickProperties(Localize.text("generic_alert_watchout"), Localize.text("generic_login_banned_2", [__s25local0]), __s25param0));
    }
  }
  static authenticateToBugsnag() {
    var __s29local0 = window.bugsnagClient;
    if (__s29local0) {
      __s29local0.user = {
        id: CastleModel.userData.playerID != -1 ? CastleModel.userData.playerID : CastleModel.userData.userName,
        name: CastleModel.userData.userName
      };
    }
  }
}
classImplementsInterfaces(LLICommand, "IExecCommand");
