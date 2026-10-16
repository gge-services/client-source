Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_CastleResourceListComponent = require("gge-module:export_CastleResourceListComponent");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_SimpleScrollStrategyVertical = require("gge-module:export_SimpleScrollStrategyVertical");
var __s0local0 = function (__s1param0) {
  function CastleScrollableResourceListComponent(__s3param0, __s3param1, __s3param2, __s3param3 = 3, __s3param4 = 1) {
    var __s3local0 = this;
    __s3local0.itemCount = 0;
    __s3local0._renderedList = new __dep_export_CollectableList.CollectableList();
    __s3local0.onUpdated = new __dep_exact_5c7bc328fca9e4de.Signal();
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param3, __s3param4, __s3param0) || this)._availableList = __s3param2;
    __s3local0.itemCount = __s3local0._availableList.length;
    var __s3local1 = new __dep_export_SimpleScrollStrategyVertical.SimpleScrollStrategyVertical(true, true);
    var __s3local2 = __s3param0.parent;
    __s3local0._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(__s3local2).addMouseWheelElements([__s3local2]), __s3local1);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleScrollableResourceListComponent, __s1param0);
  CastleScrollableResourceListComponent.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    if (this._scrollComponent.scrollVO) {
      this._scrollComponent.hide();
    }
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChange));
    if (this._scrollComponent.scrollVO) {
      this._scrollComponent.destroy();
    }
  };
  CastleScrollableResourceListComponent.prototype.initialize = function () {
    this._scrollComponent.init(0, Math.max(0, this.itemCount - this.maxItemCount), this.maxItemCount, this.maxItemCount);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    this.renderList();
  };
  CastleScrollableResourceListComponent.prototype.onScrollValueChange = function () {
    this.renderList();
  };
  CastleScrollableResourceListComponent.prototype.renderList = function () {
    this._renderedList.clear();
    var __s13local0 = this._availableList.list.slice(this._scrollComponent.currentValue, this._scrollComponent.currentValue + this.maxItemCount);
    if (__s13local0 != null) {
      for (var __s13local1 = 0, __s13local2 = __s13local0; __s13local1 < __s13local2.length; __s13local1++) {
        var __s13local3 = __s13local2[__s13local1];
        if (__s13local3 !== undefined) {
          this._renderedList.addItem(__s13local3);
        }
      }
    }
    __s1param0.prototype.updateComponent.call(this, this._renderedList);
    this.onUpdated.dispatch();
  };
  CastleScrollableResourceListComponent.prototype.getPositionList = function (__s19param0) {
    return __s1param0.prototype.getPositionList.call(this, this.maxItemCount);
  };
  return CastleScrollableResourceListComponent;
}(__dep_export_CastleResourceListComponent.CastleResourceListComponent);
exports.CastleScrollableResourceListComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
