import { CastleBasicController } from "./CastleBasicController";
import { CastleQuestConditionEvent } from "./CastleQuestConditionEvent";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class SwitchSeasonMapCenterAndHighlightDungeonsCommand extends SimpleCommand {
  execute(argument0 = null) {
    if (argument0) {
      CastleBasicController.getInstance().dispatchEvent(new CastleQuestConditionEvent(CastleQuestConditionEvent.HIGHLIGHT_ON_MAP, argument0));
    }
  }
}
classImplementsInterfaces(SwitchSeasonMapCenterAndHighlightDungeonsCommand, "ISimpleCommand");
