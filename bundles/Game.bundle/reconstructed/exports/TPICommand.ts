import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstSF } from "./ClientConstSF";
import { CommKeys } from "../../../ggs.dll/reconstructed/exports/CommKeys";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { WorldmapObjectFactory } from "./WorldmapObjectFactory";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class TPICommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ALLIANCE_TOWER_CASTLES_INFO;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        if (parsedResponse[CommKeys.OWNER_INFO_2]) {
          for (var __s9local1 = 0, __s9local2 = parsedResponse[CommKeys.OWNER_INFO_2]; __s9local1 < __s9local2.length; __s9local1++) {
            var __s9local3 = __s9local2[__s9local1];
            if (__s9local3 !== undefined) {
              CastleModel.otherPlayerData.parseOwnerInfo(__s9local3);
            }
          }
        }
        var __s9local4 = parsedResponse[CommKeys.CASTLES];
        var __s9local5 = [];
        if (__s9local4 != null) {
          for (var __s9local6 = 0, __s9local7 = __s9local4; __s9local6 < __s9local7.length; __s9local6++) {
            var __s9local8 = __s9local7[__s9local6];
            if (__s9local8 !== undefined) {
              __s9local5.push(WorldmapObjectFactory.parseWorldMapArea(__s9local8));
            }
          }
        }
        this.controller.dispatchEvent(new CastleServerMessageArrivedEvent(CastleServerMessageArrivedEvent.ABG_TOWER_CASTLES_INFO, __s9local5));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(TPICommand, "IExecCommand");
