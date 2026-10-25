import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleIngameHelpDialog } from "./CastleIngameHelpDialog";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
export class OpenIngameHelpDialogCommand extends SimpleCommand {
  execute(__s5param0 = null) {
    if (!CastleLayoutManager.getInstance().tutorialPanel.isVisible()) {
      CastleDialogHandler.getInstance().registerDefaultDialogs(CastleIngameHelpDialog);
    }
  }
}
