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
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function BasicIngameUIComponent(__s3param0) {
    var __s3local0 = this;
    __s3local0.isPermanent = false;
    __s3local0._isLocked = false;
    CONSTRUCTOR_HACK;
    __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3param0.visible = false;
    __s3local0._dispBounds = __s3param0.getBounds(null);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BasicIngameUIComponent, __s1param0);
  BasicIngameUIComponent.prototype.onClick = function (__s5param0) {};
  BasicIngameUIComponent.prototype.initComponent = function () {};
  BasicIngameUIComponent.prototype.updateTextField = function (__s9param0) {};
  BasicIngameUIComponent.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    this.disp.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  BasicIngameUIComponent.prototype.hide = function () {
    this._target = null;
    this.disp.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    __s1param0.prototype.hide.call(this);
  };
  BasicIngameUIComponent.prototype.onMouseOver = function (__s15param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.getBasicButton(__s15param0.target) && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target)) {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f_1.BasicCustomCursor.CURSOR_CLICK);
    } else if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s15param0.target, "BasicButton") || "basicButton" in __s15param0.target) {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f_1.BasicCustomCursor.CURSOR_ARROW);
    }
    if (__dep_exact_9e901e8e2483a22f_2.BasicToolTipManager.TOOLTIP_LABEL in __s15param0.target && __s15param0.target.toolTipText) {
      this.layoutManager.tooltipManager.show(__s15param0.target.toolTipText, __s15param0.target);
    }
  };
  BasicIngameUIComponent.prototype.onMouseOut = function (__s20param0) {
    this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f_1.BasicCustomCursor.CURSOR_ARROW);
    this.layoutManager.tooltipManager.hide();
  };
  BasicIngameUIComponent.prototype.onEnterFrameUpdate = function () {
    if (this.isVisible()) {
      if (this._target) {
        if (this.disp) {
          this.updateContent();
          this.updateMenuPosition();
        } else {
          this._target = null;
        }
      } else {
        this.hide();
      }
    }
  };
  BasicIngameUIComponent.prototype.updateContent = function () {};
  BasicIngameUIComponent.prototype.updateMenuPosition = function () {
    var __s31local0 = this._target.uiBounds;
    var __s31local1 = this._target.uiPos;
    if (this.worldLayer && __s31local1) {
      var __s31local2 = this.worldLayer.localToGlobal(new __s0local1(__s31local1.x + __s31local0.x + __s31local0.width / 2, __s31local1.y + __s31local0.y + __s31local0.height / 2));
      this.disp.x = __s31local2.x;
      this.disp.y = __s31local2.y;
    } else {
      this.hide();
    }
  };
  Object.defineProperty(BasicIngameUIComponent.prototype, "target", {
    get: function () {
      return this._target;
    },
    set: function (__s37param0) {
      if (this._target != __s37param0) {
        this._target = __s37param0;
        this.initComponent();
        this.updateMenuPosition();
        this.show();
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicIngameUIComponent.prototype.destroy = function () {
    this._target = null;
    __s1param0.prototype.destroy.call(this);
  };
  Object.defineProperty(BasicIngameUIComponent.prototype, "worldLayer", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicIngameUIComponent.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicIngameUIComponent.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicIngameUIComponent.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_3.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return BasicIngameUIComponent;
}(__dep_exact_9e901e8e2483a22f.AnimatedFlashUIComponent);
exports.BasicIngameUIComponent = __s0local2;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
