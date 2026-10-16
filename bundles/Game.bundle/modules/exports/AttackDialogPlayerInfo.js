Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstNPCs = require("gge-module:export_ClientConstNPCs");
var __dep_export_CastleDialogEvent = require("gge-module:export_CastleDialogEvent");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_GeneralsEvent = require("gge-module:export_GeneralsEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleLordData = require("gge-module:export_CastleLordData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_LordEffectTooltipTrigger = require("gge-module:export_LordEffectTooltipTrigger");
var __dep_export_AllianceCrestEnum = require("gge-module:export_AllianceCrestEnum");
var __dep_export_AllianceCrestSizeEnum = require("gge-module:export_AllianceCrestSizeEnum");
var __dep_export_CastleAllianceCrestHelper = require("gge-module:export_CastleAllianceCrestHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_CastleEquipmentDialog = require("gge-module:export_CastleEquipmentDialog");
var __dep_export_CastleEquipmentDialogProperties = require("gge-module:export_CastleEquipmentDialogProperties");
var __dep_export_GeneralsAbilityDialog = require("gge-module:export_GeneralsAbilityDialog");
var __dep_export_GeneralsAbilityDialogProperties = require("gge-module:export_GeneralsAbilityDialogProperties");
var __dep_export_GeneralsHelper = require("gge-module:export_GeneralsHelper");
var __dep_export_ClickFeedBackHoverSliderButton = require("gge-module:export_ClickFeedBackHoverSliderButton");
var __dep_export_AttackDialog = require("gge-module:export_AttackDialog");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __dep_export_AttackDialogPlayerInfoRaidBossStats = require("gge-module:export_AttackDialogPlayerInfoRaidBossStats");
var __dep_export_AttackDialogLordSelectionItem = require("gge-module:export_AttackDialogLordSelectionItem");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function AttackDialogPlayerInfo() {
    this._lordSelectionItems = [];
    this._mouseOnFoldOutBtn = false;
    this._generalSelectionOpen = false;
    this._generalNeedsUpdate = true;
  }
  AttackDialogPlayerInfo.prototype.init = function (__s5param0, __s5param1, __s5param2 = null) {
    this._panelDisp = __s5param0;
    this._type = __s5param1;
    this._generalNeedsUpdate = true;
    this._generalToolTipMC = __s5param2;
    this.addEventListeners();
    this.initPlayerInfo();
    this.initCrest();
    this.initGeneral();
    this.initLord();
    this._areBossStats ||= new __dep_export_AttackDialogPlayerInfoRaidBossStats.AttackDialogPlayerInfoRaidBossStats();
    this._areBossStats.init(this._panelDisp.mc_raidBossStats);
  };
  AttackDialogPlayerInfo.prototype.addEventListeners = function () {
    this._panelDisp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this._panelDisp.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._panelDisp.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().showPlayerInfos.add(this.bindFunction(this.show));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().hidePlayerInfos.add(this.bindFunction(this.hide));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().showTargetInfos.add(this.bindFunction(this.showTarget));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().hideTargetInfos.add(this.bindFunction(this.hideTarget));
    if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
      __dep_export_AttackDialogController.AttackDialogController.getInstance().onLordChanged.add(this.bindFunction(this.onLordChange));
      __dep_export_AttackDialogController.AttackDialogController.getInstance().openGeneralSelection.add(this.bindFunction(this.onOpenGeneralSelection));
      __dep_export_AttackDialogController.AttackDialogController.getInstance().closeGeneralSelection.add(this.bindFunction(this.onCloseGeneralSelection));
      __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIP_SUCCESSFUL, this.bindFunction(this.onEquipOrRename));
      __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.GENERAL_ASSIGNED, this.bindFunction(this.onGeneralAssigned));
      __dep_export_CastleModel.CastleModel.generalsData.addEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
      __dep_export_CastleModel.CastleModel.lordData.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.LORDS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
    }
  };
  AttackDialogPlayerInfo.prototype.destroy = function () {
    var __s10local0 = this;
    if (this._panelDisp) {
      this._panelDisp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
      this._panelDisp.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this._panelDisp.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    }
    __dep_export_AttackDialogController.AttackDialogController.getInstance().showPlayerInfos.remove(this.bindFunction(this.show));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().hidePlayerInfos.remove(this.bindFunction(this.hide));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().showTargetInfos.remove(this.bindFunction(this.showTarget));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().hideTargetInfos.remove(this.bindFunction(this.hideTarget));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().onLordChanged.remove(this.bindFunction(this.onLordChange));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().openGeneralSelection.remove(this.bindFunction(this.onOpenGeneralSelection));
    __dep_export_AttackDialogController.AttackDialogController.getInstance().closeGeneralSelection.remove(this.bindFunction(this.onCloseGeneralSelection));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.EQUIP_SUCCESSFUL, this.bindFunction(this.onEquipOrRename));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.GENERAL_ASSIGNED, this.bindFunction(this.onGeneralAssigned));
    __dep_export_CastleModel.CastleModel.generalsData.removeEventListener(__dep_export_GeneralsEvent.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
    __dep_export_CastleModel.CastleModel.lordData.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.LORDS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
    if (this._scrollComponent) {
      this._scrollComponent.items.forEach(function (__s14param0) {
        return __s14param0.onClickSignal.remove(__s10local0.bindFunction(__s10local0.onCLickLord));
      });
      this._scrollComponent.onHide();
    }
    if (this._lordTooltipTrigger) {
      this._lordTooltipTrigger.hide();
    }
    this._lordSelectionItems = [];
  };
  AttackDialogPlayerInfo.prototype.show = function () {
    if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
      this._panelDisp.visible = true;
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleDialogEvent.CastleDialogEvent(__dep_export_CastleDialogEvent.CastleDialogEvent.ATTACK_SCREEN_OPEN_PLAYER_INFO));
    }
  };
  AttackDialogPlayerInfo.prototype.showTarget = function () {
    if (this._type == AttackDialogPlayerInfo.TYPE_TARGET) {
      this._panelDisp.visible = true;
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleDialogEvent.CastleDialogEvent(__dep_export_CastleDialogEvent.CastleDialogEvent.ATTACK_SCREEN_OPEN_PLAYER_INFO));
    }
  };
  AttackDialogPlayerInfo.prototype.hide = function () {
    if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
      this._panelDisp.visible = false;
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleDialogEvent.CastleDialogEvent(__dep_export_CastleDialogEvent.CastleDialogEvent.ATTACK_SCREEN_CLOSE_PLAYER_INFO));
    }
  };
  AttackDialogPlayerInfo.prototype.hideTarget = function () {
    if (this._type == AttackDialogPlayerInfo.TYPE_TARGET) {
      this._panelDisp.visible = false;
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleDialogEvent.CastleDialogEvent(__dep_export_CastleDialogEvent.CastleDialogEvent.ATTACK_SCREEN_CLOSE_PLAYER_INFO));
    }
  };
  AttackDialogPlayerInfo.prototype.initPlayerInfo = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this._panelDisp.mc_player.btn_details, this._panelDisp.btn_mini], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
      __dep_export_ButtonHelper.ButtonHelper.initButtons([this._panelDisp.mc_lord.mc_lordContainer], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    }
    if (this._panelDisp.btn_switch) {
      this._panelDisp.btn_switch.mc_open.visible = false;
    }
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_playerTooltip.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this._type == AttackDialogPlayerInfo.TYPE_SOURCE ? "dialog_attack_rework2022_participantsInfo_playerInfo_header" : "dialog_attack_rework2022_participantsInfo_opponentInfo_header"));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_playerTooltip.txt_labelLevel, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("levelcount"));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_playerTooltip.txt_labelAlliance, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("alliance_colon"));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_playerTooltip.txt_labelCoordinates, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("coordinates_colon"));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_playerTooltip.txt_level, this.getPlayerLevelTextVO());
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_playerTooltip.txt_alliance, new __dep_exact_92d05af59ee2ff30.TextVO(this.ownerInfo.allianceName || "-")).autoFitToBounds = true;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_playerTooltip.txt_coordinates, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_COORDS, [this.ownerArea.absAreaPosX, this.ownerArea.absAreaPosY], true));
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_player.txt_playerName, new __dep_exact_92d05af59ee2ff30.TextVO(this.ownerInfo.playerName)).autoFitToBounds = true;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_player.txt_generalName, new __dep_exact_92d05af59ee2ff30.TextVO(this.ownerArea.areaNameString));
    this._panelDisp.mc_playerTooltip.doCache();
    this._panelDisp.mc_playerTooltip.visible = false;
  };
  AttackDialogPlayerInfo.prototype.initCrest = function () {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.ownerArea, "ABGAllianceTowerMapobjectVO")) {
      this._panelDisp.mc_player.mc_allianceCrest.visible = true;
      this._panelDisp.mc_player.mc_crest.visible = false;
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this._panelDisp.mc_player.mc_allianceCrest);
      __dep_export_CastleAllianceCrestHelper.CastleAllianceCrestHelper.setCrestGraphics(this._panelDisp.mc_player.mc_allianceCrest, this.ownerInfo.allianceCrestVO, __dep_export_AllianceCrestSizeEnum.AllianceCrestSizeEnum.SIZE_FIGHTSCREEN_2, __dep_export_AllianceCrestEnum.AllianceCrestEnum.DEFAULT_CREST);
      this._panelDisp.mc_player.mc_allianceCrest.doCache();
    } else {
      this._panelDisp.mc_player.mc_allianceCrest.visible = false;
      this._panelDisp.mc_player.mc_crest.visible = true;
      __dep_export_CrestHelper.CrestHelper.replaceIntoPlaceHolder(this._panelDisp.mc_player.mc_crest, this.ownerCrest);
      this._panelDisp.mc_player.mc_crest.toolTipText = this.ownerCrest.tooltipText;
      this._panelDisp.mc_player.mc_crest.mouseChildren = false;
      this._panelDisp.mc_player.mc_crest.doCache();
    }
  };
  AttackDialogPlayerInfo.prototype.getPlayerLevelTextVO = function () {
    var __s37local0 = 0;
    var __s37local1 = 0;
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.ownerArea, "ABGAllianceTowerMapobjectVO")) {
      return new __dep_exact_92d05af59ee2ff30.TextVO("-");
    } else {
      __s37local0 = this._type == AttackDialogPlayerInfo.TYPE_SOURCE ? this.ownerInfo.playerLevel : this.attackInfoVO.targetOwnerLevel;
      __s37local1 = this.ownerInfo.playerLegendLevel;
      if (__s37local0 >= __dep_exact_26a421b704832cff.PlayerConst.LEVEL_CAP && __s37local1 > 0) {
        return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [__s37local0, __s37local1]);
      } else {
        return new __dep_exact_92d05af59ee2ff30.NumberVO(__s37local0);
      }
    }
  };
  AttackDialogPlayerInfo.prototype.initLord = function () {
    var __s43local0 = this;
    this._lordTooltipTrigger = new __dep_export_LordEffectTooltipTrigger.LordEffectTooltipTrigger(this._panelDisp.mc_lord.mc_lordContainer);
    this._lordTooltipTrigger.show();
    if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
      __dep_export_ButtonHelper.ButtonHelper.initButtons([this._panelDisp.mc_lord.mc_switchLord.btn_closed, this._panelDisp.mc_lord.mc_switchLord.btn_foldout], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
      __dep_export_ButtonHelper.ButtonHelper.initButtons([this._panelDisp.mc_lord.mc_lordSelection.mc_scroll.btn_slider], __dep_export_ClickFeedBackHoverSliderButton.ClickFeedBackHoverSliderButton, 1);
      this._itxt_lordName = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_lord.mc_switchLord.btn_foldout.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(""));
      this._itxt_lordName.autoFitToBounds = true;
      if (this._scrollComponent) {
        this._scrollComponent.items.forEach(function (__s47param0) {
          return __s47param0.onClickSignal.remove(__s43local0.bindFunction(__s43local0.onCLickLord));
        });
        this._scrollComponent.onHide();
      } else {
        var __s43local1 = new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this._panelDisp.mc_lord.mc_lordSelection).addMaskMc(this._panelDisp.mc_lord.mc_lordSelection.mc_items.mask);
        var __s43local2 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_AttackDialogLordSelectionItem.AttackDialogLordSelectionItem, "AttackDialogLordSelectionItemContainer", __dep_export_AttackDialog.AttackDialog.NAME);
        this._scrollComponent = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(__s43local1, __s43local2);
      }
      this._lordSelectionItems = this.createLordSelectionItems();
      var __s43local3 = 0;
      for (var __s43local4 = 0; __s43local4 < this._lordSelectionItems.length; __s43local4++) {
        if (this._lordSelectionItems[__s43local4].id == (__dep_export_AttackDialogController.AttackDialogController.getInstance().selectedLord ? __dep_export_AttackDialogController.AttackDialogController.getInstance().selectedLord.id : -1)) {
          __s43local3 = __s43local4;
        }
      }
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this._panelDisp.mc_lord.mc_switchLord.btn_foldout, true);
      this._scrollComponent.updateWithNewData(this._lordSelectionItems, true);
      this._scrollComponent.onShow();
      this._scrollComponent.items.forEach(function (__s53param0) {
        return __s53param0.onClickSignal.add(__s43local0.bindFunction(__s43local0.onCLickLord));
      });
      this.onCLickLord(this._lordSelectionItems[__s43local3]);
      var __s43local5 = this._lordSelectionItems.length > 1;
      this._panelDisp.mc_lord.mc_switchLord.btn_foldout.mouseEnabled = __s43local5;
      this._panelDisp.mc_lord.mc_switchLord.btn_foldout.arrow.visible = __s43local5;
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this._panelDisp.mc_lord.mc_switchLord.btn_foldout, __s43local5);
    } else {
      this.onLordChange();
    }
  };
  AttackDialogPlayerInfo.prototype.createLordSelectionItems = function () {
    var __s56local0;
    var __s56local1 = [__dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_VILLAGE, __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ISLE_RESOURCE, __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_KINGS_TOWER, __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_CAMP, __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_MONUMENT, __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_LABORATORY];
    var __s56local2 = this.attackInfoVO.isConquerAttack && __s56local1.indexOf(this.attackInfoVO.targetArea.areaType) < 0;
    var __s56local3 = this.attackInfoVO.targetArea.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_CAPITAL && this.attackInfoVO.isConquerAttack;
    var __s56local4 = this.attackInfoVO.targetArea.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_METROPOL && this.attackInfoVO.isConquerAttack;
    var __s56local5 = this.attackInfoVO.targetArea.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_CAMP && this.attackInfoVO.isConquerAttack;
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.attackInfoVO, "CastleTreasureHuntFightscreenVO")) {
      __s56local0 = __dep_export_CastleModel.CastleModel.lordData.getDefaultLordsByType(__dep_export_CastleLordData.CastleLordData.DEFAULT_LORD_TYPE_TREASUREMAP);
    } else if (__s56local5) {
      __s56local0 = __dep_export_CastleModel.CastleModel.lordData.factionBarons;
    } else if (__s56local4) {
      __s56local0 = __dep_export_CastleModel.CastleModel.lordData.dummyMetropolBarons;
    } else if (__s56local3) {
      __s56local0 = __dep_export_CastleModel.CastleModel.lordData.dummyCapitalBarons(this.attackInfoVO.targetArea.kingdomID);
    } else if (__s56local2) {
      __s56local0 = __dep_export_CastleModel.CastleModel.lordData.barons;
    } else {
      var __s56local6 = __dep_export_CastleModel.CastleModel.lordData.getDefaultLordByID(__dep_exact_26a421b704832cff.TravelConst.COMMANDER_PREMIUM);
      __s56local0 = __dep_export_CastleModel.CastleModel.userData.level >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_SELECT_PREMIUM_COMMANDER ? __dep_export_CastleModel.CastleModel.lordData.commanders.concat([__s56local6]) : __dep_export_CastleModel.CastleModel.lordData.commanders;
    }
    return __s56local0.filter(function (__s64param0) {
      return __s64param0.isAvailableForMovement;
    });
  };
  AttackDialogPlayerInfo.prototype.initGeneral = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this._panelDisp.btn_switch], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this._panelDisp.mc_info.visible = false;
    this._panelDisp.mc_info.mouseChildren = false;
    this.generalToolTipMC.visible = false;
    if (this._panelDisp.btn_switch) {
      this._panelDisp.btn_switch.visible = __dep_export_CastleModel.CastleModel.generalsIntroductionData.canAccessGenerals();
    }
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.generalToolTipMC.txt_header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_attack_rework2022_generals_passiveEffectsList_header"));
    if (this._panelDisp.btn_change) {
      __dep_export_ButtonHelper.ButtonHelper.initButtons([this._panelDisp.btn_change], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
      this._panelDisp.btn_change.toolTipText = "dialog_attack_rework2022_generals_specialAbilities_change_button";
    }
  };
  AttackDialogPlayerInfo.prototype.setLordSelectionVisibility = function (__s70param0) {
    if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
      this._panelDisp.mc_lord.mc_lordSelection.visible = __s70param0;
      this._panelDisp.mc_lord.mc_switchLord.btn_foldout.mc_open.visible = __s70param0;
    }
  };
  AttackDialogPlayerInfo.prototype.updateMainLordEffects = function () {};
  AttackDialogPlayerInfo.prototype.updateLordIcon = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this._panelDisp.mc_lord.mc_lordContainer.mc_lordHolder);
    this._panelDisp.mc_lord.mc_lordContainer.visible = !!this.currentLord;
    if (this.currentLord) {
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordIcon(this.currentLord, this._panelDisp.mc_lord.mc_lordContainer.mc_lordHolder, 58, -1, null, false);
      if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
        this._lordTooltipTrigger.setProperties(this.currentLord, this.attackInfoVO.sourceArea, this.attackInfoVO.targetArea, this.currentLord.isBaron ? __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_DEFENCE_PVP : __dep_export_LordEffectHelper.LordEffectHelper.getFilterStrategyAttackOrDefence(this.attackInfoVO.targetArea.ownerInfo ? this.attackInfoVO.targetArea.ownerInfo.playerID : __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_CLASSIC_DUNGEONS_FIRST_ID, true));
      } else {
        this._lordTooltipTrigger.setProperties(this.currentLord, this.attackInfoVO.targetArea, this.attackInfoVO.targetArea, __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_DEFENCE_PVP);
      }
    }
  };
  AttackDialogPlayerInfo.prototype.updateGeneral = function () {
    var __s80local0 = this;
    var __s80local1 = this.currentLord ? this.currentLord.assignedGeneralVO : null;
    var __s80local2 = __s80local1 ? __s80local1.generalID : -1;
    var __s80local3 = this._type == AttackDialogPlayerInfo.TYPE_SOURCE;
    __s80local1 = __s80local3 ? __s80local1 || null : this.attackInfoVO.spyInfo.remainingSpyInfoTime <= 0 ? undefined : __s80local1 || null;
    if (this._panelDisp.btn_change) {
      this._panelDisp.btn_change.visible = !!__s80local1;
    }
    if (this._currentGeneralID != __s80local2 || this._generalNeedsUpdate) {
      this._currentGeneralID = __s80local2;
      this._generalNeedsUpdate = false;
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this._panelDisp.mc_general_bg);
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this._panelDisp.mc_general.mc_icon);
      this._panelDisp.mc_general.mc_level.visible = !!__s80local1 && !__s80local1.isNPCGeneral || this.isAREBossMode();
      this._panelDisp.mc_general.mc_stars.visible = !!__s80local1 && !__s80local1.isNPCGeneral;
      this._panelDisp.mc_general.icon_commander.visible = !!__s80local1 && this._type == AttackDialogPlayerInfo.TYPE_SOURCE;
      this._panelDisp.mc_general.icon_baron.visible = !!__s80local1 && this._type == AttackDialogPlayerInfo.TYPE_TARGET;
      var __s80local4 = "GeneralPortrait_";
      if (__s80local1) {
        __s80local4 += __s80local2;
        __dep_export_GeneralsHelper.GeneralsHelper.updateStarLevel(this._panelDisp.mc_general.mc_stars, __s80local1);
        var __s80local5 = __s80local1.currentLevel >= __s80local1.maxLevel;
        __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_general.mc_level.txt_value, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s80local1.currentLevel)).visible = !__s80local5;
        this._panelDisp.mc_general.mc_level.mc_maxLevel.visible = __s80local5;
      } else {
        __s80local4 += __s80local1 === null ? "Generic" : "Unknown";
      }
      if (this.isAREBossMode()) {
        var __s80local6 = this.areBossLevelVO;
        __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.mc_general.mc_level.txt_value, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s80local6 ? __s80local6.level : 0)).visible = true;
        this._panelDisp.mc_general.mc_level.mc_maxLevel.visible = false;
      }
      var __s80local7 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s80local4, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s80local4), null, 0, false);
      this._panelDisp.mc_general.mc_icon.addChild(__s80local7);
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this._panelDisp.mc_general.mc_lvl100_front);
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this._panelDisp.mc_general.mc_lvl100_back);
      if (__s80local1 && __s80local1.currentStarLevel >= __s80local1.maxStarLevel) {
        var __s80local8 = "GeneralPortrait100_front_" + __s80local1.generalXmlVO.rarityString;
        var __s80local9 = "GeneralPortrait100_back_" + __s80local1.generalXmlVO.rarityString;
        var __s80local10 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s80local8, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Generals100_PortraisIcons"), null, 24, true);
        var __s80local11 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s80local9, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Generals100_PortraisIcons"), null, 24, true);
        __s80local10.doWhenLoaded(function (__s88param0) {
          __s80local0._panelDisp.mc_general.mc_lvl100_front.addChild(__s80local10);
          __s80local0._panelDisp.mc_general.mc_lvl100_front.scaleX = __s80local0._panelDisp.mc_general.mc_lvl100_front.scaleY = 0.5;
        });
        __s80local11.doWhenLoaded(function (__s90param0) {
          __s80local0._panelDisp.mc_general.mc_lvl100_back.addChild(__s80local11);
          __s80local0._panelDisp.mc_general.mc_lvl100_back.scaleX = __s80local0._panelDisp.mc_general.mc_lvl100_back.scaleY = 0.5;
        });
      }
      if (__s80local3) {
        this._panelDisp.mc_general.mc_icon.toolTipText = __s80local1 ? {
          t: "dialog_attack_rework2022_generals_foldInGeneralsInterface_attacker_assigned_simple_tooltip",
          p: [__s80local1.nameText]
        } : "dialog_attack_rework2022_generals_foldInGeneralsInterface_attacker_unassigned_simple_tooltip";
      } else {
        __s80local1 = this.attackInfoVO.spyInfo.remainingSpyInfoTime > 0 ? __s80local1 : undefined;
        this._panelDisp.mc_general.mc_icon.toolTipText = __s80local1 ? {
          t: "dialog_attack_rework2022_generals_foldInGeneralsInterface_defender_assigned_simple_tooltip",
          p: [__s80local1.nameText]
        } : __s80local1 === null ? "dialog_attack_rework2022_generals_foldInGeneralsInterface_defender_unassigned_simple_tooltip" : "dialog_attack_rework2022_generals_foldInGeneralsInterface_defender_unknown_simple_tooltip";
      }
      if (this.currentLord && !this.currentLord.isBaron) {
        __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.txt_generalInfo, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_generals_noGeneralAssigned_desc")).autoFitToBounds = true;
      } else if (this._type == AttackDialogPlayerInfo.TYPE_TARGET && this.attackInfoVO.spyInfo.remainingSpyInfoTime <= 0) {
        __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.txt_generalInfo, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_attack_noSpyinfos_short")).autoFitToBounds = true;
      } else {
        __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._panelDisp.txt_generalInfo, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_generals_noGeneralAssigned_desc")).autoFitToBounds = true;
      }
      this._panelDisp.txt_generalInfo.visible = !__s80local1 && !this.isAREBossMode();
      this._panelDisp.txt_generalInfo_bg.visible = !__s80local1 && !this.isAREBossMode();
      this._panelDisp.mc_abilites.visible = false;
      for (var __s80local12 = 0; __s80local12 < AttackDialogPlayerInfo.ABILITY_ROWS; __s80local12++) {
        var __s80local13 = this._panelDisp.mc_abilites["mc_ability" + __s80local12];
        __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s80local13);
        __s80local13.visible = false;
        if (__s80local1) {
          var __s80local14 = __s80local1.getSelectedAbilities(__s80local3).length > __s80local12 ? __s80local1.getSelectedAbilities(__s80local3)[__s80local12].abilityID : -1;
          if (!__s80local3 && __s80local1.defenseSlots.length <= __s80local12) {
            continue;
          }
          if (__s80local3 && __s80local1.attackSlots.length <= __s80local12) {
            continue;
          }
          __s80local13.visible = true;
          this._panelDisp.mc_abilites.visible = true;
          var __s80local15 = __dep_export_CastleModel.CastleModel.generalsData.getAbilityByID(__s80local14);
          __s80local13.addChild(__dep_export_GeneralsHelper.GeneralsHelper.getGeneralAbilityClip(__s80local15 ? __s80local15.abilityGroupID : -1, 46, -1, this._type == AttackDialogPlayerInfo.TYPE_SOURCE));
          __s80local13.mouseChildren = false;
          __s80local13.toolTipText = __dep_export_GeneralsHelper.GeneralsHelper.getLocalizedTitleForAbility(__s80local15 ? __s80local15.abilityGroupID : -1);
          if (__s80local14 > 0) {
            __s80local13.toolTipText += "\n" + __dep_export_GeneralsHelper.GeneralsHelper.getLocalizedCopyForAbility(__s80local14, this._type == AttackDialogPlayerInfo.TYPE_SOURCE);
          }
        }
      }
      this._panelDisp.mc_abilites.visible = this._panelDisp.mc_abilites.visible && !this.isAREBossMode();
      if (__s80local1) {
        __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.generalToolTipMC.txt_effects, new __dep_exact_92d05af59ee2ff30.TextVO(__s80local1.getPassiveEffectsText())).autoFitToBounds = true;
      } else {
        __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.generalToolTipMC.txt_effects, new __dep_exact_92d05af59ee2ff30.TextVO(" "));
      }
    }
    this._panelDisp.mc_info.visible = !!__s80local1 && !__s80local1.isNPCGeneral;
  };
  AttackDialogPlayerInfo.prototype.onClick = function (__s105param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s105param0.target)) {
      if (!__dep_exact_9e901e8e2483a22f.MovieClipHelper.isChildrenOf(__s105param0.target, this._panelDisp.mc_lord)) {
        this.setLordSelectionVisibility(false);
      }
      switch (__s105param0.target) {
        case this._panelDisp.mc_player.btn_details:
          this._panelDisp.mc_playerTooltip.visible = !this._panelDisp.mc_playerTooltip.visible;
          break;
        case this._panelDisp.btn_mini:
          if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
            __dep_export_AttackDialogController.AttackDialogController.getInstance().hidePlayerInfos.dispatch();
          } else {
            __dep_export_AttackDialogController.AttackDialogController.getInstance().hideTargetInfos.dispatch();
          }
          break;
        case this._panelDisp.btn_change:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_GeneralsAbilityDialog.GeneralsAbilityDialog, new __dep_export_GeneralsAbilityDialogProperties.GeneralsAbilityDialogProperties(this.currentLord ? this.currentLord.assignedGeneralVO : null, this._type == AttackDialogPlayerInfo.TYPE_SOURCE));
      }
      if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
        var __s105local0 = false;
        if (this._generalSelectionOpen) {
          __dep_export_AttackDialogController.AttackDialogController.getInstance().closeGeneralSelection.dispatch();
          __s105local0 = true;
        }
        switch (__s105param0.target) {
          case this._panelDisp.btn_switch:
            if (!this._generalSelectionOpen && !__s105local0) {
              __dep_export_AttackDialogController.AttackDialogController.getInstance().openGeneralSelection.dispatch();
            }
            break;
          case this._panelDisp.mc_lord.mc_switchLord.btn_foldout:
            if (this._lordSelectionItems.length > 1 || this.currentLord && this.currentLord.id > -1) {
              this.setLordSelectionVisibility(!this._panelDisp.mc_lord.mc_lordSelection.visible);
            }
            break;
          case this._panelDisp.mc_lord.mc_lordContainer:
            if (!__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive && this.selectedLord && this.currentLord.id > -1) {
              __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleEquipmentDialog.CastleEquipmentDialog, new __dep_export_CastleEquipmentDialogProperties.CastleEquipmentDialogProperties(this.bindFunction(this.initLord), this.selectedLord ? this.selectedLord.id : -1, this.selectedLord.isBaron));
            }
        }
      }
    }
  };
  AttackDialogPlayerInfo.prototype.onMouseOver = function (__s118param0) {
    if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
      switch (__s118param0.target) {
        case this._panelDisp.mc_lord.mc_switchLord.btn_closed:
        case this._panelDisp.mc_lord.mc_switchLord.btn_foldout:
          this._panelDisp.mc_lord.mc_switchLord.btn_foldout.visible = true;
          this._panelDisp.mc_lord.mc_switchLord.btn_foldout.gotoAndStop(2);
          this._mouseOnFoldOutBtn = true;
      }
    }
    switch (__s118param0.target) {
      case this._panelDisp.mc_info:
        this.generalToolTipMC.visible = true;
    }
  };
  AttackDialogPlayerInfo.prototype.onMouseOut = function (__s123param0) {
    if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
      switch (__s123param0.target) {
        case this._panelDisp.mc_lord.mc_switchLord.btn_foldout:
          this._panelDisp.mc_lord.mc_switchLord.btn_foldout.visible = true;
          this._mouseOnFoldOutBtn = false;
      }
    }
    switch (__s123param0.target) {
      case this._panelDisp.mc_info:
        this.generalToolTipMC.visible = false;
    }
  };
  AttackDialogPlayerInfo.prototype.onLordChange = function () {
    this.updateMainLordEffects();
    this.updateLordIcon();
    this.updateGeneral();
    if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
      this._itxt_lordName.textContentVO.stringValue = this.currentLord ? this.currentLord.name.compose() : "";
      var __s128local0 = this.currentLord && this.currentLord.id >= 0;
      this._panelDisp.btn_switch.toolTipText = __s128local0 ? "dialog_attack_rework2022_generals_assignGeneral_tooltip" : "dialog_attack_rework2022_generals_assignGeneral_blocked_tooltip";
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this._panelDisp.btn_switch, __s128local0);
      this._scrollComponent.updateWithNewData(this._lordSelectionItems, false);
    }
  };
  AttackDialogPlayerInfo.prototype.onCLickLord = function (__s131param0) {
    this.setLordSelectionVisibility(false);
    __dep_export_AttackDialogController.AttackDialogController.getInstance().selectedLord = __s131param0;
    for (var __s131local0 = 0; __s131local0 < this._lordSelectionItems.length; __s131local0++) {
      if (this._lordSelectionItems[__s131local0].id == (__dep_export_AttackDialogController.AttackDialogController.getInstance().selectedLord ? __dep_export_AttackDialogController.AttackDialogController.getInstance().selectedLord.id : -1)) {
        __s131local0;
      }
    }
  };
  AttackDialogPlayerInfo.prototype.onEquipOrRename = function (__s136param0) {
    this.onLordChange();
  };
  AttackDialogPlayerInfo.prototype.onGeneralAssigned = function (__s138param0) {
    this.onLordChange();
  };
  AttackDialogPlayerInfo.prototype.onGeneralsUpdated = function (__s140param0) {
    this._generalNeedsUpdate = true;
    this.updateGeneral();
  };
  AttackDialogPlayerInfo.prototype.onOpenGeneralSelection = function () {
    this._generalSelectionOpen = true;
    this._panelDisp.btn_switch.mc_open.visible = true;
    var __s142local0 = this.currentLord.id >= 0;
    this._panelDisp.btn_switch.toolTipText = __s142local0 ? "dialog_equipment_generals_closeGeneralQuickSelection_tooltip" : "dialog_attack_rework2022_generals_assignGeneral_blocked_tooltip";
    this._prevMiniVisibility = this._panelDisp.btn_mini.visible;
    this._panelDisp.btn_mini.visible = false;
  };
  AttackDialogPlayerInfo.prototype.onCloseGeneralSelection = function () {
    this._generalSelectionOpen = false;
    this._panelDisp.btn_switch.mc_open.visible = false;
    var __s144local0 = this.currentLord.id >= 0;
    this._panelDisp.btn_switch.toolTipText = __s144local0 ? "dialog_attack_rework2022_generals_assignGeneral_tooltip" : "dialog_attack_rework2022_generals_assignGeneral_blocked_tooltip";
    this._panelDisp.btn_mini.visible = this._prevMiniVisibility;
  };
  Object.defineProperty(AttackDialogPlayerInfo.prototype, "currentLord", {
    get: function () {
      if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
        return this.selectedLord;
      } else {
        return this.attackInfoVO.spyInfo.defendingLord;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogPlayerInfo.prototype, "selectedLord", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance().selectedLord;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogPlayerInfo.prototype, "ownerArea", {
    get: function () {
      if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
        return this.attackInfoVO.sourceArea;
      } else {
        return this.attackInfoVO.targetArea;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogPlayerInfo.prototype, "ownerCrest", {
    get: function () {
      if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
        return this.attackInfoVO.sourceOwnerCrestVO;
      } else {
        return this.attackInfoVO.targetOwnerCrestVO;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogPlayerInfo.prototype, "ownerInfo", {
    get: function () {
      if (this._type == AttackDialogPlayerInfo.TYPE_SOURCE) {
        return this.attackInfoVO.sourceOwner;
      } else {
        return this.attackInfoVO.targetOwner;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogPlayerInfo.prototype, "attackInfoVO", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance().attackVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogPlayerInfo.prototype, "generalToolTipMC", {
    get: function () {
      return this._generalToolTipMC || this._panelDisp.mc_generalInfoTooltip;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogPlayerInfo.prototype, "areBossLevelVO", {
    get: function () {
      var __s168local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_RAID);
      if (__s168local0 && __s168local0.raidBossServerDataVO) {
        return __s168local0.raidBossServerDataVO.getCurrentXMLBossLevelDataVO();
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogPlayerInfo.prototype.isAREBossMode = function () {
    return this._type == AttackDialogPlayerInfo.TYPE_TARGET && this.attackInfoVO.targetArea.areaType == __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ARE_PORTAL;
  };
  AttackDialogPlayerInfo.__initialize_static_members = function () {};
  AttackDialogPlayerInfo.TYPE_SOURCE = 0;
  AttackDialogPlayerInfo.TYPE_TARGET = 1;
  AttackDialogPlayerInfo.LORD_SELECTION_ITEMS_PER_ROW = 4;
  AttackDialogPlayerInfo.LORD_SELECTION_ITEM_OFFSET = 74;
  AttackDialogPlayerInfo.ABILITY_ROWS = 5;
  return AttackDialogPlayerInfo;
}();
exports.AttackDialogPlayerInfo = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
