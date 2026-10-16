Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function LordScrollList(__s3param0, __s3param1 = null) {
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LordScrollList, __s1param0);
  LordScrollList.prototype.updateItemList = function (__s5param0 = 0) {
    __s1param0.prototype.updateItemList.call(this, __s5param0);
    this.btn_up.toolTipText = "previousTen_tt";
    this.btn_down.toolTipText = "nextTen_tt";
    if (this.hideButtons) {
      this.btn_up.visible = this._currentStartIndex > 0;
      this.btn_down.visible = this._currentStartIndex < this._itemCount - this._itemsVisibleAtOnce;
    } else {
      if (this.btn_up.basicButton) {
        this.btn_up.basicButton.enableButton = true;
        this.btn_down.basicButton.enableButton = true;
      } else {
        this.btn_up.enableButton = true;
        this.btn_down.enableButton = true;
      }
      this.btn_up.visible = true;
      this.btn_down.visible = true;
    }
    if (this._componentDisp.txt_index) {
      var __s5local0 = __dep_exact_f855840627e6e145.int(this._itemCount > 0 ? 1 : 0);
      this._componentDisp.txt_index.text = Math.max(__s5local0, Math.ceil(this._currentStartIndex / this._scrollStep)) + " / " + Math.ceil(this._itemCount / this._scrollStep);
    }
  };
  LordScrollList.prototype.naviUp = function () {
    if (!this.locked) {
      if (this._currentStartIndex > 0) {
        this.updateItemList(Math.max(0, this._currentStartIndex - this._scrollStep));
      } else {
        var __s12local0 = __dep_exact_f855840627e6e145.int(this._itemCount / this._scrollStep) * this._scrollStep;
        if (__s12local0 < this._itemCount) {
          this.updateItemList(__s12local0);
        } else {
          this.updateItemList(this._itemCount - this._itemsVisibleAtOnce);
        }
      }
      if (this._itemVEList) {
        this.updateActiveStates();
      }
      this.dispatchEvent(new __dep_exact_9e901e8e2483a22f_1.ScrollItemEvent(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ON_SCROLL, null, null));
    }
  };
  LordScrollList.prototype.naviDown = function () {
    if (!this.locked) {
      if (this._currentStartIndex < this._itemCount - this._itemsVisibleAtOnce) {
        this.updateItemList(this._currentStartIndex + this._scrollStep);
      } else {
        this.updateItemList(0);
      }
      if (this._itemVEList) {
        this.updateActiveStates();
      }
      this.dispatchEvent(new __dep_exact_9e901e8e2483a22f_1.ScrollItemEvent(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.ON_SCROLL, null, null));
    }
  };
  return LordScrollList;
}(__dep_exact_9e901e8e2483a22f.ItemScrollList);
exports.LordScrollList = __s0local0;
