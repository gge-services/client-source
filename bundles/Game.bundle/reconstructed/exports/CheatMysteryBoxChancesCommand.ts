import { ABotCommand } from "./ABotCommand";
import { BasicStandardOkDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardOkDialogProperties";
import { CastleCheatData } from "./CastleCheatData";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { ClientCheatsHelper } from "./ClientCheatsHelper";
import { DarkOkDialog } from "./DarkOkDialog";
export class CheatMysteryBoxChancesCommand extends ABotCommand {
  execute(__s5param0 = null) {
    ClientCheatsHelper.performCommand("mysteryBoxChance ");
    var __s5local0 = "";
    __s5local0 = CastleCheatData.cheatShowMysteryBoxChances ? "show lootbox chances: on" : "show lootbox chances: off";
    CastleDialogHandler.getInstance().registerDefaultDialogs(DarkOkDialog, new BasicStandardOkDialogProperties("mysteryBoxChance", __s5local0));
  }
}
