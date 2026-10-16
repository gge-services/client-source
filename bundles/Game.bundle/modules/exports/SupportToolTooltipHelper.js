Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __s0local0 = function () {
  function SupportToolTooltipHelper() {}
  SupportToolTooltipHelper.getToolTipByInventory = function (__s5param0, __s5param1) {
    if (__s5param0.getToolCount() > 0) {
      var __s5local0 = __s5param1;
      __s5param0.getTools().forEach(function (__s8param0) {
        __s5local0 += "\n";
        __s5local0 += SupportToolTooltipHelper.getTextForTool(__s8param0, __s8param0.inventoryAmount, undefined);
      });
      return __s5local0;
    }
    return null;
  };
  SupportToolTooltipHelper.getToolTipByLogUnitVOs = function (__s10param0, __s10param1) {
    if (__s10param0.length > 0) {
      var __s10local0 = __s10param1;
      __s10param0.forEach(function (__s13param0) {
        var __s13local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.wodData.createVObyWOD(__s13param0.wodID, __dep_export_CastleWodData.CastleWodData.TYPE_UNIT), "BasicUnitVO");
        if (__s13local0) {
          __s10local0 += "\n";
          __s10local0 += SupportToolTooltipHelper.getTextForTool(__s13local0, __s13param0.count, __s13param0.lost);
        }
      });
      return __s10local0;
    }
    return null;
  };
  SupportToolTooltipHelper.getTextForTool = function (__s16param0, __s16param1, __s16param2 = undefined) {
    var __s16local0 = __s16param2 === undefined ? "dialog_shortArmy_attackSupportTools_tooltip_entries" : "dialog_battleLogDetail_defenseSupportTools_tooltip_entries";
    var __s16local1 = [__dep_exact_92d05af59ee2ff30.Localize.text(__s16param0.getNameString()), __s16param1, __s16param2];
    var __s16local2 = __dep_exact_92d05af59ee2ff30.Localize.text(__s16local0, __s16local1) + "\n";
    var __s16local3 = "";
    __s16param0.getTooltipString(__s16param1).split("\n").forEach(function (__s18param0) {
      if (__s16local3 != "") {
        __s16local3 += "\n";
      }
      __s16local3 += __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_SIMPLE_COMP, ["•", __s18param0]);
    });
    return __s16local2 += __s16local3;
  };
  return SupportToolTooltipHelper;
}();
exports.SupportToolTooltipHelper = __s0local0;
