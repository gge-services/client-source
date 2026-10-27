import { CastleAllianceForumEvent } from "./CastleAllianceForumEvent";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class AATCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ALLIANCE_ANSWER_TOPIC;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        CastleModel.castleForumData.dispatchEvent(new CastleAllianceForumEvent(CastleAllianceForumEvent.ON_POST_CREATION_ACCEPTED));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
}
classImplementsInterfaces(AATCommand, "IExecCommand");
