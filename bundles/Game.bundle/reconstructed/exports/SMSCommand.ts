import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleCommand } from "./CastleCommand";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleMessageDataEvent } from "./CastleMessageDataEvent";
import { CastleStandardOkDialog } from "./CastleStandardOkDialog";
import { ClientConstSF } from "./ClientConstSF";
import { ERROR } from "../../../ggs.dll/reconstructed/exports/ERROR";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SMSCommand extends CastleCommand {
  get cmdId() {
    return ClientConstSF.S2C_SEND_MESSAGE;
  }
  set cmdId(value) {
    super.cmdId = value;
  }
  executeCommand(statusCode, responseFields) {
    if (statusCode != ERROR.ALL_OK) {
      this.controller.dispatchEvent(new CastleMessageDataEvent(CastleMessageDataEvent.SENT_ERROR));
    }
    switch (statusCode) {
      case ERROR.ALL_OK:
        this.controller.dispatchEvent(new CastleMessageDataEvent(CastleMessageDataEvent.SENT_OK));
        this.showMessageSentDialog();
        break;
      case ERROR.PLAYER_IS_IGNORED:
        this.showMessageSentDialog();
        break;
      case ERROR.INVALID_RECEIVER_ID:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("dialog_receiverNotFound")));
        break;
      case ERROR.USAGE_OF_BADWORDS:
        var parsedResponse = JSON.parse(responseFields[1]);
        var __s9local1 = "";
        if (parsedResponse.BW[0]) {
          __s9local1 = parsedResponse.BW[0];
        }
        if (__s9local1 && __s9local1 != "" && __s9local1 != " ") {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("alert_badword_textReplacement", [__s9local1])));
        } else {
          CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("alert_badword")));
        }
        break;
      case ERROR.TEXT_TOO_SHORT:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("alert_textTooShort")));
        break;
      case ERROR.LEVEL_TOO_HIGH_OR_LOW:
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("generic_alert_watchout"), Localize.text("player_not_on_map")));
        break;
      default:
        this.showErrorDialog(statusCode, responseFields);
    }
    return false;
  }
  showMessageSentDialog() {
    CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStandardOkDialog, new BasicStandardOkDialogProperties(Localize.text("dialog_newMessage_message"), Localize.text("dialog_newMessage_messageSent")));
  }
}
classImplementsInterfaces(SMSCommand, "IExecCommand");
