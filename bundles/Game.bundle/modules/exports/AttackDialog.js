Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_AdvisorAttackHelper = require("gge-module:export_AdvisorAttackHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceRaidbossEventEventVO = require("gge-module:export_AllianceRaidbossEventEventVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_AttackHelper = require("gge-module:export_AttackHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_StatusIconAttackWarnings = require("gge-module:export_StatusIconAttackWarnings");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_DarkOkDialog = require("gge-module:export_DarkOkDialog");
var __dep_export_GeneralSelectionItem = require("gge-module:export_GeneralSelectionItem");
var __dep_export_AttackDialogAutoFill = require("gge-module:export_AttackDialogAutoFill");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __dep_export_AttackDialogDetailView = require("gge-module:export_AttackDialogDetailView");
var __dep_export_AttackDialogGeneralSelection = require("gge-module:export_AttackDialogGeneralSelection");
var __dep_export_AttackDialogPlayerInfo = require("gge-module:export_AttackDialogPlayerInfo");
var __dep_export_AttackDialogResizer = require("gge-module:export_AttackDialogResizer");
var __dep_export_AttackDialogSpyInfo = require("gge-module:export_AttackDialogSpyInfo");
var __dep_export_AttackDialogStartAttackCheck = require("gge-module:export_AttackDialogStartAttackCheck");
var __dep_export_AttackDialogTrackingHelper = require("gge-module:export_AttackDialogTrackingHelper");
var __dep_export_AttackDialogUnitPicker = require("gge-module:export_AttackDialogUnitPicker");
var __dep_export_AttackDialogWaveHandler = require("gge-module:export_AttackDialogWaveHandler");
var __dep_export_AttackDialogDragTarget = require("gge-module:export_AttackDialogDragTarget");
var __s0local0 = function (__s1param0) {
  function AttackDialog() {
    var __s3local0 = this;
    __s3local0.resizer = new __dep_export_AttackDialogResizer.AttackDialogResizer();
    __s3local0.player_left = new __dep_export_AttackDialogPlayerInfo.AttackDialogPlayerInfo();
    __s3local0.player_right = new __dep_export_AttackDialogPlayerInfo.AttackDialogPlayerInfo();
    __s3local0.spyInfo = new __dep_export_AttackDialogSpyInfo.AttackDialogSpyInfo();
    __s3local0.detailView = new __dep_export_AttackDialogDetailView.AttackDialogDetailView();
    __s3local0.autoFill = new __dep_export_AttackDialogAutoFill.AttackDialogAutoFill();
    __s3local0.waveHandler = new __dep_export_AttackDialogWaveHandler.AttackDialogWaveHandler();
    __s3local0._generalSelection = new __dep_export_AttackDialogGeneralSelection.AttackDialogGeneralSelection();
    __s3local0.generalSelectionVisible = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, AttackDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AttackDialog, __s1param0);
  AttackDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_back, this.dialogDisp.mc_autofill_filter.mc_open.mc_bottom.btn_attack, this.dialogDisp.mc_bottom_800.btn_attack, this.dialogDisp.pickerLists.btn_confirm], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.resizer.initWithDialogDisp(this.dialogDisp);
    this.dialogDisp.btn_help.toolTipText = "help";
    this.dialogDisp.btn_back.toolTipText = "back";
  };
  AttackDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    __dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.getInstance().startAndResetSession();
    __dep_export_AttackDialogController.AttackDialogController.getInstance().initAttackVO(this.dialogProperties.attackInfoVO);
    this.resizer.onShow();
    this._generalSelection.init(this.dialogDisp.mc_general_selection);
    if (this.isAreTargetWithoutBoss) {
      this.hide();
    } else {
      this.player_left.init(this.dialogDisp.mc_playerInfo, __dep_export_AttackDialogPlayerInfo.AttackDialogPlayerInfo.TYPE_SOURCE);
      this.player_right.init(this.dialogDisp.mc_targetInfo, __dep_export_AttackDialogPlayerInfo.AttackDialogPlayerInfo.TYPE_TARGET, this.dialogDisp.mc_generalInfoTooltip_target);
      this.updateGeneralIconLeft();
      this.updateGeneralIconRight();
      this.spyInfo.init(this.dialogDisp.mc_spyInfo);
      this.detailView.init(this.dialogDisp.mc_detailViewBG, this.dialogDisp.mc_detailViewCastle);
      this.autoFill.init(this.dialogDisp.mc_autofill_filter.mc_open, this.dialogDisp.mc_autofill_filter.mc_closed);
      if (!__dep_export_AttackDialogController.AttackDialogController.getInstance().selectedLord) {
        this.hide();
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_DarkOkDialog.DarkOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("attention", "errorCode_404"));
        return;
      }
      this.waveHandler.init(this.dialogDisp.mc_waveList, this.dialogDisp.mc_autofill_filter.mc_open.mc_bottom);
      if (this.unitPicker) {
        this.unitPicker.onParentDialogShow();
      } else {
        this.unitPicker = new __dep_export_AttackDialogUnitPicker.AttackDialogUnitPicker(this.dialogDisp.pickerLists);
      }
      this.dialogDisp.mc_general_selection.visible = false;
      __dep_export_AttackDialogController.AttackDialogController.getInstance().hideDialog.add(this.bindFunction(this.hide));
      __dep_export_AttackDialogController.AttackDialogController.getInstance().openGeneralSelection.add(this.bindFunction(this.openGeneralSelection));
      __dep_export_AttackDialogController.AttackDialogController.getInstance().closeGeneralSelection.add(this.bindFunction(this.closeGeneralSelection));
      __dep_export_AttackDialogController.AttackDialogController.getInstance().onLordChanged.add(this.bindFunction(this.onLordChanged));
      __dep_export_AttackDialogController.AttackDialogController.getInstance().showPlayerInfos.add(this.bindFunction(this.onShowPlayerInfo));
      __dep_export_AttackDialogController.AttackDialogController.getInstance().showTargetInfos.add(this.bindFunction(this.onShowTargetInfo));
      __dep_export_AttackDialogController.AttackDialogController.getInstance().hidePlayerInfos.add(this.bindFunction(this.onHidePlayerInfo));
      __dep_export_AttackDialogController.AttackDialogController.getInstance().hideTargetInfos.add(this.bindFunction(this.onHideTargetInfo));
      __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.GENERAL_ASSIGNED, this.bindFunction(this.onGeneralAssigned));
      __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.mc_autofill_filter.mc_open.mc_bottom.btn_attack.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("attack")));
      this.dialogDisp.mc_bottom_800.btn_attack.toolTipText = "launchAttack";
      __dep_export_AttackDialogController.AttackDialogController.getInstance().onResizeDialog.dispatch(true);
      if (!__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive) {
        __dep_export_AttackDialogController.AttackDialogController.getInstance().onShowAutoFillOptions.dispatch();
      }
      this.updateBackground();
      if (this.dialogDisp.mc_hornHolder) {
        this.attackHorn = new __dep_export_StatusIconAttackWarnings.StatusIconAttackWarnings();
        this.attackHorn.addToContainer(this.dialogDisp.mc_hornHolder);
      }
      __dep_export_AttackDialogController.AttackDialogController.getInstance().applySavedFilterOptions();
      __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.UNIT_UPDATED, this.bindFunction(this.onUnitUpdated));
      if (__dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO.targetArea.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ARE_PORTAL) {
        __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
        __dep_export_CastleModel.CastleModel.raidBossData.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_FULL, this.bindFunction(this.onRaidBossUpdated));
        __dep_export_CastleModel.CastleModel.raidBossData.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_BASE, this.bindFunction(this.onRaidBossUpdated));
      }
    }
  };
  AttackDialog.prototype.onClick = function (__s17param0) {
    __s1param0.prototype.onClick.call(this, __s17param0);
    if (!__s17param0.target.dragSource && !__s17param0.target.dragTarget && !(__s17param0.target.dragTarget instanceof __dep_export_AttackDialogDragTarget.AttackDialogDragTarget)) {
      __dep_export_AttackDialogController.AttackDialogController.getInstance().stopDrag();
    }
    switch (__s17param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_attack"));
        break;
      case this.dialogDisp.mc_autofill_filter.mc_open.mc_bottom.btn_attack:
      case this.dialogDisp.mc_bottom_800.btn_attack:
        __dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO.setAdvisor(__dep_export_AdvisorAttackHelper.AdvisorAttackHelper.getAdvisorTypeByAreaType(__dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO.targetArea.areaType), 0, false);
        __dep_export_AttackDialogStartAttackCheck.AttackDialogStartAttackCheck.onAttack();
        break;
      case this.dialogDisp.btn_back:
        this.hide();
        if (!__dep_exact_81dacdf05bd32292.instanceOfClass(this.dialogProperties.attackInfoVO.targetArea, "TreasureDungeonMapObjectVO")) {
          __dep_export_AttackHelper.AttackHelper.executeAttackCommand(this.dialogProperties.attackInfoVO.targetArea, this.dialogProperties.attackInfoVO.targetArea.attackType, null);
        }
        break;
      case this.dialogDisp.pickerLists.btn_confirm:
        __dep_export_AttackDialogController.AttackDialogController.getInstance().setSelectedWaveInfoSlotMC(null, null, -1);
    }
    if (!__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s17param0.target, this.dialogDisp.pickerLists) && !__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s17param0.target, this.dialogDisp.mc_waveList)) {
      __dep_export_AttackDialogController.AttackDialogController.getInstance().setSelectedWaveInfoSlotMC(null, null, __dep_export_AttackDialogController.AttackDialogController.getInstance().selectedWaveIndex);
    }
    if (!__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s17param0.target, this.dialogDisp.mc_playerInfo.mc_lord)) {
      this.player_left.setLordSelectionVisibility(false);
    }
    if (__s17param0.target != this.dialogDisp.mc_playerInfo.mc_player.btn_details) {
      this.dialogDisp.mc_playerInfo.mc_playerTooltip.visible = false;
    }
    if (__s17param0.target != this.dialogDisp.mc_targetInfo.mc_player.btn_details) {
      this.dialogDisp.mc_targetInfo.mc_playerTooltip.visible = false;
    }
  };
  AttackDialog.prototype.hideLoaded = function (__s26param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s26param0);
    if (this.autoFill.saveToggle) {
      __dep_export_AttackDialogController.AttackDialogController.getInstance().saveAttackFilterOptions(!this.autoFill.saveToggle.value);
    }
    this.resizer.onHide();
    this.player_left.destroy();
    this.player_right.destroy();
    this.spyInfo.destroy();
    this.detailView.destroy();
    this.autoFill.destroy();
    this.waveHandler.destroy();
    if (this.unitPicker) {
      this.unitPicker.destroy();
    }
    this._generalSelection.destroy();
    __dep_export_AttackDialogController.AttackDialogController.getInstance().hideDialog.remove(this.bindFunction(this.hide));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().openGeneralSelection.remove(this.bindFunction(this.openGeneralSelection));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().closeGeneralSelection.remove(this.bindFunction(this.closeGeneralSelection));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().onLordChanged.remove(this.bindFunction(this.onLordChanged));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.GENERAL_ASSIGNED, this.bindFunction(this.onGeneralAssigned));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().showPlayerInfos.remove(this.bindFunction(this.onShowPlayerInfo));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().showTargetInfos.remove(this.bindFunction(this.onShowTargetInfo));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().hidePlayerInfos.remove(this.bindFunction(this.onHidePlayerInfo));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().hideTargetInfos.remove(this.bindFunction(this.onHideTargetInfo));
    if (this._generalIconLeft) {
      this._generalIconLeft.onHide();
    }
    if (this._generalIconRight) {
      this._generalIconRight.onHide();
    }
    if (this.attackHorn) {
      this.attackHorn.dispose();
      this.attackHorn = null;
    }
    __dep_export_AttackDialogTrackingHelper.AttackDialogTrackingHelper.getInstance().endSessionAndTrack(false);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.UNIT_UPDATED, this.bindFunction(this.onUnitUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    __dep_export_CastleModel.CastleModel.raidBossData.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_FULL, this.bindFunction(this.onRaidBossUpdated));
    __dep_export_CastleModel.CastleModel.raidBossData.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_BASE, this.bindFunction(this.onRaidBossUpdated));
  };
  AttackDialog.prototype.openGeneralSelection = function () {
    this.generalSelectionVisible = true;
  };
  AttackDialog.prototype.closeGeneralSelection = function () {
    this.generalSelectionVisible = false;
  };
  AttackDialog.prototype.updateGeneralIconLeft = function () {
    var __s37local0 = true;
    if (this._generalIconLeft) {
      __s37local0 = this._generalIconLeft.isVisible;
    }
    var __s37local1 = __dep_export_AttackDialogController.AttackDialogController.getInstance().selectedLord;
    var __s37local2 = __s37local1 && __s37local1.assignedGeneralVO ? __s37local1.assignedGeneralVO : null;
    if (this._generalIconLeft) {
      this._generalIconLeft.onHide();
    }
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.btn_player_left);
    this._generalIconLeft = new __dep_export_GeneralSelectionItem.GeneralSelectionItem(__s37local2, this.dialogDisp.btn_player_left, false);
    this._generalIconLeft.onShow();
    this._generalIconLeft.onClickSignal.add(this.bindFunction(this.onClickPlayer));
    this._generalIconLeft.disp.toolTipText = __s37local2 ? {
      t: "dialog_attack_rework2022_generals_foldInGeneralsInterface_attacker_assigned_tooltip",
      p: [__s37local2.nameText]
    } : "dialog_attack_rework2022_generals_foldInGeneralsInterface_attacker_unassigned_tooltip";
    this._generalIconLeft.setVisibility(__s37local0);
  };
  AttackDialog.prototype.updateGeneralIconRight = function () {
    var __s41local0 = this.dialogProperties.attackInfoVO.spyInfo.defendingLord;
    var __s41local1 = __s41local0 ? __s41local0.assignedGeneralVO : null;
    __s41local1 = this.dialogProperties.attackInfoVO.spyInfo.remainingSpyInfoTime <= 0 ? undefined : __s41local1 || null;
    if (this._generalIconRight) {
      this._generalIconRight.onHide();
    }
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.dialogDisp.btn_player_right);
    this._generalIconRight = new __dep_export_GeneralSelectionItem.GeneralSelectionItem(__s41local1, this.dialogDisp.btn_player_right, false, true, true, false, null, true, __dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO.targetOwner.playerID == __dep_export_CastleModel.CastleModel.userData.playerID);
    this._generalIconRight.onShow();
    this._generalIconRight.onClickSignal.add(this.bindFunction(this.onClickTarget));
    if (__dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO.targetArea.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ARE_PORTAL) {
      var __s41local2 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_RAID);
      var __s41local3 = __s41local2 ? __s41local2.raidBossServerDataVO.getCurrentXMLBossDataVO() : null;
      if (__s41local3) {
        this._generalIconRight.disp.toolTipText = "are_boss_name_" + __s41local3.name;
      }
    } else {
      this._generalIconRight.disp.toolTipText = __s41local1 ? {
        t: "dialog_attack_rework2022_generals_foldInGeneralsInterface_defender_assigned_tooltip",
        p: [__s41local1.nameText]
      } : __s41local1 === null ? "dialog_attack_rework2022_generals_foldInGeneralsInterface_defender_unassigned_tooltip" : "dialog_attack_rework2022_generals_foldInGeneralsInterface_defender_unknown_tooltip";
    }
  };
  AttackDialog.prototype.onShowPlayerInfo = function () {
    this._generalIconLeft.setVisibility(false);
  };
  AttackDialog.prototype.onShowTargetInfo = function () {
    this._generalIconRight.setVisibility(false);
  };
  AttackDialog.prototype.onHidePlayerInfo = function () {
    this._generalIconLeft.setVisibility(true);
  };
  AttackDialog.prototype.onHideTargetInfo = function () {
    this._generalIconRight.setVisibility(true);
  };
  AttackDialog.prototype.onLordChanged = function () {
    this.updateGeneralIconLeft();
  };
  AttackDialog.prototype.onGeneralAssigned = function (__s57param0) {
    this.updateGeneralIconLeft();
  };
  AttackDialog.prototype.onClickPlayer = function () {
    __dep_export_AttackDialogController.AttackDialogController.getInstance().showPlayerInfos.dispatch();
  };
  AttackDialog.prototype.onClickTarget = function () {
    __dep_export_AttackDialogController.AttackDialogController.getInstance().showTargetInfos.dispatch();
  };
  AttackDialog.prototype.onRemoveSpecialEvent = function (__s63param0) {
    if (!__dep_export_AllianceRaidbossEventEventVO.AllianceRaidbossEventEventVO.getActiveEventVO()) {
      this.hide();
    }
  };
  Object.defineProperty(AttackDialog.prototype, "isAreTargetWithoutBoss", {
    get: function () {
      var __s66local0 = __dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO;
      if (!__s66local0 || !__s66local0.targetArea || __s66local0.targetArea.areaType != __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ARE_PORTAL) {
        return false;
      }
      var __s66local1 = __dep_export_AllianceRaidbossEventEventVO.AllianceRaidbossEventEventVO.getActiveEventVO();
      return !__s66local1 || !__s66local1.raidBossServerDataVO || !__s66local1.raidBossServerDataVO.hasActiveRaid;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialog.prototype.onRaidBossUpdated = function (__s69param0) {
    if (this.isAreTargetWithoutBoss) {
      this.hide();
    }
  };
  AttackDialog.prototype.onUnitUpdated = function (__s72param0) {
    var __s72local0 = __dep_exact_f855840627e6e145.int(__s72param0.params[0].AID);
    var __s72local1 = __dep_exact_f855840627e6e145.int(__s72param0.params[0].SID);
    if (__s72local0 == __dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO.sourceArea.objectId && __s72local1 == __dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO.sourceArea.spaceID) {
      var __s72local2 = __dep_exact_f855840627e6e145.int(__s72param0.params[0].WID);
      var __s72local3 = __dep_exact_f855840627e6e145.int(__s72param0.params[0].NUA);
      __dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO.unitInventory.addUnit(__s72local2, __s72local3);
    }
  };
  Object.defineProperty(AttackDialog.prototype, "generalSelection", {
    get: function () {
      return this._generalSelection;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialog.prototype.updatePosition = function () {
    __dep_export_AttackDialogController.AttackDialogController.getInstance().onResizeDialog.dispatch();
  };
  Object.defineProperty(AttackDialog.prototype, "attackButton", {
    get: function () {
      if (this.dialogDisp.mc_autofill_filter.mc_open.visible) {
        return this.dialogDisp.mc_autofill_filter.mc_open.mc_bottom.btn_attack;
      } else {
        return this.dialogDisp.mc_bottom_800.btn_attack;
      }
    },
    enumerable: true,
    configurable: true
  });
  AttackDialog.__initialize_static_members = function () {};
  AttackDialog.NAME = "AttackScreen_APR2026";
  return AttackDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.AttackDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
