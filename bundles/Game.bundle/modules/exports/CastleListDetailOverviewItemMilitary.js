Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleInventoryComponentEvent = require("gge-module:export_CastleInventoryComponentEvent");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleTextFieldHelper = require("gge-module:export_CastleTextFieldHelper");
var __dep_export_CastleStartAttackDialogProperties = require("gge-module:export_CastleStartAttackDialogProperties");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __s0local0 = function (__s1param0) {
  function CastleListDetailOverviewItemMilitary(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.itxt_units = __s3local0.textFieldManager.registerTextField(__s3param0.mc_units.txt_units, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(0, {
      compactThreshold: 1000000
    }));
    __s3local0.itxt_foodConsumption = __s3local0.textFieldManager.registerTextField(__s3param0.mc_foodConsumption.txt_foodConsumption, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(0, {
      compactThreshold: 1000000
    }));
    __s3local0.itxt_foodConsumption.autoFitToBounds = true;
    __s3local0.itxt_meadConsumption = __s3local0.textFieldManager.registerTextField(__s3param0.mc_meadConsumption.txt_foodConsumption, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(0, {
      compactThreshold: 1000000
    }));
    __s3local0.itxt_meadConsumption.autoFitToBounds = true;
    __s3local0.itxt_beefConsumption = __s3local0.textFieldManager.registerTextField(__s3param0.mc_beefConsumption.txt_foodConsumption, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(0, {
      compactThreshold: 1000000
    }));
    __s3local0.itxt_beefConsumption.autoFitToBounds = true;
    __s3param0.mc_units.toolTipText = "dialog_listOverview_tabMilitaryUnitInCastle_tt";
    __s3param0.mc_foodConsumption.toolTipText = "foodProductionPerHour";
    __s3param0.mc_meadConsumption.toolTipText = "meadProductionPerHour";
    __s3param0.mc_beefConsumption.toolTipText = "beefProductionPerHour";
    __s3param0.mc_units.mouseChildren = false;
    __s3param0.mc_foodConsumption.mouseChildren = false;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3param0.mc_inventory.btn_rightArrow, __s3param0.mc_inventory.btn_leftArrow, __s3param0.btn_visitCastle, __s3param0.btn_sendTroops]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleListDetailOverviewItemMilitary, __s1param0);
  CastleListDetailOverviewItemMilitary.prototype.customFillItem = function () {
    __s1param0.prototype.customFillItem.call(this);
    this.updateSendTroopsButton();
    var __s5local0;
    var __s5local1 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getVObyCastleID(this.wmo.objectId, this.wmo.kingdomID);
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(this.wmo, "KingstowerMapobjectVO")) {
      __s5local0 = this.wmo.unitInventory;
    } else if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(this.wmo, "MonumentMapobjectVO") || __dep_exact_81dacdf05bd32292_2.instanceOfClass(this.wmo, "LaboratoryMapobjectVO")) {
      __s5local0 = this.wmo.unitInventory;
    } else if (__s5local1) {
      (__s5local0 = new __dep_export_UnitInventoryList.UnitInventoryList()).addAll(__s5local1.unitInventory.getUnits(null));
      __s5local0.isStrongholdInventory = true;
      __s5local0.addAll(__s5local1.strongholdUnitInventory.getUnits(null));
    }
    if (__s5local0) {
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.safeSetNumber(this.itxt_units, __s5local0.getSoldierCount());
      var __s5local2 = __dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle();
      if (__s5local1 && __dep_exact_81dacdf05bd32292_2.instanceOfClass(__s5local0, "UnitInventoryList") && __s5local2 && __s5local1.areaID == __s5local2.objectId) {
        __s5local0.isStrongholdInventory = false;
      }
      if (this._unitInventoryComponent) {
        this._unitInventoryComponent.updateInventory(this.getFilteredUnits(__s5local0), null);
      } else {
        var __s5local3 = __dep_exact_81dacdf05bd32292_1.getDefinitionByName("CastleListDetailOverview_UnitContainer");
        this._unitInventoryComponent = new __dep_export_CastleInventoryComponent.CastleInventoryComponent(this.disp.mc_inventory, 11, this.getFilteredUnits(__s5local0), __s5local3, 29, 32, true, null, 0, 0);
      }
    }
    this.disp.mc_inventory.addEventListener(__dep_export_CastleInventoryComponentEvent.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onClickUnit));
    if (__s5local1) {
      var __s5local4 = __dep_exact_f855840627e6e145.int(__s5local1.getEffectiveResourceProduction(__dep_export_CollectableEnum.CollectableEnum.FOOD));
      this.itxt_foodConsumption.textContentVO.numberValue = __s5local4;
      this.itxt_foodConsumption.color = __dep_export_CastleModel.CastleModel.userData.foodFrozen ? __dep_export_ClientConstColor.ClientConstColor.FONT_FROZEN : __s5local4 < 0 ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      var __s5local5 = __dep_exact_f855840627e6e145.int(__s5local1.getEffectiveResourceProduction(__dep_export_CollectableEnum.CollectableEnum.MEAD));
      this.itxt_meadConsumption.textContentVO.numberValue = __s5local5;
      this.itxt_meadConsumption.color = __dep_export_CastleModel.CastleModel.userData.foodFrozen ? __dep_export_ClientConstColor.ClientConstColor.FONT_FROZEN : __s5local5 < 0 ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      var __s5local6 = __dep_exact_f855840627e6e145.int(__s5local1.getEffectiveResourceProduction(__dep_export_CollectableEnum.CollectableEnum.BEEF));
      this.itxt_beefConsumption.textContentVO.numberValue = __s5local6;
      this.itxt_beefConsumption.color = __dep_export_CastleModel.CastleModel.userData.foodFrozen ? __dep_export_ClientConstColor.ClientConstColor.FONT_FROZEN : __s5local6 < 0 ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      this.disp.mc_foodConsumption.mc_icon.gotoAndStop(__dep_export_CastleModel.CastleModel.userData.foodFrozen ? 2 : 1);
      this.disp.mc_meadConsumption.mc_icon.gotoAndStop(__dep_export_CastleModel.CastleModel.userData.foodFrozen ? 2 : 1);
      this.disp.mc_beefConsumption.mc_icon.gotoAndStop(__dep_export_CastleModel.CastleModel.userData.foodFrozen ? 2 : 1);
      this.disp.mc_foodConsumption.toolTipText = __dep_export_CastleModel.CastleModel.userData.foodFrozen ? "foodProductionPerHour_freeze" : "foodProductionPerHour";
      this.disp.mc_meadConsumption.toolTipText = __dep_export_CastleModel.CastleModel.userData.foodFrozen ? "meadProductionPerHour_freeze" : "meadProductionPerHour";
      this.disp.mc_beefConsumption.toolTipText = __dep_export_CastleModel.CastleModel.userData.foodFrozen ? "beefProductionPerHour_freeze" : "beefProductionPerHour";
      this.disp.mc_foodConsumption.visible = true;
      this.disp.mc_meadConsumption.visible = true;
      this.disp.mc_beefConsumption.visible = true;
    } else {
      this.disp.mc_foodConsumption.visible = false;
      this.disp.mc_meadConsumption.visible = false;
      this.disp.mc_beefConsumption.visible = false;
    }
  };
  CastleListDetailOverviewItemMilitary.prototype.onClickUnit = function (__s16param0) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(__s16param0.unitVO));
  };
  CastleListDetailOverviewItemMilitary.prototype.updateSendTroopsButton = function () {
    var __s18local0 = __dep_export_CastleModel.CastleModel.userData.laboratoryList.hasLaboratoryInKingdom(this.wmo.kingdomID);
    var __s18local1 = !this.wmo.isUnderConquerControl && (__dep_export_CastleModel.CastleModel.userData.castleList.getFilteredList(this.wmo.kingdomID).length > 1 || __dep_export_CastleModel.CastleModel.userData.villageList.getAmountInKingdomID(this.wmo.kingdomID) > 0 || (__dep_export_CastleModel.CastleModel.userData.monumentList.amount > 0 || __dep_export_CastleModel.CastleModel.userData.kingstowerList.kingstowerAmount > 0) && this.wmo.kingdomID == __dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID || __s18local0);
    this.disp.btn_sendTroops.visible = __s18local1;
    this.disp.btn_sendTroops.toolTipText = "ringmenu_sendTroups";
  };
  CastleListDetailOverviewItemMilitary.prototype.getFilteredUnits = function (__s20param0) {
    var __s20local0;
    switch (this.castleDetailScrollItemVO.filter) {
      case __dep_export_CastleListDetailOverviewSublayerMilitary.CastleListDetailOverviewSublayerMilitary.FILTER_ALL:
        __s20local0 = __s20param0.getUnits(null);
        break;
      case __dep_export_CastleListDetailOverviewSublayerMilitary.CastleListDetailOverviewSublayerMilitary.FILTER_UNITS_ATTACK:
        __s20local0 = __s20param0.getOffensiveSoldiers(false);
        break;
      case __dep_export_CastleListDetailOverviewSublayerMilitary.CastleListDetailOverviewSublayerMilitary.FILTER_UNITS_DEFENCE:
        __s20local0 = __s20param0.getDefensiveSoldiers(false);
        break;
      case __dep_export_CastleListDetailOverviewSublayerMilitary.CastleListDetailOverviewSublayerMilitary.FILTER_TOOLS_ATTACK:
        __s20local0 = __s20param0.getUnitsByType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_TOOL_ATTACK);
        break;
      case __dep_export_CastleListDetailOverviewSublayerMilitary.CastleListDetailOverviewSublayerMilitary.FILTER_TOOLS_DEFENCE:
        __s20local0 = __s20param0.getUnitsByType(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE);
    }
    return __s20local0;
  };
  CastleListDetailOverviewItemMilitary.prototype.onMouseClick = function (__s23param0) {
    __s1param0.prototype.onMouseClick.call(this, __s23param0);
    switch (__s23param0.target) {
      case this.disp.btn_sendTroops:
        this.onSendTroops();
    }
  };
  CastleListDetailOverviewItemMilitary.prototype.onSendTroops = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStartAttackDialog.CastleStartAttackDialog, new __dep_export_CastleStartAttackDialogProperties.CastleStartAttackDialogProperties(this.wmo, __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_SENDTROUPS));
  };
  CastleListDetailOverviewItemMilitary.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.disp.mc_inventory.removeEventListener(__dep_export_CastleInventoryComponentEvent.CastleInventoryComponentEvent.CLICK_ITEM, this.bindFunction(this.onClickUnit));
  };
  return CastleListDetailOverviewItemMilitary;
}(require("gge-module:export_CastleListDetailOverviewItem").CastleListDetailOverviewItem);
exports.CastleListDetailOverviewItemMilitary = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_UnitInventoryList = require("gge-module:export_UnitInventoryList");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleInventoryComponent = require("gge-module:export_CastleInventoryComponent");
var __dep_export_CastleStartAttackDialog = require("gge-module:export_CastleStartAttackDialog");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
var __dep_export_CastleListDetailOverviewSublayerMilitary = require("gge-module:export_CastleListDetailOverviewSublayerMilitary");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
