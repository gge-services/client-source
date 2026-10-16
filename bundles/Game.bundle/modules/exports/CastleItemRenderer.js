Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleItemRenderer(__s3param0, __s3param1 = null) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._isEnabled = true;
    __s3local0._isShown = false;
    __s3local0.preConstructorBG(__s3param1);
    __s3local0._disp = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleItemRenderer, __s1param0);
  CastleItemRenderer.prototype.preConstructorBG = function (__s5param0) {};
  CastleItemRenderer.prototype.enableComponent = function (__s7param0) {
    this._isEnabled = __s7param0;
    if (this.disp) {
      if (this._isEnabled) {
        this.disp.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
      } else {
        this.disp.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_COLOR_MATRIX);
      }
    }
  };
  CastleItemRenderer.prototype.setVisibility = function (__s12param0) {
    if (this.disp) {
      this.disp.visible = __s12param0;
    }
  };
  CastleItemRenderer.prototype.onShow = function () {
    this._isShown = true;
    this.removeEventListener();
    this.addEventListener();
  };
  CastleItemRenderer.prototype.onHide = function () {
    this.removeEventListener();
    this._isShown = false;
  };
  CastleItemRenderer.prototype.addEventListener = function () {
    if (this.disp) {
      this.disp.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this.disp.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
      this.disp.addEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.disp.addEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onRollOut));
      this.disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
      this.disp.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
      if (__dep_export_CastleComponent.CastleComponent.layoutManager.uiStage) {
        __dep_export_CastleComponent.CastleComponent.layoutManager.uiStage.addEventListener(__dep_exact_81dacdf05bd32292.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
      }
    }
  };
  CastleItemRenderer.prototype.removeEventListener = function () {
    if (this.disp) {
      this.disp.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this.disp.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
      this.disp.removeEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.disp.removeEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onRollOut));
      this.disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
      this.disp.removeEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    }
    if (__dep_export_CastleComponent.CastleComponent.layoutManager.uiStage) {
      __dep_export_CastleComponent.CastleComponent.layoutManager.uiStage.removeEventListener(__dep_exact_81dacdf05bd32292.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
    }
  };
  CastleItemRenderer.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.removeEventListener();
  };
  Object.defineProperty(CastleItemRenderer.prototype, "isVisible", {
    get: function () {
      return !!this.disp && this.disp.visible;
    },
    enumerable: true,
    configurable: true
  });
  CastleItemRenderer.prototype.onMouseOver = function (__s31param0) {};
  CastleItemRenderer.prototype.onMouseOut = function (__s33param0) {};
  CastleItemRenderer.prototype.onRollOver = function (__s35param0) {};
  CastleItemRenderer.prototype.onRollOut = function (__s37param0) {};
  CastleItemRenderer.prototype.onClick = function (__s39param0) {};
  CastleItemRenderer.prototype.onMouseWheel = function (__s41param0) {};
  CastleItemRenderer.prototype.onKeyUp = function (__s43param0) {};
  Object.defineProperty(CastleItemRenderer.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    set: function (__s47param0) {
      this._disp = __s47param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleItemRenderer.prototype, "isEnabled", {
    get: function () {
      return this._isEnabled;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleItemRenderer.prototype, "isShown", {
    get: function () {
      return this._isShown;
    },
    enumerable: true,
    configurable: true
  });
  return CastleItemRenderer;
}(__dep_export_CastleComponent.CastleComponent);
exports.CastleItemRenderer = __s0local1;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
