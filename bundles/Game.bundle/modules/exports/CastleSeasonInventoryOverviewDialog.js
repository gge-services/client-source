Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2STreasureMapsVO = require("gge-module:export_C2STreasureMapsVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleInventoryComponentEvent = require("gge-module:export_CastleInventoryComponentEvent");
var __dep_export_CastleMilitaryDataEvent = require("gge-module:export_CastleMilitaryDataEvent");
var __dep_export_CastleTreasureMapEvent = require("gge-module:export_CastleTreasureMapEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleSeasonInventoryOverviewDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleSeasonInventoryOverviewDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSeasonInventoryOverviewDialog, __s1param0);
  CastleSeasonInventoryOverviewDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.i_morality_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_morality.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, []));
    this.i_stone_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_stone.txt_value, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.i_wood_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_wood.txt_value, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.i_food_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_food.txt_value, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.i_storage_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_storage.txt_value, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.i_units_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_units.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.mc_unitComponent.btn_leftArrow, this.dialogDisp.mc_unitComponent.btn_rightArrow]);
  };
  CastleSeasonInventoryOverviewDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_seasonInventory_title")).autoFitToBounds = true;
    this.dialogDisp.icon_wood.toolTipText = "wood";
    this.dialogDisp.icon_morality.toolTipText = "morality";
    this.dialogDisp.icon_stone.toolTipText = "stone";
    this.dialogDisp.icon_storage.toolTipText = "storage_capacity";
    this.dialogDisp.icon_units.toolTipText = "dialog_recuit_units";
    this.dialogDisp.icon_food.toolTipText = "food";
    this.onSomethingChanged();
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onSomethingChanged));
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onSomethingChanged));
    this.controller.addEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onMilitaryChanged));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSomethingChanged));
    __dep_export_CastleModel.CastleModel.treasureMapData.addEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onSomethingChanged));
    this.getUpdatedData();
  };
  CastleSeasonInventoryOverviewDialog.prototype.onSomethingChanged = function (__s9param0 = null) {
    if (__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO) {
      if (!__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s9param0, "CastleTreasureMapEvent") || !!__s9param0.treasureMapVO) {
        this.i_morality_txt_value.textContentVO.textReplacements = [__dep_exact_f855840627e6e145.int(CastleSeasonInventoryOverviewDialog.morality * 100)];
        this.i_stone_txt_value.textContentVO.stringValue = String(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.resStorageStone);
        this.i_wood_txt_value.textContentVO.stringValue = String(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.resStorageWood);
        this.i_food_txt_value.textContentVO.stringValue = String(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.resStorageFood);
        this.i_storage_txt_value.textContentVO.stringValue = String(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.resStorageMaxMixedCapacity);
        this.i_units_txt_value.textContentVO.textId = __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
        this.i_units_txt_value.textContentVO.textReplacements = [String(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.unitInventory.getSoldierCount()), String(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.unitStorage)];
        this.i_units_txt_value.autoFitToBounds = true;
      }
    } else {
      this.hide();
    }
  };
  Object.defineProperty(CastleSeasonInventoryOverviewDialog, "morality", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID) {
        return __dep_exact_26a421b704832cff_1.FactionConst.getMoraleModifier(__dep_export_CastleModel.CastleModel.areaData.activeArea.morality.morality);
      } else {
        return __dep_exact_26a421b704832cff.CombatConst.getMoralBonus(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.morality);
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleSeasonInventoryOverviewDialog.prototype.onMilitaryChanged = function (__s18param0 = null) {
    if (this.unitComponent) {
      this.unitComponent.destroy();
      this.unitComponent.disp.removeEventListener(__dep_export_CastleInventoryComponentEvent.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onItemClick));
    }
    this.unitComponent = new __dep_export_CastleInventoryComponent.CastleInventoryComponent(this.dialogDisp.mc_unitComponent, 11, __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.unitInventory.getUnits(null), Library.CastleSeasonInventoryOverviewExt.CastleSeasonInventoryUnitList_Item, 32, 40, true, null, 0, 4);
    this.unitComponent.disp.addEventListener(__dep_export_CastleInventoryComponentEvent.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onItemClick));
  };
  CastleSeasonInventoryOverviewDialog.prototype.onItemClick = function (__s21param0) {
    __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(__s21param0.unitVO, __s21param0.crestVO));
  };
  CastleSeasonInventoryOverviewDialog.prototype.onClick = function (__s23param0) {
    switch (__s23param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleSeasonInventoryOverviewDialog.prototype.hideLoaded = function (__s26param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s26param0);
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onSomethingChanged));
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onSomethingChanged));
    this.controller.removeEventListener(__dep_export_CastleMilitaryDataEvent.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onMilitaryChanged));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSomethingChanged));
    __dep_export_CastleModel.CastleModel.treasureMapData.removeEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onSomethingChanged));
    if (this.unitComponent) {
      this.unitComponent.disp.removeEventListener(__dep_export_CastleInventoryComponentEvent.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onItemClick));
    }
  };
  CastleSeasonInventoryOverviewDialog.prototype.getUpdatedData = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2STreasureMapsVO.C2STreasureMapsVO(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID));
  };
  CastleSeasonInventoryOverviewDialog.prototype.destroy = function () {
    if (this.unitComponent) {
      this.unitComponent.destroy();
    }
    __s1param0.prototype.destroy.call(this);
  };
  CastleSeasonInventoryOverviewDialog.__initialize_static_members = function () {
    CastleSeasonInventoryOverviewDialog.NAME = "CastleSeasonInventoryOverviewExt";
  };
  return CastleSeasonInventoryOverviewDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleSeasonInventoryOverviewDialog = __s0local0;
var __dep_export_CastleInventoryComponent = require("gge-module:export_CastleInventoryComponent");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
