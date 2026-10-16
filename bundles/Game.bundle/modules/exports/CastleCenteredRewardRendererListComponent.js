Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __s0local0 = function (__s1param0) {
  function CastleCenteredRewardRendererListComponent(__s3param0, __s3param1 = null, __s3param2 = __dep_exact_f855840627e6e145.int(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT), __s3param3 = null) {
    var __s3local0 = this;
    __s3local0.ITEMNAME = "item";
    __s3local0.standardXpos = 0;
    __s3local0.itemOffsetPerMissingItem = 0;
    __s3local0.renderOption = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._componentDisp = __s3param0;
    __s3local0.rewardHolders = [];
    __s3local0.itemDimension = __s3param1;
    __s3local0.renderOption = __s3param2;
    __s3local0.preRenderFunc = __s3param3;
    for (var __s3local1 = 0; __s3local0.disp[__s3local0.ITEMNAME + __s3local1];) {
      __s3local0.rewardHolders.push(__s3local0.disp[__s3local0.ITEMNAME + __s3local1]);
      __s3local1++;
    }
    __s3local0.setupCenterRewards();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCenteredRewardRendererListComponent, __s1param0);
  CastleCenteredRewardRendererListComponent.prototype.showRewards = function (__s7param0) {
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.disp, this.ITEMNAME).addItemMcs("mc_item").addInfoBtns("parent.btn_info"), __s7param0, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(this.renderOption, this.itemDimension), this.bindFunction(this.preRenderFunc));
    for (var __s7local0 = 0; __s7local0 < this.rewardHolders.length; __s7local0++) {
      this.disp[this.ITEMNAME + __s7local0].visible = __s7param0.list.length >= __s7local0 + 1;
    }
    this.disp.x = this.standardXpos + this.getNeededOffset(__s7param0.length);
  };
  CastleCenteredRewardRendererListComponent.prototype.setupCenterRewards = function () {
    this.standardXpos = __dep_exact_f855840627e6e145.int(this.disp.x);
    this.itemOffsetPerMissingItem = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int((this.rewardHolders[1].x - this.rewardHolders[0].x) / 2));
  };
  CastleCenteredRewardRendererListComponent.prototype.getNeededOffset = function (__s13param0) {
    return (this.maxItems - __s13param0) * this.itemOffsetPerMissingItem;
  };
  Object.defineProperty(CastleCenteredRewardRendererListComponent.prototype, "maxItems", {
    get: function () {
      return this.rewardHolders.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCenteredRewardRendererListComponent.prototype, "disp", {
    get: function () {
      return this._componentDisp;
    },
    enumerable: true,
    configurable: true
  });
  CastleCenteredRewardRendererListComponent.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.disp.x = this.standardXpos;
  };
  return CastleCenteredRewardRendererListComponent;
}(require("gge-module:export_CastleComponent").CastleComponent);
exports.CastleCenteredRewardRendererListComponent = __s0local0;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
