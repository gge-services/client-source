import { CastleBasicController } from "./CastleBasicController";
import { CastleQuestConditionEvent } from "./CastleQuestConditionEvent";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
export class SwitchSeasonMapCenterAndHighlightDungeonsCommand extends SimpleCommand {
  execute(__s5param0 = null) {
    if (__s5param0) {
      CastleBasicController.getInstance().dispatchEvent(new CastleQuestConditionEvent(CastleQuestConditionEvent.HIGHLIGHT_ON_MAP, __s5param0));
    }
  }
}
