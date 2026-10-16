Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleDialogEvent = require("gge-module:export_CastleDialogEvent");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastlePanel = require("gge-module:export_CastlePanel");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Event;
var __s0local2 = createjs.MouseEvent;
var __s0local3 = createjs.TimerEvent;
var __s0local4 = function (__s1param0) {
  function CastleExternalPanel(__s3param0, __s3param1 = null) {
    var __s3local0 = this;
    __s3local0._panelClassName = "";
    __s3local0.applyPropertiesCalled = false;
    __s3local0._collectableRenderList = [];
    __s3local0._loaded = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, CastleExternalPanel.createExternalClipInConstructor(__s3param0, __s3param1)) || this)._panelClassName = __s3param0;
    __s3local0.externalClip = __s3local0.disp;
    if (__s3local0.externalClip) {
      __s3local0.initExternalClipInConstructor();
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleExternalPanel, __s1param0);
  CastleExternalPanel.createExternalClipInConstructor = function (__s6param0, __s6param1 = null) {
    if (__s6param1 == null) {
      __s6param1 = __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s6param0);
    }
    return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s6param0, __s6param1, null, 0, false);
  };
  CastleExternalPanel.prototype.initExternalClipInConstructor = function () {
    this.initExternalClip();
  };
  CastleExternalPanel.prototype.initExternalClip = function () {
    if (this.externalClip.isLoaded) {
      this.displayObjectClipIsLoaded(this.externalClip);
    } else {
      this.externalClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.displayObjectClipIsLoaded), CastleExternalPanel.CLIP_LOADED_PRIORITY_LOADED);
    }
  };
  CastleExternalPanel.prototype.show = function () {
    if (this.externalClip.isLoaded) {
      this.showLoadedAndNotify();
    } else {
      this.externalClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.showLoadedAndNotify), CastleExternalPanel.CLIP_LOADED_PRIORITY_SHOWN);
    }
  };
  CastleExternalPanel.prototype.init = function () {
    if (this.externalClip.isLoaded) {
      this.initLoaded();
    } else {
      this.externalClip.clipLoaded.addOnce(this.bindFunction(this.initLoaded));
    }
  };
  CastleExternalPanel.prototype.hide = function () {
    if (this.externalClip.isLoaded) {
      this.hideLoaded();
    } else {
      this.externalClip.clipLoaded.addOnce(this.bindFunction(this.hideLoaded));
    }
  };
  CastleExternalPanel.prototype.initBasicButtons = function (__s27param0) {
    this.buttonArray = [];
    for (var __s27local0 = 0; __s27local0 < __s27param0.length; __s27local0++) {
      if (__s27param0[__s27local0]) {
        __s27param0[__s27local0].basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(__s27param0[__s27local0], true);
        this.buttonArray.push(__s27param0[__s27local0].basicButton);
      }
    }
  };
  CastleExternalPanel.prototype.onBtnDelayOver = function (__s32param0, __s32param1) {
    return function (__s34param0) {
      __s32param0.stop();
      __s32param0.removeEventListener(__s0local3.TIMER, this.bindFunction(this.onBtnDelayOver));
      __s32param0 = null;
      __s32param1.basicButton.enableButton = true;
    };
  };
  CastleExternalPanel.prototype.hideLoaded = function (__s36param0 = null) {
    if (this.buttonArray != null) {
      for (var __s36local0 = 0, __s36local1 = this.buttonArray; __s36local0 < __s36local1.length; __s36local0++) {
        var __s36local2 = __s36local1[__s36local0];
        if (__s36local2 !== undefined) {
          __s36local2.resetHoverState();
          __s36local2.removeMouseEventListener();
          __s36local2.enableButton = true;
        }
      }
    }
    this.destroyCollectableRenderList();
    __s1param0.prototype.hide.call(this);
    this.layoutManager.hideDialog(__dep_exact_81dacdf05bd32292_1.getDefinitionByName(__dep_exact_81dacdf05bd32292_3.getQualifiedClassName(this)));
    this.applyPropertiesCalled = false;
    this.controller.dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.HIDE_EXTERNAL_DIALOG, [this.constructor]));
  };
  CastleExternalPanel.prototype.initLoaded = function (__s42param0 = null) {
    __s1param0.prototype.init.call(this);
  };
  CastleExternalPanel.prototype.showLoadedAndNotify = function (__s44param0 = null) {
    this.showLoaded(__s44param0);
    this.controller.dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_EXTERNAL_DIALOG, [this.constructor]));
  };
  CastleExternalPanel.prototype.showLoaded = function (__s46param0 = null) {
    this.updatePosition();
    this.applyProperties();
    __s1param0.prototype.show.call(this);
    if (this.buttonArray != null) {
      for (var __s46local0 = 0, __s46local1 = this.buttonArray; __s46local0 < __s46local1.length; __s46local0++) {
        var __s46local2 = __s46local1[__s46local0];
        if (__s46local2 !== undefined) {
          __s46local2.addMouseEventListener();
        }
      }
    }
    this.disp.mouseChildren = true;
    this.updatePosition();
    if (!this.isInitialized) {
      this.isInitialized = true;
      this.init();
    }
    this.panelDisp.removeEventListener(__s0local1.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
    this.panelDisp.addEventListener(__s0local2.CLICK, this.bindFunction(this.onClick));
    this.panelDisp.addEventListener(__s0local2.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this.panelDisp.addEventListener(__s0local2.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.panelDisp.addEventListener(__s0local2.ROLL_OVER, this.bindFunction(this.onRollOver));
    this.panelDisp.addEventListener(__s0local2.ROLL_OUT, this.bindFunction(this.onRollOut));
    this.panelDisp.addEventListener(__s0local1.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStage));
    this.panelDisp.addEventListener(__s0local2.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.panelDisp.addEventListener(__s0local2.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    if (this.panelDisp.stage) {
      this.panelDisp.stage.addEventListener(__dep_exact_81dacdf05bd32292_2.KeyboardEvent.KEY_UP, this.onKeyUp);
      this.panelDisp.stage.addEventListener(__s0local1.RESIZE, this.onResize);
    }
  };
  CastleExternalPanel.prototype.displayObjectClipIsLoaded = function (__s54param0) {
    this._loaded = true;
  };
  CastleExternalPanel.prototype.onAddedToStage = function (__s56param0) {};
  Object.defineProperty(CastleExternalPanel.prototype, "assetFileURL", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.assetClassName);
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalPanel.prototype.onMouseOver = function (__s60param0) {
    __s1param0.prototype.onMouseOver.call(this, __s60param0);
    this.controller.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_CastleDialogEvent.CastleDialogEvent, __dep_export_CastleDialogEvent.CastleDialogEvent.MOUSE_ON_DIALOG));
  };
  CastleExternalPanel.prototype.onMouseOut = function (__s62param0) {
    __s1param0.prototype.onMouseOut.call(this, __s62param0);
  };
  CastleExternalPanel.prototype.onCursorOver = function (__s64param0) {
    if (__s64param0.target instanceof __s0local0 && __s64param0.target.basicButton != null) {
      if (__s64param0.target.basicButton.enabled) {
        this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f_1.BasicCustomCursor.CURSOR_CLICK);
      }
    } else if (CastleExternalPanel.ACTLIKEBUTTON_LABEL in __s64param0.target && __s64param0.target.actLikeButton) {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f_1.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleExternalPanel.prototype.onCursorOut = function (__s69param0) {
    this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f_1.BasicCustomCursor.CURSOR_ARROW);
  };
  Object.defineProperty(CastleExternalPanel.prototype, "env", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_2.EnvGlobalsHandler.globals;
    },
    set: function (__s73param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePanel.CastlePanel.prototype, "env").set.call(this, __s73param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalPanel, "dialogHandler", {
    get: function () {
      return __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalPanel.prototype, "panelDisp", {
    get: function () {
      return this.externalClip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalPanel.prototype.destroy = function () {
    this.destroyCollectableRenderList();
    __s1param0.prototype.destroy.call(this);
    if (this.panelDisp) {
      this.panelDisp.removeEventListener(__s0local2.CLICK, this.bindFunction(this.onClick));
      this.panelDisp.removeEventListener(__s0local2.MOUSE_UP, this.bindFunction(this.onMouseUp));
      this.panelDisp.removeEventListener(__s0local2.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.panelDisp.removeEventListener(__s0local2.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.panelDisp.removeEventListener(__s0local2.ROLL_OUT, this.bindFunction(this.onRollOut));
      this.panelDisp.removeEventListener(__s0local1.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStage));
    }
    if (this.panelDisp) {
      this.panelDisp.removeEventListener(__s0local2.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this.panelDisp.removeEventListener(__s0local2.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    }
  };
  CastleExternalPanel.prototype.getButtonByDisplayObjectInstance = function (__s83param0) {
    for (var __s83local0 = 0; __s83local0 < this.buttonArray.length; __s83local0++) {
      if (this.buttonArray[__s83local0].disp == __s83param0) {
        return this.buttonArray[__s83local0];
      }
    }
    return null;
  };
  CastleExternalPanel.prototype.destroyCollectableRenderList = function () {
    this.destroyRenderList(this._collectableRenderList);
  };
  CastleExternalPanel.prototype.destroyRenderList = function (__s90param0) {
    if (__s90param0) {
      for (var __s90local0 = 0; __s90local0 < __s90param0.length; ++__s90local0) {
        __s90param0[__s90local0].destroy();
      }
      __s90param0.length = 0;
    }
  };
  Object.defineProperty(CastleExternalPanel.prototype, "assetClassName", {
    get: function () {
      return this._panelClassName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalPanel.prototype, "collectableRenderList", {
    get: function () {
      return this._collectableRenderList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalPanel.prototype, "loaded", {
    get: function () {
      return this._loaded;
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalPanel.prototype.onRemovedFromStage = function (__s101param0) {};
  CastleExternalPanel.ACTLIKEBUTTON_LABEL = "actLikeButton";
  CastleExternalPanel.CLIP_LOADED_PRIORITY_LOADED = 3;
  CastleExternalPanel.CLIP_LOADED_PRIORITY_SHOWN = 2;
  return CastleExternalPanel;
}(__dep_export_CastlePanel.CastlePanel);
exports.CastleExternalPanel = __s0local4;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local4, "ICollectableRendererList");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
