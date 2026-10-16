Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_6 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_7 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_4 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_5 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_6 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_7 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_8 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleDialogEvent = require("gge-module:export_CastleDialogEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleNativeCustomCursor = require("gge-module:export_CastleNativeCustomCursor");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastleExternalPreloaderDialogProperties = require("gge-module:export_CastleExternalPreloaderDialogProperties");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Container;
var __s0local2 = createjs.Event;
var __s0local3 = createjs.MouseEvent;
var __s0local4 = createjs.TimerEvent;
var __s0local5 = function (__s1param0) {
  function CastleExternalDialog(__s3param0, __s3param1 = null, __s3param2 = null) {
    var __s3local0 = this;
    __s3local0._isLocked = false;
    __s3local0.isWaitingForServerMessage = false;
    __s3local0._dialogClassName = "";
    __s3local0.applyPropertiesCalled = false;
    __s3local0._collectableRenderList = [];
    __s3local0._loaded = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, CastleExternalDialog.createExternalClipInConstructor(__s3param0, __s3param1, __s3param2)) || this)._dialogClassName = __s3param0;
    __s3local0.externalClip = __s3local0.disp;
    if (__s3local0.externalClip) {
      __s3local0.initExternalClipInConstructor();
    }
    __s3local0._textDialogName = new __dep_exact_81dacdf05bd32292_2.TextField();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleExternalDialog, __s1param0);
  CastleExternalDialog.prototype.insertDialogInfo = function () {
    if (CastleExternalDialog.showDialogName) {
      var __s6local0 = false;
      if (this.bg && this.bg.parent && this.disp == this.bg.parent) {
        this.disp.removeChild(this.bg);
        __s6local0 = true;
      }
      if (this._textDialogName.parent) {
        this._textDialogName.parent.removeChild(this._textDialogName);
      }
      var __s6local1 = this.disp.getBounds();
      this._textDialogName.text = this._dialogClassName + " - Asset: " + __dep_exact_9e901e8e2483a22f_7.PathProvider.instance.itemVersions.getPath(this._dialogClassName);
      this._textDialogName.textColor = "#00FF00";
      this._textDialogName.autoSize = __dep_exact_81dacdf05bd32292_3.TextFieldAutoSize.LEFT;
      this._textDialogName.x = __s6local1.x;
      this._textDialogName.y = __s6local1.y - 35;
      this._textDialogName.background = true;
      this._textDialogName.backgroundColor = "#000000";
      this.disp.addChild(this._textDialogName);
      if (__s6local0) {
        this.disp.addChildAt(this.bg, 0);
      }
    }
  };
  CastleExternalDialog.createExternalClipInConstructor = function (__s12param0, __s12param1 = null, __s12param2 = null) {
    if (__s12param2 == null) {
      if (__s12param1 == null) {
        __s12param1 = __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s12param0);
      }
      return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s12param0, __s12param1, null, 0, false);
    } else {
      return __s12param2;
    }
  };
  CastleExternalDialog.prototype.initExternalClipInConstructor = function () {
    this.initExternalClip();
  };
  CastleExternalDialog.prototype.initExternalClip = function () {
    if (this.externalClip.isLoaded) {
      this.displayObjectClipIsLoaded(this.externalClip);
    } else {
      if (this.hasPreloaderDialog) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithType(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog, new __dep_export_CastleExternalPreloaderDialogProperties.CastleExternalPreloaderDialogProperties(this.bindFunction(this.hideOnLoading)), false, __dep_export_CastleDialogConsts.CastleDialogConsts.PRIORITY_TOP, 0, __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
      }
      if (this.externalClip.clipLoaded) {
        this.externalClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.displayObjectClipIsLoaded), CastleExternalDialog.CLIP_LOADED_PRIORITY_LOADED);
      }
    }
  };
  CastleExternalDialog.prototype.onKeyUp = function (__s25param0) {
    __s1param0.prototype.onKeyUp.call(this, __s25param0);
    if (__dep_exact_9e901e8e2483a22f_4.EnvGlobalsHandler.globals.isTest && __s25param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ESCAPE) {
      this.hide();
    }
  };
  CastleExternalDialog.prototype.onBGAddedToStage = function (__s28param0) {
    this.bg.removeEventListener(__s0local2.ADDED_TO_STAGE, this.bindFunction(this.onBGAddedToStage));
    if (this.bg.width != 0) {
      this.bg.width = this.bg.stage.stageWidth + 10;
      this.bg.height = this.bg.stage.stageHeight + 10;
    }
    this.bg.x = -(this.disp.x + 5);
    this.bg.y = -(this.disp.y + 5);
    this.bg.doCache();
  };
  CastleExternalDialog.prototype.updateBackground = function () {
    if (this.bg && this.bg.stage) {
      this.bg.graphics.clear();
      this.bg.graphics.beginFill(0, 1);
      this.bg.graphics.drawRect(0, 0, this.disp.stage.stageWidth / this.disp.scaleX + 10, this.disp.stage.stageHeight / this.disp.scaleY + 10);
      this.bg.graphics.endFill();
      this.bg.x = -this.disp.x / this.disp.scaleX - 5;
      this.bg.y = -this.disp.y / this.disp.scaleY - 5;
      this.bg.updateBounds();
      try {
        this.bg.doCache();
      } catch (__s35local0) {}
      if (this.dialogDisp.bg_cached && !this.dialogDisp.bg_cached.cacheCanvas) {
        try {
          this.dialogDisp.bg_cached.doCache();
        } catch (__s39local0) {}
      }
    }
  };
  CastleExternalDialog.prototype.hideOnLoading = function () {
    this.externalClip.clipLoaded.removeAll();
    this.hide();
  };
  CastleExternalDialog.prototype.show = function () {
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile && this.layoutManager.worldmapScreen && this.layoutManager.worldmapScreen.renderer) {
      this.layoutManager.worldmapScreen.renderer.renderNavForMobile(true);
    }
    if (this.externalClip.isLoaded) {
      this.showLoadedAndNotify();
    } else {
      this.externalClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.showLoadedAndNotify), CastleExternalDialog.CLIP_LOADED_PRIORITY_SHOWN);
    }
  };
  CastleExternalDialog.prototype.applyProperties = function () {
    if (!this.applyPropertiesCalled) {
      this.applyPropertiesCalled = true;
      if (this.externalClip.isLoaded) {
        this.applyPropertiesLoaded();
      } else {
        this.externalClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.applyPropertiesLoaded), CastleExternalDialog.CLIP_LOADED_PRIORITY_APPLIEDPROPERTIE);
      }
    }
  };
  CastleExternalDialog.prototype.init = function () {
    if (this.externalClip.isLoaded) {
      this.initLoaded();
    } else {
      this.externalClip.clipLoaded.addOnce(this.bindFunction(this.initLoaded));
    }
  };
  CastleExternalDialog.prototype.hide = function () {
    if (this.externalClip) {
      if (this.externalClip.isLoaded) {
        this.hideLoaded();
      } else {
        this.externalClip.clipLoaded.addOnce(this.bindFunction(this.hideLoaded));
      }
    }
  };
  CastleExternalDialog.prototype.initBasicButtons = function (__s62param0) {
    this.buttonArray = [];
    for (var __s62local0 = 0; __s62local0 < __s62param0.length; __s62local0++) {
      if (__s62param0[__s62local0]) {
        __s62param0[__s62local0].basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(__s62param0[__s62local0], true);
        this.buttonArray.push(__s62param0[__s62local0].basicButton);
      }
    }
  };
  CastleExternalDialog.prototype.initDelayedButtons = function (__s67param0) {
    if (__s67param0) {
      this.delayTimerArray = [];
      this.delayButtonArray = __s67param0;
      for (var __s67local0 = 0; __s67local0 < __s67param0.length; __s67local0++) {
        var __s67local1 = new __dep_exact_81dacdf05bd32292_4.Timer(500, 1);
        __s67param0[__s67local0].basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(__s67param0[__s67local0], true);
        __s67param0[__s67local0].basicButton.enableButton = false;
        this.delayTimerArray.push(__s67local1);
        this.buttonArray.push(__s67param0[__s67local0].basicButton);
        __s67local1.addEventListener(__s0local4.TIMER, this.bindFunction(this.onBtnDelayOver(__s67local1, __s67param0[__s67local0])));
        __s67local1.start();
      }
    }
  };
  CastleExternalDialog.prototype.onBtnDelayOver = function (__s72param0, __s72param1) {
    return function (__s74param0) {
      __s72param0.stop();
      __s72param0.removeEventListener(__s0local4.TIMER, this.bindFunction(this.onBtnDelayOver));
      __s72param0 = null;
      __s72param1.basicButton.enableButton = true;
    };
  };
  CastleExternalDialog.prototype.hideLoaded = function (__s76param0 = null) {
    if (this.buttonArray != null) {
      for (var __s76local0 = 0, __s76local1 = this.buttonArray; __s76local0 < __s76local1.length; __s76local0++) {
        var __s76local2 = __s76local1[__s76local0];
        if (__s76local2 !== undefined) {
          __s76local2.resetHoverState();
          __s76local2.removeMouseEventListener();
          __s76local2.enableButton = true;
        }
      }
    }
    if (this.delayTimerArray != null) {
      for (var __s76local3 = 0, __s76local4 = this.delayTimerArray; __s76local3 < __s76local4.length; __s76local3++) {
        var __s76local5 = __s76local4[__s76local3];
        if (__s76local5 !== undefined) {
          __s76local5.stop();
          __s76local5.removeEventListener(__s0local4.TIMER, this.bindFunction(this.onBtnDelayOver));
          __s76local5 = null;
        }
      }
    }
    this.clearTimedFunctions();
    this.destroyCollectableRenderList();
    this.removeDispEventListeners();
    __s1param0.prototype.hide.call(this);
    this.layoutManager.hideDialog(__dep_exact_81dacdf05bd32292_6.getDefinitionByName(__dep_exact_81dacdf05bd32292_7.getQualifiedClassName(this)));
    this.applyPropertiesCalled = false;
    this.controller.dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.HIDE_EXTERNAL_DIALOG, [this.constructor]));
    var __s76local6 = this.layoutManager.findLayer(this.disp);
    for (var __s76local7 = this.disp; __s76local7 && __s76local7.parent;) {
      if (__s76local7.parent == __s76local6) {
        __s76local6.removeChild(__s76local7);
        __s76local7 = null;
      } else {
        __s76local7 = __s76local7.parent;
      }
    }
    this.layoutManager.restrictToHighestDialog();
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile) {
      __dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips();
    }
  };
  CastleExternalDialog.prototype.clearTimedFunctions = function () {
    if (this._timedFunctions && this._timedFunctions.size > 0 && this._timedFunctions != null) {
      for (var __s91local0 = 0, __s91local1 = Array.from(this._timedFunctions.keys()); __s91local0 < __s91local1.length; __s91local0++) {
        var __s91local2 = __s91local1[__s91local0];
        if (__s91local2 !== undefined) {
          if (__dep_exact_81dacdf05bd32292_8.instanceOfClass(__s91local2, "Timer")) {
            __s91local2.removeEventListener(__s0local4.TIMER, this.bindFunction(this.onTimedFunction));
            __s91local2.stop();
          }
          this._timedFunctions.delete(__s91local2);
        }
      }
    }
  };
  CastleExternalDialog.prototype.initLoaded = function (__s98param0 = null) {
    this.showBackground = true;
    __s1param0.prototype.init.call(this);
  };
  CastleExternalDialog.prototype.applyPropertiesLoaded = function (__s100param0 = null) {};
  CastleExternalDialog.prototype.showLoadedAndNotify = function (__s102param0 = null) {
    this.showLoaded(__s102param0);
    this.controller.dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_EXTERNAL_DIALOG, [this.constructor]));
  };
  CastleExternalDialog.prototype.showLoaded = function (__s104param0) {
    var __s104local0 = this;
    if (__s104param0 === undefined) {
      __s104param0 = null;
    }
    if (this.hasPreloaderDialog) {
      this.layoutManager.hideDialog(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog);
    }
    this.disp = this.dialogDisp;
    this.updatePosition();
    this.applyProperties();
    if (this.disp instanceof __s0local1) {
      if (this.disp.numChildren > 0) {
        __s1param0.prototype.show.call(this);
      }
    } else {
      console.warn(" is Invalid --> maybe Empty");
    }
    this.setToolTips();
    this.setCopyTexts();
    this.initDelayedButtons(this.delayButtonArray);
    if (this.buttonArray != null) {
      for (var __s104local1 = 0, __s104local2 = this.buttonArray; __s104local1 < __s104local2.length; __s104local1++) {
        var __s104local3 = __s104local2[__s104local1];
        if (__s104local3 !== undefined) {
          __s104local3.addMouseEventListener();
        }
      }
    }
    if (this.disp instanceof __s0local0 && this.bg) {
      var __s104local4 = this.disp.addEventListener("tick", function (__s116param0) {
        if (__s104local0.disp.paused) {
          __s104local0.disp.removeEventListener("tick", __s104local4);
        }
        __s104local0.disp.addChildAt(__s104local0.bg, 0);
      });
    }
    this.insertDialogInfo();
    this.layoutManager.restrictToHighestDialog();
    this.layoutManager.hideAllRingMenus();
  };
  CastleExternalDialog.prototype.setToolTips = function () {};
  CastleExternalDialog.prototype.setCopyTexts = function () {};
  CastleExternalDialog.prototype.displayObjectClipIsLoaded = function (__s123param0) {
    if (this.bg) {
      this.bg.visible = false;
    }
    if (this.dialogDisp) {
      this.dispBounds = this.dialogDisp.getBounds();
    }
    if (this.bg) {
      this.bg.visible = true;
    }
    this._loaded = true;
    this.disp = this.dialogDisp;
  };
  CastleExternalDialog.prototype.onAddedToStage = function (__s128param0) {};
  Object.defineProperty(CastleExternalDialog.prototype, "disp", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f_5.FlashUIComponent.prototype, "disp").get.call(this);
    },
    set: function (__s132param0) {
      this.destroy();
      Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f_5.FlashUIComponent.prototype, "disp").set.call(this, this.dialogDisp);
      this.updatePosition();
      if (!this.isInitialized) {
        this.isInitialized = true;
        this.init();
      }
      this.disp.removeEventListener(__s0local2.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
      this.disp.addEventListener(__s0local3.CLICK, this.bindFunction(this.onClick));
      this.disp.addEventListener(__s0local3.MOUSE_UP, this.bindFunction(this.onMouseUp));
      this.disp.addEventListener(__s0local3.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.addEventListener(__s0local3.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.disp.addEventListener(__s0local3.ROLL_OUT, this.bindFunction(this.onRollOut));
      this.disp.addEventListener(__s0local2.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStage));
      this.disp.addEventListener(__s0local3.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this.disp.addEventListener(__s0local3.MOUSE_OUT, this.bindFunction(this.onMouseOut));
      window.addEventListener(__s0local2.RESIZE, this.bindFunction(this.onResize));
      if (this.disp.stage) {
        this.disp.stage.addEventListener(__dep_exact_81dacdf05bd32292_1.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalDialog.prototype.removeDispEventListeners = function () {
    if (this.disp) {
      this.disp.removeEventListener(__s0local3.CLICK, this.bindFunction(this.onClick));
      this.disp.removeEventListener(__s0local3.MOUSE_UP, this.bindFunction(this.onMouseUp));
      this.disp.removeEventListener(__s0local3.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.removeEventListener(__s0local3.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.disp.removeEventListener(__s0local3.ROLL_OUT, this.bindFunction(this.onRollOut));
      this.disp.removeEventListener(__s0local2.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStage));
      this.disp.removeEventListener(__s0local3.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this.disp.removeEventListener(__s0local3.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    }
    window.removeEventListener(__s0local2.RESIZE, this.bindFunction(this.onResize));
    if (this.disp.stage) {
      this.disp.stage.removeEventListener(__dep_exact_81dacdf05bd32292_1.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
    }
  };
  Object.defineProperty(CastleExternalDialog.prototype, "assetFileURL", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_2.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.assetClassName);
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalDialog.prototype.lockDialog = function () {
    this._isLocked = true;
  };
  CastleExternalDialog.prototype.unLockDialog = function () {
    this._isLocked = false;
  };
  Object.defineProperty(CastleExternalDialog.prototype, "isLocked", {
    get: function () {
      return this._isLocked;
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalDialog.prototype.onResize = function (__s148param0) {
    __s1param0.prototype.onResize.call(this, __s148param0);
    this.updatePosition();
    this.updateBackground();
  };
  CastleExternalDialog.prototype.onMouseOver = function (__s150param0) {
    __s1param0.prototype.onMouseOver.call(this, __s150param0);
    this.controller.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_CastleDialogEvent.CastleDialogEvent, __dep_export_CastleDialogEvent.CastleDialogEvent.MOUSE_ON_DIALOG));
    var __s150local0 = __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.getFirstMovieClipParent(__s150param0.target);
    if (__s150param0.target instanceof __dep_exact_81dacdf05bd32292_2.TextField && __s150param0.target.selectable) {
      this.layoutManager.customCursor.setCursorType(__dep_export_CastleNativeCustomCursor.CastleNativeCustomCursor.CURSOR_INPUT);
    } else if (__s150local0 && __dep_exact_9e901e8e2483a22f_3.BasicToolTipManager.TOOLTIP_LABEL in __s150local0 && __s150local0.toolTipText) {
      this.layoutManager.tooltipManager.show(__s150local0.toolTipText, __s150local0);
    }
  };
  CastleExternalDialog.prototype.onMouseOut = function (__s154param0) {
    __s1param0.prototype.onMouseOut.call(this, __s154param0);
    __dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips();
    if (__s154param0 && __s154param0.target instanceof __dep_exact_81dacdf05bd32292_2.TextField && __s154param0.target.selectable) {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
    }
  };
  CastleExternalDialog.prototype.onClick = function (__s157param0) {
    __s1param0.prototype.onClick.call(this, __s157param0);
    var __s157local0 = __dep_exact_81dacdf05bd32292.currentBrowserInfo.getTouchEvent(__s157param0);
    if (__s157local0 && !__s157local0.isLongPressed) {
      __dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips();
    }
  };
  CastleExternalDialog.prototype.onCursorOver = function (__s160param0) {
    if (__s160param0.target instanceof __s0local0 && __s160param0.target.basicButton != null) {
      if (__s160param0.target.basicButton.enabled) {
        this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
      }
    } else if (__s160param0.target.actLikeButton || __s160param0.target.parent && __s160param0.target.parent.actLikeButton) {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleExternalDialog.prototype.onCursorOut = function (__s165param0) {
    this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
  };
  Object.defineProperty(CastleExternalDialog.prototype, "hasPreloaderDialog", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalDialog.prototype, "env", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_4.EnvGlobalsHandler.globals;
    },
    set: function (__s171param0) {
      Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f_1.BasicDialog.prototype, "env").set.call(this, __s171param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalDialog, "dialogHandler", {
    get: function () {
      return __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalDialog.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalDialog.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalDialog.prototype, "dialogDisp", {
    get: function () {
      return this.externalClip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalDialog.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_6.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalDialog.prototype.destroy = function () {
    this.destroyCollectableRenderList();
    __s1param0.prototype.destroy.call(this);
    this.removeDispEventListeners();
  };
  CastleExternalDialog.prototype.getButtonByDisplayObjectInstance = function (__s185param0) {
    for (var __s185local0 = 0; __s185local0 < this.buttonArray.length; __s185local0++) {
      if (this.buttonArray[__s185local0].disp == __s185param0) {
        return this.buttonArray[__s185local0];
      }
    }
    return null;
  };
  CastleExternalDialog.prototype.disableButtonsForSeconds = function (__s190param0, __s190param1 = __dep_export_ClientConstTime.ClientConstTime.DEFAULT_ENABLE_BUTTON_WAIT_IN_SECONDS) {
    var __s190local0 = [];
    for (var __s190local1 = 0; __s190local1 < __s190param0.length; __s190local1++) {
      if (__dep_exact_81dacdf05bd32292_8.instanceOfClass(__s190param0[__s190local1], "BasicButton")) {
        __s190local0.push(__s190param0[__s190local1]);
      } else if (__s190param0[__s190local1] instanceof __s0local0) {
        __s190local0.push(this.getButtonByDisplayObjectInstance(__s190param0[__s190local1]));
      }
    }
    this._timedFunctions ||= new Map();
    this.disableButtons(__s190local0);
    var __s190local2 = new __dep_exact_81dacdf05bd32292_4.Timer(__s190param1 * 1000, 1);
    __s190local2.addEventListener(__s0local4.TIMER, this.bindFunction(this.onTimedFunction));
    this._timedFunctions.set(__s190local2, {
      function: this.enableButtons,
      params: [__s190local0]
    });
    __s190local2.start();
  };
  CastleExternalDialog.prototype.disableButtons = function (__s196param0) {
    if (__s196param0 != null) {
      for (var __s196local0 = 0, __s196local1 = __s196param0; __s196local0 < __s196local1.length; __s196local0++) {
        var __s196local2 = __s196local1[__s196local0];
        if (__s196local2 !== undefined) {
          __s196local2.enableButton = false;
        }
      }
    }
  };
  CastleExternalDialog.prototype.enableButtons = function (__s202param0) {
    if (__s202param0 != null) {
      for (var __s202local0 = 0, __s202local1 = __s202param0; __s202local0 < __s202local1.length; __s202local0++) {
        var __s202local2 = __s202local1[__s202local0];
        if (__s202local2 !== undefined) {
          __s202local2.enableButton = true;
        }
      }
    }
  };
  CastleExternalDialog.prototype.onTimedFunction = function (__s208param0) {
    var __s208local0 = __s208param0.target;
    __s208local0.stop();
    __s208local0.removeEventListener(__s0local4.TIMER, this.bindFunction(this.onTimedFunction));
    if (this._timedFunctions && this._timedFunctions.get(__s208local0)) {
      this._timedFunctions.get(__s208local0).function.apply(null, this._timedFunctions.get(__s208local0).params);
      this._timedFunctions.delete(__s208local0);
    }
  };
  CastleExternalDialog.prototype.destroyCollectableRenderList = function () {
    this.destroyRenderList(this._collectableRenderList);
  };
  CastleExternalDialog.prototype.destroyRenderList = function (__s213param0) {
    if (__s213param0) {
      for (var __s213local0 = 0; __s213local0 < __s213param0.length; ++__s213local0) {
        __s213param0[__s213local0].destroy();
      }
      __s213param0.length = 0;
    }
  };
  Object.defineProperty(CastleExternalDialog.prototype, "dialogClassName", {
    get: function () {
      return this._dialogClassName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalDialog.prototype, "assetClassName", {
    get: function () {
      return this._dialogClassName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalDialog.prototype, "collectableRenderList", {
    get: function () {
      return this._collectableRenderList;
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalDialog.prototype.isOutOfTutorial = function () {
    return !__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive;
  };
  CastleExternalDialog.prototype.unlockProperties = function () {
    this.applyPropertiesCalled = false;
  };
  Object.defineProperty(CastleExternalDialog.prototype, "loaded", {
    get: function () {
      return this._loaded;
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalDialog.prototype.onRemovedFromStage = function (__s230param0) {};
  CastleExternalDialog.prototype.setTickEnablement = function () {
    this.disp.tickEnabled = true;
  };
  Object.defineProperty(CastleExternalDialog.prototype, "castleEnv", {
    get: function () {
      return this.env;
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalDialog.ACTLIKEBUTTON_LABEL = "actLikeButton";
  CastleExternalDialog.showDialogName = false;
  CastleExternalDialog.CLIP_LOADED_PRIORITY_LOADED = 3;
  CastleExternalDialog.CLIP_LOADED_PRIORITY_SHOWN = 2;
  CastleExternalDialog.CLIP_LOADED_PRIORITY_APPLIEDPROPERTIE = 1;
  return CastleExternalDialog;
}(__dep_exact_9e901e8e2483a22f_1.BasicDialog);
exports.CastleExternalDialog = __s0local5;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_TooltipManagerFacade = require("gge-module:export_TooltipManagerFacade");
var __dep_export_CastleExternalPreloaderDialog = require("gge-module:export_CastleExternalPreloaderDialog");
__dep_exact_81dacdf05bd32292_5.classImplementsInterfaces(__s0local5, "ICollectableRendererList");
