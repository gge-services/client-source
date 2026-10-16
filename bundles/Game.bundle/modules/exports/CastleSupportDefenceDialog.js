Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_BasicPickerEvent = require("gge-module:export_BasicPickerEvent");
var __dep_export_CastleEquipmentEvent = require("gge-module:export_CastleEquipmentEvent");
var __dep_export_CastleArmyDataEvent = require("gge-module:export_CastleArmyDataEvent");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AutoFillOptions = require("gge-module:export_AutoFillOptions");
var __dep_export_DaimyoTownshipMapObjectVO = require("gge-module:export_DaimyoTownshipMapObjectVO");
var __dep_export_FactionCapitalMapobjectVO = require("gge-module:export_FactionCapitalMapobjectVO");
var __dep_export_FactionTowerMapobjectVO = require("gge-module:export_FactionTowerMapobjectVO");
var __dep_export_FactionVillageMapobjectVO = require("gge-module:export_FactionVillageMapobjectVO");
var __dep_export_instanceOf_ISupportCapacityVO = require("gge-module:export_instanceOf_ISupportCapacityVO");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleBasicAddUnitsDialogProperties = require("gge-module:export_CastleBasicAddUnitsDialogProperties");
var __dep_export_CastleCharacterYesNoOKDialogProperties = require("gge-module:export_CastleCharacterYesNoOKDialogProperties");
var __dep_export_CastleFightDialog = require("gge-module:export_CastleFightDialog");
var __dep_export_CastleNoMoneyC1DialogProperties = require("gge-module:export_CastleNoMoneyC1DialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleSupportDefenceDialog() {
    var __s3local0 = this;
    __s3local0._remainingTimeForSupportDefenseSpeedBuff = 0;
    __s3local0._remainingTimeForSupportDefensePowerBuff = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleSupportDefenceDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSupportDefenceDialog, __s1param0);
  CastleSupportDefenceDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.bottomMenu.btn_cat_keep.visible = false;
    this.bottomMenu.btn_cat_wall.visible = false;
    this.bottomMenu.btn_cat_gate.visible = false;
    this.bottomMenu.btn_cat_field.visible = false;
    this.bottomMenu.btn_cat_moat.visible = false;
    this.bottomMenu.btn_cat_tools.visible = false;
    this.bottomMenu.btn_toolLimit.visible = false;
    this.supportDefenceDialog.unitConnector.visible = false;
    this.bottomMenu.btn_tactics.toolTipText = "panel_deco_military";
    this.supportDefenceDialog.btn_help.toolTipText = "generic_help";
    this.supportDefenceDialog.mc_supportItemHolder.icon_meleeDefence.toolTipText = "meleedefence";
    this.supportDefenceDialog.mc_supportItemHolder.icon_rangeDefence.toolTipText = "rangedefence";
    this.supportDefenceDialog.mc_supportItemHolder.icon_amount.toolTipText = "panel_fight_unitCount";
    this.supportDefenceDialog.mc_supportItemHolder.tooltip_amount.toolTipText = "panel_fight_unitCount";
    this.supportDefenceDialog.mc_supportItemHolder.tooltip_combat_melee.toolTipText = "meleedefence";
    this.supportDefenceDialog.mc_supportItemHolder.tooltip_combat_range.toolTipText = "rangedefence";
    this.supportDefenceDialog.mc_supportLimit.mc_wallCapacity.toolTipText = "dialog_defence_unitsOnAllWalls";
    this.supportDefenceDialog.mc_supportLimit.mc_wallCapacity.mouseChildren = false;
    this.supportDefenceDialog.mc_supportLimit.mc_yardCapacity.toolTipText = "panel_fight_unitsInCourtyard_limit_tooltip";
    this.supportDefenceDialog.mc_supportLimit.mc_yardCapacity.mouseChildren = false;
    this.supportDefenceDialog.mc_supportLimit.mc_supportCapcaity.toolTipText = "dialog_support_allianceDefenseUnitAmount";
    this.supportDefenceDialog.mc_supportLimit.mc_supportCapcaity.mouseChildren = false;
    this._advancedFightScreenHelper = new __dep_export_CastleAdvancedSupportDefenceDialogHelper.CastleAdvancedSupportDefenceDialogHelper(this);
    this.itxt_castlename = this.textFieldManager.registerTextField(this.userInfoMenu.txt_castlename, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.i_itemHolder_txt_amount = this.textFieldManager.registerTextField(this.supportDefenceDialog.mc_supportItemHolder.txt_amount, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    this.i_itemHolder_txt_combatRangeDefence = this.textFieldManager.registerTextField(this.supportDefenceDialog.mc_supportItemHolder.txt_combatRangeDefence, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    this.i_itemHolder_txt_combatMeleeDefence = this.textFieldManager.registerTextField(this.supportDefenceDialog.mc_supportItemHolder.txt_combatMeleeDefence, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    this.i_compOpt_cost_txt_value = this.textFieldManager.registerTextField(this.bottomMenu.component_Options.info_cost.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    this.i_compOpt_time_txt_value = this.textFieldManager.registerTextField(this.bottomMenu.component_Options.info_time.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this._itxt_wallCapacity = this.textFieldManager.registerTextField(this.supportDefenceDialog.mc_supportLimit.mc_wallCapacity.text_wallCapacity, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, 0]));
    this._itxt_yardCapacity = this.textFieldManager.registerTextField(this.supportDefenceDialog.mc_supportLimit.mc_yardCapacity.txt_yardCapacity, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, 0]));
    this._itxt_supportCapacity = this.textFieldManager.registerTextField(this.supportDefenceDialog.mc_supportLimit.mc_supportCapcaity.txt_supportCapcaity, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, 0]));
    this.supportDefenceDialog.mc_townshipSupport.toolTipText = "dialog_townshipDefense_supportOverview_tooltip";
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.supportDefenceDialog.mc_townshipSupport);
  };
  CastleSupportDefenceDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    this.showTactics();
    var __s7local0 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO;
    if (__s7local0) {
      this._remainingTimeForSupportDefenseSpeedBuff = __dep_exact_f855840627e6e145.int(__s7local0.getRemainingBoostDuration(__dep_exact_26a421b704832cff.AllianceConst.TYPE_TEMP_DEFENSE_SPEED_BOOST));
      this._remainingTimeForSupportDefensePowerBuff = __dep_exact_f855840627e6e145.int(__s7local0.getRemainingBoostDuration(__dep_exact_26a421b704832cff.AllianceConst.TYPE_TEMP_DEFENSE_POWER_BOOST));
    }
  };
  CastleSupportDefenceDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    if (this._remainingTimeForSupportDefenseSpeedBuff > 0 || this._remainingTimeForSupportDefensePowerBuff > 0) {
      __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondTimer));
    }
    this.controller.addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onSupportChanged));
    this.controller.addEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.GENERAL_ASSIGNED, this.bindFunction(this.updateSelectedLord));
  };
  CastleSupportDefenceDialog.prototype.showLoaded = function (__s13param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.onSupportDefenceInfos();
  };
  CastleSupportDefenceDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondTimer));
    this.controller.removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onSupportChanged));
    this.controller.removeEventListener(__dep_export_CastleEquipmentEvent.CastleEquipmentEvent.GENERAL_ASSIGNED, this.bindFunction(this.updateSelectedLord));
  };
  CastleSupportDefenceDialog.prototype.onAutoFillAllWavesClicked = function () {
    new __dep_export_StrongestDefenceSupportFlankStrategy.StrongestDefenceSupportFlankStrategy().fillFlankWithSoldiers(this.supportDefenceVO.supportUnits, null, null, this.supportDefenceVO.unitInventory, new __dep_export_AutoFillOptions.AutoFillOptions());
    this.refreshElements();
  };
  CastleSupportDefenceDialog.prototype.onAutoFillCurrentWaveClicked = function () {
    new __dep_export_StrongestDefenceSupportFlankStrategy.StrongestDefenceSupportFlankStrategy().fillFlankWithSoldiers(this.supportDefenceVO.supportUnits, null, null, this.supportDefenceVO.unitInventory, new __dep_export_AutoFillOptions.AutoFillOptions());
    this.refreshElements();
  };
  CastleSupportDefenceDialog.prototype.setAppearanceFightButton = function () {
    __s1param0.prototype.setAppearanceFightButton.call(this);
    this.bottomMenu.btn_close.toolTipText = "ringmenu_supportDefence";
    var __s21local0 = this.textFieldManager.registerTextField(this.bottomMenu.btn_close.txt_name, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("ringmenu_supportDefence"));
    __s21local0.autoFitToBounds = true;
    __s21local0.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    var __s21local1 = this.properties.supportDefenceVO.unitInventory.getDefensiveSoldierCount(false) > 0;
    this.autoFill.setActive(true, true, __s21local1);
  };
  Object.defineProperty(CastleSupportDefenceDialog.prototype, "supportDefenceVO", {
    get: function () {
      return this._fightScreenVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleSupportDefenceDialog.prototype.onSecondTimer = function (__s25param0) {
    if (this._remainingTimeForSupportDefenseSpeedBuff > 0) {
      this._remainingTimeForSupportDefenseSpeedBuff--;
      if (this._remainingTimeForSupportDefenseSpeedBuff == 0) {
        this.updateArrivalTime();
      }
    }
    if (this._remainingTimeForSupportDefensePowerBuff > 0) {
      this._remainingTimeForSupportDefensePowerBuff--;
      if (this._remainingTimeForSupportDefensePowerBuff == 0) {
        this.updateUnitStrength();
      }
    }
    if (this._remainingTimeForSupportDefenseSpeedBuff == 0 && this._remainingTimeForSupportDefensePowerBuff == 0) {
      __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondTimer));
    }
  };
  CastleSupportDefenceDialog.prototype.onSupportDefenceInfos = function () {
    this._fightScreenVO = this.properties.supportDefenceVO;
    this._unitMixedInventory = this.supportDefenceVO.unitInventory;
    this._unitMixedInventory.addAll(this.supportDefenceVO.strongholdUnitInventory.getUnits(null));
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.supportDefenceDialog.myCrest, this._fightScreenVO.sourceOwnerCrestVO);
    this.showPlayerOrAllianceCrest(this.supportDefenceDialog.targetCrest, this._fightScreenVO.targetOwnerCrestVO, this.targetArea);
    this.itxt_castlename.textContentVO.stringValue = this._fightScreenVO.sourceArea.areaNameString;
    this.showUserLevel();
    this.showPlayerInfo(this._fightScreenVO.targetArea, this._fightScreenVO.targetOwnerLevel);
    this.setShopCategory(__dep_export_CastleFightDialog.CastleFightDialog.SHOP_CATEGORY_UNITS_DEF);
    this.bottomMenu.component_Options.wavePicker.visible = false;
    this.drawAreaVO();
    this.initLordPicker();
    this.hidePresetPicker();
    this.fillItems();
    this.showTownshipSupportInfo();
    this.showCapacities();
  };
  CastleSupportDefenceDialog.prototype.showTownshipSupportInfo = function () {
    if (__dep_export_instanceOf_ISupportCapacityVO.instanceOf_ISupportCapacityVO(this.targetArea)) {
      var __s34local0 = this.targetArea;
      this.bottomMenu.component_Options.mc_townshipSupport.visible = true;
      this.bottomMenu.component_Options.mc_townshipSupport.mouseChildren = false;
      var __s34local1 = __dep_exact_f855840627e6e145.int(this.supportDefenceVO.getUnitCountFromSupportMovements());
      var __s34local2 = __dep_exact_f855840627e6e145.int(this.supportDefenceVO.getSumOfUnits() + __s34local1);
      var __s34local3 = __s34local0.supportCapacity;
      var __s34local4 = this.textFieldManager.registerTextField(this.bottomMenu.component_Options.mc_townshipSupport.info_defenceCount.txt_value, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [__s34local2, __s34local3]));
      __s34local4.autoFitToBounds = true;
      __s34local4.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      if (__s34local2 >= __s34local3) {
        __s34local4.color = __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
        this.bottomMenu.component_Options.mc_townshipSupport.icon_warning.visible = true;
        this.bottomMenu.component_Options.mc_townshipSupport.toolTipText = __s34local0.supportCapacityReachedToolTipID;
      } else {
        __s34local4.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
        this.bottomMenu.component_Options.mc_townshipSupport.icon_warning.visible = false;
        this.bottomMenu.component_Options.mc_townshipSupport.toolTipText = __s34local0.supportCapacityToolTipID;
      }
      if (__dep_exact_f855840627e6e145.int(this.supportDefenceVO.getMyUnitCountFromSupportMovements()) == 0) {
        this.dialogDisp.mc_townshipSupport.toolTipText = __s34local0.supportOverviewNoTroopsToolTipID;
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_townshipSupport, false);
      } else {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.mc_townshipSupport, true);
        this.dialogDisp.mc_townshipSupport.toolTipText = __s34local0.supportOverviewToolTip;
      }
    } else {
      this.bottomMenu.component_Options.mc_townshipSupport.visible = false;
      if (this.dialogDisp.mc_townshipSupport) {
        this.dialogDisp.mc_townshipSupport.visible = false;
      }
    }
  };
  CastleSupportDefenceDialog.prototype.onSupportChanged = function (__s43param0) {
    if (__dep_export_instanceOf_ISupportCapacityVO.instanceOf_ISupportCapacityVO(this.targetArea)) {
      this.showTownshipSupportInfo();
    }
  };
  CastleSupportDefenceDialog.prototype.showSpyInfo = function (__s46param0, __s46param1, __s46param2 = true, __s46param3 = false, __s46param4 = false, __s46param5 = false, __s46param6 = true) {
    if (!__dep_exact_81dacdf05bd32292_2.instanceOfClass(this.targetArea, "DaimyoTownshipMapObjectVO")) {
      __s1param0.prototype.showSpyInfo.call(this, __s46param0, __s46param1, __s46param2, __s46param3, __s46param4, __s46param5, __s46param6);
    }
  };
  CastleSupportDefenceDialog.prototype.initLordPicker = function (__s49param0 = 0) {
    this.lordPickerMc.visible = true;
    if (this._lordPicker) {
      this._lordPicker.destroy();
    }
    if (this.targetArea.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP) {
      var __s49local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff_2.WorldClassic.KINGDOM_ID);
      var __s49local1 = __dep_export_CastleModel.CastleModel.lordData.getBaronByCastleId(__s49local0.objectId);
      var __s49local2 = [];
      __s49local2.push(__s49local1);
      this._lordPicker = new __dep_export_CastleLordPicker.CastleLordPicker(this.lordPickerMc, __s49local2, true, true, true);
      this.lordPickerMc.mc_lordCombobox.toolTipText = "dialog_townshipSupport_castellan_tooltip";
    } else {
      var __s49local3 = this.getLordsWithPremiumCommander();
      this._lordPicker = new __dep_export_CastleLordPicker.CastleLordPicker(this.lordPickerMc, __s49local3, this._fightScreenVO.isConquerAttack, false, true);
      this.lordPickerMc.mc_lordCombobox.toolTipText = null;
    }
    this._lordPicker.selectedIndex = __s49param0;
    this._lordPicker.addEventListener(__dep_export_BasicPickerEvent.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onSelectedLordChanged));
    this.updateSelectedLord();
    this.updateLordPickerTooltip();
  };
  CastleSupportDefenceDialog.prototype.fillItems = function () {
    this._allContainerOnScreen = [];
    this.fillItemContainer(this.supportDefenceDialog.mc_supportItemHolder.mc_supportItems, this.supportDefenceVO.supportUnits, 10, 43);
    this.i_itemHolder_txt_amount.textContentVO.numberValue = this.supportDefenceVO.supportUnits.sumOfItems;
    this.onSelectedLordChanged(null);
  };
  CastleSupportDefenceDialog.prototype.onSelectedLordChanged = function (__s56param0 = null) {
    this.updateSelectedLord();
    this.i_compOpt_cost_txt_value.textContentVO.numberValue = this.supportDefenceVO.getTravelCost(this.getSelectedLordVO());
    this.updateUnitStrength();
    this.updateArrivalTime();
    this.i_compOpt_cost_txt_value.color = this.supportDefenceVO.getTravelCost(this.getSelectedLordVO()) > __dep_export_CastleModel.CastleModel.currencyData.c1Amount ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    this.updateLordPickerTooltip();
  };
  CastleSupportDefenceDialog.prototype.updateUnitStrength = function () {
    this.i_itemHolder_txt_combatRangeDefence.textContentVO.numberValue = this.supportDefenceVO.supportUnits.getDefenceRangeValue(this.getSelectedLordVO(), this._fightScreenVO.targetArea);
    this.i_itemHolder_txt_combatMeleeDefence.textContentVO.numberValue = this.supportDefenceVO.supportUnits.getDefenceMeleeValue(this.getSelectedLordVO(), this._fightScreenVO.targetArea);
  };
  CastleSupportDefenceDialog.prototype.updateArrivalTime = function () {
    this.i_compOpt_time_txt_value.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.getShortTimeStringBySeconds(this.supportDefenceVO.getTravelTime(this._fightScreenVO.targetArea, this.getSelectedLordVO()));
  };
  CastleSupportDefenceDialog.prototype.fillItemContainer = function (__s62param0, __s62param1, __s62param2, __s62param3) {
    __dep_exact_9e901e8e2483a22f_5.MovieClipHelper.clearMovieClip(__s62param0.mc_items);
    for (var __s62local0 = 0; __s62local0 < __s62param1.items.length; __s62local0++) {
      var __s62local1 = __s62param1.items[__s62local0];
      var __s62local2 = new Library.CastleInterfaceElements.AttackSlotContainer();
      __s62local2.itemVO = __s62local1;
      __s62local2.itemContainer = __s62param1;
      __s62local2.mc_bg.allowFastGlow = false;
      __s62local2.btn_Plus.x += 1;
      __s62local2.btn_Plus.y += 2;
      __s62param0.mc_items.addChild(__s62local2);
      if (!__s62local1.isFree()) {
        __dep_export_WodPicHelper.WodPicHelper.setCorrectUnitBackgroundPic(__s62local1.unitVO, __s62local2.mc_bg, Library.CastleInterfaceElements.AttackslotContainerBackground, Library.CastleInterfaceElements.AttackslotContainerBackground_Berimond);
        __dep_export_WodPicHelper.WodPicHelper.addUnitPic(__dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_UNIT).get(__s62local1.unitVO.wodId), __s62local2.content.mc_unit, 35, 35, __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[0], __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[1], 20);
      }
      this.initContainer(__s62local2);
      this.positionContainer(__s62local2, __s62param2, __s62local0, __s62param3);
      this._allContainerOnScreen.push(__s62local2);
    }
  };
  CastleSupportDefenceDialog.prototype.updateContainer = function () {
    this.fillItems();
  };
  CastleSupportDefenceDialog.prototype.initContainer = function (__s69param0) {
    __s1param0.prototype.initContainer.call(this, __s69param0);
    __s69param0.scaleX = __s69param0.scaleY = 1;
    __s69param0.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
    __s69param0.alpha = 1;
    __s69param0.mouseChildren = false;
    __s69param0.content.mouseChildren = false;
    __s69param0.content.mouseEnabled = false;
    if (__s69param0.itemContainer.highlighted) {
      __s69param0.btn_Plus.gotoAndStop(2);
    } else {
      __s69param0.btn_Plus.gotoAndStop(1);
    }
    var __s69local0 = __s69param0.itemVO;
    var __s69local1 = __s69param0.itemContainer;
    __s69param0.content.infoPercent.visible = false;
    __s69param0.content.infoAmount.visible = !__s69local0.isFree();
    __s69param0.btn_Plus.visible = __s69local0.isFree() && !this._selectedDragUnit && !__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive;
    if (__s69local0.isFree()) {
      __s69param0.toolTipText = null;
    } else if (__s69local0.slotType == __dep_export_ToolUnitVO.ToolUnitVO.SLOTTYPE_SOLDIER) {
      var __s69local2 = __s69local0.unitVO;
      var __s69local3 = __dep_exact_9e901e8e2483a22f_3.MathBase.max(__s69local2.buffedMeleeAttack, __s69local2.buffedRangeAttack) * __s69local0.unitVO.inventoryAmount;
      __s69param0.toolTipText = {
        t: __dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_SIMPLE_COMP,
        p: [__s69local3, __dep_exact_92d05af59ee2ff30_1.Localize.text("panel_fight_battlestrength")]
      };
      var __s69local4 = __dep_exact_9e901e8e2483a22f_3.MathBase.max(__s69local2.meleeDefence, __s69local2.rangeDefence) * __s69local0.unitVO.inventoryAmount;
      __s69param0.toolTipText = {
        t: "panel_fight_battlestrength_value",
        p: [__s69local4]
      };
    } else {
      var __s69local5 = __s69local0.unitVO;
      __s69param0.toolTipText = __s69local5.getTooltipString(__s69local0.getAmount());
    }
    if (!__s69local0.isFree()) {
      this.textFieldManager.registerTextField(__s69param0.content.infoAmount.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s69local0.unitVO.inventoryAmount), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    }
    if (__s69local0.isFree() && __s69local1.isFull) {
      __s69param0.alpha = 0.3;
    }
  };
  CastleSupportDefenceDialog.prototype.editUnitSlot = function (__s78param0, __s78param1, __s78param2) {
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleAttackAddUnitsDialog.CastleAttackAddUnitsDialog, new __dep_export_CastleBasicAddUnitsDialogProperties.CastleBasicAddUnitsDialogProperties(__s78param0, this.bindFunction(this.changeItemAmount), __s78param2, true, __s78param1));
  };
  CastleSupportDefenceDialog.prototype.onUnitFitsSlot = function (__s80param0, __s80param1) {
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleAttackAddUnitsDialog.CastleAttackAddUnitsDialog, new __dep_export_CastleBasicAddUnitsDialogProperties.CastleBasicAddUnitsDialogProperties(this._selectedDragUnit, this.bindFunction(this.changeItemAmount), __s80param0, false, __s80param1));
  };
  CastleSupportDefenceDialog.prototype.refreshElements = function () {
    this.fillItems();
    this.fillShopItemsByGroup();
    this.onSelectedLordChanged(null);
    this.showTownshipSupportInfo();
    __s1param0.prototype.refreshElements.call(this);
  };
  CastleSupportDefenceDialog.prototype.getFilteredArray = function (__s84param0) {
    var __s84local0 = [];
    switch (__s84param0) {
      case __dep_export_CastleFightDialog.CastleFightDialog.SHOP_CATEGORY_UNITS_ATT:
        __s84local0 = this._unitMixedInventory.getOffensiveSoldiers(false);
        break;
      case __dep_export_CastleFightDialog.CastleFightDialog.SHOP_CATEGORY_UNITS_DEF:
        __s84local0 = this._unitMixedInventory.getDefensiveSoldiers(false);
        break;
      case __dep_export_CastleFightDialog.CastleFightDialog.SHOP_CATEGORY_UNITS:
        __s84local0 = this._unitMixedInventory.getOffensiveSoldiers(false);
        for (var __s84local1 = 0, __s84local2 = this._unitMixedInventory.getDefensiveSoldiers(false); __s84local1 < __s84local2.length; __s84local1++) {
          var __s84local3 = __s84local2[__s84local1];
          if (!(__s84local0.indexOf(__s84local3) > -1)) {
            __s84local0.push(__s84local3);
          }
        }
    }
    __s84local0.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrder);
    return __s84local0;
  };
  CastleSupportDefenceDialog.prototype.closeScreen = function () {
    if (this.supportDefenceVO.supportUnits.sumOfItems != 0) {
      if (this.supportDefenceVO.getTravelCost(this.getSelectedLordVO()) > __dep_export_CastleModel.CastleModel.currencyData.c1Amount) {
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleNoMoneyC1Dialog.CastleNoMoneyC1Dialog, new __dep_export_CastleNoMoneyC1DialogProperties.CastleNoMoneyC1DialogProperties());
      } else {
        this.supportDefenceVO.targetActionType = this.targetArea.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP ? __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE_TOWNSHIP : __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE;
        __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_POSTATTACK_DIALOG_COMMAND, [this.supportDefenceVO.targetActionType, this.bindFunction(this.hide), this.supportDefenceVO, this.getSelectedLordVO()]);
      }
    } else {
      __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog, new __dep_export_CastleCharacterYesNoOKDialogProperties.CastleCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_attack_noUnits"), 4, null, null, false));
    }
  };
  CastleSupportDefenceDialog.prototype.onMouseOver = function (__s96param0) {
    __s1param0.prototype.onMouseOver.call(this, __s96param0);
    switch (__s96param0.target) {
      case this._fightDetailView.layerLeft:
        this._fightDetailView.addGlow(this._fightDetailView.layerLeft);
        this.showSpyInfo(this._fightScreenVO.spyInfo.itemsLeft, __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_spyLog_flankSpy"), true, false, true);
        break;
      case this._fightDetailView.layerRight:
        this._fightDetailView.addGlow(this._fightDetailView.layerRight);
        this.showSpyInfo(this._fightScreenVO.spyInfo.itemsRight, __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_spyLog_flankSpy"), true, false, true);
        break;
      case this._fightDetailView.layerMiddle:
        this._fightDetailView.addGlow(this._fightDetailView.layerMiddle);
        this.showSpyInfo(this._fightScreenVO.spyInfo.itemsMiddle, __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_spyLog_frontSpy"), true, true, true);
        break;
      case this._fightDetailView.layerKeep:
        this._fightDetailView.addGlow(this._fightDetailView.layerKeep);
        this.showSpyInfo(this._fightScreenVO.spyInfo.itemsKeep, __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_spyLog_keepSpy"), false, false, true, true);
    }
    if (__s96param0.target instanceof __dep_exact_81dacdf05bd32292_1.getDefinitionByName("AttackItemContainer") || __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s96param0.target, "AttackSlotContainer") && __s96param0.target.btn_Plus.visible || __s96param0.target instanceof __dep_exact_81dacdf05bd32292_1.getDefinitionByName("SupportDefenceUnitContainer")) {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleSupportDefenceDialog.prototype.onMouseOut = function (__s100param0) {
    __s1param0.prototype.onMouseOut.call(this, __s100param0);
    switch (__s100param0.target) {
      case this._fightDetailView.layerLeft:
      case this._fightDetailView.layerRight:
      case this._fightDetailView.layerMiddle:
      case this._fightDetailView.layerKeep:
        this._fightDetailView.removeGlow();
    }
  };
  CastleSupportDefenceDialog.prototype.onClick = function (__s103param0) {
    __s1param0.prototype.onClick.call(this, __s103param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s103param0.target)) {
      switch (__s103param0.target) {
        case this.supportDefenceDialog.btn_close:
          this.hide();
          break;
        case this.supportDefenceDialog.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text("help_supportDefence"));
          break;
        case this.supportDefenceDialog.mc_townshipSupport:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_SupportOverviewDialog.SupportOverviewDialog, new __dep_export_SupportOverviewDialogProperties.SupportOverviewDialogProperties(this.targetArea));
      }
      if (this._fightDetailView) {
        switch (__s103param0.target) {
          case this._fightDetailView.layerKeep:
            if (this._fightDetailView.selectedTarget == this._fightDetailView.layerKeep) {
              this._fightDetailView.selectedTarget = null;
            } else {
              this._fightDetailView.selectedTarget = null;
              this.showSpyInfo(this._fightScreenVO.spyInfo.itemsKeep, __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_spyLog_keepSpy"), false, false, true, true);
              this._fightDetailView.selectedTarget = this._fightDetailView.layerKeep;
              this._fightDetailView.removeGlow();
            }
            this.updateSpyInfo();
            break;
          case this._fightDetailView.layerLeft:
            if (this._fightDetailView.selectedTarget == this._fightDetailView.layerLeft) {
              this._fightDetailView.selectedTarget = null;
            } else {
              this._fightDetailView.selectedTarget = null;
              this.showSpyInfo(this._fightScreenVO.spyInfo.itemsLeft, __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_spyLog_flankSpy"), true, false, true);
              this._fightDetailView.selectedTarget = this._fightDetailView.layerLeft;
              this._fightDetailView.removeGlow();
            }
            this.updateSpyInfo();
            break;
          case this._fightDetailView.layerRight:
            if (this._fightDetailView.selectedTarget == this._fightDetailView.layerRight) {
              this._fightDetailView.selectedTarget = null;
            } else {
              this._fightDetailView.selectedTarget = null;
              this.showSpyInfo(this._fightScreenVO.spyInfo.itemsRight, __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_spyLog_flankSpy"), true, false, true);
              this._fightDetailView.selectedTarget = this._fightDetailView.layerRight;
              this._fightDetailView.removeGlow();
            }
            this.updateSpyInfo();
            break;
          case this._fightDetailView.layerMiddle:
            if (this._fightDetailView.selectedTarget == this._fightDetailView.layerMiddle) {
              this._fightDetailView.selectedTarget = null;
            } else {
              this._fightDetailView.selectedTarget = null;
              this.showSpyInfo(this._fightScreenVO.spyInfo.itemsMiddle, __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_spyLog_frontSpy"), true, true, true);
              this._fightDetailView.selectedTarget = this._fightDetailView.layerMiddle;
              this._fightDetailView.removeGlow();
            }
            this.updateSpyInfo();
        }
      }
    }
  };
  CastleSupportDefenceDialog.prototype.updateLordPickerTooltip = function () {
    var __s117local0 = this._lordPicker.selectedLord ? this.getSelectedLordVO() : __dep_export_CastleModel.CastleModel.lordData.getDefaultLordByID(__dep_exact_26a421b704832cff_3.TravelConst.COMMANDER_PREMIUM);
    this._lordPicker.lordTooltipTrigger.setProperties(__s117local0, this.sourceArea, this.targetArea, __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_SUPPORT);
  };
  CastleSupportDefenceDialog.prototype.showCapacities = function () {
    if (!(this.supportDefenceVO.targetArea instanceof __dep_export_FactionCapitalMapobjectVO.FactionCapitalMapobjectVO) && !(this.supportDefenceVO.targetArea instanceof __dep_export_FactionTowerMapobjectVO.FactionTowerMapobjectVO) && !(this.supportDefenceVO.targetArea instanceof __dep_export_FactionVillageMapobjectVO.FactionVillageMapobjectVO) && !(this.supportDefenceVO.targetArea instanceof __dep_export_DaimyoTownshipMapObjectVO.DaimyoTownshipMapObjectVO) && !__dep_export_SpecialServerHelper.SpecialServerHelper.isOnSpecialServer) {
      var __s119local0 = [this.supportDefenceVO.unitsWall, this.supportDefenceVO.unitsWallLimit];
      var __s119local1 = [this.supportDefenceVO.unitsYard, this.supportDefenceVO.unitsYardLimit];
      var __s119local2 = [this.supportDefenceVO.allianceUnitYard, this.supportDefenceVO.allianceUnitYardLimit];
      this._itxt_wallCapacity.textContentVO.textReplacements = __s119local0;
      this._itxt_yardCapacity.textContentVO.textReplacements = __s119local1;
      this._itxt_supportCapacity.textContentVO.textReplacements = __s119local2;
      this.supportDefenceDialog.mc_supportLimit.visible = true;
    } else {
      this.supportDefenceDialog.mc_supportLimit.visible = false;
    }
  };
  CastleSupportDefenceDialog.prototype.updateSelectedLord = function () {
    __s1param0.prototype.updateSelectedLord.call(this);
    var __s123local0 = __dep_export_CastleModel.CastleModel.lordData.getLordByID(this._selectedLord.id);
    if (__s123local0 && __s123local0.assignedGeneralVO && !__s123local0.isBaron && this.supportDefenceVO.targetArea.areaType != __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER) {
      this.dialogDisp.icon_warning_unassign_general.visible = true;
      this.dialogDisp.icon_warning_unassign_general.toolTipText = __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_support_warning_generalAssigned_tooltip", [__s123local0.assignedGeneralVO.nameTextShort]);
    } else {
      this.dialogDisp.icon_warning_unassign_general.visible = false;
    }
  };
  Object.defineProperty(CastleSupportDefenceDialog.prototype, "supportDefenceDialog", {
    get: function () {
      return this.dialogDisp;
    },
    enumerable: true,
    configurable: true
  });
  CastleSupportDefenceDialog.NAME = "CastleSupportDefence";
  return CastleSupportDefenceDialog;
}(__dep_export_CastleFightDialog.CastleFightDialog);
exports.CastleSupportDefenceDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_StrongestDefenceSupportFlankStrategy = require("gge-module:export_StrongestDefenceSupportFlankStrategy");
var __dep_export_ToolUnitVO = require("gge-module:export_ToolUnitVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_CastleLordPicker = require("gge-module:export_CastleLordPicker");
var __dep_export_CastleAdvancedSupportDefenceDialogHelper = require("gge-module:export_CastleAdvancedSupportDefenceDialogHelper");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleAttackAddUnitsDialog = require("gge-module:export_CastleAttackAddUnitsDialog");
var __dep_export_CastleCharacterYesNoOKDialog = require("gge-module:export_CastleCharacterYesNoOKDialog");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleNoMoneyC1Dialog = require("gge-module:export_CastleNoMoneyC1Dialog");
var __dep_export_SupportOverviewDialog = require("gge-module:export_SupportOverviewDialog");
var __dep_export_SupportOverviewDialogProperties = require("gge-module:export_SupportOverviewDialogProperties");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
