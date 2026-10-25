import { CastleAttackOrderReceivedDialog } from "./CastleAttackOrderReceivedDialog";
import { CastleBasicController } from "./CastleBasicController";
import { CastleBookmarkPasserProperties } from "./CastleBookmarkPasserProperties";
import { CastleDialogConsts } from "./CastleDialogConsts";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleExternalPreloaderDialog } from "./CastleExternalPreloaderDialog";
import { CastleExternalPreloaderDialogProperties } from "./CastleExternalPreloaderDialogProperties";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleMessageDataEvent } from "./CastleMessageDataEvent";
import { CastleModel } from "./CastleModel";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class OpenAttackOrderCommand extends SimpleCommand {
  execute(__s5param0 = null) {
    CastleDialogHandler.getInstance().registerDialogsWithType(CastleExternalPreloaderDialog, new CastleExternalPreloaderDialogProperties(null), false, CastleDialogConsts.PRIORITY_TOP, 0, CastleDialogConsts.DIALOG_TYPE_PRELOADER);
    CastleBasicController.getInstance().addEventListener(CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onMessageBodyAvailable));
    CastleBasicController.getInstance().addEventListener(CastleMessageDataEvent.MESSAGE_NO_EXIST, this.bindFunction(this.onMessageError));
    CastleModel.messageData.getBodyForTextMessage(__s5param0.mid);
  }
  onMessageError(__s7param0) {
    this.removeEventListeners();
  }
  onMessageBodyAvailable(__s9param0) {
    this.removeEventListeners();
    var __s9local0 = CastleModel.bookmarkData.parseBookmarkObject(__s9param0.params[1]);
    CastleDialogHandler.getInstance().registerDefaultDialogs(CastleAttackOrderReceivedDialog, new CastleBookmarkPasserProperties(__s9local0));
  }
  removeEventListeners() {
    CastleBasicController.getInstance().removeEventListener(CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onMessageBodyAvailable));
    CastleBasicController.getInstance().removeEventListener(CastleMessageDataEvent.MESSAGE_NO_EXIST, this.bindFunction(this.onMessageError));
    CastleLayoutManager.getInstance().hideDialog(CastleExternalPreloaderDialog);
  }
}
classImplementsInterfaces(OpenAttackOrderCommand, "ISimpleCommand");
