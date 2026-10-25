import { CastleBasicController } from "./CastleBasicController";
import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { LeaderBoardEvent } from "./LeaderBoardEvent";
export class LLSWCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_LIST_LEADERBOARD_SCORE_WINDOW;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        CastleBasicController.getInstance().dispatchEvent(new LeaderBoardEvent(LeaderBoardEvent.LEADERBOARD_SCORE_DATA, parsedResponse));
        return true;
      default:
        this.showErrorDialog(statusCode, responseFields);
        CastleBasicController.getInstance().dispatchEvent(new LeaderBoardEvent(LeaderBoardEvent.LEADERBOARD_DATA_ERROR, statusCode));
    }
    return false;
  }
}
