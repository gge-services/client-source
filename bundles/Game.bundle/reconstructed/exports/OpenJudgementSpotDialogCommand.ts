import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleJudgementChooseOptionDialog } from "./CastleJudgementChooseOptionDialog";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
export class OpenJudgementSpotDialogCommand extends SimpleCommand {
  execute(__s5param0 = null) {
    CastleDialogHandler.getInstance().registerDefaultDialogs(CastleJudgementChooseOptionDialog);
  }
}
