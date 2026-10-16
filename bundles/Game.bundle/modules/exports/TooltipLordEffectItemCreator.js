Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_LayoutMargin = require("gge-module:export_LayoutMargin");
var __dep_export_ALordEffectItemCreator = require("gge-module:export_ALordEffectItemCreator");
var __dep_export_LordEffectItem = require("gge-module:export_LordEffectItem");
var __s0local0 = function (__s1param0) {
  function TooltipLordEffectItemCreator() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TooltipLordEffectItemCreator, __s1param0);
  TooltipLordEffectItemCreator.prototype.getTotalEffectMC = function (__s5param0 = null) {
    if (__s5param0 && __s5param0.length > 1) {
      return new Library.CastleInterfaceElements.LordEffectTotalItemBold_Tooltip();
    } else {
      return new Library.CastleInterfaceElements.LordEffectTotalItemWithSource_Tooltip();
    }
  };
  TooltipLordEffectItemCreator.prototype.getDetailEffectMC = function () {
    return new Library.CastleInterfaceElements.LordEffectDetailItemWithSources_Tooltip();
  };
  TooltipLordEffectItemCreator.prototype.getSeperatorLineMC = function () {
    return new Library.CastleInterfaceElements.LordEffectSeperator_Tooltip();
  };
  TooltipLordEffectItemCreator.prototype.getCapGroupMC = function () {
    return new Library.CastleInterfaceElements.LordEffectCapItem_Tooltip();
  };
  TooltipLordEffectItemCreator.prototype.getMargin = function () {
    return TooltipLordEffectItemCreator.MARGIN;
  };
  TooltipLordEffectItemCreator.prototype.createCategoryItem = function (__s17param0) {
    var __s17local0 = new __dep_export_LordEffectItem.LordEffectItem(new Library.CastleInterfaceElements.LordEffectCategoryItem_Tooltip(), this.getMargin());
    __s17local0.disp.mc_textBackground.gotoAndStop(__s17param0);
    __s17local0.applyText(__dep_exact_92d05af59ee2ff30.Localize.text("effect_category_" + __s17param0), false, 3);
    return __s17local0;
  };
  TooltipLordEffectItemCreator.__initialize_static_members = function () {
    TooltipLordEffectItemCreator.MARGIN = new __dep_export_LayoutMargin.LayoutMargin(0, 3, 0, 0);
  };
  return TooltipLordEffectItemCreator;
}(__dep_export_ALordEffectItemCreator.ALordEffectItemCreator);
exports.TooltipLordEffectItemCreator = __s0local0;
__s0local0.__initialize_static_members();
