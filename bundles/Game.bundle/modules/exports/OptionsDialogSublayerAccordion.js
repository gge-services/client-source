Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_AccordionComponentProperties = require("gge-module:export_AccordionComponentProperties");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_DynamicSliderAccordionComponent = require("gge-module:export_DynamicSliderAccordionComponent");
var __s0local0 = function (__s1param0) {
  function OptionsDialogSublayerAccordion(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    var __s3local1 = new __dep_export_AccordionComponentProperties.AccordionComponentProperties();
    __s3local1.scrollStepPixels = 124;
    __s3local1.scrollStrategy = __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical;
    __s3local1.disableButtons = true;
    __s3local1.onlyOneActiveItem = true;
    __s3local0._accordionComponent = new __dep_export_DynamicSliderAccordionComponent.DynamicSliderAccordionComponent(__s3local0.subLayerDisp, __s3local1);
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s3local0.subLayerDisp.mc_items);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OptionsDialogSublayerAccordion, __s1param0);
  OptionsDialogSublayerAccordion.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.createContent();
    this._accordionComponent.show();
    this.scrollToFirstExpandedItem();
  };
  OptionsDialogSublayerAccordion.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._accordionComponent.hide();
  };
  Object.defineProperty(OptionsDialogSublayerAccordion.prototype, "contentCreator", {
    get: function () {
      return this._params.contentCreator;
    },
    enumerable: true,
    configurable: true
  });
  OptionsDialogSublayerAccordion.prototype.createContent = function () {
    var __s11local0 = this;
    this.contentCreator.accordionComponent = this._accordionComponent;
    this.contentCreator.createItems().forEach(function (__s13param0) {
      return __s11local0._accordionComponent.addItem(__s13param0);
    });
  };
  OptionsDialogSublayerAccordion.prototype.scrollToFirstExpandedItem = function () {
    var __s15local0 = this._accordionComponent.items.find(function (__s17param0) {
      return __s17param0.isExpanded && __s17param0.disp.visible;
    });
    var __s15local1 = __s15local0 ? __s15local0.disp.y : 0;
    this._accordionComponent.scrollToValue(__s15local1);
  };
  return OptionsDialogSublayerAccordion;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.OptionsDialogSublayerAccordion = __s0local0;
