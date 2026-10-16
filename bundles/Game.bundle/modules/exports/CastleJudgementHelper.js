Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function () {
  function CastleJudgementHelper() {}
  CastleJudgementHelper.setConditionIconAndTooltipAndAmount = function (__s5param0, __s5param1, __s5param2, __s5param3, __s5param4) {
    var __s5local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.JudgementCitizenCalculation.calcCond(__s5param3, __s5param4, __s5param2));
    __s5param1.mouseChildren = false;
    var __s5local1 = new __s5param0.collectable.dataClass();
    __s5param1.toolTipText = __s5local1.getTooltipTextId();
    __s5param1.mc_icon.gotoAndStop(CastleJudgementHelper.getIconFrame(__s5param0.collectable));
    var __s5local2 = false;
    switch (__s5param0) {
      case __dep_export_JudgementConditionEnum.JudgementConditionEnum.C1:
        __s5local2 = __dep_export_CastleModel.CastleModel.currencyData.c1Amount < __s5local0;
        break;
      case __dep_export_JudgementConditionEnum.JudgementConditionEnum.STONE:
      case __dep_export_JudgementConditionEnum.JudgementConditionEnum.WOOD:
        __s5local2 = __dep_export_CastleModel.CastleModel.areaData.getActiveStorageItem(__s5param0.collectable).amount < __s5local0;
        break;
      case __dep_export_JudgementConditionEnum.JudgementConditionEnum.UNITS:
        __s5param1.toolTipText = "dialog_recuit_unitsAvialable";
        __s5local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.militaryData.unitInventory.getSoldierCount() + __dep_export_CastleModel.CastleModel.militaryData.unitStrongholdInventory.getSoldierCount()) < __s5local0;
    }
    var __s5local3 = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s5param1.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s5local0), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    __s5local3.visible = true;
    __s5local3.color = __s5local2 ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    return __s5local2;
  };
  CastleJudgementHelper.setRewardIconAndTooltipAndAmount = function (__s8param0, __s8param1, __s8param2, __s8param3, __s8param4) {
    __s8param1.mouseChildren = false;
    var __s8local0 = new __s8param0.dataClass();
    __s8param1.toolTipText = __s8local0.getTooltipTextId();
    __s8param1.mc_icon.gotoAndStop(CastleJudgementHelper.getIconFrame(__s8param0));
    var __s8local1 = 0;
    switch (__s8param0) {
      case __dep_export_CollectableEnum.CollectableEnum.C1:
        __s8local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.JudgementCitizenCalculation.rewardC1(__s8param3, __s8param4, __s8param2));
        break;
      case __dep_export_CollectableEnum.CollectableEnum.STONE:
      case __dep_export_CollectableEnum.CollectableEnum.WOOD:
        __s8local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.JudgementCitizenCalculation.rewardWoodStone(__s8param3, __s8param4, __s8param2));
    }
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(__s8param1.txt_amount, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s8local1), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true)).visible = true;
  };
  CastleJudgementHelper.getIconFrame = function (__s11param0) {
    switch (__s11param0) {
      case __dep_export_CollectableEnum.CollectableEnum.UNITS:
        return 5;
      case __dep_export_CollectableEnum.CollectableEnum.C1:
        return 4;
      case __dep_export_CollectableEnum.CollectableEnum.FOOD:
        return 3;
      case __dep_export_CollectableEnum.CollectableEnum.STONE:
        return 2;
      case __dep_export_CollectableEnum.CollectableEnum.WOOD:
        return 1;
    }
    return 1;
  };
  return CastleJudgementHelper;
}();
exports.CastleJudgementHelper = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_JudgementConditionEnum = require("gge-module:export_JudgementConditionEnum");
