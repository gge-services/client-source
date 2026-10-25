import { castAs } from "../../../ggs.dll/reconstructed/exports/castAs";
import { CastleBattleLogMessageAdvanced } from "./CastleBattleLogMessageAdvanced";
import { CastleMessageInboxDialog } from "./CastleMessageInboxDialog";
import { CastleMultiInfoPanel } from "./CastleMultiInfoPanel";
import { CastlePanelButton } from "./CastlePanelButton";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { ClientConstCharacter } from "./ClientConstCharacter";
import { instanceOfClass } from "../../../ggs.dll/reconstructed/exports/instanceOfClass";
import { MessagePanelButton } from "./MessagePanelButton";
import { TutorialBasicActionCommand } from "./TutorialBasicActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
const __s0local0 = createjs.Point;
export class TutorialReadBattleLogCommand extends TutorialBasicActionCommand {
  internalExecute() {
    this.filter.replace(CastleMessageInboxDialog);
    var __s5local0 = this.layoutManager.getPanel(CastleMultiInfoPanel).buttons.getAnyButtonByClass(MessagePanelButton);
    var __s5local1 = __s5local0.buttonMc;
    this.arrows.replace(__s5local1, true, false, 1, new __s0local0(17, 2));
    this.blocker.replace(__s5local0.disp);
    this.blocker.add(__s5local0.buttonMc);
    this.spotlight.replace(__s5local1);
    this.layoutManager.tutorialPanel.showWithText("tut_dungeon_winDungeon_copy_duplicate", ClientConstCharacter.CHAR_ID_GENERAL);
    this.tutorialController.waitForExternalDialogShow(CastleMessageInboxDialog, this.bindFunction(this.onInbox));
  }
  onInbox() {
    this.trackStep("s_080_160_messages_menu_opened");
    this.layoutManager.tutorialPanel.hide();
    var __s7local0 = this.layoutManager.getDialog(CastleMessageInboxDialog);
    __s7local0.changeMessageCategory(CastleMessageInboxDialog.MESSAGE_CATEGORY_INBOX);
    var __s7local1 = __s7local0.getCurrentSublayer();
    if (__s7local1 && instanceOfClass(__s7local1, "ACastleBaseInboxMessageList")) {
      var __s7local2 = __s7local1.getLatestBattleLog();
      if (!__s7local2) {
        this.finishStep();
        return;
      }
      var __s7local3 = __s7local2.disp;
      this.arrows.replace(__s7local3);
      this.blocker.replace(__s7local3);
      this.spotlight.clear();
      this.filter.add(CastleBattleLogMessageAdvanced);
      this.tutorialController.waitForExternalDialogShow(CastleBattleLogMessageAdvanced, this.bindFunction(this.onBattleLog));
    }
  }
  onBattleLog() {
    this.trackStep("s_080_170_battlereport_opened");
    var __s11local0 = this.layoutManager.getDialog(CastleBattleLogMessageAdvanced);
    var __s11local1 = castAs(__s11local0, "CastleBattleLogMessageAdvanced");
    if (__s11local1 != null) {
      var __s11local2 = __s11local1.dialogDisp.btn_ok;
      this.arrows.replace(__s11local2);
      this.blocker.replace(__s11local2);
    }
    this.tutorialController.waitForDialogHide(CastleBattleLogMessageAdvanced, this.bindFunction(this.waitForInboxHide));
    this.finishTriggerQuest();
  }
  waitForInboxHide() {
    this.trackStep("s_080_180_battlereport_confirmed");
    var __s14local0 = this.layoutManager.getDialog(CastleMessageInboxDialog).dialogDisp.btn_cancel;
    this.arrows.replace(__s14local0);
    this.blocker.replace(__s14local0);
    if (this.layoutManager.isOnMap) {
      this.tutorialController.waitForDialogHide(CastleMessageInboxDialog, this.bindFunction(this.goToMainCastle));
    } else {
      this.tutorialController.waitForDialogHide(CastleMessageInboxDialog, this.bindFunction(this.finishStep));
    }
  }
  goToMainCastle() {
    this.trackStep("s_080_190_messages_menu_closed");
    this.arrows.replace(this.getActionPanelButtonDisp(CastlePanelButton));
    this.replaceActionPanelButtonInBlocker(CastlePanelButton);
    this.layoutManager.tutorialPanel.showWithText("tut_dungeon_returntocastle_copy_duplicate", ClientConstCharacter.CHAR_ID_GENERAL);
    this.tutorialController.registerComplexListener(this.controller, CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.arrivedAtCastle));
  }
  arrivedAtCastle(__s20param0) {
    this.trackStep("s_080_210_castle_entered");
    this.finishStep();
  }
}
classImplementsInterfaces(TutorialReadBattleLogCommand, "ISimpleCommand");
