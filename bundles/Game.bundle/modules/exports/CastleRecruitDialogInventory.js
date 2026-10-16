Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SGetUnitInventoryVO = require("gge-module:export_C2SGetUnitInventoryVO");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleRecruitDialogInventory(__s3param0) {
    var __s3local0 = this;
    __s3local0.mcInfoKnightsX = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._inventoryListComponent = new __dep_export_CastleInventoryListComponent.CastleInventoryListComponent(__s3local0.dialogDisp.itemSelection);
    __s3local0.dialogDisp.infoBarons.toolTipText = "dialog_startAttack_availableBarons";
    __dep_export_CastleRecruitDialogUnits.CastleRecruitDialogUnits.setIconInInfoArea(__dep_export_CastleRecruitDialogUnits.CastleRecruitDialogUnits.ICON_BARONS, __s3local0.dialogDisp.infoBarons);
    __s3local0.dialogDisp.infoKnights.toolTipText = "dialog_startAttack_availableGenerals";
    __dep_export_CastleRecruitDialogUnits.CastleRecruitDialogUnits.setIconInInfoArea(__dep_export_CastleRecruitDialogUnits.CastleRecruitDialogUnits.ICON_KNIGHTS, __s3local0.dialogDisp.infoKnights);
    __s3local0.dialogDisp.infoFood.toolTipText = "foodproduction";
    __s3local0.dialogDisp.infoUnitCount.toolTipText = "amount";
    __s3local0.dialogDisp.btn_filter_melee.toolTipText = "melees";
    __s3local0.dialogDisp.btn_filter_range.toolTipText = "ranges";
    __s3local0.dialogDisp.btn_filter_mead_melee.toolTipText = "meleeMeadUnits";
    __s3local0.dialogDisp.btn_filter_mead_range.toolTipText = "rangedMeadUnits";
    __s3local0.dialogDisp.btn_filter_all.toolTipText = "allUnits";
    __s3local0.dialogDisp.btn_filter_attacktools.toolTipText = "attackTools";
    __s3local0.dialogDisp.btn_filter_defencetools.toolTipText = "defenceTools";
    __s3local0.dialogDisp.btn_filter_stronghold.toolTipText = "stronghold_name";
    __s3local0.dialogDisp.btn_filter_eventUnits.toolTipText = "eventUnits";
    __s3local0.dialogDisp.btn_filter_berimond_auxiliaries.toolTipText = "auxiliaries";
    __s3local0.dialogDisp.infoAuxiliariesCount.toolTipText = "auxiliaries";
    __s3local0.dialogDisp.infoMead.toolTipText = "meadproduction";
    __s3local0.dialogDisp.infoBeef.toolTipText = "beefproduction";
    __s3local0.textFieldManager.registerTextField(__s3local0.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_recuit_inventory")).autoFitToBounds = true;
    __s3local0.i_barons_txt_value = __s3local0.textFieldManager.registerTextField(__s3local0.dialogDisp.infoBarons.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0]));
    __s3local0.i_knights_txt_value = __s3local0.textFieldManager.registerTextField(__s3local0.dialogDisp.infoKnights.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0]));
    __s3local0.i_ucount_txt_value = __s3local0.textFieldManager.registerTextField(__s3local0.dialogDisp.infoUnitCount.txt_value, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(0, {
      compactThreshold: 1000000,
      compactFractionalDigits: 1
    }, 1));
    __s3local0.i_food_txt_value = __s3local0.textFieldManager.registerTextField(__s3local0.dialogDisp.infoFood.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    __s3local0.i_mead_txt_value = __s3local0.textFieldManager.registerTextField(__s3local0.dialogDisp.infoMead.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    __s3local0.i_beef_txt_value = __s3local0.textFieldManager.registerTextField(__s3local0.dialogDisp.infoBeef.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    __s3local0.i_auxcount_txt_value = __s3local0.textFieldManager.registerTextField(__s3local0.dialogDisp.infoAuxiliariesCount.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRecruitDialogInventory, __s1param0);
  CastleRecruitDialogInventory.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this._inventoryListComponent.destroy();
  };
  CastleRecruitDialogInventory.prototype.show = function (__s7param0) {
    var __s7local0 = __dep_export_Iso.Iso.data.objects.provider.hasFunctionalBuildingByType(__dep_export_IsoObjectEnum.IsoObjectEnum.STRONGHOLD);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_filter_stronghold, __s7local0);
    this.controller.addEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.DOWNTIME_STATUS_UPDATED, this.bindFunction(this.onDowntimeStatusUpdated));
    this.dialogDisp.itemSelection.mc_unitTooltip.visible = false;
    this.i_barons_txt_value.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.lordData.numAvailableBarons, __dep_export_CastleModel.CastleModel.lordData.numAllBarons];
    this.i_knights_txt_value.textContentVO.textReplacements = [__dep_export_CastleModel.CastleModel.lordData.numAvailableCommanders, __dep_export_CastleModel.CastleModel.lordData.numAllCommanders];
    if (!this.currentFilter || this.currentFilter == CastleRecruitDialogInventory.FILTER_UNITS_STRONGHOLD && !__s7local0) {
      this.currentFilter = CastleRecruitDialogInventory.FILTER_UNITS_ALL;
    }
    this.refreshInventory();
    this.onInventoryUpdated(null);
    this._inventoryListComponent.show();
    this.initFilterButtons();
    __s1param0.prototype.show.call(this, __s7param0);
  };
  CastleRecruitDialogInventory.prototype.onDowntimeStatusUpdated = function (__s10param0) {
    this.fillInfoTextFields();
  };
  CastleRecruitDialogInventory.prototype.setElementsVisibility = function () {
    this.dialogDisp.btn_filter_stronghold.visible = !__dep_export_CastleModel.CastleModel.areaData.activeArea.isFactionCamp;
    this.dialogDisp.btn_filter_berimond_auxiliaries.visible = __dep_export_CastleModel.CastleModel.areaData.activeArea.isFactionCamp;
  };
  CastleRecruitDialogInventory.prototype.hide = function () {
    this.controller.removeEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.DOWNTIME_STATUS_UPDATED, this.bindFunction(this.onDowntimeStatusUpdated));
    __s1param0.prototype.hide.call(this);
  };
  CastleRecruitDialogInventory.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_recuit_inventory"), __dep_exact_92d05af59ee2ff30.Localize.text("help_unitList"));
  };
  CastleRecruitDialogInventory.prototype.onClick = function (__s18param0) {
    __s1param0.prototype.onClick.call(this, __s18param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s18param0.target)) {
      switch (__s18param0.target) {
        case this.dialogDisp.btn_filter_melee:
          this.currentFilter = CastleRecruitDialogInventory.FILTER_UNITS_MELEE;
          break;
        case this.dialogDisp.btn_filter_range:
          this.currentFilter = CastleRecruitDialogInventory.FILTER_UNITS_RANGE;
          break;
        case this.dialogDisp.btn_filter_mead_melee:
          this.currentFilter = CastleRecruitDialogInventory.FILTER_UNITS_MELEE_MEAD;
          break;
        case this.dialogDisp.btn_filter_mead_range:
          this.currentFilter = CastleRecruitDialogInventory.FILTER_UNITS_RANGE_MEAD;
          break;
        case this.dialogDisp.btn_filter_all:
          this.currentFilter = CastleRecruitDialogInventory.FILTER_UNITS_ALL;
          break;
        case this.dialogDisp.btn_filter_attacktools:
          this.currentFilter = CastleRecruitDialogInventory.FILTER_TOOLS_ATTACK;
          break;
        case this.dialogDisp.btn_filter_defencetools:
          this.currentFilter = CastleRecruitDialogInventory.FILTER_TOOLS_DEFENCE;
          break;
        case this.dialogDisp.btn_filter_stronghold:
          this.currentFilter = CastleRecruitDialogInventory.FILTER_UNITS_STRONGHOLD;
          break;
        case this.dialogDisp.btn_filter_eventUnits:
          this.currentFilter = CastleRecruitDialogInventory.FILTER_EVENTUNIT;
          break;
        case this.dialogDisp.btn_filter_berimond_auxiliaries:
          this.currentFilter = CastleRecruitDialogInventory.FILTER_FACTION;
      }
    }
  };
  Object.defineProperty(CastleRecruitDialogInventory.prototype, "currentFilter", {
    get: function () {
      return this._currentFilter;
    },
    set: function (__s24param0) {
      if (__s24param0 != this._currentFilter) {
        this._currentFilter = __s24param0;
        this._inventoryListComponent.currentPage = 0;
        this.initFilterButtons();
        this.fillUnitItemsByGroup();
        this.fillInfoTextFields();
        this.initItemSelectionEnablement();
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitDialogInventory.prototype.initItemSelectionEnablement = function () {
    if (this._currentFilter == CastleRecruitDialogInventory.FILTER_TOOLS_ATTACK || this._currentFilter == CastleRecruitDialogInventory.FILTER_TOOLS_DEFENCE) {
      this.dialogDisp.itemSelection.i0.enabled = false;
      this.dialogDisp.itemSelection.i1.enabled = false;
      this.dialogDisp.itemSelection.i2.enabled = false;
      this.dialogDisp.itemSelection.i3.enabled = false;
      this.dialogDisp.itemSelection.i4.enabled = false;
    } else {
      this.dialogDisp.itemSelection.i0.enabled = true;
      this.dialogDisp.itemSelection.i1.enabled = true;
      this.dialogDisp.itemSelection.i2.enabled = true;
      this.dialogDisp.itemSelection.i3.enabled = true;
      this.dialogDisp.itemSelection.i4.enabled = true;
    }
  };
  CastleRecruitDialogInventory.prototype.initBaronCommanderInfo = function () {
    var __s31local0 = __dep_export_CastleModel.CastleModel.areaData.activeArea.isFactionCamp;
    this.dialogDisp.infoBarons.visible = !__s31local0;
    this.mcInfoKnightsX ||= this.dialogDisp.infoKnights.x;
    this.dialogDisp.infoKnights.x = __s31local0 ? 0 : this.mcInfoKnightsX;
  };
  CastleRecruitDialogInventory.prototype.initFilterButtons = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_filter_melee, this.dialogDisp.btn_filter_range, this.dialogDisp.btn_filter_mead_melee, this.dialogDisp.btn_filter_mead_range, this.dialogDisp.btn_filter_all, this.dialogDisp.btn_filter_attacktools, this.dialogDisp.btn_filter_defencetools, this.dialogDisp.btn_filter_stronghold, this.dialogDisp.btn_filter_eventUnits, this.dialogDisp.btn_filter_berimond_auxiliaries], __dep_exact_84d43d9c404bd4d8.TwoStateIconZoomButton);
    this.dialogDisp.btn_filter_melee.basicButton.selectButton = this._currentFilter == CastleRecruitDialogInventory.FILTER_UNITS_MELEE;
    this.dialogDisp.btn_filter_range.basicButton.selectButton = this._currentFilter == CastleRecruitDialogInventory.FILTER_UNITS_RANGE;
    this.dialogDisp.btn_filter_mead_melee.basicButton.selectButton = this._currentFilter == CastleRecruitDialogInventory.FILTER_UNITS_MELEE_MEAD;
    this.dialogDisp.btn_filter_mead_range.basicButton.selectButton = this._currentFilter == CastleRecruitDialogInventory.FILTER_UNITS_RANGE_MEAD;
    this.dialogDisp.btn_filter_all.basicButton.selectButton = this._currentFilter == CastleRecruitDialogInventory.FILTER_UNITS_ALL;
    this.dialogDisp.btn_filter_attacktools.basicButton.selectButton = this._currentFilter == CastleRecruitDialogInventory.FILTER_TOOLS_ATTACK;
    this.dialogDisp.btn_filter_defencetools.basicButton.selectButton = this._currentFilter == CastleRecruitDialogInventory.FILTER_TOOLS_DEFENCE;
    this.dialogDisp.btn_filter_stronghold.basicButton.selectButton = this._currentFilter == CastleRecruitDialogInventory.FILTER_UNITS_STRONGHOLD;
    this.dialogDisp.btn_filter_eventUnits.basicButton.selectButton = this._currentFilter == CastleRecruitDialogInventory.FILTER_EVENTUNIT;
    this.dialogDisp.btn_filter_berimond_auxiliaries.basicButton.selectButton = this._currentFilter == CastleRecruitDialogInventory.FILTER_FACTION;
    var __s33local0 = __dep_export_Iso.Iso.data.objects.provider.getObjectByType(__dep_export_IsoObjectEnum.IsoObjectEnum.BARRACKS);
    var __s33local1 = __dep_export_CastleModel.CastleModel.areaData.activeArea.isFactionCamp;
    this.dialogDisp.btn_filter_mead_range.visible = !__s33local1 && __s33local0 && __s33local0.level >= 14;
    this.dialogDisp.btn_filter_mead_melee.visible = !__s33local1 && __s33local0 && __s33local0.level >= 14;
  };
  CastleRecruitDialogInventory.prototype.refreshInventory = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetUnitInventoryVO.C2SGetUnitInventoryVO());
  };
  CastleRecruitDialogInventory.prototype.fillInfoTextFields = function () {
    var __s37local0 = __dep_exact_9e901e8e2483a22f_1.MathBase.floor(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.foodProduction, 1);
    var __s37local1 = __dep_exact_9e901e8e2483a22f_1.MathBase.floor(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.meadProduction, 1);
    var __s37local2 = __dep_exact_9e901e8e2483a22f_1.MathBase.floor(__dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.beefProduction, 1);
    this.i_food_txt_value.color = __dep_export_CastleModel.CastleModel.userData.foodFrozen ? __dep_export_ClientConstColor.ClientConstColor.FONT_FROZEN : __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.foodProduction < 0 ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    this.i_food_txt_value.textContentVO.numberValue = __s37local0;
    this.i_mead_txt_value.color = __dep_export_CastleModel.CastleModel.userData.foodFrozen ? __dep_export_ClientConstColor.ClientConstColor.FONT_FROZEN : __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.meadProduction < 0 ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    this.i_mead_txt_value.textContentVO.numberValue = __s37local1;
    this.i_beef_txt_value.color = __dep_export_CastleModel.CastleModel.userData.foodFrozen ? __dep_export_ClientConstColor.ClientConstColor.FONT_FROZEN : __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.beefProduction < 0 ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    this.i_beef_txt_value.textContentVO.numberValue = __s37local2;
    this.i_ucount_txt_value.textContentVO.numberValue = CastleRecruitDialogInventory.getSoldierCountWithoutAuxiliaries(this._inventoryListComponent.unitInventory);
    this.dialogDisp.infoFood.gotoAndStop(1);
    this.dialogDisp.infoAuxiliariesCount.visible = __dep_export_CastleModel.CastleModel.areaData.activeArea.isFactionCamp;
    var __s37local3 = this.getFilteredArray(CastleRecruitDialogInventory.FILTER_UNITS_RANGE_MEAD).length > 0 || this.getFilteredArray(CastleRecruitDialogInventory.FILTER_UNITS_MELEE_MEAD).length > 0;
    switch (this._currentFilter) {
      case CastleRecruitDialogInventory.FILTER_FACTION:
      case CastleRecruitDialogInventory.FILTER_UNITS_ALL:
      case CastleRecruitDialogInventory.FILTER_UNITS_MELEE:
      case CastleRecruitDialogInventory.FILTER_UNITS_RANGE:
      case CastleRecruitDialogInventory.FILTER_UNITS_MELEE_MEAD:
      case CastleRecruitDialogInventory.FILTER_UNITS_RANGE_MEAD:
      case CastleRecruitDialogInventory.FILTER_UNITS_STRONGHOLD:
        this.dialogDisp.infoUnitCount.toolTipText = "dialog_recuit_unitsAvialable";
        this.dialogDisp.infoFood.visible = true;
        this.dialogDisp.infoMead.visible = __s37local3;
        this.dialogDisp.infoBeef.visible = __s37local3;
        this.dialogDisp.infoUnitCount.gotoAndStop(1);
        break;
      case CastleRecruitDialogInventory.FILTER_EVENTUNIT:
        this.dialogDisp.infoUnitCount.toolTipText = "amount";
        this.dialogDisp.infoFood.visible = true;
        this.dialogDisp.infoMead.visible = __s37local3;
        this.dialogDisp.infoBeef.visible = __s37local3;
        this.dialogDisp.infoUnitCount.gotoAndStop(1);
        break;
      default:
        this.dialogDisp.infoFood.visible = false;
        this.dialogDisp.infoMead.visible = false;
        this.dialogDisp.infoBeef.visible = false;
        this.dialogDisp.infoUnitCount.toolTipText = "dialog_recuit_toolsavailable";
        this.dialogDisp.infoUnitCount.gotoAndStop(2);
    }
    this.dialogDisp.infoFood.mc_frozen.visible = __dep_export_CastleModel.CastleModel.userData.foodFrozen;
    this.dialogDisp.infoMead.mc_frozen.visible = __dep_export_CastleModel.CastleModel.userData.foodFrozen;
    this.dialogDisp.infoBeef.mc_frozen.visible = __dep_export_CastleModel.CastleModel.userData.foodFrozen;
    this.dialogDisp.infoFood.toolTipText = __dep_export_CastleModel.CastleModel.userData.foodFrozen ? "foodProductionPerHour_freeze" : "foodproduction";
    this.dialogDisp.infoMead.toolTipText = __dep_export_CastleModel.CastleModel.userData.foodFrozen ? "meadProductionPerHour_freeze" : "meadproduction";
    this.dialogDisp.infoBeef.toolTipText = __dep_export_CastleModel.CastleModel.userData.foodFrozen ? "beefProductionPerHour_freeze" : "beefproduction";
  };
  CastleRecruitDialogInventory.getSoldierCountWithoutAuxiliaries = function (__s40param0) {
    var __s40local0 = 0;
    if (__s40param0 != null) {
      for (var __s40local1 = 0, __s40local2 = __s40param0; __s40local1 < __s40local2.length; __s40local1++) {
        var __s40local3 = __s40local2[__s40local1];
        if (__s40local3 !== undefined) {
          if (!__s40local3.isAuxiliary) {
            __s40local0 += __s40local3.inventoryAmount;
          }
        }
      }
    }
    return __s40local0;
  };
  CastleRecruitDialogInventory.prototype.onInventoryUpdated = function (__s47param0) {
    this.fillUnitItemsByGroup();
    this.fillInfoTextFields();
    this.setElementsVisibility();
    this.initBaronCommanderInfo();
  };
  CastleRecruitDialogInventory.prototype.fillUnitItemsByGroup = function () {
    var __s49local0 = this.getFilteredArray();
    __s49local0.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrder);
    this._inventoryListComponent.changeUnitInventory(__s49local0);
  };
  CastleRecruitDialogInventory.prototype.getFilteredArray = function (__s51param0 = null) {
    var __s51local0;
    var __s51local1 = __dep_export_CastleModel.CastleModel.militaryData.unitInventory;
    var __s51local2 = __dep_export_CastleModel.CastleModel.militaryData.unitStrongholdInventory;
    var __s51local3 = __s51param0 || this._currentFilter;
    switch (__s51local3) {
      case CastleRecruitDialogInventory.FILTER_UNITS_ALL:
        __s51local0 = (__s51local0 = __s51local1.getSoldiers()).concat(__s51local2.getSoldiers());
        break;
      case CastleRecruitDialogInventory.FILTER_FACTION:
        __s51local0 = (__s51local0 = __s51local1.getUnits(CastleRecruitDialogInventory.onlyAuxiliaries)).concat(__s51local2.getUnits(CastleRecruitDialogInventory.onlyAuxiliaries));
        break;
      case CastleRecruitDialogInventory.FILTER_UNITS_MELEE:
      case CastleRecruitDialogInventory.FILTER_UNITS_MELEE_MEAD:
        __s51local0 = (__s51local0 = __s51local1.getUnitsByType(CastleRecruitDialogInventory.FILTER_UNITS_MELEE)).concat(__s51local2.getUnitsByType(CastleRecruitDialogInventory.FILTER_UNITS_MELEE));
        break;
      case CastleRecruitDialogInventory.FILTER_UNITS_RANGE:
      case CastleRecruitDialogInventory.FILTER_UNITS_RANGE_MEAD:
        __s51local0 = (__s51local0 = __s51local1.getUnitsByType(CastleRecruitDialogInventory.FILTER_UNITS_RANGE)).concat(__s51local2.getUnitsByType(CastleRecruitDialogInventory.FILTER_UNITS_RANGE));
        break;
      case CastleRecruitDialogInventory.FILTER_TOOLS_ATTACK:
        __s51local0 = (__s51local0 = __s51local1.getUnitsByType(CastleRecruitDialogInventory.FILTER_TOOLS_ATTACK)).concat(__s51local2.getUnitsByType(CastleRecruitDialogInventory.FILTER_TOOLS_ATTACK));
        break;
      case CastleRecruitDialogInventory.FILTER_TOOLS_DEFENCE:
        __s51local0 = (__s51local0 = __s51local1.getUnitsByType(CastleRecruitDialogInventory.FILTER_TOOLS_DEFENCE)).concat(__s51local2.getUnitsByType(CastleRecruitDialogInventory.FILTER_TOOLS_DEFENCE));
        break;
      case CastleRecruitDialogInventory.FILTER_UNITS_STRONGHOLD:
        __s51local0 = __s51local2.getUnits(null);
        break;
      case CastleRecruitDialogInventory.FILTER_EVENTUNIT:
        __s51local0 = (__s51local0 = __s51local1.getEventUnits()).concat(__s51local2.getEventUnits());
        break;
      default:
        __s51local0 = [];
    }
    if (__s51local3 == CastleRecruitDialogInventory.FILTER_UNITS_MELEE_MEAD || __s51local3 == CastleRecruitDialogInventory.FILTER_UNITS_RANGE_MEAD) {
      var __s51local4 = [];
      for (var __s51local5 = 0; __s51local5 < __s51local0.length; __s51local5++) {
        if (__s51local0[__s51local5].meadSupply > 0 || __s51local0[__s51local5].beefSupply > 0) {
          __s51local4.push(__s51local0[__s51local5]);
        }
      }
      return __s51local4;
    }
    if (__s51local3 == CastleRecruitDialogInventory.FILTER_UNITS_MELEE || __s51local3 == CastleRecruitDialogInventory.FILTER_UNITS_RANGE) {
      __s51local4 = [];
      __s51local5 = 0;
      for (; __s51local5 < __s51local0.length; __s51local5++) {
        if (__s51local0[__s51local5].foodSupply > 0) {
          __s51local4.push(__s51local0[__s51local5]);
        }
      }
      return __s51local4;
    }
    if (__dep_exact_81dacdf05bd32292.castAs(__dep_export_Iso.Iso.data.objects.provider.getObjectByType(__dep_export_IsoObjectEnum.IsoObjectEnum.FACTION_UNIT_CAMP), "FactionUnitCampBuildingVO")) {
      this.i_auxcount_txt_value.textContentVO.numberValue = __dep_export_CastleModel.CastleModel.militaryData.unitInventory.getUnitCount(CastleRecruitDialogInventory.onlyAuxiliaries);
    }
    return __s51local0;
  };
  CastleRecruitDialogInventory.onlyAuxiliaries = function (__s63param0) {
    return __s63param0.isAuxiliary;
  };
  Object.defineProperty(CastleRecruitDialogInventory.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitDialogInventory.__initialize_static_members = function () {
    CastleRecruitDialogInventory.NAME = "CastleRecruitDialogInventory";
    CastleRecruitDialogInventory.FILTER_UNITS_MELEE = __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE;
    CastleRecruitDialogInventory.FILTER_UNITS_RANGE = __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE;
    CastleRecruitDialogInventory.FILTER_UNITS_MELEE_MEAD = __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE_MEAD;
    CastleRecruitDialogInventory.FILTER_UNITS_RANGE_MEAD = __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE_MEAD;
    CastleRecruitDialogInventory.FILTER_UNITS_ALL = "allUnits";
    CastleRecruitDialogInventory.FILTER_TOOLS_ATTACK = __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_TOOL_ATTACK;
    CastleRecruitDialogInventory.FILTER_TOOLS_DEFENCE = __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE;
    CastleRecruitDialogInventory.FILTER_UNITS_STRONGHOLD = __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_STRONGHOLD;
    CastleRecruitDialogInventory.FILTER_EVENTUNIT = __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_EVENTUNIT;
    CastleRecruitDialogInventory.FILTER_FACTION = "allAuxiliaries";
  };
  return CastleRecruitDialogInventory;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleRecruitDialogInventory = __s0local0;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleRecruitDialogUnits = require("gge-module:export_CastleRecruitDialogUnits");
var __dep_export_CastleInventoryListComponent = require("gge-module:export_CastleInventoryListComponent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
__s0local0.__initialize_static_members();
