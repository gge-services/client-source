Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_SimpleProgressBarComponent = require("gge-module:export_SimpleProgressBarComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function DecorationForgeMergeButton(__s3param0, __s3param1) {
    var __s3local0 = this;
    __s3local0._currentState = DecorationForgeMergeButton.STATE_DISABLED;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._onButtonClickedFunc = __s3param1;
    __s3param0.mouseChildren = false;
    __s3local0.setDownState(false);
    __s3local0.setHoverState(false);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DecorationForgeMergeButton, __s1param0);
  DecorationForgeMergeButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  DecorationForgeMergeButton.prototype.removeEventListener = function () {
    this.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    __s1param0.prototype.removeEventListener.call(this);
  };
  DecorationForgeMergeButton.prototype.setSelection = function (__s9param0) {
    this._currentSelectionVO = __s9param0;
    this.destroyCollectableRenderList();
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.mc_icon);
    if (this._currentSelectionVO && this._currentSelectionVO.itemVO) {
      __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(this.disp), this._currentSelectionVO.itemVO, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, this.getIconDimension()));
    }
    var __s9local0 = this.disp.mc_info;
    if (__s9local0) {
      var __s9local1 = this._currentSelectionVO ? this._currentSelectionVO.getBuildingFusionInfoVO() : null;
      if (__s9local0.mc_levelIcon) {
        __s9local0.mc_levelIcon.visible = __s9local1 != null;
      }
      if (__s9local0.txt_level) {
        __s9local0.txt_level.visible = __s9local1 != null;
        if (__s9local1) {
          __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s9local0.txt_level, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s9local1.getCurrentLevel()));
        }
      }
      if (__s9local0.mc_xpIcon) {
        __s9local0.mc_xpIcon.visible = __s9local1 != null;
      }
      if (__s9local0.txt_xp) {
        __s9local0.txt_xp.visible = __s9local1 != null;
        if (__s9local1) {
          __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s9local0.txt_xp, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_proportional_value", [__s9local1.getDeltaXpBetweenCurrentLevels(), __s9local1.getDeltaXpForNextLevel()]));
        }
      }
      if (__s9local0.mc_xpProgress) {
        __s9local0.mc_xpProgress.visible = __s9local1 != null;
        if (__s9local1) {
          new __dep_export_SimpleProgressBarComponent.SimpleProgressBarComponent(__s9local0.mc_xpProgress, 238).setProgressByPercent(__s9local1.getDeltaXpPercentFactor());
        }
      }
    }
  };
  DecorationForgeMergeButton.prototype.setState = function (__s21param0) {
    this._currentState = __s21param0;
    this.disp.mc_background.gotoAndStop(__s21param0);
    if (this._currentState == DecorationForgeMergeButton.STATE_DISABLED) {
      if (this.disp.basicButton) {
        this.disp.basicButton.removeMouseEventListener();
        this.disp.basicButton = null;
      }
    } else {
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.disp, 1.025);
    }
  };
  DecorationForgeMergeButton.prototype.updateInfo = function () {
    if (this.disp.mc_info) {
      this.disp.mc_info.visible = this._currentState != DecorationForgeMergeButton.STATE_DISABLED;
    }
  };
  DecorationForgeMergeButton.prototype.reset = function () {
    this.setSelection(null);
    this.setState(DecorationForgeMergeButton.STATE_DISABLED);
    this.updateInfo();
  };
  DecorationForgeMergeButton.prototype.setDownState = function (__s31param0) {
    this.disp.mc_downState.visible = this._currentState != DecorationForgeMergeButton.STATE_DISABLED && __s31param0;
  };
  DecorationForgeMergeButton.prototype.setHoverState = function (__s33param0) {
    this.disp.mc_overState.visible = this._currentState != DecorationForgeMergeButton.STATE_DISABLED && __s33param0;
  };
  DecorationForgeMergeButton.prototype.getIconDimension = function () {
    var __s35local0 = this.disp.mc_iconDimension.getBounds(null);
    return new __s0local1(__s35local0.width, __s35local0.height);
  };
  DecorationForgeMergeButton.prototype.onClick = function (__s37param0) {
    __s1param0.prototype.onClick.call(this, __s37param0);
    if (this._currentState != DecorationForgeMergeButton.STATE_DISABLED && this._onButtonClickedFunc) {
      this._onButtonClickedFunc(this);
    }
  };
  DecorationForgeMergeButton.prototype.onMouseDown = function (__s40param0) {
    this.setDownState(true);
    this.setHoverState(false);
  };
  DecorationForgeMergeButton.prototype.onMouseUp = function (__s42param0) {
    this.setDownState(false);
  };
  DecorationForgeMergeButton.prototype.onRollOver = function (__s44param0) {
    __s1param0.prototype.onRollOver.call(this, __s44param0);
    this.setHoverState(true);
  };
  DecorationForgeMergeButton.prototype.onRollOut = function (__s46param0) {
    __s1param0.prototype.onRollOut.call(this, __s46param0);
    this.setHoverState(false);
    this.setDownState(false);
  };
  Object.defineProperty(DecorationForgeMergeButton.prototype, "infoMc", {
    get: function () {
      return this.disp.mc_info;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeMergeButton.prototype, "currentState", {
    get: function () {
      return this._currentState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeMergeButton.prototype, "currentSelectionVO", {
    get: function () {
      return this._currentSelectionVO;
    },
    enumerable: true,
    configurable: true
  });
  DecorationForgeMergeButton.__initialize_static_members = function () {
    DecorationForgeMergeButton.STATE_DISABLED = 1;
    DecorationForgeMergeButton.STATE_READY = 2;
    DecorationForgeMergeButton.STATE_SET = 3;
  };
  return DecorationForgeMergeButton;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.DecorationForgeMergeButton = __s0local2;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
__s0local2.__initialize_static_members();
