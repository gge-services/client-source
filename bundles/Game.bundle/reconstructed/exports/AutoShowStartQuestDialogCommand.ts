import { BasicDialogHandler } from "../../../ggs.dll/reconstructed/exports/BasicDialogHandler";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleStartQuestDialog } from "./CastleStartQuestDialog";
import { CastleStartQuestDialogProperties } from "./CastleStartQuestDialogProperties";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class AutoShowStartQuestDialogCommand extends SimpleCommand {
  execute(argument0 = null) {
    var __s5local0 = argument0;
    if (!CastleDialogHandler.getInstance().isDialogRegistered(CastleStartQuestDialog) && !__s5local0.registered) {
      CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStartQuestDialog, new CastleStartQuestDialogProperties(__s5local0), false, BasicDialogHandler.PRIORITY_LOW);
    }
    __s5local0.registered = true;
  }
}
classImplementsInterfaces(AutoShowStartQuestDialogCommand, "ISimpleCommand");
