Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_DifficultyScalingRewardDialogListItemHelper = require("gge-module:export_DifficultyScalingRewardDialogListItemHelper");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __s0local0 = function (__s1param0) {
  function DifficultyScalingRewardOverviewDialogScrollItem() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.rewardsRenderList = new __dep_export_CollectableRendererList.CollectableRendererList();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DifficultyScalingRewardOverviewDialogScrollItem, __s1param0);
  DifficultyScalingRewardOverviewDialogScrollItem.prototype.fill = function () {
    __dep_export_DifficultyScalingRewardDialogListItemHelper.DifficultyScalingRewardDialogListItemHelper.fillRewardMC(this.itemMc, this.data, this.rewardsRenderList);
  };
  DifficultyScalingRewardOverviewDialogScrollItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    this.rewardsRenderList.destroyCollectableRenderList();
  };
  Object.defineProperty(DifficultyScalingRewardOverviewDialogScrollItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  return DifficultyScalingRewardOverviewDialogScrollItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.DifficultyScalingRewardOverviewDialogScrollItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
