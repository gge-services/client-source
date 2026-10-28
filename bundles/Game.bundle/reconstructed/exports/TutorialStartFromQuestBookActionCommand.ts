import { CastleQuestDialog } from "./CastleQuestDialog";
import { CastleQuestStartPanel } from "./CastleQuestStartPanel";
import { CastleTutorialEvent } from "./CastleTutorialEvent";
import { CastleTutorialPanel } from "./CastleTutorialPanel";
import { MobileHelper } from "../../../ggs.dll/reconstructed/exports/MobileHelper";
import { TutorialBasicActionCommand } from "./TutorialBasicActionCommand";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
const __s0local0 = createjs.Point;
export class TutorialStartFromQuestBookActionCommand extends TutorialBasicActionCommand {
  constructor() {
    const __initial0 = 0;
    CONSTRUCTOR_HACK;
    super();
    this._questGiverID = __initial0;
  }
  internalExecute() {
    this.filter.replace(CastleQuestDialog);
    if (this.layoutManager.tutorialPanel) {
      this.layoutManager.tutorialPanel.showWithText("tut_clickOnQuests_copy", this._questGiverID, MobileHelper.isScreenTooSmall() && MobileHelper.isLandscape() ? CastleTutorialPanel.POS_BOTTOM_RIGHT : CastleTutorialPanel.POS_TOP_RIGHT);
    }
    this.showArrowOnQuestBookButton();
    this.tutorialController.waitForExternalDialogShow(CastleQuestDialog, this.bindFunction(this.showQuestArrowInQuestBook));
  }
  showArrowOnQuestBookButton() {
    var __s8local0 = this.layoutManager.getPanel(CastleQuestStartPanel);
    this.arrows.replace(__s8local0.disp.btn_questBook);
    this.blocker.replace(__s8local0.disp.btn_questBook);
  }
  showQuestArrowInQuestBook() {
    this.trackStep(this.getQuestBookOpenedTrackingID());
    this.layoutManager.tutorialPanel.showWithText("tut_selectQuest_copy", this._questGiverID, MobileHelper.isScreenTooSmall() && MobileHelper.isLandscape() ? CastleTutorialPanel.POS_BOTTOM_RIGHT : CastleTutorialPanel.POS_TOP_RIGHT);
    var __s10local0 = this.layoutManager.getDialog(CastleQuestDialog);
    this.arrows.replace(__s10local0.tutorialRecommendedQuest.disp.headerMC, false, true, 1, new __s0local0(0, 35));
    this.blocker.replace(__s10local0.tutorialRecommendedQuest.disp.headerMC);
    this.tutorialController.registerComplexListener(this.controller, CastleTutorialEvent.QUEST_INFO_SHOWN, this.bindFunction(this.onShowQuestInfo));
  }
  onShowQuestInfo(argument0) {
    this.tutorialController.removeComplexListener(this.controller, CastleTutorialEvent.QUEST_INFO_SHOWN, this.bindFunction(this.onShowQuestInfo));
    this.trackStep(this.getQuestInfoOpenedTrackingID());
    this.layoutManager.tutorialPanel.hide();
    this.handleUntilPlayerClickedOnShowMe();
  }
  handleUntilPlayerClickedOnShowMe() {
    var __s14local0 = this.getDialogDisp(CastleQuestDialog);
    this.arrows.replace(__s14local0.mc_questInfo.condition0.btn_showMe, true, true, 1, new __s0local0(15, -8));
    this.blocker.replace(__s14local0.mc_questInfo.condition0.btn_showMe);
  }
  getQuestInfoOpenedTrackingID() {
    return "please override the getQuestInfoOpenedTrackingID method";
  }
  getQuestBookOpenedTrackingID() {
    return "please override the getQuestBookOpenedTrackingID method";
  }
}
classImplementsInterfaces(TutorialStartFromQuestBookActionCommand, "ISimpleCommand");
