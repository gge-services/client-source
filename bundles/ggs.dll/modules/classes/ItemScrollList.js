Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_ItemList = require("gge-module:class_ItemList");
var __dep_class_ScrollItemEvent = require("gge-module:class_ScrollItemEvent");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function ItemScrollList(__s3param0, __s3param1 = null) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._hideButtons = true;
    __s3local0._locked = false;
    __s3local0._scrollStep = 1;
    __s3local0._scrollLayer = __s3param1;
    if (__s3local0._scrollLayer) {
      __s3local0._scrollLayer.addEventListener(__s0local0.MOUSE_WHEEL, __s3local0.bindFunction(__s3local0.onMouseWheel));
    } else {
      __s3local0._componentDisp.addEventListener(__s0local0.MOUSE_WHEEL, __s3local0.bindFunction(__s3local0.onMouseWheel));
    }
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(ItemScrollList, __s1param0);
  ItemScrollList.prototype.initList = function (__s7param0 = 0, __s7param1 = false) {
    if (__s7param1) {
      this.updateItemList(Math.max(__s7param0, 0));
    } else {
      this.updateItemList(Math.min(__s7param0, Math.max(this._itemCount - this._itemsVisibleAtOnce, 0)));
    }
    this.updateActiveStates();
  };
  ItemScrollList.prototype.updateItemList = function (__s11param0 = 0) {
    __s1param0.prototype.updateItemList.call(this, __s11param0);
    if (this._hideButtons) {
      this.btn_up.visible = this._currentStartIndex > 0;
      this.btn_down.visible = this._currentStartIndex < this._itemCount - this._itemsVisibleAtOnce;
    } else {
      if (this.btn_up.basicButton) {
        this.btn_up.basicButton.enableButton = this._currentStartIndex > 0;
        this.btn_down.basicButton.enableButton = this._currentStartIndex < this._itemCount - this._itemsVisibleAtOnce;
      } else {
        this.btn_up.enableButton = this._currentStartIndex > 0;
        this.btn_down.enableButton = this._currentStartIndex < this._itemCount - this._itemsVisibleAtOnce;
      }
      this.btn_up.visible = true;
      this.btn_down.visible = true;
    }
    if (this._componentDisp.txt_index) {
      var __s11local0 = this._itemCount > 0 ? 1 : 0;
      this._componentDisp.txt_index.text = Math.max(__s11local0, Math.ceil(this._currentStartIndex / this._scrollStep)) + " / " + Math.ceil(this._itemCount / this._scrollStep);
    }
  };
  ItemScrollList.prototype.onMouseWheel = function (__s18param0) {
    if (__s18param0.delta < 0) {
      this.naviUp();
    } else if (__s18param0.delta > 0) {
      this.naviDown();
    }
  };
  ItemScrollList.prototype.naviUp = function () {
    if (!this._locked) {
      if (this._currentStartIndex > 0) {
        this.updateItemList(Math.max(0, this._currentStartIndex - this._scrollStep));
      }
      this.updateActiveStates();
      this.dispatchEvent(new __dep_class_ScrollItemEvent.ScrollItemEvent(__dep_class_ScrollItemEvent.ScrollItemEvent.ON_SCROLL, null, null));
    }
  };
  ItemScrollList.prototype.naviDown = function () {
    if (!this._locked) {
      if (this._currentStartIndex < this._itemCount - this._itemsVisibleAtOnce) {
        this.updateItemList(this._currentStartIndex + this._scrollStep);
      }
      this.updateActiveStates();
      this.dispatchEvent(new __dep_class_ScrollItemEvent.ScrollItemEvent(__dep_class_ScrollItemEvent.ScrollItemEvent.ON_SCROLL, null, null));
    }
  };
  Object.defineProperty(ItemScrollList.prototype, "scrollStep", {
    set: function (__s30param0) {
      this._scrollStep = __s30param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemScrollList.prototype, "hideButtons", {
    get: function () {
      return this._hideButtons;
    },
    set: function (__s34param0) {
      this._hideButtons = __s34param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemScrollList.prototype, "btn_up", {
    get: function () {
      return this._componentDisp.btn_up;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemScrollList.prototype, "btn_down", {
    get: function () {
      return this._componentDisp.btn_down;
    },
    enumerable: true,
    configurable: true
  });
  ItemScrollList.prototype.remove = function () {
    if (this._scrollLayer) {
      this._scrollLayer.removeEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    } else {
      this._componentDisp.removeEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    }
    __s1param0.prototype.remove.call(this);
  };
  ItemScrollList.prototype.lockList = function () {
    this._locked = true;
  };
  ItemScrollList.prototype.unlockList = function () {
    this._locked = false;
  };
  Object.defineProperty(ItemScrollList.prototype, "locked", {
    get: function () {
      return this._locked;
    },
    enumerable: true,
    configurable: true
  });
  return ItemScrollList;
}(__dep_class_ItemList.ItemList);
exports.ItemScrollList = __s0local1;
