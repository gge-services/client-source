Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_ScrollItemEvent = require("gge-module:class_ScrollItemEvent");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = createjs.Point;
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local3 = function (__s1param0) {
  function ScrollItem(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._isActive = false;
    __s3local0._touchDragStartPoint = new __s0local2();
    __s3local0._disp = __s3param0;
    __s3local0._disp.addEventListener(__s0local1.MOUSE_DOWN, __s3local0.bindFunction(__s3local0.onTouchDown));
    __s3local0._disp.addEventListener(__s0local1.MOUSE_UP, __s3local0.bindFunction(__s3local0.onTouchUp));
    __s3local0._disp.addEventListener(__s0local1.PRESS_MOVE, __s3local0.bindFunction(__s3local0.onTouchDrag));
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(ScrollItem, __s1param0);
  ScrollItem.prototype.onMouseClick = function (__s5param0) {
    this.dispatchEvent(new __dep_class_ScrollItemEvent.ScrollItemEvent(__dep_class_ScrollItemEvent.ScrollItemEvent.CLICK, this, __s5param0.target, __s5param0));
  };
  ScrollItem.prototype.onRollOver = function (__s7param0) {
    this.dispatchEvent(new __dep_class_ScrollItemEvent.ScrollItemEvent(__dep_class_ScrollItemEvent.ScrollItemEvent.ROLL_OVER, this, __s7param0.target, __s7param0));
  };
  ScrollItem.prototype.onRollOut = function (__s9param0) {
    this.dispatchEvent(new __dep_class_ScrollItemEvent.ScrollItemEvent(__dep_class_ScrollItemEvent.ScrollItemEvent.ROLL_OUT, this, __s9param0.target, __s9param0));
  };
  ScrollItem.prototype.onTouchDown = function (__s11param0) {
    if (__dep_export_CSSMouseCursor.currentBrowserInfo.isTouchEvent(__s11param0)) {
      this.dispatchEvent(new __dep_class_ScrollItemEvent.ScrollItemEvent(__dep_class_ScrollItemEvent.ScrollItemEvent.TOUCH_DOWN, this, __s11param0.target, __s11param0));
      this._touchDragStartPoint.x = __s11param0.stageX;
      this._touchDragStartPoint.y = __s11param0.stageY;
    }
  };
  ScrollItem.prototype.onTouchUp = function (__s14param0) {
    if (__dep_export_CSSMouseCursor.currentBrowserInfo.isTouchEvent(__s14param0)) {
      if (this._disp._scrollItem_isDraggin) {
        this.dispatchEvent(new __dep_class_ScrollItemEvent.ScrollItemEvent(__dep_class_ScrollItemEvent.ScrollItemEvent.TOUCH_DRAG_END, this, __s14param0.target, __s14param0));
      }
      this.dispatchEvent(new __dep_class_ScrollItemEvent.ScrollItemEvent(__dep_class_ScrollItemEvent.ScrollItemEvent.TOUCH_UP, this, __s14param0.target, __s14param0));
      this._disp._scrollItem_isDraggin = false;
      this._touchDragStartPoint.x = 0;
      this._touchDragStartPoint.y = 0;
    }
  };
  ScrollItem.prototype.onTouchDrag = function (__s18param0) {
    if (__dep_export_CSSMouseCursor.currentBrowserInfo.isTouchEvent(__s18param0)) {
      if (!this._disp._scrollItem_isDraggin) {
        if (Math.abs(__s18param0.stageX - this._touchDragStartPoint.x) + Math.abs(__s18param0.stageY - this._touchDragStartPoint.y) > 5) {
          this._disp._scrollItem_isDraggin = true;
          this.dispatchEvent(new __dep_class_ScrollItemEvent.ScrollItemEvent(__dep_class_ScrollItemEvent.ScrollItemEvent.TOUCH_DRAG_START, this, __s18param0.target, __s18param0));
        }
      }
    }
  };
  ScrollItem.prototype.fillWithContent = function (__s23param0) {
    this._scrollItemVO = __s23param0;
    this.customFillItem();
  };
  ScrollItem.prototype.customFillItem = function () {};
  ScrollItem.prototype.show = function () {
    this._disp.visible = true;
    this._disp.addEventListener(__s0local1.CLICK, this.bindFunction(this.onMouseClick));
    this._disp.addEventListener(__s0local1.ROLL_OVER, this.bindFunction(this.onRollOver));
    this._disp.addEventListener(__s0local1.ROLL_OUT, this.bindFunction(this.onRollOut));
  };
  ScrollItem.prototype.hide = function () {
    this._disp.visible = false;
    this._disp.removeEventListener(__s0local1.CLICK, this.bindFunction(this.onMouseClick));
    this._disp.removeEventListener(__s0local1.ROLL_OVER, this.bindFunction(this.onRollOver));
    this._disp.removeEventListener(__s0local1.ROLL_OUT, this.bindFunction(this.onRollOut));
  };
  ScrollItem.prototype.reset = function () {
    console.info("scrollitem is resetting");
  };
  Object.defineProperty(ScrollItem.prototype, "isActive", {
    get: function () {
      return this._isActive;
    },
    set: function (__s35param0) {
      this._isActive = __s35param0;
      this.onActiveStateChange();
    },
    enumerable: true,
    configurable: true
  });
  ScrollItem.prototype.onActiveStateChange = function () {};
  Object.defineProperty(ScrollItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  ScrollItem.prototype.remove = function () {
    this.hide();
    this._disp.removeEventListener(__s0local1.MOUSE_DOWN, this.bindFunction(this.onTouchDown));
    this._disp.removeEventListener(__s0local1.MOUSE_UP, this.bindFunction(this.onTouchUp));
    this._disp.removeEventListener(__s0local1.PRESS_MOVE, this.bindFunction(this.onTouchDrag));
  };
  Object.defineProperty(ScrollItem.prototype, "scrollItemVO", {
    get: function () {
      return this._scrollItemVO;
    },
    set: function (__s45param0) {
      this._scrollItemVO = __s45param0;
    },
    enumerable: true,
    configurable: true
  });
  return ScrollItem;
}(__s0local0);
exports.ScrollItem = __s0local3;
