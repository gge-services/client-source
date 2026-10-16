Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __s0local0 = createjs.Container;
var __s0local1 = createjs.Event;
var __s0local2 = function (__s1param0) {
  function CastleScreen(__s3param0) {
    var __s3local0 = this;
    __s3local0._backgroundColor = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleScreen, __s1param0);
  CastleScreen.prototype.drawBackground = function (__s5param0, __s5param1) {
    this._backgroundColor = __s5param1;
    if (this._background && __s5param0.contains(this._background)) {
      __s5param0.removeChild(this._background);
    }
    this._background = new __s0local0();
    this._background.graphics.beginFill(this._backgroundColor, 1);
    this._background.graphics.drawRect(0, 0, __s5param0.stage.stageWidth, __s5param0.stage.stageHeight);
    this._background.graphics.endFill();
    this._background.addEventListener(__s0local1.ADDED_TO_STAGE, this.bindFunction(this.onBackGroundAddedToStage));
    __s5param0.addChildAt(this._background, 0);
  };
  CastleScreen.prototype.onBackGroundAddedToStage = function (__s8param0) {
    this._background.removeEventListener(__s0local1.ADDED_TO_STAGE, this.bindFunction(this.onBackGroundAddedToStage));
    window.addEventListener(__s0local1.RESIZE, this.bindFunction(this.onResizeBG));
    this.onResizeBG(null);
  };
  CastleScreen.prototype.onResizeBG = function (__s10param0) {
    if (this._background && this._background.stage) {
      this._background.graphics.clear();
      this._background.graphics.beginFill(this._backgroundColor, 1);
      this._background.graphics.drawRect(0, 0, this._background.stage.stageWidth, this._background.stage.stageHeight);
      this._background.graphics.endFill();
      try {
        __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().gamestage.update();
        __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().renderBGStage();
      } catch (__s14local0) {}
    }
  };
  CastleScreen.prototype.removeBackground = function (__s16param0) {
    if (this._background) {
      window.removeEventListener(__s0local1.RESIZE, this.bindFunction(this.onResizeBG));
      if (__s16param0.contains(this._background)) {
        __s16param0.removeChild(this._background);
      }
    }
  };
  CastleScreen.prototype.destroy = function () {
    if (this._background) {
      this._background.removeEventListener(__s0local1.ADDED_TO_STAGE, this.bindFunction(this.onBackGroundAddedToStage));
      window.removeEventListener(__s0local1.RESIZE, this.bindFunction(this.onResizeBG));
    }
    __s1param0.prototype.destroy.call(this);
  };
  CastleScreen.prototype.onMouseOver = function (__s23param0) {
    __s1param0.prototype.onMouseOver.call(this, __s23param0);
    if (__dep_exact_9e901e8e2483a22f_2.BasicToolTipManager.TOOLTIP_LABEL in __s23param0.target && __s23param0.target.toolTipText) {
      this.layoutManager.tooltipManager.show(__s23param0.target.toolTipText, __s23param0.target);
    }
  };
  CastleScreen.prototype.onMouseOut = function (__s26param0) {
    __s1param0.prototype.onMouseOut.call(this, __s26param0);
    this.layoutManager.tooltipManager.hide();
    this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
  };
  CastleScreen.prototype.onCursorOver = function (__s28param0) {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s28param0.target, "BasicButton")) {
      if (__s28param0.target.enabled) {
        this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
      }
    } else if (CastleScreen.ACTLIKEBUTTON_LABEL in __s28param0.target && __s28param0.target.actLikeButton) {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  Object.defineProperty(CastleScreen.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleScreen.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleScreen.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_3.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleScreen.__initialize_static_members = function () {
    CastleScreen.ACTLIKEBUTTON_LABEL = "actLikeButton";
  };
  return CastleScreen;
}(__dep_exact_9e901e8e2483a22f_1.BasicScreen);
exports.CastleScreen = __s0local2;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__s0local2.__initialize_static_members();
