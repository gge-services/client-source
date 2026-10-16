Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleWorldmapScreenEvent = require("gge-module:export_CastleWorldmapScreenEvent");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AttackDialog = require("gge-module:export_AttackDialog");
var __dep_export_C2SQuestStarterClickVO = require("gge-module:export_C2SQuestStarterClickVO");
var __dep_export_C2SFindNextMapObjectVO = require("gge-module:export_C2SFindNextMapObjectVO");
var __dep_export_TutorialBasicActionCommand = require("gge-module:export_TutorialBasicActionCommand");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function TutorialAttackRobberBaronCommand() {
    var __s3local0 = this;
    __s3local0._sideQuests = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TutorialAttackRobberBaronCommand, __s1param0);
  TutorialAttackRobberBaronCommand.prototype.internalExecute = function () {
    this.filter.allowNoDialogs();
    if (this._tutorialStepVO.attributes.hasOwnProperty(TutorialAttackRobberBaronCommand.SIDE_QUESTIDS)) {
      this._sideQuests = this._tutorialStepVO.attributes.get(TutorialAttackRobberBaronCommand.SIDE_QUESTIDS).split(",");
    }
    this.layoutManager.dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.LOCK_CAMERA, [false]));
    this.goToWorldMap();
  };
  TutorialAttackRobberBaronCommand.prototype.goToWorldMap = function () {
    if (this.layoutManager.isOnMap) {
      this.arrivedAtWorldmap();
    } else {
      if (!this.layoutManager.isInState(__dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO)) {
        this.layoutManager.state = __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO;
      }
      __dep_export_Iso.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(false);
      var __s8local0 = this.getActionPanelButtonDisp(__dep_export_WorldmapPanelButton.WorldmapPanelButton);
      this.arrows.replace(__s8local0, true, false, 1, __dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.TUT_ARROW_ACTION_PANEL_OFFSET);
      this.replaceActionPanelButtonInBlocker(__dep_export_WorldmapPanelButton.WorldmapPanelButton);
      this.spotlight.replace(__s8local0);
      this.tutorialController.registerComplexListener(this.controller, __dep_export_CastleWorldmapScreenEvent.CastleWorldmapScreenEvent.WORLDMAP_LOADED, this.bindFunction(this.arrivedAtWorldmap));
    }
  };
  TutorialAttackRobberBaronCommand.prototype.arrivedAtWorldmap = function (__s13param0 = null) {
    this.trackStep("s_080_070_worldmap_opened");
    this.tutorialController.removeComplexListener(this.controller, __dep_export_CastleWorldmapScreenEvent.CastleWorldmapScreenEvent.WORLDMAP_LOADED, this.bindFunction(this.arrivedAtWorldmap));
    this.findValidRobberBaron();
  };
  TutorialAttackRobberBaronCommand.prototype.onPlayernameSelected = function (__s15param0 = null) {
    this.tutorialController.removeComplexListener(this.controller, __dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_NAME, this.bindFunction(this.onPlayernameSelected));
    if (this._sideQuests != null) {
      for (var __s15local0 = 0, __s15local1 = this._sideQuests; __s15local0 < __s15local1.length; __s15local0++) {
        var __s15local2 = __s15local1[__s15local0];
        if (__s15local2 !== undefined) {
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SQuestStarterClickVO.C2SQuestStarterClickVO(__s15local2));
        }
      }
    }
    this.highlightDungeon();
  };
  TutorialAttackRobberBaronCommand.prototype.findValidRobberBaron = function () {
    this.tutorialController.registerComplexListener(this.controller, __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.FNM_ARRIVED, this.bindFunction(this.waitUntilFoundValidRobberBaronMapObject));
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFindNextMapObjectVO.C2SFindNextMapObjectVO(__dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_DUNGEON, __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID, 1, 1));
  };
  TutorialAttackRobberBaronCommand.prototype.waitUntilFoundValidRobberBaronMapObject = function (__s23param0) {
    this.tutorialController.removeComplexListener(this.controller, __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.FNM_ARRIVED, this.bindFunction(this.waitUntilFoundValidRobberBaronMapObject));
    this.showRobberBaron(new __s0local0(__s23param0.params[0], __s23param0.params[1]));
  };
  TutorialAttackRobberBaronCommand.prototype.showRobberBaron = function (__s25param0) {
    if (this.layoutManager.worldmapScreen.renderer) {
      this.layoutManager.dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.LOCK_CAMERA, [true]));
      this.layoutManager.worldmapScreen.camera.centerArea(__s25param0);
      this._dungeonVE = __dep_export_CastleModel.CastleModel.worldmapData.getAreaVEByXY(__s25param0, true);
      if (__dep_export_CastleModel.CastleModel.userData.isPlayerNameTemporary) {
        __dep_export_CastleTutorialDialogFilter.CastleTutorialDialogFilter.instance.add(__dep_export_CastleSelectUserName.CastleSelectUserName);
        this.tutorialController.waitForDialogShow(__dep_export_CastleSelectUserName.CastleSelectUserName, this.bindFunction(this.onShowSelectUsername));
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSelectUserName.CastleSelectUserName);
      } else {
        this.highlightDungeon();
      }
    } else {
      __dep_exact_9e901e8e2483a22f.debug("[AttackRobberBaron] No worldmapScreen renderer!");
      this.tutorialController.registerComplexListener(this.controller, __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.recheckRobberBaron));
    }
  };
  TutorialAttackRobberBaronCommand.prototype.onShowSelectUsername = function () {
    __dep_export_CastleTutorialArrowController.CastleTutorialArrowController.instance.clear();
    __dep_export_CastleTutorialClickBlocker.CastleTutorialClickBlocker.instance.clear();
    __dep_export_CastleTutorialSpotlight.CastleTutorialSpotlight.instance.clear();
    this.tutorialController.registerComplexListener(this.controller, __dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_NAME, this.bindFunction(this.onPlayernameSelected));
  };
  TutorialAttackRobberBaronCommand.prototype.highlightDungeon = function (__s33param0 = null) {
    this.tutorialController.removeComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.HIDE_PANEL_INFO, this.bindFunction(this.highlightDungeon));
    if (!this._dungeonVE) {
      __dep_exact_9e901e8e2483a22f_1.error("No dungeon found! Releasing blockers!");
      __dep_exact_9e901e8e2483a22f_1.error(new Error().stack);
      this.clearBlockers();
      return;
    }
    if (!this.layoutManager.isDialogVisibleByName(__dep_export_CastleStartAttackDialog.CastleStartAttackDialog)) {
      __dep_exact_9e901e8e2483a22f.debug("[AttackRobberBaron] Dungeon found!");
      if (!__s33param0) {
        this.layoutManager.worldmapScreen.renderer.camera.centerArea(this._dungeonVE.dungeonMapObjectVO.absAreaPos);
      }
      this.arrows.replace(this._dungeonVE.disp, true, true, 1, __dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.TUT_ARROW_DUNGEON_OFFSET);
      this.blocker.replace(this._dungeonVE.disp);
      this.spotlight.replace(this._dungeonVE.disp, __dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.TUT_ARROW_DUNGEON_OFFSET);
      if (this.layoutManager && this.layoutManager.tutorialPanel) {
        this.layoutManager.tutorialPanel.showWithText("tut_dungeon_onWorldMap_copy_duplicate", __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_GENERAL);
        this.tutorialController.registerComplexListener(this.controller, __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.RING_MENU_SHOWN, this.bindFunction(this.onRingMenu));
        this.tutorialController.registerComplexListener(this.controller, __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.updateSpotlight));
      } else {
        this.clearBlockers();
      }
    }
  };
  TutorialAttackRobberBaronCommand.prototype.updateSpotlight = function (__s40param0 = null) {
    if (this._dungeonVE && this._dungeonVE.disp) {
      this.spotlight.replace(this._dungeonVE.disp, __dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand.TUT_ARROW_DUNGEON_OFFSET);
    }
  };
  TutorialAttackRobberBaronCommand.prototype.recheckRobberBaron = function (__s43param0) {
    this.tutorialController.removeComplexListener(this.controller, __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.recheckRobberBaron));
    this.findValidRobberBaron();
  };
  TutorialAttackRobberBaronCommand.prototype.onRingMenu = function (__s45param0) {
    if (__s45param0 && __s45param0.params && __s45param0.params.length == 2 && __s45param0.params[1] == this._dungeonVE) {
      this.trackStep("s_080_080_enemy_selected");
      this.tutorialController.removeComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.HIDE_PANEL_INFO, this.bindFunction(this.highlightDungeon));
      this.tutorialController.removeComplexListener(this.controller, __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.RING_MENU_SHOWN, this.bindFunction(this.onRingMenu));
      this.tutorialController.removeComplexListener(this.controller, __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.updateSpotlight));
      var __s45local0 = __s45param0.params[0].disp.btn_attack;
      this.arrows.replace(__s45local0);
      this.blocker.replace(__s45local0);
      this.spotlight.replace(__s45local0);
      this.layoutManager.tutorialPanel.showWithText("tut_dungeon_onWorldMap_copy2_duplicate", __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_GENERAL);
      this.filter.replace(__dep_export_CastleStartAttackDialog.CastleStartAttackDialog);
      this.tutorialController.waitForExternalDialogShow(__dep_export_CastleStartAttackDialog.CastleStartAttackDialog, this.bindFunction(this.confirmAttack));
    }
  };
  TutorialAttackRobberBaronCommand.prototype.confirmAttack = function () {
    this.tutorialController.removeComplexListener(this.controller, __dep_export_IsoEvent.IsoEvent.HIDE_PANEL_INFO, this.bindFunction(this.highlightDungeon));
    this.trackStep("s_080_090_attack_selected");
    var __s48local0 = this.layoutManager.getDialog(__dep_export_CastleStartAttackDialog.CastleStartAttackDialog).dialogDisp.btn_yes;
    this.arrows.replace(__s48local0);
    this.blocker.replace(__s48local0);
    this.spotlight.replace(__s48local0);
    this.filter.add(__dep_export_AttackDialog.AttackDialog);
    this.tutorialController.waitForExternalDialogShow(__dep_export_AttackDialog.AttackDialog, this.bindFunction(this.fillAttack));
  };
  TutorialAttackRobberBaronCommand.prototype.fillAttack = function () {
    this.trackStep("s_080_100_pre_attack_confirmed");
    var __s50local0 = this.layoutManager.getDialog(__dep_export_AttackDialog.AttackDialog).dialogDisp.mc_autofill_filter.mc_open.mc_autoFillAndPreset.btn_fill_waves;
    this.tutorialController.onClick(__s50local0, this.bindFunction(this.onAutoFill));
    this.arrows.replace(__s50local0);
    this.blocker.replace(__s50local0);
    this.spotlight.replace(__s50local0);
    this.layoutManager.tutorialPanel.showWithText("tut_autoFillAll_copy", __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_GENERAL);
  };
  TutorialAttackRobberBaronCommand.prototype.onAutoFill = function () {
    this.trackStep("s_080_110_autofill_selected");
    var __s52local0 = this.layoutManager.getDialog(__dep_export_AttackDialog.AttackDialog).attackButton;
    this.arrows.replace(__s52local0);
    this.blocker.replace(__s52local0);
    this.spotlight.replace(__s52local0);
    this.layoutManager.tutorialPanel.showWithText("tut_clickAttack_copy_duplicate", __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_GENERAL);
    this.filter.add(__dep_export_CastlePostAttackDialog.CastlePostAttackDialog);
    this.tutorialController.waitForExternalDialogShow(__dep_export_CastlePostAttackDialog.CastlePostAttackDialog, this.bindFunction(this.onTravelPlanning));
  };
  TutorialAttackRobberBaronCommand.prototype.onTravelPlanning = function () {
    this.layoutManager.tutorialPanel.hide();
    var __s54local0 = this.layoutManager.getDialog(__dep_export_CastlePostAttackDialog.CastlePostAttackDialog).dialogDisp.btn_ok;
    this.arrows.replace(__s54local0);
    this.blocker.replace(__s54local0);
    this.spotlight.replace(__s54local0);
    this.tutorialController.waitForExternalDialogHide(__dep_export_AttackDialog.AttackDialog, this.bindFunction(this.onAttackSelected));
  };
  TutorialAttackRobberBaronCommand.prototype.onAttackSelected = function () {
    this.trackStep("s_080_120_attack_selected");
    this.finishStep();
  };
  TutorialAttackRobberBaronCommand.SIDE_QUESTIDS = "sideQuestIDs";
  return TutorialAttackRobberBaronCommand;
}(__dep_export_TutorialBasicActionCommand.TutorialBasicActionCommand);
exports.TutorialAttackRobberBaronCommand = __s0local1;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleTutorialSpotlight = require("gge-module:export_CastleTutorialSpotlight");
var __dep_export_CastlePostAttackDialog = require("gge-module:export_CastlePostAttackDialog");
var __dep_export_CastleStartAttackDialog = require("gge-module:export_CastleStartAttackDialog");
var __dep_export_CastleSelectUserName = require("gge-module:export_CastleSelectUserName");
var __dep_export_CastleTutorialArrowController = require("gge-module:export_CastleTutorialArrowController");
var __dep_export_CastleTutorialClickBlocker = require("gge-module:export_CastleTutorialClickBlocker");
var __dep_export_CastleTutorialDialogFilter = require("gge-module:export_CastleTutorialDialogFilter");
var __dep_export_WorldmapPanelButton = require("gge-module:export_WorldmapPanelButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ISimpleCommand");
