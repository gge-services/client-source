Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_CastleAdvancedTroopSelectionInfiniteEvent = require("gge-module:export_CastleAdvancedTroopSelectionInfiniteEvent");
var __s0local0 = function (__s1param0) {
  function CastleAdvancedTroopSelectionItemInfiniteScrollList(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
    __s3local0.dispatcher = new __dep_export_CastleEventDispatcher.CastleEventDispatcher();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAdvancedTroopSelectionItemInfiniteScrollList, __s1param0);
  CastleAdvancedTroopSelectionItemInfiniteScrollList.prototype.onValueChange = function (__s5param0) {
    this.dispatcher.dispatchEvent(new __dep_export_CastleAdvancedTroopSelectionInfiniteEvent.CastleAdvancedTroopSelectionInfiniteEvent(__s5param0.scrollItem, __dep_export_CastleAdvancedTroopSelectionInfiniteEvent.CastleAdvancedTroopSelectionInfiniteEvent.UNIT_SELECTION_CHANGED));
  };
  CastleAdvancedTroopSelectionItemInfiniteScrollList.prototype.updateWithNewData = function (__s7param0, __s7param1 = true) {
    __s1param0.prototype.updateWithNewData.call(this, __s7param0, __s7param1);
    if (this._items != null) {
      for (var __s7local0 = 0, __s7local1 = this._items; __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        if (__s7local2 !== undefined) {
          __s7local2.dispatcher.addEventListener(__dep_export_CastleAdvancedTroopSelectionInfiniteEvent.CastleAdvancedTroopSelectionInfiniteEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onValueChange));
        }
      }
    }
  };
  CastleAdvancedTroopSelectionItemInfiniteScrollList.prototype.updateLimits = function () {
    if (this._items != null) {
      for (var __s13local0 = 0, __s13local1 = this._items; __s13local0 < __s13local1.length; __s13local0++) {
        var __s13local2 = __s13local1[__s13local0];
        if (__s13local2 !== undefined) {
          __s13local2.updateSelection();
        }
      }
    }
  };
  return CastleAdvancedTroopSelectionItemInfiniteScrollList;
}(__dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent);
exports.CastleAdvancedTroopSelectionItemInfiniteScrollList = __s0local0;
