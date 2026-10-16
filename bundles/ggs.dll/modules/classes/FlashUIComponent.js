Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __s0local0 = createjs.Container;
var __s0local1 = createjs.Event;
var __s0local2 = createjs.MouseEvent;
__dep_export_LoggerConfigurator.getLogger("CoreJS.FlashUIComponent");
var __s0local3 = function () {
  function FlashUIComponent(__s3param0) {
    this.isInitialized = false;
    this._hasStageListener = false;
    this._disp = __s3param0;
    this._disp.addEventListener(__s0local1.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
  }
  FlashUIComponent.prototype.onAddedToStage = function (__s5param0) {
    if (!this.isInitialized) {
      this.init();
      this.isInitialized = true;
    }
    this.applyProperties();
    this.updatePosition();
    this._disp.removeEventListener(__s0local1.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
    this._disp.addEventListener(__s0local2.CLICK, this.bindFunction(this.onClick));
    this._disp.addEventListener(__s0local2.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this._disp.addEventListener(__s0local2.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this._disp.addEventListener(__s0local2.ROLL_OVER, this.bindFunction(this.onRollOver));
    this._disp.addEventListener(__s0local2.ROLL_OUT, this.bindFunction(this.onRollOut));
    this._disp.addEventListener(__s0local1.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStage));
  };
  FlashUIComponent.prototype.findTextFields = function (__s8param0) {
    var __s8local0 = [];
    for (var __s8local1 = 0; __s8local1 < __s8param0.numChildren; __s8local1++) {
      var __s8local2 = __s8param0.getChildAt(__s8local1);
      if (__s8local2 instanceof __dep_export_CSSMouseCursor.TextField) {
        __s8local0.push(__s8local2);
      } else if (__s8local2 instanceof __s0local0) {
        var __s8local3 = this.findTextFields(__s8local2);
        __s8local0 = __s8local0.concat(__s8local3);
      }
    }
    return __s8local0;
  };
  FlashUIComponent.prototype.onRollOut = function (__s14param0) {};
  FlashUIComponent.prototype.onRollOver = function (__s16param0) {};
  FlashUIComponent.prototype.onClick = function (__s18param0) {};
  FlashUIComponent.prototype.onMouseUp = function (__s20param0) {};
  FlashUIComponent.prototype.onMouseDown = function (__s22param0) {};
  FlashUIComponent.prototype.onKeyUp = function (__s24param0) {};
  FlashUIComponent.prototype.onRemovedFromStage = function (__s26param0) {
    this.destroy();
  };
  FlashUIComponent.prototype.reset = function () {
    this.destroy();
    this.init();
    this.applyProperties();
  };
  FlashUIComponent.prototype.init = function () {};
  FlashUIComponent.prototype.setProperties = function (__s32param0) {
    this.properties = __s32param0;
    if (this.isInitialized) {
      this.applyProperties();
    }
  };
  FlashUIComponent.prototype.applyProperties = function () {};
  FlashUIComponent.prototype.onResize = function (__s37param0 = null) {
    if (!__dep_export_CSSMouseCursor.currentBrowserInfo.isMobile || !__dep_export_CSSMouseCursor.TextField.isMobileKeyboardShown) {
      this.updatePosition();
      var __s37local0 = this;
      setTimeout(function () {
        if (__s37local0.disp && __s37local0.isVisible()) {
          __s37local0.updatePosition();
        }
      }, 1);
    }
  };
  FlashUIComponent.prototype.show = function () {
    if (this._disp) {
      if (this._disp.stage && !this._hasStageListener) {
        this.disp.stage.addEventListener(__dep_export_CSSMouseCursor.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
        window.addEventListener("resize", this.bindFunction(this.onResize), false);
      }
      this._disp.visible = true;
      this.onResize(null);
      this._hasStageListener = true;
    }
  };
  FlashUIComponent.prototype.update = function () {};
  FlashUIComponent.prototype.hide = function () {
    if (this._disp) {
      if (this._disp.stage) {
        this._disp.stage.removeEventListener(__dep_export_CSSMouseCursor.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
      }
      this._disp.visible = false;
    }
    window.removeEventListener("resize", this.bindFunction(this.onResize), false);
    this._hasStageListener = false;
  };
  FlashUIComponent.prototype.isVisible = function () {
    return this._disp.visible;
  };
  FlashUIComponent.prototype.toggleVisibility = function () {
    if (this.isVisible()) {
      this.hide();
    } else {
      this.show();
    }
  };
  FlashUIComponent.prototype.updatePosition = function () {};
  Object.defineProperty(FlashUIComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    set: function (__s63param0) {
      this._disp = __s63param0;
    },
    enumerable: true,
    configurable: true
  });
  FlashUIComponent.prototype.destroy = function () {
    if (this._disp != null) {
      this._disp.removeEventListener(__s0local1.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStage));
      if (this._disp.hasEventListener(__s0local2.CLICK)) {
        this._disp.removeEventListener(__s0local2.CLICK, this.bindFunction(this.onClick));
      }
      this._disp.removeEventListener(__s0local2.MOUSE_UP, this.bindFunction(this.onMouseUp));
      this._disp.removeEventListener(__s0local2.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this._disp.removeEventListener(__s0local2.ROLL_OVER, this.bindFunction(this.onRollOver));
      this._disp.removeEventListener(__s0local2.ROLL_OUT, this.bindFunction(this.onRollOut));
      this.disp.removeEventListener(__dep_export_CSSMouseCursor.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
      window.removeEventListener("resize", this.bindFunction(this.onResize), false);
    }
  };
  FlashUIComponent.NAME = "FlashUIComponent";
  return FlashUIComponent;
}();
exports.FlashUIComponent = __s0local3;
