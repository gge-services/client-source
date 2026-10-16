Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_5 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_6 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_7 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_8 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_9 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_10 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_11 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_TempServerHelper = require("gge-module:export_TempServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __dep_export_PlayerHelper = require("gge-module:export_PlayerHelper");
var __dep_export_ACastlePostActionDialog = require("gge-module:export_ACastlePostActionDialog");
var __dep_export_CastleCostInfoDialogProperties = require("gge-module:export_CastleCostInfoDialogProperties");
var __dep_export_CastleNoMoneyC2DialogProperties = require("gge-module:export_CastleNoMoneyC2DialogProperties");
var __dep_export_EquipmentExpireDialogProperties = require("gge-module:export_EquipmentExpireDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastlePostAttackDialog(__s3param0 = null) {
    var __s3local0 = this;
    __s3local0._remainingTimeForSupportDefenseSpeedBuff = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0 || CastlePostAttackDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePostAttackDialog, __s1param0);
  CastlePostAttackDialog.prototype.showLoaded = function (__s5param0 = null) {
    this.i_siegetime_txt_value ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_siegeTime.txt_value, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.i_esthonor_txt_value ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_estimatedHonor.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.dialogDisp.mc_estimatedHonor.toolTipText = "dialog_postAttack_estimatedHonor";
    this.dialogDisp.mc_siegeTime.toolTipText = "dialog_postAttack_siegeTime";
    this.lootPriorityDropdown ||= new __dep_export_ComboboxComponent.ComboboxComponent(this.dialogDisp.mc_dropdown, "", 1, 40, 45);
    this.itxt_dropdown ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_dropdown, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_attack_lootprio"));
    this.shareViewCheckbox ||= new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.dialogDisp.mc_checkbox, true);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_checkbox, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_postAttack_shareView")).textAlign = __dep_exact_9e901e8e2483a22f.GGSTextAlign.LEFT;
    __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(this.getCharID(), this.dialogDisp.mc_charPlaceHolder, 144, 186);
    var __s5local0 = __dep_exact_26a421b704832cff_7.OutpostConst.SIEGE_TIME;
    this.initTimeSelection();
    this.initShareView();
    this.initLootPriority();
    this.dialogDisp.mc_siegeTime.visible = this.fightScreenInfoVO.isConquerAttack && !this.fightScreenInfoVO.targetOwner.isOutpostOwner && this.fightScreenInfoVO.targetArea.areaType != __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_VILLAGE && this.fightScreenInfoVO.targetArea.areaType != __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_KINGS_TOWER && this.fightScreenInfoVO.targetArea.areaType != __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_MONUMENT && this.fightScreenInfoVO.targetArea.areaType != __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER && this.fightScreenInfoVO.targetArea.areaType != __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_LABORATORY;
    if (this.i_siegetime_txt_value) {
      this.i_siegetime_txt_value.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.getTimeToString(__s5local0, __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.ONE_TIME_FORMAT, __dep_export_CastleModel.CastleModel.languageData.bindFunction(__dep_export_CastleModel.CastleModel.languageData.getTextById));
    }
    this.dialogDisp.mc_estimatedHonor.visible = __dep_export_CastleFameHelper.CastleFameHelper.canEarnHonorOrFame(this.fightScreenInfoVO.targetArea, this.fightScreenInfoVO.targetActionType);
    var __s5local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleFameHelper.CastleFameHelper.getEstimatedHonor(this.fightScreenInfoVO.targetArea, this.fightScreenInfoVO.targetActionType));
    var __s5local2 = __dep_export_CastleFameHelper.CastleFameHelper.canEarnOrLoseHonor(this.fightScreenInfoVO.targetArea, this.fightScreenInfoVO.targetActionType) && !__dep_export_ABGHelper.ABGHelper.isOnABGServer;
    this.setHonorBonus(__s5local1, __s5local2);
    __s1param0.prototype.showLoaded.call(this, __s5param0);
  };
  CastlePostAttackDialog.prototype.getCharID = function () {
    return __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_GENERAL;
  };
  CastlePostAttackDialog.prototype.setHonorBonus = function (__s10param0, __s10param1) {
    if (__s10param0 >= 0) {
      this.i_esthonor_txt_value.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_NOMINAL_ADD;
      this.i_esthonor_txt_value.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    } else {
      this.i_esthonor_txt_value.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_NOMINAL_SUBTRACT;
      this.i_esthonor_txt_value.color = __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    }
    this.i_esthonor_txt_value.textContentVO.textReplacements = [Math.abs(__s10param0)];
    if (__s10param1) {
      this.dialogDisp.mc_estimatedHonor.icon_honor.gotoAndStop(CastlePostAttackDialog.FRAME_ICON_HONOR);
      this.dialogDisp.mc_estimatedHonor.toolTipText = "dialog_postAttack_estimatedHonor";
    } else {
      this.dialogDisp.mc_estimatedHonor.icon_honor.gotoAndStop(CastlePostAttackDialog.FRAME_ICON_NO_HONOR);
      this.dialogDisp.mc_estimatedHonor.toolTipText = "dialog_fame_nohonor";
    }
  };
  CastlePostAttackDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    var __s16local0 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO;
    if (__s16local0) {
      this._remainingTimeForSupportDefenseSpeedBuff = __dep_exact_f855840627e6e145.int(__s16local0.getRemainingBoostDuration(__dep_exact_26a421b704832cff_10.AllianceConst.TYPE_TEMP_DEFENSE_SPEED_BOOST));
      if (this._remainingTimeForSupportDefenseSpeedBuff > 0) {
        __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondTimer));
      }
    }
  };
  CastlePostAttackDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondTimer));
  };
  CastlePostAttackDialog.prototype.onSecondTimer = function (__s22param0) {
    this._remainingTimeForSupportDefenseSpeedBuff--;
    if (this._remainingTimeForSupportDefenseSpeedBuff <= 0) {
      this.updateTravelTime();
      __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondTimer));
    }
  };
  CastlePostAttackDialog.prototype.onSpecialEventRemoved = function (__s25param0) {
    if (__s25param0.specialEventVO.isOwnWmoVO(this.dialogProperties.attackInfoVO.targetArea)) {
      this.hide();
    }
  };
  CastlePostAttackDialog.prototype.initShareView = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.fightScreenInfoVO, "CastleAttackInfoVO") && __dep_export_CastleModel.CastleModel.userData.isInAlliance && this.fightScreenInfoVO.targetActionType != __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK && this.fightScreenInfoVO.targetActionType != __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_BOSSDUNGEONATTACK && this.fightScreenInfoVO.targetArea.kingdomID != __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID && this.fightScreenInfoVO.targetOwner.playerID != __dep_exact_26a421b704832cff_7.OutpostConst.OUTPOST_DEFAULT_OWNER_ID && this.fightScreenInfoVO.targetOwner.playerID != __dep_exact_26a421b704832cff_7.OutpostConst.CAPITAL_CLASSIC_DEFAULT_OWNER_ID && this.fightScreenInfoVO.targetOwner.playerID != __dep_exact_26a421b704832cff_7.OutpostConst.METROPOL_DEFAULT_OWNER_ID || this.fightScreenInfoVO.targetArea.kingdomID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
      this.shareViewCheckbox.isSelected = true;
      this.shareViewCheckboxVisible = true;
    } else {
      this.shareViewCheckboxVisible = false;
      this.shareViewCheckbox.isSelected = false;
    }
    if (__dep_export_ABGHelper.ABGHelper.isOnABGServer && this.fightScreenInfoVO.targetArea.areaType == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_METROPOL) {
      this.shareViewCheckboxVisible = false;
      this.shareViewCheckbox.isSelected = true;
    }
  };
  CastlePostAttackDialog.prototype.initTimeSelection = function () {
    this.dialogDisp.mc_wait.visible = false;
  };
  CastlePostAttackDialog.prototype.initLootPriority = function () {
    this.lootPriorityDropdownVisible = __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_exact_26a421b704832cff_9.CombatConst.LOOT_PRIO_MIN_LEVEL && __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.fightScreenInfoVO, "CastleAttackInfoVO") && this.fightScreenInfoVO.targetActionType != __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUER && this.fightScreenInfoVO.targetActionType != __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_CONQUERATTACK && this.fightScreenInfoVO.targetActionType != __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK && this.fightScreenInfoVO.targetArea.areaType != __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_VILLAGE && this.fightScreenInfoVO.targetArea.areaType != __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_KINGS_TOWER && this.fightScreenInfoVO.targetArea.areaType != __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_MONUMENT && this.fightScreenInfoVO.targetArea.areaType != __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_LABORATORY && this.fightScreenInfoVO.targetArea.areaType != __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_ISLE_RESOURCE;
    this.lootPriorityDropdown.clearItems();
    var __s35local0 = __dep_export_CastleFightScreenVO.CastleFightScreenVO.getResourcesVectorItemRenderers();
    this.lootPriorityDropdown.addItem(__s35local0[0]);
    this.lootPriorityDropdown.addItem(__s35local0[1]);
    this.lootPriorityDropdown.addItem(__s35local0[2]);
    this.lootPriorityDropdown.addItem(__s35local0[3]);
    if (__dep_export_PlayerHelper.PlayerHelper.isNPCPlayer(this.fightScreenInfoVO.targetOwner.playerID) || this.fightScreenInfoVO.targetArea.kingdomID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.fightScreenInfoVO.targetArea, "AAlienInvasionMapobjectVO")) {
        if (__dep_export_CastleModel.CastleModel.userData.isLegend && this.fightScreenInfoVO.targetOwnerLevel >= __dep_exact_26a421b704832cff_6.PlayerConst.LEVEL_CAP) {
          this.lootPriorityDropdown.addItem(__s35local0[4]);
          this.lootPriorityDropdown.addItem(__s35local0[5]);
          this.lootPriorityDropdown.addItem(__s35local0[6]);
          this.lootPriorityDropdown.addItem(__s35local0[7]);
        }
      } else if (__dep_export_CastleModel.CastleModel.userData.isLegend) {
        var __s35local1 = __dep_export_PlayerHelper.PlayerHelper.isInvasionPlayer(this.fightScreenInfoVO.targetOwner.playerID);
        if (this.fightScreenInfoVO.targetArea.kingdomID == __dep_exact_26a421b704832cff_8.WorldIce.KINGDOM_ID) {
          this.lootPriorityDropdown.addItem(__s35local0[4]);
        }
        if (this.fightScreenInfoVO.targetArea.kingdomID == __dep_exact_26a421b704832cff_2.WorldDessert.KINGDOM_ID) {
          this.lootPriorityDropdown.addItem(__s35local0[5]);
        }
        if (this.fightScreenInfoVO.targetArea.kingdomID == __dep_exact_26a421b704832cff_5.WorldVolcano.KINGDOM_ID) {
          this.lootPriorityDropdown.addItem(__s35local0[6]);
        }
        if (this.fightScreenInfoVO.targetArea.kingdomID == __dep_exact_26a421b704832cff_4.WorldClassic.KINGDOM_ID && !__s35local1) {
          this.lootPriorityDropdown.addItem(__s35local0[7]);
        }
      }
    } else if (__dep_export_CastleModel.CastleModel.userData.isLegend && this.fightScreenInfoVO.targetOwner.isLegend) {
      this.lootPriorityDropdown.addItem(__s35local0[4]);
      this.lootPriorityDropdown.addItem(__s35local0[5]);
      this.lootPriorityDropdown.addItem(__s35local0[6]);
      this.lootPriorityDropdown.addItem(__s35local0[7]);
    }
    this.lootPriorityDropdown.selectItemIndex(0);
  };
  CastlePostAttackDialog.prototype.onClick = function (__s46param0) {
    __s1param0.prototype.onClick.call(this, __s46param0);
    if (__s46param0.target == this.dialogDisp.mc_checkbox) {
      this.shareViewCheckbox.isSelected = !this.shareViewCheckbox.isSelected;
    }
  };
  CastlePostAttackDialog.prototype.startAttack = function () {
    var __s49local0 = this.dialogProperties.attackInfoVO.targetArea;
    if (this.hasEnoughEventTime(__s49local0)) {
      if (this.fightScreenInfoVO.isConquerAttack && __s49local0.areaType != __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_CAPITAL && __s49local0.areaType != __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_VILLAGE && __s49local0.areaType != __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_KINGS_TOWER && __s49local0.areaType != __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_ISLE_RESOURCE && __s49local0.areaType != __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_MONUMENT && __s49local0.areaType != __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_LABORATORY || this.dialogProperties.selectedLord && this.dialogProperties.selectedLord.id != __dep_exact_26a421b704832cff_11.TravelConst.COMMANDER_PREMIUM) {
        this.sendMovement(0);
      } else if (__dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.vipData.remainingPremiumCommanders) < 1) {
        var __s49local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.boostData.premiumAccountVO.isActive ? 0 : __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_exact_26a421b704832cff_11.TravelConst.TRAVEL_PREMIUM_COMMANDER_COSTS_C2));
        var __s49local2 = __dep_export_CastleModel.CastleModel.vipData.vipModeActive ? "dialog_buyGeneral_allVIPUsed_copy" : "dialog_buyGeneral_noVIP_copy";
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBuyTempCommanderDialog.CastleBuyTempCommanderDialog, new __dep_export_CastleCostInfoDialogProperties.CastleCostInfoDialogProperties(__s49local1, this.bindFunction(this.onStartAttackWithPremiumCommander), __dep_exact_92d05af59ee2ff30.Localize.text(__s49local2), "", __dep_exact_92d05af59ee2ff30.Localize.text("help_buyGeneral")));
      } else {
        this.sendMovement(1);
      }
    }
  };
  CastlePostAttackDialog.prototype.sendMovement = function (__s55param0) {
    var __s55local0 = this.selectedHorse;
    var __s55local1 = __dep_exact_f855840627e6e145.int(__s55local0 ? __s55local0.wodId : -1);
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.fightScreenInfoVO, "CastleTreasureHuntFightscreenVO")) {
      this.sendTreasureHuntAttack(__s55local1, __s55param0);
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.fightScreenInfoVO, "CastleAttackInfoVO")) {
      this.checkEquipmentAndSendAttack(__s55local1, __s55param0);
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.fightScreenInfoVO, "CastleSupportDefenceVO")) {
      this.sendSupport(__s55local1, __s55param0);
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.fightScreenInfoVO, "CastleTroopSupportVO")) {
      this.sendTroops(__s55local1, __s55param0);
    }
  };
  CastlePostAttackDialog.prototype.sendTreasureHuntAttack = function (__s61param0, __s61param1) {
    __dep_export_CastleModel.CastleModel.treasureMapData.sendTreasureHuntAttack(this.fightScreenInfoVO, __s61param0, __s61param1, this.dialogProperties.selectedLord, this.checkForHorsePayedWithPegasusTickets());
    this.callHideFunction();
    this.hide();
  };
  CastlePostAttackDialog.prototype.checkEquipmentAndSendAttack = function (__s63param0, __s63param1) {
    var __s63local0 = new __dep_export_EquipmentExpireDialogProperties.EquipmentExpireDialogProperties(this.dialogProperties.selectedLord, this.getTotalTravelTime(), __s63param0, __s63param1, this.bindFunction(this.sendAttack), this.bindFunction(this.onAttackAnywayDenied));
    if (__s63local0.willAnyEquipmentExpireBeforeArrival()) {
      __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_EquipmentExpireDialog.EquipmentExpireDialog, __s63local0);
    } else {
      this.sendAttack(__s63param0, __s63param1);
      this.callHideFunction();
      this.hide();
    }
  };
  CastlePostAttackDialog.prototype.onAttackAnywayDenied = function () {
    this.hide();
  };
  CastlePostAttackDialog.prototype.sendAttack = function (__s69param0, __s69param1) {
    if (this.env.isOnTemporaryServer && this.fightScreenInfoVO.targetArea.areaType == __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_CASTLE && __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent && __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.isCollectorScoring) {
      __dep_export_CastleModel.CastleModel.attackData.sendAttackTempServer(this.fightScreenInfoVO, __s69param0, __s69param1, this.shareViewCheckbox.isSelected, this.lootPriorityDropdown.selectedData.resource, this.dialogProperties.selectedLord, this.checkForHorsePayedWithPegasusTickets(), this.getSlowDownOffsetInSeconds());
    } else if (!__dep_export_ABGHelper.ABGHelper.isOnABGAndCollector || this.fightScreenInfoVO.targetArea.areaType != __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_CASTLE && this.fightScreenInfoVO.targetArea.areaType != __dep_exact_26a421b704832cff_3.WorldConst.AREA_TYPE_CAPITAL) {
      __dep_export_CastleModel.CastleModel.attackData.sendAttack(this.fightScreenInfoVO, __s69param0, __s69param1, this.shareViewCheckbox.isSelected, this.lootPriorityDropdown.selectedData.resource, this.dialogProperties.selectedLord, this.checkForHorsePayedWithPegasusTickets(), this.getSlowDownOffsetInSeconds());
    } else {
      __dep_export_CastleModel.CastleModel.attackData.sendAttackPlayerAllianceBattleground(this.fightScreenInfoVO, __s69param0, __s69param1, this.shareViewCheckbox.isSelected, this.lootPriorityDropdown.selectedData.resource, this.dialogProperties.selectedLord, this.checkForHorsePayedWithPegasusTickets(), this.getSlowDownOffsetInSeconds());
    }
    this.callHideFunction();
    this.hide();
  };
  CastlePostAttackDialog.prototype.sendSupport = function (__s74param0, __s74param1) {
    this.fightScreenInfoVO.waitTime = this.getWaitTime();
    __dep_export_CastleModel.CastleModel.attackData.sendSupport(this.fightScreenInfoVO, __s74param0, __s74param1, this.dialogProperties.selectedLord, this.checkForHorsePayedWithPegasusTickets(), this.getSlowDownOffsetInSeconds());
    this.callHideFunction();
    this.hide();
  };
  CastlePostAttackDialog.prototype.sendTroops = function (__s76param0, __s76param1) {
    __dep_export_CastleTroopSupportData.CastleTroopSupportData.sendTroops(this.fightScreenInfoVO, __s76param0, __s76param1, this.dialogProperties.selectedLord, this.fightScreenInfoVO.targetArea.kingdomID, this.checkForHorsePayedWithPegasusTickets(), this.getSlowDownOffsetInSeconds());
    this.callHideFunction();
    this.hide();
  };
  CastlePostAttackDialog.prototype.onStartAttackWithPremiumCommander = function () {
    if (!__dep_export_CastleModel.CastleModel.boostData.premiumAccountVO.isActive && __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_exact_26a421b704832cff_11.TravelConst.TRAVEL_PREMIUM_COMMANDER_COSTS_C2) > __dep_export_CastleModel.CastleModel.currencyData.c2Amount) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNoMoneyC2Dialog.CastleNoMoneyC2Dialog, new __dep_export_CastleNoMoneyC2DialogProperties.CastleNoMoneyC2DialogProperties());
    } else {
      this.sendMovement(1);
      this.callHideFunction();
      this.hide();
    }
  };
  CastlePostAttackDialog.prototype.callHideFunction = function () {
    if (this.dialogProperties.hideFunction != null) {
      this.dialogProperties.hideFunction();
    }
  };
  Object.defineProperty(CastlePostAttackDialog.prototype, "shareViewCheckboxVisible", {
    set: function (__s85param0) {
      this.shareViewCheckbox.disp.visible = __s85param0;
      this.dialogDisp.txt_checkbox.visible = __s85param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostAttackDialog.prototype, "lootPriorityDropdownVisible", {
    set: function (__s87param0) {
      this.itxt_dropdown.visible = __s87param0;
      this.dialogDisp.mc_dropdown.visible = __s87param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostAttackDialog.prototype, "fightScreenInfoVO", {
    get: function () {
      return this.dialogProperties.attackInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostAttackDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePostAttackDialog.prototype.startTravelAction = function () {
    this.startAttack();
  };
  Object.defineProperty(CastlePostAttackDialog.prototype, "distance", {
    get: function () {
      return this.fightScreenInfoVO.distance;
    },
    set: function (__s97param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastlePostActionDialog.ACastlePostActionDialog.prototype, "distance").set.call(this, __s97param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostAttackDialog.prototype, "cost", {
    get: function () {
      return this.fightScreenInfoVO.getTravelCost(this.dialogProperties.selectedLord);
    },
    set: function (__s101param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastlePostActionDialog.ACastlePostActionDialog.prototype, "cost").set.call(this, __s101param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostAttackDialog.prototype, "unlockedHorses", {
    get: function () {
      if (!__dep_export_CastleModel.CastleModel.permanentCastleData) {
        return null;
      }
      var __s103local0;
      var __s103local1 = __dep_export_CastleModel.CastleModel.permanentCastleData;
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.fightScreenInfoVO.sourceArea, "FactionCampMapobjectVO")) {
        if ((__s103local0 = __s103local1.getCastleByAreaInfo(this.fightScreenInfoVO.sourceArea)) && __s103local0.horsesVO) {
          return __s103local0.horsesVO.horses;
        } else {
          return null;
        }
      } else if ((__s103local0 = __s103local1.getUnitBaseLocation(this.fightScreenInfoVO.sourceArea)) && __s103local0.horsesVO) {
        return __s103local0.horsesVO.horses;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastlePostAttackDialog.prototype.getTravelBoost = function (__s111param0) {
    return __dep_exact_f855840627e6e145.int(__s111param0.unitBoost);
  };
  CastlePostAttackDialog.prototype.getBoostCostC1 = function (__s113param0) {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC1(__dep_exact_26a421b704832cff_11.TravelConst.getHorseCostC1(this.distance, this.fightScreenInfoVO.getSumOfItems(), __s113param0.costFactorC1)));
  };
  CastlePostAttackDialog.prototype.getBoostCostC2 = function (__s115param0) {
    if (__s115param0.isPayedWithPegasusTickets) {
      return 0;
    } else {
      return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_exact_26a421b704832cff_11.TravelConst.getHorseCostC2(this.distance, this.fightScreenInfoVO.getSumOfItems(), __s115param0.costFactorC2)));
    }
  };
  Object.defineProperty(CastlePostAttackDialog.prototype, "normalTravelTime", {
    get: function () {
      return this.fightScreenInfoVO.getTravelTime(this.dialogProperties.attackInfoVO.targetArea, this.dialogProperties.selectedLord);
    },
    set: function (__s121param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastlePostActionDialog.ACastlePostActionDialog.prototype, "normalTravelTime").set.call(this, __s121param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlePostAttackDialog.prototype.getBoostedTravelTime = function (__s123param0) {
    return __dep_exact_f855840627e6e145.int(this.fightScreenInfoVO.getBoostedTravelTime(this.dialogProperties.attackInfoVO.targetArea, __s123param0, this.dialogProperties.selectedLord));
  };
  Object.defineProperty(CastlePostAttackDialog.prototype, "isTravelTimeSubscriptionBoosted", {
    get: function () {
      return this.dialogProperties.attackInfoVO.travelTimeIsSubscriptionBoosted;
    },
    set: function (__s127param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastlePostActionDialog.ACastlePostActionDialog.prototype, "isTravelTimeSubscriptionBoosted").set.call(this, __s127param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePostAttackDialog.prototype, "shipsInsteadOfHorses", {
    get: function () {
      return this.fightScreenInfoVO.sourceArea.kingdomID == __dep_exact_26a421b704832cff_1.WorldIsland.KINGDOM_ID;
    },
    set: function (__s131param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastlePostActionDialog.ACastlePostActionDialog.prototype, "shipsInsteadOfHorses").set.call(this, __s131param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlePostAttackDialog.prototype.getWaitTime = function () {
    return 1;
  };
  CastlePostAttackDialog.NAME = "CastlePostAttack";
  CastlePostAttackDialog.FRAME_ICON_HONOR = 1;
  CastlePostAttackDialog.FRAME_ICON_NO_HONOR = 2;
  return CastlePostAttackDialog;
}(__dep_export_ACastlePostActionDialog.ACastlePostActionDialog);
exports.CastlePostAttackDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleFameHelper = require("gge-module:export_CastleFameHelper");
var __dep_export_CastleTroopSupportData = require("gge-module:export_CastleTroopSupportData");
var __dep_export_CastleFightScreenVO = require("gge-module:export_CastleFightScreenVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ComboboxComponent = require("gge-module:export_ComboboxComponent");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleNoMoneyC2Dialog = require("gge-module:export_CastleNoMoneyC2Dialog");
var __dep_export_EquipmentExpireDialog = require("gge-module:export_EquipmentExpireDialog");
var __dep_export_CastleBuyTempCommanderDialog = require("gge-module:export_CastleBuyTempCommanderDialog");
