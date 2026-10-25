import { ABotCommand } from "./ABotCommand";
import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleExternalDialog } from "./CastleExternalDialog";
import { ClientCheatsHelper } from "./ClientCheatsHelper";
import { DarkOkDialog } from "./DarkOkDialog";
export class CheatDialogNamesCommand extends ABotCommand {
  execute(__s5param0 = null) {
    ClientCheatsHelper.performCommand("toggleShowDialogName");
    if (CastleExternalDialog.showDialogName) {
      CastleDialogHandler.getInstance().registerDefaultDialogs(DarkOkDialog, new BasicStandardOkDialogProperties("Dialog Names", "Dialog names are shown now above Dialogs"));
    }
    if (!CastleExternalDialog.showDialogName) {
      CastleDialogHandler.getInstance().registerDefaultDialogs(DarkOkDialog, new BasicStandardOkDialogProperties("Dialog Names", "Dialog names are not shown anymore"));
    }
  }
}
