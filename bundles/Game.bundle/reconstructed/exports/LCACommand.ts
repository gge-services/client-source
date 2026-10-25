import { BasicLayoutManager } from "../../../ggs.dll/reconstructed/exports/BasicLayoutManager";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { CastleRegisterErrorEvent } from "./CastleRegisterErrorEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ClientFunnelGameStates } from "../../../ggs.dll/reconstructed/exports/ClientFunnelGameStates";
import { ClientFunnelTrackingController } from "../../../ggs.dll/reconstructed/exports/ClientFunnelTrackingController";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { ExternalInterfaceController } from "../../../ggs.dll/reconstructed/exports/ExternalInterfaceController";
import { GGSCountryController } from "../../../ggs.dll/reconstructed/exports/GGSCountryController";
import { JavascriptCallOnRegisterCompleteFactory } from "../../../ggs.dll/reconstructed/exports/JavascriptCallOnRegisterCompleteFactory";
export class LCACommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_CREATE_AVATAR;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        CastleModel.userData.firstLogin = true;
        CastleModel.localData.saveCountryData(GGSCountryController.instance.currentCountry.ggsCountryCode);
        if (this.layoutManager.currentState == BasicLayoutManager.STATE_STARTSCREEN && (this.env.loginIsKeyBased || this.env.isFacebook)) {
          ClientFunnelTrackingController.getInstance().trackState(ClientFunnelGameStates.REGISTERED);
          ExternalInterfaceController.instance.executeJavaScriptFunction(new JavascriptCallOnRegisterCompleteFactory());
          CastleModel.smartfoxClient.sendMessage(ClientConstSF.C2S_GET_BASIC_DATA, []);
        }
        return true;
      case ERROR.INVALID_NAME:
        var parsedResponse = JSON.parse(responseFields[1]);
        this.controller.dispatchEvent(new CastleRegisterErrorEvent(CastleRegisterErrorEvent.REGISTER_ERROR, CastleRegisterErrorEvent.INVALID_NAME, parsedResponse));
        break;
      case ERROR.NAME_ALREADY_IN_USE:
        parsedResponse = JSON.parse(responseFields[1]);
        this.controller.dispatchEvent(new CastleRegisterErrorEvent(CastleRegisterErrorEvent.REGISTER_ERROR, CastleRegisterErrorEvent.NAME_ALREADY_IN_USE, parsedResponse));
        break;
      case ERROR.NAME_HAS_ONLY_NUMBERS:
        parsedResponse = JSON.parse(responseFields[1]);
        this.controller.dispatchEvent(new CastleRegisterErrorEvent(CastleRegisterErrorEvent.REGISTER_ERROR, CastleRegisterErrorEvent.NAME_HAS_ONLY_NUMBERS, parsedResponse));
        break;
      case ERROR.USAGE_OF_BADWORDS:
        parsedResponse = JSON.parse(responseFields[1]);
        this.controller.dispatchEvent(new CastleRegisterErrorEvent(CastleRegisterErrorEvent.REGISTER_ERROR, CastleRegisterErrorEvent.USAGE_OF_BADWORDS, parsedResponse));
        break;
      case ERROR.NO_FREE_RENAME:
        if (CastleModel.userData.userLevel > 1) {
          this.showErrorDialog(statusCode, responseFields);
        }
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
