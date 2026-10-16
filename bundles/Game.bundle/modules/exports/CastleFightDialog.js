Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleOpenShopExecutor = require("gge-module:export_CastleOpenShopExecutor");
var __dep_export_CastleChatEvent = require("gge-module:export_CastleChatEvent");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_BasicPickerEvent = require("gge-module:export_BasicPickerEvent");
var __dep_export_CastleInventoryComponentEvent = require("gge-module:export_CastleInventoryComponentEvent");
var __dep_export_CastleDialogEvent = require("gge-module:export_CastleDialogEvent");
var __dep_export_CastleFightDataEvent = require("gge-module:export_CastleFightDataEvent");
var __dep_export_CastleKingdomEvent = require("gge-module:export_CastleKingdomEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleChatVO = require("gge-module:export_CastleChatVO");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleFightItemVO = require("gge-module:export_CastleFightItemVO");
var __dep_export_CastleLegendSkillEffectsEnum = require("gge-module:export_CastleLegendSkillEffectsEnum");
var __dep_export_UnitInventoryList = require("gge-module:export_UnitInventoryList");
var __dep_export_ToolEffectType = require("gge-module:export_ToolEffectType");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_CastleLegendEffectTextComposer = require("gge-module:export_CastleLegendEffectTextComposer");
var __dep_export_AllianceCrestEnum = require("gge-module:export_AllianceCrestEnum");
var __dep_export_AllianceCrestSizeEnum = require("gge-module:export_AllianceCrestSizeEnum");
var __dep_export_CastleAllianceCrestHelper = require("gge-module:export_CastleAllianceCrestHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __dep_export_WodPicHelperUnitFramePerfectCallbackWrapper = require("gge-module:export_WodPicHelperUnitFramePerfectCallbackWrapper");
var __dep_export_CastleStartAllianceDialogProperties = require("gge-module:export_CastleStartAllianceDialogProperties");
var __dep_export_CastleConfirmCostsDialogProperties = require("gge-module:export_CastleConfirmCostsDialogProperties");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_RenameFightPresetDialogProperties = require("gge-module:export_RenameFightPresetDialogProperties");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = createjs.MovieClip;
var __s0local2 = createjs.MouseEvent;
var __s0local3 = function (__s1param0) {
  function CastleFightDialog(__s3param0) {
    var __s3local0 = this;
    __s3local0._shopCurrentPage = 0;
    __s3local0._shopMaxPage = 0;
    __s3local0._currentShopCategory = 0;
    __s3local0._userHasMadeChanges = false;
    __s3local0._originalSpyInfoHelpTextPosX = NaN;
    __s3local0._originalSpyInfoHelpTextWidth = NaN;
    __s3local0._preventRefresh = false;
    __s3local0._lastRefreshTimeStamp = NaN;
    __s3local0.forceShopRedraw = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl("FightScreens_Generals4")) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFightDialog, __s1param0);
  CastleFightDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.setTickEnablement();
    this.disp.changeTextFieldCacheScale(2);
    this._originalSpyInfoHelpTextPosX = this.unitInfo.mc_unitHolder.x;
    this._originalSpyInfoHelpTextWidth = this.unitInfo.txt_help_dynamic.width;
    this._autoFill = new __dep_export_FightDialogAutoFillComponent.FightDialogAutoFillComponent(this.dialogDisp.bottomMenu.mc_autoFill);
    this.bottomMenu.btn_chat.toolTipText = "allianceChat";
    this.bottomMenu.btn_toolLimit.toolTipText = "dialog_defence_toolTriggerLimit_header";
    this.textFieldManager.registerTextField(this.bottomMenu.component_Chat.btn_linkToAlliance.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("allianceChat"));
    this.bottomMenu.btn_tactics.toolTipText = "panel_fight_attackplaning";
    this.bottomMenu.component_Options.info_time.toolTipText = "panel_fight_Traveltime";
    this.bottomMenu.component_Options.info_time.mouseChildren = false;
    this.bottomMenu.component_Options.info_time_back.toolTipText = "travelTime_back";
    this.bottomMenu.component_Options.info_time_back.visible = false;
    this.bottomMenu.component_Options.info_cost.toolTipText = "travelingcosts";
    this.bottomMenu.component_Options.info_cost.mouseChildren = false;
    this.bottomMenu.component_Options.info_morale.visible = false;
    this.bottomMenu.btn_cat_units_att.toolTipText = "attackunit";
    this.bottomMenu.btn_cat_units_def.toolTipText = "defenceunit";
    this.bottomMenu.btn_cat_tools.toolTipText = "dialog_recuit_tools";
    this.bottomMenu.btn_cat_keep.toolTipText = "keep";
    this.bottomMenu.btn_cat_gate.toolTipText = "gate";
    this.bottomMenu.btn_cat_wall.toolTipText = "wall";
    this.bottomMenu.btn_cat_moat.toolTipText = "moat";
    this.userInfoMenu.hitareaC2.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.userInfoMenu.hitareaC1.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C1;
    this.bottomMenu.component_Options.mc_lordPicker_attack.visible = false;
    this.bottomMenu.component_Options.mc_townshipSupport.visible = false;
    this.bottomMenu.component_Options.lootInfo.visible = false;
    this.bottomMenu.component_Options.lootInfo.mouseChildren = false;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.bottomMenu.btn_chat, this.bottomMenu.btn_tactics, this.bottomMenu.btn_toolLimit, this.bottomMenu.btn_cat_moat, this.bottomMenu.btn_cat_field, this.bottomMenu.btn_cat_units_att, this.bottomMenu.btn_cat_units_def, this.bottomMenu.btn_cat_tools, this.bottomMenu.btn_cat_gate, this.bottomMenu.btn_cat_wall, this.bottomMenu.btn_cat_keep], __dep_exact_84d43d9c404bd4d8.TwoStateIconZoomButton);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.bottomMenu.itemSelection.btn_leftArrow, this.bottomMenu.itemSelection.btn_rightArrow, this.bottomMenu.component_Chat.btn_up, this.bottomMenu.component_Chat.btn_down, this.bottomMenu.component_Chat.btn_enter, this.unitInfo.btn_leftArrow, this.unitInfo.btn_rightArrow, this.userInfoMenu.btn_payment]);
    __dep_export_ButtonHelper.ButtonHelper.initButton(this.bottomMenu.btn_close, -1, __dep_export_ClickFeedbackButtonBackground.ClickFeedbackButtonBackground);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.bottomMenu.btn_toolLimit, this.isOutOfTutorial());
    this.textFieldManager.registerTextField(this.unitInfo.txt_help_dynamic, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""), new __dep_exact_9e901e8e2483a22f_3.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    this.unitInfo.txt_help_dynamic.visible = true;
    if (this.unitInfo) {
      this.unitInfo.btn_leftArrow.visible = false;
      this.unitInfo.btn_rightArrow.visible = false;
    }
    this.advancedTroopSelection = new __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent(this.disp.mc_advancedSelectionList);
    this.unLockDialog();
    this._lastKnownUserCrest = __dep_export_CastleModel.CastleModel.userData.playerCrest.clone();
    if (this.disp.mc_targetLord) {
      this._lordTooltipTrigger = new __dep_export_LordEffectTooltipTrigger.LordEffectTooltipTrigger(this.disp.mc_targetLord);
    }
    this.dialogDisp.bottomMenu.info_township.visible = false;
    if (this.enemyInfoMenu) {
      this.enemyInfoMenu.mc_level.txt_level.x = -25;
      this.enemyInfoMenu.mc_level.txt_level.y = -12;
    }
    if (this.userLevelInfo) {
      this.userLevelInfo.mc_level.txt_level.x = -20;
      this.userLevelInfo.mc_level.txt_level.y = -12;
    }
  };
  CastleFightDialog.prototype.initLordPicker = function (__s11param0 = 0) {
    this.lordPickerMc.visible = true;
    if (this._lordPicker) {
      this._lordPicker.destroy();
    }
    var __s11local0 = this.getLordsWithPremiumCommander();
    this._lordPicker = new __dep_export_CastleLordPicker.CastleLordPicker(this.lordPickerMc, __s11local0, this._fightScreenVO.isConquerAttack, false, true);
    this._lordPicker.selectedIndex = __s11param0;
    this._lordPicker.addEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onSelectedLordChanged));
    this.updateSelectedLord();
    this.updateLordPickerTooltip();
  };
  CastleFightDialog.prototype.getLordsWithPremiumCommander = function () {
    var __s14local0 = __dep_export_CastleModel.CastleModel.lordData.getDefaultLordByID(__dep_exact_26a421b704832cff.TravelConst.COMMANDER_PREMIUM);
    if (__dep_export_CastleModel.CastleModel.userData.level >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_SELECT_PREMIUM_COMMANDER) {
      return __dep_export_CastleModel.CastleModel.lordData.commanders.concat([__s14local0]);
    } else {
      return __dep_export_CastleModel.CastleModel.lordData.commanders;
    }
  };
  CastleFightDialog.prototype.initPresetPicker = function () {
    if (!this._presetPicker) {
      this.presetPickerMc.visible = true;
      this._presetPicker = new __dep_export_FightPresetPicker.FightPresetPicker(this.presetPickerMc);
      this._presetPicker.onPresetActivated.add(this.bindFunction(this.fillWaveFromPreset));
      this._presetPicker.onPresetSaved.add(this.bindFunction(this.handleSavePresetRequested));
      this._presetPicker.onPresetUnlockRequested.add(this.bindFunction(this.handleUnlockPresetRequested));
      this._presetPicker.onPresetOptions.add(this.bindFunction(this.handlePresetOptions));
    }
  };
  CastleFightDialog.prototype.handlePresetOptions = function (__s21param0) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_RenameFightPresetDialog.RenameFightPresetDialog, new __dep_export_RenameFightPresetDialogProperties.RenameFightPresetDialogProperties(__s21param0));
  };
  CastleFightDialog.prototype.handleSavePresetRequested = function (__s23param0) {
    if (__s23param0.unlocked) {
      this.fillPresetFromWave(__s23param0);
      __dep_export_CastleModel.CastleModel.fightPresetData.savePresetArmy(__s23param0);
    }
  };
  CastleFightDialog.prototype.handleUnlockPresetRequested = function (__s26param0) {
    var __s26local0 = this;
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleConfirmCostsDialog.CastleConfirmCostsDialog, new __dep_export_CastleConfirmCostsDialogProperties.CastleConfirmCostsDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_troopPreset_unlock_header"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_troopPreset_unlock_desc"), __s26param0.unlockPrice, null, function () {
      __s26local0.unlockPreset(__s26param0);
    }, function () {
      __s26local0._presetPicker.selectPreviousUnlockedItem();
    }, function () {
      __s26local0._presetPicker.selectPreviousUnlockedItem();
    }));
  };
  CastleFightDialog.prototype.unlockPreset = function (__s34param0) {
    __dep_export_CastleModel.CastleModel.fightPresetData.unlockPreset(__s34param0);
  };
  CastleFightDialog.prototype.fillPresetFromWave = function (__s36param0) {};
  CastleFightDialog.prototype.fillWaveFromPreset = function (__s38param0, __s38param1) {};
  Object.defineProperty(CastleFightDialog.prototype, "presetPickerMc", {
    get: function () {
      return this.bottomMenu.component_Options.mc_fightPresetPicker;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "lordPickerMc", {
    get: function () {
      return this.bottomMenu.component_Options.mc_lordPicker_attack;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightDialog.prototype.showUserLevel = function () {
    if (this.userLevelInfo) {
      if (__dep_export_CastleModel.CastleModel.userData.isLegend) {
        this.userLevelInfo.mc_level.visible = false;
        this.userLevelInfo.mc_legendLevel.visible = true;
        this.textFieldManager.registerTextField(this.userLevelInfo.mc_legendLevel.legend.txt_legendLevel, new __dep_exact_92d05af59ee2ff30_2.NumberVO(__dep_export_CastleModel.CastleModel.userData.userLegendLevel));
        this.userLevelInfo.mc_legendLevel.bg.toolTipText = "level";
        this.userLevelInfo.mc_legendLevel.legend.toolTipText = "legendLevel";
        this.userLevelInfo.mc_legendLevel.bg.mouseChildren = false;
        this.userLevelInfo.mc_legendLevel.legend.mouseChildren = false;
        this.userLevelInfo.mc_legendLevel.doCache();
      } else {
        this.userLevelInfo.mc_level.visible = true;
        this.userLevelInfo.mc_legendLevel.visible = false;
        this.userLevelInfo.mc_level.txt_level.redraw();
        this.textFieldManager.registerTextField(this.userLevelInfo.mc_level.txt_level, new __dep_exact_92d05af59ee2ff30_2.NumberVO(__dep_export_CastleModel.CastleModel.userData.userLevel));
        this.userLevelInfo.mc_level.toolTipText = "level";
        this.userLevelInfo.mc_level.mouseChildren = false;
        this.userLevelInfo.mc_level.doCache();
      }
    }
  };
  CastleFightDialog.prototype.showPlayerInfo = function (__s49param0, __s49param1) {
    this.enemyInfoMenu.visible = true;
    var __s49local0 = __s49param0.controllerWorldMapOwnerInfoVO;
    var __s49local1 = new __dep_exact_81dacdf05bd32292.ColorTransform();
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s49param0, "DungeonMapobjectVO") || __s49local0.allianceID != __dep_export_CastleModel.CastleModel.userData.allianceID) {
      __s49local1.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_RED;
    } else {
      __s49local1.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_LIGHT_BLUE;
    }
    this.enemyInfoMenu.cc.useFilters([new createjs.ColorFilter(__s49local1.redMultiplier, __s49local1.greenMultiplier, __s49local1.blueMultiplier, __s49local1.alphaMultiplier, __s49local1.redOffset, __s49local1.greenOffset, __s49local1.blueOffset, __s49local1.alphaOffset)]);
    this.textFieldManager.registerTextField(this.enemyInfoMenu.txt_castle, new __dep_exact_92d05af59ee2ff30_3.TextVO(__s49param0.areaNameString)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.enemyInfoMenu.txt_name, new __dep_exact_92d05af59ee2ff30_3.TextVO(__s49local0.playerName)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.enemyInfoMenu.txt_alliance, new __dep_exact_92d05af59ee2ff30_3.TextVO(__s49local0.allianceName));
    this.enemyInfoMenu.mc_level.toolTipText = "level";
    this.enemyInfoMenu.mc_level.mouseChildren = false;
    this.enemyInfoMenu.mc_legendLevel.bg.toolTipText = "level";
    this.enemyInfoMenu.mc_legendLevel.legend.toolTipText = "legendLevel";
    this.enemyInfoMenu.mc_legendLevel.bg.mouseChildren = false;
    this.enemyInfoMenu.mc_legendLevel.legend.mouseChildren = false;
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s49param0, "ABGAllianceTowerMapobjectVO")) {
      this.enemyInfoMenu.mc_level.visible = false;
      this.enemyInfoMenu.mc_legendLevel.visible = false;
    } else if (__s49local0.isLegend) {
      this.enemyInfoMenu.mc_level.visible = false;
      this.enemyInfoMenu.mc_legendLevel.visible = true;
      this.textFieldManager.registerTextField(this.enemyInfoMenu.mc_legendLevel.legend.txt_legendLevel, new __dep_exact_92d05af59ee2ff30_2.NumberVO(__s49local0.playerLegendLevel));
    } else if (__dep_export_PlayerHelper.PlayerHelper.isNpcPvpPlayer(__s49local0.playerID)) {
      this.enemyInfoMenu.mc_level.visible = __s49param1 < __dep_exact_26a421b704832cff_2.PlayerConst.LEVEL_CAP;
      this.enemyInfoMenu.mc_legendLevel.visible = __s49param1 >= __dep_exact_26a421b704832cff_2.PlayerConst.LEVEL_CAP;
      this.textFieldManager.registerTextField(this.enemyInfoMenu.mc_legendLevel.legend.txt_legendLevel, new __dep_exact_92d05af59ee2ff30_3.TextVO("-"));
      this.enemyInfoMenu.mc_level.txt_level.redraw();
      this.textFieldManager.registerTextField(this.enemyInfoMenu.mc_level.txt_level, new __dep_exact_92d05af59ee2ff30_2.NumberVO(__s49param1));
    } else {
      this.enemyInfoMenu.mc_level.visible = true;
      this.enemyInfoMenu.mc_legendLevel.visible = false;
      this.enemyInfoMenu.mc_level.txt_level.redraw();
      this.textFieldManager.registerTextField(this.enemyInfoMenu.mc_level.txt_level, new __dep_exact_92d05af59ee2ff30_2.NumberVO(__s49param1));
    }
    if (this.enemyInfoMenu.mc_level.visible) {
      this.enemyInfoMenu.mc_level.doCache();
    }
    if (__s49param0.absAreaPosX == -1 || __s49param0.absAreaPosY == -1) {
      this.textFieldManager.registerTextField(this.enemyInfoMenu.txt_coordinates, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    } else {
      this.textFieldManager.registerTextField(this.enemyInfoMenu.txt_coordinates, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_COORDS, [__s49param0.absAreaPosX, __s49param0.absAreaPosY], true));
    }
    this.enemyInfoMenu.doCache();
    if (this.disp.mc_targetLord && this._fightScreenVO.spyInfo && this._fightScreenVO.spyInfo.defendingLord) {
      this.disp.mc_targetLord.visible = true;
      this.disp.mc_targetLord.mouseChildren = false;
      __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(this.disp.mc_targetLord.mc_lordHolder);
      var __s49local2 = this._fightScreenVO.spyInfo.defendingLord;
      __dep_export_EquipmentIconHelper.EquipmentIconHelper.addLordIcon(__s49local2, this.disp.mc_targetLord.mc_lordHolder, 40);
      var __s49local3 = __dep_export_LordEffectHelper.LordEffectHelper.getFilterStrategyAttackOrDefence(this.targetArea.ownerInfo.playerID, false);
      this._lordTooltipTrigger.setProperties(__s49local2, this.targetArea, this.targetArea, __s49local3);
    } else if (this.disp.mc_targetLord) {
      this.disp.mc_targetLord.visible = false;
    }
    if (this.disp.mc_targetSkills && this._fightScreenVO.spyInfo && this._fightScreenVO.spyInfo.defenderSkills && this._fightScreenVO.spyInfo.defenderSkills.length > 0) {
      this.disp.mc_targetSkills.visible = true;
      this.disp.mc_targetSkills.mouseChildren = false;
      this.disp.mc_targetSkills.toolTipText = __dep_export_CastleLegendEffectTextComposer.CastleLegendEffectTextComposer.getLegendBonusText(this._fightScreenVO.spyInfo.defenderSkills);
    } else if (this.disp.mc_targetSkills) {
      this.disp.mc_targetSkills.visible = false;
    }
  };
  CastleFightDialog.prototype.hideAllShopItemsCastle = function () {
    for (var __s64local0 = 0; __s64local0 < CastleFightDialog.SHOP_ITEMS_PER_PAGE; __s64local0++) {
      this.bottomMenu.itemSelection["i" + __s64local0].visible = false;
    }
  };
  CastleFightDialog.prototype.drawDefaultBackground = function () {
    __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(this.landscapeBG);
    __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(this.castleLayer);
    __dep_export_DetailViewCreator.DetailViewCreator.createDetailViewFromIWorldmapObject(null, this.landscapeBG, this.castleLayer, __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomVO);
  };
  CastleFightDialog.prototype.drawAreaVO = function () {
    var __s70local0;
    var __s70local1 = this.defenceDataAreaInfo;
    __s70local0 = this._fightScreenVO ? this._fightScreenVO.detailViewObject : __s70local1;
    this._fightDetailView = __dep_export_DetailViewCreator.DetailViewCreator.createDetailViewFromIWorldmapObject(__s70local0, this.landscapeBG, this.castleLayer, __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(this._fightScreenVO ? this._fightScreenVO.sourceArea.kingdomID : __s70local1.kingdomID));
    this.castleLayer.addEventListener(__s0local2.MOUSE_OUT, this.bindFunction(this.onMouseOutOfCastle));
  };
  Object.defineProperty(CastleFightDialog.prototype, "defenceDataAreaInfo", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.defenceData.areaInfo;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightDialog.prototype.onChangeCurrency = function (__s74param0 = null) {
    this.textFieldManager.registerTextField(this.userInfoMenu.txt_userCurrency1, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__dep_export_CastleModel.CastleModel.currencyData.c1Amount, {
      compactThreshold: __dep_export_ClientConstTextIds.ClientConstTextIds.C1C2_COMPACT_THRESHOLD,
      compactFractionalDigits: 2
    }));
    this.textFieldManager.registerTextField(this.userInfoMenu.txt_userCurrency2, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__dep_export_CastleModel.CastleModel.currencyData.c2Amount, {
      compactThreshold: __dep_export_ClientConstTextIds.ClientConstTextIds.C1C2_COMPACT_THRESHOLD,
      compactFractionalDigits: 2
    }));
    this.userInfoMenu.setChildIndex(this.userInfoMenu.hitareaC2, this.userInfoMenu.numChildren - 1);
    if (this.dialogDisp.cacheCanvas || this.dialogDisp.parent && this.dialogDisp.parent.cacheCanvas) {
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.updateParentCache(this.dialogDisp);
    }
  };
  CastleFightDialog.prototype.onNewToolBought = function (__s77param0) {
    var __s77local0 = __s77param0.params[0];
    var __s77local1 = __dep_exact_f855840627e6e145.int(__s77local0.W);
    var __s77local2 = __dep_exact_f855840627e6e145.int(__s77local0.A);
    this._unitMixedInventory.changeUnitAmount(__s77local1, __s77local2);
    if (this.advancedTroopSelection.disp.visible && this.advancedTroopSelection.currentUnitCategory == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
      this.advancedTroopSelection.addToMergedInventory(__s77local1, __s77local2);
    }
    this.fillShopItemsByGroup();
  };
  CastleFightDialog.prototype.setAppearanceFightButton = function () {
    this.autoFill.setActive(false);
  };
  CastleFightDialog.prototype.showLoaded = function (__s82param0 = null) {
    if (__s82param0) {
      if (__s82param0 == 1) {
        __s1param0.prototype.showLoaded.call(this, __s82param0);
        return;
      }
    } else {
      __s1param0.prototype.showLoaded.call(this, __s82param0);
    }
    this.forceShopRedraw = true;
    this.autoFill.onFillCurrentWaveButtonClicked.add(this.bindFunction(this.onAutoFillCurrentWaveClicked));
    this.autoFill.onFillAllWavesButtonClicked.add(this.bindFunction(this.onAutoFillAllWavesClicked));
    this.autoFill.onClearButtonClicked.add(this.bindFunction(this.onAutoFillClearClicked));
    this.autoFill.onShow();
    this.hideAllShopItemsCastle();
    this.setAppearanceFightButton();
    this._shopCurrentPage = 0;
    this.drawDefaultBackground();
    this.hideSpyInfo();
    this.bottomMenu.itemSelection.mc_unitToolTip.visible = false;
    this._paymentComponent = new __dep_export_ButtonAddGoldComponent.ButtonAddGoldComponent(this.userInfoMenu.btn_payment);
    this._paymentComponent.init();
    this.onChangeCurrency();
    this._chatComponent ||= new __dep_export_CastleChatComponent.CastleChatComponent(new __dep_export_CastleChatVO.CastleChatVO(this.bottomMenu.component_Chat.txt_chat, this.bottomMenu.component_Chat.txt_input, this.bottomMenu.component_Chat.btn_enter, this.bottomMenu.component_Chat.mc_blockChat, this.bottomMenu.component_Chat.btn_up, this.bottomMenu.component_Chat.btn_down, this.bottomMenu.component_Chat.btn_slider, this.bottomMenu.component_Chat.mc_sliderLine));
    this._chatComponent.enableComponent(__dep_export_CastleModel.CastleModel.userData.isInAlliance);
    this._chatComponent.setChatVisibility(__dep_export_CastleModel.CastleModel.userData.isInAlliance);
    this._chatComponent.onShow();
    this._toolsLimitComponent = new __dep_export_ToolsLimitComponent.ToolsLimitComponent(this.bottomMenu.component_ToolLimit, __dep_export_CastleModel.CastleModel.defenceData.minAttackUnitsToConsumeTools);
    this._toolsLimitComponent.onShow();
    if (this._lordTooltipTrigger) {
      this._lordTooltipTrigger.show();
    }
    if (this.dialogDisp.mc_hornHolder) {
      this.attackHorn = new __dep_export_StatusIconAttackWarnings.StatusIconAttackWarnings();
      this.dialogDisp.mc_hornHolder.scaleX = this.dialogDisp.mc_hornHolder.scaleY = 0.65;
      this.attackHorn.addToContainer(this.dialogDisp.mc_hornHolder);
    }
    if (this.dialogDisp.mc_targetLord) {
      this.dialogDisp.mc_targetLord.gotoAndStop(1);
    }
  };
  CastleFightDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(__dep_export_CastleFightDataEvent.CastleFightDataEvent.NEW_TOOL_BOUGHT, this.bindFunction(this.onNewToolBought));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onChangeCurrency));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
    this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onShowDialog));
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleChatEvent.CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED, this.bindFunction(this.onNewChatMessage));
    __dep_export_CastleModel.CastleModel.kingdomData.addEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomUpdates));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onSpecialEventChange));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventChange));
  };
  CastleFightDialog.prototype.applyPropertiesLoaded = function (__s92param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s92param0);
    this.bottomMenu.component_Chat.btn_linkToAlliance.visible = !__dep_export_CastleModel.CastleModel.userData.isInAlliance;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.bottomMenu.component_Chat.btn_linkToAlliance);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.bottomMenu.component_Chat.btn_linkToAlliance, __dep_export_CastleModel.CastleModel.userData.userXP >= __dep_exact_26a421b704832cff.AllianceConst.MIN_XP);
  };
  CastleFightDialog.prototype.onSpecialEventChange = function (__s94param0) {
    this.refreshElements();
    this._advancedFightScreenHelper.handle(null);
  };
  CastleFightDialog.prototype.onKingdomUpdates = function (__s96param0) {
    if (this._fightScreenVO && (!__dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(this._fightScreenVO.sourceArea.kingdomID) || this.targetArea && !__dep_export_CastleModel.CastleModel.kingdomData.isKingdomUnlocked(this.targetArea.kingdomID))) {
      this.hide();
    }
  };
  CastleFightDialog.prototype.onAllianceStatusChanged = function (__s99param0) {
    if (__dep_export_CastleModel.CastleModel.userData.allianceID < 0) {
      this._chatComponent.clearInputText();
    }
  };
  CastleFightDialog.prototype.onShowDialog = function (__s102param0) {
    this.removeDragItem();
  };
  CastleFightDialog.prototype.onSelectedLordChanged = function (__s104param0 = null) {
    this.updateSelectedLord();
    this.updateSpyInfo();
    this.updateLordPickerTooltip();
  };
  CastleFightDialog.prototype.updateSelectedLord = function () {
    if (this._lordPicker && this._lordPicker.selectedLord) {
      var __s106local0 = __dep_export_ClientConstUtils.ClientConstUtils.getClassFromObject(this._lordPicker.selectedLord);
      this._selectedLord = new __s106local0();
      this._selectedLord.copyFromLord(this._lordPicker.selectedLord);
      if (this._fightScreenVO.additionalEffects) {
        this._selectedLord.areaEffects = this._fightScreenVO.additionalEffects.effects;
      } else {
        this._selectedLord.areaEffects = [];
      }
    }
  };
  CastleFightDialog.prototype.onAutoFillCurrentWaveClicked = function () {};
  CastleFightDialog.prototype.onAutoFillAllWavesClicked = function () {};
  CastleFightDialog.prototype.onAutoFillClearClicked = function () {};
  CastleFightDialog.prototype.hideLoaded = function (__s117param0 = null) {
    if (this.attackHorn) {
      this.attackHorn.dispose();
    }
    this.autoFill.onFillCurrentWaveButtonClicked.remove(this.bindFunction(this.onAutoFillCurrentWaveClicked));
    this.autoFill.onFillAllWavesButtonClicked.remove(this.bindFunction(this.onAutoFillAllWavesClicked));
    this.autoFill.onClearButtonClicked.remove(this.bindFunction(this.onAutoFillClearClicked));
    this.autoFill.onHide();
    this.layoutManager.hideDialog(__dep_export_CastleAttackAddUnitsDialog.CastleAttackAddUnitsDialog);
    if (this._fightDetailView) {
      this._fightDetailView.selectedTarget = null;
      this._fightDetailView.clearView();
      if (this.castleLayer && this.castleLayer.contains(this._fightDetailView.castleLayer)) {
        this.castleLayer.removeChild(this._fightDetailView.castleLayer);
      }
    }
    if (this._chatComponent) {
      this._chatComponent.onHide();
    }
    if (this._toolsLimitComponent) {
      this._toolsLimitComponent.onHide();
    }
    if (this._paymentComponent) {
      this._paymentComponent.destroy();
    }
    if (this._selectedItemMc) {
      this.layoutManager.nativeCursor.stopDrag(this._selectedItemMc);
    }
    if (this._lordTooltipTrigger) {
      this._lordTooltipTrigger.hide();
    }
    this._advancedFightScreenHelper.hide();
    this._currentShopCategory = -1;
    this._slotUnderMouse = null;
    __s1param0.prototype.hideLoaded.call(this, __s117param0);
  };
  CastleFightDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this.unitInfo.removeEventListener(__dep_export_CastleInventoryComponentEvent.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onClickUnitItem));
    this.castleLayer.removeEventListener(__s0local2.MOUSE_OUT, this.bindFunction(this.onMouseOutOfCastle));
    if (this._lordPicker) {
      this._lordPicker.removeEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onSelectedLordChanged));
    }
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
    this.controller.removeEventListener(__dep_export_CastleFightDataEvent.CastleFightDataEvent.NEW_TOOL_BOUGHT, this.bindFunction(this.onNewToolBought));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onChangeCurrency));
    this.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onShowDialog));
    __dep_export_CastleModel.CastleModel.kingdomData.removeEventListener(__dep_export_CastleKingdomEvent.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomUpdates));
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleChatEvent.CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED, this.bindFunction(this.onNewChatMessage));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onSpecialEventChange));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventChange));
  };
  CastleFightDialog.prototype.onNewChatMessage = function (__s130param0) {
    if (!this.bottomMenu.component_Chat.visible) {
      this.bottomMenu.btn_chat.icon.gotoAndStop(2);
    }
  };
  CastleFightDialog.prototype.onMouseOut = function (__s133param0) {
    __s1param0.prototype.onMouseOut.call(this, __s133param0);
    this.resetSlotVisuals();
    if (this._selectedDragUnit) {
      this.checkForFittingSlots(this._selectedDragUnit);
    }
  };
  CastleFightDialog.prototype.onMouseOver = function (__s136param0) {
    __s1param0.prototype.onMouseOver.call(this, __s136param0);
    if (this._fightDetailView && (this.isFrontLayer(__s136param0) || this.isKeepLayer(__s136param0) || this.isRightFlankLayer(__s136param0) || this.isLeftFlankLayer(__s136param0) || this.isMiddleFlankLayer(__s136param0) || this.isMoatLayer(__s136param0))) {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    }
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s136param0.target, "FightScreenSlotContainer") || __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s136param0.target, "AttackSlotContainer")) {
      this._slotUnderMouse = __s136param0.target;
      var __s136local0 = __s136param0.target.itemVO;
      var __s136local1 = __s136param0.target.itemContainer;
      if (this._selectedDragUnit) {
        if (!this._selectedDragUnit.isToolForSlotType(__s136local0.slotType) && !__s136local1.isFull && !__s136local1.exceedsSupportToolSlotLimit(__s136local0, this._selectedDragUnit)) {
          if (this._slotUnderMouse.mc_bg) {
            this._slotUnderMouse.mc_bg.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_FIGHT_SLOT_UNAVAILABLE, false);
          } else {
            this._slotUnderMouse.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_FIGHT_SLOT_UNAVAILABLE, false);
          }
        }
      } else if (!__s136local0.isFree()) {
        this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
        this._slotUnderMouse.scaleX = this._slotUnderMouse.scaleY = 1.1;
      }
    }
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s136param0.target.parent, "FightScreenInventory_Item")) {
      var __s136local2 = __s136param0.target.parent.unitVO;
      this.bottomMenu.itemSelection.mc_unitToolTip.visible = true;
      this.bottomMenu.itemSelection.mc_unitToolTip.x = __s136param0.target.parent.x;
      this.textFieldManager.registerTextField(this.bottomMenu.itemSelection.mc_unitToolTip.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s136local2.getNameString())).autoFitToBounds = true;
      this.textFieldManager.registerTextField(this.bottomMenu.itemSelection.mc_unitToolTip.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s136local2.getShortInfoString())).autoFitToBounds = true;
      if (__s136local2.isAuxiliary) {
        this.textFieldManager.registerTextField(this.bottomMenu.itemSelection.mc_unitToolTip.txt_status, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("auxiliaries"));
      } else {
        this.textFieldManager.registerTextField(this.bottomMenu.itemSelection.mc_unitToolTip.txt_status, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
      }
      this.bottomMenu.itemSelection.mc_unitToolTip.mouseChildren = false;
      this.bottomMenu.itemSelection.mc_unitToolTip.mouseEnabled = false;
    } else if (__s136param0.target != this.bottomMenu.itemSelection.mc_unitToolTip) {
      this.bottomMenu.itemSelection.mc_unitToolTip.visible = false;
    }
  };
  CastleFightDialog.prototype.isMoatLayer = function (__s149param0) {
    return __s149param0.target == this._fightDetailView.layerMoat && this.hasMoatLayerAction;
  };
  CastleFightDialog.prototype.isMiddleFlankLayer = function (__s151param0) {
    return __s151param0.target == this._fightDetailView.layerMiddle && this.hasMiddleFlankLayerAction;
  };
  CastleFightDialog.prototype.isLeftFlankLayer = function (__s153param0) {
    return __s153param0.target == this._fightDetailView.layerLeft && this.hasLeftFlankLayerAction;
  };
  CastleFightDialog.prototype.isRightFlankLayer = function (__s155param0) {
    return __s155param0.target == this._fightDetailView.layerRight && this.hasRightFlankLayerAction;
  };
  CastleFightDialog.prototype.isKeepLayer = function (__s157param0) {
    return __s157param0.target == this._fightDetailView.layerKeep && this.hasKeepLayerAction;
  };
  CastleFightDialog.prototype.isFrontLayer = function (__s159param0) {
    return __s159param0.target == this._fightDetailView.layerFront && this.hasFrontLayerAction;
  };
  Object.defineProperty(CastleFightDialog.prototype, "hasMoatLayerAction", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "hasMiddleFlankLayerAction", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "hasLeftFlankLayerAction", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "hasRightFlankLayerAction", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "hasKeepLayerAction", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "hasFrontLayerAction", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightDialog.prototype.onMouseDown = function (__s173param0) {
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s173param0.target.parent, "FightScreenInventory_Item")) {
      var __s173local0 = __s173param0.target.parent;
      switch (__s173local0) {
        case this.bottomMenu.itemSelection.i0:
        case this.bottomMenu.itemSelection.i1:
        case this.bottomMenu.itemSelection.i2:
        case this.bottomMenu.itemSelection.i3:
        case this.bottomMenu.itemSelection.i4:
        case this.bottomMenu.itemSelection.i5:
        case this.bottomMenu.itemSelection.i6:
        case this.bottomMenu.itemSelection.i7:
          var __s173local1 = __s173local0.unitVO;
          this.bottomMenu.itemSelection.mc_unitToolTip.visible = false;
          if (this._selectedDragUnit) {
            if (__s173local1.wodId == this._selectedDragUnit.wodId) {
              this.onResetDragItem();
              this.removeDragItem();
            } else if (__s173local0.unitVO.inventoryAmount > 0) {
              this.addDragItem(__s173local1);
            }
            this._advancedFightScreenHelper.handle(__s173local0);
            this.updateContainer();
          } else if (__s173local0.unitVO.inventoryAmount > 0) {
            this.addDragItem(__s173local0.unitVO);
            this._advancedFightScreenHelper.handle(__s173local0);
            this.updateContainer();
          }
          if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s173param0) && this._selectedDragUnit) {
            this.checkForFittingSlots(this._selectedDragUnit);
            this.layoutManager.nativeCursor.draggedItemVisible = false;
          }
      }
    }
  };
  CastleFightDialog.prototype.resetSlotVisuals = function () {
    if (this._slotUnderMouse && this._slotUnderMouse.stage) {
      this.initContainer(this._slotUnderMouse);
      this._slotUnderMouse = null;
    }
  };
  CastleFightDialog.prototype.addDragItem = function (__s185param0) {
    this.removeDragItem();
    this._selectedDragUnit = __s185param0;
    this._selectedItemMc = __dep_export_WodPicHelper.WodPicHelper.addPlayerUnitPic(this._selectedDragUnit, null, CastleFightDialog.MAX_WIDTH, CastleFightDialog.MAX_HEIGHT);
    this.layoutManager.nativeCursor.startDrag(this._selectedItemMc);
    this.checkForFittingSlots(__s185param0);
    this._fightDetailView.castleLayer.mouseEnabled = false;
  };
  CastleFightDialog.prototype.updateContainer = function () {};
  CastleFightDialog.prototype.removeDragItem = function () {
    if (this._selectedItemMc) {
      this.layoutManager.nativeCursor.stopDrag(this._selectedItemMc);
      this._selectedItemMc = null;
      this._selectedDragUnit = null;
      this.clearSlotMarks();
      this._fightDetailView.castleLayer.mouseEnabled = true;
    }
  };
  CastleFightDialog.prototype.initContainer = function (__s192param0) {
    __s192param0.changeTextFieldCacheScale(2);
  };
  CastleFightDialog.prototype.positionContainer = function (__s194param0, __s194param1, __s194param2, __s194param3, __s194param4 = 0, __s194param5 = 0) {
    __s194param0.x = __s194param2 % __s194param1 * __s194param3 + __s194param4;
    var __s194local0 = Math.floor(__s194param2 / __s194param1);
    __s194param0.y = __s194local0 * __s194param3 + __s194param5;
  };
  CastleFightDialog.prototype.clearSlotMarks = function () {
    if (this._allContainerOnScreen != null) {
      for (var __s196local0 = 0, __s196local1 = this._allContainerOnScreen; __s196local0 < __s196local1.length; __s196local0++) {
        var __s196local2 = __s196local1[__s196local0];
        if (__s196local2 !== undefined) {
          this.initContainer(__s196local2);
        }
      }
    }
  };
  CastleFightDialog.prototype.checkForFittingSlots = function (__s202param0) {
    if (this._allContainerOnScreen != null) {
      for (var __s202local0 = 0, __s202local1 = this._allContainerOnScreen; __s202local0 < __s202local1.length; __s202local0++) {
        var __s202local2 = __s202local1[__s202local0];
        if (__s202local2 !== undefined) {
          var __s202local3 = __s202local2.itemContainer;
          var __s202local4 = __s202local2.itemVO;
          var __s202local5 = __s202local3.isFull || __s202local3.exceedsSupportToolSlotLimit(__s202local4, __s202param0);
          if ((__s202local4.isFree() || __s202local4.isSameType(this._selectedDragUnit)) && __s202param0.isToolForSlotType(__s202local4.slotType) && !__s202local5) {
            __s202local2.alpha = 1;
            __s202local2.content.mc_unit.alpha = 1;
          } else {
            __s202local2.content.mc_unit.alpha = 0.3;
          }
          if (__s202param0.isToolForSlotType(__s202local4.slotType) && !__s202local5) {
            if (__s202local2.mc_bg) {
              __s202local2.mc_bg.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_FIGHT_SLOT_AVAILABLE, false);
            } else {
              __s202local2.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_FIGHT_SLOT_AVAILABLE, false);
            }
          }
        }
      }
    }
  };
  CastleFightDialog.prototype.onMouseUp = function (__s213param0) {
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s213param0) && this._selectedDragUnit) {
      __s213param0.target = __s213param0.target.stage.getObjectUnderPoint(__s213param0.stageX, __s213param0.stageY, 1);
    }
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s213param0.target, "FightScreenSlotContainer") || __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s213param0.target, "AttackSlotContainer")) {
      var __s213local0;
      var __s213local1 = __s213param0.target.itemContainer;
      var __s213local2 = __s213param0.target.itemVO;
      if (this._selectedDragUnit) {
        if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(this._selectedDragUnit, "ToolUnitVO") && this._selectedDragUnit.hasLimitedAmountPerWave && this.isMaxAmountPerWaveReached(this._selectedDragUnit)) {
          return;
        }
        if (this._selectedDragUnit.isToolForSlotType(__s213local2.slotType)) {
          if (!__s213local2.isFree() || __s213local1.isFull || __s213local1.exceedsSupportToolSlotLimit(__s213local2, this._selectedDragUnit)) {
            if (__s213local2.isSameType(this._selectedDragUnit)) {
              if (!(__s213local0 = this._unitMixedInventory.getUnit(__s213local2.unitVO.wodId))) {
                __s213local0 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s213local2.unitVO.wodId, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
              }
              this.editUnitSlot(__s213local0, __s213local1, __s213local2);
            } else if (!__s213local2.isFree() && !__s213local1.exceedsSupportToolSlotLimit(__s213local2, this._selectedDragUnit)) {
              this.onUnitFitsSlot(__s213local2, __s213local1);
            }
          } else {
            this.onUnitFitsSlot(__s213local2, __s213local1);
          }
        }
      } else {
        if (!__s213local2.isFree()) {
          if (!(__s213local0 = this._unitMixedInventory.getUnit(__s213local2.unitVO.wodId))) {
            __s213local0 = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s213local2.unitVO.wodId, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
          }
          if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(this, "CastleDefenceDialog") && __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s213param0.target, "FightScreenSlotContainer") && castAs(this, "CastleDefenceDialog").getDefenceCategory() != __dep_export_ClientConstCastle.ClientConstCastle.DEFENCE_CATEGORY_WALL) {
            this.editUnitSlot(__s213local0, __s213local1, __s213local2);
          }
        }
        this._advancedFightScreenHelper.handle(__s213param0.target);
      }
      this.onResetDragItem();
      this.removeDragItem();
      this.updateContainer();
      this.dispatchSlotClickedEvent();
    } else if (!__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s213param0.target.parent, "FightScreenInventory_Item")) {
      this._advancedFightScreenHelper.handle(__s213param0.target);
      this.onResetDragItem();
      this.removeDragItem();
      this.updateContainer();
      this.onResetDragItem();
      this.dispatchSlotClickedEvent();
    }
  };
  CastleFightDialog.prototype.dispatchSlotClickedEvent = function () {};
  CastleFightDialog.prototype.isMaxAmountPerWaveReached = function (__s232param0) {
    return false;
  };
  CastleFightDialog.prototype.editUnitSlot = function (__s234param0, __s234param1, __s234param2) {};
  CastleFightDialog.prototype.onUnitFitsSlot = function (__s236param0, __s236param1) {};
  CastleFightDialog.prototype.onResetDragItem = function () {};
  CastleFightDialog.prototype.changeItemAmount = function (__s240param0, __s240param1, __s240param2) {
    var __s240local0 = 0;
    if (__s240param1.unitVO) {
      if (!__s240param1.isSameType(__s240param0)) {
        this.changeItemAmount(__s240param1.unitVO, __s240param1, 0);
        this.changeItemAmount(__s240param0, __s240param1, __s240param2);
        return;
      }
      if (__s240param2 != __s240param1.unitVO.inventoryAmount) {
        __s240local0 = __dep_exact_f855840627e6e145.int(__s240param1.unitVO.inventoryAmount - __s240param2);
      }
    } else {
      __s240local0 = -__s240param2;
      __s240param1.unitVO = __dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s240param0.wodId, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT);
    }
    if (__s240param2 == 0) {
      __s240param1.unitVO = null;
    } else {
      __s240param1.unitVO.inventoryAmount = __s240param2;
    }
    __s240param1.outline = __dep_exact_f855840627e6e145.int(__dep_export_CastleFightItemVO.CastleFightItemVO.OUTLINE_NONE);
    this._unitMixedInventory.changeUnitAmount(__s240param0.wodId, __s240local0);
    this.handleRefresh();
    this._userHasMadeChanges = true;
  };
  CastleFightDialog.prototype.handleRefresh = function () {
    if (!this._preventRefresh) {
      if (__dep_export_CachedTimer.CachedTimer.getCachedTimer() - this._lastRefreshTimeStamp < 300) {
        this._preventRefresh = true;
        window.setTimeout(this.bindFunction(this.refreshElements), Math.max(0, 300 - (__dep_export_CachedTimer.CachedTimer.getCachedTimer() - this._lastRefreshTimeStamp)));
      } else {
        this.refreshElements();
      }
    }
  };
  CastleFightDialog.prototype.refreshElements = function () {
    this._preventRefresh = false;
    this._lastRefreshTimeStamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
  };
  CastleFightDialog.prototype.onClick = function (__s255param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s255param0.target)) {
      __s1param0.prototype.onClick.call(this, __s255param0);
      if (__s255param0.target instanceof __s0local1 && __s255param0.target.statusIcon) {
        __s255param0.target.statusIcon.onClick();
      }
      switch (__s255param0.target) {
        case this.userInfoMenu.btn_payment:
          this._paymentComponent.onClickButton(__dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SOURCE_FIGHTSCREEN, __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_FIGHTSCREEN);
          break;
        case this.bottomMenu.itemSelection.btn_leftArrow:
        case this.bottomMenu.itemSelection.btn_rightArrow:
          this.onClickShopArrow(__s255param0);
          break;
        case this.bottomMenu.btn_close:
          this.closeScreen();
          break;
        case this.bottomMenu.btn_chat:
          this.bottomMenu.btn_chat.icon.gotoAndStop(1);
          this.showChat();
          break;
        case this.bottomMenu.btn_toolLimit:
          this.showToolsLimit();
          break;
        case this.bottomMenu.btn_tactics:
          this.showTactics();
          break;
        case this.bottomMenu.btn_cat_keep:
          this.setShopCategory(__dep_exact_26a421b704832cff_1.DefenseConst.TOOL_TYPE_KEEP);
          break;
        case this.bottomMenu.btn_cat_wall:
          this.setShopCategory(__dep_exact_26a421b704832cff_1.DefenseConst.TOOL_TYPE_WALL);
          break;
        case this.bottomMenu.btn_cat_gate:
          this.setShopCategory(__dep_exact_26a421b704832cff_1.DefenseConst.TOOL_TYPE_GATE);
          break;
        case this.bottomMenu.btn_cat_field:
          this.setShopCategory(__dep_exact_26a421b704832cff_1.DefenseConst.TOOL_TYPE_FIELD);
          break;
        case this.bottomMenu.btn_cat_moat:
          this.setShopCategory(__dep_exact_26a421b704832cff_1.DefenseConst.TOOL_TYPE_MOAT);
          break;
        case this.bottomMenu.btn_cat_tools:
          this.setShopCategory(CastleFightDialog.SHOP_CATEGORY_TOOLS);
          break;
        case this.bottomMenu.btn_cat_units_att:
          this.setShopCategory(CastleFightDialog.SHOP_CATEGORY_UNITS_ATT);
          break;
        case this.bottomMenu.btn_cat_units_def:
          this.setShopCategory(CastleFightDialog.SHOP_CATEGORY_UNITS_DEF);
          break;
        case this.bottomMenu.itemSelection.i0.btn_instantBuy:
        case this.bottomMenu.itemSelection.i1.btn_instantBuy:
        case this.bottomMenu.itemSelection.i2.btn_instantBuy:
        case this.bottomMenu.itemSelection.i3.btn_instantBuy:
        case this.bottomMenu.itemSelection.i4.btn_instantBuy:
        case this.bottomMenu.itemSelection.i5.btn_instantBuy:
        case this.bottomMenu.itemSelection.i6.btn_instantBuy:
        case this.bottomMenu.itemSelection.i7.btn_instantBuy:
          this.showInstantBuyDialog(__s255param0.target.parent.unitVO);
          break;
        case this.bottomMenu.btn_info0:
        case this.bottomMenu.btn_info1:
        case this.bottomMenu.btn_info2:
        case this.bottomMenu.btn_info3:
        case this.bottomMenu.btn_info4:
        case this.bottomMenu.btn_info5:
        case this.bottomMenu.btn_info6:
        case this.bottomMenu.btn_info7:
          if (this.isOutOfTutorial()) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(__s255param0.target.property));
          }
          break;
        case this.bottomMenu.component_Chat.btn_linkToAlliance:
          if (__dep_export_CastleModel.CastleModel.userData.userXP >= __dep_exact_26a421b704832cff.AllianceConst.MIN_XP) {
            __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceTeaserDialog.CastleAllianceTeaserDialog, new __dep_export_CastleStartAllianceDialogProperties.CastleStartAllianceDialogProperties(this.bindFunction(this.hide)));
          }
      }
    }
  };
  CastleFightDialog.prototype.showInstantBuyDialog = function (__s262param0) {};
  CastleFightDialog.prototype.setShopCategory = function (__s264param0) {
    if (__s264param0 != this._currentShopCategory) {
      this._currentShopCategory = __s264param0;
      this._shopCurrentPage = 0;
      this.fillShopItemsByGroup();
      this.initButtons();
    }
  };
  CastleFightDialog.prototype.updateSpyInfo = function () {
    if (this.unitInfo.visible && this.unitInfo.cachedData) {
      var __s267local0 = this._fightDetailView.selectedTarget;
      this._fightDetailView.selectedTarget = null;
      this.showSpyInfo(this.unitInfo.cachedData.unitInv, this.unitInfo.cachedData.title, this.unitInfo.cachedData.swamb, this.unitInfo.cachedData.sgb, false, this.unitInfo.cachedData.isYard, false);
      this._fightDetailView.selectedTarget = __s267local0;
    }
  };
  CastleFightDialog.prototype.showSpyInfo = function (__s270param0, __s270param1, __s270param2 = true, __s270param3 = false, __s270param4 = false, __s270param5 = false, __s270param6 = true) {
    if (this.isOutOfTutorial()) {
      if (!this._fightDetailView.selectedTarget) {
        if (__s270param6 && this._fightScreenVO.spyInfo.itemsSupport) {
          var __s270local0 = new __dep_export_UnitInventoryList.UnitInventoryList();
          __s270local0.addAll(__s270param0.getUnits(null));
          __s270local0.addAll(this._fightScreenVO.spyInfo.itemsSupport.getUnits(null));
          __s270param0 = __s270local0;
        }
        this.unitInfo.cachedData = {
          unitInv: __s270param0,
          title: __s270param1,
          swamb: __s270param2,
          sgb: __s270param3,
          isYard: __s270param5
        };
        this.setAttackSpyInfoTXT("");
        if (this._fightScreenVO.spyInfo.remainingSpyInfoTime <= 0) {
          __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(this.unitInfo.mc_unitHolder);
          this.textFieldManager.registerTextField(this.unitInfo.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_attack_noSpyinfos"));
          this.unitInfo.visible = true;
          this.unitInfo.btn_leftArrow.visible = false;
          this.unitInfo.btn_rightArrow.visible = false;
          this.setAttackSpyInfoTXT("dialog_attack_noSpyHelp");
        } else {
          var __s270local1 = __dep_exact_9e901e8e2483a22f_5.TimeStringHelper.getTimeToString(this._fightScreenVO.spyInfo.spyInfoAgeInSeconds, __dep_exact_9e901e8e2483a22f_5.TimeStringHelper.ONE_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
          var __s270local2 = __dep_exact_81dacdf05bd32292_2.instanceOfClass(this._fightDetailView, "EventTreasurmapDetailView") || this._fightScreenVO.spyInfo.spyInfoAgeInSeconds < 1 ? "" : " (" + __dep_exact_92d05af59ee2ff30.Localize.text("ago", [__s270local1]) + ")";
          if (__s270param0) {
            this.showInventoryInfo(__s270param0.getUnits(null), this.targetArea, this._fightScreenVO.targetOwner, __s270param1 + __s270local2, __s270param2, __s270param3, __s270param4, __s270param5);
          }
        }
      }
    } else {
      this.unitInfo.visible = false;
    }
  };
  CastleFightDialog.prototype.setAttackSpyInfoTXT = function (__s279param0 = null) {
    var __s279local0 = this.unitInfo.mc_unitHolder.getBounds(this.unitInfo.mc_unitHolder.parent);
    if (__s279param0 != null) {
      this.unitInfo.txt_help_dynamic.text = __dep_exact_92d05af59ee2ff30.Localize.text(__s279param0);
    }
    if (this.unitInfo.mc_unitHolder.width == 0) {
      this.unitInfo.txt_help_dynamic.x = this._originalSpyInfoHelpTextPosX;
    } else {
      this.unitInfo.txt_help_dynamic.x = __s279local0.x + __s279local0.width + 10;
    }
    var __s279local1 = this._originalSpyInfoHelpTextWidth - __s279local0.width;
    if (__s279local1 > 0) {
      this.unitInfo.txt_help_dynamic.width = __s279local1;
    }
  };
  CastleFightDialog.prototype.showInventoryInfo = function (__s285param0, __s285param1, __s285param2, __s285param3, __s285param4 = true, __s285param5 = false, __s285param6 = false, __s285param7 = false) {
    if (this.unitInfo.property && __dep_exact_81dacdf05bd32292_2.instanceOfClass(this.unitInfo.property, "CastleInventoryComponent")) {
      this.unitInfo.removeEventListener(__dep_export_CastleInventoryComponentEvent.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onClickUnitItem));
      this.unitInfo.property.destroy();
    }
    __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(this.unitInfo.mc_unitHolder);
    if (__s285param0) {
      this.textFieldManager.registerTextField(this.unitInfo.txt_title, new __dep_exact_92d05af59ee2ff30_3.TextVO(__s285param3));
      var __s285local0 = [];
      var __s285local1 = [];
      for (var __s285local2 = 0; __s285local2 < __s285param0.length; ++__s285local2) {
        if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s285param0[__s285local2], "ToolUnitVO") && __s285param0[__s285local2].numberofDolls <= 0) {
          __s285local0.push(__s285param0[__s285local2]);
          if (__s285param0[__s285local2].isSupportTool && __s285param7) {
            __s285local1.push(__s285param0[__s285local2]);
          }
        } else {
          __s285local1.push(__s285param0[__s285local2]);
        }
      }
      var __s285local3 = this.calculateToolsInfo(__s285local0, __s285param1.baseGateBonus, __s285param1.baseMoatBonus, __s285param1.baseWallBonus, __s285param4, __s285param5, __s285param6, __s285param7);
      this.unitInfo.property = new __dep_export_CastleInventoryComponent.CastleInventoryComponent(this.unitInfo, 9, __s285local3.concat(__s285local1), Library.CastleInterfaceElements.CastleAttackSpyInfoContainer_T, 35, 35, true, __s285param2.crest, 0, 5, 15, new __s0local0(10, 25), false, false);
      if (__s285local1.length > 0) {
        this.setAttackSpyInfoTXT("");
      } else {
        this.setAttackSpyInfoTXT("dialog_defense_noUnitHelp");
      }
      this.unitInfo.addEventListener(__dep_export_CastleInventoryComponentEvent.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onClickUnitItem));
      this.unitInfo.visible = true;
    }
  };
  CastleFightDialog.prototype.onClickUnitItem = function (__s296param0) {
    if (__s296param0.unitVO.wodId > 0) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(__s296param0.unitVO, __s296param0.crestVO));
    }
  };
  CastleFightDialog.prototype.calculateToolsInfo = function (__s299param0, __s299param1 = 0, __s299param2 = 0, __s299param3 = 0, __s299param4 = true, __s299param5 = false, __s299param6 = false, __s299param7 = false) {
    var __s299local0;
    var __s299local1 = this.getDefendingLord();
    var __s299local2 = this.getDefendingLegendSkillIDs();
    var __s299local3 = new Map();
    var __s299local4 = [];
    var __s299local5 = true;
    var __s299local6 = true;
    var __s299local7 = __s299param1 * 0.01;
    var __s299local8 = 0;
    var __s299local9 = __s299param2 * 0.01;
    var __s299local10 = 0;
    var __s299local11 = __s299param3 * 0.01;
    if (__s299param0 != null) {
      for (var __s299local12 = 0, __s299local13 = __s299param0; __s299local12 < __s299local13.length; __s299local12++) {
        var __s299local14 = __s299local13[__s299local12];
        if (__s299local14 !== undefined) {
          __s299local7 += __s299local14.gateBonus;
          __s299local9 += __s299local14.moatBonus;
          __s299local11 += __s299local14.wallBonus;
          __s299local10 += __s299local14.defRangeBonus;
          __s299local8 += __s299local14.defMeleeBonus;
          var __s299local15 = __s299local14.getBonusByEffect(__dep_export_ToolEffectType.ToolEffectType.DEFENSE_BONUS);
          __s299local10 += __s299local15;
          __s299local8 += __s299local15;
          if (__s299param7) {
            var __s299local16 = __s299local14.getBonusByEffect(__dep_export_ToolEffectType.ToolEffectType.DEFENSE_BOOST_YARD);
            __s299local10 += __s299local16;
            __s299local8 += __s299local16;
          }
        }
      }
    }
    if (__s299local1) {
      if (this._fightScreenVO) {
        __s299local11 += __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s299local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_WALL_BONUS, this.targetArea.areaType).strength / 100;
        __s299local7 += __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s299local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_GATE_BONUS, this.targetArea.areaType).strength / 100;
        __s299local9 += __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s299local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MOAT_BONUS, this.targetArea.areaType).strength / 100;
      }
      var __s299local17 = __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s299local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MELEE_BONUS, this.targetArea.areaType).strength;
      var __s299local18 = __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s299local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_RANGE_BONUS, this.targetArea.areaType).strength;
      var __s299local19 = __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s299local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BONUS, this.targetArea.areaType).strength;
      var __s299local20 = __s299param7 ? __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s299local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_YARD, this.targetArea.areaType).strength : 0;
      var __s299local21 = __s299param5 ? __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s299local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_FRONT, this.targetArea.areaType).strength : 0;
      var __s299local22 = !__s299param5 && __s299param4 ? __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s299local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_BOOST_FLANK, this.targetArea.areaType).strength : 0;
      __s299local8 += (__s299local17 + __s299local19 + __s299local20 + __s299local21 + __s299local22) / 100;
      __s299local10 += (__s299local18 + __s299local19 + __s299local20 + __s299local21 + __s299local22) / 100;
      if (__s299local17 > 0) {
        __s299local5 = true;
      }
      if (__s299local18 > 0) {
        __s299local6 = true;
      }
    }
    if (__s299local2 && __s299local2.length > 0) {
      if (__s299local2 != null) {
        for (var __s299local23 = 0, __s299local24 = __s299local2; __s299local23 < __s299local24.length; __s299local23++) {
          var __s299local25 = __s299local24[__s299local23];
          if (__s299local25 !== undefined) {
            __s299local0 = __dep_export_CastleModel.CastleModel.legendSkillData.getSkillByID(__s299local25);
            __s299local3.get(__s299local0.effectType);
            __s299local3.set(__s299local0.effectType, __s299local0.totalEffectValue / 100);
          }
        }
      }
      if (this._fightScreenVO) {
        __s299local11 += __s299local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.WALL_BONUS) ? __s299local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.WALL_BONUS) : 0;
        __s299local7 += __s299local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.GATE_BONUS) ? __s299local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.GATE_BONUS) : 0;
        __s299local9 += __s299local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.MOAT_BONUS) ? __s299local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.MOAT_BONUS) : 0;
      }
      __s299local8 += __s299local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.DEFENSE_MELEE_BONUS) ? __s299local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.DEFENSE_MELEE_BONUS) : 0;
      __s299local10 += __s299local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.DEFENSE_RANGE_BONUS) ? __s299local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.DEFENSE_RANGE_BONUS) : 0;
      __s299local8 += __s299local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.DEFENSE_BONUS) ? __s299local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.DEFENSE_BONUS) : 0;
      __s299local10 += __s299local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.DEFENSE_BONUS) ? __s299local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.DEFENSE_BONUS) : 0;
      if (__s299local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.DEFENSE_MELEE_BONUS) > 0) {
        __s299local5 = true;
      }
      if (__s299local3.get(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.DEFENSE_RANGE_BONUS) > 0) {
        __s299local6 = true;
      }
    }
    if (this._fightScreenVO && this._fightScreenVO.targetOwnerLevel >= __dep_exact_26a421b704832cff_2.PlayerConst.LEVEL_CAP && (!__dep_export_PlayerHelper.PlayerHelper.isNPCPlayer(this._fightScreenVO.targetOwner.playerID) || __dep_export_PlayerHelper.PlayerHelper.isNpcPvpPlayer(this._fightScreenVO.targetOwner.playerID))) {
      if (!__dep_exact_81dacdf05bd32292_2.instanceOfClass(this._fightScreenVO, "CastleSupportDefenceVO")) {
        __s299local11 -= __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.WALL_REDUCTION) / 100;
        __s299local7 -= __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.GATE_REDUCTION) / 100;
        __s299local9 -= __dep_export_CastleModel.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(__dep_export_CastleLegendSkillEffectsEnum.CastleLegendSkillEffectsEnum.MOAT_REDUCTION) / 100;
      }
    }
    var __s299local26 = this.getSelectedLordVO();
    if (__s299local26 && !__s299param6) {
      __s299local1 = __s299local26;
      __s299local7 = Math.max(__s299local7 - __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s299local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_GATE_REDUCTION, this.targetArea.areaType).strength / 100, 0);
      __s299local9 = Math.max(__s299local9 - __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s299local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MOAT_REDUCTION, this.targetArea.areaType).strength / 100, 0);
      __s299local11 = Math.max(__s299local11 - __dep_export_CastleEffectsHelper.CastleEffectsHelper.getAccumulatedEquipmentBonusByEffectTypeForArea(__s299local1, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_WALL_REDUCTION, this.targetArea.areaType).strength / 100, 0);
    }
    if (__s299param4 && (__s299local9 > 0 || this.targetArea.baseMoatBonus > 0)) {
      __s299local4.push(new __dep_export_EffectIconUnitVO.EffectIconUnitVO(__dep_export_ToolEffectType.ToolEffectType.MOAT_BONUS, Math.round(Math.max(__s299local9 * 100))));
    }
    if (__s299param5 && __s299param1 >= 0) {
      __s299local4.push(new __dep_export_EffectIconUnitVO.EffectIconUnitVO(__dep_export_ToolEffectType.ToolEffectType.GATE_BONUS, Math.round(__s299local7 * 100)));
    }
    if (__s299param4) {
      __s299local4.push(new __dep_export_EffectIconUnitVO.EffectIconUnitVO(__dep_export_ToolEffectType.ToolEffectType.WALL_BONUS, Math.round(__s299local11 * 100)));
    }
    if (__s299local5) {
      __s299local4.push(new __dep_export_EffectIconUnitVO.EffectIconUnitVO(__dep_export_ToolEffectType.ToolEffectType.DEF_MELEE_BONUS, Math.round(__s299local8 * 100 + 100)));
    }
    if (__s299local6) {
      __s299local4.push(new __dep_export_EffectIconUnitVO.EffectIconUnitVO(__dep_export_ToolEffectType.ToolEffectType.DEF_RANGE_BONUS, Math.round(__s299local10 * 100 + 100)));
    }
    return __s299local4;
  };
  CastleFightDialog.prototype.getSelectedLordVO = function () {
    if (this._lordPicker && this._lordPicker.selectedLord) {
      return this._selectedLord;
    } else {
      return null;
    }
  };
  CastleFightDialog.prototype.getDefendingLord = function () {
    return this._fightScreenVO.spyInfo.defendingLord;
  };
  CastleFightDialog.prototype.getDefendingLegendSkillIDs = function () {
    return this._fightScreenVO.spyInfo.defenderSkills;
  };
  CastleFightDialog.prototype.hideSpyInfo = function () {
    if (this.unitInfo) {
      this.unitInfo.visible = false;
    }
  };
  CastleFightDialog.prototype.initButtons = function () {
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.bottomMenu.btn_cat_keep, this._currentShopCategory == __dep_exact_26a421b704832cff_1.DefenseConst.TOOL_TYPE_KEEP);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.bottomMenu.btn_cat_wall, this._currentShopCategory == __dep_exact_26a421b704832cff_1.DefenseConst.TOOL_TYPE_WALL);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.bottomMenu.btn_cat_gate, this._currentShopCategory == __dep_exact_26a421b704832cff_1.DefenseConst.TOOL_TYPE_GATE);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.bottomMenu.btn_cat_field, this._currentShopCategory == __dep_exact_26a421b704832cff_1.DefenseConst.TOOL_TYPE_FIELD);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.bottomMenu.btn_cat_moat, this._currentShopCategory == __dep_exact_26a421b704832cff_1.DefenseConst.TOOL_TYPE_MOAT);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.bottomMenu.btn_cat_units_att, this._currentShopCategory == CastleFightDialog.SHOP_CATEGORY_UNITS_ATT);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.bottomMenu.btn_cat_units_def, this._currentShopCategory == CastleFightDialog.SHOP_CATEGORY_UNITS_DEF);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.bottomMenu.btn_cat_tools, this._currentShopCategory == CastleFightDialog.SHOP_CATEGORY_TOOLS);
  };
  CastleFightDialog.prototype.onClickShopArrow = function (__s339param0) {
    var __s339local0 = this._shopCurrentPage;
    if (__s339param0.target == this.bottomMenu.itemSelection.btn_leftArrow) {
      this._shopCurrentPage = __dep_exact_f855840627e6e145.int(Math.max(0, this._shopCurrentPage - 1));
    } else {
      this._shopCurrentPage = __dep_exact_f855840627e6e145.int(Math.min(this._shopMaxPage, this._shopCurrentPage + 1));
    }
    if (__s339local0 != this._shopCurrentPage) {
      this.fillShopItemsByGroup();
    }
  };
  CastleFightDialog.prototype.initShopArrows = function (__s344param0) {
    this._shopMaxPage = __dep_exact_f855840627e6e145.int((__s344param0 - 1) / CastleFightDialog.SHOP_ITEMS_PER_PAGE);
    this.bottomMenu.itemSelection.btn_rightArrow.visible = this._shopMaxPage > 0 && this._shopCurrentPage < this._shopMaxPage;
    this.bottomMenu.itemSelection.btn_leftArrow.visible = this._shopMaxPage > 0 && this._shopCurrentPage > 0;
  };
  CastleFightDialog.prototype.onMouseOutOfCastle = function (__s346param0) {
    if (!__s346param0.relatedTarget || !__s346param0.relatedTarget.isInContainer(this.unitInfo)) {
      if (__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s346param0.target, this.unitInfo)) {
        this._fightDetailView.removeGlow();
        if (!this._fightDetailView.selectedTarget) {
          this.hideSpyInfo();
        }
      }
      if (this._fightDetailView) {
        this._fightDetailView.removeGlow();
        if (!this._fightDetailView.selectedTarget) {
          this.hideSpyInfo();
        }
      }
    }
  };
  CastleFightDialog.prototype.fillShopItemsByGroup = function () {
    var __s353local0 = this.getFilteredArray(this._currentShopCategory);
    this.initShopArrows(__s353local0.length);
    this._shopCurrentPage = __dep_exact_f855840627e6e145.int(Math.min(this._shopCurrentPage, this._shopMaxPage));
    var __s353local1 = this._shopCurrentPage * CastleFightDialog.SHOP_ITEMS_PER_PAGE;
    for (var __s353local2 = 0; __s353local2 < CastleFightDialog.SHOP_ITEMS_PER_PAGE; __s353local2++) {
      var __s353local3 = this.bottomMenu.itemSelection["i" + __s353local2];
      var __s353local4 = this.bottomMenu["btn_info" + __s353local2];
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s353local4);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(__s353local4, this.isOutOfTutorial());
      if (__s353local1 < __s353local0.length) {
        __s353local3.mc_contentHolder.mouseChildren = false;
        __s353local3.mc_contentHolder.mouseEnabled = false;
        var __s353local5 = __s353local0[__s353local1];
        if (!__s353local3.unitVO || __s353local3.unitVO.wodId != __s353local5.wodId || __s353local3.unitVO.inventoryAmount != __s353local5.inventoryAmount || !this._lastKnownUserCrest.equals(__dep_export_CastleModel.CastleModel.userData.playerCrest) || !!this.forceShopRedraw) {
          __s353local3.unitVO = __s353local5;
          __s353local3.mc_bg.mouseChildren = false;
          __dep_export_WodPicHelper.WodPicHelper.setCorrectUnitBackgroundPic(__s353local5, __s353local3.mc_bg, Library.CastleInterfaceElements.FightScreenInventoryItemBackground, Library.CastleInterfaceElements.FightScreenInventoryItemBackground_Berimond);
          __dep_export_WodPicHelper.WodPicHelper.addPlayerUnitPicToContainer(__s353local5, __s353local3.mc_contentHolder, CastleFightDialog.SHOP_MAX_ITEM_WIDTH, CastleFightDialog.SHOP_MAX_ITEM_HEIGHT, CastleFightDialog.SHOP_MAX_ITEM_WIDTH, CastleFightDialog.SHOP_MAX_ITEM_HEIGHT, 22, new __s0local0(10, 10), true, __dep_export_WodPicHelperUnitFramePerfectCallbackWrapper.WodPicHelperUnitFramePerfectCallbackWrapper.callback(__s353local5, CastleFightDialog.SHOP_MAX_ITEM_WIDTH, CastleFightDialog.SHOP_MAX_ITEM_HEIGHT, true, false, 0, true));
        }
        this.textFieldManager.registerTextField(__s353local3.mc_contentHolder.txt_amount, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s353local5.inventoryAmount, {
          compactThreshold: 1000000
        }), new __dep_exact_9e901e8e2483a22f_3.InternalGGSTextFieldConfigVO(true));
        this.initInstantBuyButton(__s353local3.btn_instantBuy, __s353local5);
        __s353local3.mouseChildren = true;
        __s353local4.property = __s353local5;
        __s353local4.visible = true;
        __s353local3.visible = true;
      } else {
        __s353local3.visible = false;
        __s353local4.visible = false;
      }
      __s353local1++;
    }
    this._lastKnownUserCrest = __dep_export_CastleModel.CastleModel.userData.playerCrest.clone();
    this.forceShopRedraw = false;
    this.controller.dispatchEvent(new __dep_export_CastleDialogEvent.CastleDialogEvent(__dep_export_CastleDialogEvent.CastleDialogEvent.FIGHT_SCREEN_SHOP_FILLED));
  };
  CastleFightDialog.prototype.initInstantBuyButton = function (__s360param0, __s360param1) {
    __dep_export_FightScreenHelper.FightScreenHelper.initInstantBuyButton(__s360param0, __s360param1, this.sourceArea);
  };
  CastleFightDialog.prototype.getFilteredArray = function (__s362param0) {
    return null;
  };
  Object.defineProperty(CastleFightDialog.prototype, "sourceArea", {
    get: function () {
      if (this._fightScreenVO) {
        return this._fightScreenVO.sourceArea;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleFightDialog.prototype.getUnitWodInArray = function (__s368param0, __s368param1) {
    if (__s368param1 != null) {
      for (var __s368local0 = 0, __s368local1 = __s368param1; __s368local0 < __s368local1.length; __s368local0++) {
        var __s368local2 = __s368local1[__s368local0];
        if (__s368local2 !== undefined && __s368local2.wodId == __s368param0) {
          return __s368local2;
        }
      }
    }
    return null;
  };
  Object.defineProperty(CastleFightDialog.prototype, "castleadvancedTroopSelection", {
    get: function () {
      return this.advancedTroopSelection;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightDialog.prototype.closeScreen = function () {};
  CastleFightDialog.prototype.showChat = function () {
    this.bottomMenu.component_Chat.visible = true;
    this.bottomMenu.component_Options.visible = false;
    this.bottomMenu.component_ToolLimit.visible = false;
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.bottomMenu.btn_tactics, false);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.bottomMenu.btn_toolLimit, false);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.bottomMenu.btn_chat, true);
  };
  CastleFightDialog.prototype.showToolsLimit = function () {
    this.bottomMenu.component_ToolLimit.visible = true;
    this.bottomMenu.component_Options.visible = false;
    this.bottomMenu.component_Chat.visible = false;
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.bottomMenu.btn_tactics, false);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.bottomMenu.btn_chat, false);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.bottomMenu.btn_toolLimit, true);
  };
  CastleFightDialog.prototype.showTactics = function () {
    this.bottomMenu.component_Options.visible = true;
    this.bottomMenu.component_Chat.visible = false;
    this.bottomMenu.component_ToolLimit.visible = false;
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.bottomMenu.btn_chat, false);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.bottomMenu.btn_toolLimit, false);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.bottomMenu.btn_tactics, true);
  };
  Object.defineProperty(CastleFightDialog.prototype, "unitInfo", {
    get: function () {
      return this.disp.mc_unitInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "enemyInfoMenu", {
    get: function () {
      return this.disp.enemyInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "userInfoMenu", {
    get: function () {
      return this.disp.userInfo.nameAndCurrency;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "userLevelInfo", {
    get: function () {
      return this.disp.userInfo.levelInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "bottomMenu", {
    get: function () {
      return this.disp.bottomMenu;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "castleLayer", {
    get: function () {
      return this.disp.castleLayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "landscapeBG", {
    get: function () {
      return this.disp.mc_bg;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFightDialog.prototype, "targetArea", {
    get: function () {
      return this._fightScreenVO.targetArea;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightDialog.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var __s400local0 = 1;
      if (this.disp.stage.stageWidth < this.dispBounds.width || this.disp.stage.stageWidth > this.dispBounds.width) {
        __s400local0 = this.disp.stage.stageWidth / this.dispBounds.width;
      }
      if (this.disp.stage.stageHeight < this.dispBounds.height * __s400local0) {
        __s400local0 = this.disp.stage.stageHeight / this.dispBounds.height;
      }
      __s400local0 = Math.min(__s400local0, 1.5);
      this.disp.x = -this.dispBounds.left * __s400local0 - this.dispBounds.width * __s400local0 / 2 + this.disp.stage.stageWidth / 2;
      this.disp.y = -this.dispBounds.top * __s400local0 - this.dispBounds.height * __s400local0 / 2 + this.disp.stage.stageHeight / 2;
      this.disp.scaleX = this.disp.scaleY = __s400local0;
    }
  };
  CastleFightDialog.prototype.getShopItemHolderByUnit = function (__s405param0) {
    for (var __s405local0 = 0; __s405local0 < CastleFightDialog.SHOP_ITEMS_PER_PAGE; __s405local0++) {
      var __s405local1 = this.bottomMenu.itemSelection["i" + __s405local0];
      if (__s405local1.unitVO) {
        if (__s405local1.unitVO.wodId == __s405param0) {
          return __s405local1;
        }
      }
    }
    return null;
  };
  Object.defineProperty(CastleFightDialog.prototype, "curentShopCategory", {
    get: function () {
      return this._currentShopCategory;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightDialog.prototype.hidePresetPicker = function () {
    this.presetPickerMc.visible = false;
  };
  CastleFightDialog.prototype.updateLordPickerTooltip = function () {};
  Object.defineProperty(CastleFightDialog.prototype, "autoFill", {
    get: function () {
      return this._autoFill;
    },
    enumerable: true,
    configurable: true
  });
  CastleFightDialog.prototype.setTickEnablement = function () {
    this.disp.tickEnabled = false;
  };
  CastleFightDialog.prototype.showPlayerOrAllianceCrest = function (__s421param0, __s421param1, __s421param2) {
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s421param2, "ABGAllianceTowerMapobjectVO")) {
      if (!this._allianceCrestContainer) {
        this._allianceCrestContainer = new __s0local1();
        this.dialogDisp.addChildAt(this._allianceCrestContainer, this.dialogDisp.getChildIndex(__s421param0) + 1);
      }
      this._allianceCrestContainer.x = __s421param0.x;
      this._allianceCrestContainer.y = __s421param0.y;
      this._allianceCrestContainer.visible = true;
      __s421param0.visible = false;
      __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(this._allianceCrestContainer);
      __dep_export_CastleAllianceCrestHelper.CastleAllianceCrestHelper.setCrestGraphics(this._allianceCrestContainer, __s421param2.ownerInfo.allianceCrestVO, __dep_export_AllianceCrestSizeEnum.AllianceCrestSizeEnum.SIZE_FIGHTSCREEN, __dep_export_AllianceCrestEnum.AllianceCrestEnum.DEFAULT_CREST);
    } else {
      if (this._allianceCrestContainer) {
        this._allianceCrestContainer.visible = false;
      }
      __dep_export_CrestHelper.CrestHelper.setCrestGraphics(__s421param0, __s421param1, null, true);
      __s421param0.visible = true;
    }
  };
  CastleFightDialog.MAX_WIDTH = 50;
  CastleFightDialog.MAX_HEIGHT = 50;
  CastleFightDialog.SHOP_CATEGORY_TOOLS = 100;
  CastleFightDialog.SHOP_CATEGORY_UNITS = 101;
  CastleFightDialog.SHOP_CATEGORY_UNITS_DEF = 102;
  CastleFightDialog.SHOP_CATEGORY_UNITS_ATT = 103;
  CastleFightDialog.SHOP_CATEGORY_SUPPORT_TOOLS = 104;
  CastleFightDialog.SHOP_MAX_ITEM_WIDTH = 45;
  CastleFightDialog.SHOP_MAX_ITEM_HEIGHT = 55;
  CastleFightDialog.SHOP_ITEMS_PER_PAGE = 8;
  return CastleFightDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleFightDialog = __s0local3;
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_FightScreenHelper = require("gge-module:export_FightScreenHelper");
var __dep_export_CastleEffectsHelper = require("gge-module:export_CastleEffectsHelper");
var __dep_export_EffectIconUnitVO = require("gge-module:export_EffectIconUnitVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ButtonAddGoldComponent = require("gge-module:export_ButtonAddGoldComponent");
var __dep_export_CastleInventoryComponent = require("gge-module:export_CastleInventoryComponent");
var __dep_export_CastleChatComponent = require("gge-module:export_CastleChatComponent");
var __dep_export_DetailViewCreator = require("gge-module:export_DetailViewCreator");
var __dep_export_CastleAdvancedTroopSelectionComponent = require("gge-module:export_CastleAdvancedTroopSelectionComponent");
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_LordEffectTooltipTrigger = require("gge-module:export_LordEffectTooltipTrigger");
var __dep_export_CastleLordPicker = require("gge-module:export_CastleLordPicker");
var __dep_export_FightPresetPicker = require("gge-module:export_FightPresetPicker");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_StatusIconAttackWarnings = require("gge-module:export_StatusIconAttackWarnings");
var __dep_export_CastleAllianceTeaserDialog = require("gge-module:export_CastleAllianceTeaserDialog");
var __dep_export_CastleAttackAddUnitsDialog = require("gge-module:export_CastleAttackAddUnitsDialog");
var __dep_export_CastleConfirmCostsDialog = require("gge-module:export_CastleConfirmCostsDialog");
var __dep_export_RenameFightPresetDialog = require("gge-module:export_RenameFightPresetDialog");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
var __dep_export_FightDialogAutoFillComponent = require("gge-module:export_FightDialogAutoFillComponent");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_ClickFeedbackButtonBackground = require("gge-module:export_ClickFeedbackButtonBackground");
var __dep_export_ToolsLimitComponent = require("gge-module:export_ToolsLimitComponent");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local3, "ICollectableRendererList");
