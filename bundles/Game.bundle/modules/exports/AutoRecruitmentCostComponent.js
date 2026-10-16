Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_AutoRecruitmentPriceEnum = require("gge-module:export_AutoRecruitmentPriceEnum");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function AutoRecruitmentCostComponent(__s3param0, __s3param1 = false) {
    var __s3local0 = this;
    __s3local0._costs = new __dep_export_AutoRecruitmentCosts.AutoRecruitmentCosts();
    __s3local0._areCopyCosts = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._areCopyCosts = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AutoRecruitmentCostComponent, __s1param0);
  AutoRecruitmentCostComponent.prototype.update = function () {
    this.destroyCollectableRenderList();
    var __s5local0 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_COST_LIST, this.costs.priceType != __dep_export_AutoRecruitmentPriceEnum.AutoRecruitmentPriceEnum.TOOLS ? AutoRecruitmentCostComponent.ICON_DIMENSION_BIG : AutoRecruitmentCostComponent.ICON_DIMENSION_SMALL);
    __s5local0.costTextfield.enableMarkOnNotEnough = !this.areCopyCosts;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsAndAddToRenderList(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.disp, "mc_resource"), this.costs.costs, __s5local0, null, function onPostRenderFunc(__s7param0) {
      if (this.areCopyCosts) {
        var __s7local0 = __s7param0.clips.itemMc.parent.getChildByName(__s7param0.clips.itemMc.name + "Background");
        if (__s7local0) {
          __s7local0.visible = !__s7param0.clips.itemMc.visible;
        }
      }
    });
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp.mc_double), this.costs.duplicatingCosts, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_COST_LIST, AutoRecruitmentCostComponent.ICON_DIMENSION_BIG));
    this.disp.mc_doubleBackground.visible = !(this.disp.mc_double.visible = this.costs.duplicatingCosts.amount > 0);
  };
  AutoRecruitmentCostComponent.prototype.updateWithNewCosts = function (__s11param0) {
    this._costs = __s11param0;
    this.update();
  };
  Object.defineProperty(AutoRecruitmentCostComponent.prototype, "costs", {
    get: function () {
      return this._costs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCostComponent.prototype, "areCopyCosts", {
    get: function () {
      return this._areCopyCosts;
    },
    enumerable: true,
    configurable: true
  });
  AutoRecruitmentCostComponent.__initialize_static_members = function () {
    AutoRecruitmentCostComponent.ICON_DIMENSION_SMALL = new __s0local0(20, 20);
    AutoRecruitmentCostComponent.ICON_DIMENSION_BIG = new __s0local0(40, 40);
  };
  return AutoRecruitmentCostComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.AutoRecruitmentCostComponent = __s0local1;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_AutoRecruitmentCosts = require("gge-module:export_AutoRecruitmentCosts");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
