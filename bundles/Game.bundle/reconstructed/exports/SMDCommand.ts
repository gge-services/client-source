import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SMDCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_MUTE_DIALOGS;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        this.layoutManager.muteDialogs = parsedResponse.ST;
    }
    return false;
  }
}
classImplementsInterfaces(SMDCommand, "IExecCommand");
