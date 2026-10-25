import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleJudgementChooseOptionDialog } from "./CastleJudgementChooseOptionDialog";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class OpenJudgementSpotDialogCommand extends SimpleCommand {
  execute(__s5param0 = null) {
    CastleDialogHandler.getInstance().registerDefaultDialogs(CastleJudgementChooseOptionDialog);
  }
}
classImplementsInterfaces(OpenJudgementSpotDialogCommand, "ISimpleCommand");
