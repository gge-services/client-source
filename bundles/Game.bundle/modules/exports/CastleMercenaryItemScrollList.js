Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleMercenaryItemScrollList(__s3param0, __s3param1 = null) {
    var __s3local0 = this;
    __s3local0.tooltipUpdateNeeded = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMercenaryItemScrollList, __s1param0);
  CastleMercenaryItemScrollList.prototype.onMouseWheel = function (__s5param0) {
    this.tooltipUpdateNeeded = false;
    __s1param0.prototype.onMouseWheel.call(this, __s5param0);
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s5param0.target, "MovieClip") && this.tooltipUpdateNeeded && __s5param0.target.toolTipText) {
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().tooltipManager.show(__s5param0.target.toolTipText, __s5param0.target);
    }
  };
  CastleMercenaryItemScrollList.prototype.naviUp = function () {
    if (!this.locked) {
      if (this._currentStartIndex > 0) {
        this.tooltipUpdateNeeded = true;
        this.updateItemList(this._currentStartIndex - this._scrollStep);
      }
      if (this._itemVEList) {
        this.updateActiveStates();
      }
      this.dispatchEvent(new __dep_exact_9e901e8e2483a22f.ScrollItemEvent(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.ON_SCROLL, null, null));
    }
  };
  CastleMercenaryItemScrollList.prototype.naviDown = function () {
    if (!this.locked) {
      if (this._currentStartIndex < this._itemCount - this._itemsVisibleAtOnce) {
        this.tooltipUpdateNeeded = true;
        this.updateItemList(this._currentStartIndex + this._scrollStep);
      }
      if (this._itemVEList) {
        this.updateActiveStates();
      }
      this.dispatchEvent(new __dep_exact_9e901e8e2483a22f.ScrollItemEvent(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.ON_SCROLL, null, null));
    }
  };
  return CastleMercenaryItemScrollList;
}(__dep_exact_9e901e8e2483a22f.ItemScrollList);
exports.CastleMercenaryItemScrollList = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
