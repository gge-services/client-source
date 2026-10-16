Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_MovieClipHelper = require("gge-module:class_MovieClipHelper");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = createjs.Container;
var __s0local3 = function () {
  function BasicCustomCursor(__s3param0) {
    this._lastUpdate = 0;
    this._lookForLowPerformance = false;
    this._useUpdateAfterEvent = true;
    this._isEnabled = false;
    this._hidePermanent = false;
    this._disp = __s3param0;
    this._additionalCursorGfx = new __s0local2();
    this._additionalCursorGfx.mouseChildren = false;
    this._additionalCursorGfx.mouseEnabled = false;
    this._disp.addChild(this._additionalCursorGfx);
  }
  BasicCustomCursor.prototype.init = function () {
    this._disp.mouseEnabled = false;
    this._disp.mouseChildren = false;
    this._disp.addEventListener(__s0local0.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
    this._isEnabled = true;
  };
  BasicCustomCursor.prototype.onAddedToStage = function (__s7param0) {
    this._disp.removeEventListener(__s0local0.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
    this._disp.stage.addEventListener(__s0local1.MOUSE_MOVE, this.bindFunction(this.updateMouse));
    this._disp.stage.addEventListener(__s0local1.MOUSE_LEAVE, this.bindFunction(this.mouseLeaveHandler));
    this._disp.stage.addEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.updateTimer));
    this.setCursorType(BasicCustomCursor.CURSOR_ARROW);
  };
  BasicCustomCursor.prototype.hideForPerformance = function () {
    if (this._disp) {
      this._disp.stage.removeEventListener(__s0local1.MOUSE_MOVE, this.bindFunction(this.updateMouse));
      this._disp.stage.removeEventListener(__s0local1.MOUSE_LEAVE, this.bindFunction(this.mouseLeaveHandler));
      this._disp.stage.removeEventListener(__s0local1.MOUSE_MOVE, this.bindFunction(this.mouseReturnHandler));
      this._disp.stage.removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.updateTimer));
      this._disp.visible = false;
      this.isEnabled = false;
      this._hidePermanent = true;
    }
  };
  BasicCustomCursor.prototype.updateTimer = function (__s12param0) {
    this._lastUpdate = Date.now();
  };
  BasicCustomCursor.prototype.setCursorType = function (__s14param0) {
    if (this._currentType != __s14param0 && this._disp) {
      __dep_class_MovieClipHelper.MovieClipHelper.clearMovieClip(this.additionalCursorGfx);
      this._disp.gotoAndStop(__s14param0);
    }
  };
  BasicCustomCursor.prototype.updateMouse = function (__s17param0) {
    if (this._isEnabled && this._disp.stage) {
      this._disp.x = this._disp.stage.mouseX;
      this._disp.y = this._disp.stage.mouseY;
      if (this.isOkToUpdate()) {
        this._useUpdateAfterEvent;
      }
    }
  };
  BasicCustomCursor.prototype.mouseLeaveHandler = function (__s21param0) {
    this.hideCustomCursor();
    if (this._disp.stage) {
      this._disp.stage.addEventListener(__s0local1.MOUSE_MOVE, this.bindFunction(this.mouseReturnHandler));
    }
  };
  BasicCustomCursor.prototype.mouseReturnHandler = function (__s24param0) {
    this.isEnabled = this._isEnabled;
    if (this._disp.stage) {
      this._disp.stage.removeEventListener(__s0local1.MOUSE_MOVE, this.bindFunction(this.mouseReturnHandler));
    }
  };
  BasicCustomCursor.prototype.hideCustomCursor = function () {
    if (this._disp) {
      this._disp.visible = false;
    }
  };
  BasicCustomCursor.prototype.showCustomCursor = function () {
    if (this._disp && !this._hidePermanent) {
      this._disp.visible = true;
    }
  };
  Object.defineProperty(BasicCustomCursor.prototype, "isEnabled", {
    get: function () {
      return this._isEnabled;
    },
    set: function (__s35param0) {
      this.setIsEnabled(__s35param0);
    },
    enumerable: true,
    configurable: true
  });
  BasicCustomCursor.prototype.setIsEnabled = function (__s37param0) {
    if (!this._hidePermanent) {
      this._isEnabled = __s37param0;
      if (this._isEnabled) {
        this.showCustomCursor();
      } else {
        this.hideCustomCursor();
      }
    }
  };
  Object.defineProperty(BasicCustomCursor.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicCustomCursor.prototype, "additionalCursorGfx", {
    get: function () {
      return this._additionalCursorGfx;
    },
    enumerable: true,
    configurable: true
  });
  BasicCustomCursor.prototype.isOkToUpdate = function () {
    if (!this._lookForLowPerformance) {
      return true;
    }
    var __s46local0 = Date.now();
    var __s46local1 = __s46local0 - this._lastUpdate;
    if (__s46local1 > BasicCustomCursor.MAXIMUM_TIME_TO_FALLBACK) {
      this.hideForPerformance();
      return false;
    } else {
      return __s46local1 > BasicCustomCursor.MINIMUM_TIME_TO_UPDATE && (this._lastUpdate = __s46local0, true);
    }
  };
  Object.defineProperty(BasicCustomCursor.prototype, "lookForLowPerformance", {
    set: function (__s51param0) {
      this._lookForLowPerformance = __s51param0;
      this._lastUpdate = Date.now();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicCustomCursor.prototype, "useUpdateAfterEvent", {
    get: function () {
      return this._useUpdateAfterEvent;
    },
    set: function (__s55param0) {
      this._useUpdateAfterEvent = __s55param0;
    },
    enumerable: true,
    configurable: true
  });
  BasicCustomCursor.CURSOR_ARROW = 1;
  BasicCustomCursor.CURSOR_CLICK = 2;
  BasicCustomCursor.CURSOR_DRAG = 3;
  BasicCustomCursor.CURSOR_HAND = 4;
  BasicCustomCursor.CURSOR_ZOOM = 5;
  BasicCustomCursor.MINIMUM_TIME_TO_UPDATE = 50;
  BasicCustomCursor.MAXIMUM_TIME_TO_FALLBACK = 150;
  return BasicCustomCursor;
}();
exports.BasicCustomCursor = __s0local3;
