Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_ScrollItemEvent = require("gge-module:class_ScrollItemEvent");
var __s0local0 = createjs.EventDispatcher;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = function (__s1param0) {
  function ItemList(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._itemsVisibleAtOnce = 0;
    __s3local0._itemCount = 0;
    __s3local0._currentStartIndex = 0;
    __s3local0.scrollInstanceName = "item";
    __s3local0._idCounter = 0;
    __s3local0._componentDisp = __s3param0;
    __s3local0._idCounter = 0;
    __s3local0._componentDisp.addEventListener(__s0local1.CLICK, __s3local0.bindFunction(__s3local0.onClick));
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(ItemList, __s1param0);
  Object.defineProperty(ItemList.prototype, "componentDisp", {
    get: function () {
      return this._componentDisp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemList.prototype, "scrollItemClass", {
    set: function (__s7param0) {
      this._itemVEList ||= [];
      for (var __s7local0 = 0; this._componentDisp[this.scrollInstanceName + __s7local0];) {
        var __s7local1 = new __s7param0(this._componentDisp[this.scrollInstanceName + __s7local0]);
        __s7local1.addEventListener(__dep_class_ScrollItemEvent.ScrollItemEvent.TOUCH_DOWN, this.bindFunction(this.onTouchItem));
        __s7local1.addEventListener(__dep_class_ScrollItemEvent.ScrollItemEvent.TOUCH_UP, this.bindFunction(this.onTouchItem));
        __s7local1.addEventListener(__dep_class_ScrollItemEvent.ScrollItemEvent.TOUCH_DRAG_START, this.bindFunction(this.onTouchItem));
        __s7local1.addEventListener(__dep_class_ScrollItemEvent.ScrollItemEvent.TOUCH_DRAG_END, this.bindFunction(this.onTouchItem));
        this._itemVEList.push(__s7local1);
        __s7local0++;
      }
      this._itemsVisibleAtOnce = this._itemVEList.length;
    },
    enumerable: true,
    configurable: true
  });
  ItemList.prototype.pushContent = function (__s11param0) {
    this._itemVOList ||= [];
    __s11param0.id = this._idCounter++;
    this._itemVOList.push(__s11param0);
    this._itemCount = this._itemVOList.length;
  };
  ItemList.prototype.removeContent = function (__s13param0) {
    if (this._itemVOList) {
      this._itemVOList.splice(this._itemVOList.indexOf(__s13param0), 1);
      this._itemCount = this._itemVOList.length;
    }
  };
  ItemList.prototype.initList = function (__s16param0 = 0, __s16param1 = false) {
    this.updateItemList();
    this.updateActiveStates();
  };
  ItemList.prototype.updateItemList = function (__s18param0 = 0) {
    this._currentStartIndex = __s18param0;
    for (var __s18local0 = 0; __s18local0 < this._itemsVisibleAtOnce; __s18local0++) {
      var __s18local1 = this._itemVEList[__s18local0];
      var __s18local2 = __s18local0 + __s18param0;
      if (__s18local2 < this._itemCount) {
        __s18local1.fillWithContent(this._itemVOList[__s18local2]);
        __s18local1.show();
        __s18local1.addEventListener(__dep_class_ScrollItemEvent.ScrollItemEvent.CLICK, this.bindFunction(this.onMouseClickOnItem));
        __s18local1.addEventListener(__dep_class_ScrollItemEvent.ScrollItemEvent.ROLL_OVER, this.bindFunction(this.onMouseRollOverItem));
        __s18local1.addEventListener(__dep_class_ScrollItemEvent.ScrollItemEvent.ROLL_OUT, this.bindFunction(this.onMouseRollOutItem));
      } else {
        __s18local1.hide();
        __s18local1.removeEventListener(__dep_class_ScrollItemEvent.ScrollItemEvent.CLICK, this.bindFunction(this.onMouseClickOnItem));
        __s18local1.removeEventListener(__dep_class_ScrollItemEvent.ScrollItemEvent.ROLL_OVER, this.bindFunction(this.onMouseRollOverItem));
        __s18local1.removeEventListener(__dep_class_ScrollItemEvent.ScrollItemEvent.ROLL_OUT, this.bindFunction(this.onMouseRollOutItem));
      }
    }
  };
  ItemList.prototype.onMouseClickOnItem = function (__s24param0) {
    this.dispatchEvent(__s24param0.clone());
  };
  ItemList.prototype.onMouseRollOverItem = function (__s26param0) {
    this.dispatchEvent(new __dep_class_ScrollItemEvent.ScrollItemEvent(__dep_class_ScrollItemEvent.ScrollItemEvent.ROLL_OVER, __s26param0.scrollItem, __s26param0.originTarget));
  };
  ItemList.prototype.onMouseRollOutItem = function (__s28param0) {
    this.dispatchEvent(new __dep_class_ScrollItemEvent.ScrollItemEvent(__dep_class_ScrollItemEvent.ScrollItemEvent.ROLL_OUT, __s28param0.scrollItem, __s28param0.originTarget));
  };
  ItemList.prototype.onTouchItem = function (__s30param0) {
    this.dispatchEvent(__s30param0.clone());
  };
  ItemList.prototype.setActiveItemVO = function (__s32param0, __s32param1, __s32param2 = false) {
    if (!(__s32param0 > this._itemVOList.length)) {
      if (__s32param2) {
        this._itemVOList[__s32param0].active = __s32param1;
      } else {
        for (var __s32local0 = 0; __s32local0 < this._itemVOList.length; __s32local0++) {
          var __s32local1 = this._itemVOList[__s32local0];
          __s32local1.active = __s32param0 == __s32local1.id;
        }
      }
      this.updateActiveStates();
    }
  };
  ItemList.prototype.isItemActive = function (__s39param0) {
    return this._itemVOList[__s39param0] && this._itemVOList[__s39param0].active;
  };
  ItemList.prototype.updateActiveStates = function () {
    for (var __s41local0 = 0; __s41local0 < this._itemVEList.length; __s41local0++) {
      var __s41local1 = this._itemVEList[__s41local0];
      if (__s41local1 && __s41local1.scrollItemVO) {
        __s41local1.isActive = this._itemVEList[__s41local0].scrollItemVO.active;
      }
    }
  };
  ItemList.prototype.onClick = function (__s46param0) {
    switch (__s46param0.target) {
      case this._componentDisp.btn_up:
        this.naviUp();
        break;
      case this._componentDisp.btn_down:
        this.naviDown();
    }
  };
  ItemList.prototype.remove = function () {
    for (var __s49local0 = 0; __s49local0 < this._itemsVisibleAtOnce; __s49local0++) {
      var __s49local1 = this._itemVEList[__s49local0];
      __s49local1.removeEventListener(__dep_class_ScrollItemEvent.ScrollItemEvent.TOUCH_DOWN, this.bindFunction(this.onTouchItem));
      __s49local1.removeEventListener(__dep_class_ScrollItemEvent.ScrollItemEvent.TOUCH_UP, this.bindFunction(this.onTouchItem));
      __s49local1.removeEventListener(__dep_class_ScrollItemEvent.ScrollItemEvent.TOUCH_DRAG_START, this.bindFunction(this.onTouchItem));
      __s49local1.removeEventListener(__dep_class_ScrollItemEvent.ScrollItemEvent.TOUCH_DRAG_END, this.bindFunction(this.onTouchItem));
      __s49local1.remove();
    }
    this._componentDisp.removeEventListener(__s0local1.CLICK, this.bindFunction(this.onClick));
  };
  ItemList.prototype.resetItems = function () {
    for (var __s53local0 = 0; __s53local0 < this._itemsVisibleAtOnce; __s53local0++) {
      this._itemVEList[__s53local0].reset();
    }
  };
  ItemList.prototype.clear = function () {
    this._itemVOList = [];
    this._itemCount = 0;
    this._idCounter = 0;
    for (var __s57local0 = 0; __s57local0 < this._itemsVisibleAtOnce; __s57local0++) {
      this._itemVEList[__s57local0].hide();
    }
  };
  Object.defineProperty(ItemList.prototype, "itemsVisibleAtOnce", {
    get: function () {
      return this._itemsVisibleAtOnce;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemList.prototype, "currentStartIndex", {
    get: function () {
      return this._currentStartIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemList.prototype, "voList", {
    get: function () {
      return this._itemVOList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemList.prototype, "veList", {
    get: function () {
      return this._itemVEList;
    },
    enumerable: true,
    configurable: true
  });
  ItemList.prototype.updateNavi = function () {};
  ItemList.prototype.naviUp = function () {};
  ItemList.prototype.naviDown = function () {};
  return ItemList;
}(__s0local0);
exports.ItemList = __s0local2;
