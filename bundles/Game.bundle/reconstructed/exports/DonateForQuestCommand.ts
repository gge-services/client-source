import { BasicController } from "../../../ggs.dll/reconstructed/exports/BasicController";
import { BasicStandardYesNoDialogProperties } from "../../../ggs.dll/reconstructed/exports/BasicStandardYesNoDialogProperties";
import { C2SQuestDonateCurrencyVO } from "./C2SQuestDonateCurrencyVO";
import { C2SQuestDonateRessourcesVO } from "./C2SQuestDonateRessourcesVO";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { ClientConstCurrency } from "./ClientConstCurrency";
import { ClientConstQuestCondition } from "./ClientConstQuestCondition";
import { CollectableEnum } from "./CollectableEnum";
import { CollectableHelper } from "./CollectableHelper";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { ModernYesNoDialog } from "./ModernYesNoDialog";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class DonateForQuestCommand extends SimpleCommand {
  execute(argument0 = null) {
    this.questVO = argument0[0];
    this.conditionVO = argument0[1];
    this.onYesFunc = argument0.length > 1 ? argument0[2] : null;
    this.onNoFunc = argument0.length > 2 ? argument0[3] : null;
    if (this.questVO && this.conditionVO) {
      var __s5local0 = this.conditionVO.conditionMaxCounter;
      var __s5local1 = Localize.text("dialog_questbook_donateCheck_copy", [__s5local0, this.getCollectableVO().getNameTextId()]);
      CastleDialogHandler.getInstance().registerDefaultDialogs(ModernYesNoDialog, new BasicStandardYesNoDialogProperties("dialog_questbook_donateCheck_title", __s5local1, this.bindFunction(this.performAction), this.bindFunction(this.onNoFunc)));
    }
  }
  getCollectableVO() {
    switch (this.conditionVO.conditionType) {
      case ClientConstQuestCondition.QUESTTYPE_DONATE_FOOD:
        return CollectableHelper.createVO(CollectableEnum.FOOD);
      case ClientConstQuestCondition.QUESTTYPE_DONATE_WOOD:
        return CollectableHelper.createVO(CollectableEnum.WOOD);
      case ClientConstQuestCondition.QUESTTYPE_DONATE_STONE:
        return CollectableHelper.createVO(CollectableEnum.STONE);
      case ClientConstQuestCondition.QUESTTYPE_DONATE_C1:
        return CollectableHelper.createVO(CollectableEnum.C1);
      case ClientConstQuestCondition.QUESTTYPE_DONATE_COAL:
        return CollectableHelper.createVO(CollectableEnum.COAL);
      case ClientConstQuestCondition.QUESTTYPE_DONATE_OIL:
        return CollectableHelper.createVO(CollectableEnum.OIL);
      case ClientConstQuestCondition.QUESTTYPE_DONATE_GLASS:
        return CollectableHelper.createVO(CollectableEnum.GLASS);
      case ClientConstQuestCondition.QUESTTYPE_DONATE_IRON:
        return CollectableHelper.createVO(CollectableEnum.IRON);
      case ClientConstQuestCondition.QUESTTYPE_DONATE_KHAN_MEDALS:
        return CollectableHelper.createVO(CollectableEnum.GENERIC_CURRENCY, 0, ClientConstCurrency.ID_KHAN_MEDAL);
      case ClientConstQuestCondition.QUESTTYPE_DONATE_SAMURAI_TOKENS:
        return CollectableHelper.createVO(CollectableEnum.GENERIC_CURRENCY, 0, ClientConstCurrency.ID_SAMURAI_TOKEN);
    }
    return null;
  }
  performAction(argument0 = null) {
    var __s11local0 = this.conditionVO.conditionMaxCounter;
    switch (this.conditionVO.conditionType) {
      case ClientConstQuestCondition.QUESTTYPE_DONATE_FOOD:
        this.controller.sendCommandVOAndWait(new C2SQuestDonateRessourcesVO(this.questVO.questID, __s11local0));
        break;
      case ClientConstQuestCondition.QUESTTYPE_DONATE_WOOD:
        this.controller.sendCommandVOAndWait(new C2SQuestDonateRessourcesVO(this.questVO.questID, 0, __s11local0));
        break;
      case ClientConstQuestCondition.QUESTTYPE_DONATE_STONE:
        this.controller.sendCommandVOAndWait(new C2SQuestDonateRessourcesVO(this.questVO.questID, 0, 0, __s11local0));
        break;
      case ClientConstQuestCondition.QUESTTYPE_DONATE_C1:
        this.controller.sendCommandVOAndWait(new C2SQuestDonateRessourcesVO(this.questVO.questID, 0, 0, 0, __s11local0));
        break;
      case ClientConstQuestCondition.QUESTTYPE_DONATE_COAL:
        this.controller.sendCommandVOAndWait(new C2SQuestDonateRessourcesVO(this.questVO.questID, 0, 0, 0, 0, __s11local0));
        break;
      case ClientConstQuestCondition.QUESTTYPE_DONATE_OIL:
        this.controller.sendCommandVOAndWait(new C2SQuestDonateRessourcesVO(this.questVO.questID, 0, 0, 0, 0, 0, __s11local0));
        break;
      case ClientConstQuestCondition.QUESTTYPE_DONATE_GLASS:
        this.controller.sendCommandVOAndWait(new C2SQuestDonateRessourcesVO(this.questVO.questID, 0, 0, 0, 0, 0, 0, __s11local0));
        break;
      case ClientConstQuestCondition.QUESTTYPE_DONATE_IRON:
        this.controller.sendCommandVOAndWait(new C2SQuestDonateRessourcesVO(this.questVO.questID, 0, 0, 0, 0, 0, 0, 0, __s11local0));
        break;
      case ClientConstQuestCondition.QUESTTYPE_DONATE_KHAN_MEDALS:
        this.controller.sendCommandVOAndWait(new C2SQuestDonateCurrencyVO(this.questVO.questID, ClientConstCurrency.ID_KHAN_MEDAL, __s11local0));
        break;
      case ClientConstQuestCondition.QUESTTYPE_DONATE_SAMURAI_TOKENS:
        this.controller.sendCommandVOAndWait(new C2SQuestDonateCurrencyVO(this.questVO.questID, ClientConstCurrency.ID_SAMURAI_TOKEN, __s11local0));
    }
    if (this.onYesFunc) {
      this.onYesFunc(argument0);
    }
  }
  get controller() {
    return BasicController.getInstance();
  }
}
classImplementsInterfaces(DonateForQuestCommand, "ISimpleCommand");
