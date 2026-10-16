Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __s0local0 = function (__s1param0) {
  function SimpleCollectableScrollComponent(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4) {
    var __s3local0 = this;
    __s3local0._maxRewards = 0;
    __s3local0._scrollStep = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._disp = __s3param0;
    __s3local0._maxRewards = __s3param3;
    __s3local0._scrollStep = __s3param4;
    __s3local0.scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(__s3param1, __s3param2);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SimpleCollectableScrollComponent, __s1param0);
  SimpleCollectableScrollComponent.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.scrollComponent.destroy();
  };
  SimpleCollectableScrollComponent.prototype.show = function (__s7param0, __s7param1, __s7param2 = null, __s7param3 = null) {
    this._collectableList = __s7param0;
    this._options = __s7param1;
    this._preRenderFunc = __s7param2;
    this._afterRenderFunc = __s7param3;
    var __s7local0 = Math.max(0, Math.ceil((this._collectableList.length - this._maxRewards) / this._scrollStep));
    this.scrollComponent.init(0, __s7local0);
    this.scrollComponent.scrollToValue(0);
    if (__s7local0 > 0) {
      this.scrollComponent.setVisibility(true);
      this.scrollComponent.show();
      this.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    } else {
      this.scrollComponent.setVisibility(false);
    }
    this.renderCollectables();
  };
  SimpleCollectableScrollComponent.prototype.hide = function () {
    this.scrollComponent.hide();
  };
  SimpleCollectableScrollComponent.prototype.onScrollValueChange = function () {
    this.renderCollectables();
  };
  SimpleCollectableScrollComponent.prototype.renderCollectables = function () {
    this.destroyCollectableRenderList();
    var __s15local0 = new __dep_export_CollectableList.CollectableList();
    for (var __s15local1 = 0; __s15local1 < this._maxRewards; __s15local1++) {
      var __s15local2 = __s15local1 + this.scrollComponent.currentValue * this._scrollStep;
      if (__s15local2 < this._collectableList.length) {
        __s15local0.addItem(this._collectableList.getItemByIndex(__s15local2));
      }
    }
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this._disp, "item").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), __s15local0, this._options, this.bindFunction(this._preRenderFunc), this.bindFunction(this._afterRenderFunc));
  };
  return SimpleCollectableScrollComponent;
}(require("gge-module:export_CastleComponent").CastleComponent);
exports.SimpleCollectableScrollComponent = __s0local0;
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
