import { CastleAllianceForumEvent } from "./CastleAllianceForumEvent";
import { CastleCommand } from "./CastleCommand";
import { CastleModel } from "./CastleModel";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
export class AATCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ALLIANCE_ANSWER_TOPIC;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(__s9param0, __s9param1) {
    switch (__s9param0) {
      case ERROR.ALL_OK:
        CastleModel.castleForumData.dispatchEvent(new CastleAllianceForumEvent(CastleAllianceForumEvent.ON_POST_CREATION_ACCEPTED));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  }
}
