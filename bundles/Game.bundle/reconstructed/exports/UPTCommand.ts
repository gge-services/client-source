import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { EnvGlobalsHandler } from "../../../ggs.dll/reconstructed/exports/EnvGlobalsHandler";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { ExternalInterface } from "../../../ggs.dll/reconstructed/exports/ExternalInterface";
import { GamesightEventConstants } from "./GamesightEventConstants";
import { GameSightPayloadVO } from "./GameSightPayloadVO";
export class UPTCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_UNSENT_PRICE_TRACKING;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        this.trackEvent("purchase", parsedResponse);
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
  trackEvent(__s12param0, __s12param1) {
    var __s12local0 = __s12param1.PD;
    if (__s12local0 && __s12local0 != null) {
      for (var __s12local1 = 0, __s12local2 = __s12local0; __s12local1 < __s12local2.length; __s12local1++) {
        var __s12local3 = __s12local2[__s12local1];
        if (__s12local3 !== undefined) {
          var __s12local4 = __s12local3[0] / 100;
          var __s12local5 = __s12local3[1];
          var __s12local6 = {
            userid: EnvGlobalsHandler.globals.gameId + "-" + EnvGlobalsHandler.globals.networkId + "-" + BasicModel.instanceProxy.selectedInstanceVO.instanceId + "-" + BasicModel.userData.playerID,
            value: __s12local4,
            currency: __s12local5
          };
          if (ExternalInterface.available) {
            ExternalInterface.call("ggsTrackEvent", __s12param0, __s12local6);
            var __s12local7 = new GameSightPayloadVO(GamesightEventConstants.PURCHASE);
            __s12local7.additionalInfo = __s12local6;
            CommandController.instance.executeCommand(BasicController.GAMESIGHT_CALL_GGS_TRACK_EVENT, __s12local7);
          }
        }
      }
    }
  }
}
