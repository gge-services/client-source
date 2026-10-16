Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function FortuneTellerEventRewardInfoDialogItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FortuneTellerEventRewardInfoDialogItem, __s1param0);
  FortuneTellerEventRewardInfoDialogItem.prototype.fill = function () {
    var __s5local0 = __dep_exact_f855840627e6e145.int(this.data);
    var __s5local1 = this.getItemMc();
    var __s5local2 = __dep_export_CastleModel.CastleModel.rewardData.getCopiedListById(__s5local0).getItemByIndex(0);
    __s5local1.mc_item.mouseChildren = true;
    var __s5local3 = new __dep_export_CollectableRenderClips.CollectableRenderClips(__s5local1.mc_item).addIconMc(__s5local1.mc_item.mc_icon);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, __s5local3, __s5local2, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(55, 55)), this.bindFunction(this.preRenderFunc));
    __s5local1.mc_item.mouseChildren = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local1.txt_name, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s5local2.getNameTextId()));
  };
  FortuneTellerEventRewardInfoDialogItem.prototype.preRenderFunc = function (__s7param0) {
    if (__s7param0.itemVO) {
      var __s7local0 = __s7param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM);
      if (__s7param0.itemVO.itemType == __dep_export_CollectableEnum.CollectableEnum.LONG_TERM_POINT_EVENT_BOOSTER) {
        __s7local0.transform.offset.y = -5;
        __s7local0.transform.scale = 0.9;
      }
    }
  };
  return FortuneTellerEventRewardInfoDialogItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.FortuneTellerEventRewardInfoDialogItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
