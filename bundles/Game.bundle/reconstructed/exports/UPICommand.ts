import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { ExternalInterface } from "../../../ggs.dll/reconstructed/exports/ExternalInterface";
import { GamesightEventConstants } from "./GamesightEventConstants";
import { GameSightPayloadVO } from "./GameSightPayloadVO";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class UPICommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_PAYMENT_INFO;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        if (parsedResponse.PU == 0) {
          this.trackEvent("firstingamepurchase", parsedResponse);
        } else {
          this.trackEvent("purchase", parsedResponse);
        }
        CastleModel.userData.parse_UPI(parsedResponse);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
  trackEvent(__s14param0, __s14param1) {
    if (__s14param1.A && __s14param1.CC) {
      var __s14local0 = __s14param1.A / 100;
      var __s14local1 = {
        userid: EnvGlobalsHandler.globals.gameId + "-" + EnvGlobalsHandler.globals.networkId + "-" + BasicModel.instanceProxy.selectedInstanceVO.instanceId + "-" + BasicModel.userData.playerID,
        value: __s14local0,
        currency: __s14param1.CC
      };
      if (ExternalInterface.available) {
        ExternalInterface.call("ggsTrackEvent", __s14param0, __s14local1);
        var __s14local2 = new GameSightPayloadVO(GamesightEventConstants.PURCHASE);
        __s14local2.additionalInfo = __s14local1;
        CommandController.instance.executeCommand(BasicController.GAMESIGHT_CALL_GGS_TRACK_EVENT, __s14local2);
      }
    }
  }
}
classImplementsInterfaces(UPICommand, "IExecCommand");
