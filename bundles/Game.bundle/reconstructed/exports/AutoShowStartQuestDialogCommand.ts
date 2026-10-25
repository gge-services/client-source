import { BasicDialogHandler } from "../../../ggs.dll/reconstructed/exports/BasicDialogHandler";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleStartQuestDialog } from "./CastleStartQuestDialog";
import { CastleStartQuestDialogProperties } from "./CastleStartQuestDialogProperties";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
export class AutoShowStartQuestDialogCommand extends SimpleCommand {
  execute(__s5param0 = null) {
    var __s5local0 = __s5param0;
    if (!CastleDialogHandler.getInstance().isDialogRegistered(CastleStartQuestDialog) && !__s5local0.registered) {
      CastleDialogHandler.getInstance().registerDefaultDialogs(CastleStartQuestDialog, new CastleStartQuestDialogProperties(__s5local0), false, BasicDialogHandler.PRIORITY_LOW);
    }
    __s5local0.registered = true;
  }
}
