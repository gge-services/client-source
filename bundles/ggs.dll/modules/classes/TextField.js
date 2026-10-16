Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_1bc5cb62fa0fa0642df721a1 = require("gge-module:opaque_1bc5cb62fa0fa0642df721a1");
var __dep_exact_8b5ddff403cf4eac = require("gge-module:exact_8b5ddff403cf4eac");
var __dep_class_TextFormat = require("gge-module:class_TextFormat");
var __dep_exact_9fee691c0fa47134 = require("gge-module:exact_9fee691c0fa47134");
var __dep_exact_b21f2b3b3225a20c = require("gge-module:exact_b21f2b3b3225a20c");
var __dep_exact_b9612b8947c7ee9b = require("gge-module:exact_b9612b8947c7ee9b");
var __dep_class_TextLineMetrics = require("gge-module:class_TextLineMetrics");
var __dep_class_ColorTransform = require("gge-module:class_ColorTransform");
var __dep_class_BrowserInfo = require("gge-module:class_BrowserInfo");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_applyFormat = require("gge-module:export_applyFormat");
var __dep_exact_44e242f02642cd12 = require("gge-module:exact_44e242f02642cd12");
var __dep_opaque_4558333f456cf355354a49ab = require("gge-module:opaque_4558333f456cf355354a49ab");
var __dep_export_Link = require("gge-module:export_Link");
var __dep_export_DARK_TEXT_PASSIVE_LINK_COLOR = require("gge-module:export_DARK_TEXT_PASSIVE_LINK_COLOR");
var __dep_exact_f45fa64c7a371373 = require("gge-module:exact_f45fa64c7a371373");
var __s0local0 = createjs.Shape;
var __s0local1 = createjs.DisplayObject;
var __s0local2 = createjs.Text;
var __s0local3 = createjs.Point;
var __s0local4 = createjs.Stage;
var __dep_export_InputTextFieldService = require("gge-module:export_InputTextFieldService");
var __s0local5 = createjs.FocusEvent;
var __s0local6 = createjs.MouseEvent.STAGE_MOUSE_DOWN;
var __dep_exact_608efcb6f851fa99 = require("gge-module:exact_608efcb6f851fa99");
var __s0local7 = createjs.TextEvent;
var __dep_class_Mouse = require("gge-module:class_Mouse");
var __dep_class_MouseCursor = require("gge-module:class_MouseCursor");
var __dep_export_HTML_TEXTFIELD_CLASS = require("gge-module:export_HTML_TEXTFIELD_CLASS");
var __dep_export_calculateLatestLayoutType = require("gge-module:export_calculateLatestLayoutType");
var __s0local8 = createjs.GlowFilter;
var __s0local9 = createjs.DropShadowFilter;
var __dep_exact_29f7e8b23a85ec9b = require("gge-module:exact_29f7e8b23a85ec9b");
var __dep_exact_d080a25fe68bd590 = require("gge-module:exact_d080a25fe68bd590");
var __s0local10 = __dep_export_LoggerConfigurator.getLogger(__dep_exact_d080a25fe68bd590.TEXT_FIELDS_LOGGER);
__dep_export_HTML_TEXTFIELD_CLASS.insertInputFieldElementCSS();
var __s0local11;
var __s0local12 = 0;
document.addEventListener("copy", function (__s1param0) {
  var __s1local0 = __s1param0;
  if (__s0local11 && document.activeElement === document.body && __s1local0.clipboardData) {
    __s1local0.clipboardData.setData("text/plain", __s0local11);
    __s1local0.preventDefault();
  }
});
var __s0local13 = function (__s4param0) {
  function TextField() {
    var __s6local0 = __s4param0.call(this) || this;
    __s6local0._defaultTextFormat = new __dep_class_TextFormat.TextFormat();
    __s6local0.needsRepaint = false;
    __s6local0.htmlLinkFormats = null;
    __s6local0._alwaysShowSelection = true;
    __s6local0._autoSize = __dep_exact_9fee691c0fa47134.TextFieldAutoSize.NONE;
    __s6local0._background = false;
    __s6local0._backgroundColor = "#FFFFFF";
    __s6local0._border = false;
    __s6local0._borderColor = "#000000";
    __s6local0._displayAsPassword = false;
    __s6local0._maxChars = 524288;
    __s6local0._multiline = false;
    __s6local0._restrict = null;
    __s6local0._selectable = false;
    __s6local0._verticalAlign = "top";
    __s6local0._textFieldType = __dep_exact_8b5ddff403cf4eac.TextFieldType.DYNAMIC;
    __s6local0._capitalize = false;
    __s6local0.textFormat = new __dep_class_TextFormat.TextFormat();
    __s6local0.defaultCacheScale = 1;
    __s6local0._firstVisibleLineIndex = 1;
    __s6local0._textValue = {
      type: "plain",
      text: "",
      inputTokens: []
    };
    __s6local0._width = 100;
    __s6local0._height = 100;
    __s6local0.isDefaultText = false;
    __s6local0._htmlTextFieldElement = null;
    __s6local0.mouseDownPoint = new __s0local3();
    __s6local0.mouseUpPoint = new __s0local3();
    __s6local0.inputTextFieldService = __dep_export_InputTextFieldService.InputTextFieldService.singleton();
    __s6local0._links = [];
    __s6local0._hoveredLinkIndex = -1;
    __s6local0.baseConstructorRan = false;
    __s6local0._isComposing = false;
    __s6local0.onAddedToStage = function (__s8param0) {
      __s6local0.__stageRef = __s6local0.stage;
      if (__s6local0.isInputTextField()) {
        __s6local0.ensureProperHTMLTextFieldElement();
      }
      if (__s6local0.isInputTextField() || __s6local0._selectable) {
        __s6local0.stage.addEventListener(__s0local6, __s6local0.onStageMouseDown);
        __s6local0.setupListenersForInputSupport();
      }
      if (__s6local0.text) {
        __s6local0.invalidate("Added to stage with text already assigned");
      }
    };
    __s6local0.onRemovedFromStage = function (__s13param0) {
      if (__s6local0.cacheID !== 0) {
        __s6local0.uncache();
      }
      if (__s6local0.isInputTextField()) {
        __s6local0.teardown();
      } else if (__s6local0.selectable) {
        __s6local0.removeMouseInputHandlers();
      }
      if (__s6local0._htmlTextFieldElement) {
        __s0local10.error("removed from stage, but still having a reference to an _htmlInputElement", __s6local0.name);
      }
      if (__s6local0.__stageRef) {
        __s6local0.__stageRef.removeEventListener(__s0local6, __s6local0.onStageMouseDown);
        __s6local0.__stageRef.removeEventListener(createjs.MouseEvent.MOUSE_MOVE, __s6local0.handleStageMouseMove);
      }
      __s6local0.__stageRef = undefined;
    };
    __s6local0.handleStageMouseMove = function (__s20param0) {
      var __s20local0 = __s6local0.normalizeCoordinates(__s20param0);
      var __s20local1 = __s20local0 ? __s6local0.findLink(__s20local0) : -1;
      if (__s20local1 !== __s6local0._hoveredLinkIndex) {
        __s6local0._hoveredLinkIndex = __s20local1;
        if (__s20local1 > -1) {
          __dep_class_Mouse.Mouse.instance().showCustomCursor(__dep_class_MouseCursor.MouseCursor.CLICK);
        } else if (__s20local0 && __s6local0.getBounds().containsPoint(__s20local0)) {
          __dep_class_Mouse.Mouse.instance().showCustomCursor(__dep_class_MouseCursor.MouseCursor.ARROW);
        }
        __s6local0.invalidate("link changed");
      }
    };
    __s6local0.handleMouseClick = function (__s25param0) {
      var __s25local0 = __s6local0.normalizeCoordinates(__s25param0);
      if (__s25local0) {
        var __s25local1 = __s6local0.findLink(__s25local0);
        var __s25local2 = __s6local0._links[__s25local1];
        if (__s25local2) {
          __s0local10.debug("link clicked", __s25local2.linkId);
          if (__s25local2.isAnchorLink) {
            __dep_exact_29f7e8b23a85ec9b.navigateToURL(__s25local2.linkId);
          } else {
            __s6local0.dispatchEvent(new __s0local7(__s0local7.LINK, true, false, __s25local2.linkId));
          }
        }
      }
    };
    __s6local0.onStageMouseDown = function (__s31param0) {
      var __s31local0 = __s6local0.normalizeCoordinates(__s31param0);
      if (__s6local0.isFocused && __s31local0 && !__s6local0.isPointWithinHitArea(__s31local0) && __s6local0._htmlTextFieldElement) {
        if (__dep_class_BrowserInfo.currentBrowserInfo.isMobile) {
          TextField.isMobileKeyboardShown = false;
        }
        __s6local0._htmlTextFieldElement.blur();
      }
      if (__s6local0._selectionBeginIndex !== undefined) {
        __s0local11 = undefined;
        __s6local0._selectionBeginIndex = undefined;
        __s6local0._selectionEndIndex = undefined;
        __s6local0.invalidate("stage mouse down, no more selection", true);
      }
    };
    __s6local0.antiAliasType = __dep_exact_b9612b8947c7ee9b.AntiAliasType.NORMAL;
    __s6local0.gridFitType = __dep_exact_b21f2b3b3225a20c.GridFitType.NONE;
    __s6local0.caretIndex = 0;
    __s6local0.condenseWhite = false;
    __s6local0.embedFonts = false;
    __s6local0.sharpness = 0;
    __s6local0.textInteractionMode = "normal";
    __s6local0.thickness = 1;
    __s6local0.mouseWheelEnabled = false;
    __s6local0.tabIndex = 0;
    __s6local0.tabEnabled = false;
    __s6local0.glow = [];
    __s6local0.dropShadow = [];
    __s6local0.lineWidth = null;
    __s6local0._wordWrap = false;
    __s6local0._x = 0;
    __s6local0._y = 0;
    __s6local0.validate = function () {
      if (__s6local0.stage) {
        if (__s6local0.needsRepaint) {
          createjs.Ticker.removeEventListener("tick", __s6local0.validate);
          __s6local0.redraw();
          __s6local0.invalidationReason = null;
          __s6local0.needsRepaint = false;
        }
      } else {
        __s6local0.invalidationReason = null;
        __s6local0.needsRepaint = false;
        createjs.Ticker.removeEventListener("tick", __s6local0.validate);
      }
    };
    __s6local0._mouseHandlersAttached = false;
    __s6local0.onMouseDown = function (__s41param0) {
      if (!__s6local0.isInputTextField() && __s6local0._selectable) {
        var __s41local0 = __s6local0.normalizeCoordinates(__s41param0);
        if (__s41local0) {
          var __s41local1 = __s6local0.caretCharacterIndexAtElementPosition(__s41local0);
          var __s41local2 = __s6local0.lastMouseDownPos !== __s41local1;
          __s6local0._selectionBeginIndex = __s41local1;
          __s6local0._selectionEndIndex = __s41local1;
          __s6local0.lastMouseDownPos = __s41local1;
          __s6local0.handleDoubleClick(Number(__s41local1) >>> 0, __s41local2);
          __s6local0.invalidate("selection changed", true);
        }
      }
      if (__s6local0.isInputTextField()) {
        var __s41local3 = __s6local0.normalizeCoordinates(__s41param0);
        if (__s41local3) {
          __s6local0.mouseDownPoint = __s41local3;
          if (__s6local0._htmlTextFieldElement) {
            __s6local0.onFocus();
            if (__dep_class_BrowserInfo.currentBrowserInfo.isMobile) {
              window.dispatchEvent(new Event("inputHTMLTextField"));
              __s41param0.preventDefault();
            }
            if ((__s41local1 = __s6local0.caretCharacterIndexAtElementPosition(__s41local3)) !== undefined) {
              __s6local0._htmlTextFieldElement.setSelectionRange(__s41local1, __s41local1);
            }
          } else {
            __s0local10.error("TextField clicked, but not _htmlInputElement set", __s6local0.name);
          }
        }
      }
    };
    __s6local0.onRollOver = function (__s51param0) {
      if (__s6local0.isInputTextField() || __s6local0._selectable) {
        __dep_class_Mouse.Mouse.instance().showCssCursor(__dep_class_MouseCursor.CSSMouseCursor.TEXT);
      }
    };
    __s6local0.onStageResized = function (__s54param0) {
      if (!__dep_class_BrowserInfo.currentBrowserInfo.isMobile) {
        if (__s6local0.isInputTextField()) {
          __s6local0.blur();
        }
      }
    };
    __s6local0.onPressMove = function (__s58param0) {
      if (__s6local0._selectable && __s6local0.lastMouseDownPos !== undefined && !__s6local0.isInputTextField()) {
        var __s58local0 = __s6local0.normalizeCoordinates(__s58param0);
        if (__s58local0) {
          var __s58local1 = __s6local0.caretCharacterIndexAtElementPosition(__s58local0);
          if (__s58local1 !== undefined && __s58local1 < __s6local0.lastMouseDownPos) {
            __s6local0._selectionBeginIndex = __s58local1;
            __s6local0._selectionEndIndex = __s6local0.lastMouseDownPos;
          } else if (__s58local1 !== undefined && __s58local1 > __s6local0.lastMouseDownPos) {
            __s6local0._selectionBeginIndex = __s6local0.lastMouseDownPos;
            __s6local0._selectionEndIndex = __s58local1;
          }
          __s6local0.updateSelectedText();
          __s6local0.invalidate("selection changed", true);
        }
      }
    };
    __s6local0.onInput = function (__s64param0) {
      if (__s6local0.isFocused && __s6local0._htmlTextFieldElement && !__s6local0._isComposing) {
        __s64param0.preventDefault();
        __s6local0.validateRestrict();
        __s6local0.text = __s6local0._htmlTextFieldElement.value;
        if (__s6local0._htmlTextFieldElement && __s6local0.isFocused) {
          var __s64local0 = Math.min(__s6local0.maxScrollV, Math.max(Math.ceil(__s6local0._htmlTextFieldElement.scrollTop / __s6local0.latestLayout.metrics.lineHeight) + 1, 1));
          __s6local0.scrollV = __s64local0;
        }
        __s6local0.invalidate("onInput / text changed");
        __s6local0.dispatchEvent(new createjs.Event(createjs.Event.CHANGE, true, false));
      }
    };
    __s6local0.onKeyDown = function (__s68param0) {
      if (__s6local0.isFocused) {
        var __s68local0 = __dep_exact_608efcb6f851fa99.KeyboardEventDispatcher.convertEvent(__s68param0);
        __s6local0.dispatchEvent(__s68local0);
        if (__s68param0.ctrlKey || __s68param0.keyCode >= 35 && __s68param0.keyCode <= 40) {
          __s6local0.invalidate("onKeyDown");
        }
      }
    };
    __s6local0.onKeyUp = function (__s72param0) {
      if (__s6local0.isFocused) {
        var __s72local0 = __dep_exact_608efcb6f851fa99.KeyboardEventDispatcher.convertEvent(__s72param0);
        __s6local0.dispatchEvent(__s72local0);
      }
    };
    __s6local0.baseConstructorRan = true;
    __s6local0.mouseEnabled = __s6local0.type === __dep_exact_8b5ddff403cf4eac.TextFieldType.INPUT || __s6local0._selectable;
    __s6local0.addEventListener(createjs.Event.ADDED_TO_STAGE, __s6local0.onAddedToStage);
    __s6local0.addEventListener(createjs.Event.REMOVED_FROM_STAGE, __s6local0.onRemovedFromStage);
    __s6local0.ensureProperHTMLTextFieldElement();
    return __s6local0;
  }
  __dep_opaque_1bc5cb62fa0fa0642df721a1.__extends(TextField, __s4param0);
  Object.defineProperty(TextField.prototype, "latestLayout", {
    get: function () {
      if (this._INTERNAL_currentLayout) {
        return this._INTERNAL_currentLayout;
      }
      var __s75local0 = __dep_opaque_1bc5cb62fa0fa0642df721a1.__assign({}, this.defaultTextFormat, this.textFormat);
      var __s75local1 = this._INTERNAL_previousLayout ? this._INTERNAL_previousLayout.size.width : this._width;
      var __s75local2 = this._INTERNAL_previousLayout ? this._INTERNAL_previousLayout.position.x : this._x;
      var __s75local3 = undefined;
      __s75local3 = this._autoSize === __dep_exact_9fee691c0fa47134.TextFieldAutoSize.NONE ? {
        autoSize: __dep_exact_9fee691c0fa47134.TextFieldAutoSize.NONE,
        x: this._x,
        y: this._y,
        width: this._width,
        height: this._height,
        lineWidth: this.lineWidth,
        wordWrap: this._wordWrap,
        multiline: this._multiline,
        previousWidth: __s75local1,
        previousX: __s75local2,
        firstVisibleLineIndex: this._firstVisibleLineIndex,
        verticalAlign: this._verticalAlign
      } : {
        autoSize: this._autoSize,
        x: this._x,
        y: this._y,
        width: this._width,
        height: this._height,
        wordWrap: this._wordWrap,
        multiline: this._multiline,
        previousWidth: __s75local1,
        previousX: __s75local2,
        firstVisibleLineIndex: this._firstVisibleLineIndex,
        verticalAlign: "top"
      };
      var __s75local4 = this._textValue.inputTokens;
      if (this._displayAsPassword) {
        var __s75local5 = __dep_class_BrowserInfo.currentBrowserInfo.isIE || __dep_class_BrowserInfo.currentBrowserInfo.isFireFox ? "●" : "•";
        __s75local4 = __s75local4.map(function (__s79param0) {
          if (__s79param0.type === "plain") {
            return {
              type: "plain",
              text: Array.apply(null, Array(__s79param0.text.length)).map(function () {
                return __s75local5;
              }).join("")
            };
          } else {
            return __s79param0;
          }
        });
      }
      if (!this._multiline) {
        var __s75local6 = __s75local4.findIndex(function (__s86param0) {
          return __s86param0.type === "newline";
        });
        if (__s75local6 >= 0) {
          __s75local4 = __s75local4.slice(0, __s75local6);
        }
      }
      var __s75local7 = __s0local2._workingContext;
      __s75local7.save();
      this._INTERNAL_currentLayout = __dep_export_calculateLatestLayoutType.calculateLatestLayoutType(__s75local7, __s75local3, __s75local0, __s75local4, TextField.FontRestriction);
      __s75local7.restore();
      this._INTERNAL_previousLayout = this._INTERNAL_currentLayout;
      return this._INTERNAL_currentLayout;
    },
    enumerable: true,
    configurable: true
  });
  TextField.prototype.getCanvasContext = function (__s89param0) {
    return __s89param0.getContext("2d", {
      willReadFrequently: true
    });
  };
  Object.defineProperty(TextField.prototype, "isFocused", {
    get: function () {
      return !!this._htmlTextFieldElement && document.activeElement === this._htmlTextFieldElement;
    },
    enumerable: true,
    configurable: true
  });
  TextField.prototype.getBounds = function (__s93param0) {
    var __s93local0 = this.latestLayout.bounds.clone();
    if (__s93param0 && __s93param0 !== this) {
      return this.transformRect(__s93local0, __s93param0);
    } else {
      return __s93local0;
    }
  };
  TextField.prototype.updateTextFieldVisibleInterval = function () {
    var __s97local0 = this;
    if (this.isInputTextField() && this._htmlTextFieldElement && document.activeElement === this._htmlTextFieldElement) {
      this._textFieldVisibleIntervalId ||= window.setInterval(function () {
        __s97local0.blurHTMLTextInputIfTextFieldIsNotVisible();
      }, 100);
    } else if (this._textFieldVisibleIntervalId) {
      window.clearInterval(this._textFieldVisibleIntervalId);
      this._textFieldVisibleIntervalId = undefined;
    }
  };
  TextField.prototype.blurHTMLTextInputIfTextFieldIsNotVisible = function () {
    if (!__dep_class_BrowserInfo.currentBrowserInfo.isMobile) {
      for (var __s103local0 = this.isVisible(), __s103local1 = this; __s103local1 && __s103local0;) {
        if (__s103local1 = __s103local1.parent) {
          __s103local0 = __s103local1.isVisible();
        }
      }
      if (__s103local0) {
        var __s103local2 = this.getBounds();
        var __s103local3 = this.localToGlobal(__s103local2.x, __s103local2.y);
        __s103local0 = this.stage.getObjectUnderPoint(__s103local3.x + 1, __s103local3.y + 1, 1) === this;
      }
      if (!__s103local0 && this._htmlTextFieldElement) {
        __s0local10.info("hiding the TextField " + this.name + ", as it or its parents are not visibile.");
        if (document.activeElement === this._htmlTextFieldElement) {
          if (__dep_class_BrowserInfo.currentBrowserInfo.isMobile) {
            TextField.isMobileKeyboardShown = false;
          }
          this._htmlTextFieldElement.blur();
        }
      }
    }
  };
  TextField.prototype.findLink = function (__s113param0) {
    return this._links.findIndex(function (__s115param0) {
      return __s115param0.containsPoint(__s113param0);
    });
  };
  TextField.prototype.replaceText = function (__s117param0, __s117param1, __s117param2) {
    __s0local10.warn("replaceText is not implemented");
  };
  Object.defineProperty(TextField.prototype, "alwaysShowSelection", {
    get: function () {
      return this._alwaysShowSelection;
    },
    set: function (__s121param0) {
      this._alwaysShowSelection = __s121param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "selectable", {
    get: function () {
      return this._selectable;
    },
    set: function (__s125param0) {
      if (this._selectable !== __s125param0) {
        this._selectable = __s125param0;
        this.mouseEnabled = __s125param0;
        if (this._selectable && !this._mouseHandlersAttached) {
          this.setupListenersForInputSupport();
          if (this.stage) {
            this.stage.addEventListener(__s0local6, this.onStageMouseDown);
          }
        } else if (!this._selectable && this._mouseHandlersAttached) {
          this.removeMouseInputHandlers();
          if (this.__stageRef) {
            this.__stageRef.removeEventListener(__s0local6, this.onStageMouseDown);
          }
        }
        this.invalidate("selectable property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  TextField.prototype.setSelection = function (__s132param0, __s132param1) {
    if (this._htmlTextFieldElement) {
      this._htmlTextFieldElement.selectionStart = __s132param0;
      this._htmlTextFieldElement.selectionEnd = __s132param1;
    } else {
      this._selectionBeginIndex = __s132param0;
      this._selectionEndIndex = __s132param1;
      this.updateSelectedText();
      this.invalidate("selection changed");
    }
  };
  Object.defineProperty(TextField.prototype, "autoSize", {
    get: function () {
      return this._autoSize;
    },
    set: function (__s138param0) {
      if (this._autoSize !== __s138param0) {
        this._autoSize = __s138param0;
        this.invalidate("autosize property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "background", {
    get: function () {
      return this._background;
    },
    set: function (__s143param0) {
      var __s143local0 = __s143param0 !== this.background;
      this._background = __s143param0;
      if (__s143local0) {
        this.invalidate("background property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "backgroundColor", {
    get: function () {
      return this._backgroundColor;
    },
    set: function (__s148param0) {
      var __s148local0 = this._backgroundColor !== __s148param0;
      this._backgroundColor = __s148param0;
      if (__s148local0) {
        this.invalidate("backgroundColor property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "border", {
    get: function () {
      return this._border;
    },
    set: function (__s153param0) {
      var __s153local0 = this._border !== __s153param0;
      this._border = __s153param0;
      if (__s153local0) {
        this.invalidate("border property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "borderColor", {
    get: function () {
      return this._borderColor;
    },
    set: function (__s158param0) {
      var __s158local0 = this._borderColor !== __s158param0;
      this._borderColor = __s158param0;
      if (__s158local0) {
        this.invalidate("borderColor property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "defaultTextFormat", {
    get: function () {
      return this._defaultTextFormat;
    },
    set: function (__s163param0) {
      var __s163local0 = !__dep_opaque_4558333f456cf355354a49ab(this._defaultTextFormat, __s163param0);
      this._defaultTextFormat = __dep_opaque_1bc5cb62fa0fa0642df721a1.__assign({}, __s163param0);
      if (__s163local0) {
        this.invalidate("defaultTextFormat property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "displayAsPassword", {
    get: function () {
      return this._displayAsPassword;
    },
    set: function (__s168param0) {
      var __s168local0 = this._displayAsPassword !== __s168param0;
      this._displayAsPassword = __s168param0;
      if (this._htmlTextFieldElement && this._htmlTextFieldElement instanceof HTMLInputElement) {
        this._htmlTextFieldElement.type = this._displayAsPassword ? "password" : "text";
        if (__s168local0) {
          this.invalidate("displayAsPassword property changed");
        }
      } else if (__s168param0 === true) {
        __s0local10.error("Can't set displayAsPassword, as the underlying element is not a HTMLInputElement instance", this._htmlTextFieldElement);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "maxChars", {
    get: function () {
      return this._maxChars;
    },
    set: function (__s175param0) {
      var __s175local0 = this._maxChars !== __s175param0;
      this._maxChars = __s175param0;
      if (this._htmlTextFieldElement) {
        this._htmlTextFieldElement.maxLength = this._maxChars;
      }
      if (__s175local0) {
        this.invalidate("maxChars property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "htmlText", {
    get: function () {
      if (this._textValue.type !== "html") {
        __s0local10.error("TextField.htmlText: Current text is not HTML text");
      }
      return this._textValue.text;
    },
    set: function (__s182param0) {
      __s182param0 = __dep_exact_44e242f02642cd12(__s182param0);
      if (this._textValue.type !== "html" || this._textValue.type !== __s182param0) {
        this._textValue = {
          type: "html",
          text: __s182param0,
          inputTokens: parseHTMLText(__s182param0)
        };
        this._hoveredLinkIndex = -1;
        this.invalidate("htmlText property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  TextField.prototype.drawHTMLText = function (__s185param0, __s185param1, __s185param2) {
    var __s185local0 = this;
    var __s185local1 = !!__s185param0;
    if (!__s185local1 && !(__s185param0 = __s0local2._workingContext)) {
      throw new Error("Did not get ctx");
    }
    if (!__s185param0) {
      throw new Error("Did not get ctx");
    }
    var __s185local2 = TextField.additionalCacheWidth;
    if (this.filters && this.filters.length > 0) {
      __s185local2 += 2;
    }
    __s185param0.save();
    __s185param0.beginPath();
    __s185param0.rect(0 - __s185local2, 0, this.width + __s185local2 * 2, this.height);
    __s185param0.clip();
    __s185param0.textBaseline = "alphabetic";
    var __s185local3 = this._selectable && this._selectionBeginIndex !== undefined && this._selectionEndIndex !== undefined ? {
      start: this._selectionBeginIndex,
      end: this._selectionEndIndex
    } : undefined;
    var __s185local4 = {
      xOffset: 0,
      yOffset: 0,
      distanceToBaseline: this.latestLayout.metrics.distanceToBaseline,
      currentLink: null,
      lineHeight: this.latestLayout.metrics.lineHeight,
      selection: __s185local3,
      multiline: this.multiline,
      capitalized: this._capitalize,
      printedCharacters: 0,
      underLinePlacement: this.latestLayout.metrics.distanceToBaseline * 0.125,
      currentFormat: __dep_opaque_1bc5cb62fa0fa0642df721a1.__assign({}, this.defaultTextFormat, this.textFormat),
      maxWidth: this.lineWidth && Math.min(this.lineWidth, this.width) || this.width,
      shouldPaint: __s185local1,
      closedLinks: [],
      glow: this.glow,
      dropShadow: this.dropShadow,
      htmlLinkFormats: this.htmlLinkFormats
    };
    var __s185local5 = this.latestLayout.metrics;
    try {
      __dep_export_applyFormat.applyFormat(__s185param0, __s185local4.currentFormat, TextField.FontRestriction);
    } catch (__s191local0) {}
    var __s185local6 = this.latestLayout.drawingTokens.reduce(function (__s193param0, __s193param1) {
      switch (__s193param1.type) {
        case "set-x-y":
          return function setXMoveY(__s196param0, __s196param1, __s196param2) {
            if (__s196param0.currentLink) {
              __s196param0.currentLink.link.endCurrentLinkRect(__s196param0.xOffset, __s196param0.yOffset + __s196param0.lineHeight);
              __s196param0.currentLink.link.startLinkRect(__s196param1, __s196param2);
            }
            return __dep_opaque_1bc5cb62fa0fa0642df721a1.__assign({}, __s196param0, {
              xOffset: __s196param1,
              yOffset: __s196param2
            });
          }(__s193param0, __s193param1.x, __s193param1.y);
        case "advance-x":
          return __dep_opaque_1bc5cb62fa0fa0642df721a1.__assign({}, __s193param0, {
            xOffset: __s193param0.xOffset + __s193param1.amount
          });
        case "start-link":
          __s193param0 = function startLink(__s199param0, __s199param1, __s199param2, __s199param3 = false) {
            var __s199local0;
            var __s199local1 = true;
            if (__s199param2 !== -1 && __s199param2 === __s199param0.closedLinks.length) {
              if (__s199param0.htmlLinkFormats && __s199param0.htmlLinkFormats.hover) {
                __s199local0 = __s199param0.htmlLinkFormats.hover.color;
                __s199local1 = __s199param0.htmlLinkFormats.hover.underline || __s199local1;
              } else {
                __s199local0 = typeof __s199param0.currentFormat.color == "string" ? __s199param0.currentFormat.color : "#ffffff";
              }
            } else if (__s199param0.htmlLinkFormats && __s199param0.htmlLinkFormats.normal) {
              __s199local0 = __s199param0.htmlLinkFormats.normal.color;
              __s199local1 = __s199param0.htmlLinkFormats.normal.underline || __s199local1;
            } else {
              __s199local0 = __s199param0.currentFormat.color === "#ffffff" || __s199param0.currentFormat.color === "#FFFFFF" ? __dep_export_DARK_TEXT_PASSIVE_LINK_COLOR.WHITE_TEXT_PASSIVE_LINK_COLOR : __s199param0.currentFormat.color === "#000000" || __s199param0.currentFormat.color === "#262014" ? __dep_export_DARK_TEXT_PASSIVE_LINK_COLOR.DARK_TEXT_PASSIVE_LINK_COLOR : __dep_export_DARK_TEXT_PASSIVE_LINK_COLOR.DEFAULT_PASSIVE_LINK_COLOR;
            }
            var __s199local2 = __s199param0.currentFormat;
            var __s199local3 = __dep_opaque_1bc5cb62fa0fa0642df721a1.__assign({}, __s199param0.currentFormat, {
              color: __s199local0,
              underline: __s199local1
            });
            var __s199local4 = new __dep_export_Link.Link(__s199param1, __s199param3);
            __s199local4.startLinkRect(__s199param0.xOffset, __s199param0.yOffset);
            return __s199param0 = __dep_opaque_1bc5cb62fa0fa0642df721a1.__assign({}, __s199param0, {
              currentLink: {
                link: __s199local4,
                previousFormat: __s199local2
              },
              currentFormat: __s199local3
            });
          }(__s193param0, __s193param1.linkId, __s185local0._hoveredLinkIndex, __s193param1.isAnchorLink);
          __dep_export_applyFormat.applyFormat(__s185param0, __s193param0.currentFormat, TextField.FontRestriction);
          return __s193param0;
        case "plain":
          var __s193local0 = __s193param1.width;
          return function drawText(__s206param0, __s206param1, __s206param2, __s206param3, __s206param4) {
            if (__s206param1.yOffset < -__s206param1.lineHeight || __s206param1.yOffset > __s206param4) {
              return __dep_opaque_1bc5cb62fa0fa0642df721a1.__assign({}, __s206param1, {
                xOffset: __s206param1.xOffset + __s206param3,
                printedCharacters: __s206param1.printedCharacters + characters(__s206param2).length
              });
            }
            try {
              for (var __s206local0 = __s206param1.dropShadow.length - 1; __s206local0 >= 0; __s206local0--) {
                var __s206local1 = __s206param1.dropShadow[__s206local0];
                __s206param0.save();
                __s206param0.shadowColor = __s206local1.color;
                __s206param0.shadowBlur = __s206local1.blur;
                __s206param0.shadowOffsetX = __s206local1.offsetX;
                __s206param0.shadowOffsetY = __s206local1.offsetY;
                __s206param0.fillStyle = __s206local1.color;
                __s206param0.fillText(__s206param2, __s206param1.xOffset, __s206param1.yOffset + __s206param1.distanceToBaseline);
                if (!__s206local1.offsetX && !__s206local1.offsetY) {
                  __s206param0.shadowBlur = 0;
                  __s206param0.lineWidth = (__s206local0 + 1) * 4;
                  __s206param0.strokeStyle = __s206local1.color;
                  __s206param0.strokeText(__s206param2, __s206param1.xOffset, __s206param1.yOffset + __s206param1.distanceToBaseline);
                }
                __s206param0.restore();
              }
              for (var __s206local2 = __s206param1.glow.length - 1; __s206local2 >= 0; __s206local2--) {
                var __s206local3 = __s206param1.glow[__s206local2];
                __s206param0.save();
                __s206param0.strokeStyle = __s206local3.color;
                __s206param0.lineWidth = __s206local3.blur / (__s206local3.isScaled ? 2 : 1);
                if (__s206param0.lineWidth === 2) {
                  __s206param0.lineWidth = 3;
                }
                if (__s206param1.currentFormat.size / __s206param0.lineWidth <= 3) {
                  __s206param0.lineWidth /= 2;
                  __s206param0.strokeText(__s206param2, __s206param1.xOffset + 1, __s206param1.yOffset + __s206param1.distanceToBaseline);
                  __s206param0.strokeText(__s206param2, __s206param1.xOffset - 1, __s206param1.yOffset + __s206param1.distanceToBaseline);
                  __s206param0.strokeText(__s206param2, __s206param1.xOffset, __s206param1.yOffset + __s206param1.distanceToBaseline + 1);
                  __s206param0.strokeText(__s206param2, __s206param1.xOffset, __s206param1.yOffset + __s206param1.distanceToBaseline - 1);
                } else {
                  if (!__s206param1.multiline) {
                    __s206param0.beginPath();
                    __s206param0.rect(__s206param1.xOffset - 2, __s206param1.yOffset + __s206param1.lineHeight - __s206param1.currentFormat.size - 2, __s206param3 + 3, Math.max(__s206param1.currentFormat.size, __s206param1.lineHeight));
                    __s206param0.clip();
                  }
                  __s206param0.strokeText(__s206param2, __s206param1.xOffset, __s206param1.yOffset + __s206param1.distanceToBaseline);
                }
                __s206param0.restore();
              }
            } catch (__s219local0) {}
            var __s206local4;
            if (__s206param1.selection && (__s206local4 = characters(__s206param2), __s206param1.printedCharacters < __s206param1.selection.end && __s206param1.printedCharacters + __s206local4.length > __s206param1.selection.start)) {
              var __s206local5 = __s206param0.fillStyle;
              var __s206local6 = Math.max(0, __s206param1.selection.start - __s206param1.printedCharacters);
              var __s206local7 = __s206param1.selection.end - __s206param1.selection.start;
              var __s206local8 = __s206param1.selection.start - __s206param1.printedCharacters + __s206local7;
              var __s206local9 = __s206local4.slice(0, __s206local6).join("");
              var __s206local10 = __s206local4.slice(__s206local6, __s206local8).join("");
              var __s206local11 = __s206param0.measureText(__s206local9).width;
              var __s206local12 = __s206param0.measureText(__s206local10).width;
              __s206param0.fillStyle = "lightblue";
              __s206param0.fillRect(__s206param1.xOffset + __s206local11, __s206param1.yOffset, __s206local12, __s206param1.lineHeight);
              __s206param0.fillStyle = __s206local5;
            }
            __s206param0.fillText(__s206param2, __s206param1.xOffset, __s206param1.yOffset + __s206param1.distanceToBaseline);
            if (__s206param1.currentFormat.underline) {
              (function underline(__s223param0, __s223param1, __s223param2) {
                __s223param0.strokeStyle = typeof __s223param1.currentFormat.color == "string" ? __s223param1.currentFormat.color : __dep_export_DARK_TEXT_PASSIVE_LINK_COLOR.FALLBACK_UNDERLINE_COLOR;
                __s223param0.beginPath();
                __s223param0.moveTo(__s223param1.xOffset, __s223param1.yOffset + __s223param1.distanceToBaseline + __s223param1.underLinePlacement);
                __s223param0.lineTo(__s223param1.xOffset + __s223param2, __s223param1.yOffset + __s223param1.distanceToBaseline + __s223param1.underLinePlacement);
                __s223param0.stroke();
              })(__s206param0, __s206param1, __s206param3);
            }
            return __dep_opaque_1bc5cb62fa0fa0642df721a1.__assign({}, __s206param1, {
              xOffset: __s206param1.xOffset + __s206param3,
              printedCharacters: __s206param1.printedCharacters + (__s206local4 ? __s206local4.length : 0)
            });
          }(__s185param0, __s193param0, __s193param1.text, __s193local0, __s185local0.latestLayout.size.height);
        case "end-link":
          __s193param0 = function finalizeLink(__s225param0) {
            if (__s225param0.currentLink) {
              __s225param0.currentLink.link.endCurrentLinkRect(__s225param0.xOffset, __s225param0.yOffset + __s225param0.lineHeight);
              return __s225param0 = __dep_opaque_1bc5cb62fa0fa0642df721a1.__assign({}, __s225param0, {
                currentLink: null,
                currentFormat: __s225param0.currentLink.previousFormat,
                closedLinks: __s225param0.closedLinks.concat([__s225param0.currentLink.link])
              });
            }
            throw new Error("Closing link tag found, but no opening tag");
          }(__s193param0);
          __dep_export_applyFormat.applyFormat(__s185param0, __s193param0.currentFormat, TextField.FontRestriction);
          return __s193param0;
        case "switch-to-format":
          __s193param0 = function applyFormatToState(__s228param0, __s228param1) {
            return __dep_opaque_1bc5cb62fa0fa0642df721a1.__assign({}, __s228param0, {
              currentFormat: __s228param1
            });
          }(__s193param0, __s193param1.format);
          __dep_export_applyFormat.applyFormat(__s185param0, __s193param0.currentFormat, TextField.FontRestriction);
          return __s193param0;
        default:
          return __s193param0;
      }
    }, __s185local4);
    __s185param0.restore();
    if (__s185param1) {
      __s185param1.width = __s185local5.textWidth;
      __s185param1.height = __s185local5.textHeight;
    }
    this._links = __s185local6.closedLinks;
    if (this.stage) {
      this.stage.removeEventListener(createjs.MouseEvent.MOUSE_MOVE, this.handleStageMouseMove);
      if (this._links.length > 0) {
        this.mouseEnabled = true;
        this.stage.addEventListener(createjs.MouseEvent.MOUSE_MOVE, this.handleStageMouseMove);
        this.addEventListener(createjs.MouseEvent.CLICK, this.handleMouseClick);
      }
    }
    return __s185param1;
  };
  Object.defineProperty(TextField.prototype, "length", {
    get: function () {
      return this.text.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "multiline", {
    get: function () {
      return this._multiline;
    },
    set: function (__s237param0) {
      var __s237local0 = __s237param0 !== this._multiline;
      this._multiline = __s237param0;
      if (__s237local0) {
        this.ensureProperHTMLTextFieldElement();
        this.invalidate("multiline property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  TextField.prototype.ensureProperHTMLTextFieldElement = function () {
    var __s240local0 = this;
    if (this.type === __dep_exact_8b5ddff403cf4eac.TextFieldType.INPUT) {
      var __s240local1 = undefined;
      if (this.multiline) {
        if (this._htmlTextFieldElement && this._htmlTextFieldElement instanceof HTMLTextAreaElement) {
          if (this.stage) {
            this.inputTextFieldService.registerInputField(this);
          }
          return;
        }
        if (this._htmlTextFieldElement) {
          this.inputTextFieldService.unregisterInputField(this);
          document.body.removeChild(this._htmlTextFieldElement);
          this._htmlTextFieldElement = null;
        }
        __s240local1 = document.createElement("textarea");
      } else {
        if (this._htmlTextFieldElement && this._htmlTextFieldElement instanceof HTMLInputElement) {
          if (this.stage) {
            this.inputTextFieldService.registerInputField(this);
          }
          return;
        }
        if (this._htmlTextFieldElement) {
          this.inputTextFieldService.unregisterInputField(this);
          document.body.removeChild(this._htmlTextFieldElement);
          this._htmlTextFieldElement = null;
        }
        (__s240local1 = document.createElement("input")).type = this._displayAsPassword ? "password" : "text";
        __s240local1.autocomplete = "off";
        __s240local1.spellcheck = false;
      }
      this._htmlTextFieldElement = __s240local1;
      __s240local1.className = __dep_export_HTML_TEXTFIELD_CLASS.HTML_TEXTFIELD_CLASS;
      __s240local1.id = this.name + "_" + ++__s0local12;
      __s240local1.style.textAlign = this.textFormat ? this.textFormat.align : "left";
      __s240local1.maxLength = this._maxChars;
      __s240local1.value = this._textValue.text;
      document.body.appendChild(__s240local1);
      __s240local1.addEventListener("input", this.onInput);
      __s240local1.addEventListener("keydown", this.onKeyDown);
      __s240local1.addEventListener("keyup", this.onKeyUp);
      __s240local1.addEventListener("blur", function (__s251param0) {
        __s240local0.onBlur();
        __s240local0.dispatchEvent(__s0local5.FOCUS_OUT);
        __s240local0.invalidate("inputElement blur event");
      });
      __s240local1.addEventListener("compositionstart", function () {
        __s240local0._isComposing = true;
      });
      __s240local1.addEventListener("compositionend", function (__s255param0) {
        __s240local0._isComposing = false;
        __s240local0.onInput(__s255param0);
      });
      if (this.stage) {
        this.inputTextFieldService.registerInputField(this);
      }
      if (this.isFocused) {
        this.onFocus();
      }
    } else {
      if (this._htmlTextFieldElement && this._htmlTextFieldElement.parentElement === document.body) {
        document.body.removeChild(this._htmlTextFieldElement);
        this.inputTextFieldService.unregisterInputField(this);
        this._htmlTextFieldElement = null;
      } else if (this._htmlTextFieldElement) {
        __s0local10.error("ensureProperTextElement: has this._htmlInputElement but on unexpected node (not body)");
      }
      this._htmlTextFieldElement = null;
    }
  };
  Object.defineProperty(TextField.prototype, "numLines", {
    get: function () {
      return this.latestLayout.metrics.totalNumberOfTextLines;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "restrict", {
    get: function () {
      return this._restrict && this._restrict.source;
    },
    set: function (__s266param0) {
      if (__s266param0 == null || __s266param0.length === 0) {
        this._restrict = null;
      } else {
        __s266param0 = "[^(" + (__s266param0 = (__s266param0 = __s266param0.replace("\\", "\\\\")).replace("\\\\", "\\\\\\")) + ")]";
        this._restrict = new RegExp(__s266param0, "g");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "restrictRegEx", {
    set: function (__s270param0) {
      this._restrict = __s270param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "scrollV", {
    get: function () {
      return this._firstVisibleLineIndex;
    },
    set: function (__s274param0) {
      __s274param0 = Math.min(this.maxScrollV, Math.max(__s274param0, 1));
      var __s274local0 = this._firstVisibleLineIndex !== __s274param0;
      this._firstVisibleLineIndex = __s274param0;
      if (this._htmlTextFieldElement) {
        this._htmlTextFieldElement.scrollTop = this.latestLayout.metrics.lineHeight * (__s274param0 - 1);
      }
      if (__s274local0) {
        this.invalidate("scrollV property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "maxScrollV", {
    get: function () {
      return Math.max(this.latestLayout.metrics.totalNumberOfTextLines - this.latestLayout.metrics.maximumNumberOfVisibleLines + 1, 1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "selectionBeginIndex", {
    get: function () {
      return this._selectionBeginIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "selectionEndIndex", {
    get: function () {
      return this._selectionEndIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "styleSheet", {
    get: function () {
      return this._styleSheet;
    },
    set: function (__s286param0) {
      this._styleSheet = __s286param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "text", {
    get: function () {
      if (this._displayAsPassword === true && this._htmlTextFieldElement != null) {
        return this._htmlTextFieldElement.value;
      } else {
        return this._textValue.text;
      }
    },
    set: function (__s292param0) {
      __s292param0 = __dep_exact_44e242f02642cd12(__s292param0);
      if (this._capitalize) {
        __s292param0 = __s292param0.toLocaleUpperCase();
      }
      var __s292local0 = this._textValue.type !== "plain" || this._textValue.text !== __s292param0;
      if (this._htmlTextFieldElement && !this._isComposing) {
        this._htmlTextFieldElement.value = __s292param0;
      }
      if (__s292local0) {
        this._textValue = {
          type: "plain",
          text: __s292param0,
          inputTokens: parsePlainText(__s292param0)
        };
        if (__s292param0 === "") {
          this.uncache();
        } else {
          this.invalidate("text property updated");
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "textColor", {
    get: function () {
      return this.getTextFormat().color;
    },
    set: function (__s301param0) {
      var __s301local0;
      __s301param0 = __dep_class_ColorTransform.ColorTransform.colorNumToString(__s301param0);
      if (this.textFormat) {
        __s301local0 = this.textFormat.color !== __s301param0;
        this.textFormat.color = __s301param0;
      } else {
        __s301local0 = this.defaultTextFormat.color !== __s301param0;
        this.defaultTextFormat.color = __s301param0;
      }
      if (__s301local0) {
        this.invalidate("textColor property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "align", {
    get: function () {
      return this.getTextFormat().align;
    },
    set: function (__s308param0) {
      var __s308local0;
      if (this.textFormat) {
        __s308local0 = this.textFormat.align !== __s308param0;
        this.textFormat.align = __s308param0;
      } else {
        __s308local0 = this.defaultTextFormat.align !== __s308param0;
        this.defaultTextFormat.align = __s308param0;
      }
      if (__s308local0) {
        if (this._htmlTextFieldElement) {
          this._htmlTextFieldElement.style.textAlign = __s308param0 || "left";
        }
        this.invalidate("align property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "textHeight", {
    get: function () {
      return this.latestLayout.metrics.textHeight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "textWidth", {
    get: function () {
      return this.latestLayout.metrics.textWidth;
    },
    enumerable: true,
    configurable: true
  });
  TextField.prototype.setLineWidth = function (__s318param0) {
    if (__s318param0 !== this.lineWidth) {
      this.lineWidth = __s318param0;
      this.invalidate("lineWidth property changed");
    }
  };
  Object.defineProperty(TextField.prototype, "verticalAlign", {
    get: function () {
      return this._verticalAlign;
    },
    set: function (__s323param0) {
      if (__s323param0 === "top" || __s323param0 === "middle" || __s323param0 === "bottom") {
        var __s323local0 = this._verticalAlign !== __s323param0;
        this._verticalAlign = __s323param0;
        if (__s323local0) {
          this.invalidate("verticalAlign property changed");
        }
      } else {
        __s0local10.error("TextField.verticalAlign: Unsupported value \"" + __s323param0 + "\"");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "wordWrap", {
    get: function () {
      return this._wordWrap;
    },
    set: function (__s330param0) {
      if (this._wordWrap !== __s330param0) {
        this._wordWrap = __s330param0;
        this.invalidate("wordWrap property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "type", {
    get: function () {
      return this._textFieldType;
    },
    set: function (__s335param0) {
      if (__s335param0 !== this._textFieldType) {
        this._textFieldType = __s335param0;
        this.ensureProperHTMLTextFieldElement();
        if (this.isInputTextField()) {
          this._autoSize = __dep_exact_9fee691c0fa47134.TextFieldAutoSize.NONE;
          this.mouseEnabled = this.type === __dep_exact_8b5ddff403cf4eac.TextFieldType.INPUT || this._selectable;
          this.setupListenersForInputSupport();
          if (this.stage) {
            this.stage.addEventListener(__s0local6, this.onStageMouseDown);
          }
        }
        this.invalidate("type property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "textType", {
    get: function () {
      if (this._textFieldType === __dep_exact_8b5ddff403cf4eac.TextFieldType.DYNAMIC) {
        return "dynamic";
      } else {
        return "input";
      }
    },
    set: function (__s344param0) {
      this.type = __s344param0 === "dynamic" ? __dep_exact_8b5ddff403cf4eac.TextFieldType.DYNAMIC : __dep_exact_8b5ddff403cf4eac.TextFieldType.INPUT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "width", {
    get: function () {
      return this.latestLayout.size.width;
    },
    set: function (__s348param0) {
      if (this._width !== __s348param0 && this.baseConstructorRan) {
        this._width = __s348param0;
        this.invalidate("width property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "x", {
    get: function () {
      return this.latestLayout.position.x;
    },
    set: function (__s353param0) {
      if (this._x !== __s353param0 && this.baseConstructorRan) {
        this._x = __s353param0;
        this.invalidate("x property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "y", {
    get: function () {
      return this.latestLayout.position.y;
    },
    set: function (__s358param0) {
      if (this._y !== __s358param0 && this.baseConstructorRan) {
        this._y = __s358param0;
        this.invalidate("y property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "height", {
    get: function () {
      return this.latestLayout.size.height;
    },
    set: function (__s363param0) {
      if (this._height !== __s363param0 && this.baseConstructorRan) {
        this._height = __s363param0;
        this.invalidate("height property changed");
      }
    },
    enumerable: true,
    configurable: true
  });
  TextField.prototype.cache = function (__s366param0, __s366param1, __s366param2, __s366param3, __s366param4) {
    __s366param4 = this.prepareFiltersForScaledCache(__s366param4);
    __s4param0.prototype.cache.call(this, __s366param0, __s366param1, __s366param2, __s366param3, __s366param4);
    if (TextField.CACHE_UPDATED_EVENTS_ENABLED) {
      this.dispatchEvent(new createjs.Event(TextField.CACHE_UPDATED_EVENT_TYPE, true, false));
    }
  };
  TextField.prototype.prepareFiltersForScaledCache = function (__s369param0) {
    if (__s369param0 !== undefined && __s369param0 > 1) {
      var __s369local0 = 0;
      var __s369local1 = 0;
      if (__s369param0 !== undefined && __s369param0 > 1 && this.filters && this.filters.length > 0) {
        if (TextField.scaleCacheForTextfieldsWithFilters) {
          for (var __s369local2 = 0; __s369local2 < this.filters.length; __s369local2++) {
            var __s369local3 = this.filters[__s369local2];
            if ((__s369local3 instanceof __s0local8 || __s369local3 instanceof __s0local9) && !__s369local3.isScaled) {
              if (__s369local3 instanceof __s0local9) {
                __s369local3.distance *= __s369param0;
              } else {
                __s369local3.blurX *= __s369param0;
                __s369local3.blurY *= __s369param0;
              }
              __s369local3.isScaled = true;
              __s369local0 = Math.max(__s369local3.blurX / __s369param0, __s369local0);
              __s369local1 = Math.max(__s369local3.blurY / __s369param0, __s369local1);
            }
          }
        } else {
          __s369param0 = 1;
        }
      }
      if (__s369local0 > 0) {
        this.x += __s369local0;
      }
      if (__s369local1 > 0) {
        this.y += __s369local1;
      }
    }
    return __s369param0;
  };
  TextField.prototype.appendText = function (__s382param0) {
    var __s382local0 = this._textValue.text + __s382param0;
    if (this._textValue.type === "plain") {
      this._textValue = {
        type: this._textValue.type,
        text: __s382local0,
        inputTokens: parsePlainText(__s382local0)
      };
    } else {
      this._textValue = {
        type: this._textValue.type,
        text: __s382local0,
        inputTokens: parseHTMLText(__s382local0)
      };
    }
    this.invalidate("text updated");
  };
  TextField.prototype.getLineMetrics = function (__s386param0) {
    var __s386local0 = this.latestLayout.metrics.drawnLines[__s386param0];
    var __s386local1 = __s0local2._workingContext;
    __dep_export_applyFormat.applyFormat(__s386local1, this.textFormat, TextField.FontRestriction);
    return new __dep_class_TextLineMetrics.TextLineMetrics(this.x, __s386local1.measureText(__s386local0).width, this.latestLayout.metrics.lineHeight);
  };
  TextField.prototype.getMetrics = function () {
    return {
      lines: this.latestLayout.metrics.drawnLines,
      lineHeight: this.latestLayout.metrics.lineHeight,
      vOffset: 0,
      width: this.latestLayout.metrics.textWidth,
      height: this.latestLayout.metrics.textHeight
    };
  };
  TextField.prototype.getLineText = function (__s390param0) {
    return this.latestLayout.metrics.drawnLines[__s390param0];
  };
  TextField.prototype.setTransform = function (__s392param0) {
    return this;
  };
  TextField.prototype.getTextFormat = function (__s394param0 = -1, __s394param1 = -1) {
    if (this.textFormat) {
      return this.textFormat;
    } else {
      return this.defaultTextFormat;
    }
  };
  TextField.prototype.setTextFormat = function (__s398param0, __s398param1 = -1, __s398param2 = -1) {
    if (__dep_class_BrowserInfo.currentBrowserInfo.isIE && /^_/.test(__s398param0.font)) {
      __s398param0.font = __s398param0.font.substring(1);
    }
    var __s398local0 = !__dep_opaque_4558333f456cf355354a49ab(this.textFormat, __s398param0);
    this.textFormat = __dep_opaque_1bc5cb62fa0fa0642df721a1.__assign({}, __s398param0);
    if (__s398local0) {
      if (this._htmlTextFieldElement) {
        this._htmlTextFieldElement.style.textAlign = this.textFormat.align || "left";
      }
      this.invalidate("textFormat property changed");
    }
  };
  TextField.prototype.replaceSelectedText = function (__s403param0) {
    if (this._htmlTextFieldElement && this._htmlTextFieldElement.selectionStart !== this._htmlTextFieldElement.selectionEnd && !this._isComposing) {
      var __s403local0 = this._htmlTextFieldElement.value;
      var __s403local1 = this._htmlTextFieldElement.selectionStart === null ? undefined : this._htmlTextFieldElement.selectionStart;
      var __s403local2 = this._htmlTextFieldElement.selectionEnd === null ? undefined : this._htmlTextFieldElement.selectionEnd;
      var __s403local3 = __s403local0.slice(0, __s403local1) + __s403param0 + __s403local0.slice(__s403local2, __s403local0.length);
      this._htmlTextFieldElement.value = __s403local3;
      this.invalidate("replaceSelectedText");
    }
  };
  TextField.prototype.draw = function (__s406param0, __s406param1) {
    if (this.isFocused) {
      return false;
    }
    if (__s4param0.prototype.draw.call(this, __s406param0, __s406param1)) {
      return true;
    }
    if (!this.cacheCanvas && this.text === "") {
      return true;
    }
    if (this.filters && this.filters.length) {
      this.glow = [];
      this.dropShadow = [];
      for (var __s406local0 = 0; __s406local0 < this.filters.length; __s406local0++) {
        var __s406local1 = this.filters[__s406local0];
        if (__s406local1 instanceof createjs.GlowFilter) {
          this.glow.push({
            color: __dep_class_ColorTransform.ColorTransform.rgbToHex(__s406local1._red, __s406local1._green, __s406local1._blue, true),
            width: __s406local1.strength / 10,
            blur: __s406local1.blurX,
            isScaled: __s406local1.isScaled
          });
        } else if (__s406local1 instanceof createjs.DropShadowFilter) {
          this.dropShadow.push({
            color: "rgba(" + __s406local1._red + ", " + __s406local1._green + ", " + __s406local1._blue + ", " + (__s406local1.strength >= 1 ? 1 : __s406local1.strength >= 0.75 ? __s406local1.strength : (0.5 + __s406local1.strength / 3).toFixed(2)) + ")",
            blur: __s406local1.blurX + 1 >> 0,
            offsetX: __s406local1._offsetX,
            offsetY: __s406local1._offsetY
          });
        }
      }
    }
    this.redrawBackground(__s406param0);
    this.drawHTMLText(__s406param0, {}, undefined);
    return true;
  };
  TextField.prototype.getTextFieldHTMLElement = function () {
    return this._htmlTextFieldElement;
  };
  TextField.prototype.invalidate = function (__s418param0, __s418param1 = false) {
    if (!__s418param1) {
      this._INTERNAL_currentLayout = undefined;
      if (__s418param0 === "x property changed" || __s418param0 === "width property changed") {
        this._INTERNAL_previousLayout = undefined;
      }
    }
    this.uncache();
    if (this.filters && this.filters.length > 0) {
      this.redraw();
    } else if (!this.needsRepaint) {
      createjs.Ticker.addEventListener("tick", this.validate);
      this.needsRepaint = true;
      this.invalidationReason = __s418param0;
    }
  };
  TextField.prototype.redraw = function () {
    if (this.mouseEnabled && !this.hitArea) {
      var __s424local0 = new __s0local0();
      __s424local0.graphics.beginFill("#ff0000").drawRect(0, 0, this.width, this.height);
      this.hitArea = __s424local0;
    }
    var __s424local1 = this.defaultCacheScale;
    if (this.stage && this.stage.scaleX > 1) {
      __s424local1 = Math.max(__s424local1, 2);
    }
    if (this.width && this.height) {
      this.cache(0, 0, this.width + TextField.additionalCacheWidth, this.height + TextField.additionalCacheHeight, __s424local1);
    }
  };
  TextField.prototype.redrawBackground = function (__s429param0) {
    if (this._background) {
      __s429param0.fillStyle = this._backgroundColor;
      __s429param0.fillRect(0, 0, this.width, this.height);
    }
  };
  Object.defineProperty(TextField.prototype, "textBaseline", {
    get: function () {
      __s0local10.debug("TextField: get textBaseline not implemented, will return \"top\"");
      return "top";
    },
    set: function (__s434param0) {
      if (__s434param0 !== "top") {
        __s0local10.error("TextField: Only textBaseline \"top\" is supported");
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextField.prototype, "capitalize", {
    get: function () {
      return this._capitalize;
    },
    set: function (__s439param0) {
      this._capitalize = __s439param0;
      if (__s439param0) {
        this.text = this.text.toLocaleUpperCase();
      }
    },
    enumerable: true,
    configurable: true
  });
  TextField.prototype.setupListenersForInputSupport = function () {
    if (!this._mouseHandlersAttached) {
      this.addEventListener("mousedown", this.onMouseDown);
      this.addEventListener("rollover", this.onRollOver);
      this.addEventListener("pressmove", this.onPressMove);
      if (window) {
        window.addEventListener("resize", this.onStageResized, false);
      }
      this._mouseHandlersAttached = true;
    }
  };
  TextField.prototype.removeMouseInputHandlers = function () {
    this.removeEventListener("mousedown", this.onMouseDown);
    this.removeEventListener("rollover", this.onRollOver);
    this.removeEventListener("pressmove", this.onPressMove);
    if (window) {
      window.removeEventListener("resize", this.onStageResized);
    }
    this._mouseHandlersAttached = false;
  };
  TextField.prototype.updateSelectedText = function () {
    if (this._selectionBeginIndex !== undefined && this.selectionEndIndex !== undefined) {
      var __s449local0 = this.latestLayout.drawingTokens.filter(function (__s452param0) {
        return __s452param0.type === "plain";
      }).map(function (__s454param0) {
        return characters(__s454param0.text);
      });
      var __s449local1 = __dep_exact_f45fa64c7a371373(__s449local0);
      __s0local11 = __s449local1.slice(this._selectionBeginIndex, this._selectionEndIndex).join("");
    } else {
      __s0local11 = undefined;
    }
  };
  TextField.prototype.caretCharacterIndexAtElementPosition = function (__s457param0) {
    var __s457local0 = this.latestLayout;
    var __s457local1 = 0;
    var __s457local2 = 0;
    var __s457local3 = 0;
    var __s457local4 = 0;
    var __s457local5 = 0;
    var __s457local6 = this.textFormat;
    var __s457local7 = function () {
      if (__s457param0.y < __s457local3 || __s457param0.x < __s457local2 && __s457param0.y >= __s457local3 && __s457param0.y < __s457local3 + __s457local0.metrics.lineHeight) {
        return __s457local5;
      } else if (__s457param0.y <= __s457local3 + __s457local0.metrics.lineHeight && __s457param0.x >= __s457local1) {
        return __s457local4;
      } else {
        return -1;
      }
    };
    for (var __s457local8 = 0, __s457local9 = __s457local0.drawingTokens; __s457local8 < __s457local9.length; __s457local8++) {
      var __s457local10 = __s457local9[__s457local8];
      switch (__s457local10.type) {
        case "plain":
          if (__s457param0.x >= __s457local1 && __s457param0.x <= __s457local1 + __s457local10.width && __s457param0.y >= __s457local3 && __s457param0.y <= __s457local3 + __s457local0.metrics.lineHeight) {
            var __s457local11 = __s0local2._workingContext;
            __dep_export_applyFormat.applyFormat(__s457local11, __s457local6, TextField.FontRestriction);
            var __s457local12 = "";
            var __s457local13 = __s457local1;
            var __s457local14 = __s457local1;
            var __s457local15 = characters(__s457local10.text);
            for (var __s457local16 = 0, __s457local17 = Array.from(__s457local15.entries()); __s457local16 < __s457local17.length; __s457local16++) {
              var __s457local18 = __s457local17[__s457local16];
              var __s457local19 = __s457local18[0];
              __s457local13 = __s457local14;
              __s457local12 += __s457local18[1];
              if ((__s457local14 = __s457local1 + __s457local11.measureText(__s457local12).width) > __s457param0.x) {
                if (__s457param0.x - __s457local13 > __s457local14 - __s457param0.x) {
                  return __s457local4 + __s457local19 + 1;
                } else {
                  return __s457local4 + __s457local19;
                }
              }
            }
            __s0local10.error("did not find character boundary for cursor, even though it should be inside this token", __s457local10.text, __s457local15);
          }
          __s457local1 += __s457local10.width;
          __s457local4 += characters(__s457local10.text).length;
          if (__s457local0.drawingTokens.indexOf(__s457local10) === __s457local0.drawingTokens.length - 1) {
            if ((__s457local20 = __s457local7()) > -1) {
              return __s457local20;
            }
          }
          break;
        case "set-x-y":
          var __s457local20;
          if (__s457local4 > 0) {
            if ((__s457local20 = __s457local7()) > -1) {
              return __s457local20;
            }
          }
          __s457local1 = __s457local10.x;
          __s457local2 = __s457local10.x;
          __s457local3 = __s457local10.y;
          __s457local5 = __s457local4;
          break;
        case "advance-x":
          __s457local1 += __s457local10.amount;
          break;
        case "switch-to-format":
          __s457local6 = __s457local10.format;
      }
    }
    if (__s457param0.y > __s457local3 + __s457local0.metrics.lineHeight) {
      return __s457local4;
    }
  };
  TextField.prototype.isInputTextField = function () {
    return this.type === __dep_exact_8b5ddff403cf4eac.TextFieldType.INPUT;
  };
  TextField.prototype.validateRestrict = function () {
    if (this._restrict && this._htmlTextFieldElement && !this._isComposing && this._htmlTextFieldElement.value.length > 0) {
      this._htmlTextFieldElement.value = this._htmlTextFieldElement.value.replace(this._restrict, "");
    }
  };
  TextField.prototype.onFocus = function () {
    if (this._htmlTextFieldElement && !this.isFocused) {
      if (__dep_class_BrowserInfo.currentBrowserInfo.isMobile) {
        TextField.isMobileKeyboardShown = true;
      }
      this.dispatchEvent(__s0local5.FOCUS_IN);
      var __s483local0 = this.scaleY;
      for (var __s483local1 = this.parent; __s483local1 && !(__s483local1 instanceof __s0local4);) {
        __s483local0 *= __s483local1.scaleY;
        __s483local1 = __s483local1.parent;
      }
      this._htmlTextFieldElement.style.display = "block";
      this._htmlTextFieldElement.style.font = this.textFormat.fontType;
      if (!this.isDefaultText) {
        this._htmlTextFieldElement.value = this.text;
      }
      var __s483local2 = 1;
      if (TextField.scaleHTMLByPixelDensity) {
        __s483local2 = 1 / (window.devicePixelRatio || 1);
      }
      var __s483local3 = this.localToGlobal(2, this.multiline ? 2 : 0);
      var __s483local4 = this.multiline ? 0 : Math.floor((this.height - this.latestLayout.metrics.lineHeight) / 2) - 1;
      __s483local4 = __s483local4 > 2 ? __s483local4 : 0;
      var __s483local5 = (this.textFormat.size || __dep_export_DARK_TEXT_PASSIVE_LINK_COLOR.FALLBACK_TEXT_SIZE) * __s483local0;
      var __s483local6 = (this.height - (this.multiline ? 2 : 0)) * __s483local0;
      var __s483local7 = this.latestLayout.metrics.lineHeight * __s483local0;
      var __s483local8 = 1;
      if (__dep_class_BrowserInfo.currentBrowserInfo.isMobile && __dep_class_BrowserInfo.currentBrowserInfo.isIOS && __s483local5 < 16) {
        __s483local8 = __s483local5 / 16;
        __s483local5 = 16;
        if (__s483local7 < 16) {
          __s483local7 = 16;
        }
        __s483local6 /= __s483local8;
      }
      this._htmlTextFieldElement.style.top = Math.floor((__s483local3.y - __s483local4) * __s483local2) + "px";
      this._htmlTextFieldElement.style.left = Math.round(__s483local3.x * __s483local2) + "px";
      this._htmlTextFieldElement.style.width = (this.width - 2) * __s483local0 / __s483local8 + "px";
      this._htmlTextFieldElement.style.height = __s483local6 + "px";
      this._htmlTextFieldElement.style.color = this.textColor;
      this._htmlTextFieldElement.style.margin = "0";
      this._htmlTextFieldElement.style.padding = "0";
      this._htmlTextFieldElement.style.fontFamily = __dep_export_applyFormat.getFontFamily(this.textFormat, TextField.FontRestriction);
      this._htmlTextFieldElement.style.fontSize = __s483local5 + "px";
      this._htmlTextFieldElement.style.lineHeight = __s483local7 + "px";
      this._htmlTextFieldElement.focus();
      this._htmlTextFieldElement.scrollTop = (this._firstVisibleLineIndex - 1) * this.latestLayout.metrics.lineHeight;
      this._htmlTextFieldElement.style.transform = "scale(" + __s483local2 * __s483local8 + ")";
      this._htmlTextFieldElement.style.transformOrigin = "left top";
      this.updateTextFieldVisibleInterval();
    }
  };
  TextField.prototype.onBlur = function () {
    this.deSelectHtmlInput();
    this.updateTextFieldVisibleInterval();
    this.isDefaultText = this.text === "";
    this._isComposing = false;
  };
  TextField.prototype.isPointWithinHitArea = function (__s495param0) {
    return !!__s495param0 && __s495param0.x > 0 && __s495param0.y > 0 && (__s495param0.x < this._width && __s495param0.y < this._height || __s495param0.x < this._width && __s495param0.y < this._height);
  };
  TextField.prototype.normalizeCoordinates = function (__s497param0) {
    if (this.stage !== null) {
      var __s497local0 = __s497param0.pageX !== undefined ? __s497param0.pageX : __s497param0.stageX;
      var __s497local1 = __s497param0.pageY !== undefined ? __s497param0.pageY : __s497param0.stageY;
      return this.globalToLocal(__s497local0, __s497local1);
    }
  };
  TextField.prototype.teardown = function () {
    if (this._htmlTextFieldElement && this._htmlTextFieldElement.parentElement === document.body) {
      this._htmlTextFieldElement.removeEventListener("input", this.onInput);
      this._htmlTextFieldElement.removeEventListener("keydown", this.onKeyDown);
      this._htmlTextFieldElement.removeEventListener("keyup", this.onKeyUp);
      document.body.removeChild(this._htmlTextFieldElement);
      this._htmlTextFieldElement = null;
    } else if (this._htmlTextFieldElement) {
      __s0local10.error("has this._htmlInputElement but on different node");
    }
    this.removeMouseInputHandlers();
    this.inputTextFieldService.unregisterInputField(this);
    if (this._textFieldVisibleIntervalId) {
      window.clearInterval(this._textFieldVisibleIntervalId);
      this._textFieldVisibleIntervalId = undefined;
    }
  };
  TextField.prototype.deSelectHtmlInput = function () {
    if (this._htmlTextFieldElement) {
      if (__dep_class_BrowserInfo.currentBrowserInfo.isMobile) {
        TextField.isMobileKeyboardShown = false;
      }
      this._htmlTextFieldElement.style.display = "none";
      this._htmlTextFieldElement.blur();
    }
  };
  TextField.prototype.focus = function () {
    if (this.isInputTextField() && this._htmlTextFieldElement) {
      this.onFocus();
      this._htmlTextFieldElement.select();
    }
  };
  TextField.prototype.blur = function () {
    if (this._htmlTextFieldElement && this.isFocused) {
      if (__dep_class_BrowserInfo.currentBrowserInfo.isMobile) {
        TextField.isMobileKeyboardShown = false;
      }
      this._htmlTextFieldElement.blur();
    }
  };
  TextField.prototype.handleDoubleClick = function (__s516param0, __s516param1) {
    var __s516local0 = Date.now();
    if (__s516local0 - this.lastMouseDownTime < 500 && this.consecutiveMouseClicks < 3 && !__s516param1) {
      this.consecutiveMouseClicks++;
    } else {
      this.consecutiveMouseClicks = 1;
    }
    if (this.consecutiveMouseClicks > 1) {
      var __s516local1 = __s516param0;
      var __s516local2 = __s516param0;
      var __s516local3 = this.latestLayout.drawingTokens.filter(function (__s521param0) {
        return __s521param0.type === "plain";
      }).map(function (__s523param0) {
        return characters(__s523param0.text);
      });
      var __s516local4 = __dep_exact_f45fa64c7a371373(__s516local3);
      if (this.consecutiveMouseClicks === 2) {
        __s516local1 = __s516local4.slice(0, __s516local1 + 1).join("").search(/(\w+$)|(\W$)/);
        __s516local2 = __s516local4.slice(__s516local2).join("").search(/\W|$/);
      } else if (this.consecutiveMouseClicks === 3) {
        __s516local1 = __s516local4.slice(0, __s516local1 + 1).join("").search(/[^\n]+$/);
        __s516local2 = __s516local4.slice(__s516local2).join("").search(/\n|$/);
      }
      this._selectionBeginIndex = __s516local1;
      this._selectionEndIndex = Math.max(__s516param0 + __s516local2, __s516local1 + 1);
    }
    this.lastMouseDownTime = __s516local0;
  };
  TextField.FontRestriction = null;
  TextField.isMobileKeyboardShown = false;
  TextField.additionalCacheWidth = 0;
  TextField.additionalCacheHeight = 0;
  TextField.scaleCacheForTextfieldsWithFilters = true;
  TextField.scaleHTMLByPixelDensity = false;
  TextField.CACHE_UPDATED_EVENT_TYPE = "TEXTFIELD_CACHE_UPDATED";
  TextField.CACHE_UPDATED_EVENTS_ENABLED = false;
  return TextField;
}(__s0local1);
function parsePlainText(__s527param0) {
  return __s527param0.split(/(\n)/).map(function (__s529param0) {
    if (__s529param0 === "\n") {
      return {
        type: "newline"
      };
    } else {
      return {
        type: "plain",
        text: __s529param0
      };
    }
  });
}
function parseHTMLText(__s533param0) {
  for (var __s533local0 = __s533param0.split(/(\[\/?[a-zA-Z][^\]]+]|<[^<>]+[<>]|\n)/), __s533local1 = [], __s533local2 = 0; __s533local2 < __s533local0.length; __s533local2 += 2) {
    var __s533local3 = __s533local0[__s533local2];
    var __s533local4 = __s533local0[__s533local2 + 1];
    __s533local1.push({
      type: "plain",
      text: __s533local3
    });
    if (__s533local4) {
      if (__s533local4 === "\n" || __s533local4 === "<br>" || __s533local4 === "<br/>") {
        __s533local1.push({
          type: "newline"
        });
      } else if (__s533local4.endsWith("<")) {
        if (__s533local9 = /<(\d+)([^<]+)</.exec(__s533local4)) {
          var __s533local5 = __s533local9[1];
          var __s533local6 = __s533local9[2];
          __s533local1.push({
            type: "start-link",
            linkId: __s533local5
          });
          __s533local1.push({
            type: "plain",
            text: __s533local6
          });
          __s533local1.push({
            type: "end-link"
          });
        } else {
          __s0local10.error("skipped tag part", __s533local4);
        }
      } else if (__s533local4[1] === "/") {
        if (__s533local4 === "[/url]") {
          __s533local1.push({
            type: "end-link"
          });
        } else if (__s533local4 === "[/color]" || __s533local4 === "[/font]") {
          __s533local1.push({
            type: "pop-last-format-augmentation"
          });
        } else if (__s533local4 === "</a>") {
          __s533local1.push({
            type: "end-link"
          });
        } else if (__s533local4 === "</b>") {
          __s533local1.push({
            type: "push-format-augmentation",
            partialFormat: {
              bold: false
            }
          });
        }
      } else {
        for (var __s533local7 = /(\w+)(?:=((?:"[^"]*")|(?:'[^']*')|(?:\S+)))?/g, __s533local8 = __s533local4.slice(1, -1), __s533local9 = undefined, __s533local10 = []; __s533local9 = __s533local7.exec(__s533local8);) {
          var __s533local11 = __s533local9[1];
          var __s533local12 = __s533local9[2];
          if (!!__s533local12 && (__s533local12[0] === "'" || __s533local12[0] === "\"")) {
            __s533local12 = __s533local12.slice(1, -1);
          }
          __s533local10.push([__s533local11, __s533local12]);
        }
        var __s533local13 = __s533local10.length > 0 ? __s533local10[0][0] : "";
        switch (__s533local13) {
          case "font":
            var __s533local14 = {};
            for (var __s533local15 = 1, __s533local16 = __s533local10.length; __s533local15 < __s533local16; __s533local15++) {
              __s533local14[__s533local10[__s533local15][0]] = __s533local10[__s533local15][1];
            }
            __s533local1.push({
              type: "push-format-augmentation",
              partialFormat: __s533local14
            });
            break;
          case "url":
            var __s533local17 = __s533local10[0][1];
            __s533local1.push({
              type: "start-link",
              linkId: __s533local17
            });
            break;
          case "b":
            __s533local1.push({
              type: "push-format-augmentation",
              partialFormat: {
                bold: true
              }
            });
            break;
          case "color":
            __s533local1.push({
              type: "push-format-augmentation",
              partialFormat: {
                color: __s533local10[0][1]
              }
            });
            break;
          case "a":
            var __s533local18 = "";
            var __s533local19 = 1;
            for (__s533local16 = __s533local10.length; __s533local19 < __s533local16; __s533local19++) {
              if (__s533local10[__s533local19][0] === "href") {
                __s533local18 = __s533local10[__s533local19][1];
                break;
              }
            }
            __s533local1.push({
              type: "start-link",
              linkId: __s533local18,
              isAnchorLink: true
            });
            break;
          case "content":
            break;
          default:
            __s0local10.error("parseHTML: Could not match tag name", __s533local13, __s533local10);
        }
      }
    }
  }
  return __s533local1;
}
function characters(__s557param0) {
  for (var __s557local0 = 0, __s557local1 = __s557param0.length, __s557local2 = []; __s557local0 < __s557local1 - 1; ++__s557local0) {
    var __s557local3 = __s557param0.charCodeAt(__s557local0);
    if (__s557local3 >= 55296 && __s557local3 <= 56319 && (__s557local3 = __s557param0.charCodeAt(__s557local0 + 1)) >= 56320 && __s557local3 <= 57343) {
      __s557local2.push(__s557param0.slice(__s557local0, __s557local0 + 2));
      ++__s557local0;
    } else {
      __s557local2.push(__s557param0.charAt(__s557local0));
    }
  }
  __s557local2.push(__s557param0.charAt(__s557local0));
  return __s557local2;
}
exports.TextField = __s0local13;
