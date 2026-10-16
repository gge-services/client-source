Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function HighlightAndClearInputTextBehaviour(__s3param0, __s3param1, __s3param2 = true, __s3param3 = true) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._itxt_text = __s3param1;
    __s3local0._defaultText = __s3local0._itxt_text.text;
    __s3local0._hasDefaultText = __s3param2;
    __s3local0._interceptEnter = __s3param3;
    __s3local0._onEnterPressSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.disp.mc_selected.btn_clear], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(HighlightAndClearInputTextBehaviour, __s1param0);
  HighlightAndClearInputTextBehaviour.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    if (this._itxt_text) {
      this._itxt_text.focusIn.add(this.bindFunction(this.onFocusInSearchText));
      this._itxt_text.focusOut.add(this.bindFunction(this.onFocusOutSearchText));
      this._itxt_text.keyDown.add(this.bindFunction(this.onSearchKeyDown));
      this._onEnterPressSignal.removeAll();
    }
    if (this.disp) {
      this.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    }
  };
  HighlightAndClearInputTextBehaviour.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    if (this._itxt_text) {
      if (this._itxt_text.textContentVO) {
        this._itxt_text.textContentVO.stringValue = this._defaultText;
      }
      this._itxt_text.focusIn.remove(this.bindFunction(this.onFocusInSearchText));
      this._itxt_text.focusOut.remove(this.bindFunction(this.onFocusOutSearchText));
      this._itxt_text.keyDown.remove(this.bindFunction(this.onSearchKeyDown));
    }
    if (this.disp) {
      this.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.mc_selected.visible = false;
    }
  };
  HighlightAndClearInputTextBehaviour.prototype.onMouseDown = function (__s14param0) {
    switch (__s14param0.target) {
      case this.disp.mc_selected.btn_clear:
        this._itxt_text.clearText();
        if (this._hasDefaultText && this._itxt_text.text == "" && this._hasDefaultText) {
          this._itxt_text.textContentVO.stringValue = this._defaultText;
        }
        this._itxt_text.change.dispatch(null);
        this._itxt_text.focusOut.dispatch(null);
    }
  };
  HighlightAndClearInputTextBehaviour.prototype.onFocusInSearchText = function (__s18param0) {
    this.disp.mc_selected.visible = true;
    if (this._itxt_text.text == this._defaultText && this._hasDefaultText) {
      this._itxt_text.clearText();
    }
  };
  HighlightAndClearInputTextBehaviour.prototype.onFocusOutSearchText = function (__s21param0) {
    this.disp.mc_selected.visible = false;
    if (this._itxt_text.text == "" && this._hasDefaultText) {
      this._itxt_text.textContentVO.stringValue = this._defaultText;
    }
  };
  HighlightAndClearInputTextBehaviour.prototype.onSearchKeyDown = function (__s24param0) {
    if (__s24param0.key == __dep_exact_81dacdf05bd32292.Keyboard.ENTER && this._interceptEnter) {
      document.activeElement.blur();
      this._onEnterPressSignal.dispatch();
    }
  };
  HighlightAndClearInputTextBehaviour.prototype.isEmpty = function () {
    return this._hasDefaultText && this._itxt_text.text == this.defaultText || this._itxt_text.text == "";
  };
  Object.defineProperty(HighlightAndClearInputTextBehaviour.prototype, "text", {
    get: function () {
      if (this.isEmpty()) {
        return "";
      } else {
        return this._itxt_text.text;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HighlightAndClearInputTextBehaviour.prototype, "defaultText", {
    get: function () {
      return this._defaultText;
    },
    set: function (__s35param0) {
      this._defaultText = __s35param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(HighlightAndClearInputTextBehaviour.prototype, "onEnterPressSignal", {
    get: function () {
      return this._onEnterPressSignal;
    },
    enumerable: true,
    configurable: true
  });
  return HighlightAndClearInputTextBehaviour;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.HighlightAndClearInputTextBehaviour = __s0local1;
