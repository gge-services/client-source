import { C2SQuestStarterClickVO } from "./C2SQuestStarterClickVO";
import { CastleActionPanel } from "./CastleActionPanel";
import { CastleBasicController } from "./CastleBasicController";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CastleTutorialArrowController } from "./CastleTutorialArrowController";
import { CastleTutorialClickBlocker } from "./CastleTutorialClickBlocker";
import { CastleTutorialController } from "./CastleTutorialController";
import { CastleTutorialDialogFilter } from "./CastleTutorialDialogFilter";
import { CastleTutorialEvent } from "./CastleTutorialEvent";
import { CastleTutorialSpotlight } from "./CastleTutorialSpotlight";
import { ClientFunnelTrackingController } from "../../../ggs.dll/reconstructed/exports/ClientFunnelTrackingController";
import { debug } from "../../../ggs.dll/reconstructed/exports/debug";
import { int } from "../../../ggs.dll/reconstructed/exports/int";
import { SimpleCommand } from "../../../ggs.dll/reconstructed/exports/SimpleCommand";
import { SmartfoxEvent } from "../../../ggs.dll/reconstructed/exports/SmartfoxEvent";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
const __s0local0 = createjs.Point;
export class TutorialBasicActionCommand extends SimpleCommand {
  static TUT_ARROW_DUNGEON_OFFSET: any;
  static TUT_ARROW_ACTION_PANEL_OFFSET: any;
  constructor() {
    const __initial0 = 0;
    CONSTRUCTOR_HACK;
    super();
    this._triggeredByQuestId = __initial0;
  }
  onConnectionLost(argument0) {
    CastleModel.smartfoxClient.removeEventListener(SmartfoxEvent.CONNECTION_LOST, this.bindFunction(this.onConnectionLost), false);
    this.clearBlockers();
  }
  execute(argument0 = null) {
    CastleModel.smartfoxClient.addEventListener(SmartfoxEvent.CONNECTION_LOST, this.bindFunction(this.onConnectionLost), false, -1);
    this._tutorialStepVO = argument0[0];
    this._triggeredByQuestId = int(argument0[1]);
    if (this.actionConditionValid()) {
      this.internalExecute();
    } else {
      this.finishStep();
    }
  }
  internalExecute() {}
  actionConditionValid() {
    return true;
  }
  finishStep() {
    CastleModel.smartfoxClient.removeEventListener(SmartfoxEvent.CONNECTION_LOST, this.bindFunction(this.onConnectionLost), false);
    this.tutorialController.finishStep();
    this.controller.dispatchEvent(new CastleTutorialEvent(CastleTutorialEvent.STEP_FINISHED, [this._tutorialStepVO.id]));
  }
  get controller() {
    return CastleBasicController.getInstance();
  }
  get layoutManager() {
    return CastleLayoutManager.getInstance();
  }
  getPanelDisp(argument0) {
    if (argument0 == CastleActionPanel) {
      return this.layoutManager.getPanel(argument0).actionPanel;
    } else {
      return this.layoutManager.getPanel(argument0).disp;
    }
  }
  getDialogDisp(argument0) {
    return this.layoutManager.getDialog(argument0).disp;
  }
  getActionPanelButton(argument0) {
    return this.layoutManager.getPanel(CastleActionPanel).buttons.getAnyButtonByClass(argument0);
  }
  getActionPanelButtonDisp(argument0) {
    var __s29local0 = this.getActionPanelButton(argument0);
    if (__s29local0) {
      return __s29local0.buttonMc;
    } else {
      return null;
    }
  }
  replaceActionPanelButtonInBlocker(argument0) {
    var __s33local0 = this.getActionPanelButton(argument0);
    this.blocker.replace(__s33local0.disp);
    this.blocker.add(__s33local0.buttonMc);
  }
  get arrows() {
    return CastleTutorialArrowController.instance;
  }
  get blocker() {
    return CastleTutorialClickBlocker.instance;
  }
  get filter() {
    return CastleTutorialDialogFilter.instance;
  }
  get spotlight() {
    return CastleTutorialSpotlight.instance;
  }
  get tutorialController() {
    return CastleTutorialController.getInstance();
  }
  clearBlockers() {
    CastleModel.tutorialData.clearBlockers();
  }
  tutorialData() {
    return CastleModel.tutorialData;
  }
  trackStep(argument0, argument1 = true) {
    if (argument0 != "") {
      debug("[TRACKING] " + argument0);
      ClientFunnelTrackingController.getInstance().trackState(argument0);
      if (argument1) {
        ClientFunnelTrackingController.getInstance().trackState(argument0);
      }
    }
  }
  finishTriggerQuest() {
    if (this._triggeredByQuestId > -1) {
      CastleModel.smartfoxClient.sendCommandVO(new C2SQuestStarterClickVO(this._triggeredByQuestId));
    }
  }
  static __initialize_static_members() {
    TutorialBasicActionCommand.TUT_ARROW_ACTION_PANEL_OFFSET = new __s0local0(15, 5);
    TutorialBasicActionCommand.TUT_ARROW_DUNGEON_OFFSET = new __s0local0(30, 30);
  }
  static WODID = "wodID";
  static AMOUNT = "unitAmount";
}
classImplementsInterfaces(TutorialBasicActionCommand, "ISimpleCommand");
TutorialBasicActionCommand.__initialize_static_members();
