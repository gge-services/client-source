Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleXPChangedEvent = require("gge-module:export_CastleXPChangedEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function APanelButton() {
    var __s3local0 = this;
    __s3local0._subButtons = [];
    __s3local0._isSubButton = false;
    __s3local0._onVisibilityChanged = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0._isMouseDown = false;
    __s3local0._isSubMenuExpanded = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, null) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(APanelButton, __s1param0);
  APanelButton.prototype.init = function (__s5param0, __s5param1) {
    this._buttonClass = __s5param0;
    this._isSubButton = __s5param1;
    this.disp = this.createButtonMc();
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.buttonMc, 1);
    this.setElementsToDefault();
    this.updateSubArrow();
    this.expandSubMenu(false, false);
    this.setMouseDownVisuals(false);
    this.setMouseOverVisuals(false);
  };
  Object.defineProperty(APanelButton.prototype, "buttonClassName", {
    get: function () {
      return this.iconClass.__fname;
    },
    enumerable: true,
    configurable: true
  });
  APanelButton.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    if (this._subButtons != null) {
      for (var __s9local0 = 0, __s9local1 = this._subButtons; __s9local0 < __s9local1.length; __s9local0++) {
        var __s9local2 = __s9local1[__s9local0];
        if (__s9local2 !== undefined) {
          __s9local2.onShow();
        }
      }
    }
    this.update();
  };
  APanelButton.prototype.onHide = function () {
    if (this._subButtons != null) {
      for (var __s15local0 = 0, __s15local1 = this._subButtons; __s15local0 < __s15local1.length; __s15local0++) {
        var __s15local2 = __s15local1[__s15local0];
        if (__s15local2 !== undefined) {
          __s15local2.onHide();
        }
      }
    }
    __s1param0.prototype.onHide.call(this);
  };
  APanelButton.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    if (this._subButtons != null) {
      for (var __s21local0 = 0, __s21local1 = this._subButtons; __s21local0 < __s21local1.length; __s21local0++) {
        var __s21local2 = __s21local1[__s21local0];
        if (__s21local2 !== undefined) {
          __s21local2.onVisibilityChanged.add(this.bindFunction(this.onSubButtonVisibilityChanged));
        }
      }
    }
  };
  APanelButton.prototype.removeEventListener = function () {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
    if (this.disp) {
      this.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
    if (this._subButtons != null) {
      for (var __s27local0 = 0, __s27local1 = this._subButtons; __s27local0 < __s27local1.length; __s27local0++) {
        var __s27local2 = __s27local1[__s27local0];
        if (__s27local2 !== undefined) {
          __s27local2.onVisibilityChanged.remove(this.bindFunction(this.onSubButtonVisibilityChanged));
        }
      }
    }
    __s1param0.prototype.removeEventListener.call(this);
  };
  APanelButton.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    for (var __s34local0 = 0, __s34local1 = this._subButtons; __s34local0 < __s34local1.length; __s34local0++) {
      __s34local1[__s34local0].destroy();
    }
  };
  APanelButton.prototype.update = function () {
    this.setVisibility(this.isButtonVisible());
    if (this.isVisible) {
      this.setElementsToDefault();
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.buttonMc, this.isButtonEnabled());
      this.updateOnVisible();
      this.updateTooltipText();
    }
  };
  APanelButton.prototype.updateTooltipText = function () {
    this.buttonMc.toolTipText = this.isSubButton || this.getNumberOfVisibleSubButtons() <= 0 ? this.getButtonTooltip() : null;
  };
  APanelButton.prototype.updateOnVisible = function () {};
  APanelButton.prototype.updateSubArrow = function () {
    this.buttonMc.mc_arrow.visible = this.getNumberOfVisibleSubButtons() > 0;
  };
  APanelButton.prototype.defineSubButtons = function (__s47param0) {
    if (this._subButtons != null) {
      for (var __s47local0 = 0, __s47local1 = this._subButtons; __s47local0 < __s47local1.length; __s47local0++) {
        var __s47local2 = __s47local1[__s47local0];
        if (__s47local2 !== undefined) {
          __s47local2.destroy();
        }
      }
    }
    this._subButtons = __s47param0;
    for (var __s47local3 = 0, __s47local4 = this._subButtons; __s47local3 < __s47local4.length; __s47local3++) {
      (__s47local2 = __s47local4[__s47local3]).init(this.buttonClass, true);
      if (this.isShown) {
        __s47local2.onVisibilityChanged.add(this.bindFunction(this.onSubButtonVisibilityChanged));
        __s47local2.onShow();
      }
      this.disp.mc_subButtons.addChild(__s47local2.disp);
    }
    this.expandSubMenu(false, false);
    this.alignSubButtons();
    this.updateSubArrow();
    this.updateTooltipText();
  };
  APanelButton.prototype.alignSubButtons = function () {
    var __s56local0 = 0;
    for (var __s56local1 = 0; __s56local1 < this._subButtons.length; ++__s56local1) {
      var __s56local2 = this._subButtons[__s56local1];
      if (__s56local2.isVisible) {
        var __s56local3 = __s56local2.disp;
        var __s56local4 = __s56local3.getBounds(null);
        __s56local3.x = 0;
        __s56local3.y = -__s56local0 - __s56local4.bottom;
        __s56local0 += __s56local4.height;
      }
    }
  };
  APanelButton.prototype.setElementsToDefault = function () {
    this.buttonMc.mc_background.gotoAndStop(this.isSubButton ? 2 : 1);
    this.setHighlight(APanelButton.HIGHLIGHT_TYPE_RED, false);
    this.setHighlight(APanelButton.HIGHLIGHT_TYPE_YELLOW, false);
    this.setMark(false);
    this.setAmount(false);
    this.buttonMc.mc_highlightYellow.visible = false;
    this.buttonMc.mc_highlightRed.visible = false;
    this.buttonMc.mc_mark.visible = false;
    this.buttonMc.mc_amount.visible = false;
  };
  APanelButton.prototype.setVisibility = function (__s63param0) {
    var __s63local0 = this.isVisible != __s63param0;
    __s1param0.prototype.setVisibility.call(this, __s63param0);
    if (__s63local0) {
      this._onVisibilityChanged.dispatch();
    }
  };
  APanelButton.prototype.setMark = function (__s66param0) {
    this.buttonMc.mc_mark.visible = __s66param0;
  };
  APanelButton.prototype.setAmount = function (__s68param0, __s68param1 = 0) {
    this.buttonMc.mc_amount.visible = __s68param0;
    if (__s68param0) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.buttonMc.mc_amount.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s68param1 <= 99 ? __s68param1 : 99));
    }
  };
  APanelButton.prototype.setHighlight = function (__s71param0, __s71param1) {
    var __s71local0;
    switch (__s71param0) {
      case APanelButton.HIGHLIGHT_TYPE_YELLOW:
        __s71local0 = this.buttonMc.mc_highlightYellow;
        break;
      case APanelButton.HIGHLIGHT_TYPE_RED:
        __s71local0 = this.buttonMc.mc_highlightRed;
    }
    __s71local0.visible = __s71param1;
  };
  APanelButton.prototype.setMouseDownVisuals = function (__s74param0) {
    if (!!this.isButtonEnabled() || !__s74param0) {
      this.buttonMc.mc_mouseDown.visible = __s74param0;
      this._isMouseDown = __s74param0;
    }
  };
  APanelButton.prototype.setMouseOverVisuals = function (__s77param0) {
    if ((!this._isMouseDown || !__s77param0) && (!!this.isButtonEnabled() || !__s77param0)) {
      this.buttonMc.mc_mouseOver.visible = __s77param0;
    }
  };
  APanelButton.prototype.expandSubMenu = function (__s80param0, __s80param1 = true) {
    if (!(this.getNumberOfVisibleSubButtons() <= 0)) {
      var __s80local0 = this.disp.mc_subButtons;
      if (__s80param1) {
        if (__s80param0 && !this._isSubMenuExpanded) {
          __s80local0.visible = true;
          __dep_exact_608de47b6498f9b0.TweenMax.killTweensOf(this.disp);
          __dep_exact_608de47b6498f9b0.TweenMax.fromTo(__s80local0, APanelButton.SUB_MENU_EXPAND_DURATION, {
            alpha: 0,
            y: APanelButton.SUB_MENU_INITIAL_POS_Y + APanelButton.SUB_MENU_EXPAND_OFFSET_Y
          }, {
            alpha: 1,
            y: APanelButton.SUB_MENU_INITIAL_POS_Y,
            onComplete: this.bindFunction(this.onExpandAnimationCompleted)
          });
        } else if (!__s80param0 && this._isSubMenuExpanded) {
          __s80local0.visible = true;
          __dep_exact_608de47b6498f9b0.TweenMax.killTweensOf(this.disp);
          __dep_exact_608de47b6498f9b0.TweenMax.fromTo(__s80local0, APanelButton.SUB_MENU_EXPAND_DURATION, {
            alpha: 1,
            y: APanelButton.SUB_MENU_INITIAL_POS_Y
          }, {
            alpha: 0,
            y: APanelButton.SUB_MENU_INITIAL_POS_Y + APanelButton.SUB_MENU_EXPAND_OFFSET_Y,
            onUpdate: this.bindFunction(this.onExpandAnimation),
            onComplete: this.bindFunction(this.onExpandAnimationCompleted)
          });
        }
      } else {
        __s80local0.alpha = __s80param0 ? 1 : 0;
        __s80local0.y = 0;
        __s80local0.visible = __s80param0;
      }
      this._isSubMenuExpanded = __s80param0;
    }
  };
  APanelButton.prototype.createButtonMc = function () {
    var __s87local0 = new this.buttonClass();
    __s87local0.name = __dep_export_ClientConstUtils.ClientConstUtils.getNameFromClass(this.buttonClass);
    if (this.iconClass != null) {
      try {
        var __s87local1 = new this.iconClass();
        __s87local1.name = "mc_content";
        __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s87local0.mc_button.mc_icon);
        __s87local0.mc_button.mc_icon.addChild(__s87local1);
        __s87local1.stop();
        __s87local1.x = 0;
        __s87local1.y = 0;
        __s87local1.scaleX = __s87local1.scaleY = __dep_export_ClientConstUtils.ClientConstUtils.getScaleFactorForFitInBounds(new __s0local1(__s87local1.width, __s87local1.height), this.iconDimension);
      } catch (__s91local0) {
        console.warn("Failed to create icon for panel button: " + (this.iconClass ? this.iconClass.__fname || this.iconClass.name : "unknown"));
      }
    }
    return __s87local0;
  };
  Object.defineProperty(APanelButton.prototype, "iconClass", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  APanelButton.prototype.getButtonTooltip = function () {
    return null;
  };
  APanelButton.prototype.isButtonEnabled = function () {
    return true;
  };
  APanelButton.prototype.isButtonVisible = function () {
    return true;
  };
  Object.defineProperty(APanelButton.prototype, "iconDimension", {
    get: function () {
      return APanelButton.DEFAULT_ICON_DIMENSION;
    },
    enumerable: true,
    configurable: true
  });
  APanelButton.prototype.getNumberOfVisibleSubButtons = function () {
    var __s103local0 = 0;
    if (this.subButtons != null) {
      for (var __s103local1 = 0, __s103local2 = this.subButtons; __s103local1 < __s103local2.length; __s103local1++) {
        var __s103local3 = __s103local2[__s103local1];
        if (__s103local3 !== undefined && __s103local3.isVisible) {
          __s103local0++;
        }
      }
    }
    return __s103local0;
  };
  APanelButton.prototype.onClick = function (__s109param0) {
    if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s109param0) && this.getNumberOfVisibleSubButtons() > 0) {
      var __s109local0 = this._isSubMenuExpanded;
      this.expandSubMenu(!__s109local0);
      if (!__s109local0) {
        return;
      }
    }
    __s1param0.prototype.onClick.call(this, __s109param0);
    if (this.isButtonEnabled() && __s109param0.target == this.buttonMc) {
      this.onButtonClicked();
    }
  };
  APanelButton.prototype.onMouseOver = function (__s114param0) {
    __s1param0.prototype.onMouseOver.call(this, __s114param0);
    if (__s114param0.target == this.buttonMc) {
      this.setMouseOverVisuals(true);
    }
  };
  APanelButton.prototype.onMouseOut = function (__s117param0) {
    __s1param0.prototype.onMouseOut.call(this, __s117param0);
    if (__s117param0.target == this.buttonMc) {
      this.setMouseOverVisuals(false);
      this.setMouseDownVisuals(false);
    }
  };
  APanelButton.prototype.onRollOver = function (__s120param0) {
    __s1param0.prototype.onRollOver.call(this, __s120param0);
    if (__s120param0.target == this.disp) {
      this.expandSubMenu(true);
    }
  };
  APanelButton.prototype.onRollOut = function (__s123param0) {
    __s1param0.prototype.onRollOut.call(this, __s123param0);
    if (__s123param0.target == this.disp) {
      this.expandSubMenu(false);
    }
  };
  APanelButton.prototype.onMouseDown = function (__s126param0) {
    if (__s126param0.target == this.buttonMc) {
      this.setMouseOverVisuals(false);
      this.setMouseDownVisuals(true);
    }
  };
  APanelButton.prototype.onMouseUp = function (__s129param0) {
    if (__s129param0.target == this.buttonMc) {
      this.setMouseDownVisuals(false);
    }
  };
  APanelButton.prototype.onButtonClicked = function () {};
  APanelButton.prototype.onSubButtonVisibilityChanged = function () {
    this.alignSubButtons();
    this.updateSubArrow();
    this.onVisibilityChanged.dispatch();
  };
  APanelButton.prototype.onExpandAnimation = function () {
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.updateParentCache(this.disp);
  };
  APanelButton.prototype.onExpandAnimationCompleted = function () {
    this.disp.mc_subButtons.visible = this._isSubMenuExpanded;
    if (!this.isSubButton && this.getNumberOfVisibleSubButtons() > 0) {
      this.buttonMc.toolTipText = this._isSubMenuExpanded ? this.getButtonTooltip() : null;
    }
    if (this._isSubMenuExpanded) {
      __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_SUBLAYER_PANEL, [this.buttonClassName]));
    } else {
      __dep_export_CastleComponent.CastleComponent.controller.dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.HIDE_SUBLAYER_PANEL, [this.buttonClassName]));
    }
    __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.updateParentCache(this.disp);
  };
  APanelButton.prototype.listenOnXPChanged = function () {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleXPChangedEvent.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
  };
  APanelButton.prototype.onXPChanged = function (__s145param0) {
    this.update();
  };
  Object.defineProperty(APanelButton.prototype, "subButtons", {
    get: function () {
      return this._subButtons;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(APanelButton.prototype, "isSubButton", {
    get: function () {
      return this._isSubButton;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(APanelButton.prototype, "onVisibilityChanged", {
    get: function () {
      return this._onVisibilityChanged;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(APanelButton.prototype, "buttonMc", {
    get: function () {
      return this.disp.mc_button;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(APanelButton.prototype, "iconMc", {
    get: function () {
      return this.disp.mc_button.mc_icon.getChildAt(0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(APanelButton.prototype, "buttonClass", {
    get: function () {
      return this._buttonClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(APanelButton.prototype, "isSubMenuExpanded", {
    get: function () {
      return this._isSubMenuExpanded;
    },
    enumerable: true,
    configurable: true
  });
  APanelButton.__initialize_static_members = function () {
    APanelButton.DEFAULT_ICON_DIMENSION = new __s0local1(35, 35);
  };
  APanelButton.SUB_MENU_EXPAND_DURATION = 0.2;
  APanelButton.SUB_MENU_EXPAND_OFFSET_Y = 5;
  APanelButton.SUB_MENU_INITIAL_POS_Y = -23.5;
  APanelButton.HIGHLIGHT_TYPE_RED = "red";
  APanelButton.HIGHLIGHT_TYPE_YELLOW = "yellow";
  return APanelButton;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.APanelButton = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
__s0local2.__initialize_static_members();
