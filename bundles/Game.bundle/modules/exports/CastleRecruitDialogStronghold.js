Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_C2SGetUnitInventoryVO = require("gge-module:export_C2SGetUnitInventoryVO");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleRecruitDialogStronghold(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._inventoryListComponent = new __dep_export_CastleInventoryStrongholdListComponent.CastleInventoryStrongholdListComponent(__s3local0.dialogDisp.itemSelection);
    __s3local0._strongholdInventoryListComponent = new __dep_export_StrongholdInventoryListComponent.StrongholdInventoryListComponent(__s3local0.dialogDisp.strongholdItemSelection);
    __s3local0.initButtons();
    __s3local0.dialogDisp.btn_filter_melee.toolTipText = "melees";
    __s3local0.dialogDisp.btn_filter_range.toolTipText = "ranges";
    __s3local0.dialogDisp.btn_filter_mead_melee.toolTipText = "meleeMeadUnits";
    __s3local0.dialogDisp.btn_filter_mead_range.toolTipText = "rangedMeadUnits";
    __s3local0.dialogDisp.btn_filter_all.toolTipText = "allUnits";
    __s3local0.dialogDisp.btn_filter_eventUnits.toolTipText = "eventUnits";
    __s3local0.dialogDisp.iconStronghold.toolTipText = "stronghold_UnitInside";
    __s3local0.textFieldManager.registerTextField(__s3local0.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("stronghold_name"));
    __s3local0.i_strongholdcap_txt_value = __s3local0.textFieldManager.registerTextField(__s3local0.dialogDisp.tfCapacity, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, 0]));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRecruitDialogStronghold, __s1param0);
  CastleRecruitDialogStronghold.prototype.initButtons = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_filter_melee, this.dialogDisp.btn_filter_range, this.dialogDisp.btn_filter_mead_melee, this.dialogDisp.btn_filter_mead_range, this.dialogDisp.btn_filter_all, this.dialogDisp.btn_filter_eventUnits], __dep_exact_84d43d9c404bd4d8.TwoStateIconZoomButton);
  };
  CastleRecruitDialogStronghold.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this._inventoryListComponent.destroy();
    this._strongholdInventoryListComponent.destroy();
  };
  CastleRecruitDialogStronghold.prototype.show = function (__s9param0) {
    this.controller.addEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    this.currentFilter = __s9param0[1] ? __s9param0[1] : CastleRecruitDialogStronghold.FILTER_UNITS_ALL;
    CastleRecruitDialogStronghold.refreshInventory();
    this.onInventoryUpdated(null);
    this._inventoryListComponent.show();
    this._strongholdInventoryListComponent.show();
    __s1param0.prototype.show.call(this, __s9param0);
  };
  CastleRecruitDialogStronghold.prototype.hide = function () {
    this.controller.removeEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    __s1param0.prototype.hide.call(this);
  };
  CastleRecruitDialogStronghold.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_recruit_stronghold"), __dep_exact_92d05af59ee2ff30.Localize.text("help_strongholdWindow"));
  };
  CastleRecruitDialogStronghold.prototype.onClick = function (__s15param0) {
    __s1param0.prototype.onClick.call(this, __s15param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target)) {
      switch (__s15param0.target) {
        case this.dialogDisp.btn_filter_melee:
          this.currentFilter = CastleRecruitDialogStronghold.FILTER_UNITS_MELEE;
          break;
        case this.dialogDisp.btn_filter_range:
          this.currentFilter = CastleRecruitDialogStronghold.FILTER_UNITS_RANGE;
          break;
        case this.dialogDisp.btn_filter_mead_melee:
          this.currentFilter = CastleRecruitDialogStronghold.FILTER_UNITS_MELEE_MEAD;
          break;
        case this.dialogDisp.btn_filter_mead_range:
          this.currentFilter = CastleRecruitDialogStronghold.FILTER_UNITS_RANGE_MEAD;
          break;
        case this.dialogDisp.btn_filter_all:
          this.currentFilter = CastleRecruitDialogStronghold.FILTER_UNITS_ALL;
          break;
        case this.dialogDisp.btn_filter_eventUnits:
          this.currentFilter = CastleRecruitDialogStronghold.FILTER_EVENTUNIT;
      }
    }
  };
  Object.defineProperty(CastleRecruitDialogStronghold.prototype, "currentFilter", {
    get: function () {
      return this._currentFilter;
    },
    set: function (__s21param0) {
      if (__s21param0 != this._currentFilter) {
        this._currentFilter = __s21param0;
        this._inventoryListComponent.currentPage = 0;
        this.initFilterButtons();
        this.fillActiveUnitItemsByGroup();
        this.fillStrongholdUnitItemsByGroup();
        this.fillInfoTextFields();
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitDialogStronghold.prototype.initFilterButtons = function () {
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_filter_melee, this._currentFilter == CastleRecruitDialogStronghold.FILTER_UNITS_MELEE);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_filter_range, this._currentFilter == CastleRecruitDialogStronghold.FILTER_UNITS_RANGE);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_filter_mead_melee, this._currentFilter == CastleRecruitDialogStronghold.FILTER_UNITS_MELEE_MEAD);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_filter_mead_range, this._currentFilter == CastleRecruitDialogStronghold.FILTER_UNITS_RANGE_MEAD);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_filter_all, this._currentFilter == CastleRecruitDialogStronghold.FILTER_UNITS_ALL);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.dialogDisp.btn_filter_eventUnits, this._currentFilter == CastleRecruitDialogStronghold.FILTER_EVENTUNIT);
    this.dialogDisp.btn_filter_mead_melee.visible = __dep_export_CastleModel.CastleModel.legendSkillData.meadUnitsUnlocked;
    this.dialogDisp.btn_filter_mead_range.visible = __dep_export_CastleModel.CastleModel.legendSkillData.meadUnitsUnlocked;
  };
  CastleRecruitDialogStronghold.refreshInventory = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetUnitInventoryVO.C2SGetUnitInventoryVO());
  };
  CastleRecruitDialogStronghold.prototype.fillInfoTextFields = function () {
    this.i_strongholdcap_txt_value.textContentVO.textReplacements = [String(__dep_export_CastleModel.CastleModel.militaryData.strongholdUnitCount), String(__dep_export_CastleModel.CastleModel.militaryData.currentHiddenSoldierCapacity)];
    if (__dep_export_CastleModel.CastleModel.militaryData.strongholdUnitCount == __dep_export_CastleModel.CastleModel.militaryData.currentHiddenSoldierCapacity) {
      this.dialogDisp.hitAreaStrongholdCap.toolTipText = "dialog_stronghold_full";
      this.i_strongholdcap_txt_value.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_RED;
    } else {
      this.dialogDisp.hitAreaStrongholdCap.toolTipText = "dialog_stronghold_capacity";
      this.i_strongholdcap_txt_value.color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    }
  };
  CastleRecruitDialogStronghold.prototype.onInventoryUpdated = function (__s32param0) {
    this.fillActiveUnitItemsByGroup();
    this.fillStrongholdUnitItemsByGroup();
    this.fillInfoTextFields();
  };
  CastleRecruitDialogStronghold.prototype.fillActiveUnitItemsByGroup = function () {
    var __s34local0 = this.getFilteredArray();
    __s34local0.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrder);
    this._inventoryListComponent.changeUnitInventory(__s34local0);
  };
  CastleRecruitDialogStronghold.prototype.fillStrongholdUnitItemsByGroup = function () {
    var __s36local0 = __dep_export_CastleModel.CastleModel.militaryData.unitStrongholdInventory.getSoldiers();
    __s36local0.sort(__dep_export_ClientConstSort.ClientConstSort.sortByUnitSortOrder);
    this._strongholdInventoryListComponent.changeUnitInventory(__s36local0);
  };
  CastleRecruitDialogStronghold.prototype.getFilteredArray = function (__s38param0 = null) {
    var __s38local0;
    var __s38local1;
    var __s38local2 = __dep_export_CastleModel.CastleModel.militaryData.unitInventory;
    var __s38local3 = __s38param0 || this._currentFilter;
    var __s38local4 = 0;
    switch (__s38local3) {
      case CastleRecruitDialogStronghold.FILTER_UNITS_ALL:
        __s38local0 = __s38local2.getSoldiers();
        break;
      case CastleRecruitDialogStronghold.FILTER_UNITS_MELEE_MEAD:
      case CastleRecruitDialogStronghold.FILTER_UNITS_MELEE:
        __s38local0 = __s38local2.getUnitsByType(CastleRecruitDialogStronghold.FILTER_UNITS_MELEE);
        break;
      case CastleRecruitDialogStronghold.FILTER_UNITS_RANGE_MEAD:
      case CastleRecruitDialogStronghold.FILTER_UNITS_RANGE:
        __s38local0 = __s38local2.getUnitsByType(CastleRecruitDialogStronghold.FILTER_UNITS_RANGE);
        break;
      case CastleRecruitDialogStronghold.FILTER_EVENTUNIT:
        __s38local0 = __s38local2.getEventUnits();
        break;
      default:
        return [];
    }
    if (__s38local3 == CastleRecruitDialogStronghold.FILTER_UNITS_MELEE || __s38local3 == CastleRecruitDialogStronghold.FILTER_UNITS_RANGE) {
      for (__s38local1 = []; __s38local4 < __s38local0.length; __s38local4++) {
        if (__s38local0[__s38local4].foodSupply > 0) {
          __s38local1.push(__s38local0[__s38local4]);
        }
      }
    }
    if (__s38local3 == CastleRecruitDialogStronghold.FILTER_UNITS_MELEE_MEAD || __s38local3 == CastleRecruitDialogStronghold.FILTER_UNITS_RANGE_MEAD) {
      for (__s38local1 = []; __s38local4 < __s38local0.length; __s38local4++) {
        if (__s38local0[__s38local4].meadSupply > 0 || __s38local0[__s38local4].beefSupply > 0) {
          __s38local1.push(__s38local0[__s38local4]);
        }
      }
    }
    return __s38local1 || __s38local0;
  };
  Object.defineProperty(CastleRecruitDialogStronghold.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitDialogStronghold.__initialize_static_members = function () {
    CastleRecruitDialogStronghold.NAME = "CastleRecruitDialogStronghold";
    CastleRecruitDialogStronghold.FILTER_UNITS_MELEE = __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE;
    CastleRecruitDialogStronghold.FILTER_UNITS_RANGE = __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE;
    CastleRecruitDialogStronghold.FILTER_UNITS_MELEE_MEAD = __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE_MEAD;
    CastleRecruitDialogStronghold.FILTER_UNITS_RANGE_MEAD = __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE_MEAD;
    CastleRecruitDialogStronghold.FILTER_UNITS_ALL = "allUnits";
    CastleRecruitDialogStronghold.FILTER_EVENTUNIT = __dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_EVENTUNIT;
  };
  return CastleRecruitDialogStronghold;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleRecruitDialogStronghold = __s0local0;
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleInventoryStrongholdListComponent = require("gge-module:export_CastleInventoryStrongholdListComponent");
var __dep_export_StrongholdInventoryListComponent = require("gge-module:export_StrongholdInventoryListComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
__s0local0.__initialize_static_members();
