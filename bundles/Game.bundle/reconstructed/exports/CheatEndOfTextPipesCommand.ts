import { ABotCommand } from "./ABotCommand";
import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { ClientCheatsHelper } from "./ClientCheatsHelper";
import { DarkOkDialog } from "./DarkOkDialog";
export class CheatEndOfTextPipesCommand extends ABotCommand {
  execute(argument0 = null) {
    var __s5local0 = prompt("'on' or 'off' ", "on");
    if (__s5local0 == "on") {
      ClientCheatsHelper.performCommand("pipesOn");
      CastleDialogHandler.getInstance().registerDefaultDialogs(DarkOkDialog, new BasicStandardOkDialogProperties("pipes at end of texts", "ON"));
    }
    if (__s5local0 == "off") {
      ClientCheatsHelper.performCommand("pipesOff");
      CastleDialogHandler.getInstance().registerDefaultDialogs(DarkOkDialog, new BasicStandardOkDialogProperties("pipes at end of texts", "OFF"));
    }
  }
}
