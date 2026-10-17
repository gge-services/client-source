Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function CastleTutorialClickBlocker(__s3param0) {
    this.added = false;
    this._ignoreMouseMove = false;
    if (__s3param0 == null) {
      throw new Error("do not instantiate, use instance getter");
    }
    this.clear();
  }
  Object.defineProperty(CastleTutorialClickBlocker, "instance", {
    get: function () {
      CastleTutorialClickBlocker._instance ||= new CastleTutorialClickBlocker(new __s0local2());
      return CastleTutorialClickBlocker._instance;
    },
    enumerable: true,
    configurable: true
  });
  CastleTutorialClickBlocker.prototype.addEventListeners = function () {
    if (!this.added) {
      this.added = true;
      this.addStageEventListeners(__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().uiStage);
      this.addStageEventListeners(__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().gamestage);
      this.addStageEventListeners(__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().bgStage);
      this.addStageEventListeners(__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().staticStage);
    }
  };
  CastleTutorialClickBlocker.prototype.addStageEventListeners = function (__s11param0) {
    __s11param0.addEventListener(__s0local0.CLICK, this.bindFunction(this.avoidEventPropagation), true);
    __s11param0.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.avoidEventPropagation), true);
    __s11param0.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.avoidEventPropagation), true);
    __s11param0.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.avoidEventPropagationWithCursor), true);
    __s11param0.addEventListener(__s0local0.MOUSE_MOVE, this.bindFunction(this.avoidEventPropagationMove), true);
    __s11param0.addEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.avoidEventPropagationWithCursor), true);
  };
  CastleTutorialClickBlocker.prototype.removeEventListeners = function () {
    this.added = false;
    this.removeStageEventListeners(__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().uiStage);
    this.removeStageEventListeners(__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().gamestage);
    this.removeStageEventListeners(__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().bgStage);
    this.removeStageEventListeners(__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().staticStage);
  };
  CastleTutorialClickBlocker.prototype.removeStageEventListeners = function (__s15param0) {
    __s15param0.removeEventListener(__s0local0.CLICK, this.bindFunction(this.avoidEventPropagation), true);
    __s15param0.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.avoidEventPropagation), true);
    __s15param0.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.avoidEventPropagation), true);
    __s15param0.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.avoidEventPropagationWithCursor), true);
    __s15param0.removeEventListener(__s0local0.MOUSE_MOVE, this.bindFunction(this.avoidEventPropagationMove), true);
    __s15param0.removeEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.avoidEventPropagationWithCursor), true);
  };
  CastleTutorialClickBlocker.prototype.replace = function (__s17param0) {
    if (!__s17param0) {
      throw new ReferenceError("target must not be null!");
    }
    this.clear(false);
    this.add(__s17param0);
  };
  CastleTutorialClickBlocker.prototype.allowNoClicks = function () {
    this.clear(false);
    this.addEventListeners();
  };
  CastleTutorialClickBlocker.prototype.add = function (__s22param0) {
    if (!__s22param0) {
      throw new ReferenceError("target must not be null!");
    }
    this.targets.push(__s22param0);
    this.addEventListeners();
  };
  CastleTutorialClickBlocker.prototype.remove = function (__s25param0) {
    this.targets.splice(__s25param0, 1);
  };
  CastleTutorialClickBlocker.prototype.clear = function (__s27param0 = true) {
    try {
      if (__dep_export_Iso.Iso.renderer) {
        __dep_export_Iso.Iso.renderer.mouse.cancelDraggedTarget();
      }
    } catch (__s31local0) {
      __dep_exact_9e901e8e2483a22f_2.debug(__s31local0.stack);
    }
    this._ignoreMouseMove = false;
    this.targets = [];
    this.addExceptions();
    if (__s27param0) {
      this.removeEventListeners();
    }
  };
  CastleTutorialClickBlocker.prototype.addExceptions = function () {
    try {
      var __s34local0 = __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().getPanel(__dep_export_CastleOptionPanel.CastleOptionPanel);
      if (__s34local0 && __dep_exact_81dacdf05bd32292.instanceOfClass(__s34local0, "CastleOptionPanel")) {
        var __s34local1 = __s34local0.panelDisp;
        if (__s34local1 && __s34local1.btn_logout) {
          this.targets.push(__s34local1.btn_logout);
        }
      }
    } catch (__s39local0) {
      __dep_exact_9e901e8e2483a22f_2.debug(__s39local0.stack);
    }
  };
  CastleTutorialClickBlocker.prototype.avoidEventPropagation = function (__s41param0) {
    if (!this.validTarget(__s41param0)) {
      __s41param0.stopImmediatePropagation();
    }
  };
  CastleTutorialClickBlocker.prototype.avoidEventPropagationMove = function (__s44param0) {
    if (!this.validMoveTarget(__s44param0)) {
      __s44param0.stopImmediatePropagation();
    }
  };
  CastleTutorialClickBlocker.prototype.avoidEventPropagationWithCursor = function (__s47param0) {
    if (this.validTarget(__s47param0)) {
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    } else {
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
      __dep_export_ButtonHelper.ButtonHelper.resetHoverState(__s47param0.target);
      __s47param0.stopImmediatePropagation();
    }
  };
  CastleTutorialClickBlocker.prototype.validTarget = function (__s51param0) {
    if (this.targets != null) {
      for (var __s51local0 = 0, __s51local1 = this.targets; __s51local0 < __s51local1.length; __s51local0++) {
        var __s51local2 = __s51local1[__s51local0];
        if (__s51local2 !== undefined && (__s51local2 == __s51param0.target || __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.isChildrenOf(__s51param0.target, __s51local2))) {
          return true;
        }
      }
    }
    return false;
  };
  Object.defineProperty(CastleTutorialClickBlocker.prototype, "ignoreMouseMove", {
    set: function (__s57param0) {
      this._ignoreMouseMove = __s57param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleTutorialClickBlocker.prototype.validMoveTarget = function (__s59param0) {
    if (this._ignoreMouseMove) {
      return true;
    }
    if (this.targets != null) {
      for (var __s59local0 = 0, __s59local1 = this.targets; __s59local0 < __s59local1.length; __s59local0++) {
        var __s59local2 = __s59local1[__s59local0];
        if (__s59local2 !== undefined && (__s59local2 == __s59param0.target || __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.isChildrenOf(__s59param0.target, __s59local2))) {
          return true;
        }
      }
    }
    return false;
  };
  return CastleTutorialClickBlocker;
}();
exports.CastleTutorialClickBlocker = __s0local1;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleOptionPanel = require("gge-module:export_CastleOptionPanel");
var __s0local2 = function () {
  return function SingletonBlocker() {};
}();
exports.SingletonBlocker = __s0local2;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
