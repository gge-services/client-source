Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_SoldierUnitVO = require("gge-module:export_SoldierUnitVO");
var __dep_export_AdvancedCombatInfoEnum = require("gge-module:export_AdvancedCombatInfoEnum");
var __dep_export_CastleAdvancedTroopSelectionComponent = require("gge-module:export_CastleAdvancedTroopSelectionComponent");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __s0local0 = function (__s1param0) {
  function AttackDialogWaveHandlerSoldierPickInfiniteItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AttackDialogWaveHandlerSoldierPickInfiniteItem, __s1param0);
  AttackDialogWaveHandlerSoldierPickInfiniteItem.prototype.onValueChange = function (__s5param0) {
    __s1param0.prototype.onValueChange.call(this, __s5param0);
    this.updateSlider();
  };
  AttackDialogWaveHandlerSoldierPickInfiniteItem.prototype.fill = function () {
    this._itxt_infoUnitLootPower = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.mc_infoUnitLootPower.txt_value, new __dep_exact_92d05af59ee2ff30.NumberVO(0));
    this._itxt_infoCombatValue = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.mc_infoCombatValue.txt_value, new __dep_exact_92d05af59ee2ff30.NumberVO(0));
    this.itemMc.mc_infoUnitLootPower.mouseChildren = false;
    this.itemMc.mc_infoCombatValue.mouseChildren = false;
    this.itemMc.mc_selection.btn_all.toolTipText = "dialog_addUnit_all";
    this.itemMc.mc_selection.btn_remove.toolTipText = "dialog_addUnit_remove";
    __s1param0.prototype.fill.call(this);
    this.updateSlider();
  };
  AttackDialogWaveHandlerSoldierPickInfiniteItem.prototype.updateSlider = function () {
    if (this._amountComponent && this._amountComponent.numberOfItems > 0) {
      this.itemMc.mc_selection.mc_slider.mc_line.scaleX = this._amountComponent.getSelectedAmount() / this._amountComponent.numberOfItems;
    } else {
      var __s9local0 = this._amountComponent && this._amountComponent.numberOfItems == 0;
      if (__s9local0) {
        this._amountComponent.enableComponent(true);
      }
      this.itemMc.mc_selection.mc_slider.mc_line.scaleX = 0;
      if (__s9local0) {
        this._amountComponent.enableComponent(false);
      }
    }
  };
  AttackDialogWaveHandlerSoldierPickInfiniteItem.prototype.updateSelection = function () {
    __s1param0.prototype.updateSelection.call(this);
    this.updateSlider();
  };
  AttackDialogWaveHandlerSoldierPickInfiniteItem.prototype.fillAdditionalComponents = function () {
    var __s17local0 = this.troopSelectionScrollItemVO.unitVO;
    var __s17local1 = __s17local0.role == __dep_export_SoldierUnitVO.SoldierUnitVO.ROLE_MELEE;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.itemMc.mc_infoCombatValue.mc_icon);
    if (this.itemMc.mc_infoUnitLootPower.mc_icon) {
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.itemMc.mc_infoUnitLootPower.mc_icon);
    }
    var __s17local2 = 0;
    switch (this.troopSelectionScrollItemVO.fightDialogType) {
      case __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_SUPPORT:
        this.itemMc.mc_infoUnitLootPower.gotoAndStop(3);
        this.setCombatInfo(this.itemMc.mc_infoCombatValue, this._itxt_infoCombatValue, __s17local0.meleeDefence, __dep_export_AdvancedCombatInfoEnum.AdvancedCombatInfoEnum.DEFENCE_MELEE);
        this.setCombatInfo(this.itemMc.mc_infoUnitLootPower, this._itxt_infoUnitLootPower, __s17local0.rangeDefence, __dep_export_AdvancedCombatInfoEnum.AdvancedCombatInfoEnum.DEFENCE_RANGED);
        break;
      case __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_STATION:
        var __s17local3;
        if (__s17local0.foodSupply > 0) {
          this.itemMc.mc_infoUnitLootPower.gotoAndStop(2);
          this.itemMc.mc_infoUnitLootPower.toolTipText = "foodwastage";
        } else if (__s17local0.meadSupply > 0) {
          this.itemMc.mc_infoUnitLootPower.gotoAndStop(4);
          this.itemMc.mc_infoUnitLootPower.toolTipText = "meadwastage";
        } else if (__s17local0.beefSupply > 0) {
          this.itemMc.mc_infoUnitLootPower.gotoAndStop(5);
          this.itemMc.mc_infoUnitLootPower.toolTipText = "beefwastage";
        }
        if (__s17local1) {
          __s17local2 = __dep_exact_f855840627e6e145.int(__s17local0.isOffensive ? __s17local0.buffedMeleeAttack : __s17local0.meleeDefence);
          __s17local3 = __s17local0.isOffensive ? __dep_export_AdvancedCombatInfoEnum.AdvancedCombatInfoEnum.ATTACK_MELEE : __dep_export_AdvancedCombatInfoEnum.AdvancedCombatInfoEnum.DEFENCE_MELEE;
        } else {
          __s17local2 = __dep_exact_f855840627e6e145.int(__s17local0.isOffensive ? __s17local0.buffedRangeAttack : __s17local0.rangeDefence);
          __s17local3 = __s17local0.isOffensive ? __dep_export_AdvancedCombatInfoEnum.AdvancedCombatInfoEnum.ATTACK_RANGED : __dep_export_AdvancedCombatInfoEnum.AdvancedCombatInfoEnum.DEFENCE_RANGED;
        }
        this.setCombatInfo(this.itemMc.mc_infoCombatValue, this._itxt_infoCombatValue, __s17local2, __s17local3);
        this._itxt_infoUnitLootPower.textContentVO.numberValue = Math.max(this.troopSelectionScrollItemVO.unitVO.foodSupply, this.troopSelectionScrollItemVO.unitVO.meadSupply, this.troopSelectionScrollItemVO.unitVO.beefSupply);
        break;
      case __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_ATTACK:
        this.itemMc.mc_infoUnitLootPower.gotoAndStop(1);
        this.itemMc.mc_infoUnitLootPower.toolTipText = "lootpower";
        __s17local2 = __dep_exact_f855840627e6e145.int(__s17local1 ? __s17local0.buffedMeleeAttack : __s17local0.buffedRangeAttack);
        this.setCombatInfo(this.itemMc.mc_infoCombatValue, this._itxt_infoCombatValue, __s17local2, __s17local1 ? __dep_export_AdvancedCombatInfoEnum.AdvancedCombatInfoEnum.ATTACK_MELEE : __dep_export_AdvancedCombatInfoEnum.AdvancedCombatInfoEnum.ATTACK_RANGED);
        this._itxt_infoUnitLootPower.textContentVO.numberValue = this.troopSelectionScrollItemVO.unitVO.lootValue;
    }
  };
  AttackDialogWaveHandlerSoldierPickInfiniteItem.prototype.setCombatInfo = function (__s26param0, __s26param1, __s26param2, __s26param3) {
    __dep_export_WodPicHelper.WodPicHelper.addIcon(__s26param3.iconClass, __s26param0.mc_icon, 22, 22);
    __s26param1.textContentVO.numberValue = __s26param2;
    __s26param0.toolTipText = __s26param3.toolTip;
  };
  return AttackDialogWaveHandlerSoldierPickInfiniteItem;
}(require("gge-module:export_ACastleAdvancedTroopSelectionInfiniteScrollItem").ACastleAdvancedTroopSelectionInfiniteScrollItem);
exports.AttackDialogWaveHandlerSoldierPickInfiniteItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
