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
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_4 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_5 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_6 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_EventInstanceMapper = require("gge-module:export_EventInstanceMapper");
var __dep_export_CastleDialogEvent = require("gge-module:export_CastleDialogEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleNativeCustomCursor = require("gge-module:export_CastleNativeCustomCursor");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Container;
var __s0local2 = createjs.Event;
var __s0local3 = createjs.MouseEvent;
var __s0local4 = createjs.TimerEvent;
var __s0local5 = function (__s1param0) {
  function CastleDialog(__s3param0) {
    var __s3local0 = this;
    __s3local0._isLocked = false;
    __s3local0.isWaitingForServerMessage = false;
    __s3local0._collectableRenderList = [];
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).dispBounds = __s3param0.getBounds();
    __s3param0.mouseChildren = true;
    __s3param0.addEventListener(__s0local3.MOUSE_OVER, __s3local0.bindFunction(__s3local0.onMouseOver));
    __s3param0.addEventListener(__s0local3.MOUSE_OUT, __s3local0.bindFunction(__s3local0.onMouseOut));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDialog, __s1param0);
  CastleDialog.prototype.onKeyUp = function (__s5param0) {
    __s1param0.prototype.onKeyUp.call(this, __s5param0);
  };
  CastleDialog.prototype.destroy = function () {
    this.destroyCollectableRenderList();
    __s1param0.prototype.destroy.call(this);
    this.disp.removeEventListener(__s0local3.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.removeEventListener(__s0local3.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  CastleDialog.prototype.onBGAddedToStage = function (__s9param0) {
    this.bg.removeEventListener(__s0local2.ADDED_TO_STAGE, this.bindFunction(this.onBGAddedToStage));
    if (this.bg.width != 0) {
      this.bg.width = this.bg.stage.stageWidth + 10;
      this.bg.height = this.bg.stage.stageHeight + 10;
    }
    this.bg.x = -(this.disp.x + 5);
    this.bg.y = -(this.disp.y + 5);
    this.bg.doCache();
  };
  CastleDialog.prototype.updateBackground = function () {
    if (this.bg && this.bg.stage) {
      this.bg.graphics.clear();
      this.bg.graphics.beginFill(0, 1);
      this.bg.graphics.drawRect(0, 0, this.disp.stage.stageWidth / this.disp.scaleX + 10, this.disp.stage.stageHeight / this.disp.scaleY + 10);
      this.bg.graphics.endFill();
      this.bg.x = -this.disp.x / this.disp.scaleX - 5;
      this.bg.y = -this.disp.y / this.disp.scaleY - 5;
      this.bg.updateBounds();
      this.bg.doCache();
    }
  };
  CastleDialog.prototype.initDelayedButtons = function (__s15param0) {
    if (__s15param0) {
      this.delayTimerArray = [];
      this.buttonArray = [];
      this.delayButtonArray = __s15param0;
      for (var __s15local0 = 0; __s15local0 < __s15param0.length; __s15local0++) {
        var __s15local1 = new __dep_exact_81dacdf05bd32292_2.Timer(500, 1);
        __s15param0[__s15local0].basicButton = new __dep_exact_84d43d9c404bd4d8.BasicButton(__s15param0[__s15local0], true);
        __s15param0[__s15local0].basicButton.enableButton = false;
        this.delayTimerArray.push(__s15local1);
        this.buttonArray.push(__s15param0[__s15local0].basicButton);
        __s15local1.addEventListener(__s0local4.TIMER, this.onBtnDelayOver(__s15local1, __s15param0[__s15local0]));
        __s15local1.start();
      }
    }
  };
  CastleDialog.prototype.onBtnDelayOver = function (__s20param0, __s20param1) {
    return function (__s22param0) {
      __s20param0.stop();
      __s20param0.removeEventListener(__s0local4.TIMER, this.bindFunction(this.onBtnDelayOver));
      __s20param0 = null;
      __s20param1.basicButton.enableButton = true;
    };
  };
  CastleDialog.prototype.lockDialog = function () {
    this._isLocked = true;
  };
  CastleDialog.prototype.unLockDialog = function () {
    this._isLocked = false;
  };
  Object.defineProperty(CastleDialog.prototype, "isLocked", {
    get: function () {
      return this._isLocked;
    },
    enumerable: true,
    configurable: true
  });
  CastleDialog.prototype.onMouseOver = function (__s30param0) {
    this.controller.dispatchEvent(__dep_export_EventInstanceMapper.EventInstanceMapper.getEvent(__dep_export_CastleDialogEvent.CastleDialogEvent, __dep_export_CastleDialogEvent.CastleDialogEvent.MOUSE_ON_DIALOG));
    __s1param0.prototype.onMouseOver.call(this, __s30param0);
    var __s30local0 = __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.getFirstMovieClipParent(__s30param0.target);
    if (__s30local0 && __dep_exact_9e901e8e2483a22f_2.BasicToolTipManager.TOOLTIP_LABEL in __s30local0 && __s30local0.toolTipText) {
      this.layoutManager.tooltipManager.show(__s30local0.toolTipText, __s30local0);
    }
  };
  CastleDialog.prototype.onMouseOut = function (__s33param0) {
    __s1param0.prototype.onMouseOut.call(this, __s33param0);
    __dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips();
  };
  CastleDialog.prototype.onCursorOver = function (__s35param0) {
    if (__dep_exact_81dacdf05bd32292_6.instanceOfClass(__s35param0.target, "BasicButton") || __s35param0.target instanceof __s0local0 && __s35param0.target.basicButton != null) {
      if (__s35param0.target.enabled) {
        this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
      }
    } else if (__s35param0.target.actLikeButton || __s35param0.target.parent.actLikeButton) {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    } else if (__s35param0.target instanceof __dep_exact_81dacdf05bd32292_1.TextField && __s35param0.target.selectable) {
      this.layoutManager.customCursor.setCursorType(__dep_export_CastleNativeCustomCursor.CastleNativeCustomCursor.CURSOR_INPUT);
    }
  };
  CastleDialog.prototype.onCursorOut = function (__s41param0) {
    this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
  };
  CastleDialog.prototype.onResize = function (__s43param0) {
    __s1param0.prototype.onResize.call(this, __s43param0);
    this.updatePosition();
    this.updateBackground();
  };
  Object.defineProperty(CastleDialog.prototype, "env", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_3.EnvGlobalsHandler.globals;
    },
    set: function (__s47param0) {
      Object.getOwnPropertyDescriptor(__dep_exact_9e901e8e2483a22f_1.BasicDialog.prototype, "env").set.call(this, __s47param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDialog, "dialogHandler", {
    get: function () {
      return __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDialog.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDialog.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleDialog.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this.buttonArray != null) {
      for (var __s55local0 = 0, __s55local1 = this.buttonArray; __s55local0 < __s55local1.length; __s55local0++) {
        var __s55local2 = __s55local1[__s55local0];
        if (__s55local2 !== undefined) {
          __s55local2.resetHoverState();
          __s55local2.removeMouseEventListener();
          __s55local2.enableButton = true;
        }
      }
    }
    this.layoutManager.hideDialog(__dep_exact_81dacdf05bd32292_4.getDefinitionByName(__dep_exact_81dacdf05bd32292_5.getQualifiedClassName(this)));
    this.destroyCollectableRenderList();
    if (this.disp && this.disp.parent) {
      this.disp.parent.removeChild(this.disp);
    }
    this.layoutManager.restrictToHighestDialog();
  };
  CastleDialog.prototype.show = function () {
    if (this.disp instanceof __s0local1) {
      if (this.disp.numChildren > 0) {
        __s1param0.prototype.show.call(this);
        this.layoutManager.restrictToHighestDialog();
        if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile && this.layoutManager.worldmapScreen && this.layoutManager.worldmapScreen.renderer) {
          this.layoutManager.worldmapScreen.renderer.renderNavForMobile(true);
        }
      }
    } else {
      console.warn("is Invalid --> maybe Empty");
    }
    this.layoutManager.hideAllRingMenus();
  };
  Object.defineProperty(CastleDialog.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_4.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleDialog.prototype.destroyCollectableRenderList = function () {
    if (this._collectableRenderList) {
      for (var __s70local0 = 0; __s70local0 < this._collectableRenderList.length; ++__s70local0) {
        this._collectableRenderList[__s70local0].destroy();
      }
    }
    this._collectableRenderList = [];
  };
  Object.defineProperty(CastleDialog.prototype, "collectableRenderList", {
    get: function () {
      return this._collectableRenderList;
    },
    enumerable: true,
    configurable: true
  });
  CastleDialog.prototype.isOutOfTutorial = function () {
    return !__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive;
  };
  CastleDialog.prototype.setTickEnablement = function () {
    this.disp.tickEnabled = true;
  };
  CastleDialog.prototype.onRemovedFromStage = function (__s81param0) {};
  CastleDialog.ACTLIKEBUTTON_LABEL = "actLikeButton";
  return CastleDialog;
}(__dep_exact_9e901e8e2483a22f_1.BasicDialog);
exports.CastleDialog = __s0local5;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_TooltipManagerFacade = require("gge-module:export_TooltipManagerFacade");
__dep_exact_81dacdf05bd32292_3.classImplementsInterfaces(__s0local5, "ICollectableRendererList");
