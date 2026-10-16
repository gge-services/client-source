Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CastleMinuteSkipItemScrollList(__s3param0, __s3param1 = null) {
    var __s3local0 = this;
    __s3local0.normalX = 0;
    __s3local0.offsetX = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMinuteSkipItemScrollList, __s1param0);
  Object.defineProperty(CastleMinuteSkipItemScrollList.prototype, "scrollItemClass", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f_1.ItemScrollList.prototype, "scrollItemClass").get.call(this);
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f.ItemList.prototype, "scrollItemClass").set.call(this, __s7param0);
      this.normalX = __dep_exact_f855840627e6e145.int(this.veList[0].disp.x);
      this.offsetX = __dep_exact_f855840627e6e145.int((this.veList[1].disp.x - this.normalX) / 2);
    },
    enumerable: true,
    configurable: true
  });
  CastleMinuteSkipItemScrollList.prototype.updateItemList = function (__s9param0 = 0) {
    __s1param0.prototype.updateItemList.call(this, __s9param0);
    if (this.voList.length <= 1) {
      this.veList[0].disp.x = this.normalX + this.offsetX;
      this.veList[1].visible = false;
    } else {
      this.veList[0].disp.x = this.normalX;
      this.veList[1].visible = true;
    }
  };
  CastleMinuteSkipItemScrollList.prototype.naviUp = function () {
    if (!this.locked) {
      if (this._currentStartIndex > 0) {
        this.updateItemList(this._currentStartIndex - this._scrollStep);
      }
      if (this._itemVEList) {
        this.updateActiveStates();
      }
      this.dispatchEvent(new __dep_exact_9e901e8e2483a22f.ScrollItemEvent(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.ON_SCROLL, null, null));
    }
  };
  CastleMinuteSkipItemScrollList.prototype.naviDown = function () {
    if (!this.locked) {
      if (this._currentStartIndex < this._itemCount - this._itemsVisibleAtOnce) {
        this.updateItemList(this._currentStartIndex + this._scrollStep);
      }
      if (this._itemVEList) {
        this.updateActiveStates();
      }
      this.dispatchEvent(new __dep_exact_9e901e8e2483a22f.ScrollItemEvent(__dep_exact_9e901e8e2483a22f.ScrollItemEvent.ON_SCROLL, null, null));
    }
  };
  return CastleMinuteSkipItemScrollList;
}(__dep_exact_9e901e8e2483a22f_1.ItemScrollList);
exports.CastleMinuteSkipItemScrollList = __s0local0;
