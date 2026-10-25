import { CastleBasicController } from "./CastleBasicController";
import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { LeaderBoardEvent } from "./LeaderBoardEvent";
export class SLSECommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SEARCH_LEADERBOARD_SCORE_EVENT;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleBasicController.getInstance().dispatchEvent(new LeaderBoardEvent(LeaderBoardEvent.LEADERBOARD_SEARCH_DATA, parsedResponse));
        return true;
      default:
        this.showErrorDialog(statusCode, responseFields);
        CastleBasicController.getInstance().dispatchEvent(new LeaderBoardEvent(LeaderBoardEvent.LEADERBOARD_DATA_ERROR, statusCode));
    }
    return false;
  }
}
