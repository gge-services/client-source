Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Container;
var __s0local2 = createjs.MouseEvent;
var __s0local3 = function (__s1param0) {
  function CastleNativeCustomCursor() {
    var __s3local0 = this;
    __s3local0.currentCursorType = 0;
    __s3local0.prevCursorType = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new __s0local0()) || this).draggedItem = new __s0local1();
    __s3local0.draggedItem.mouseChildren = false;
    __s3local0.draggedItem.mouseEnabled = false;
    __s3local0.disp.addChild(__s3local0.draggedItem);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleNativeCustomCursor, __s1param0);
  CastleNativeCustomCursor.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.disp.mouseChildren = false;
    this.disp.mouseEnabled = false;
    this.isEnabled = true;
    this.registerCursors();
  };
  CastleNativeCustomCursor.prototype.registerCursors = function () {
    this.addMouseCursor(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("Cursor_Arrow"))());
    this.addMouseCursor(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("Cursor_Click"))());
    this.addMouseCursor(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_DRAG, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("Cursor_Drag"))());
    this.addMouseCursor(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_HAND, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("Cursor_Active"))());
    this.addMouseCursor(CastleNativeCustomCursor.CURSOR_INPUT, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("Cursor_Input"))());
  };
  CastleNativeCustomCursor.prototype.addMouseCursor = function (__s9param0, __s9param1) {
    try {
      var __s9local0 = new __dep_exact_81dacdf05bd32292_3.MouseCursorData();
      __s9local0.data = [];
      __s9local0.data[0] = __s9param1;
      __dep_exact_81dacdf05bd32292_1.Mouse.instance().registerCursor(this.typeToString(__s9param0), __s9local0);
    } catch (__s12local0) {
      console.warn("Failed to register custom cursor (CORS issue):", this.typeToString(__s9param0), __s12local0);
    }
  };
  CastleNativeCustomCursor.prototype.typeToString = function (__s14param0) {
    switch (__s14param0) {
      case __dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK:
        return __dep_exact_81dacdf05bd32292_2.MouseCursor.CLICK;
      case __dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_DRAG:
        return __dep_exact_81dacdf05bd32292_2.MouseCursor.DRAG;
      case __dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_HAND:
        return __dep_exact_81dacdf05bd32292_2.MouseCursor.HAND;
      case CastleNativeCustomCursor.CURSOR_INPUT:
        return "input";
      default:
        return __dep_exact_81dacdf05bd32292_2.MouseCursor.ARROW;
    }
  };
  CastleNativeCustomCursor.prototype.setCursorType = function (__s17param0) {
    this.showCustomCursor();
    if (this.isEnabled && !this.hasDraggedItem) {
      this.prevCursorType = this.currentCursorType;
      this.currentCursorType = __s17param0;
      try {
        __dep_exact_81dacdf05bd32292_1.Mouse.instance().showCustomCursor(this.typeToString(__s17param0));
      } catch (__s21local0) {
        console.warn("Failed to show custom cursor:", this.typeToString(__s17param0));
      }
    }
  };
  CastleNativeCustomCursor.prototype.hideCustomCursor = function () {
    try {
      __dep_exact_81dacdf05bd32292_1.Mouse.instance().hideCustomCursor();
    } catch (__s26local0) {}
    this.additionalCursorGfx.visible = false;
  };
  CastleNativeCustomCursor.prototype.showCustomCursor = function () {
    this.additionalCursorGfx.visible = false;
    try {
      __dep_exact_81dacdf05bd32292_1.Mouse.instance().showCustomCursor(this.typeToString(this.currentCursorType));
    } catch (__s31local0) {
      console.warn("Failed to show custom cursor:", this.typeToString(this.currentCursorType));
    }
  };
  CastleNativeCustomCursor.prototype.startDrag = function (__s33param0, __s33param1 = 0, __s33param2 = 0, __s33param3 = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_DRAG)) {
    this.setCursorType(__s33param3);
    this.draggedItemVisible = true;
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.draggedItem);
    this.draggedItem.addChild(__s33param0);
    __s33param0.x += __s33param1;
    __s33param0.y += __s33param2;
    __s33param0.mouseEnabled = false;
    __s33param0.mouseChildren = false;
  };
  CastleNativeCustomCursor.prototype.stopDrag = function (__s35param0) {
    if (this.draggedItem.contains(__s35param0)) {
      this.draggedItem.removeChild(__s35param0);
      this.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
      __s35param0.mouseEnabled = true;
      __s35param0.mouseChildren = true;
    }
  };
  Object.defineProperty(CastleNativeCustomCursor.prototype, "draggedItemVisible", {
    set: function (__s38param0) {
      this.draggedItem.visible = __s38param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleNativeCustomCursor.prototype.onAddedToStage = function (__s40param0) {
    this.disp.stage.addEventListener(__s0local2.MOUSE_MOVE, this.bindFunction(this.updateMouse));
    this.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
  };
  CastleNativeCustomCursor.prototype.updateMouse = function (__s42param0) {
    if (this.isEnabled) {
      __s1param0.prototype.updateMouse.call(this, __s42param0);
      if (__dep_exact_81dacdf05bd32292_1.currentBrowserInfo.isTouchEvent(__s42param0) && !this.draggedItem.visible) {
        this.draggedItem.visible = true;
      }
    }
  };
  CastleNativeCustomCursor.prototype.stopAllDrag = function () {
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.draggedItem);
    this.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
  };
  Object.defineProperty(CastleNativeCustomCursor.prototype, "hasDraggedItem", {
    get: function () {
      return this.draggedItem.numChildren > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNativeCustomCursor.prototype, "isEnabled", {
    get: function () {
      var __s50local0 = Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.prototype, "isEnabled");
      if (__s50local0 && __s50local0.get) {
        return __s50local0.get.call(this);
      } else {
        return this._isEnabled;
      }
    },
    set: function (__s54param0) {},
    enumerable: true,
    configurable: true
  });
  CastleNativeCustomCursor.CURSOR_INPUT = 7;
  return CastleNativeCustomCursor;
}(__dep_exact_9e901e8e2483a22f.BasicCustomCursor);
exports.CastleNativeCustomCursor = __s0local3;
