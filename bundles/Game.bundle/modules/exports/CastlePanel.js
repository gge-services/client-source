Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastlePanelEvent = require("gge-module:export_CastlePanelEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleNativeCustomCursor = require("gge-module:export_CastleNativeCustomCursor");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.MovieClip;
var __s0local2 = function (__s1param0) {
  function CastlePanel(__s3param0) {
    var __s3local0 = this;
    __s3local0.isWaitingForServerMessage = false;
    __s3local0._allowCaching = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePanel, __s1param0);
  CastlePanel.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.dispToCache.tickEnabled = false;
  };
  CastlePanel.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this.dispToCache);
  };
  Object.defineProperty(CastlePanel, "dialogHandler", {
    get: function () {
      return __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePanel.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastlePanel.prototype.onMouseOver = function (__s13param0) {
    if (this._allowCaching && this.dispToCache.cacheCanvas) {
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this.dispToCache);
    }
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastlePanelEvent.CastlePanelEvent(__dep_export_CastlePanelEvent.CastlePanelEvent.MOUSE_OVER_PANEL, this));
    __s1param0.prototype.onMouseOver.call(this, __s13param0);
    if (__dep_exact_9e901e8e2483a22f_2.BasicToolTipManager.TOOLTIP_LABEL in __s13param0.target && __s13param0.target[__dep_exact_9e901e8e2483a22f_2.BasicToolTipManager.TOOLTIP_LABEL] != null) {
      this.layoutManager.tooltipManager.show(__s13param0.target.toolTipText, __s13param0.target);
    }
    if (__s13param0.target instanceof __dep_exact_81dacdf05bd32292.TextField && __s13param0.target.selectable) {
      this.layoutManager.customCursor.setCursorType(__dep_export_CastleNativeCustomCursor.CastleNativeCustomCursor.CURSOR_INPUT);
    }
  };
  CastlePanel.prototype.onMouseOut = function (__s18param0) {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastlePanelEvent.CastlePanelEvent(__dep_export_CastlePanelEvent.CastlePanelEvent.MOUSE_OUT_PANEL, this));
    __s1param0.prototype.onMouseOut.call(this, __s18param0);
    this.layoutManager.tooltipManager.hide();
    if (__s18param0.target instanceof __dep_exact_81dacdf05bd32292.TextField && __s18param0.target.selectable) {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
    }
  };
  CastlePanel.prototype.onCursorOver = function (__s21param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s21param0.target, "CountryPickerButton") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s21param0.target, "BasicButton") || __s21param0.target instanceof __s0local1 && __s21param0.target.basicButton != null) {
      if (__s21param0.target.enabled) {
        this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
      }
    } else if (CastlePanel.ACTLIKEBUTTON_LABEL in __s21param0.target && __s21param0.target.actLikeButton) {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    } else {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
    }
  };
  CastlePanel.prototype.onCursorOut = function (__s27param0) {
    this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
  };
  Object.defineProperty(CastlePanel.prototype, "env", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals;
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f_1.BasicPanel.prototype, "env").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlePanel.prototype.onClick = function (__s33param0) {};
  Object.defineProperty(CastlePanel.prototype, "allowCaching", {
    get: function () {
      return this._allowCaching;
    },
    set: function (__s37param0) {
      this._allowCaching = __s37param0;
      if (this._allowCaching && !this.dispToCache.cacheCanvas) {
        try {
          this.dispToCache.doCache();
        } catch (__s41local0) {}
      } else if (!this._allowCaching && this.dispToCache.cacheCanvas) {
        __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this.dispToCache);
      } else {
        this.updateCache();
      }
    },
    enumerable: true,
    configurable: true
  });
  CastlePanel.prototype.onRollOut = function (__s45param0) {
    __s1param0.prototype.onRollOut.call(this, __s45param0);
    if (this._allowCaching) {
      try {
        this.dispToCache.doCache();
      } catch (__s49local0) {}
    }
  };
  CastlePanel.prototype.onRollOver = function (__s51param0) {
    __s1param0.prototype.onRollOver.call(this, __s51param0);
    if (this._allowCaching && this.dispToCache.cacheCanvas) {
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this.dispToCache);
    }
  };
  CastlePanel.prototype.updateCache = function () {
    if (this.dispToCache.cacheCanvas) {
      try {
        this.dispToCache.updateCache();
      } catch (__s58local0) {}
    }
  };
  Object.defineProperty(CastlePanel.prototype, "dispToCache", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePanel.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePanel.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_4.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePanel.prototype, "castleEnv", {
    get: function () {
      return this.env;
    },
    enumerable: true,
    configurable: true
  });
  CastlePanel.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.disp.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  CastlePanel.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this.disp.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  CastlePanel.prototype.removeEventListenerOnDestroy = function () {
    __s1param0.prototype.removeEventListenerOnDestroy.call(this);
    this.disp.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  CastlePanel.ACTLIKEBUTTON_LABEL = "actLikeButton";
  return CastlePanel;
}(__dep_exact_9e901e8e2483a22f_1.BasicPanel);
exports.CastlePanel = __s0local2;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
