import { AttackDialog } from "./AttackDialog";
import { C2SFindNextMapObjectVO } from "./C2SFindNextMapObjectVO";
import { C2SQuestStarterClickVO } from "./C2SQuestStarterClickVO";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleLayoutManagerEvent } from "./CastleLayoutManagerEvent";
import { CastleModel } from "./CastleModel";
import { CastlePostAttackDialog } from "./CastlePostAttackDialog";
import { CastleSelectUserName } from "./CastleSelectUserName";
import { CastleServerMessageArrivedEvent } from "./CastleServerMessageArrivedEvent";
import { CastleStartAttackDialog } from "./CastleStartAttackDialog";
import { CastleTutorialArrowController } from "./CastleTutorialArrowController";
import { CastleTutorialClickBlocker } from "./CastleTutorialClickBlocker";
import { CastleTutorialDialogFilter } from "./CastleTutorialDialogFilter";
import { CastleTutorialSpotlight } from "./CastleTutorialSpotlight";
import { CastleUserDataEvent } from "./CastleUserDataEvent";
import { CastleWorldmapScreenEvent } from "./CastleWorldmapScreenEvent";
import { ClientConstCharacter } from "./ClientConstCharacter";
import { debug } from "../../../ggs.dll/reconstructed/exports/debug";
import { error } from "../../../ggs.dll/reconstructed/exports/error__case_ca00fc";
import { Iso } from "./Iso";
import { IsoEvent } from "./IsoEvent";
import { TutorialBasicActionCommand } from "./TutorialBasicActionCommand";
import { WorldClassic } from "../../../ggs.dll/reconstructed/exports/WorldClassic";
import { WorldConst } from "../../../ggs.dll/reconstructed/exports/WorldConst";
import { WorldmapPanelButton } from "./WorldmapPanelButton";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
const __s0local0 = createjs.Point;
export class TutorialAttackRobberBaronCommand extends TutorialBasicActionCommand {
  constructor() {
    const __initial0 = [];
    CONSTRUCTOR_HACK;
    super();
    this._sideQuests = __initial0;
  }
  internalExecute() {
    this.filter.allowNoDialogs();
    if (this._tutorialStepVO.attributes.hasOwnProperty(TutorialAttackRobberBaronCommand.SIDE_QUESTIDS)) {
      this._sideQuests = this._tutorialStepVO.attributes.get(TutorialAttackRobberBaronCommand.SIDE_QUESTIDS).split(",");
    }
    this.layoutManager.dispatchEvent(new CastleLayoutManagerEvent(CastleLayoutManagerEvent.LOCK_CAMERA, [false]));
    this.goToWorldMap();
  }
  goToWorldMap() {
    if (this.layoutManager.isOnMap) {
      this.arrivedAtWorldmap();
    } else {
      if (!this.layoutManager.isInState(CastleLayoutManager.STATE_ISO)) {
        this.layoutManager.state = CastleLayoutManager.STATE_ISO;
      }
      Iso.controller.viewUpdater.switchBuildModeInOwnCastle(false);
      var __s8local0 = this.getActionPanelButtonDisp(WorldmapPanelButton);
      this.arrows.replace(__s8local0, true, false, 1, TutorialBasicActionCommand.TUT_ARROW_ACTION_PANEL_OFFSET);
      this.replaceActionPanelButtonInBlocker(WorldmapPanelButton);
      this.spotlight.replace(__s8local0);
      this.tutorialController.registerComplexListener(this.controller, CastleWorldmapScreenEvent.WORLDMAP_LOADED, this.bindFunction(this.arrivedAtWorldmap));
    }
  }
  arrivedAtWorldmap(argument0 = null) {
    this.trackStep("s_080_070_worldmap_opened");
    this.tutorialController.removeComplexListener(this.controller, CastleWorldmapScreenEvent.WORLDMAP_LOADED, this.bindFunction(this.arrivedAtWorldmap));
    this.findValidRobberBaron();
  }
  onPlayernameSelected(argument0 = null) {
    this.tutorialController.removeComplexListener(this.controller, CastleUserDataEvent.CHANGE_USER_NAME, this.bindFunction(this.onPlayernameSelected));
    if (this._sideQuests != null) {
      for (var __s15local0 = 0, __s15local1 = this._sideQuests; __s15local0 < __s15local1.length; __s15local0++) {
        var __s15local2 = __s15local1[__s15local0];
        if (__s15local2 !== undefined) {
          CastleModel.smartfoxClient.sendCommandVO(new C2SQuestStarterClickVO(__s15local2));
        }
      }
    }
    this.highlightDungeon();
  }
  findValidRobberBaron() {
    this.tutorialController.registerComplexListener(this.controller, CastleServerMessageArrivedEvent.FNM_ARRIVED, this.bindFunction(this.waitUntilFoundValidRobberBaronMapObject));
    CastleModel.smartfoxClient.sendCommandVO(new C2SFindNextMapObjectVO(WorldConst.AREA_TYPE_DUNGEON, WorldClassic.KINGDOM_ID, 1, 1));
  }
  waitUntilFoundValidRobberBaronMapObject(argument0) {
    this.tutorialController.removeComplexListener(this.controller, CastleServerMessageArrivedEvent.FNM_ARRIVED, this.bindFunction(this.waitUntilFoundValidRobberBaronMapObject));
    this.showRobberBaron(new __s0local0(argument0.params[0], argument0.params[1]));
  }
  showRobberBaron(argument0) {
    if (this.layoutManager.worldmapScreen.renderer) {
      this.layoutManager.dispatchEvent(new CastleLayoutManagerEvent(CastleLayoutManagerEvent.LOCK_CAMERA, [true]));
      this.layoutManager.worldmapScreen.camera.centerArea(argument0);
      this._dungeonVE = CastleModel.worldmapData.getAreaVEByXY(argument0, true);
      if (CastleModel.userData.isPlayerNameTemporary) {
        CastleTutorialDialogFilter.instance.add(CastleSelectUserName);
        this.tutorialController.waitForDialogShow(CastleSelectUserName, this.bindFunction(this.onShowSelectUsername));
        CastleDialogHandler.getInstance().registerDefaultDialogs(CastleSelectUserName);
      } else {
        this.highlightDungeon();
      }
    } else {
      debug("[AttackRobberBaron] No worldmapScreen renderer!");
      this.tutorialController.registerComplexListener(this.controller, CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.recheckRobberBaron));
    }
  }
  onShowSelectUsername() {
    CastleTutorialArrowController.instance.clear();
    CastleTutorialClickBlocker.instance.clear();
    CastleTutorialSpotlight.instance.clear();
    this.tutorialController.registerComplexListener(this.controller, CastleUserDataEvent.CHANGE_USER_NAME, this.bindFunction(this.onPlayernameSelected));
  }
  highlightDungeon(argument0 = null) {
    this.tutorialController.removeComplexListener(this.controller, IsoEvent.HIDE_PANEL_INFO, this.bindFunction(this.highlightDungeon));
    if (!this._dungeonVE) {
      error("No dungeon found! Releasing blockers!");
      error(new Error().stack);
      this.clearBlockers();
      return;
    }
    if (!this.layoutManager.isDialogVisibleByName(CastleStartAttackDialog)) {
      debug("[AttackRobberBaron] Dungeon found!");
      if (!argument0) {
        this.layoutManager.worldmapScreen.renderer.camera.centerArea(this._dungeonVE.dungeonMapObjectVO.absAreaPos);
      }
      this.arrows.replace(this._dungeonVE.disp, true, true, 1, TutorialBasicActionCommand.TUT_ARROW_DUNGEON_OFFSET);
      this.blocker.replace(this._dungeonVE.disp);
      this.spotlight.replace(this._dungeonVE.disp, TutorialBasicActionCommand.TUT_ARROW_DUNGEON_OFFSET);
      if (this.layoutManager && this.layoutManager.tutorialPanel) {
        this.layoutManager.tutorialPanel.showWithText("tut_dungeon_onWorldMap_copy_duplicate", ClientConstCharacter.CHAR_ID_GENERAL);
        this.tutorialController.registerComplexListener(this.controller, CastleLayoutManagerEvent.RING_MENU_SHOWN, this.bindFunction(this.onRingMenu));
        this.tutorialController.registerComplexListener(this.controller, CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.updateSpotlight));
      } else {
        this.clearBlockers();
      }
    }
  }
  updateSpotlight(argument0 = null) {
    if (this._dungeonVE && this._dungeonVE.disp) {
      this.spotlight.replace(this._dungeonVE.disp, TutorialBasicActionCommand.TUT_ARROW_DUNGEON_OFFSET);
    }
  }
  recheckRobberBaron(argument0) {
    this.tutorialController.removeComplexListener(this.controller, CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.recheckRobberBaron));
    this.findValidRobberBaron();
  }
  onRingMenu(argument0) {
    if (argument0 && argument0.params && argument0.params.length == 2 && argument0.params[1] == this._dungeonVE) {
      this.trackStep("s_080_080_enemy_selected");
      this.tutorialController.removeComplexListener(this.controller, IsoEvent.HIDE_PANEL_INFO, this.bindFunction(this.highlightDungeon));
      this.tutorialController.removeComplexListener(this.controller, CastleLayoutManagerEvent.RING_MENU_SHOWN, this.bindFunction(this.onRingMenu));
      this.tutorialController.removeComplexListener(this.controller, CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.updateSpotlight));
      var __s45local0 = argument0.params[0].disp.btn_attack;
      this.arrows.replace(__s45local0);
      this.blocker.replace(__s45local0);
      this.spotlight.replace(__s45local0);
      this.layoutManager.tutorialPanel.showWithText("tut_dungeon_onWorldMap_copy2_duplicate", ClientConstCharacter.CHAR_ID_GENERAL);
      this.filter.replace(CastleStartAttackDialog);
      this.tutorialController.waitForExternalDialogShow(CastleStartAttackDialog, this.bindFunction(this.confirmAttack));
    }
  }
  confirmAttack() {
    this.tutorialController.removeComplexListener(this.controller, IsoEvent.HIDE_PANEL_INFO, this.bindFunction(this.highlightDungeon));
    this.trackStep("s_080_090_attack_selected");
    var __s48local0 = this.layoutManager.getDialog(CastleStartAttackDialog).dialogDisp.btn_yes;
    this.arrows.replace(__s48local0);
    this.blocker.replace(__s48local0);
    this.spotlight.replace(__s48local0);
    this.filter.add(AttackDialog);
    this.tutorialController.waitForExternalDialogShow(AttackDialog, this.bindFunction(this.fillAttack));
  }
  fillAttack() {
    this.trackStep("s_080_100_pre_attack_confirmed");
    var __s50local0 = this.layoutManager.getDialog(AttackDialog).dialogDisp.mc_autofill_filter.mc_open.mc_autoFillAndPreset.btn_fill_waves;
    this.tutorialController.onClick(__s50local0, this.bindFunction(this.onAutoFill));
    this.arrows.replace(__s50local0);
    this.blocker.replace(__s50local0);
    this.spotlight.replace(__s50local0);
    this.layoutManager.tutorialPanel.showWithText("tut_autoFillAll_copy", ClientConstCharacter.CHAR_ID_GENERAL);
  }
  onAutoFill() {
    this.trackStep("s_080_110_autofill_selected");
    var __s52local0 = this.layoutManager.getDialog(AttackDialog).attackButton;
    this.arrows.replace(__s52local0);
    this.blocker.replace(__s52local0);
    this.spotlight.replace(__s52local0);
    this.layoutManager.tutorialPanel.showWithText("tut_clickAttack_copy_duplicate", ClientConstCharacter.CHAR_ID_GENERAL);
    this.filter.add(CastlePostAttackDialog);
    this.tutorialController.waitForExternalDialogShow(CastlePostAttackDialog, this.bindFunction(this.onTravelPlanning));
  }
  onTravelPlanning() {
    this.layoutManager.tutorialPanel.hide();
    var __s54local0 = this.layoutManager.getDialog(CastlePostAttackDialog).dialogDisp.btn_ok;
    this.arrows.replace(__s54local0);
    this.blocker.replace(__s54local0);
    this.spotlight.replace(__s54local0);
    this.tutorialController.waitForExternalDialogHide(AttackDialog, this.bindFunction(this.onAttackSelected));
  }
  onAttackSelected() {
    this.trackStep("s_080_120_attack_selected");
    this.finishStep();
  }
  static SIDE_QUESTIDS = "sideQuestIDs";
}
classImplementsInterfaces(TutorialAttackRobberBaronCommand, "ISimpleCommand");
