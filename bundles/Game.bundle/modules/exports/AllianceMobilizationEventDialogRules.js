Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_AllianceMobilizationEventEventVO = require("gge-module:export_AllianceMobilizationEventEventVO");
var __dep_export_AccordionComponentProperties = require("gge-module:export_AccordionComponentProperties");
var __dep_export_GenericCollapsibleItemProperties = require("gge-module:export_GenericCollapsibleItemProperties");
var __dep_export_LayoutMargin = require("gge-module:export_LayoutMargin");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_DynamicSliderAccordionComponent = require("gge-module:export_DynamicSliderAccordionComponent");
var __dep_export_AllianceMobilizationEventDialogRulesCollapsibleItem = require("gge-module:export_AllianceMobilizationEventDialogRulesCollapsibleItem");
var __s0local0 = function (__s1param0) {
  function AllianceMobilizationEventDialogRules(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._eventID = 0;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceMobilizationEventDialogRules, __s1param0);
  AllianceMobilizationEventDialogRules.prototype.init = function () {
    var __s5local0 = new __dep_export_AccordionComponentProperties.AccordionComponentProperties();
    __s5local0.onlyOneActiveItem = false;
    __s5local0.scrollStrategy = __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical;
    this._rulesAccordion = new __dep_export_DynamicSliderAccordionComponent.DynamicSliderAccordionComponent(this.subLayerDisp.mc_list, __s5local0, this.subLayerDisp.mc_list.mc_items.mask);
  };
  AllianceMobilizationEventDialogRules.prototype.show = function (__s7param0) {
    var __s7local0 = this;
    __s1param0.prototype.show.call(this, __s7param0);
    if (__s7param0 && __s7param0.length > 0) {
      this._eventID = __s7param0[0];
    }
    var __s7local1 = __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.getActiveEventVO(this._eventID);
    this._rulesAccordion.clear();
    [__dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.MODE_NORMAL, __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.MODE_QUALIFICATION, __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.MODE_ADJUSTMENT].sort(function (__s10param0, __s10param1) {
      if (__s10param0 == __s7local1.mode) {
        return -1;
      } else if (__s10param1 == __s7local1.mode) {
        return 1;
      } else {
        return 0;
      }
    }).forEach(function (__s15param0) {
      var __s15local0 = new __dep_export_AllianceMobilizationEventDialogRulesCollapsibleItem.AllianceMobilizationEventDialogRulesCollapsibleItem(__s15param0, new __dep_export_GenericCollapsibleItemProperties.GenericCollapsibleItemProperties(new __dep_export_LayoutMargin.LayoutMargin(0, 0, 0, 0), true), __s7local0._eventID);
      __s7local0._rulesAccordion.addItem(__s15local0);
    });
    this._rulesAccordion.show();
    this._rulesAccordion.applyLayout();
    this._rulesAccordion.expandItemAt(0, true, false);
  };
  AllianceMobilizationEventDialogRules.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._rulesAccordion.clear();
  };
  return AllianceMobilizationEventDialogRules;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.AllianceMobilizationEventDialogRules = __s0local0;
