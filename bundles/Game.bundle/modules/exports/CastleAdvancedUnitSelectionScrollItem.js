Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ACastleAdvancedTroopSelectionScrollItem = require("gge-module:export_ACastleAdvancedTroopSelectionScrollItem");
var __dep_export_AdvancedCombatInfoEnum = require("gge-module:export_AdvancedCombatInfoEnum");
var __s0local0 = function (__s1param0) {
  function CastleAdvancedUnitSelectionScrollItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._itxt_infoUnitLootPower = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3param0.mc_infoUnitLootPower.txt_value, new __dep_exact_92d05af59ee2ff30.NumberVO(0));
    __s3local0._itxt_infoCombatValue = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s3param0.mc_infoCombatValue.txt_value, new __dep_exact_92d05af59ee2ff30.NumberVO(0));
    __s3param0.mc_infoUnitLootPower.mouseChildren = false;
    __s3param0.mc_infoCombatValue.mouseChildren = false;
    __s3param0.mc_selection.btn_all.toolTipText = "dialog_addUnit_all";
    __s3param0.mc_selection.btn_remove.toolTipText = "dialog_addUnit_remove";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAdvancedUnitSelectionScrollItem, __s1param0);
  CastleAdvancedUnitSelectionScrollItem.prototype.fillAdditionalComponents = function () {
    var __s5local0 = this.troopSelectionScrollItemVO.unitVO;
    var __s5local1 = __s5local0.role == __dep_export_SoldierUnitVO.SoldierUnitVO.ROLE_MELEE;
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.disp.mc_infoCombatValue.mc_icon);
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.disp.mc_infoUnitLootPower.mc_icon);
    var __s5local2 = 0;
    switch (this.troopSelectionScrollItemVO.fightDialogType) {
      case __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_SUPPORT:
        this.disp.mc_infoUnitLootPower.gotoAndStop(3);
        this.setCombatInfo(this.disp.mc_infoCombatValue, this._itxt_infoCombatValue, __s5local0.meleeDefence, __dep_export_AdvancedCombatInfoEnum.AdvancedCombatInfoEnum.DEFENCE_MELEE);
        this.setCombatInfo(this.disp.mc_infoUnitLootPower, this._itxt_infoUnitLootPower, __s5local0.rangeDefence, __dep_export_AdvancedCombatInfoEnum.AdvancedCombatInfoEnum.DEFENCE_RANGED);
        break;
      case __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_STATION:
        var __s5local3;
        if (__s5local0.foodSupply > 0) {
          this.disp.mc_infoUnitLootPower.gotoAndStop(2);
          this.disp.mc_infoUnitLootPower.toolTipText = "foodwastage";
        } else if (__s5local0.meadSupply > 0) {
          this.disp.mc_infoUnitLootPower.gotoAndStop(4);
          this.disp.mc_infoUnitLootPower.toolTipText = "meadwastage";
        } else if (__s5local0.beefSupply > 0) {
          this.disp.mc_infoUnitLootPower.gotoAndStop(5);
          this.disp.mc_infoUnitLootPower.toolTipText = "beefwastage";
        }
        if (__s5local1) {
          __s5local2 = __dep_exact_f855840627e6e145.int(__s5local0.isOffensive ? __s5local0.buffedMeleeAttack : __s5local0.meleeDefence);
          __s5local3 = __s5local0.isOffensive ? __dep_export_AdvancedCombatInfoEnum.AdvancedCombatInfoEnum.ATTACK_MELEE : __dep_export_AdvancedCombatInfoEnum.AdvancedCombatInfoEnum.DEFENCE_MELEE;
        } else {
          __s5local2 = __dep_exact_f855840627e6e145.int(__s5local0.isOffensive ? __s5local0.buffedRangeAttack : __s5local0.rangeDefence);
          __s5local3 = __s5local0.isOffensive ? __dep_export_AdvancedCombatInfoEnum.AdvancedCombatInfoEnum.ATTACK_RANGED : __dep_export_AdvancedCombatInfoEnum.AdvancedCombatInfoEnum.DEFENCE_RANGED;
        }
        this.setCombatInfo(this.disp.mc_infoCombatValue, this._itxt_infoCombatValue, __s5local2, __s5local3);
        if (this._itxt_infoUnitLootPower && this._itxt_infoUnitLootPower.textContentVO) {
          this._itxt_infoUnitLootPower.textContentVO.numberValue = Math.max(this.troopSelectionScrollItemVO.unitVO.foodSupply, this.troopSelectionScrollItemVO.unitVO.meadSupply, this.troopSelectionScrollItemVO.unitVO.beefSupply);
        }
        break;
      case __dep_export_CastleAdvancedTroopSelectionComponent.CastleAdvancedTroopSelectionComponent.TYPE_ATTACK:
        this.disp.mc_infoUnitLootPower.gotoAndStop(1);
        this.disp.mc_infoUnitLootPower.toolTipText = "lootpower";
        __s5local2 = __dep_exact_f855840627e6e145.int(__s5local1 ? __s5local0.buffedMeleeAttack : __s5local0.buffedRangeAttack);
        this.setCombatInfo(this.disp.mc_infoCombatValue, this._itxt_infoCombatValue, __s5local2, __s5local1 ? __dep_export_AdvancedCombatInfoEnum.AdvancedCombatInfoEnum.ATTACK_MELEE : __dep_export_AdvancedCombatInfoEnum.AdvancedCombatInfoEnum.ATTACK_RANGED);
        if (this._itxt_infoUnitLootPower && this._itxt_infoUnitLootPower.textContentVO) {
          this._itxt_infoUnitLootPower.textContentVO.numberValue = this.troopSelectionScrollItemVO.unitVO.lootValue;
        }
    }
  };
  CastleAdvancedUnitSelectionScrollItem.prototype.setCombatInfo = function (__s15param0, __s15param1, __s15param2, __s15param3) {
    __dep_export_WodPicHelper.WodPicHelper.addIcon(__s15param3.iconClass, __s15param0.mc_icon, 22, 22);
    if (__s15param1 && __s15param1.textContentVO) {
      __s15param1.textContentVO.numberValue = __s15param2;
    }
    __s15param0.toolTipText = __s15param3.toolTip;
  };
  return CastleAdvancedUnitSelectionScrollItem;
}(__dep_export_ACastleAdvancedTroopSelectionScrollItem.ACastleAdvancedTroopSelectionScrollItem);
exports.CastleAdvancedUnitSelectionScrollItem = __s0local0;
var __dep_export_SoldierUnitVO = require("gge-module:export_SoldierUnitVO");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleAdvancedTroopSelectionComponent = require("gge-module:export_CastleAdvancedTroopSelectionComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
