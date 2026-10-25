import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class GTRCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_GET_ALLIANCE_TOPIC_REPLIES;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleModel.castleForumData.parseGTR(parsedResponse);
        break;
      case ERROR.TOPIC_NOT_FOUND:
        this.showErrorDialog(statusCode, responseFields);
        CastleModel.castleForumData.onDetailTopicWasNotFound();
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
