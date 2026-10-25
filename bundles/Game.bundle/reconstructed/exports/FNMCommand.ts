import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleModel } from "./CastleModel";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstSF } from "./ClientConstSF";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { IngameClientCommands } from "./IngameClientCommands";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
export class FNMCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_FIND_NEXT_MAPOBJECT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        if (responseFields == null || responseFields.length == 0) {
          return false;
        }
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.otherPlayerData.parseOwnerInfoArray(parsedResponse.gaa.OI);
        CommandController.instance.executeCommand(IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND);
        CastleModel.worldmapData.parseAreaInfos(parsedResponse.gaa.AI);
        CastleModel.worldmapData.parseSearchInfos(parsedResponse);
        this.controller.dispatchEvent(new CastleServerMessageArrivedEvent(CastleServerMessageArrivedEvent.FNM_ARRIVED, [parsedResponse.X, parsedResponse.Y]));
        break;
      case ERROR.NO_PLAYER_FOUND:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_information"), Localize.text("no_player_found")));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
