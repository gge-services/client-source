Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function CastleItemScrollList(__s3param0, __s3param1 = null) {
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleItemScrollList, __s1param0);
  CastleItemScrollList.prototype.updateItemList = function (__s5param0 = 0) {
    __s1param0.prototype.updateItemList.call(this, __s5param0);
    if (this.btn_top) {
      if (this.hideButtons) {
        this.btn_top.visible = this._currentStartIndex > 0;
      } else {
        if (this.btn_top.basicButton) {
          this.btn_top.basicButton.enableButton = this._currentStartIndex > 0;
        } else {
          this.btn_top.enableButton = this._currentStartIndex > 0;
        }
        this.btn_top.visible = true;
      }
    }
  };
  CastleItemScrollList.prototype.onClick = function (__s12param0) {
    __s1param0.prototype.onClick.call(this, __s12param0);
    switch (__s12param0.target) {
      case this.btn_top:
        this.naviTop();
    }
  };
  CastleItemScrollList.prototype.naviUp = function () {
    if (!this.locked) {
      if (this._currentStartIndex > 0) {
        this.updateItemList(this._currentStartIndex - this._scrollStep);
      }
      if (this._itemVEList) {
        this.updateActiveStates();
      }
      this.dispatchEvent(new __dep_exact_9e901e8e2483a22f_1.ScrollItemEvent(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ON_SCROLL, null, null));
    }
  };
  CastleItemScrollList.prototype.naviDown = function () {
    if (!this.locked) {
      if (this._currentStartIndex < this._itemCount - this._itemsVisibleAtOnce) {
        this.updateItemList(this._currentStartIndex + this._scrollStep);
      }
      if (this._itemVEList) {
        this.updateActiveStates();
      }
      this.dispatchEvent(new __dep_exact_9e901e8e2483a22f_1.ScrollItemEvent(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ON_SCROLL, null, null));
    }
  };
  CastleItemScrollList.prototype.naviTop = function () {
    if (!this.locked) {
      if (this._currentStartIndex > 0) {
        this.updateItemList(Math.max(0));
      }
      if (this._itemVEList) {
        this.updateActiveStates();
      }
      this.dispatchEvent(new __dep_exact_9e901e8e2483a22f_1.ScrollItemEvent(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ON_SCROLL, null, null));
    }
  };
  Object.defineProperty(CastleItemScrollList.prototype, "btn_top", {
    get: function () {
      return this._componentDisp.btn_top;
    },
    enumerable: true,
    configurable: true
  });
  return CastleItemScrollList;
}(__dep_exact_9e901e8e2483a22f.ItemScrollList);
exports.CastleItemScrollList = __s0local0;
