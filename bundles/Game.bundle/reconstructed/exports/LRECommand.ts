import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { CastleCommand } from "./CastleCommand";
import { CastleFacebookModule } from "./CastleFacebookModule";
import { CastleModel } from "./CastleModel";
import { CastleRegisterErrorEvent } from "./CastleRegisterErrorEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ClientFunnelGameStates } from "../../../ggs.dll/reconstructed/exports/ClientFunnelGameStates";
import { ClientFunnelTrackingController } from "../../../ggs.dll/reconstructed/exports/ClientFunnelTrackingController";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { ExternalInterfaceController } from "../../../ggs.dll/reconstructed/exports/ExternalInterfaceController";
import { GamesightEventConstants } from "./GamesightEventConstants";
import { GameSightPayloadVO } from "./GameSightPayloadVO";
import { GGSCountryController } from "../../../ggs.dll/reconstructed/exports/GGSCountryController";
import { IdentityManagementConstants } from "../../../ggs.dll/reconstructed/exports/IdentityManagementConstants";
import { IngameClientCommands } from "./IngameClientCommands";
import { JavascriptCallOnRegisterCompleteFactory } from "../../../ggs.dll/reconstructed/exports/JavascriptCallOnRegisterCompleteFactory";
export class LRECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_REGISTER;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    var __s9local0;
    switch (__s9param0) {
      case ERROR.ALL_OK:
        __s9local0 = JSON.parse(__s9param1[1]);
        CastleModel.userData.playerID = __s9local0 && __s9local0.PID ? __s9local0.PID : CastleModel.userData.playerID;
        CastleModel.localData.saveCountryData(GGSCountryController.instance.currentCountry.ggsCountryCode);
        ClientFunnelTrackingController.getInstance().trackState(ClientFunnelGameStates.REGISTERED);
        CommandController.instance.executeCommand(BasicController.GTM_CALL_GGS_TRACK_EVENT, "clientregistration");
        CommandController.instance.executeCommand(BasicController.GAMESIGHT_CALL_GGS_TRACK_EVENT, new GameSightPayloadVO(GamesightEventConstants.PLAYER_REGISTRATION));
        ExternalInterfaceController.instance.executeJavaScriptFunction(new JavascriptCallOnRegisterCompleteFactory());
        if (CastleFacebookModule.userID) {
          CommandController.instance.executeCommand(IngameClientCommands.UPDATE_DATA_FOR_FACEBOOK_LOGIN_REGISTRATION);
        } else if (CastleModel.userData.persistentLogin) {
          CastleModel.localData.saveFacebookID("");
          CastleModel.localData.saveUsername(CastleModel.userData.userName);
        }
        CastleModel.userData.sendInviterCodeToServer();
        BasicModel.sessionData.loggedIn = true;
        return true;
      case ERROR.EMAIL_ALREADY_IN_USE:
        this.controller.dispatchEvent(new CastleRegisterErrorEvent(CastleRegisterErrorEvent.REGISTER_ERROR, CastleRegisterErrorEvent.EMAIL_ALREADY_IN_USE));
        break;
      case ERROR.INVALID_EMAIL:
        this.controller.dispatchEvent(new CastleRegisterErrorEvent(CastleRegisterErrorEvent.REGISTER_ERROR, CastleRegisterErrorEvent.INVALID_EMAIL));
        break;
      case ERROR.INVALID_PASSWORD:
        this.controller.dispatchEvent(new CastleRegisterErrorEvent(CastleRegisterErrorEvent.REGISTER_ERROR, CastleRegisterErrorEvent.INVALID_PASSWORD));
        break;
      case ERROR.INVALID_NAME:
        if (__s9param1[1] !== undefined) {
          __s9local0 = JSON.parse(__s9param1[1]);
          this.controller.dispatchEvent(new CastleRegisterErrorEvent(CastleRegisterErrorEvent.REGISTER_ERROR, CastleRegisterErrorEvent.INVALID_NAME, __s9local0));
        }
        break;
      case ERROR.NAME_ALREADY_IN_USE:
        if (__s9param1[1] !== undefined) {
          __s9local0 = JSON.parse(__s9param1[1]);
          this.controller.dispatchEvent(new CastleRegisterErrorEvent(CastleRegisterErrorEvent.REGISTER_ERROR, CastleRegisterErrorEvent.NAME_ALREADY_IN_USE, __s9local0));
        }
        break;
      case ERROR.WRONG_INPUT_SCREEN:
        this.controller.dispatchEvent(new CastleRegisterErrorEvent(CastleRegisterErrorEvent.REGISTER_ERROR, CastleRegisterErrorEvent.INVALID_LOGIN_FIELD));
        break;
      case ERROR.WRONG_MODE:
        break;
      case ERROR.NAME_HAS_ONLY_NUMBERS:
        if (__s9param1[1] !== undefined) {
          __s9local0 = JSON.parse(__s9param1[1]);
          this.controller.dispatchEvent(new CastleRegisterErrorEvent(CastleRegisterErrorEvent.REGISTER_ERROR, CastleRegisterErrorEvent.NAME_HAS_ONLY_NUMBERS, __s9local0));
        }
        break;
      case ERROR.USAGE_OF_BADWORDS:
        if (__s9param1[1] !== undefined) {
          __s9local0 = JSON.parse(__s9param1[1]);
          this.controller.dispatchEvent(new CastleRegisterErrorEvent(CastleRegisterErrorEvent.REGISTER_ERROR, CastleRegisterErrorEvent.USAGE_OF_BADWORDS, __s9local0));
        }
        break;
      case IdentityManagementConstants.ERROR_SERVER_AGE_CHECK_FAILED:
        CommandController.instance.executeCommand(BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, IdentityManagementConstants.ERROR_CLIENT_REGISTER_AGE_CHECK_FAILED);
        break;
      case IdentityManagementConstants.ERROR_SERVER_MISSING_KOREA_USER_DATA:
        CommandController.instance.executeCommand(BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, IdentityManagementConstants.ERROR_SERVER_MISSING_KOREA_USER_DATA);
        break;
      case IdentityManagementConstants.ERROR_SERVER_KOREA_ID_ALREADY_REGISTERED:
        CommandController.instance.executeCommand(BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, IdentityManagementConstants.ERROR_SERVER_KOREA_ID_ALREADY_REGISTERED);
        break;
      case IdentityManagementConstants.ERROR_SERVER_NO_KOREA_USER_DATA_AVAILABLE:
        __s9local0 = JSON.parse(__s9param1[1]);
        CastleModel.userData.playerID = __s9local0 && __s9local0.PID ? __s9local0.PID : CastleModel.userData.playerID;
        if (BasicModel.identityManagement) {
          BasicModel.identityManagement.authenticateViaJS();
        } else {
          CommandController.instance.executeCommand(BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, IdentityManagementConstants.ERROR_CLIENT_REGISTER_MISSING_KOREA_ID_CHECK);
        }
        break;
      case IdentityManagementConstants.ERROR_SERVER_AGE_CHECK_FAILED_GAME_NOT_ALLOWED_FOR_AGE:
        CommandController.instance.executeCommand(BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, IdentityManagementConstants.ERROR_CLIENT_REGISTER_NOT_ALLOWED_FOR_AGE);
        break;
      case ERROR.UNEXPECTED_FACEBOOK_ERROR:
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
