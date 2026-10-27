import { BasicClientCommand } from "../../../ggs.dll/reconstructed/exports/BasicClientCommand";
import { C2SMarkMessageReadVO } from "./C2SMarkMessageReadVO";
import { CastleBasicController } from "./CastleBasicController";
import { CastleMessageDataEvent } from "./CastleMessageDataEvent";
import { CastleModel } from "./CastleModel";
import { CommandController } from "../../../ggs.dll/reconstructed/exports/CommandController";
import { IngameClientCommands } from "./IngameClientCommands";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class CastleOpenMessageDialogCommand extends BasicClientCommand {
  execute(argument0 = null) {
    var __s5local0 = argument0;
    CommandController.instance.executeCommand(IngameClientCommands.HANDLE_DIALOG_INFO, __s5local0.dialogInfo);
    if (!__s5local0.read) {
      CastleModel.smartfoxClient.sendCommandVO(new C2SMarkMessageReadVO(__s5local0.messageID));
    }
    __s5local0.read = true;
    CastleBasicController.getInstance().dispatchEvent(new CastleMessageDataEvent(CastleMessageDataEvent.UPDATE_MESSAGELIST));
  }
}
classImplementsInterfaces(CastleOpenMessageDialogCommand, "ISimpleCommand");
