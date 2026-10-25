import { ABotCommand } from "./ABotCommand";
import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleDataHolder } from "./CastleDataHolder";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { ClientCheatsHelper } from "./ClientCheatsHelper";
import { DarkOkDialog } from "./DarkOkDialog";
export class CheatToggleShowEffectTypeIDCommand extends ABotCommand {
  execute(__s5param0 = null) {
    ClientCheatsHelper.performCommand("toggleShowEffectTypeIDs");
    if (CastleDataHolder.instance.showEffectTypeIDs) {
      CastleDialogHandler.getInstance().registerDefaultDialogs(DarkOkDialog, new BasicStandardOkDialogProperties("ShowEffectTypeIDs", "ON"));
    }
    if (!CastleDataHolder.instance.showEffectTypeIDs) {
      CastleDialogHandler.getInstance().registerDefaultDialogs(DarkOkDialog, new BasicStandardOkDialogProperties("ShowEffectTypeIDs", "OFF"));
    }
  }
}
