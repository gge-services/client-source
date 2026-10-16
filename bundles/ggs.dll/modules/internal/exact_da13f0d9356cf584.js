var __dep_export__extend = require("gge-module:export__extend");
createjs.MouseEvent.CLICK = "click";
createjs.MouseEvent.MOUSE_UP = "pressup";
createjs.MouseEvent.PRESS_MOVE = "pressmove";
createjs.MouseEvent.MOUSE_DOWN = "mousedown";
createjs.MouseEvent.MOUSE_OUT = "mouseout";
createjs.MouseEvent.MOUSE_OVER = "mouseover";
createjs.MouseEvent.ROLL_OVER = "rollover";
createjs.MouseEvent.ROLL_OUT = "rollout";
createjs.MouseEvent.DOUBLE_CLICK = "dblclick";
createjs.MouseEvent.MOUSE_MOVE = "stagemousemove";
createjs.MouseEvent.STAGE_MOUSE_DOWN = "stagemousedown";
createjs.MouseEvent.STAGE_MOUSE_UP = "stagemouseup";
createjs.MouseEvent.MOUSE_WHEEL = "wheel";
Object.defineProperty(createjs.MouseEvent.prototype, "shiftKey", {
  set: function (__s1param0) {
    this._shiftKey = __s1param0;
  },
  get: function () {
    if (__dep_export__extend.isUndefined(this.nativeEvent)) {
      return this._shiftKey || false;
    } else {
      return this.nativeEvent.shiftKey;
    }
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.MouseEvent.prototype, "ctrlKey", {
  set: function (__s7param0) {
    this._ctrlKey = __s7param0;
  },
  get: function () {
    if (__dep_export__extend.isUndefined(this.nativeEvent)) {
      return this._ctrlKey || false;
    } else {
      return this.nativeEvent.ctrlKey;
    }
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.MouseEvent.prototype, "altKey", {
  set: function (__s13param0) {
    this._altKey = __s13param0;
  },
  get: function () {
    if (__dep_export__extend.isUndefined(this.nativeEvent)) {
      return this._altKey || false;
    } else {
      return this.nativeEvent.altKey;
    }
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(createjs.MouseEvent.prototype, "buttonDown", {
  value: false,
  enumerable: true,
  configurable: true,
  writable: true
});
Object.defineProperty(createjs.MouseEvent.prototype, "delta", {
  set: function (__s19param0) {
    this._delta = __s19param0;
  },
  get: function () {
    if (__dep_export__extend.isUndefined(this.nativeEvent)) {
      return this._delta || 0;
    } else {
      return this.nativeEvent.deltaY;
    }
  },
  enumerable: true,
  configurable: true
});
