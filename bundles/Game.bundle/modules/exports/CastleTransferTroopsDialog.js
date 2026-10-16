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
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_C2SSpecialEventInfoVO = require("gge-module:export_C2SSpecialEventInfoVO");
var __dep_export_C2SGetDetailedCastleListVO = require("gge-module:export_C2SGetDetailedCastleListVO");
var __dep_export_CastleEilandEvent = require("gge-module:export_CastleEilandEvent");
var __dep_export_CastleUnitCapacityEvent = require("gge-module:export_CastleUnitCapacityEvent");
var __dep_export_CastleInventoryComponentEvent = require("gge-module:export_CastleInventoryComponentEvent");
var __dep_export_CastleDetailedCastleListEvent = require("gge-module:export_CastleDetailedCastleListEvent");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleTreasureMapEvent = require("gge-module:export_CastleTreasureMapEvent");
var __dep_export_KingdomEnum = require("gge-module:export_KingdomEnum");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleCharacterYesNoOKDialogProperties = require("gge-module:export_CastleCharacterYesNoOKDialogProperties");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __dep_export_CastleSendTroopsAddUnitsDialogProperties = require("gge-module:export_CastleSendTroopsAddUnitsDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleTransferTroopsDialog() {
    var __s3local0 = this;
    __s3local0._destinationCapacity = __dep_exact_f855840627e6e145.int(Number.MAX_VALUE);
    __s3local0.insufficientFunds = false;
    __s3local0.targetCapacityArrived = false;
    __s3local0._currentFilter = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleTransferTroopsDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTransferTroopsDialog, __s1param0);
  CastleTransferTroopsDialog.prototype.initLoaded = function (__s5param0 = null) {
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancle, this.dialogDisp.btn_ok, this.dialogDisp.mc_selection.btn_leftArrow, this.dialogDisp.mc_selection.btn_rightArrow, this.dialogDisp.mc_inventory.btn_leftArrow, this.dialogDisp.mc_inventory.btn_rightArrow]);
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([this.dialogDisp.tab_all, this.dialogDisp.tab_attackUnits, this.dialogDisp.tab_defenceUnits, this.dialogDisp.tab_meadUnits, this.dialogDisp.tab_attackTools, this.dialogDisp.tab_defenceTools]);
    new __dep_exact_84d43d9c404bd4d8.BasicButtonGroup([this.dialogDisp.tab_all.basicButton, this.dialogDisp.tab_attackUnits.basicButton, this.dialogDisp.tab_defenceUnits.basicButton, this.dialogDisp.tab_meadUnits.basicButton, this.dialogDisp.tab_attackTools.basicButton, this.dialogDisp.tab_defenceTools.basicButton]).selectButton(this.dialogDisp.tab_all.basicButton);
    for (var __s5local0 = 0; __s5local0 < CastleTransferTroopsDialog.ITEMS_PER_PAGE; __s5local0++) {
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.mc_selection["btn_info" + __s5local0]);
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.dialogDisp.mc_inventory["btn_info" + __s5local0]);
    }
    this.dialogDisp.tab_all.toolTipText = "dialog_castleListOverview_all";
    this.dialogDisp.tab_attackUnits.toolTipText = "attackunit";
    this.dialogDisp.tab_defenceUnits.toolTipText = "defenceunit";
    this.dialogDisp.tab_meadUnits.visible = __dep_export_CastleModel.CastleModel.legendSkillData.meadUnitsUnlocked;
    this.dialogDisp.tab_meadUnits.toolTipText = "meadBeefUnits";
    this.dialogDisp.tab_attackTools.toolTipText = "attackTools";
    this.dialogDisp.tab_defenceTools.toolTipText = "defenceTools";
    this.dialogDisp.mc_limit.mouseChildren = false;
    this.dialogDisp.mc_costs.toolTipText = "travelCost";
    this.dialogDisp.mc_costs.mouseChildren = false;
    this.dialogDisp.mc_infoTime.toolTipText = "travelTime";
    this.dialogDisp.mc_infoTime.mouseChildren = false;
    this.dialogDisp.mc_tools.toolTipText = "dialog_recuit_tools";
    this.dialogDisp.mc_tools.mouseChildren = false;
    this.dialogDisp.mc_food.toolTipText = "foodwastage";
    this.dialogDisp.mc_food.mouseChildren = false;
    this.dialogDisp.mc_mead.toolTipText = "meadwastage";
    this.dialogDisp.mc_mead.mouseChildren = false;
    this.dialogDisp.mc_beef.toolTipText = "beefwastage";
    this.dialogDisp.mc_beef.mouseChildren = false;
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastleTransferTroopsDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.dialogDisp.mc_limit.toolTipText = this._destinationCapacity < Number.MAX_VALUE ? "generic_unit_capacity" : "panel_fight_unitCount";
    if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(this.dialogProperties, "CastleTransferTroopsToKingdomProperties")) {
      var __s9local0 = this.dialogProperties;
      if (__s9local0.targetKingdomVO.kID == __dep_export_KingdomEnum.KingdomEnum.ISLAND.id && __s9local0.targetKingdomVO.resetTime < __dep_export_ClientConstTime.ClientConstTime.HOURES_2_SEC * 2) {
        __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardOkDialogProperties("attention", "dialog_postAttack_eventNotLongEnough"));
        this.hide();
        return;
      }
    }
    this._castleSelector ||= new __dep_export_CastleSelectorComponent.CastleSelectorComponent(this.dialogDisp.castleSelector);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_season_sendTroops_title"));
    this.itxt_unitCount ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_limit.txt_unitCount, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
    this.itxt_toolCount ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_tools.txt_tools, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this.itxt_costValue ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_costValue, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    this.itxt_noTroops ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_noTroops, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_attack_noSpace"));
    this.i_iTime_txt_value ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_infoTime.txt_value, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    this.itxt_foodConsumption ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_food.txt_food, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this.itxt_meadConsumption ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_mead.txt_food, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this.itxt_beefConsumption ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_beef.txt_food, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this.lockDialog();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_help, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(this.dialogProperties.descriptionTextID));
    this.i_iTime_txt_value.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.getTimeToString(this.dialogProperties.unitTravelTime, __dep_exact_9e901e8e2483a22f_4.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
    this.dialogDisp.mc_infoTime.visible = this.dialogProperties.unitTravelTime > 0;
    this.dialogDisp.mc_costs.visible = this.dialogProperties.unitTravelTaxRate > 0;
    this._castleSelector.castleList.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    this._castleSelector.initComponent(__dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO(), __dep_export_CastleModel.CastleModel.userData.castleList, null, this.dialogProperties.exceptingKingdomID);
    this.controller.addEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDataUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    this.controller.addEventListener(__dep_export_CastleEilandEvent.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onEilandReset));
    __dep_export_CastleModel.CastleModel.treasureMapData.addEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onTreasureMapUpdated));
    this.controller.addEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.UNIT_UPDATED, this.bindFunction(this.onMilitaryUpdated));
    this.controller.addEventListener(__dep_export_CastleUnitCapacityEvent.CastleUnitCapacityEvent.UNIT_CAPACITY_CHANGED, this.bindFunction(this.onUnitCapacity));
    for (var __s9local1 = 0, __s9local2 = this.dialogProperties.additionalDataUpdateCommands; __s9local1 < __s9local2.length; __s9local1++) {
      var __s9local3 = __s9local2[__s9local1];
      if (__s9local3 !== undefined) {
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(__s9local3);
      }
    }
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSpecialEventInfoVO.C2SSpecialEventInfoVO());
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetDetailedCastleListVO.C2SGetDetailedCastleListVO(0));
    this.dialogDisp.mc_costs.txt_costValue.text = "0";
    this._destinationCapacity = __dep_exact_f855840627e6e145.int(this.dialogProperties.targetCapacity);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
    this.dialogDisp.btn_ok.toolTipText = null;
    this.targetCapacityArrived = true;
    this.updateInventories();
    this.setCostsAndFillItems();
    this._unitSelection.disp.addEventListener(__dep_export_CastleInventoryComponentEvent.CastleInventoryComponentEvent.SCROLL_INVENTORY, this.bindFunction(this.onScrollInventory));
    this._castleInventory.disp.addEventListener(__dep_export_CastleInventoryComponentEvent.CastleInventoryComponentEvent.SCROLL_INVENTORY, this.bindFunction(this.onScrollInventory));
  };
  CastleTransferTroopsDialog.prototype.onEilandReset = function (__s16param0) {
    if (this.dialogProperties.isSpecialEvent(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ISLAND_KINGDOM)) {
      this.hide();
    }
  };
  CastleTransferTroopsDialog.prototype.onSpecialEventRemoved = function (__s19param0) {
    if (this.dialogProperties.isSpecialEvent(__s19param0.specialEventVO.eventId)) {
      this.hide();
    }
  };
  CastleTransferTroopsDialog.prototype.onTreasureMapUpdated = function (__s22param0) {
    this._destinationCapacity = __dep_exact_f855840627e6e145.int(this.dialogProperties.targetCapacity);
    this.updateData();
  };
  CastleTransferTroopsDialog.prototype.onDataUpdated = function (__s24param0) {
    this.unLockDialog();
    this.updateData();
  };
  CastleTransferTroopsDialog.prototype.onMilitaryUpdated = function (__s26param0) {
    this.updateData();
  };
  CastleTransferTroopsDialog.prototype.updateData = function () {
    var __s28local0 = this._selectionInventory.getUnits(null);
    this.updateInventories();
    if (__s28local0.length > 0) {
      this.restoreSelection(__s28local0);
    } else {
      this.fillItems();
    }
  };
  CastleTransferTroopsDialog.prototype.restoreSelection = function (__s32param0) {
    for (var __s32local0 = 0; __s32local0 < __s32param0.length; __s32local0++) {
      if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(__s32param0[__s32local0], "BasicUnitVO")) {
        this.changeItemAmount([__s32param0[__s32local0], __s32param0[__s32local0].inventoryAmount]);
      }
    }
  };
  CastleTransferTroopsDialog.prototype.onSelectCastle = function (__s37param0 = null) {
    this.updateInventories();
    this.fillItems();
    this.itxt_costValue.textContentVO = new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.travelCostC1);
    this.dialogDisp.mc_kingdomCrest.gotoAndStop(this._castleSelector.selectedCastleVO.kingdomID + 1);
  };
  CastleTransferTroopsDialog.prototype.onUnitCapacity = function (__s39param0) {
    this.targetCapacityArrived = true;
    this.controller.removeEventListener(__dep_export_CastleUnitCapacityEvent.CastleUnitCapacityEvent.UNIT_CAPACITY_CHANGED, this.bindFunction(this.onUnitCapacity));
    this._destinationCapacity = __s39param0.capacity;
    this.updateData();
  };
  CastleTransferTroopsDialog.prototype.updateInventories = function () {
    this._selectionInventory = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    this._sourceInventory = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
    var __s41local0 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getVObyCastleID(this._castleSelector.selectedCastleVO.objectId, this._castleSelector.selectedCastleVO.kingdomID);
    if (__s41local0) {
      var __s41local1 = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
      __s41local1.addAll(__s41local0.unitInventory.getUnits(null));
      __s41local1.addAll(__s41local0.strongholdUnitInventory.getUnits(null));
      this._originalInventory = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
      this._originalInventory.addAll(__s41local1.getUnits(null));
      this._sourceInventory = new __dep_export_UnitInventoryDictionary.UnitInventoryDictionary();
      this._sourceInventory.addAll(this._originalInventory.getUnits(null));
      this.removeNotSendAbleTools();
    }
  };
  CastleTransferTroopsDialog.prototype.removeNotSendAbleTools = function () {
    this._sourceInventory.retainAll(this.bindFunction(function (__s46param0) {
      return !__dep_exact_81dacdf05bd32292.castAs(__s46param0, "ToolUnitVO") || !!this.dialogProperties.isToolTravelingAllowed(__s46param0);
    }));
  };
  CastleTransferTroopsDialog.prototype.fillItems = function () {
    this.itxt_noTroops.visible = false;
    var __s48local0 = __dep_exact_f855840627e6e145.int(this._selectionInventory.getSoldierCount());
    var __s48local1 = __s48local0 >= this._destinationCapacity;
    var __s48local2 = __s48local0 > this._destinationCapacity;
    var __s48local3 = __dep_exact_81dacdf05bd32292_2.getDefinitionByName("TransferTroopsInventoryItem");
    if (this._unitSelection) {
      this._unitSelection.updateInventory(this._selectionInventory.getUnits(null), __s48local1 ? null : this.getSoldiersNotInSelection(false));
    } else {
      this._unitSelection = new __dep_export_CastleInventoryComponent.CastleInventoryComponent(this.dialogDisp.mc_selection, CastleTransferTroopsDialog.ITEMS_PER_PAGE, this._selectionInventory.getUnits(null), __s48local3, 48, 60, true, null, 0, 6, 25);
      this._unitSelection.enableMouseWheel();
    }
    this._unitSelection.disp.addEventListener(__dep_export_CastleInventoryComponentEvent.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onClickSelectionItem));
    if (this._castleInventory) {
      if (__s48local1) {
        if (this._destinationCapacity == 0) {
          this.itxt_noTroops.visible = true;
          this._castleInventory.updateInventory(this.getFilteredUnits(this._sourceInventory), this.getFilteredUnits(this._sourceInventory));
        } else {
          this._castleInventory.updateInventory(this.getFilteredUnits(this._sourceInventory), this.getSoldiersNotInSelection(true));
        }
      } else {
        this._castleInventory.updateInventory(this.getFilteredUnits(this._sourceInventory));
      }
    } else {
      this._castleInventory = new __dep_export_CastleInventoryComponent.CastleInventoryComponent(this.dialogDisp.mc_inventory, CastleTransferTroopsDialog.ITEMS_PER_PAGE, this.getFilteredUnits(this._sourceInventory), __s48local3, 48, 60, true, null, 0, 6, 25);
      this._castleInventory.enableMouseWheel();
    }
    this._castleInventory.disp.addEventListener(__dep_export_CastleInventoryComponentEvent.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onClickInventoryItem));
    if (this.targetCapacityArrived) {
      if (this._destinationCapacity < Number.MAX_VALUE) {
        this.itxt_unitCount = this.textFieldManager.registerTextField(this.dialogDisp.mc_limit.txt_unitCount, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_3.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this._selectionInventory.getSoldierCount().toString(), this._destinationCapacity]));
        this.itxt_unitCount.color = __s48local1 ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, !__s48local2);
        this.dialogDisp.btn_ok.toolTipText = this.dialogDisp.btn_ok.enabled ? null : "dialog_season_unitCapacityFull";
      } else {
        this.itxt_unitCount = this.textFieldManager.registerTextField(this.dialogDisp.mc_limit.txt_unitCount, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this._selectionInventory.getSoldierCount()));
        this.itxt_unitCount.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      }
    } else {
      this.itxt_unitCount = this.textFieldManager.registerTextField(this.dialogDisp.mc_limit.txt_unitCount, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
    }
    this.itxt_toolCount.textContentVO.numberValue = this._selectionInventory.getToolCount();
    var __s48local4 = this.getSelectionFoodConsumption();
    this.itxt_foodConsumption.textContentVO.numberValue = __s48local4;
    this.itxt_foodConsumption.color = __s48local4 < 0 ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    var __s48local5 = this.getSelectionMeadConsumption();
    this.itxt_meadConsumption.textContentVO.numberValue = __s48local5;
    this.itxt_meadConsumption.color = __s48local5 < 0 ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    var __s48local6 = this.getSelectionBeefConsumption();
    this.itxt_beefConsumption.textContentVO.numberValue = __s48local6;
    this.itxt_beefConsumption.color = __s48local6 < 0 ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    this.updateInfoButtons();
  };
  CastleTransferTroopsDialog.prototype.getSelectionFoodConsumption = function () {
    var __s62local0 = 0;
    for (var __s62local1 = 0, __s62local2 = this._selectionInventory.getSoldiers(); __s62local1 < __s62local2.length; __s62local1++) {
      var __s62local3 = __s62local2[__s62local1];
      __s62local0 -= __s62local3.foodSupply * __s62local3.inventoryAmount;
    }
    return __s62local0;
  };
  CastleTransferTroopsDialog.prototype.getSelectionMeadConsumption = function () {
    var __s66local0 = 0;
    for (var __s66local1 = 0, __s66local2 = this._selectionInventory.getSoldiers(); __s66local1 < __s66local2.length; __s66local1++) {
      var __s66local3 = __s66local2[__s66local1];
      __s66local0 -= __s66local3.meadSupply * __s66local3.inventoryAmount;
    }
    return __s66local0;
  };
  CastleTransferTroopsDialog.prototype.getSelectionBeefConsumption = function () {
    var __s70local0 = 0;
    for (var __s70local1 = 0, __s70local2 = this._selectionInventory.getSoldiers(); __s70local1 < __s70local2.length; __s70local1++) {
      var __s70local3 = __s70local2[__s70local1];
      __s70local0 -= __s70local3.beefSupply * __s70local3.inventoryAmount;
    }
    return __s70local0;
  };
  CastleTransferTroopsDialog.prototype.getFilteredUnits = function (__s74param0) {
    var __s74local0;
    var __s74local1;
    var __s74local2 = 0;
    switch (this._currentFilter) {
      case CastleTransferTroopsDialog.FILTER_ALL:
      case CastleTransferTroopsDialog.FILTER_UNITS_MEAD:
        __s74local0 = __s74param0.getUnits(null);
        break;
      case CastleTransferTroopsDialog.FILTER_UNITS_ATTACK:
        __s74local0 = __s74param0.getOffensiveSoldiers(false);
        break;
      case CastleTransferTroopsDialog.FILTER_UNITS_DEFENCE:
        __s74local0 = __s74param0.getDefensiveSoldiers(false);
        break;
      case CastleTransferTroopsDialog.FILTER_TOOLS_ATTACK:
        __s74local0 = __s74param0.getUnitsByType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_TOOL_ATTACK);
        break;
      case CastleTransferTroopsDialog.FILTER_TOOLS_DEFENCE:
        __s74local0 = __s74param0.getUnitsByType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE);
    }
    if (this._currentFilter == CastleTransferTroopsDialog.FILTER_UNITS_MEAD) {
      for (__s74local1 = []; __s74local2 < __s74local0.length; __s74local2++) {
        if (__s74local0[__s74local2].meadSupply > 0 || __s74local0[__s74local2].beefSupply > 0) {
          __s74local1.push(__s74local0[__s74local2]);
        }
      }
    }
    if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(this.dialogProperties, "CastleTransferTroopsToSeasonProperties")) {
      __s74local0 = __s74local1 || __s74local0;
      __s74local1 = [];
      __s74local2 = 0;
      for (; __s74local2 < __s74local0.length; __s74local2++) {
        if (__s74local0[__s74local2].meadSupply <= 0 && __s74local0[__s74local2].beefSupply <= 0) {
          __s74local1.push(__s74local0[__s74local2]);
        }
      }
    }
    return __s74local1 || __s74local0;
  };
  CastleTransferTroopsDialog.prototype.getSoldiersNotInSelection = function (__s85param0) {
    var __s85local0 = [];
    var __s85local1 = __s85param0 ? this.getFilteredUnits(this._sourceInventory) : this._sourceInventory.getUnits(null);
    if (__s85local1 != null) {
      for (var __s85local2 = 0, __s85local3 = __s85local1; __s85local2 < __s85local3.length; __s85local2++) {
        var __s85local4 = __s85local3[__s85local2];
        if (__s85local4 !== undefined && __dep_exact_81dacdf05bd32292_3.instanceOfClass(__s85local4, "SoldierUnitVO") && this._selectionInventory.getUnitCountByWodId(__s85local4.wodId) == 0) {
          __s85local0.push(__s85local4);
        }
      }
    }
    return __s85local0;
  };
  CastleTransferTroopsDialog.prototype.onClickSelectionItem = function (__s91param0) {
    this.openSelectDialog(__s91param0.unitVO);
  };
  CastleTransferTroopsDialog.prototype.onClickInventoryItem = function (__s93param0) {
    this.openSelectDialog(__s93param0.unitVO);
  };
  CastleTransferTroopsDialog.prototype.openSelectDialog = function (__s95param0) {
    if (!this.isLocked) {
      var __s95local0 = __dep_exact_f855840627e6e145.int(Math.max(0, this._selectionInventory.getUnitCountByWodId(__s95param0.wodId)));
      var __s95local1 = 0;
      if (this._destinationCapacity != 0) {
        if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(__s95param0, "ToolUnitVO")) {
          __s95local1 = __dep_exact_f855840627e6e145.int(this._originalInventory.getUnitCountByWodId(__s95param0.wodId));
        } else {
          var __s95local2 = __dep_exact_f855840627e6e145.int(this._destinationCapacity - this._selectionInventory.getSoldierCount() + this._selectionInventory.getUnitCountByWodId(__s95param0.wodId));
          if (__s95local2 <= 0) {
            return;
          }
          __s95local1 = __dep_exact_f855840627e6e145.int(Math.min(Math.max(0, this._originalInventory.getUnitCountByWodId(__s95param0.wodId)), __s95local2));
        }
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(this.dialogProperties.addUnitsDialogKey, new __dep_export_CastleSendTroopsAddUnitsDialogProperties.CastleSendTroopsAddUnitsDialogProperties(__s95local0, __s95local1, __s95param0, this.bindFunction(this.changeItemAmount)));
      }
    }
  };
  CastleTransferTroopsDialog.prototype.changeItemAmount = function (__s102param0) {
    var __s102local0 = __s102param0.shift();
    var __s102local1 = __dep_exact_f855840627e6e145.int(this._originalInventory.getUnitCountByWodId(__s102local0.wodId));
    var __s102local2 = __dep_exact_f855840627e6e145.int(Math.min(__s102param0.shift(), __s102local1));
    this._selectionInventory.setUnit(__s102local0.wodId, __s102local2);
    this._sourceInventory.setUnit(__s102local0.wodId, __s102local1 - __s102local2);
    this.setCostsAndFillItems();
  };
  CastleTransferTroopsDialog.prototype.setCostsAndFillItems = function () {
    this.itxt_costValue.textContentVO = new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.travelCostC1);
    this.insufficientFunds = __dep_export_CastleModel.CastleModel.currencyData.c1Amount < this.travelCostC1;
    this.itxt_costValue.color = this.insufficientFunds ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    this.fillItems();
  };
  Object.defineProperty(CastleTransferTroopsDialog.prototype, "travelCostC1", {
    get: function () {
      var __s106local0 = this._selectionInventory.getUnits(null);
      var __s106local1 = 0;
      if (__s106local0 != null) {
        for (var __s106local2 = 0, __s106local3 = __s106local0; __s106local2 < __s106local3.length; __s106local2++) {
          var __s106local4 = __s106local3[__s106local2];
          if (__s106local4 !== undefined) {
            if (__dep_exact_81dacdf05bd32292_3.instanceOfClass(__s106local4, "SoldierUnitVO")) {
              __s106local1 += __s106local4.kingdomTravellingCost * (this.dialogProperties.unitTravelTaxRate / 100) * this._selectionInventory.getUnitCountByWodId(__s106local4.wodId);
            } else {
              __s106local1 += __dep_exact_26a421b704832cff_1.TravelConst.KINGDOM_TOOL_TRAVEL_COST_C1 * (this.dialogProperties.unitTravelTaxRate / 100) * this._selectionInventory.getUnitCountByWodId(__s106local4.wodId);
            }
          }
        }
      }
      __s106local1 = Math.round(__s106local1);
      return __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC1(__s106local1);
    },
    enumerable: true,
    configurable: true
  });
  CastleTransferTroopsDialog.prototype.onClick = function (__s114param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s114param0.target)) {
      switch (__s114param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancle:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.sendUnits();
          break;
        case this.dialogDisp.tab_all:
          this.currentFilter = CastleTransferTroopsDialog.FILTER_ALL;
          break;
        case this.dialogDisp.tab_attackUnits:
          this.currentFilter = CastleTransferTroopsDialog.FILTER_UNITS_ATTACK;
          break;
        case this.dialogDisp.tab_defenceUnits:
          this.currentFilter = CastleTransferTroopsDialog.FILTER_UNITS_DEFENCE;
          break;
        case this.dialogDisp.tab_meadUnits:
          this.currentFilter = CastleTransferTroopsDialog.FILTER_UNITS_MEAD;
          break;
        case this.dialogDisp.tab_attackTools:
          this.currentFilter = CastleTransferTroopsDialog.FILTER_TOOLS_ATTACK;
          break;
        case this.dialogDisp.tab_defenceTools:
          this.currentFilter = CastleTransferTroopsDialog.FILTER_TOOLS_DEFENCE;
          break;
        case this.dialogDisp.mc_selection.btn_leftArrow:
        case this.dialogDisp.mc_selection.btn_rightArrow:
        case this.dialogDisp.mc_inventory.btn_leftArrow:
        case this.dialogDisp.mc_inventory.btn_rightArrow:
          this.updateInfoButtons();
      }
      for (var __s114local0 = 0; __s114local0 < CastleTransferTroopsDialog.ITEMS_PER_PAGE; __s114local0++) {
        if (__s114param0.target == this.dialogDisp.mc_selection["btn_info" + __s114local0]) {
          this.showUnitInfo(__s114local0, this._unitSelection);
        } else if (__s114param0.target == this.dialogDisp.mc_inventory["btn_info" + __s114local0]) {
          this.showUnitInfo(__s114local0, this._castleInventory);
        }
      }
    }
  };
  CastleTransferTroopsDialog.prototype.updateInfoButtons = function () {
    for (var __s122local0 = 0; __s122local0 < CastleTransferTroopsDialog.ITEMS_PER_PAGE; __s122local0++) {
      this.dialogDisp.mc_selection["btn_info" + __s122local0].visible = __s122local0 + this._unitSelection.inventoryCurrentPage * CastleTransferTroopsDialog.ITEMS_PER_PAGE < this._unitSelection.inventoryLength;
      this.dialogDisp.mc_inventory["btn_info" + __s122local0].visible = __s122local0 + this._castleInventory.inventoryCurrentPage * CastleTransferTroopsDialog.ITEMS_PER_PAGE < this._castleInventory.inventoryLength;
    }
  };
  CastleTransferTroopsDialog.prototype.showUnitInfo = function (__s126param0, __s126param1) {
    var __s126local0 = __s126param1.inventoryArray[__s126param1.inventoryCurrentPage * CastleTransferTroopsDialog.ITEMS_PER_PAGE + __s126param0];
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(__s126local0));
  };
  CastleTransferTroopsDialog.prototype.sendUnits = function () {
    if (this._selectionInventory.getUnitCount(null) > 0) {
      if (this._selectionInventory.getSoldierCount() == 0) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog, new __dep_export_CastleCharacterYesNoOKDialogProperties.CastleCharacterYesNoOKDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_attack_noUnits"), 4, null, null, false));
      } else if (this.dialogProperties.insufficentTimeAlert) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardYesNoDialog.CastleStandardYesNoDialog, new __dep_exact_9e901e8e2483a22f_2.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("alert_season_sendTroops_insufficentTime"), this.bindFunction(this.sendUnitsCommand), this.bindFunction(this.dontSendUnitsCommand)));
      } else {
        this.sendUnitsCommand();
      }
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardOkDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("generic_alert_information"), __dep_exact_92d05af59ee2ff30.Localize.text("dialog_attack_noUnits")));
    }
  };
  CastleTransferTroopsDialog.prototype.sendUnitsCommand = function (__s135param0 = null) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(this.dialogProperties.getUnitTransferCommand(this._castleSelector, this._selectionInventory.getAsWodAmountArray(), null));
    if (!this.insufficientFunds) {
      this.hide();
    }
  };
  CastleTransferTroopsDialog.prototype.dontSendUnitsCommand = function (__s138param0 = null) {
    this.hide();
  };
  CastleTransferTroopsDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    if (this._castleSelector) {
      this._castleSelector.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    }
    this.controller.removeEventListener(__dep_export_CastleEilandEvent.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onEilandReset));
    this.controller.removeEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDataUpdated));
    this.controller.removeEventListener(__dep_export_CastleUnitCapacityEvent.CastleUnitCapacityEvent.UNIT_CAPACITY_CHANGED, this.bindFunction(this.onUnitCapacity));
    this.controller.removeEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.UNIT_UPDATED, this.bindFunction(this.onMilitaryUpdated));
    if (this._unitSelection) {
      this._unitSelection.disp.removeEventListener(__dep_export_CastleInventoryComponentEvent.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onClickSelectionItem));
    }
    if (this._castleInventory) {
      this._castleInventory.disp.removeEventListener(__dep_export_CastleInventoryComponentEvent.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onClickInventoryItem));
    }
    __dep_export_CastleModel.CastleModel.treasureMapData.removeEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onTreasureMapUpdated));
    if (this._unitSelection) {
      this._unitSelection.disp.removeEventListener(__dep_export_CastleInventoryComponentEvent.CastleInventoryComponentEvent.SCROLL_INVENTORY, this.bindFunction(this.onScrollInventory));
    }
    if (this._castleInventory) {
      this._castleInventory.disp.removeEventListener(__dep_export_CastleInventoryComponentEvent.CastleInventoryComponentEvent.SCROLL_INVENTORY, this.bindFunction(this.onScrollInventory));
    }
    if (this._unitSelection) {
      this._unitSelection.onHide();
    }
    if (this._castleInventory) {
      this._castleInventory.onHide();
    }
  };
  CastleTransferTroopsDialog.prototype.onScrollInventory = function (__s149param0) {
    this.updateInfoButtons();
  };
  CastleTransferTroopsDialog.prototype.destroy = function () {
    if (this._castleInventory) {
      this._castleInventory.destroy();
      this._castleInventory = null;
    }
    if (this._unitSelection) {
      this._unitSelection.destroy();
      this._unitSelection = null;
    }
    this.itxt_unitCount = null;
    this.itxt_costValue = null;
    this.itxt_noTroops = null;
    __s1param0.prototype.destroy.call(this);
  };
  Object.defineProperty(CastleTransferTroopsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTransferTroopsDialog.prototype, "currentFilter", {
    set: function (__s157param0) {
      this._currentFilter = __s157param0;
      this.fillItems();
    },
    enumerable: true,
    configurable: true
  });
  CastleTransferTroopsDialog.NAME = "CastleSendTroopsToSeason_R";
  CastleTransferTroopsDialog.FILTER_ALL = 0;
  CastleTransferTroopsDialog.FILTER_UNITS_ATTACK = 1;
  CastleTransferTroopsDialog.FILTER_UNITS_MEAD = 5;
  CastleTransferTroopsDialog.FILTER_UNITS_DEFENCE = 2;
  CastleTransferTroopsDialog.FILTER_TOOLS_ATTACK = 3;
  CastleTransferTroopsDialog.FILTER_TOOLS_DEFENCE = 4;
  CastleTransferTroopsDialog.ITEMS_PER_PAGE = 9;
  return CastleTransferTroopsDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleTransferTroopsDialog = __s0local0;
var __dep_export_UnitInventoryDictionary = require("gge-module:export_UnitInventoryDictionary");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleInventoryComponent = require("gge-module:export_CastleInventoryComponent");
var __dep_export_CastleSelectorComponent = require("gge-module:export_CastleSelectorComponent");
var __dep_export_CastleCharacterYesNoOKDialog = require("gge-module:export_CastleCharacterYesNoOKDialog");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
var __dep_export_CastleStandardYesNoDialog = require("gge-module:export_CastleStandardYesNoDialog");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
