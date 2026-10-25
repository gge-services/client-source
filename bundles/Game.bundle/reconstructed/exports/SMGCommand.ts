import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleServerMessageBigDialog } from "./CastleServerMessageBigDialog";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SMGCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SERVER_MESSAGE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    switch (statusCode) {
      case ERROR.ALL_OK:
        var parsedResponse = JSON.parse(responseFields[1]);
        if (parsedResponse.BIG == 1) {
          CastleDialogHandler.getInstance().registerDialogs(CastleServerMessageBigDialog, new BasicStandardOkDialogProperties("SERVER MESSAGE", parsedResponse.MSG));
        } else {
          CastleDialogHandler.getInstance().registerDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties("SERVER MESSAGE", parsedResponse.MSG));
        }
    }
    return false;
  }
}
classImplementsInterfaces(SMGCommand, "IExecCommand");
