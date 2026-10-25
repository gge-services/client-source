import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleGGSGiftDialog } from "./CastleGGSGiftDialog";
import { CastleModel } from "./CastleModel";
import { CastleMysteryBoxResultDialogProperties } from "./CastleMysteryBoxResultDialogProperties";
import { ClientConstSF } from "./ClientConstSF";
import { CollectableManager } from "./CollectableManager";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { EventConst } from "../../../ggs.dll/reconstructed/exports/EventConst";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
export class RGGCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_RECIEVE_GOODGAMES_GIFT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = CollectableManager.parser.s2cParamList.createList(parsedResponse.R);
        var __s9local2 = CastleModel.specialEventData.getActiveEventByEventId(EventConst.EVENTTYPE_GGS_GIFT);
        var __s9local3 = int(__s9local2 ? __s9local2.skinID : 0);
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleGGSGiftDialog, new CastleMysteryBoxResultDialogProperties(__s9local1, __s9local3));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return true;
  }
}
