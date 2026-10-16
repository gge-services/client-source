Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __s0local0 = function (__s1param0) {
  function JackpotPrizeDisplayComponent(__s3param0, __s3param1 = null) {
    var __s3local0 = this;
    __s3local0._itemWidth = 0;
    __s3local0._itemGap = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._itemHolder = __s3param0;
    __s3local0._itemContainer = __s3param1;
    __s3local0.setupVerticalAlignment();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(JackpotPrizeDisplayComponent, __s1param0);
  JackpotPrizeDisplayComponent.prototype.showItems = function (__s5param0, __s5param1) {
    if (__s5param0) {
      var __s5local0 = new __dep_export_CollectableList.CollectableList();
      __s5local0.addItem(__s5param0.list[0 + (__s5param1 - 1) * 3]);
      if (__s5param0.list.length > 1 + (__s5param1 - 1) * 3) {
        __s5local0.addItem(__s5param0.list[1 + (__s5param1 - 1) * 3]);
      }
      if (__s5param0.list.length > 2 + (__s5param1 - 1) * 3) {
        __s5local0.addItem(__s5param0.list[2 + (__s5param1 - 1) * 3]);
      }
      var __s5local1 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT);
      __s5local1.textfield.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList().createByItemMcList(this._itemHolder).addIconMcs("mc_iconHolder").addTextfields("txt_amount").addInfoBtns("parent.btn_info"), __s5local0, __s5local1, null, function afterRenderFunc(__s10param0) {
        __s10param0.clips.itemMc.parent.visible = __s10param0.itemVO != null;
      });
      this.alignHorizontally(__s5param0.length);
    }
  };
  JackpotPrizeDisplayComponent.prototype.dispose = function () {
    this.resetPosition();
  };
  JackpotPrizeDisplayComponent.prototype.resetPosition = function () {
    if (this._itemContainer) {
      this._itemContainer.x = this._itemContainerBounds.x;
    }
  };
  JackpotPrizeDisplayComponent.prototype.setupVerticalAlignment = function () {
    if (this._itemContainer) {
      this._itemContainerBounds = this._itemContainer.getBounds(this._itemContainer.parent);
      var __s17local0 = this._itemHolder[0].parent;
      var __s17local1 = this._itemHolder[1].parent;
      this._itemWidth = __s17local0.width;
      this._itemGap = __s17local1.x - __s17local0.x - this._itemWidth;
    }
  };
  JackpotPrizeDisplayComponent.prototype.alignHorizontally = function (__s20param0) {
    if (this._itemContainerBounds) {
      var __s20local0 = this._itemHolder.length;
      var __s20local1 = (__s20local0 - (__s20param0 = Math.min(__s20param0, __s20local0))) * (this._itemWidth - this._itemGap);
      this._itemContainer.x = this._itemContainerBounds.x + __s20local1;
    }
  };
  return JackpotPrizeDisplayComponent;
}(__dep_export_CollectableRendererList.CollectableRendererList);
exports.JackpotPrizeDisplayComponent = __s0local0;
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
