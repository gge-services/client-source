import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleIngameHelpDialog } from "./CastleIngameHelpDialog";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class OpenIngameHelpDialogCommand extends SimpleCommand {
  execute(argument0 = null) {
    if (!CastleLayoutManager.getInstance().tutorialPanel.isVisible()) {
      CastleDialogHandler.getInstance().registerDefaultDialogs(CastleIngameHelpDialog);
    }
  }
}
classImplementsInterfaces(OpenIngameHelpDialogCommand, "ISimpleCommand");
