import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { NetworkInstance } from "../../../ggs.dll/reconstructed/exports/NetworkInstance";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class GLTCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_TEMPORARY_SERVER_LOGIN_TOKEN;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.userData.specialServerLoginToken = parsedResponse.TLT;
        this.env.specialServer = this.buildInstanceVO(parsedResponse);
        this.controller.dispatchEvent(new CastleServerMessageArrivedEvent(CastleServerMessageArrivedEvent.SPECIAL_SEVER_INFO_ARRIVED));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
  buildInstanceVO(__s12param0) {
    var __s12local0 = new NetworkInstance();
    __s12local0.ip = __s12param0.TSIP;
    __s12local0.port = __s12param0.TSP;
    __s12local0.zone = __s12param0.TSZ;
    __s12local0.zoneId = __s12param0.ZID;
    __s12local0.instanceId = __s12param0.IID;
    if (CastleModel.userData.connectToABGServer) {
      __s12local0.instanceLocaId = "event_title_113";
    }
    if (CastleModel.userData.connectToTempServer) {
      __s12local0.instanceLocaId = "event_title_106";
    }
    return __s12local0;
  }
}
classImplementsInterfaces(GLTCommand, "IExecCommand");
