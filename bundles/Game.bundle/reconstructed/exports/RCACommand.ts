import { CastleCommand } from "./CastleCommand";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class RCACommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_ROYAL_CAPITAL_ALLIANCE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        JSON.parse(responseFields[1]);
    }
    return false;
  }
}
classImplementsInterfaces(RCACommand, "IExecCommand");
