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
var __dep_exact_9e901e8e2483a22f_6 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
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
var __dep_export_C2SGetCampUnitCapacity = require("gge-module:export_C2SGetCampUnitCapacity");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleUnitCapacityEvent = require("gge-module:export_CastleUnitCapacityEvent");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_CastleBasicAddUnitsDialogProperties = require("gge-module:export_CastleBasicAddUnitsDialogProperties");
var __dep_export_CastleCharacterYesNoOKDialogProperties = require("gge-module:export_CastleCharacterYesNoOKDialogProperties");
var __dep_export_CastleFightDialog = require("gge-module:export_CastleFightDialog");
var __dep_export_CastleNoMoneyC1DialogProperties = require("gge-module:export_CastleNoMoneyC1DialogProperties");
var __dep_export_CastleDefenceBuyUnitsDialogProperties = require("gge-module:export_CastleDefenceBuyUnitsDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleTroopSupportDialog() {
    var __s3local0 = this;
    __s3local0.startSoldierAmount = 0;
    __s3local0.targetCapacity = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
    __s3local0._remainingTimeForAttackPowerBuff = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleTroopSupportDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTroopSupportDialog, __s1param0);
  CastleTroopSupportDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.itxt_castlename = this.textFieldManager.registerTextField(this.userInfoMenu.txt_castlename, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.itxt_units = this.textFieldManager.registerTextField(this.supportDefenceDialog.mc_supportItemHolder.txt_units, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    this.itxt_tools = this.textFieldManager.registerTextField(this.supportDefenceDialog.mc_supportItemHolder.txt_tools, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.itxt_combatPower = this.textFieldManager.registerTextField(this.supportDefenceDialog.mc_supportItemHolder.txt_combatPower, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    this.itxt_foodConsumption = this.textFieldManager.registerTextField(this.supportDefenceDialog.mc_supportItemHolder.txt_foodConsumption, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    this.itxt_meadConsumption = this.textFieldManager.registerTextField(this.supportDefenceDialog.mc_supportItemHolder.mc_mead.txt_meadConsumption, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    this.itxt_beefConsumption = this.textFieldManager.registerTextField(this.supportDefenceDialog.mc_supportItemHolder.mc_beef.txt_beefConsumption, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
    this.itxt_info_time = this.textFieldManager.registerTextField(this.bottomMenu.component_Options.info_time.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.itxt_info_cost = this.textFieldManager.registerTextField(this.bottomMenu.component_Options.info_cost.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.bottomMenu.btn_cat_keep.visible = false;
    this.bottomMenu.btn_cat_wall.visible = false;
    this.bottomMenu.btn_cat_gate.visible = false;
    this.bottomMenu.btn_cat_field.visible = false;
    this.bottomMenu.btn_cat_moat.visible = false;
    this.bottomMenu.btn_cat_tools.visible = true;
    this.bottomMenu.btn_toolLimit.visible = false;
    this.bottomMenu.btn_tactics.toolTipText = "panel_deco_military";
    this.supportDefenceDialog.toolsConnector.visible = false;
    this.supportDefenceDialog.unitConnector.visible = false;
    this.supportDefenceDialog.unitSideConnectors.visible = false;
    this._advancedFightScreenHelper = new __dep_export_CastleAdvancedTroopSupportDialogHelper.CastleAdvancedTroopSupportDialogHelper(this);
    this.supportDefenceDialog.mc_supportItemHolder.tooltip_soldier.toolTipText = "panel_fight_unitCount";
    this.supportDefenceDialog.mc_supportItemHolder.tooltip_tools.toolTipText = "tut_defence_dragTools_title";
    this.supportDefenceDialog.mc_supportItemHolder.tooltip_combatPower.toolTipText = "panel_fight_battlestrength";
    this.supportDefenceDialog.mc_supportItemHolder.tooltip_foodConsumption.toolTipText = "foodwastage";
    this.supportDefenceDialog.mc_supportItemHolder.mc_mead.icon_mead.toolTipText = "meadwastage";
    this.supportDefenceDialog.mc_supportItemHolder.mc_beef.icon_beef.toolTipText = "beefwastage";
    this.supportDefenceDialog.mc_supportItemHolder.tooltip_meadConsumption.toolTipText = "meadwastage";
    this.supportDefenceDialog.mc_supportItemHolder.tooltip_beefConsumption.toolTipText = "beefwastage";
    this.supportDefenceDialog.btn_help.toolTipText = "generic_help";
  };
  CastleTroopSupportDialog.prototype.setAppearanceFightButton = function () {
    __s1param0.prototype.setAppearanceFightButton.call(this);
    this.bottomMenu.btn_close.visible = true;
    this.bottomMenu.btn_close.toolTipText = "ringmenu_sendTroups";
    var __s7local0 = this.textFieldManager.registerTextField(this.bottomMenu.btn_close.txt_name, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("ringmenu_sendTroups"));
    __s7local0.autoFitToBounds = true;
    __s7local0.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
  };
  CastleTroopSupportDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.showTactics();
    this.lockDialog();
    this.onSupportDefenceInfos();
    var __s9local0 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO;
    if (__s9local0) {
      this._remainingTimeForAttackPowerBuff = __dep_exact_f855840627e6e145.int(__s9local0.getRemainingBoostDuration(__dep_exact_26a421b704832cff.AllianceConst.TYPE_TEMP_ATTACK_POWER_BOOST));
      if (this._remainingTimeForAttackPowerBuff > 0) {
        __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondTimer));
      }
    }
    this.supportDefenceDialog.mc_supportItemHolder.mc_mead.visible = __dep_export_CastleModel.CastleModel.legendSkillData.meadUnitsUnlocked;
    this.supportDefenceDialog.mc_supportItemHolder.mc_beef.visible = __dep_export_CastleModel.CastleModel.legendSkillData.meadUnitsUnlocked;
  };
  CastleTroopSupportDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondTimer));
    this.controller.removeEventListener(__dep_export_CastleUnitCapacityEvent.CastleUnitCapacityEvent.UNIT_CAPACITY_CHANGED, this.bindFunction(this.onUnitCapacity));
  };
  CastleTroopSupportDialog.prototype.onSecondTimer = function (__s15param0) {
    this._remainingTimeForAttackPowerBuff--;
    if (this._remainingTimeForAttackPowerBuff <= 0) {
      __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondTimer));
      this.updateFightStrength();
    }
  };
  CastleTroopSupportDialog.prototype.onUnitCapacity = function (__s18param0) {
    this.controller.removeEventListener(__dep_export_CastleUnitCapacityEvent.CastleUnitCapacityEvent.UNIT_CAPACITY_CHANGED, this.bindFunction(this.onUnitCapacity));
    this.targetCapacity = __s18param0.capacity;
    this.fillDialog();
  };
  Object.defineProperty(CastleTroopSupportDialog.prototype, "supportDefenceVO", {
    get: function () {
      return this._fightScreenVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleTroopSupportDialog.prototype.onSupportDefenceInfos = function () {
    this._fightScreenVO = this.properties.troopSupportVO;
    if (this.supportDefenceVO.targetArea.kingdomID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID) {
      this.controller.addEventListener(__dep_export_CastleUnitCapacityEvent.CastleUnitCapacityEvent.UNIT_CAPACITY_CHANGED, this.bindFunction(this.onUnitCapacity));
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetCampUnitCapacity.C2SGetCampUnitCapacity(this.supportDefenceVO.targetArea.objectId));
    } else {
      this.targetCapacity = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
      this.fillDialog();
    }
    this.initLordPicker();
    this.hidePresetPicker();
    this.onSelectedLordChanged();
  };
  CastleTroopSupportDialog.prototype.onMouseOver = function (__s26param0) {
    __s1param0.prototype.onMouseOver.call(this, __s26param0);
    if (__s26param0.target instanceof __dep_exact_81dacdf05bd32292_1.getDefinitionByName("AttackItemContainer") || __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s26param0.target, "AttackSlotContainer") && __s26param0.target.btn_Plus.visible || __s26param0.target instanceof __dep_exact_81dacdf05bd32292_1.getDefinitionByName("TroopSupportUnitContainerHitArea") || __s26param0.target instanceof __dep_exact_81dacdf05bd32292_1.getDefinitionByName("TroopSupportToolContainer")) {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleTroopSupportDialog.prototype.fillDialog = function () {
    this.unLockDialog();
    this._unitMixedInventory = this.supportDefenceVO.unitInventory;
    this._unitMixedInventory.addAll(this.supportDefenceVO.strongholdUnitInventory.getUnits(null));
    this.startSoldierAmount = __dep_exact_f855840627e6e145.int(this._unitMixedInventory.getSoldierCount());
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.supportDefenceDialog.myCrest, this._fightScreenVO.sourceOwnerCrestVO);
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.supportDefenceDialog.targetCrest, this._fightScreenVO.targetOwnerCrestVO);
    this.itxt_castlename.textContentVO.stringValue = this._fightScreenVO.sourceArea.areaNameString;
    this.showUserLevel();
    this.showPlayerInfo(this._fightScreenVO.targetArea, this._fightScreenVO.targetOwnerLevel);
    this.setShopCategory(__dep_export_CastleFightDialog.CastleFightDialog.SHOP_CATEGORY_UNITS_DEF);
    this.bottomMenu.component_Options.wavePicker.visible = false;
    this.drawAreaVO();
    this.fillItems();
  };
  CastleTroopSupportDialog.prototype.calculateCombatStrength = function (__s31param0, __s31param1) {
    var __s31local0 = __s31param1.getAttackMeleeBonus();
    var __s31local1 = __s31param0.getAttackMeleeValue(this.getSelectedLordVO());
    var __s31local2 = this.calcFightStrength(__s31local1, __s31local0);
    var __s31local3 = __s31param1.getAttackRangeBonus();
    var __s31local4 = __s31param0.getAttackRangeValue(this.getSelectedLordVO());
    var __s31local5 = this.calcFightStrength(__s31local4, __s31local3);
    return __dep_exact_f855840627e6e145.int(__s31local5 + __s31local2);
  };
  CastleTroopSupportDialog.prototype.getAllianceAttackBoost = function () {
    var __s33local0;
    var __s33local1;
    if (__dep_export_CastleModel.CastleModel.allianceData && __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO && (__s33local0 = __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO, (__s33local1 = __dep_export_CastleModel.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(__dep_exact_26a421b704832cff.AllianceConst.TYPE_TEMP_ATTACK_POWER_BOOST, __s33local0.getBoostLevel(__dep_exact_26a421b704832cff.AllianceConst.TYPE_TEMP_ATTACK_POWER_BOOST)).getBonusVOByEffectType(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS)) && __s33local1.effect.isForAreaType(this._fightScreenVO.targetArea.areaType))) {
      return __s33local1.strength / 100;
    } else {
      return 0;
    }
  };
  CastleTroopSupportDialog.prototype.calcFightStrength = function (__s37param0, __s37param1) {
    return __s37param0 * (1 + __s37param1) * (1 + this.getAllianceAttackBoost());
  };
  CastleTroopSupportDialog.prototype.updateContainer = function () {
    this.fillItems();
  };
  CastleTroopSupportDialog.prototype.fillItems = function () {
    this._allContainerOnScreen = [];
    this.supportDefenceVO.supportUnits.maxItems = this.targetCapacity;
    if (this.supportDefenceVO) {
      this.fillItemContainer(this.supportDefenceDialog.mc_supportItemHolder.mc_units, this.supportDefenceVO.supportUnits, 10, 43);
    }
    this.fillItemContainer(this.supportDefenceDialog.mc_supportItemHolder.mc_tools, this.supportDefenceVO.supportTools, 9, 43);
    if (this.targetCapacity != Number.MAX_VALUE) {
      this.itxt_units.textContentVO = new __dep_exact_92d05af59ee2ff30.TextVO(__dep_exact_9e901e8e2483a22f_1.BasicModel.languageData.getTextById(__dep_exact_9e901e8e2483a22f_3.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.supportDefenceVO.supportUnits.sumOfItems, this.targetCapacity]));
    } else {
      this.itxt_units.textContentVO = new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.supportDefenceVO.supportUnits.sumOfItems);
    }
    this.itxt_tools.textContentVO.stringValue = String(this.supportDefenceVO.supportTools.sumOfItems);
    this.itxt_foodConsumption.textContentVO.numberValue = this.supportDefenceVO.supportUnits.getFoodConsumption();
    this.itxt_meadConsumption.textContentVO.numberValue = this.supportDefenceVO.supportUnits.getMeadConsumption();
    this.itxt_beefConsumption.textContentVO.numberValue = this.supportDefenceVO.supportUnits.getBeefConsumption();
    this.updateFightStrength();
  };
  CastleTroopSupportDialog.prototype.updateFightStrength = function () {
    this.itxt_combatPower.textContentVO.numberValue = this.calculateCombatStrength(this.supportDefenceVO.supportUnits, this.supportDefenceVO.supportTools);
  };
  CastleTroopSupportDialog.prototype.onSelectedLordChanged = function (__s48param0 = null) {
    this.updateSelectedLord();
    this.itxt_info_time.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_6.TimeStringHelper.getShortTimeStringBySeconds(this.supportDefenceVO.getTravelTime(this._fightScreenVO.targetArea, this.getSelectedLordVO()));
    this.itxt_info_cost.textContentVO.stringValue = String(this.supportDefenceVO.getTravelCost(this.getSelectedLordVO()));
    this.itxt_info_cost.color = this.supportDefenceVO.getTravelCost(this.getSelectedLordVO()) > __dep_export_CastleModel.CastleModel.currencyData.c1Amount ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    this.bottomMenu.component_Options.info_cost.mouseChildren = false;
    this.updateLordPickerTooltip();
  };
  CastleTroopSupportDialog.prototype.fillItemContainer = function (__s50param0, __s50param1, __s50param2, __s50param3) {
    __dep_exact_9e901e8e2483a22f_5.MovieClipHelper.clearMovieClip(__s50param0.mc_items);
    for (var __s50local0 = 0; __s50local0 < __s50param1.items.length; __s50local0++) {
      var __s50local1 = __s50param1.items[__s50local0];
      var __s50local2 = new Library.CastleInterfaceElements.AttackSlotContainer();
      __s50local2.itemVO = __s50local1;
      __s50local2.itemContainer = __s50param1;
      __s50local2.mc_bg.allowFastGlow = false;
      __s50local2.btn_Plus.x += 1;
      __s50local2.btn_Plus.y += 2;
      __s50param0.mc_items.addChild(__s50local2);
      if (!__s50local1.isFree()) {
        __dep_export_WodPicHelper.WodPicHelper.addUnitPic(__dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_UNIT).get(__s50local1.unitVO.wodId), __s50local2.content.mc_unit, 35, 35, __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[0], __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[1], 20);
      }
      this.initContainer(__s50local2);
      this.positionContainer(__s50local2, __s50param2, __s50local0, __s50param3);
      this._allContainerOnScreen.push(__s50local2);
    }
  };
  CastleTroopSupportDialog.prototype.showInstantBuyDialog = function (__s55param0) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleDefenceBuyUnitsDialog.CastleDefenceBuyUnitsDialog, new __dep_export_CastleDefenceBuyUnitsDialogProperties.CastleDefenceBuyUnitsDialogProperties(__s55param0, this.supportDefenceVO.sourceArea, -1));
  };
  CastleTroopSupportDialog.prototype.initContainer = function (__s57param0) {
    __s1param0.prototype.initContainer.call(this, __s57param0);
    __s57param0.scaleX = __s57param0.scaleY = 1;
    __s57param0.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
    __s57param0.content.mc_unit.alpha = 1;
    __s57param0.mouseChildren = false;
    __s57param0.content.mouseChildren = false;
    __s57param0.content.mouseEnabled = false;
    if (__s57param0.itemContainer.highlighted) {
      __s57param0.btn_Plus.gotoAndStop(2);
    } else {
      __s57param0.btn_Plus.gotoAndStop(1);
    }
    var __s57local0 = __s57param0.itemVO;
    var __s57local1 = __s57param0.itemContainer;
    __s57param0.content.infoPercent.visible = false;
    __s57param0.content.infoAmount.visible = !__s57local0.isFree();
    __s57param0.btn_Plus.visible = __s57local0.isFree() && !this._selectedDragUnit && !__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive;
    if (__s57local0.isFree()) {
      __s57param0.toolTipText = null;
    } else if (__s57local0.slotType == __dep_export_ToolUnitVO.ToolUnitVO.SLOTTYPE_SOLDIER) {
      var __s57local2 = __s57local0.unitVO;
      var __s57local3 = __dep_exact_9e901e8e2483a22f_4.MathBase.max(__s57local2.buffedMeleeAttack, __s57local2.buffedRangeAttack) * __s57local0.unitVO.inventoryAmount;
      __s57param0.toolTipText = {
        t: "panel_fight_battlestrength_value",
        p: [__s57local3]
      };
    } else {
      var __s57local4 = __s57local0.unitVO;
      __s57param0.toolTipText = __s57local4.getTooltipString(__s57local0.getAmount());
    }
    if (!__s57local0.isFree()) {
      this.textFieldManager.registerTextField(__s57param0.content.infoAmount.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s57local0.unitVO.inventoryAmount), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    }
    if (__s57local0.isFree() && __s57local1.isFull) {
      __s57param0.alpha = 0.3;
    }
  };
  CastleTroopSupportDialog.prototype.editUnitSlot = function (__s66param0, __s66param1, __s66param2) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAttackAddUnitsDialog.CastleAttackAddUnitsDialog, new __dep_export_CastleBasicAddUnitsDialogProperties.CastleBasicAddUnitsDialogProperties(__s66param0, this.bindFunction(this.changeItemAmount), __s66param2, true, __s66param1, this.targetCapacity, true));
  };
  CastleTroopSupportDialog.prototype.onUnitFitsSlot = function (__s68param0, __s68param1) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAttackAddUnitsDialog.CastleAttackAddUnitsDialog, new __dep_export_CastleBasicAddUnitsDialogProperties.CastleBasicAddUnitsDialogProperties(this._selectedDragUnit, this.bindFunction(this.changeItemAmount), __s68param0, false, __s68param1, this.targetCapacity, true));
  };
  CastleTroopSupportDialog.prototype.refreshElements = function () {
    this.fillItems();
    this.fillShopItemsByGroup();
    this.onSelectedLordChanged();
    __s1param0.prototype.refreshElements.call(this);
  };
  CastleTroopSupportDialog.prototype.getFilteredArray = function (__s72param0) {
    var __s72local0 = [];
    switch (__s72param0) {
      case __dep_export_CastleFightDialog.CastleFightDialog.SHOP_CATEGORY_UNITS_ATT:
        __s72local0 = this._unitMixedInventory.getOffensiveSoldiers(false);
        break;
      case __dep_export_CastleFightDialog.CastleFightDialog.SHOP_CATEGORY_UNITS_DEF:
        __s72local0 = this._unitMixedInventory.getDefensiveSoldiers(false);
        break;
      case __dep_export_CastleFightDialog.CastleFightDialog.SHOP_CATEGORY_UNITS:
        __s72local0 = this._unitMixedInventory.getOffensiveSoldiers(false);
        for (var __s72local1 = 0, __s72local2 = this._unitMixedInventory.getDefensiveSoldiers(false); __s72local1 < __s72local2.length; __s72local1++) {
          var __s72local3 = __s72local2[__s72local1];
          if (!(__s72local0.indexOf(__s72local3) > -1)) {
            __s72local0.push(__s72local3);
          }
        }
        break;
      case __dep_export_CastleFightDialog.CastleFightDialog.SHOP_CATEGORY_TOOLS:
        var __s72local4 = __dep_export_CastleModel.CastleModel.permanentCastleData.getUnitBaseLocation(this.supportDefenceVO.sourceArea);
        if (__s72local4) {
          var __s72local5 = __s72local4.unitsVO.getFightscreenTools();
          if (__s72local5 != null) {
            for (var __s72local6 = 0, __s72local7 = __s72local5; __s72local6 < __s72local7.length; __s72local6++) {
              var __s72local8 = __s72local7[__s72local6];
              if (__s72local8 !== undefined && __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s72local8, "ToolUnitVO") && !__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s72local8, "ShadowtoolUnitVO") && __s72local8.costC2 > 0 && (!this.supportDefenceVO.targetArea || __s72local8.isTravelingToTargetAllowed(this.supportDefenceVO.targetArea.kingdomID, this.supportDefenceVO.targetArea.areaType))) {
                __s72local8.inventoryAmount = 0;
                __s72local0.push(__s72local8);
              }
            }
          }
        }
        var __s72local9 = this._unitMixedInventory.getTools();
        if (__s72local9 != null) {
          for (var __s72local10 = 0, __s72local11 = __s72local9; __s72local10 < __s72local11.length; __s72local10++) {
            var __s72local12 = __s72local11[__s72local10];
            if (__s72local12 !== undefined && (!this.supportDefenceVO.targetArea || __s72local12.isTravelingToTargetAllowed(this.supportDefenceVO.targetArea.kingdomID, this.supportDefenceVO.targetArea.areaType))) {
              var __s72local13 = this.getUnitWodInArray(__s72local12.wodId, __s72local0);
              if (__s72local13) {
                __s72local13.inventoryAmount = __dep_exact_f855840627e6e145.int(this._unitMixedInventory.getUnitCountByWodId(__s72local12.wodId));
              } else {
                __s72local0.push(__s72local12);
              }
            }
          }
        }
    }
    __s72local0.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrder);
    return __s72local0;
  };
  CastleTroopSupportDialog.prototype.closeScreen = function () {
    if (this.supportDefenceVO.supportUnits.sumOfItems != 0) {
      if (this.supportDefenceVO.getTravelCost(this.getSelectedLordVO()) > __dep_export_CastleModel.CastleModel.currencyData.c1Amount) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleNoMoneyC1Dialog.CastleNoMoneyC1Dialog, new __dep_export_CastleNoMoneyC1DialogProperties.CastleNoMoneyC1DialogProperties());
      } else if (this.supportDefenceVO.supportUnits.sumOfItems >= this.startSoldierAmount && __dep_exact_81dacdf05bd32292_2.instanceOfClass(this.supportDefenceVO.sourceArea, "ResourceIsleMapobjectVO")) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog, new __dep_export_CastleCharacterYesNoOKDialogProperties.CastleCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30_1.Localize.text("island_unitWarningQuestion"), 4, this.bindFunction(this.showPostAttack), null, true));
      } else if (this.supportDefenceVO.supportUnits.sumOfItems >= this.startSoldierAmount && __dep_exact_81dacdf05bd32292_2.instanceOfClass(this.supportDefenceVO.sourceArea, "VillageMapobjectVO")) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog, new __dep_export_CastleCharacterYesNoOKDialogProperties.CastleCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30_1.Localize.text("village_unitWarningQuestion"), 4, this.bindFunction(this.showPostAttack), null, true));
      } else if (this.supportDefenceVO.supportUnits.sumOfItems >= this.startSoldierAmount && __dep_exact_81dacdf05bd32292_2.instanceOfClass(this.supportDefenceVO.sourceArea, "KingstowerMapobjectVO")) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog, new __dep_export_CastleCharacterYesNoOKDialogProperties.CastleCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30_1.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("kingstower_unitWarningQuestion")), 4, this.bindFunction(this.showPostAttack), null, true));
      } else if (this.supportDefenceVO.supportUnits.sumOfItems >= this.startSoldierAmount && __dep_exact_81dacdf05bd32292_2.instanceOfClass(this.supportDefenceVO.sourceArea, "MonumentMapobjectVO")) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog, new __dep_export_CastleCharacterYesNoOKDialogProperties.CastleCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30_1.Localize.text("monument_unitWarningQuestion"), 4, this.bindFunction(this.showPostAttack), null, true));
      } else if (this.supportDefenceVO.supportUnits.sumOfItems >= this.startSoldierAmount && __dep_exact_81dacdf05bd32292_2.instanceOfClass(this.supportDefenceVO.sourceArea, "LaboratoryMapobjectVO")) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog, new __dep_export_CastleCharacterYesNoOKDialogProperties.CastleCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30_1.Localize.text("laboratory_unitWarningQuestion"), 4, this.bindFunction(this.showPostAttack), null, true));
      } else {
        this.showPostAttack();
      }
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog, new __dep_export_CastleCharacterYesNoOKDialogProperties.CastleCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_attack_noUnits"), 4, null, null, false));
    }
  };
  CastleTroopSupportDialog.prototype.showPostAttack = function (__s100param0 = null) {
    this.supportDefenceVO.targetActionType = __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SENDTROUPS;
    __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_POSTATTACK_DIALOG_COMMAND, [this.supportDefenceVO.targetActionType, this.bindFunction(this.hide), this.supportDefenceVO, this.getSelectedLordVO()]);
  };
  CastleTroopSupportDialog.prototype.onClick = function (__s102param0) {
    __s1param0.prototype.onClick.call(this, __s102param0);
    switch (__s102param0.target) {
      case this.supportDefenceDialog.btn_close:
        this.hide();
        break;
      case this.supportDefenceDialog.btn_help:
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text("help_supportDefence"));
    }
  };
  Object.defineProperty(CastleTroopSupportDialog.prototype, "supportDefenceDialog", {
    get: function () {
      return this.dialogDisp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTroopSupportDialog.prototype, "hasKeepLayerAction", {
    get: function () {
      return false;
    },
    set: function (__s109param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleFightDialog.CastleFightDialog.prototype, "hasKeepLayerAction").set.call(this, __s109param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTroopSupportDialog.prototype, "hasLeftFlankLayerAction", {
    get: function () {
      return false;
    },
    set: function (__s113param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleFightDialog.CastleFightDialog.prototype, "hasLeftFlankLayerAction").set.call(this, __s113param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTroopSupportDialog.prototype, "hasRightFlankLayerAction", {
    get: function () {
      return false;
    },
    set: function (__s117param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleFightDialog.CastleFightDialog.prototype, "hasRightFlankLayerAction").set.call(this, __s117param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTroopSupportDialog.prototype, "hasMoatLayerAction", {
    get: function () {
      return false;
    },
    set: function (__s121param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleFightDialog.CastleFightDialog.prototype, "hasMoatLayerAction").set.call(this, __s121param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTroopSupportDialog.prototype, "hasMiddleFlankLayerAction", {
    get: function () {
      return false;
    },
    set: function (__s125param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleFightDialog.CastleFightDialog.prototype, "hasMiddleFlankLayerAction").set.call(this, __s125param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTroopSupportDialog.prototype, "hasFrontLayerAction", {
    get: function () {
      return false;
    },
    set: function (__s129param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleFightDialog.CastleFightDialog.prototype, "hasFrontLayerAction").set.call(this, __s129param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleTroopSupportDialog.prototype.updateLordPickerTooltip = function () {
    if (this._lordPicker) {
      var __s131local0 = this._lordPicker.selectedLord ? this.getSelectedLordVO() : __dep_export_CastleModel.CastleModel.lordData.getDefaultLordByID(__dep_exact_26a421b704832cff_2.TravelConst.COMMANDER_PREMIUM);
      this._lordPicker.lordTooltipTrigger.setProperties(__s131local0, null, this.targetArea, __dep_export_LordEffectHelper.LordEffectHelper.STRATEGY_STATION);
    }
  };
  CastleTroopSupportDialog.NAME = "CastleTroopSupport";
  return CastleTroopSupportDialog;
}(__dep_export_CastleFightDialog.CastleFightDialog);
exports.CastleTroopSupportDialog = __s0local0;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_ToolUnitVO = require("gge-module:export_ToolUnitVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_LordEffectHelper = require("gge-module:export_LordEffectHelper");
var __dep_export_CastleAdvancedTroopSupportDialogHelper = require("gge-module:export_CastleAdvancedTroopSupportDialogHelper");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleAttackAddUnitsDialog = require("gge-module:export_CastleAttackAddUnitsDialog");
var __dep_export_CastleCharacterYesNoOKDialog = require("gge-module:export_CastleCharacterYesNoOKDialog");
var __dep_export_CastleNoMoneyC1Dialog = require("gge-module:export_CastleNoMoneyC1Dialog");
var __dep_export_CastleDefenceBuyUnitsDialog = require("gge-module:export_CastleDefenceBuyUnitsDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
